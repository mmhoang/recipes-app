import React from 'react';
import styled from 'styled-components';
import { ServicesSection } from './servicesSection';
import { TopSection } from './topSection';

const PageContainer = styled.div`
    width: 100%;
    // This gives the appearance of a landing "page"
    height: 100%;
    display: flex;
    flex-direction: column;
`;

export function Homepage(props) {
    return (
        <PageContainer>
            <TopSection/>
            <ServicesSection/>
        </PageContainer>
    );
}