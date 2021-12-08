import styled from "styled-components"

export const SliderStyled = styled.section`

*{
    margin:0;
    padding: 0;

}

.slider{
    position: fixed;
    margin-left: 60vw;
    height: 90vh;
    display: flex;
    justify-content: center;
    align-items: center;
}

.image{
    width: 25vw;
    height: 60vh;
    border-radius: 10px;
}

.right-arrow{
    position: absolute;
    top:50%;
    right: -25%;
    font-size: 3rem;
    color: black;
    z-index: 10;
    cursor: pointer;
    user-select: none;
}

.left-arrow{
    position: absolute;
    top:50%;
    left: -25%;
    font-size: 3rem;
    color: black;
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