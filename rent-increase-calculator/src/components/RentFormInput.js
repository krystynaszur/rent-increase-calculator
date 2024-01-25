import { Required } from "./Required";
import { Info } from "./Info";
import { useFormContext } from "react-hook-form";
import { AnimatePresence, motion } from "framer-motion";
import { MdError } from "react-icons/md";
import { findInputError, isFormInvalid } from '../utils'


export const RentFormInput = ({ label, type, id, info, placeholder, validation, name, required, currency }) => {
    const { register, formState: { errors }} = useFormContext();

    const inputError = findInputError(errors, name)
    const isInvalid = isFormInvalid(inputError)

  return (
    <div className="mb-5 block w-full">
      <div className="md:flex md:items-center">
        <div className=" md:w-3/4  mb-2 md:mb-0 pr-0 md:pr-2 flex justify-between md:justify-start items-center">
          <div>
            <label id="rent-label">{label}</label>
            {required ? <Required  /> : null}
          </div>
          {info ? <Info infoId ={`tooltip-${id}`} infoText={info} /> : null}
        </div>
        <div className="ml-auto md:ml-0 md:w-1/4">
          <div className="relative text-gray-700">
            <input
              type={type}
              id={id}
              name={id}
              className={"w-full pl-8 rounded border border-gray-300 bg-stone-50 p-3 shadow shadow-gray-100  appearance-none outline-none text-neutral-800 " + (isInvalid ? "border-red-500": null)}
              placeholder={placeholder}
              step="0.01"
              {...register(name, validation)}
            />
            {currency === "true" ?  <div className="absolute inset-y-0 left-0 flex items-center px-3 pointer-events-none">
              $
            </div> : null}
            
       

      
          </div>
          {isInvalid && (
            <InputError
              message={inputError.error.message}
              key={inputError.error.message}
            />
          )}
        </div>
      </div>
    </div>
  );
};

const InputError = ({ message }) => {
    return (
      <motion.p
        className="flex items-center gap-1 px-2 font-semibold text-xs text-red-500 rounded-md"
        {...framer_error}
      >
        <MdError />
        {message}
      </motion.p>
    )
  }
  
  const framer_error = {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 10 },
    transition: { duration: 0.2 },
  }
