import ReactDom from 'react-dom'
import { CarouselItem } from "./CarouselItem";
import React, { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { IoMdRadioButtonOn } from "react-icons/io";
import Slider from "react-slick";
import { useTranslation, Trans } from "react-i18next";
import { Link } from "react-router-dom";
import images from "../images/index.js";



const MODAL_STYLES = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#FFF',
    padding: '50px',
    zIndex: 1000
  }
  
  const OVERLAY_STYLES = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, .7)',
    zIndex: 1000
  }

export default function RentFormModal({ open, onClose, modalContent }) {

const { t, i18n } = useTranslation();

//key of the text content
const modalTexts = t(`${modalContent}.modalTexts`,  { returnObjects: true });
console.log("modalTexts " + modalTexts);
  const items = [
    {
      title: "Baseball",
      description:
        "Baseball is a bat-and-ball sport played between two teams of nine players each, taking turns batting and fielding. The game occurs over the course of several plays, with each play generally beginning when a player on the fielding team, called the pitcher.",
      image: require("../images/municipalTax1.png"),
    },
    {
      title: "Walking",
      description:
        "Walking (also known as ambulation) is one of the main gaits of terrestrial locomotion among legged animals. Walking is typically slower than running and other gaits. ",
        image: require("../images/municipalTax1.png"),
    },
    {
      title: "Weights",
      description:
        "Weightlifting generally refers to activities in which people lift weights, often in the form of dumbbells or barbells. People lift various kinds of weights for a variety of different reasons.",
        image: require("../images/municipalTax1.png"),
    },
  ];



  const [activeIndex, setActiveIndex] = useState(0);

  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = 0;
    } else if (newIndex >= items.length) {
      newIndex = items.length - 1;
    }

    setActiveIndex(newIndex);
  };

    if (!open) {console.log("modal is closed"); return null}
    else {console.log("modal is open")}
  
  /*const carouselItemContent = texts.map( function(x, i){
    return {"description": x, "image": images[i]}        
}.bind(this));*/
const carouselItemContent = modalTexts;

  var settings = {
    arrows: true,
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true //,
    //adaptiveHeight: true
  }; 
  
    return ReactDom.createPortal(

      

      <>
         <div onClick={onClose} style={OVERLAY_STYLES} />
      <div style={MODAL_STYLES}>
        <div className="flex justify-end">
        <button className="flex items-center gap-1 px-4 py-2 font-semibold text-white bg-emerald-600 rounded-md hover:bg-emerald-800" onClick={onClose}> {t("buttons.close")}</button>
        </div>
     
     
     {/* {
 this.modalContent.t("namespace.municipalTaxModal.modalTexts",  { returnObjects: true }).map((item) => (
    <li>
      <Trans i18nKey={item} components={[<Link to="/" />]} />
    </li>
  ))}*/}
      <Slider {...settings}>
   
     {
        carouselItemContent.map((carouselItem, index) => (
            <div key="1" style={{width :  `calc(100% / ${carouselItemContent.length})`}} >
               {/*} <CarouselItem text = {`${modalContent}.modalTexts[${index}]`} index="0" />*/}
                <CarouselItem texts = {modalContent} index={ index} image = {`images.${modalContent}`} />
            </div>
        ))
    }
     
    </Slider>

       {/*  <div className="carousel">
      <div
        className="inner"
        style={{ transform: `translate(-${activeIndex * 100}%)`
     }}
      >
        {items.map((item) => {
          return <CarouselItem item={item} width={"100%"} />;
        })}
      </div>

      <div className="carousel-buttons">
        <button
          className="button-arrow"
          onClick={() => {
            updateIndex(activeIndex - 1);
          }}
        >
         <IoIosArrowBack />

        </button>
        <div className="indicators">
          {items.map((item, index) => {
            return (
              <button
                className="indicator-buttons"
                onClick={() => {
                  updateIndex(index);
                }}
              >
                <span
                  className={`material-symbols-outlined ${
                    index === activeIndex
                      ? "text-emerald-900"
                      : "text-emerald-500"
                  }`}
                >
                  <IoMdRadioButtonOn />

                </span>
              </button>
            );
          })}
        </div>
        <button
          className="button-arrow"
          onClick={() => {
            updateIndex(activeIndex + 1);
          }}
        >
          <IoIosArrowForward />
        </button>
      </div>
    </div>*/}
        
          
        </div>
      </>,
      document.getElementById('portal')
    )
  }
