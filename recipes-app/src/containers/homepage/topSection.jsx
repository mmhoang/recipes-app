import React from 'react';
import { Element, scroller } from 'react-scroll';
import styled from 'styled-components';

import BackgroundImg from '../../assets/pictures/company_team.jpg';
import { Button } from '../../components/button';
import { DownArrow } from '../../components/downArrow';
import { Logo } from '../../components/logo';
import { Marginer } from '../../components/marginer';

const TopContainer = styled.div`
    width: 100%;
    height: 100vh;
    padding: 0;
    background: url(${BackgroundImg});
`;

const BackgroundFilter = styled.div`
    width: 100%;
    height: 100%;
    background-color: rgba(53, 53, 53, 0.88);
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const MotivationalText = styled.h1`
    margin: 0;
    font-size: 43px;
    font-weight: 500;
    line-height: 1.5;
    color: #fff;
`;

const DownArrowContainer = styled.div`
    position: absolute;
    bottom: 20px;
    left: 50%;
    // When you use 50% with position absolute, have to add a transform
    transform: translateX(-50%);
`;

export function TopSection(props) {

    const scrollToNextSection = () => {
        scroller.scrollTo("servicesSection", { smooth: true, duration: 1500 });
    }

    return (
        <Element name="topSection">
            <TopContainer>
                <BackgroundFilter>
                    <Marginer direction="vertical" margin="8em"/>
                    <Logo></Logo>
                    <Marginer direction="vertical" margin="4em"/>
                    <MotivationalText>Software Development</MotivationalText>
                    <MotivationalText>From the Best in the Industry</MotivationalText>
                    <Marginer direction="vertical" margin="2em"/>
                    <Button>Start your project</Button>
                    <DownArrowContainer onClick={scrollToNextSection}>
                        <DownArrow/>
                    </DownArrowContainer>
                </BackgroundFilter>
            </TopContainer>
        </Element>
    );
}