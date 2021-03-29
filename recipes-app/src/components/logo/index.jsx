import React from 'react';
import styled from 'styled-components';

import LogoPic from '../../assets/logo/logo_croped.png';
import { theme } from '../../theme';

const LogoContainer = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
`;


const LogoImg = styled.img`
    width: 8em;
    height: 8em;
`;

const LogoText = styled.div`
    margin-top: 6px;
    font-size: 40px;
    color: ${theme.primary};
`;

export function Logo(props) {
    return (
        <LogoContainer>
            <LogoImg src={LogoPic}></LogoImg>
            <LogoText>Hello</LogoText>
        </LogoContainer>
    );
}