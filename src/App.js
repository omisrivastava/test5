import React, { useState } from "react";
import Counter from "./components/Counter";
import "./App.css";
import Card from "./components/Card";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Footer from "./components/Footer";

function App() {
  const persons = [
    {
      name: "Utkarsh Ravi",
      post: "Chairperson",
      img: "https://cdn.sanity.io/images/mt5q69ne/production/fd407c1bcea12e75b79f301610ff215d9cf5a933-1872x1873.jpg",
    },
    {
      name: "Priyanshu Shekhar",
      post: "Vice Chairperson",
      img: "https://cdn.sanity.io/images/mt5q69ne/production/0dab05b21ad1de0d5e1cb32c35ffd24bafc45c2a-3444x4328.jpg?rect=0,0,3444,3946",
    },
    {
      name: "Saket Kumar",
      post: "Secretary",
      img: "https://cdn.sanity.io/images/mt5q69ne/production/4025a9bb03c6d954da7a75fc94e3062322663459-1080x1080.jpg",
    },
    {
      name: "Rohit Kumar",
      post: "Treasurer",
      img: "https://cdn.sanity.io/images/mt5q69ne/production/b42d06f39f81dc03fa8fa355351747dfe1ff6763-1443x1804.jpg",
    },
  ];
  return (
    <div className="App">

      {/* {persons.map((person, index) => (
        <Card
          name={person.name}
          post={person.post}
          img={person.img}
        />
      ))} */}

      {/* <Counter freq={1} name="Omi"/>
      <Counter freq={2} name="Lipi"/> */}


      <Navbar/>
      <Hero/>
      <About/>
      <Footer/>
    </div>
  );
}

export default App;
