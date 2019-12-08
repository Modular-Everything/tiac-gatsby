import Page from './page'
import Grid from './grid'
import Slider from './slider'
import Markdown from './markdown'
import Divider from './divider'
import Image from './image'
import Video from './video'
import YouTubeEmbed from './youtube'
import VimeoEmbed from './vimeo'
import ComponentNotFound from './component-not-found'

const ComponentList = {
  page: Page,
  grid: Grid,
  slider: Slider,
  markdown: Markdown,
  divider: Divider,
  image: Image,
  video: Video,
  youtube: YouTubeEmbed,
  vimeo: VimeoEmbed,
}

const Components = type => {
  if (typeof ComponentList[type] === 'undefined') {
    return ComponentNotFound
  }
  return ComponentList[type]
}

export default Components
