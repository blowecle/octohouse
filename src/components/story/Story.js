import SimpleParallax from '../parallax/SimpleParallax';
import ParallaxComponent from '../parallax/ParallaxComponent';
import ParallaxMultiLayer from '../parallax/ParallaxMultilayer';
import TextScroll from '../parallax/TextScroll';

const Story = () => {
  return (
    <>
        <SimpleParallax />
        <ParallaxComponent />
        <ParallaxMultiLayer />
        <TextScroll />
    </>
  )
}

export default Story;