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
        /* background-color: red; */
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

    div {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 60%;
        position: absolute;
        bottom: 0;
        background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 1));
        border-radius: 0 0 10px 10px;
        opacity: ${({ isMouseOver }) => isMouseOver ? 1 : 0};
        transition: all 200ms linear;
    }
`;