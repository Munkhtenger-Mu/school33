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

const Version2 = ({ info2, img2, title2 }) => {
  const control = useAnimation()
  const [ref, inView] = useInView()

  useEffect(() => {
    if (inView) {
      control.start("visible")
    }
  }, [control, inView])

  return (
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
          gap: "2rem",
          marginLeft:"50px"
        }}
      >
        <div
          style={{
            wordBreak: "break-word",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <h1>{title2}</h1>
          <p style={{ marginTop: "20px" }}>{info2}</p>
        </div>
        <img
          src={img2}
          alt="image"
          style={{ objectFit: "cover", width: "100vh", borderRadius:"3px" }}
        />
      </div>
    </motion.div>
  )
}
export default Version2
