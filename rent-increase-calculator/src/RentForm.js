import { RentFormInput } from './components/RentFormInput'
import { RentFormHeader } from './components/RentFormHeader'

import { useTranslation } from "react-i18next";

export const RentForm = () => {
    const { t, i18n } = useTranslation();

    return (
      <div className="container p-10 min-h-max flex flex-col items-center justify-center text-gray-500 text-sm max-w-2xl">
       <RentFormHeader text={t("header.dwelling")}/>
          <RentFormInput
          currency = "true"
            label={t("rent.label")}
            type="number"
            id="rent"
            placeholder="0.00"
            required = "true"
            info ={t("rent.info")}
          />
            <RentFormInput
             currency = "false"
            label={t("dwellings.label")}
            type="number"
            id="dwellingsNo"
            placeholder="0"
            required = "true"
            info ={t("dwellings.info")}
          />
      
    
      
      </div>
      
    )
  }