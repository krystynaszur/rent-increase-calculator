import { Required } from "./Required";
import { Info } from "./Info";


export const RentFormInput = ({ label, type, id, info, placeholder, required }) => {
  return (
    <div className="mb-4 block w-full">
      <div className="md:flex md:items-center">
        <div className="mb-2 md:mb-0 md:w-3/4 md:pr-2 flex items-center">
          <div>
            <label id="rent-label">{label}</label>
            {required ? <Required  /> : null}
          </div>
          {info ? <Info info={info} /> : null}
        </div>
        <div className="utils_mwxxs__egJqR ml-auto md:ml-0 md:w-1/4">
          <div className="relative text-gray-700">
            <input
              type={type}
              id={id}
              name={id}
              className="w-full pl-8 rounded border border-gray-300 bg-inherit p-3 shadow shadow-gray-100  appearance-none outline-none text-neutral-800 invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500 peer"
              placeholder={placeholder}
              step="0.01"
              required
            />
            <div className="absolute inset-y-0 left-0 flex items-center px-3 pointer-events-none">
              $
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
