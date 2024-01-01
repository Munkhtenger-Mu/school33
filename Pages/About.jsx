import React from "react";
import Version1 from "./Components/imgLeft_txtR";
import "../App.css"
import Version3 from "./Components/OnlyImage";
import harvard from "./vadim-sherbakov-d6ebY-faOO0-unsplash.jpg"
function About() {

  return (
    <div>
      <div>
        <Version1
          title={"About us"}
          info={
            "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
          }
          img={
            "https://www.harvard.edu/wp-content/uploads/2023/08/111621_features_RL_3687-2000x1333.jpg"
          }
        />
        <div className="AboutSecondContainer">
          <div style={{ width: "40%" }}>
            <div>
              <h2>Сургуулийн цаг</h2>
              <h3> 6:40 - хаалгаа нээнэ </h3>
              <h3> 7:45 - хичээл эхэлнэ </h3>
              <h3> 13:00 - хичээл тарна </h3>
            </div>
            <div>
              <h2>Хичээлийн цаг</h2>
              <h3> 1-р цаг 7:45 - 8:25 </h3>
              <h3> 2-р цаг 8:30 - 9:10 </h3>
              <h3> 3-р цаг 9:15 - 9:55 </h3>
              <h3> 4-р цаг 10:05 - 10:45 </h3>
              <h3> 5-р цаг 10:50 - 11:30</h3>
              <h3> 6-р цаг 11:35 - 12:15 </h3>
              <h3> 7-р цаг 12:20 - 13:00 </h3>
            </div>
          </div>
          <div
            className="Goal"
            style={{
              width: "60%",
              textAlign: "center",
              color: "#FFFFFF",
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <h2>БИДНИЙ ЗОРИЛГО</h2>
            <p style={{ fontSize: "20px", margin: "1% 10% 0 10%" }}>
              Эрдэм мэдлэгтэй, амьдрах ухаантай, бүтээлч, хүнлэг, энэрэнгүй,
              эрүүл чийрэг, иргэн төлөвшүүлэх
            </p>
          </div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            position: "absolute",
            marginBottom: "11%",
          }}
        >
          Lorem
        </h1>
        <h2 style={{ position: "absolute", margin: "auto 10%" }}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum
          vitae fugit deserunt odit, consectetur aspernatur, odio pariatur
          maiores in eligendi temporibus voluptatem quod sequi magnam enim
          exercitationem modi, voluptates iusto.
        </h2>
        <Version3 img={harvard} />
      </div>
    </div>
  )
}

export default About;