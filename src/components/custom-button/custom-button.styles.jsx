import styled, {css} from 'styled-components'

const defaultStyle = css`
    background-color: black;
    color: white;
    &:hover {
        background-color: white;
        color: black;
        border: 1px solid black;
    }
`
const invertedButton = css`
    background-color: #fff;
    color:#000;
    border: 1px solid #000;

    &:hover{
        background-color: #000;
        color:#fff;
        border:none;
    }
`

const primaryButton = css`
    background-color: #4285f4;
    color: #fff;

    &:hover{
        background: #357ae8;
        border: none;
    }
`

const getButtonStyles = props => {
    if(props.theme === 'primary'){
        return primaryButton;
    }

    return props.theme === 'inverted' ? invertedButton : defaultStyle
}
export const CustomButtonContainer = styled.button`
    min-width: 165px;
    width: auto;
    height: 50px;
    letter-spacing: 0.5px;
    line-height: 50px;
    padding: 0 35px 0 35px;
    font-size: 15px;
    text-transform: uppercase;
    font-family: 'Open Sans Condensed';
    font-weight: bolder;
    border: none;
    display: flex;
    justify-content: center;
    cursor: pointer;
    

    ${getButtonStyles}
`