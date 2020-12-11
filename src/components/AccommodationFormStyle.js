import styled from 'styled-components';
import { media } from '../assets/query';

export const Item = styled.li`
    background-image: ${({ backgroundImg }) => `url('${backgroundImg}')`};
    background-size: cover;
    background-repeat: no-repeat;
    background-position: right;
    display: inline-block;
    width: 210px;
    height: 240px;
    margin: 15px;
    border-radius: 10px;
    cursor: pointer;
    position: relative;
    box-shadow: 0 0 7px 2px rgba(0, 0, 0, 0.6);

    div {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 65%;
        position: absolute;
        bottom: 0;
        background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 1));
        border-radius: 0 0 10px 10px;
        opacity: ${({ isMouseOver }) => isMouseOver ? 1 : 0};
        transition: all 200ms linear;
    }

    ${media}{
        div{
            opacity: 1;
        }
    }
`;

/* Hotel data Modal styles */
export const modalStyle = {
    overlay: {
        'width': '100vw',
        'height': '100vh',
        'display': 'flex',
        'justifyContent': 'center',
        'alignItems': 'center',
        'zIndex': "11",
    },
    content: {
        'background': 'none',
        'border': 'none',
        'display': 'flex',
        'justifyContent': 'center',
        'alignItems': 'center'
    }
}

export const ModalContainer = styled.div`
    background-color: #EFEFEF;
    display: flex;
    flex-direction: column;
    width: 60vw;
    font-family: 'Lato', 'sans-serif';
    border-radius: 30px;
    position: relative;

    img {
        width: 100%;
        border-radius: 30px;
        height: 280px;
        object-fit: cover;
        box-shadow: 0 0 7px 1px black;
    }

    & > div {
        font-family: 'Chelsea Market', cursive;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px 25px;
        flex-grow: 1;

        & > div:first-child {
            width: 50%;

            span:first-child { 
                display: block;
                font-size: 26px;
                margin-bottom: 15px;
                color: gray;
            }
        }
    }

    ${media}{
        width: 100vw;

        & > div {
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 10px 5px;

            & > div:first-child {
                width: 100%;
            }
        }
        img {
        height: 200px;
    }
    }
`;

export const PriceAndButtons = styled.div`
    div:first-child {
        width: 160px;
        text-align: center;
        background: white;
        height: 75px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: green;
        font-size: 26px;
        border-radius: 15px 15px 0 0;
    }

    button:first-child {
        background-color: red;
        color: white;
        width: 80px;
        padding: 10px;
    }

    button:last-child {
        background-color: green;
        color: white;
        width: 80px;
        padding: 10px;
    }

    ${media}{
        display: flex;
        margin-top: 15px;
        margin-bottom: 25px;

        div:first-child {
            border-radius: 15px 0px 0 15px;
        }
        button:first-child {
            border-top-right-radius: 15px;
        }

        button:last-child {
            border-bottom-right-radius: 15px;
        }
    }
`;