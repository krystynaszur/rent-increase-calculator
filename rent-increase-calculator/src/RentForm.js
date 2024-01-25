import { ModalButton } from "./components/ModalButton";

import { RentFormInput } from "./components/RentFormInput";
import { RentFormSelect } from "./components/RentFormSelect";
import { RentFormHeader } from "./components/RentFormHeader";
import RentFormModal from "./components/RentFormModal";
import React, { useState } from "react";

import images from "./images/index.js";
import {
  name_validation,
  desc_validation,
  email_validation,
  num_validation,
  password_validation,
} from "./utils/inputValidations";
import { useTranslation } from "react-i18next";
import { FormProvider, set, useForm } from "react-hook-form";

export const RentForm = () => {
  const methods = useForm();

  const calculateIncrease = (formData) => {
    console.log(formData);
    /* const rentIncrease =
    parseFloat(formData.rent) * parseFloat(formData.heating);
  const standardIncrease = new Intl.NumberFormat("en-CA", {
    style: "currency",
    currency: "CAD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  }).format(rentIncrease);*/
    const heatingIncrease =
      parseFloat(formData.rent) * parseFloat(formData.heating);
    const heatingIncreaseToDisplay = new Intl.NumberFormat("en-CA", {
      style: "currency",
      currency: "CAD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 2,
    }).format(heatingIncrease);

    const municipalTaxLastYear = parseFloat(formData.municipalTaxLastYear);
    const municipalTaxTwoYearsAgo = parseFloat(
      formData.municipalTaxTwoYearsAgo
    );

    const schoolTaxLastYear = parseFloat(formData.schoolTaxLastYear);
    const schoolTaxTwoYearsAgo = parseFloat(formData.schoolTaxTwoYearsAgo);

    const dwellings = parseInt(formData.dwellings);

    const municipalTaxIncrease =
      (municipalTaxLastYear - municipalTaxTwoYearsAgo) / dwellings / 12;

    const municipalTaxIncreaseToDisplay = new Intl.NumberFormat("en-CA", {
      style: "currency",
      currency: "CAD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 2,
    }).format(municipalTaxIncrease);

    const schoolTaxIncrease =
      (schoolTaxLastYear - schoolTaxTwoYearsAgo) / dwellings / 12;

    const schoolTaxIncreaseToDisplay = new Intl.NumberFormat("en-CA", {
      style: "currency",
      currency: "CAD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 2,
    }).format(schoolTaxIncrease);

    let improvementsBuildingIncrease = 0;
    let improvementsDwellingIncrease = 0;

    if (
      formData.improvementsBuilding != undefined &&
      formData.improvementsBuilding != ""
    ) {
      const improvementsBuilding = parseFloat(formData.improvementsBuilding);
      improvementsBuildingIncrease =
        (Math.floor(improvementsBuilding / 1000) * 4) / dwellings;
    }

    if (
      formData.improvementsDwelling != undefined &&
      formData.improvementsDwelling != ""
    ) {
      const improvementsDwelling = parseFloat(formData.improvementsDwelling);
      improvementsDwellingIncrease =
        Math.floor(improvementsDwelling / 1000) * 4;
    }

    const improvementsIncrease =
      improvementsBuildingIncrease + improvementsDwellingIncrease;
    const improvementsIncreaseToDisplay = new Intl.NumberFormat("en-CA", {
      style: "currency",
      currency: "CAD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 2,
    }).format(improvementsIncrease);

    const totalIncrease =
      heatingIncrease +
      municipalTaxIncrease +
      schoolTaxIncrease +
      improvementsIncrease;

    const increaseToDisplay = new Intl.NumberFormat("en-CA", {
      style: "currency",
      currency: "CAD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 2,
    }).format(totalIncrease);

    console.log("rentIncrease " + heatingIncrease);
    console.log("municipalTaxIncrease" + municipalTaxIncrease);
    console.log("schoolTaxIncrease" + schoolTaxIncrease);
    console.log("improvementsBuildingIncrease " + improvementsBuildingIncrease);
    console.log("improvementsDwellingIncrease" + improvementsDwellingIncrease);
    console.log("totalIncrease" + totalIncrease);
    setHeatingIncrease(heatingIncreaseToDisplay);
    setMunicipalTaxIncrease(municipalTaxIncreaseToDisplay);
    setSchoolTaxIncrease(schoolTaxIncreaseToDisplay);
    setImprovementsIncrease(improvementsIncreaseToDisplay);
    setRentIncrease(increaseToDisplay);
    // setRentIncrease( totalIncrease )

    /*alert(`Current rent: ${formData.rent}, number of dwellings  ${formData.dwellings}, 
  heating ${formData.heating}, rentIncrease ${standardIncrease}, 
  municipalTaxIncrease ${municipalTaxIncrease}, schoolTaxIncrease ${schoolTaxIncrease}, 
   totalIncrease ${totalIncrease}, `);*/
  };
  const onSubmit = methods.handleSubmit((data) => {
    console.log(data);
    calculateIncrease(data);
  });

  const { t, i18n } = useTranslation();
  const selectOptions = [
    { type: "self", value: 0.04 },
    { type: "electricity", value: 0.04 },
    { type: "gas", value: 0.033 },
    { type: "oil", value: 0.016 },
  ];

  const [rentIncrease, setRentIncrease] = useState(0);
  const [heatingIncrease, setHeatingIncrease] = useState(0);
  const [municipalTaxIncrease, setMunicipalTaxIncrease] = useState(0);
  const [schoolTaxIncrease, setSchoolTaxIncrease] = useState(0);
  const [improvementsIncrease, setImprovementsIncrease] = useState(0);

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={(e) => e.preventDefault()}
        noValidate
        className="container p-10 min-h-max flex flex-col items-center justify-center text-gray-500 text-sm max-w-2xl"
      >
        <div className="mb-4 w-full">
          <RentFormHeader text={t("header.dwelling")} />
          <RentFormInput
            currency="true"
            label={t("rent.label")}
            type="number"
            id="rent"
            placeholder="0.00"
            required="true"
            info={t("rent.info")}
            name="rent"
            validation={{
              required: {
                value: true,
                message: "required",
              },
            }}
          />
          <RentFormInput
            currency="false"
            label={t("dwellings.label")}
            type="number"
            id="dwellingsNo"
            placeholder="0"
            required="true"
            info={t("dwellings.info")}
            name="dwellings"
            validation={{
              required: {
                value: true,
                message: "required",
              },
            }}
          />
          <RentFormSelect
            label={t("heating.label")}
            id="heating"
            placeholder="0"
            info={t("heating.info")}
            name="heating"
            options={selectOptions}
          />{" "}
          {/*texts= {t("municipalTaxModal.modalTexts", {returnObjects: true})} images= {images.municipalTax}
         <button  className="flex items-center gap-1 p-5 font-semibold text-white bg-emerald-600 rounded-md hover:bg-emerald-800" onClick={(e) => setIsOpen(true)}>{t("buttons.amountSearch")}</button>

        
        <RentFormModal onClick={e => e.stopPropagation()} open={isOpen} onClose={() => setIsOpen(false)} texts= {t("municipalTaxModal", {returnObjects: true})} images= {images.municipalTax} />
    */}
        </div>
        <div className="mb-4 w-full">
          <RentFormHeader text={t("header.municipalTax")} />
          <ModalButton
            modalContent={
              i18n.language == "fr" ? "modalTaxMunicipal" : "municipalTaxModal"
            }
          />
          <RentFormInput
            currency="true"
            label={t("municipalTaxLastYear.label")}
            type="number"
            id="municipalTaxLastYear"
            placeholder="0.00"
            required="true"
            name="municipalTaxLastYear"
            validation={{
              required: {
                value: true,
                message: "required",
              },
            }}
          />
          <RentFormInput
            currency="true"
            label={t("municipalTaxTwoYearsAgo.label")}
            type="number"
            id="municipalTaxTwoYearsAgo"
            placeholder="0.00"
            required="true"
            name="municipalTaxTwoYearsAgo"
            validation={{
              required: {
                value: true,
                message: "required",
              },
            }}
          />
        </div>
        <div className="mb-4 w-full">
          <RentFormHeader text={t("header.schoolTax")} />
          <ModalButton
            modalContent={
              i18n.language == "fr" ? "modalTaxScolaire" : "schoolTaxModal"
            }
          />
          <RentFormInput
            currency="true"
            label={t("schoolTaxLastYear.label")}
            type="number"
            id="schoolTaxLastYear"
            placeholder="0.00"
            required="true"
            name="schoolTaxLastYear"
            validation={{
              required: {
                value: true,
                message: "required",
              },
            }}
          />
          <RentFormInput
            currency="true"
            label={t("schoolTaxTwoYearsAgo.label")}
            type="number"
            id="schoolTaxTwoYearsAgo"
            placeholder="0.00"
            required="true"
            name="schoolTaxTwoYearsAgo"
            validation={{
              required: {
                value: true,
                message: "required",
              },
            }}
          />
        </div>
        <div className="mb-4 w-full">
          <RentFormHeader text={t("header.improvements")} />
          <RentFormInput
            currency="true"
            label={t("improvementsBuilding.label")}
            type="number"
            id="improvementsBuilding"
            placeholder="0.00"
            info={t("improvementsBuilding.info")}
            name="improvementsBuilding"
          />
          <RentFormInput
            currency="true"
            label={t("improvementsDwelling.label")}
            type="number"
            id="improvementsDwelling"
            placeholder="0.00"
            info={t("improvementsDwelling.info")}
            name="improvementsDwelling"
          />
        </div>

        <div className="mt-5">
          <button
            onClick={onSubmit}
            className="flex items-center gap-1 p-5 font-semibold text-white bg-emerald-600 rounded-md hover:bg-emerald-800"
          >
            {t("buttons.calculate")}
          </button>
        </div>
        {rentIncrease != 0 ? (
          <div className="my-8 ">
            <div className="title  text-2xl md:text-3xl text-center font-bold text-zinc-900 mb-5">
              {t("header.rentIncreaseEstimate")}
            </div>
            <div className="flex justify-center	">
              <div className=" font-semibold text-5xl  text-white bg-zinc-700 rounded-md py-5 px-8">
                {rentIncrease}
              </div>
            </div>
            <div className="text-2xl md:text-3xl text-center font-bold text-zinc-900 my-5">
              {t("header.rentIncreaseEstimateExplanation")}
            </div>
            <div className="flex-col text-lg ">
              <div className="md:flex md:items-center justify-between my-3">
                <div className="sm:w-3/4">{t("explanation.heating")} </div>
                <div className="sm:w-1/4 font-bold">{heatingIncrease} </div>
              </div>
              <div className="md:flex md:items-center my-3">
                <div className="md:w-3/4">{t("explanation.municipalTax")} </div>
                <div className="md:w-1/4 font-bold">{municipalTaxIncrease} </div>
              </div>
              <div className="md:flex md:items-center my-3">
                <div className="md:w-3/4">{t("explanation.schoolTax")}</div>
                <div className="md:w-1/4 font-bold">{schoolTaxIncrease} </div>
              </div>
              <div className="md:flex md:items-center my-3">
                <div className="md:w-3/4">{t("explanation.repairs")} </div>
                <div className="md:w-1/4 font-bold">{improvementsIncrease} </div>
              </div>
            </div>
          </div>
        ) : null}
      </form>
    </FormProvider>
  );
};
