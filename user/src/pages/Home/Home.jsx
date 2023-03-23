/** @format */

import React, { useEffect, useState } from "react";
import { Carousel, Pagination, Tabs } from "antd";
import { Link } from "react-router-dom";

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Banner1 from "../../img/banner-1.png";
import Banner2 from "../../img/banner-2.jpg";
import Banner3 from "../../img/banner-3.png";
import { MOVIES_PER_PAGE } from "../../constants";
import "./style.scss";

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [totalMovies, setTotalMovies] = useState();
  const [selectedPage, setSelectedPage] = useState(1);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const host = process.env.REACT_APP_HOST;
    const url = `${host}/movies?_page=${selectedPage}&_limit=${MOVIES_PER_PAGE}`;
    fetch(url)
      .then((res) => {
        setTotalMovies(res.headers.get("x-total-count"));
        return res.json();
      })
      .then((movies) => {
        setMovies(movies);
      });
  }, [selectedPage]);

  useEffect(() => {
    const url = process.env.REACT_APP_HOST + "/categories";
    fetch(url)
      .then((res) => res.json())
      .then((categories) => {
        setCategories(categories);
      });
  }, []);

  const category_list = (movie) => {
    for (let i = 0; i < categories.length; i++) {
      if (categories[i].id === movie.categoryId) {
        return categories[i].name;
      }
    }
  };

  return movies && !!movies.length ? (
    <>
      <div className="d-flex flex-wrap gap-5 pt-3">
        {movies.map((movie) => (
          <div key={movie.id}>
            <Link to={`/movies/${movie.slug}`} className="pi-img-wrapper">
              <img
                className="img-responsive border-radius-20"
                alt="movie"
                src={movie.images[0]}
              />
            </Link>
            <div className="film-info film-xs-info pt-3">
              <h3 className="movie__title">
                <Link to={`/movies/${movie.slug}`}>{movie.name}</Link>
              </h3>
              <ul className="list-unstyled">
                <li>
                  <span className="bold">Thể loại:</span> {category_list(movie)}
                </li>
                <li>
                  <span className="bold">Thời lượng:</span> {movie.times}
                  phút
                </li>
              </ul>
            </div>
            <div className="w-100 btn btn-2 btn-mua-ve2">
              <span>
                <i className="fa fa-ticket mr3"></i>
              </span>
              MUA VÉ
            </div>
          </div>
        ))}
      </div>
      {totalMovies > MOVIES_PER_PAGE && (
        <div className="text-center pt-4">
          <Pagination
            current={selectedPage}
            pageSize={MOVIES_PER_PAGE}
            total={totalMovies}
            onChange={(page) => setSelectedPage(page)}
          />
        </div>
      )}
    </>
  ) : (
    <p> Không có phim </p>
  );
};

const Home = () => {
  const items = [
    {
      key: "1",
      label: `PHIM SẮP CHIẾU`,
      children: Movies(),
    },
    {
      key: "2",
      label: `PHIM ĐANG CHIẾU`,
      children: `Coming soon`,
    },
    {
      key: "3",
      label: `SUẤT CHIẾU ĐẶC BIỆT`,
      children: `Coming soon`,
    },
  ];

  return (
    <>
      <Header />
      <Carousel autoplay>
        <div>
          <img src={Banner1} alt="banner" />
        </div>
        <div>
          <img src={Banner2} alt="banner" />
        </div>
        <div>
          <img src={Banner3} alt="banner" />
        </div>
      </Carousel>

      <main className="main container py-5">
        <Tabs defaultActiveKey="1" items={items} size="large" />
      </main>
      <Footer />
    </>
  );
};

export default Home;
