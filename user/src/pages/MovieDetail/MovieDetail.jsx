import './movie.scss'
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Tabs from "../../components/MovieDetail/Tabs";
import Modal from "../../components/MovieDetail/Modal";
import MovieInfo from "../../components/MovieDetail/MovieInfo";
import ShowTime from "../../components/MovieDetail/ShowTime";

const MovieView = ({currentUser}) => {
    const { slug } = useParams();
    const [movie, setMovie] = useState({})
    const [openModal, setOpenModal] = useState(false);
    useEffect(() => {
        const url = process.env.REACT_APP_HOST + `/movies?slug=` + slug + '&_expand=category';
        fetch(url)
        .then(res => res.json())
        .then(movie => setMovie(movie[0]))
        }, []);

        document.title = movie?.name;
    return (
    <>
        <Header currentUser={currentUser} />
        <div className="container pt-5 movie-detail">
            <h3 className="breadcrumbs margin-bottom-20">
                <Link to="/">Trang chủ</Link>
                <Link to="/movies">Phim</Link>
                <span> {movie?.name} </span></h3>
            <div className="row">
                <div className="col-lg-3 col-md-4 col-sm-4 col-xs-16">
                    <div className="pi-img-wrapper">
                        <img className="img-responsive border-radius-20" style={{width: '100%'}} alt="" src={movie?.images} />
                    </div>
                </div>
                <div className="col-lg-9 col-md-8 col-sm-8 col-xs-16 padding-xs-top-15">
                    <h1 className="bold no-margin margin-bottom-15"> {movie?.name} </h1>
                    <p className="margin-bottom-15 font-lg font-family-san text-justify">
                        {movie?.description}
                    </p>
                    <MovieInfo 
                        label="Đạo diễn:"
                        content="Võ Thanh Hòa"  
                    />
                    <MovieInfo 
                        label="Diễn viên:"
                        content="Anh Tú, Mạc Văn Khoa, Ngọc Phước, Nhất Trung, NSƯT Mỹ Duyên, Đại Nghĩa, Lâm Vỹ Dạ, BB Trần, Cát Tường, Hứa Minh Đạt"  
                    />
                    <MovieInfo 
                        label="Thể loại:"
                        content={movie?.category?.name}
                    />
                    <MovieInfo 
                        label="Thời lượng:"
                        content={movie?.times + " phút"}
                    />
                    <MovieInfo 
                        label="Ngôn ngữ:"
                        content="Tiếng Việt"
                    />
                    <MovieInfo 
                        label="Ngày khởi chiếu:"
                        content={movie?.premieres}
                    />
                 </div>
            </div>
            <div className="row">
                 <Tabs>
                    <div date="10-3">
                        <div className="row">
                            <div className="col-md-16 col-sm-16 col-xs-16" >
                                <span className="font-lg bold font-transform-uppercase">2D Phụ đề</span>
                            </div>
                            <ShowTime
                                time="17:15"
                                seats="134"    
                                setOpenModal={() => setOpenModal(true)}
                            />
                            <ShowTime
                                time="17:15"
                                seats="134"
                                setOpenModal={() => setOpenModal(true)} 
                            />
                        </div>
                    </div>
                    <div date="11-3">
                        <div className="row">
                            <div className="col-md-16 col-sm-16 col-xs-16" >
                                <span className="font-lg bold font-transform-uppercase">2D Phụ đề</span>
                            </div>
                            <ShowTime
                                time="17:15"
                                seats="134"
                                setOpenModal={() => setOpenModal(true)}
                            />
                        </div>
                    </div>
                    <div date="12-3">
                        <div className="row">
                            <div className="col-md-16 col-sm-16 col-xs-16" >
                                <span className="font-lg bold font-transform-uppercase">2D Phụ đề</span>
                            </div>
                            <ShowTime
                                time="17:30"
                                seats="60"
                                setOpenModal={() => setOpenModal(true)}  
                            />
                            <ShowTime
                                time="17:15"
                                seats="134"
                                setOpenModal={() => setOpenModal(true)}
                            />
                            <ShowTime
                                time="18:00"
                                seats="34"
                                setOpenModal={() => setOpenModal(true)}
                            />
                            <ShowTime
                                time="19:45"
                                seats="111"
                                setOpenModal={() => setOpenModal(true)}
                            />
                        </div>
                    </div>
                </Tabs>
                <Modal
                    open={openModal} 
                    onClose={() => setOpenModal(false)}
                    movie = {movie}
                />
            </div>
        </div>
        <div className="fullwidthbanner-container">
            <div className="container">
                <div className="text-center margin-top-20">
                    <ul className="nav tab-films">
                        <li className="active">
                            <a data-toggle="tab" className="no-padding">
                            <h1 className="bold">TRAILER</h1>
                        </a></li>
                    </ul>
                </div>
                <div className="row margin-bottom-20">
                    <div className="col-md-12 col-md-offset-2 margin-bottom-35">
                        <iframe style={{width: '100%', height: '60vh'}} src={movie?.trailer} ></iframe>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
    </>
    )
}

export default MovieView;
