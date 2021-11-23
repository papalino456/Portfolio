import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hi! I'm<br />
        Sebastian Barrio
      </SectionTitle>
      <SectionText>
        Im a software developer centered in python, c++ and javascript
      </SectionText>
      <Button onClick={()=> window.location = "#projects"}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;