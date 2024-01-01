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

const Version3 = ({ img }) => {
  const control = useAnimation()
  const [ref, inView] = useInView()

  useEffect(() => {
    if (inView) {
      control.start("visible")
    }
  }, [control, inView])

  return (
    <div style={{ width: "100%" }}>
      <motion.div
        ref={ref}
        variants={scrollVariant}
        initial="hidden"
        animate={control}
      >
        <div
          style={{
            width: "90%",
            margin: "auto",
          }}
        >
          <img
            src={img}
            alt="image"
            style={{
              objectFit: "cover",
              width: "100%",
              height: "50vh",
              borderRadius: "3px",
              backgroundBlendMode: "multiply",
              backgroundColor: "#867575",
            }}
          />
        </div>
      </motion.div>
    </div>
  )
}
export default Version3
