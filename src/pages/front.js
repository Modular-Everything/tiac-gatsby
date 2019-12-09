import React from 'react'
import Layout from '../components/layout'

const ListItem = props => {
  if (!props.children) {
    return (
      <li className="h-8 flex lg:h-auto">
        <span className="text-xxs font-normal mr-2 pt-2 lg:text-lg lg:pt-6 lg:mr-4">
          01
        </span>
        <span
          className={
            `text-xl lg:text-6xl font-semibold ` +
            (props.isDone ? `line-through` : ` `)
          }
        >
          {props.goal}
        </span>
      </li>
    )
  } else {
    return (
      <li className="h-auto flex flex-col">
        <div className="flex">
          <span className="text-xxs font-normal mr-2 pt-2 lg:text-lg lg:pt-6 lg:mr-4">
            01
          </span>
          <span
            className={
              `text-xl lg:text-6xl font-semibold ` +
              (props.isDone ? `line-through` : ` `)
            }
          >
            {props.goal}
          </span>
        </div>
        <div className="text-sm font-normal leading-relaxed block mt-6 mb-10 w-11/12 sm:max-w-lg lg:max-w-2xl lg:ml-8">
          {props.children}
        </div>
      </li>
    )
  }
}

const Front = () => {
  return (
    <Layout>
      <div className="container my-6">
        <h1 className="text-brand-gray-800 lg:text-lg lg:pt-6 lg:mr-4-gray-800 text-xl lg:text-6xl font-semibold mb-4">
          Got any life goals? I have.
        </h1>
        <ul className="text-brand-gray-800">
          <ListItem goal="Buy a house" isDone />
          <ListItem goal="Go to The Galapagos" />
          <ListItem goal="Restore a classic BMW" isDone />
          <ListItem goal="Live in Brooklyn" />
          <ListItem goal="Produce an album" />
          <ListItem goal="Write a book" isDone />
          <ListItem goal="Drive across America" isDone />
          <ListItem goal="Run the big 6 marathons" />
          <ListItem goal="Play on the Old Trafford pitch" />
          <ListItem goal="Learn how to tattoo" />
          <ListItem goal="Run a design studio" isDone>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do{' '}
            <a href="#" className="underline">
              eiusmod tempor
            </a>{' '}
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat.
          </ListItem>
          <ListItem goal="See all the seven wonders" />
          <ListItem goal="Finish the amateur tour" />
          <ListItem goal="Ride downhill in Whistler" isDone />
          <ListItem goal="Drive around Europe" isDone />
          <ListItem goal="Open a pizza place" isDone />
          <ListItem goal="Design a furniture range" />
          <ListItem goal="Go to Antarctica" />
          <ListItem goal="Run an art gallery" isDone />
          <ListItem goal="Live &amp; work abroad" isDone />
        </ul>
      </div>
    </Layout>
  )
}

export default Front
