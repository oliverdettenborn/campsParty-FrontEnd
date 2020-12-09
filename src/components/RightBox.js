import styled from 'styled-components';

const RightBox = styled.section`
    height: 100%;
    width: 70%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: rgba(7, 7, 7, 0.7);
    padding: 15px;
    overflow: hidden;

    @media (max-width: 600px) {
        width: 100%;
    }
`;

export default RightBox;