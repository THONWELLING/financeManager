import styled from "styled-components"

export const Container = styled.div`
    flex: 1;
`

export const Title = styled.div`
    text-align: center;
    font-weight: bold;
    color: #757678;
    margin-bottom: 5px;
`

export const Info = styled.div<{ color?: string }>`
    text-align: center;
    font-weight: bold;
    color: ${props => props.color ?? '#1C1C1C'};
`