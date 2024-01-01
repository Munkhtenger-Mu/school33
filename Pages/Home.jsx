import React from "react"
import harvard from "./vadim-sherbakov-d6ebY-faOO0-unsplash.jpg"
import Version1 from "./Components/imgLeft_txtR"
import Version2 from "./Components/imgRight_txtLeft"
import { CalendarSwiper } from "../Swiper.jsx/CalendarSwiper"
import slides from "../Swiper.jsx/CalendarData.json"
import { NewsSwiper } from "../Swiper.jsx/NewsSwiper"


function Home() {
  return (
    <div>
      <header>
        <img
          className="HomeImg"
          src={harvard}
          alt="harvard"
          style={{
            objectFit: "cover",
            height: "95vh",
            width: "100%",
          }}
        />
      </header>
      <div>
        <Version1
          title={"Эрүүл сурагч илүү сайн суралцдаг "}
          img={
            "https://www.harvard.edu/wp-content/uploads/2023/08/111621_features_RL_3687-2000x1333.jpg"
          }
        />

        <div
          style={{
            width: "90%",
            height: "55vh",
            margin: "80px auto",
            overflow: "hidden",
          }}
        >
          <h1>Upcoming events</h1>
          <div style={{ width: "100%" }}>
            <CalendarSwiper slides={slides} />
          </div>
        </div>

        <Version2
          title2={"Товч түүх"}
          info2={
            "Нийслэлийн тэргүүний Баянзүрх дүүргийн 33 дугаар сургууль анх 1966 онд ЗХУ-ын тусламжтайгаар баригдаж Баатар хот Москвагийн нэрэмжит сургууль нэртэйгээр нээгдэж байсан. 1980 онд Улаанбаатар хотын тэргүүний, 1985 онд Улсын тэргүүний сургууль болсон."
          }
          img2={
            "https://www.harvard.edu/wp-content/uploads/2023/08/111621_features_RL_3687-2000x1333.jpg"
          }
        />
        <div
          style={{
            width: "90%",
            height: "55vh",
            margin: "80px auto",
          }}
        >
          <h1>News</h1>
          <NewsSwiper slides={slides} />
        </div>
      </div>
    </div>
  )
}

export default Home
