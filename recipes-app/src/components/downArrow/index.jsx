import React from 'react';
import styled from 'styled-components';
import { theme } from '../../theme';
import { FontAwesomeIcon } from '@fortawesome/fontawesome-svg-core'

const ArrowContainer = styled.div`
    width: 46px;
    height: 46px;
    border-radius: 50%;
    background-color: rgba(113, 113, 113, 0.48);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 2px solid transparent;
    cursor: pointer;
    transition: all 220ms ease-in-out;

    &:hover {
        border: 2px solid ${theme.primary};
    }
`;

const ArrowIcon = styled.div`
    color: #fff;
    font-size: 27px;
`;

export function DownArrow(props) {
    // Add props so you can pass in custom attributes, handlers, etc
    return (
        <ArrowContainer>
            <ArrowIcon>
                V
            </ArrowIcon>
        </ArrowContainer>
    );
}