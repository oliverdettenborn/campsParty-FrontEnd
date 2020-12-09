import styled from 'styled-components';

const LeftBox = styled.section`
    height: 100%;
    width: 30%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: rgba(52, 84, 209, 0.75);
    padding: 15px;

    @media (max-width: 600px) {
        display: none;
    }
`;

export default LeftBox;