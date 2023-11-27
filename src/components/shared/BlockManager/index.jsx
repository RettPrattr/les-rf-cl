import BrandFooter from '@/components/BrandFooter'
import ItemCards from '@/components/ItemsCards'
import Story from '@/components/Story'
import Video from '@/components/Video'
import FixedButton from '@/components/atoms/FixedButton'
import Form from '@/components/atoms/Form'
import About from '@/components/About'
import BigText from '@/components/BigText'
import Header from '@/components/Header'
import SliderBlock from '@/components/SliderBlock'
import PromoCover from '@/components/PromoCover'
import Promo from '@/components/Promo'
import Seo from '@/components/layouts/SEO'
import TextCards from '@/components/TextCards'
import Tabs from '@/components/atoms/Tabs'
import Text from '@/components/Text'
import TinyFooter from '@/components/TinyFooter'
import PreviewCards from '@/components/PreviewCards'
import MapBlock from '@/components/MapBlock'
import ContentCards from '@/components/ContentCards'
import Characteristics from '@/components/Characteristics'

import dynamic from "next/dynamic";


// const StoryDynamic = dynamic(() => import("@/components/Story"), {ssr: false});


const getBlockComponent = ({ __component, ...rest }, index) => {
  let Block;


  console.log("component", __component)

  switch (__component) {
    case 'blocks.about': Block = About; break;
    case 'blocks.text': Block = Text; break;
    case 'blocks.brand-footer': Block = BrandFooter; break;
    case 'blocks.items-cards': Block = ItemCards; break;
    case 'blocks.text-cards': Block = TextCards; break;
    case 'blocks.big-text': Block = BigText; break;
    case 'blocks.video': Block = Video; break;
    case 'blocks.fixed-button': Block = FixedButton; break;
    case 'blocks.form': Block = Form; break;
    case 'blocks.story': Block = Story; break;
    case 'blocks.header': Block = Header; break;
    case 'shared.seo': Block = Seo; break;
    case 'blocks.slider-block': Block = SliderBlock; break;
    case 'blocks.tabs': Block = Tabs; break;
    case 'blocks.promo-cover': Block = PromoCover; break;
    case 'blocks.promo': Block = Promo; break;
    case 'blocks.tiny-footer': Block = TinyFooter; break;
    case 'blocks.preview-cards': Block = PreviewCards; break;
    case 'blocks.content-cards': Block = ContentCards; break;
    case 'blocks.map-block': Block = MapBlock; break;
    case 'blocks.characteristics': Block = Characteristics; break;
  }

  return Block ? <Block key={`index-${index}`} {...rest} /> : null;
};

const BlockManager = ({ blocks }) => {
  return <div>{blocks.map(getBlockComponent)}</div>;
};

BlockManager.defaultProps = {
  blocks: [],
};

export default BlockManager;