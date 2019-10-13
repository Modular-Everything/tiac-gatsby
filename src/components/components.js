import Page from './page'
import Grid from './grid'
import Teaser from './teaser'
import Feature from './feature'
import Slider from './slider'
import Markdown from './markdown'
import ComponentNotFound from './component-not-found'

const ComponentList = {
  page: Page,
  grid: Grid,
  teaser: Teaser,
  feature: Feature,
  slider: Slider,
  markdown: Markdown,
}

const Components = type => {
  if (typeof ComponentList[type] === 'undefined') {
    return ComponentNotFound
  }
  return ComponentList[type]
}

export default Components
