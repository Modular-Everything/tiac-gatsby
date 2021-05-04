import React from 'react';
import { useInView } from "react-intersection-observer";

export const AnimateIn = ({ threshold = 0.15, triggerOnce = true, ...remainingProps }) => {
  const [ref, inView] = useInView({ threshold, triggerOnce })

  return (
    <div
      ref={ref}
      style={{
        // adjust these as desired
        transition: "opacity 300ms, transform 300ms",
        opacity: inView ? 1 : 0,
        transform: `translateY(${inView ? 0 : 100}px)`,
      }}
      {...remainingProps}
    />
  )
}