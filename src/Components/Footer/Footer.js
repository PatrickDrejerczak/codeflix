import React from 'react'
import './style.css'
import {
    Box,
    Container,
    Row,
    Column,
    FooterLink,
    Heading,
  } from "./FooterStyles";
const Footer = () => {
    return (
        <>
            <Box>
     
      <Container>
        <Row>
          <Column>
            <FooterLink href="#">Audio and Subtitles</FooterLink>
            <FooterLink href="#">Media Center</FooterLink>
            <FooterLink href="#">Privacy</FooterLink>
            <FooterLink href="#">Contact Us</FooterLink>
          </Column>
          <Column>
            <FooterLink href="#">Audio Description</FooterLink>
            <FooterLink href="#">Investor Relations</FooterLink>
            <FooterLink href="#">Legal Notices</FooterLink>
            <FooterLink href="#">Teaching</FooterLink>
          </Column>
          <Column>
            <FooterLink href="#">Help Center</FooterLink>
            <FooterLink href="#">Jobs</FooterLink>
            <FooterLink href="#">Cookie Preferences</FooterLink>
          </Column>
          <Column>
            <FooterLink href="#">
              <i className="fab fa-facebook-square">
              </i>
                <span style={{ marginLeft: "10px" }}>
                  Facebook
                </span>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-instagram">
              </i>
                <span style={{ marginLeft: "10px" }}>
                  Instagram
                </span>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-twitter">
              </i>
                <span style={{ marginLeft: "10px" }}>
                  Twitter
                </span>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-youtube">
              </i>
                <span style={{ marginLeft: "10px" }}>
                  Youtube
                </span>
            </FooterLink>
          </Column>
        </Row>
      </Container>
    </Box>
        </>
    )
}

export default Footer
