import styled, {css}  from 'styled-components';

export const ButtonContainer = styled.button`
    background: #565656;
    border-radius: 22px;
    position: relative;
    font-weight: 800;
    cursor: pointer;

    color: #FFFFFF;
    padding: 4px 16px;
    min-width: 120px;
    min-height: 26px;
    width: 100%;
    transition: all .3 ease-in-out;

    &:hover {
        background-color: rgb(127, 40, 181);        
    }
    
    ${({variant}) => variant !== "primary" && css`
        min-width: 167px;
        height: 33px;
        
        background: #E4105D;

        &::after {
            content: '';
            position: absolute;
            border: 1px solid #E4105D;
            top: -5px;
            left: -6px;
            width: calc(100% + 10px);
            height: calc(100% + 10px);
            border-radius: 22px;
        }

        
    &:hover {
        background-color: #e93f7d;        
        &::after{
            border-color: #e93f7d;
        }
    }
    `}
`