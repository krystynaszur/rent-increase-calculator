import { Info } from "./Info";
import { useFormContext } from "react-hook-form";

import { useTranslation } from "react-i18next";

export const RentFormSelect = ({ label, id, info,  name, options }) => {
    const { register, formState: { errors }} = useFormContext();
    const { t, i18n } = useTranslation();
console.log(options)
  return (
    <div className="mb-4 block w-full">
      <div className="md:flex md:items-center">
        <div className="mb-2  md:w-1/2 md:pr-2 flex items-center justify-between md:justify-start ">
          <div>
            <label id="rent-label">{label}</label>
           
          </div>
          {info ? <Info infoId ={`tooltip-${id}`} infoText={info} /> : null}
        </div>
        <div className="ml-auto md:ml-0 md:w-1/2">
          <div className="relative text-gray-700">
         
          <div className="mb-4">
              <div className="md:flex md:items-center">
               
                <div className="md:w-1/2 md:grow">
                  <div className="relative text-gray-700">
                    <select
                      defaultValue="0.04"
                      className="w-full rounded shadow border bg-stone-50 border-gray-300 p-3"
                      name="heating"
                      aria-labelledby="heat-label"
                      aria-describedby="heat-error"
                      {...register(name)}
                    >
                   {/*}   <option className="p-1" value="0.04">
                        I pay for heating myself
                      </option>
                      <option value="0.04">
                        My landlord pays for electric heating
                      </option>
                      <option value="0.033">
                        My landlord pays for gas heating
                      </option>
                      <option value="0.016">
                        My landlord pays for oil (or other) heating
  </option>*/}
                      {
        options.map((option) => (
            <option value= {option.value}> {t(`heating.${option.type}`)} </option>
                      
        ))
    }
                    </select>
                  </div>
                </div>
              </div>
            </div>
   
          {/*}  <input
              type={type}
              id={id}
              name={id}
              className={"w-full pl-8 rounded border border-gray-300 bg-stone-50 p-3 shadow shadow-gray-100  appearance-none outline-none text-neutral-800 " }
              placeholder={placeholder}
              step="0.01"
              {...register(name)}
            />
            {currency === "true" ?  <div className="absolute inset-y-0 left-0 flex items-center px-3 pointer-events-none">
              $
  </div> : null}*/}
            
       

      
          </div>
         
        </div>
      </div>
    </div>
  );
};


