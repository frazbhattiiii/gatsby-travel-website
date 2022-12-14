import React from "react"
import styled from "styled-components"
import { Button } from "./Button"
import Video from "../assets/video/background.mp4"
function Hero(props) {
  return (
    <>
      <HeroContainer>
        <HeroBg>
          <VideoBg
            src={Video}
            type="video/mp4"
            autoPlay
            loop
            muted
            playsInline
          ></VideoBg>
        </HeroBg>
        <HeroContent>
          <HeroItems>
            <HeroTitle>TravelX</HeroTitle>
            <HeroSubtitle>Your Travel Companion</HeroSubtitle>
            <Button primary big round to="/trips">
              Book a flight
            </Button>
          </HeroItems>
        </HeroContent>
      </HeroContainer>
    </>
  )
}

export default Hero

const HeroContainer = styled.div`
  background-color: #0c0c0c;
  display: flex;
  justify-content: center;
  color: white;
  align-items: center;
  height: 100vh;
  padding: 0 1rem;
  position: relative;
  margin-top: -80px;
  :before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 2;
    background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.2) 0%,
        rgba(0, 0, 0, 0.6) 100%
      ),
      linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, transparent 100%);
  }
`
const HeroBg = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`
const VideoBg = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
  -o-object-fit: cover;
`
const HeroContent = styled.div`
  z-index: 3;
  height: calc(100vh - 80px);
  max-height: 100%;
  padding: 0rem calc((100vw - 1300px) / 2);
`
const HeroItems = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100vh;
  max-height: 100%;
  padding: 0;
  line-height: 1.1;
  font-weight: bold;
  color: white;
`
const HeroTitle = styled.h1`
  //  font clamp makes the font responsive to the screen size
  //  smallest value, responsive size, largest value
  font-size: clamp(1.5rem, 6vw, 4rem);
  margin-bottom: 1.5rem;
  letter-spacing: 3px;
  padding: 0 1rem;
`
const HeroSubtitle = styled.p`
  font-size: clamp(1rem, 3vw, 3rem);
  margin-bottom: 2rem;
  font-weight: 400;
`
