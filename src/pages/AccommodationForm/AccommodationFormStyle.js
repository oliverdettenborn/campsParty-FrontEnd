import styled from 'styled-components';

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: rgba(7, 7, 7, 0.75);
    display: flex;
    flex-direction: column;
    font-family: 'Chelsea Market', cursive;
    color: #EFEFEF;
    padding: 30px;

    & > div {
        border-bottom: 1px solid white;
        padding-bottom: 15px;
        width: 100%;
        font-size: 32px;
        margin-bottom: 35px;
    }

    ul {
        flex-grow: 1;
        text-align: center;
    }
`;

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
`;

/* Hotel data Modal styles */
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
`;