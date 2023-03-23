import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import './style.scss'

const Home = ({currentUser}) => {
  return (
    <>
      <Header  currentUser={currentUser}/>
      <main className="main">Home</main>
      <Footer />
    </>
  );
};

export default Home;
