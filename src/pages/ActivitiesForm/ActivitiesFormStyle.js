import styled from 'styled-components';

export const Container = styled.div`
    margin-bottom: 40px;
    width: 100%;
`;

export const Date = styled.div`
    align-self: flex-start;
    width: 280px;
    height: 50px;
    background: #D1345B;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    margin-bottom: 12px;
`;

export const MomentsContainer = styled.div`
    & > div {
        display: flex;
        width: 100%;
        margin-bottom: 8px;

        & > div:first-child {
            width: 120px;
            padding: 15px 10px;
            display: flex;
            justify-content: center;
            align-items: center;
            color: white;
            flex-shrink: 0;
        }

        & > div:last-child {
            flex-grow: 1;
            background: white;
            color: black;
            display: flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;
        }
    }

    & > div:nth-child(odd) div:first-child {
        background: #3454D1;
    }

    & > div:nth-child(even) div:first-child {
        background: #34D1BF;
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
    }
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
    
    div {
        padding: 10px 15px;
        background: #34D1BF;
        font-family: 'Chelsea Market', cursive;
        margin-bottom: 14px;
        border-radius: 5px;
        text-align: center;
        cursor: pointer;
    }
`;