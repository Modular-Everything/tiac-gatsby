import React from 'react'
import { Link } from 'gatsby'

const Video = props => (
  <div className="overflow-hidden relative">
    <div className="hidden sm:block sm:absolute sm:flex sm:justify-center sm:flex-col sm:items-center sm:w-full sm:h-full sm:z-10 sm:p-2 sm:bg-brand-black-overlay sm:opacity-0 sm:hover:opacity-100 transition-opacity transition-ease-in-out">
      <h2 className="text-xs sm:text-white">{props.name}</h2>
    </div>
    <video height="100%" width="100%" autoPlay loop muted playsInline>
      <source src={props.cover} type="video/mp4"></source>
    </video>
  </div>
)

const Image = props => (
  <div className="aspect-ratio-16/9 relative">
    <div className="hidden sm:block sm:absolute sm:flex sm:justify-center sm:flex-col sm:items-center sm:w-full sm:h-full sm:z-10 sm:p-2 sm:bg-brand-black-overlay sm:opacity-0 sm:hover:opacity-100 transition-opacity transition-ease-in-out">
      <h2 className="text-xs sm:text-white">{props.name}</h2>
    </div>
    <img
      src={props.cover}
      alt=""
      className="object-cover absolute top-0 left-0 w-full h-full"
    />
  </div>
)

const PrevNext = props => {
  const regex = RegExp(/(.mp4)/)
  const PrevProjectCover =
    props.prev !== undefined && props.prev.node.field_cover_string
  const NextProjectCover =
    props.next !== undefined && props.next.node.field_cover_string

  return (
    <div className="bg-brand-black">
      <div className="container pt-10 pb-20 sm:pl-8 sm:pr-8 sm:mx-auto">
        <ul className="flex justify-between text-xs mb-16 text-brand-gray-600">
          <li>
            {props.prev !== undefined && (
              <Link
                to="/"
                className="p-4 -ml-4 hover:bg-black text-white transition-ease-in-out transition-bg"
              >
                Previous Project
              </Link>
            )}
          </li>
          <li>
            {props.next !== undefined && (
              <Link
                to="/"
                className="p-4 -mr-4 hover:bg-black text-white transition-ease-in-out transition-bg"
              >
                Next Project
              </Link>
            )}
          </li>
        </ul>
        <ul className="flex justify-between">
          <li className="w-6/12 mr-2 border border-solid border-brand-gray-850">
            {props.prev !== undefined && (
              <Link to={props.prev.node.full_slug}>
                {regex.test(PrevProjectCover) ? (
                  <Video cover={PrevProjectCover} name={props.prev.node.name} />
                ) : (
                  <Image cover={PrevProjectCover} name={props.prev.node.name} />
                )}
              </Link>
            )}
          </li>
          <li className="w-6/12 ml-2">
            {props.next !== undefined && (
              <Link to={props.next.node.full_slug}>
                {regex.test(NextProjectCover) ? (
                  <Video cover={NextProjectCover} name={props.next.node.name} />
                ) : (
                  <Image cover={NextProjectCover} name={props.next.node.name} />
                )}
              </Link>
            )}
          </li>
        </ul>
      </div>
    </div>
  )
}

export default PrevNext
