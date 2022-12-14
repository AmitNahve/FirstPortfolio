import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';
import {IoLogoWhatsapp} from 'react-icons/io'

const Hero = (props) => (
  <Section row nopadding id="about">
    <LeftSection>
      <SectionTitle main center>
        Welcome To<br/> Amit Nahve Portfolio
      </SectionTitle>
      <SectionText>
      Graduated software development course at Sela College as part of the "Combat Soldiers to the High tech" program, looking for my first position as a junior full-stack developer. Person of high ethics and morals, great people skills, ability to work as part of a team in complex and stressful environments, And work on different subjects simultaneously and multitasking. Experienced in leading, managing, and driving people.
      </SectionText>
      <Button onClick={()=> window.location = "https://api.whatsapp.com/send?phone=9720584008775&text=Hello%2C%20I'm%20here%20to%20tell%20you%20about%20your%20next%20job"}><IoLogoWhatsapp size="3rem" style={{}}></IoLogoWhatsapp>Contact me</Button>
    </LeftSection>
  </Section>

);

export default Hero;