import { Info } from "./Info";
import { useFormContext } from "react-hook-form";

import { useTranslation } from "react-i18next";

export const RentFormSelect = ({ label, id, info, name, options }) => {
  const { register } = useFormContext();
  const { t } = useTranslation();

  return (
    <div className="mb-4 block w-full">
      <div className="md:flex md:items-center">
        <div className="mb-2  md:w-1/2 md:pr-2 flex items-center justify-between md:justify-start ">
          <div>
            <label id="rent-label">{label}</label>
          </div>
          {info ? <Info infoId={`tooltip-${id}`} infoText={info} /> : null}
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
                      {options.map((option) => (
                        <option value={option.value}>
                          {" "}
                          {t(`heating.${option.type}`)}{" "}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
