import React from "react"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { useEffect } from "react"
const scrollVariant = {
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.8 },
  },
  hidden: { opacity: 0, scale: 1, y: 100 },
}

const Version1 = ({ info, img, title }) => {
  const control = useAnimation()
  const [ref, inView] = useInView()

  useEffect(() => {
    if (inView) {
      control.start("visible")
    }
  }, [control, inView])

  return (
    <div style={{ width: "100%", height: "auto", }}>
      <motion.div
        ref={ref}
        variants={scrollVariant}
        initial="hidden"
        animate={control}
      >
        <div
          style={{
            width:"90%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            alignItems: "center",
            marginTop: "80px",
            wordWrap: "break-word",
            gap: "2rem",
            marginLeft:"50px"
          }}
        >
          <img
            src={img}
            alt="image"
            style={{ objectFit: "cover", width: "100vh", borderRadius: "3px" }}
          />
          <div
            style={{
              wordBreak: "break-word",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <h1>{title}</h1>
            <p style={{ marginTop: "20px" }}>{info}</p>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
export default Version1
