import { useTranslation } from "react-i18next";
import React from "react";

export const CarouselItem = ({  texts, index }) => {
   
    const { t } = useTranslation();
    
    const imagePath = `images/${texts}/${index}.png`;

    return (
      <div className="carousel-item flex flex-col	justify-center	" >
        <div className = "my-7 carousel-image flex justify-center" >   <img src={process.env.PUBLIC_URL + "/" + imagePath} alt="" /> </div>
        <div className = "carousel-text" dangerouslySetInnerHTML={{__html: t(`${texts}.modalTexts`,  { returnObjects: true })[index]}} />
      </div>
    );
  };