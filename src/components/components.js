import Page from './page'
import Grid from './grid'
import Teaser from './teaser'
import Feature from './feature'
import Slider from './slider'
import Markdown from './markdown'
import Divider from './divider'
import ComponentNotFound from './component-not-found'

const ComponentList = {
  page: Page,
  grid: Grid,
  teaser: Teaser,
  feature: Feature,
  slider: Slider,
  markdown: Markdown,
  divider: Divider,
}

const Components = type => {
  if (typeof ComponentList[type] === 'undefined') {
    return ComponentNotFound
  }
  return ComponentList[type]
}

export default Components
