import React from 'react'

const ProjectVideo = ({ videoUrl }) => {
  const videoRef = React.useRef(null)

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting === true) {
          videoRef.current.play()
        } else {
          videoRef.current.pause()
        }
      },
      {
        threshold: 0.5,
      }
    )

    observer.observe(videoRef.current)

    return () => observer.unobserve(videoRef.current)
  }, [])

  return (
    <video
      ref={videoRef}
      height="100%"
      width="100%"
      className="absolute"
      autoPlay
      loop
      muted
      playsInline
    >
      <source src={videoUrl} type="video/mp4"></source>
    </video>
  )
}

export default ProjectVideo
