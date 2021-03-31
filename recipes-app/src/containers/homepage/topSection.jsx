import React from 'react';
import styled from 'styled-components';

import BackgroundImg from '../../assets/pictures/company_team.jpg';
import { Button } from '../../components/button';
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

export function TopSection(props) {
    return (
        <TopContainer>
            <BackgroundFilter>
                <Marginer direction="vertical" margin="8em"/>
                <Logo></Logo>
                <Marginer direction="vertical" margin="4em"/>
                <MotivationalText>Software Development</MotivationalText>
                <MotivationalText>From the Best in the Industry</MotivationalText>
                <Marginer direction="vertical" margin="2em"/>
                <Button>Start your project</Button>
            </BackgroundFilter>
        </TopContainer>
    );
}