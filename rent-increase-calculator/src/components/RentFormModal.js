import ReactDom from "react-dom";
import { CarouselItem } from "./CarouselItem";
import React, { useRef } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import Slider from "react-slick";
import { useTranslation } from "react-i18next";

const MODAL_STYLES = {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  backgroundColor: "#FFF",
  padding: "50px",
  zIndex: 1000,
};

const OVERLAY_STYLES = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "rgba(0, 0, 0, .7)",
  zIndex: 1000,
};

export default function RentFormModal({ open, onClose, modalContent }) {
  const { t } = useTranslation();

  const carouselItemContent = t(`${modalContent}.modalTexts`, {
    returnObjects: true,
  });

  const ref = useRef(null);

  const handleNextSlide = () => {
    ref.current.slickNext();
  };

  const handlePrevSlide = () => {
    ref.current.slickPrev();
  };

  if (!open) {
    return null;
  }

  var settings = {
    arrows: false,
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    adaptiveHeight: true,
  };

  return ReactDom.createPortal(
    <>
      <div onClick={onClose} className="overlay" style={OVERLAY_STYLES} />
      <div className = "modal" style={MODAL_STYLES}>
        <div className="flex justify-end">
          <button
            className="flex items-center gap-1 px-4 py-2 font-semibold text-white bg-emerald-600 rounded-md hover:bg-emerald-800"
            onClick={onClose}
          >
            {" "}
            {t("buttons.close")}
          </button>
        </div>

        <Slider ref={ref} {...settings}>
          {carouselItemContent.map((carouselItem, index) => (
            <div
              key="1"
              style={{ width: `calc(100% / ${carouselItemContent.length})` }}
            >
              <CarouselItem
                texts={modalContent}
                index={index}
                image={`images.${modalContent}`}
              />
            </div>
          ))}
        </Slider>

        <div className="mt-7 w-full flex justify-between">
          <button
            className="flex items-center  px-4 py-2 font-semibold text-white bg-emerald-600 rounded-md hover:bg-emerald-800"
            onClick={handlePrevSlide}
          >
            <div className="pr-2">
              <IoIosArrowBack />
            </div>
            {t("buttons.previous")}
          </button>
          <button
            className="flex items-center justify-between px-4 py-2 font-semibold text-white bg-emerald-600 rounded-md hover:bg-emerald-800"
            onClick={handleNextSlide}
          >
            {t("buttons.next")}
            <div className="pl-2">
              <IoIosArrowForward />
            </div>
          </button>
        </div>
      </div>
    </>,
    document.getElementById("portal")
  );
}
