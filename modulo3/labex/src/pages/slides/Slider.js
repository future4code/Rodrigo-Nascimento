import React, {useState} from "react";
import { SliderData } from "./SliderData";
import {SliderStyled} from "./SliderStyle"
import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from "react-icons/fa"


export default function Slider ({slides}) {
  const [current, setCurrent] = useState(0)
  const length = slides.length
 

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0: current + 1)
  }

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1)
  }

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null
  } 

  return(
    <SliderStyled>
    <section className="slider">
      <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide}/>
      <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide}/>
      {SliderData.map((item, index) => {
        return (
          <div className={index === current ? "slide active" : "slide"} key={index}>
            {index === current && (<img src={item.image} alt="imagens do espaço" className="image"/>)} 
          </div>
       
        )
        
      })}
    </section>
    </SliderStyled>
  )
}
