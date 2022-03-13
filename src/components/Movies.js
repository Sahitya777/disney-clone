import React from 'react'
import styled from 'styled-components'
function Movies() {
  return (
    <Container>
        <h4>Recommended For You</h4>
        <Content>
            <Wrap>
                <img src="/images/movie.png"/>
            </Wrap>
            <Wrap>
                <img src="/images/movie.png"/>
            </Wrap>
            <Wrap>
                <img src="/images/movie.png"/>
            </Wrap>
            <Wrap>
                <img src="/images/movie.png"/>
            </Wrap>

        </Content>
    </Container>
  )
}

export default Movies

const Container = styled.div`
    overflow:hidden;
    width:90%;
    height:90%;
`
const Content=styled.div`
    display:grid;
    grid-gap:55px;
    grid-template-columns: repeat(4, minmax(0,1fr));
`
const Wrap=styled.div`
    border-radius: 10px;
    cursor:pointer;
    overflow:hidden;
    width:100%;
    height:100%;
    border:3px solid rgba(249,249,249,0.1);
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    transition: all 250ms cubic-beizer(0.25,0.46,0.45,0.94) 0s;
    img{
        width:100%;
        height:100%;
        object-fit:cover;
    }

    &:hover{
        transform: scale(1.05);
        border-color: rgba(249,249,249,0.1);
        box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
        rgb(0 0 0 / 73%) 0px 30px 22px -10px;

    }
`