import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'
import { SCREENS } from "../../components/responsive";
import { Button } from "../../components/button";

import JamisBikeImg from '../../../assets/images/bicycle_top.png'
import BlobImg from '../../../assets/images/blob.svg'


const TopSectionContainer = styled.div`
  min-height: 400px;
  margin-top: 6em;
  ${tw`
    w-full
    max-w-screen-2xl
    flex
    justify-between
    pl-3
    pr-3
    lg:pl-12
    lg:pr-12
  `};
`;

const LeftContainer = styled.div`
  ${tw`
    w-1/2
    flex
    flex-col
  `};
`;

const RightContainer = styled.div`
  ${tw`
    w-1/2
    flex
    flex-col
    relative
    mt-20
  `};
`;

const Slogan = styled.h1`
  ${tw`
    font-bold
    text-2xl
    xl:text-6xl
    sm:text-3xl
    md:text-5xl
    lg:font-black
    md:font-extrabold
    text-black
    mb-4
    sm:leading-snug
    lg:leading-normal
    xl:leading-relaxed
    pl-4 
    pr-4
  `};
`;

const Description = styled.p`
  ${tw`
    text-xs
    lg:text-sm
    xl:text-lg
    sm:max-h-full
    overflow-hidden
    max-h-12
    text-gray-800
    pl-4 
    pr-4
  `};
`;

const BlobContainer = styled.div`
  width: 20em;
  height: 10em;
  position: absolute;
  right: -5em;
  top: -9em;
  z-index: -1;
  transform: rotate(-30deg);
  img {
    width: 100%;
    height: auto;
    max-height: max-content;
  }
  @media (min-width: ${SCREENS.sm}) {
    width: 40em;
    max-height: 10em;
    right: -9em;
    top: -16em;
    transform: rotate(-25deg);
  }
  @media (min-width: ${SCREENS.lg}) {
    width: 50em;
    max-height: 30em;
    right: -9em;
    top: -15em;
    transform: rotate(-13deg);
  }
  @media (min-width: ${SCREENS.xl}) {
    width: 70em;
    max-height: 30em;
    right: -15em;
    top: -25em;
    transform: rotate(-20deg);
  }
`;

const StanaloneBike = styled.div`
width: auto;
height: 10em;
right: -6em;
top: -5em;
position: absolute;
img {
  width: auto;
  height: 100%;
  max-width: fit-content;
}
@media (min-width: ${SCREENS.sm}) {
  height: 16em;
  right: -6em;
  top: -6em;
}
@media (min-width: ${SCREENS.lg}) {
  height: 25em;
  right: 8em;
  top: 7em;
}
@media (min-width: ${SCREENS.xl}) {
  height: 30em;
  right:20em;
  top: 9em;
}
`;

const ButtonsContainer = styled.div`
  ${tw`
    flex
    flex-wrap
    mt-4
    pl-4
  `};
`;


export function TopSection() {

    return <TopSectionContainer>
        <LeftContainer>
            <Slogan>
                Rent the Best Quality Cycles with us
            </Slogan>
            <Description>
                Always choose the best bike from our local stores or order it remote
                at the best price for you and get the best quality cycles for as long you like
            </Description>
            <ButtonsContainer>
                <Button text="Book Your Bike" />
                <Button theme="filled" text="Sell Your Bike" />
            </ButtonsContainer>
        </LeftContainer>
        <RightContainer>
            <BlobContainer>
                <img src={BlobImg} alt="Blob Img" />
                <StanaloneBike>
                <img src={JamisBikeImg} alt="Jamis" />
                </StanaloneBike>
            </BlobContainer>
        </RightContainer>
    </TopSectionContainer>

}