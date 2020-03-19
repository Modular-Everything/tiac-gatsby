import ComponentNotFound from './component-not-found'
import Divider from './divider'
import Front from './front'
import Grid from './grid'
import Image from './image'
import Markdown from './markdown'
import Page from './page'
import Slider from './slider'
import Video from './video'
import YouTubeEmbed from './youtube'
import VimeoEmbed from './vimeo'
import Logo from './logo'

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
  front: Front,
  logo: Logo,
}

const Components = type => {
  if (typeof ComponentList[type] === 'undefined') {
    return ComponentNotFound
  }
  return ComponentList[type]
}

export default Components
