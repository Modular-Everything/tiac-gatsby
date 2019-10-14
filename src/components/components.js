import Page from './page'
import Grid from './grid'
import Slider from './slider'
import Markdown from './markdown'
import Divider from './divider'
import Image from './image'
import ComponentNotFound from './component-not-found'

const ComponentList = {
  page: Page,
  grid: Grid,
  slider: Slider,
  markdown: Markdown,
  divider: Divider,
  image: Image,
}

const Components = type => {
  if (typeof ComponentList[type] === 'undefined') {
    return ComponentNotFound
  }
  return ComponentList[type]
}

export default Components
