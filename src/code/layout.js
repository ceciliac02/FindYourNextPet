import styled from 'styled-components';

const Background = styled.div `
    background-color: ${props => props.theme.color1};
    height: 100vh;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: Arial, Helvetica, sans-serif;
`;

export const MainBox = styled.div`
    background-color: white;
    height: 90%;
    width: 90%;
    box-shadow: 10px 10px ${props => props.theme.color2};
    border-radius: 5px;
    display: flex;
    flex-direction: column;
`;

export const Header = styled.div`
    height: 15%;
    color: ${props => props.theme.color3};
    font-size: 2.5rem;
    font-weight: bold;
    display: flex;
    justify-content: center;
    align-items: center;
    text-shadow: 2px 2px ${props => props.theme.color4};
`;

export const Body = styled.div`
    height: 80%;
    border-radius: 5px;
    margin-left: 25px;
    margin-right: 25px;
    margin-bottom: 25px;
    display: flex;
`;

export const SideBar = styled.div`
    width: 20%;
    margin-right: 10px;
    border: 3px dashed ${props => props.theme.color1};
`;

export const InfoDisplay = styled.div`
    width: 80%;
    border: 3px dashed ${props => props.theme.color1};
`;

export default Background;