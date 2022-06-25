import React from "react";
import "./main.css";

import PostCard from "./PostCard/PostCard";
import Header from "../../components/Header/Header";
import Banner from "../../components/Banner/Banner";
import Footer from "../../components/Footer/Footer";

function Home() {
  return (
    <>
      <Header />
      <Banner />
      <PostCard />
      <Footer />
    </>
  );
}

export default Home;
