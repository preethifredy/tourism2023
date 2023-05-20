import LinkButton from '@/app/components/LinkButton';
import { DestinationCard } from '@/app/components/page';
import Section from '@/app/components/Section';
import React from 'react';

import { Row } from "react-bootstrap";

import { destinationItems } from '../data';

const Discover = () => {
  return (
  
    <Section
      id="block-discover"
      className="section-block position-relative bg-white"
      title={`Discover Kerala`}
      description={`Few places on earth can charm the traveller in you like Kerala does. Check out this endless list of alluring destinations and you will find out why.`}
      isFluid={false}
      isContainerRelative={true}
      renderedIn={`container`}
    >
      <Row className="box-shadow mx-0">
     
        {destinationItems.map((destination, key) => (
          <DestinationCard {...destination} key={key} />
        ))}
      </Row>
      <LinkButton
        isAbsolute={true}
        isCustom={true}
        link={`#`}
        linkText={`explore`}
      />
    </Section>
  );
};

export default Discover;
