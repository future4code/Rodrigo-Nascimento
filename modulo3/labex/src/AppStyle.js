import styled from "styled-components"


export const SliderStyled = styled.section`

*{
    margin:0;
    padding: 0;

}

.slider{
    position: relative;
    height: 90vh;
    display: flex;
    justify-content: center;
    align-items: center;
}

.image{
    width: 20vw;
    height: 600px;
    border-radius: 10px;
}

.right-arrow{
    position: absolute;
    top:50%;
    right: 30%;
    font-size: 3rem;
    color: #293241;
    z-index: 10;
    cursor: pointer;
    user-select: none;
}

.left-arrow{
    position: absolute;
    top:50%;
    left: 30%;
    font-size: 3rem;
    color: #293241;
    z-index: 10;
    cursor: pointer;
    user-select: none;
}

.slide{
    opacity: 0;
    transition-duration: 1s ease;
 
}

.slide.active{
    opacity: 1;
    transition-duration: 1s;
    transform: scale(1.08)
}

`

export const HeaderStyled = styled.header`

 border: 2px solid black;
 background-color: #98c1d9;
 padding: 30px;
 display: flex;
 justify-content: space-between;



`
