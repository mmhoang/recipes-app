import React from 'react';
import styled from 'styled-components';
import { Element } from 'react-scroll';

import BackgroundImg from '../../assets/pictures/company_team.jpg';

const ServicesContainer = styled(Element)`
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
`;

export function ServicesSection(props) {
    return (
        // Use a unique name for navigation
        <ServicesContainer name="servicesSection">
             Hey there
        </ServicesContainer>
    );
}