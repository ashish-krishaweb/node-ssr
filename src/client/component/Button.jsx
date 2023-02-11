// import styled from "styled-components"
import styled from "@emotion/styled"

export default function Button(){
    return (
        <StyledButton>awesome</StyledButton>
    )
}

const StyledButton = styled.button`
    border: none;
    padding: 1rem 2rem;
    background-color: #360536;
    color: white;
    cursor: pointer;
`