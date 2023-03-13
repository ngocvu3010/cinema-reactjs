import {useEffect, useState} from "react";
import Header from '../../components/Header/Header';
import Pagination from '../../components/Pagination/Pagination'
import SearchBar from '../../components/SearchBar/Search_bar'
import Sidebar from "../../components/Sidebar/Sidebar";
import './movies.scss'
import {MOVIES_PER_PAGE} from '../../constants/index'
import SortMovieName from "../../components/sort/SortMovieName";
import { Link } from "react-router-dom";


const Movies = () => {
  const [movies, setMovies] = useState([])
  const [totalMovies, setTotalMovies] = useState('')
  const [selectedPage, setSelectedPage] = useState(1)
  const [categories, setCategories] = useState([])
  const [selectCategories, setSelectCategories] = useState([])
  const [term, setTerm] = useState('')
  const debouncedSearchTerm = useDebounce(term, 500);
  const [sortMovieName, setSortMovieName] = useState('')

  useEffect(() => {
    const movie_name = debouncedSearchTerm === '' ? '' : `name_like=${debouncedSearchTerm}&`;
    const categories = selectCategories.length ? (selectCategories.map((i) => "categoryId=" +i.toString()).join("&").concat("&")) : ''
    const paginate = `_page=${selectedPage}&_limit=${MOVIES_PER_PAGE}&`
    const selectSort = `_sort=name&_order=${sortMovieName}`
    const host = process.env.REACT_APP_HOST
    const url = host + '/movies?' + paginate + movie_name + categories + selectSort;
    fetch(url)
    .then((res) => {
      setTotalMovies(res.headers.get('x-total-count'))
      return res.json()
    }).then((movies) => {
      setMovies(movies)
    })
  },[selectedPage,
    debouncedSearchTerm,
    selectCategories,
    sortMovieName])
  useEffect(() => {
    const url = process.env.REACT_APP_HOST + '/categories'
    fetch(url)
    .then(res => res.json())
    .then((categories) => {
      setCategories(categories)})
  }, [])

  const category_list = (movie) => {
    for (let i = 0; i < categories.length; i++) {
      if (categories[i].id === movie.categoryId) {
        return  categories[i].name;
      }
    }
  }

  function useDebounce(value, delay) {
    const [debouncedValue, setDebouncedValue] = useState(value);
  
    useEffect(
      () => {
        const handler = setTimeout(() => {
          setDebouncedValue(value);
        }, delay);

        return () => {
          clearTimeout(handler);
        };
      },
      [value, delay]
    );
  
    return debouncedValue;
  }

  return (
    <>
      <Header />
      <div className="container pt-5">
        <nav className="navbar bg-body-tertiary">
          <div className="container-fluid">
            <div className="d-flex flex-row justify-content-between">
              <SearchBar term={term} onChangeTerm={setTerm}/>
              <SortMovieName setSortMovieName={setSortMovieName} />
            </div>
          </div>
        </nav>
        <div className="row">
          <div className="col-lg-3">
            <Sidebar 
              categories={categories}
              selectCategories={selectCategories}
              setSelectCategories={setSelectCategories}></Sidebar>
          </div>
          <div className="col-lg-9">
            {movies && movies.length ? (
              <div className="row">
                {movies.map((movie) => (
                    <div key={movie.id} className="col-lg-4 col-md-4 col-sm-8 col-xs-12 padding-right-30 padding-left-30 padding-bottom-30">
                      <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-8 col-xs-8">
                          <div className="product-item no-padding">
                            <div className="pi-img-wrapper">
                                <img className="img-responsive border-radius-20" alt="" src={movie.images[0]} />
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-12 col-md-12 col-sm-8 col-xs-8">
                          <div className="film-info film-xs-info">
                              <h3 className="text-center text-sm-left text-xs-left bold margin-top-5 font-sm-18 font-xs-14" style={{maxHeight: 30+"px", minHeight: 30+"px"}}>
                                <Link to={`/movies/${movie.slug}`}>{movie.name}</Link>
                              </h3>
                              <ul className="list-unstyled font-lg font-family-san font-sm-15 font-xs-14">
                                <li style={{maxHeight: 50+"px"}}><span className="bold">
                                    Thể loại:</span> {category_list(movie)}</li>
                                <li><span className="bold">
                                    Thời lượng:</span> {movie.times} 
                                    phút
                                </li>
                              </ul>
                          </div>
                          <div className="text-center padding-bottom-30" style={{minHeight: 85+"px"}}>
                            <a style={{display: "block"}} className="btn btn-2 btn-mua-ve2 fancybox-fast-view">
                              <span><i className="fa fa-ticket mr3"></i></span>
                                MUA VÉ
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                ))}
                <div className="row">
                  <Pagination 
                    totalMovies={totalMovies}
                    setSelectedPage={setSelectedPage}
                    selectedPage={selectedPage}
                  />
                </div>
              </div>
          ) : (
            <p> Không có phim </p>
          )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Movies;
