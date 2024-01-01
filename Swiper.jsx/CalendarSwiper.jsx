import { Swiper, SwiperSlide } from "swiper/react"
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Parallax,
  Keyboard
} from "swiper/modules"
import "swiper/swiper-bundle.css"
import "swiper/css/pagination"
import "swiper/css/navigation"
import { NavLink } from "react-router-dom"
export const CalendarSwiper = ({ slides }) => {
  return (
    <div
      style={{ width: "100%", height: "100%", overflow: "hidden" }}
      data-swiper-parallax="-23%"
    >
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Parallax, Keyboard]}
        spaceBetween={1}
        slidesPerView={1}
        navigation={true}
        keyboard={{
          enabled: true,
        }}
        speed={2000}
        parallax={true}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.EventsImage}>
            <NavLink to="/calendar">
              <div
                style={{
                  overflow: "hidden",
                  borderRadius: "3px",
                  width: "100vmin",
                  height: "47vh",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "auto",
                }}
              >
                <img
                  src={slide.EventsImage}
                  alt={slide.title}
                  data-swiper-parallax="-1000"
                  style={{
                    height: "160%",
                    objectFit: "cover",
                  }}
                />
              </div>
            </NavLink>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
