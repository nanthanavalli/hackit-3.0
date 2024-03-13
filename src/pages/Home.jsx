import React, { useState, useEffect } from "react";
import styles from "../styles/pages/Home.module.css";
import csi from "../assets/images/csi.png";
import ait from "../assets/images/ait.png";
import mrcooper from "../assets/images/mr_cooper.png";
import characters from "../assets/images/characters.png";
import Timer from "../components/Timer";

const Home = () => {
  const [mouseCoords, setMouseCoords] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMouseCoords({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const parallaxStyles = {
    transform: `translate(-${mouseCoords.x / 150}px, -${
      mouseCoords.y / 150
    }px)`,
  };

  const bgParallaxStyles = {
    transform: `translate(${mouseCoords.x / 150}px, -${
      mouseCoords.y / 150
    }px)`,
  };

  return (
    <div className={styles.bgDiv} style={bgParallaxStyles} >
      <div className={styles.home} >
        <div className={styles.organizers}>
          <img src={csi} className={styles.csi} alt="" />
          <img src={ait} className={styles.ait} alt="" />
          <img src={mrcooper} className={styles.mc} alt="" />
        </div>
        <p className={styles.hackit}>HACK IT 3.0</p>
        <Timer />
        <img src={characters} className={styles.characters} style={parallaxStyles} alt="" />
      </div>
    </div>
  );
};

export default Home;