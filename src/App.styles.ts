import styled from 'styled-components'

export const Container = styled.div``

export const Header = styled.div`
    background-color: #483D8B;
    height: 150px;
    text-align: center;
`

export const HeaderText = styled.h1`
    margin: 0;
    padding: 0;
    color: #FFF;
    padding-top: 20px;
    margin-bottom: 10px;

    @media(max-width: 680px) {
        font-size: 30px;
    }
`

export const Body = styled.div`
    margin: auto;
    max-width: 95%;
    margin-bottom: 50px;
`