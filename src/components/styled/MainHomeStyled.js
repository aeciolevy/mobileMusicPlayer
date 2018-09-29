import styled from 'styled-components';
import Table from '@material-ui/core/Table';
import { TableCell } from '@material-ui/core';

export const MainHomeContainer = styled.div`
    -webkit-mask-image: linear-gradient(to top, transparent 39%, black 92%);
    height: 80%;
    position: relative;
`;

export const Image = styled.div`
    background-image: ${({ imageLink }) => imageLink ? `url(${imageLink})` : `url(http://images.gawker.com/qdekigq0zpvbqwvxkpt1/c_scale,fl_progressive,q_80,w_800.jpg)`};
    background-size: cover;
    width: 70%;
    height: 70%;
    margin: 0 auto;
`;

export const SongListContainer = styled.div`
    background-color: #0a0a0a17;
    position: absolute;
    bottom: 9rem;
    right: 10%;
    width: 70%;
    height: 200px;

    @media (max-width: 960px) {
        right: 15%;
    }
`;

export const TableStyled = styled(Table)`
    table, tbody, th, td {
        color: white;
    }

    @media (max-width: 960px) {
        th, td {
            display: ${({ responsive}) => responsive ? 'none' : null}
        }
    }
        
`;

export const TableCellResponsive = styled(TableCell)`
    @media (max-width: 960px) {
        clip-path: polygon(0px 0px,0px 0px,0px 0px,0px 0px);
    }
`;
