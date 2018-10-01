import styled from 'styled-components';
import { LinearProgress } from '@material-ui/core';

export const TrackStyled = styled.div`
    width: calc(30% - 1.5rem);
    padding: 1.5rem;

    @media(max-width: 760px) {
        display: none;
    }
`;

export const ControlsStyled = styled.div`
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    width: 70%;
    @media(max-width: 760px) {
        width: 100%;
    }
`;

export const Controllers = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const TrackName = styled.h4`
    color: white;
    font-weight: 300;
    margin: 0 0 0.5rem 0;
    @media(min-width: 761px) {
        display: none
    }
`;

export const LinearProgressStyled = styled(LinearProgress)`
    width: 60%;
    margin: 1rem 0 0 0;
    @media(max-width: 760px) {
        margin: 0.3rem 0 0 0;
        height: 10px; 
    }
`;
