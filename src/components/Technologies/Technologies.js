import React from 'react';
import { DiFirebase, DiReact, DiZend, DiVisualstudio, DiDocker } from 'react-icons/di';
import { SiCsharp } from 'react-icons'
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () => (
  <Section id="tech">
    <SectionDivider />
    <br />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>I've Learned a range of technologies in the Web development world,
      From Back-end To Design
    </SectionText>
    {/* <List>
      <ListItem>

      </ListItem>
    </List> */}
    <List>
      <ListItem>
        <DiVisualstudio size="3rem" />
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>Experience with: <br />
            C# .net<br />
            Asp .net core<br />
            Node.js
          </ListParagraph>
        </ListContainer>

      </ListItem>
      <ListItem>
        <DiReact size="3rem" />
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>Experience with: <br />
            Angular.js<br />
            React.js<br />
            Html,css,js
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiFirebase size="3rem" />
        <ListContainer>
          <ListTitle>Data Bases</ListTitle>
          <ListParagraph>Experience with: <br />
            MySql<br />
            SQlite<br />
            MongoDB
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiDocker size="3rem" />
        <ListContainer>
          <ListTitle>Computing Cloud</ListTitle>
          <ListParagraph>Experience with: <br />
            Azure<br />
            Docker
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
