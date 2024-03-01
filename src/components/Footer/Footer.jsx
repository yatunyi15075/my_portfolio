import React from 'react';
import styled from 'styled-components';
import GlobalStyles from '../../constants/globalstyle';

const FooterContainer = styled.footer`
  color: white;
  padding: 2rem 0;
  text-align: center;
`;

const FooterText = styled.p`
  margin: 0;
`;

const FooterLink = styled.a`
  color: white;
  text-decoration: none;
  font-weight: bold;

  &:hover {
    text-decoration: underline;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
    <GlobalStyles />
      <FooterText>
        &copy; {new Date().getFullYear()} Yatunyi Brian Ondeko.
      </FooterText>
      <FooterText>
        Built with <FooterLink href="https://reactjs.org/">React</FooterLink> and styled with <FooterLink href="https://styled-components.com/">Styled Components</FooterLink>.
      </FooterText>
    </FooterContainer>
  );
};

export default Footer;
