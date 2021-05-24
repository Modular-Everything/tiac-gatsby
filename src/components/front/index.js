import React from 'react'
import * as markdownit from 'markdown-it'
import './front.css'
import { AnimateIn } from '../reveal';

const ListItem = props => {
  const md = markdownit()
  md.use(require('markdown-it-highlightjs'))

  if (!props.children) {
    return (
      <li className="h-auto flex">
        <span className="text-xxs font-normal mr-2 pt-2 md:text-xs lg:text-lg lg:pt-6 lg:mr-4">
          {props.num < 10 ? '0' + props.num : props.num}
        </span>
        <span
          className={
            `text-xl md:text-3xl lg:text-6xl font-semibold ` +
            (props.isDone ? `line-through` : ` `)
          }
        >
          {props.goal}
        </span>
      </li>
    )
  } else {
    const htmlContent = md.render(props.children)
    return (
      <li className="h-auto flex flex-col">
        <div className="flex">
          <span className="text-xxs font-normal mr-2 pt-2 md:text-xs lg:text-lg lg:pt-6 lg:mr-4">
            {props.num < 10 ? '0' + props.num : props.num}
          </span>
          <span
            className={
              `text-xl md:text-3xl lg:text-6xl font-semibold ` +
              (props.isDone ? `line-through` : ` `)
            }
          >
            {props.goal}
          </span>
        </div>
        <div
          className="text-sm font-normal leading-relaxed block mt-6 mb-10 w-11/12 sm:max-w-lg lg:max-w-2xl lg:ml-8"
          dangerouslySetInnerHTML={{ __html: htmlContent }}
        ></div>
      </li>
    )
  }
}

const Front = props => {
  return (
    <div className="container my-6">
      <h1 className="text-brand-gray-800 text-xl md:text-3xl lg:pt-6 lg:mr-4-gray-800 text-xl lg:text-6xl font-semibold mb-4">
        {props.blok.title}
      </h1>

        <ul className="front-content text-brand-gray-800">
            {props.blok.goal.map((goal, index) => {
              if (!goal.extra_copy) {
                return (
                  <AnimateIn triggerOnce={false}>
                    <ListItem
                      key={index}
                      goal={goal.goal_text}
                      isDone={goal.done}
                      num={index + 1}
                    />
                  </AnimateIn>
                )
              } else {
                return (
                  <AnimateIn triggerOnce={false}>
                    <ListItem
                      key={index}
                      goal={goal.goal_text}
                      isDone={goal.done}
                      num={index + 1}
                    >
                      {goal.extra_copy}
                    </ListItem>
                  </AnimateIn>
                )
              }
            })}
        </ul>
    </div>
  )
}

export default Front
