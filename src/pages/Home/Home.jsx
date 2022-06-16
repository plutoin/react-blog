import React from "react";
import Post from "./Post";
import Header from "../../components/Header/Header";
import About from "../../components/About/About";
import Banner from "../../components/Banner/Banner";
import Footer from "../../components/Footer/Footer";

function Main() {
  return (
    <>
      <Header />
      <Banner />
      <Post />
      <About />
      <Footer />
    </>
  );
}

export default Main;
