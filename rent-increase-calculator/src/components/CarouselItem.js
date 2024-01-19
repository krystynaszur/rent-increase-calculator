import { useTranslation, Trans } from "react-i18next";
import React from "react";
import { Link } from "react-router-dom";
import images from "../images/index.js";

export const CarouselItem = ({  texts, images, index }) => {
   
    const { t, i18n } = useTranslation();
     console.log("Content " + JSON.stringify(texts));
     const translation = t("municipalTaxModal.modalTexts",  { returnObjects: true });
     const properTranslation = translation[0];
     
    // const images = images;
    // console.log(images);
    const arrayEl = `${texts}[${index}]`;
const key = "municipalTax";
    console.log(JSON.stringify(translation));
    const imagePath = `images/${texts}/${index}.png`;

    return (
      <div className="carousel-item flex flex-col	justify-center	" >
        <div className = "my-7 carousel-image flex justify-center" >   <img src={process.env.PUBLIC_URL + imagePath} alt="Your Image" /> </div>
        <div dangerouslySetInnerHTML={{__html: t(`${texts}.modalTexts`,  { returnObjects: true })[index]}} />
     {/*}   <Trans i18nKey="municipalTaxModal.stackoverflow" components={{
  site_anchor: <Link href="https://www.stackoverflow.com" target="_blank"/>,
  profile_anchor: <Link href="https://www.stackoverflow.com/users/18131146/mondayrris" target="_blank"/>,
}} />
       <Trans
    i18nKey="municipalTaxModal.button"
    components={[<Link to="/" />]}
/>

       
       <div>{properTranslation}</div>*/}
      </div>
    );
  };