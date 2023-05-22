import Essentials from "../components/Essentials/page"
import LinkButton from "../components/LinkButton"
import Section from "../components/Section"
import { Destination, Discover, Events, HomeStorySlider, KeralaStory, Memories, PromotionVideo, SocialGallery, Story, WhatNew } from "./shared/page"

const page = () => {
  return (
    <div>
      {/* <HomeStorySlider /> */}
      <WhatNew />
      <Essentials />
      <Story />
       <Memories />
      <Discover />
      {/* <KeralaStory /> */}
       <Events />
      <Destination />
      <SocialGallery />
      <Section
        id="block-video"
        className="section-block"
        isContainerRelative={true}
        renderedIn={`container`}
      >
        <PromotionVideo />
        <LinkButton
            isAbsolute={true}
            isCustom={true}
            link={`#`}
            linkText={`explore`}
          />
      </Section>
    </div>
  )
}

export default page


