import styled from 'styled-components';
import { media } from '../../assets/query';

export const Container = styled.div`
    margin-bottom: 40px;
    width: 100%;
`;

export const Date = styled.div`
    align-self: flex-start;
    width: 280px;
    max-width: 100%;
    height: 50px;
    background: #D1345B;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    margin-bottom: 12px;
    border-radius: 15px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    ${media}{
        font-size: 14px;
        width: 73%;
    }
`;

export const MomentsContainer = styled.div`
    & > div {
        display: flex;
        width: 100%;
        margin-bottom: 8px;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 15px;

        & > div:first-child {
            width: 120px;
            padding: 15px 10px;
            display: flex;
            justify-content: center;
            align-items: center;
            color: white;
            flex-shrink: 0;
            border-radius: 15px 0 0 15px;
        }

        & > div:last-child {
            flex-grow: 1;
            background: white;
            color: black;
            display: flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;
            border-radius: 0px 15px 15px 0px;
        }
    }

    & > div:nth-child(odd) div:first-child {
        background: #3454D1;
    }

    & > div:nth-child(even) div:first-child {
        background: #34D1BF;
    }

    ${media}{
        font-size: 14px;
        & > div {
            & > div:first-child {
                width: 20%;
            }
        }
    }
`;

/* Activity choosing Modal styles */
export const modalStyle = {
    overlay: {
        'width': '100vw',
        'height': '100vh',
        'display': 'flex',
        'justifyContent': 'center',
        'alignItems': 'center'
    },
    content: {
        'background': 'none',
        'border': 'none',
        'display': 'flex',
        'justifyContent': 'center',
        'alignItems': 'center'
    },
}

export const ModalContainer = styled.div`
    background-color: #3454D1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    padding: 60px;
    width: 60vw;
    border-radius: 30px;
    height: 65vh;

    & > span {
        font-size: 14px;
        color: yellow;
    }
`;

export const ActivityBox = styled.div`
    padding: 10px 15px;
    background: ${({ isConnected }) => isConnected ? 'yellow' : '#34D1BF'};
    font-family: 'Chelsea Market', cursive;
    margin-bottom: 14px;
    border-radius: 5px;
    text-align: center;
    cursor: pointer;
    
    ${media}{
        width: 100vw;
        padding: 5px;
        div{
            padding: 5px;
        }
    }
`;