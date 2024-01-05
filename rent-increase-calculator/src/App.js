import "./App.css";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { RentForm } from './RentForm'

const lngs = [
  { code: "en", native: "English" },
  { code: "fr", native: "Français" },
];

export default function App() {
  const [formData, setFormData] = useState({
    currentRent: "",
    dwellingsNumber: "",
    heating: 0.0128,
    municipalTaxCurrentYear: "",
    municipalTaxPreviousYear: "",
    schoolTaxCurrentYear: "",
    schoolTaxPreviousYear: "",
    buildingWorks: "",
    dwellingWorks: "",
  });

  const handleChange = (event) => {
    console.log("we change the value");
    const { name, value } = event.target;
    console.log("name" + name);
    console.log("value" + value);

    /*  const numberAsString = value.toString();

// Check if the number is a decimal by searching for the decimal point
const decimalIndex = numberAsString.indexOf('.');
const numberOfDecimalPoints = numberAsString.length - decimalIndex - 1;
console.log(" numberOfDecimalPoints" +  numberOfDecimalPoints);
const parsedInput = parseFloat(value);
const formatted = parsedInput.toFixed(2);*/

    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const rentIncrease =
      parseFloat(formData.currentRent) * parseFloat(formData.heating);
    const standardIncrease = new Intl.NumberFormat("en-CA", {
      style: "currency",
      currency: "CAD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 2,
    }).format(rentIncrease);

    const municipalTaxCurrentYear = parseFloat(
      formData.municipalTaxCurrentYear
    );
    const municipalTaxPreviousYear = parseFloat(
      formData.municipalTaxPreviousYear
    );

    const schoolTaxCurrentYear = parseFloat(formData.schoolTaxCurrentYear);
    const schoolTaxPreviousYear = parseFloat(formData.schoolTaxPreviousYear);

    const dwellingsNumber = parseInt(formData.dwellingsNumber);
    const municipalTaxIncrease =
      (municipalTaxCurrentYear - municipalTaxPreviousYear) /
      dwellingsNumber /
      12;
    const schoolTaxIncrease =
      (schoolTaxCurrentYear - schoolTaxPreviousYear) / dwellingsNumber / 12;

    const buildingWorks = parseFloat(formData.buildingWorks);
    const buildingWorksIncrease =
      (Math.floor(buildingWorks / 1000) * 1.67) / dwellingsNumber;
    const dwellingWorks = parseFloat(formData.dwellingWorks);
    const dwellingWorksIncrease = Math.floor(dwellingWorks / 1000) * 1.67;

    const totalIncrease =
      rentIncrease +
      municipalTaxIncrease +
      schoolTaxIncrease +
      buildingWorksIncrease +
      dwellingWorksIncrease;

    alert(`Current rent: ${formData.currentRent}, number of dwellings  ${formData.dwellingsNumber}, heating ${formData.heating}, rentIncrease ${standardIncrease}, municipalTaxIncrease ${municipalTaxIncrease}, schoolTaxIncrease ${schoolTaxIncrease}, dwellingWorksIncrease ${dwellingWorksIncrease},
    buildingWorksIncrease ${buildingWorksIncrease},  totalIncrease ${totalIncrease}, `);
  };

  const { t, i18n } = useTranslation();

  const handleTrans = (code) => {
    i18n.changeLanguage(code);
  };

  const changeNumber = (id, decimal) => {
    /*  const keyCode = (event.which) ? event.which : event.keyCode;
    console.log('keyCode =',keyCode);
   if(keyCode==190 || keyCode==110 || keyCode==46){
      console.log('keyCode . detected');
     
   }

    let input = event.target.value;
    console.log(input);
    const numAsString = input.toString();
    if (numAsString.endsWith('.')) {
      numAsString += '00';
      console.log("new input" + numAsString);
      event.target.value =parseFloat(numAsString);
  }
    //input = parseFloat(input);

   // console.log(typeof input)
   /* event.target.value = new Intl.NumberFormat('en-CA',  { style: "decimal",  minimumIntegerDigits: 0, maximumIntegerDigits: 9, minimumFractionDigits: 0,maximumFractionDigits: decimal }).format(input);*/
    // Regular expression to match the decimal format with two digits after the decimal point
    const decimalRegex = new RegExp(`^\\d+\\.\\d{${decimal}}$`);

    console.log("id" + id);
    const valueToTest = formData[id];
    console.log("valueToTest" + valueToTest);

    const numberAsString = valueToTest.toString();

    // Check if the number is a decimal by searching for the decimal point
    const decimalIndex = numberAsString.indexOf(".");

    if (decimalIndex > decimal) {
      // If it doesn't match, format it accordingly
      const parsedInput = parseFloat(valueToTest); // Parse the input to a float
      console.log(parsedInput);
      if (!isNaN(parsedInput)) {
        // If parsing succeeds, format it to a fixed two decimal places
        const formatted = parsedInput.toFixed(decimal);
        // event.target.value = formatted; // Update the input field's value with the formatted value

        setFormData((prevFormData) => ({ ...prevFormData, [id]: formatted }));
      }
    }
  };
  /* if (!decimalRegex.test(input)) {
       // If it doesn't match, format it accordingly
       const parsedInput = parseFloat(input); // Parse the input to a float
       console.log(parsedInput);
       if (!isNaN(parsedInput)) {
           // If parsing succeeds, format it to a fixed two decimal places
           const formatted = parsedInput.toFixed(2);
          document.getElementById("current-rent").value = formatted;
       }
       // If parsing fails, return an error or default value, depending on the requirement
      
   }

   // If the input already matches the desired format, return it as is
   event.target.value = input;*/

  return (
    <div className="app" key="app">
      <div key="lang-switcher" className="lang-switcher">
        {lngs.map((lng) => {
          const { code, native } = lng;
          return (
            <button
              key={native}
              className="text-lg font-semibold leading-6 text-gray-900"
              style={{
                fontWeight: i18n.resolvedLanguage === code ? "bold" : "normal",
              }}
              onClick={() => handleTrans(code)}
            >
              {native}
            </button>
          );
        })}
      </div>
      <header key="header">
        <h1 className="title text-4xl text-center">{t("title")}</h1>
      </header>
      <RentForm />
      <main
        key="main"
        className="min-h-max flex items-center justify-center text-gray-500 text-sm max-w-2xl"
      >
        <form
          className="rounded-md p-5 md:p-10 flex flex-col "
          noValidate
          onSubmit={handleSubmit}
        >
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-5">
              Information about your dwelling
            </h2>
            <div className="mb-4">
              <div className="md:flex md:items-center">
                <div className="mb-2 md:mb-0 md:w-3/4 md:pr-2 flex items-center">
                  <div>
                    <label id="rent-label">
                      What is your current monthly rent?
                    </label>
                    <span
                      aria-hidden="true"
                      className="ml-1 font-bold"
                      title="Required field"
                    >
                      *
                    </span>
                  </div>
                  <button
                    className="ml-4 transition-colors text-indigo-400 hover:text-indigo-800 focus:text-indigo-900 focus:outline-none "
                    type="button"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <path d="M12 16v-4M12 8h.01" />
                    </svg>
                  </button>
                </div>
                <div className="utils_mwxxs__egJqR ml-auto md:ml-0 md:w-1/4">
                  <div className="relative text-gray-700">
                    <input
                      type="number"
                      id="currentRent"
                      name="currentRent"
                      className="w-full pl-8 rounded border border-gray-300 bg-inherit p-3 shadow shadow-gray-100  appearance-none outline-none text-neutral-800 invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500 peer"
                      placeholder="0.00"
                      step="0.01"
                      required
                      value={formData.currentRent}
                      onChange={handleChange}
                    />
                    <div className="absolute inset-y-0 left-0 flex items-center px-3 pointer-events-none">
                      $
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mb-4">
              <div className="md:flex md:items-center">
                <div className="mb-2 md:mb-0 md:w-3/4 md:pr-2 flex items-center">
                  <div>
                    <label id="rent-label">
                      How many dwellings are in your building?
                    </label>
                    <span
                      aria-hidden="true"
                      className="ml-1 font-bold"
                      title="Required field"
                    >
                      *
                    </span>
                  </div>
                  <button
                    className="ml-4 transition-colors text-indigo-400 hover:text-indigo-800 focus:text-indigo-900 focus:outline-none "
                    type="button"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <path d="M12 16v-4M12 8h.01" />
                    </svg>
                  </button>
                </div>
                <div className="ml-auto md:ml-0 md:w-1/4">
                  <div className="relative text-gray-700">
                    <input
                      type="number"
                      id="dwellingsNumber"
                      name="dwellingsNumber"
                      className="w-full pl-8 rounded border border-gray-300 bg-inherit p-3 shadow shadow-gray-100  appearance-none outline-none text-neutral-800 invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500 peer"
                      placeholder="0"
                      step="1"
                      required
                      value={formData.dwellingsNumber}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="mb-4">
              <div className="md:flex md:items-center">
                <div className="mb-2 md:mb-0 md:w-1/2 md:pr-2 flex items-center">
                  <div>
                    <label id="rent-label">How is your heating paid?</label>
                  </div>
                  <button
                    className="ml-4 transition-colors text-indigo-400 hover:text-indigo-800 focus:text-indigo-900 focus:outline-none "
                    type="button"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <path d="M12 16v-4M12 8h.01" />
                    </svg>
                  </button>
                </div>
                <div className="md:w-1/2 md:grow">
                  <div className="relative text-gray-700">
                    <select
                      value={formData.heating}
                      onChange={handleChange}
                      className="w-full rounded shadow border border-gray-300 p-3"
                      name="heating"
                      aria-labelledby="heat-label"
                      aria-describedby="heat-error"
                    >
                      <option className="p-1" value="0.0128">
                        I pay for heating myself
                      </option>
                      <option value="0.0134">
                        My landlord pays for electric heating
                      </option>
                      <option value="0.0191">
                        My landlord pays for gas heating
                      </option>
                      <option value="0.0373">
                        My landlord pays for oil (or other) heating
                      </option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-5">
              Municipal taxes for the building
            </h2>
            <div className="mb-4">
              <div className="md:flex md:items-center">
                <div className="mb-2 md:mb-0 md:w-3/4 md:pr-2 flex items-center">
                  <div>
                    <label id="municipal-tax-current-year-label">
                      Municipal tax for 2023
                    </label>
                    <span
                      aria-hidden="true"
                      className="ml-1 font-bold"
                      title="Required field"
                    >
                      *
                    </span>
                  </div>
                </div>
                <div className=" ml-auto md:ml-0 md:w-1/4">
                  <div className="relative text-gray-700">
                    <input
                      type="number"
                      id="municipalTaxCurrentYear"
                      name="municipalTaxCurrentYear"
                      className="w-full pl-8 rounded border border-gray-300 bg-inherit p-3 shadow shadow-gray-100  appearance-none outline-none text-neutral-800 invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500 peer"
                      placeholder="0.00"
                      step="0.01"
                      required
                      value={formData.municipalTaxCurrentYear}
                      onChange={handleChange}
                    />
                    <div className="absolute inset-y-0 left-0 flex items-center px-3 pointer-events-none">
                      $
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mb-4">
              <div className="md:flex md:items-center">
                <div className="mb-2 md:mb-0 md:w-3/4 md:pr-2 flex items-center">
                  <div>
                    <label id="municipal-tax-previous-year-label">
                      Municipal tax for 2022
                    </label>
                    <span
                      aria-hidden="true"
                      className="ml-1 font-bold"
                      title="Required field"
                    >
                      *
                    </span>
                  </div>
                </div>
                <div className=" ml-auto md:ml-0 md:w-1/4">
                  <div className="relative text-gray-700">
                    <input
                      type="number"
                      id="municipalTaxPreviousYear"
                      name="municipalTaxPreviousYear"
                      className="w-full pl-8 rounded border border-gray-300 bg-inherit p-3 shadow shadow-gray-100  appearance-none outline-none text-neutral-800 invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500 peer"
                      placeholder="0.00"
                      step="0.01"
                      required
                      value={formData.municipalTaxPreviousYear}
                      onChange={handleChange}
                    />
                    <div className="absolute inset-y-0 left-0 flex items-center px-3 pointer-events-none">
                      $
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-5">
              School taxes for the building
            </h2>
            <div className="mb-4">
              <div className="md:flex md:items-center">
                <div className="mb-2 md:mb-0 md:w-3/4 md:pr-2 flex items-center">
                  <div>
                    <label id="school-tax-current-year-label">
                      School tax for 2022-2023
                    </label>
                    <span
                      aria-hidden="true"
                      className="ml-1 font-bold"
                      title="Required field"
                    >
                      *
                    </span>
                  </div>
                </div>
                <div className=" ml-auto md:ml-0 md:w-1/4">
                  <div className="relative text-gray-700">
                    <input
                      type="number"
                      id="schoolTaxCurrentYear"
                      name="schoolTaxCurrentYear"
                      className="w-full pl-8 rounded border border-gray-300 bg-inherit p-3 shadow shadow-gray-100  appearance-none outline-none text-neutral-800 invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500 peer"
                      placeholder="0.00"
                      step="0.01"
                      required
                      value={formData.schoolTaxCurrentYear}
                      onChange={handleChange}
                    />
                    <div className="absolute inset-y-0 left-0 flex items-center px-3 pointer-events-none">
                      $
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mb-4">
              <div className="md:flex md:items-center">
                <div className="mb-2 md:mb-0 md:w-3/4 md:pr-2 flex items-center">
                  <div>
                    <label id="school-tax-previous-year-label">
                      School tax for 2021-2022
                    </label>
                    <span
                      aria-hidden="true"
                      className="ml-1 font-bold"
                      title="Required field"
                    >
                      *
                    </span>
                  </div>
                </div>
                <div className=" ml-auto md:ml-0 md:w-1/4">
                  <div className="relative text-gray-700">
                    <input
                      type="number"
                      id="schoolTaxPreviousYear"
                      name="schoolTaxPreviousYear"
                      className="w-full pl-8 rounded border border-gray-300 bg-inherit p-3 shadow shadow-gray-100  appearance-none outline-none text-neutral-800 invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500 peer"
                      placeholder="0.00"
                      step="0.01"
                      required
                      value={formData.schoolTaxPreviousYear}
                      onChange={handleChange}
                    />
                    <div className="absolute inset-y-0 left-0 flex items-center px-3 pointer-events-none">
                      $
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-5">
              Major improvements, repairs or other work
            </h2>
            <div className="mb-4">
              <div className="md:flex md:items-center">
                <div className="mb-2 md:mb-0 md:w-3/4 md:pr-2 flex items-center">
                  <div>
                    <label id="building-improvements-label">
                      Amount spent on major work for the whole building
                    </label>
                  </div>
                  <button
                    className="ml-4 transition-colors text-indigo-400 hover:text-indigo-800 focus:text-indigo-900 focus:outline-none "
                    type="button"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <path d="M12 16v-4M12 8h.01" />
                    </svg>
                  </button>
                </div>
                <div className=" ml-auto md:ml-0 md:w-1/4">
                  <div className="relative text-gray-700">
                    <input
                      type="number"
                      id="buildingWorks"
                      name="buildingWorks"
                      className="w-full pl-8 rounded border border-gray-300 bg-inherit p-3 shadow shadow-gray-100  appearance-none outline-none text-neutral-800 invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500 peer"
                      placeholder="0.00"
                      step="0.01"
                      value={formData.buildingWorks}
                      onChange={handleChange}
                    />
                    <div className="absolute inset-y-0 left-0 flex items-center px-3 pointer-events-none">
                      $
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mb-4">
              <div className="md:flex md:items-center">
                <div className="mb-2 md:mb-0 md:w-3/4 md:pr-2 flex items-center">
                  <div>
                    <label id="dwelling-improvements-label">
                      Amount spent on major work for your dwelling specifically
                    </label>
                  </div>
                  <button
                    className="ml-4 transition-colors text-indigo-400 hover:text-indigo-800 focus:text-indigo-900 focus:outline-none "
                    type="button"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <path d="M12 16v-4M12 8h.01" />
                    </svg>
                  </button>
                </div>
                <div className=" ml-auto md:ml-0 md:w-1/4">
                  <div className="relative text-gray-700">
                    <input
                      type="number"
                      id="dwellingWorks"
                      name="dwellingWorks"
                      className="w-full pl-8 rounded border border-gray-300 bg-inherit p-3 shadow shadow-gray-100  appearance-none outline-none text-neutral-800 invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500 peer"
                      placeholder="0.00"
                      step="0.01"
                      value={formData.dwellingWorks}
                      onChange={handleChange}
                    />
                    <div className="absolute inset-y-0 left-0 flex items-center px-3 pointer-events-none">
                      $
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="mt-5 bg-blue-500 py-3 rounded-md text-white  group-invalid:pointer-events-none group-invalid:opacity-30"
          >
            Submit
          </button>
        </form>
      </main>
    </div>
  );
}
