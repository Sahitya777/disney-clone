import React from 'react'
import styled from 'styled-components'
function Detail() {
  return (
    <Container>
        <Background>
            <img src="/images/movie.png"/>
        </Background>
        <Imagetitle>
            <img src="/images/viewers-disney.png"/>
        </Imagetitle>
    </Container>
  )
}

export default Detail

const Container=styled.div`
    min-height:calc(100vh-70px);
    padding: 0 calc(3.5vw + 5px);
    position: relative;

`
const Background=styled.div`
    position: fixed;
    top:0;
    left:0;
    bottom:0;
    right:0;
    z-index:-1;
    opacity:0.8;


    img{
        width:100%;
        height:100%;
        object-fit: cover;

    }
`

const Imagetitle=styled.div`
    height:30vh;
    width:35vw;
    min-height:170px;
    min-width:200px;
    img{
        width:100%;
        height:100%;
        object-fit:contain;
    }
`