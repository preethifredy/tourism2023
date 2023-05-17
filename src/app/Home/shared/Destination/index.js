import React from 'react';
import OwlCarousel from "react-owl-carousel";

import { Section, Place } from "@components";

import { places } from '../data';

const Destination = () => {
  return (
    <Section
      id="block-reg"
      className="reg-slide-block pt-5 mob-pt-0"
      renderedIn={`container`}
    >
      <OwlCarousel
        className="owl-theme"
        items={1}
        margin={0}
        loop={false}
        nav={true}
        dots={false}
        autoplay={false}
        smartSpeed={1200}
        autoplayTimeout={10000}
        navText={[
          "<img src='/icons/arrow-prev.svg'>",
          "<img src='/icons/arrow-next.svg'/>",
        ]}
      >
        {places.map((place, key) => (
          <Place {...place} key={key} />
        ))}
      </OwlCarousel>
    </Section>
  );
};

export default Destination;
