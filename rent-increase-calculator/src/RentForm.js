import { ModalButton } from './components/ModalButton.js'

import { RentFormInput } from './components/RentFormInput'
import { RentFormHeader } from './components/RentFormHeader'
import  RentFormModal  from './components/RentFormModal'
import React, { useState } from 'react'


import images from './images/index.js'
import {
    name_validation,
    desc_validation,
    email_validation,
    num_validation,
    password_validation,
  } from './utils/inputValidations';
import { useTranslation } from "react-i18next";
import { FormProvider, useForm } from 'react-hook-form'

export const RentForm = () => {

    const methods = useForm()

    const onSubmit = methods.handleSubmit(data => {
      console.log(data)
    })

    const { t, i18n } = useTranslation();

  
    //const [isOpen, setIsOpen] = useState(false);

    return (
      

        <FormProvider {...methods}>
            <form
        onSubmit={e => e.preventDefault()}
        noValidate
        className="container p-10 min-h-max flex flex-col items-center justify-center text-gray-500 text-sm max-w-2xl">
       <RentFormHeader text={t("header.dwelling")}/>
       <div  >
      <ModalButton modalContent = "municipalTaxModal" slideNumber = "5" /> {/*texts= {t("municipalTaxModal.modalTexts", {returnObjects: true})} images= {images.municipalTax}
         <button  className="flex items-center gap-1 p-5 font-semibold text-white bg-emerald-600 rounded-md hover:bg-emerald-800" onClick={(e) => setIsOpen(true)}>{t("buttons.amountSearch")}</button>

        
        <RentFormModal onClick={e => e.stopPropagation()} open={isOpen} onClose={() => setIsOpen(false)} texts= {t("municipalTaxModal", {returnObjects: true})} images= {images.municipalTax} />
    */}
        </div>

           <RentFormInput
          currency = "true"
            label={t("rent.label")}
            type="number"
            id="rent"
            placeholder="0.00"
            required = "true"
            info ={t("rent.info")}
            name="rent"
            validation={{
                required: {
                  value: true,
                  message: 'required',
                },
              }}
          />
            <RentFormInput
             currency = "false"
            label={t("dwellings.label")}
            type="number"
            id="dwellingsNo"
            placeholder="0"
            required = "true"
            info ={t("dwellings.info")}
            name="dwellings"
            validation={{
                      required: {
                        value: true,
                        message: 'required',
                      },
                    }}
          />
       <div className="mt-5">
      
          <button
            onClick={onSubmit}
            className="flex items-center gap-1 p-5 font-semibold text-white bg-emerald-600 rounded-md hover:bg-emerald-800"
          >
           Calculate rent increase
          </button>
        </div>
    
      
        </form>
      </FormProvider>
    )
  }