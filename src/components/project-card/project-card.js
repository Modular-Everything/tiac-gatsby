import React from 'react'
import PropTypes from 'prop-types'

const ProjectCard = ({ meta }) => {
  return (
    <div>
      {meta.node.name}
      <aside>{meta.node.tag_list[0]}</aside>
      <hr />
    </div>
  )
}

export default ProjectCard

ProjectCard.propTypes = {
  meta: PropTypes.shape({
    node: PropTypes.shape({
      name: PropTypes.string.isRequired,
      tag_list: PropTypes.array,
    }),
  }).isRequired,
}
