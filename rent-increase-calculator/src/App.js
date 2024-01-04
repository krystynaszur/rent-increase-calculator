import "./App.css";
import { useTranslation } from "react-i18next";

const lngs = [
  { code: "en", native: "English" },
  { code: "fr", native: "Français" },
];

export default function App() {
  const { t, i18n } = useTranslation();

  const handleTrans = (code) => {
    i18n.changeLanguage(code);
  };

  function changeNumber( decimal, event) {

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

   if (!decimalRegex.test(event.target.value)) {
    // If it doesn't match, format it accordingly
    const parsedInput = parseFloat(event.target.value); // Parse the input to a float
    if (!isNaN(parsedInput)) {
        // If parsing succeeds, format it to a fixed two decimal places
        const formatted = parsedInput.toFixed(decimal);
        event.target.value = formatted; // Update the input field's value with the formatted value
    }
}
   
   } 
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
    <div className="app">
      <div className="lang-switcher">
        {lngs.map((lng) => {
          const { code, native } = lng;
          return (
            <button
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
      <header>
        <h1 className="title text-4xl text-center">{t("title")}</h1>
      </header>
      <main class="min-h-max flex items-center justify-center text-gray-500 text-sm max-w-2xl">
        <form
          class="rounded-md p-5 md:p-10 flex flex-col "
          novalidate
        >
          <div class="mb-8">
          <h2 class="text-2xl font-bold mb-5">Information about your dwelling</h2>
          <div class="mb-4">
            <div class="md:flex md:items-center">
              <div class="mb-2 md:mb-0 md:w-3/4 md:pr-2 flex items-center">
                <div>
                  <label id="rent-label">
                    What is your current monthly rent?
                  </label>
                  <span
                    aria-hidden="true"
                    class="ml-1 font-bold"
                    title="Required field"
                  >
                    *
                  </span>
                </div>
                <button
                  class="ml-4 transition-colors text-indigo-400 hover:text-indigo-800 focus:text-indigo-900 focus:outline-none "
                  type="button"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 16v-4M12 8h.01" />
                  </svg>
                </button>
              </div>
              <div class="utils_mwxxs__egJqR ml-auto md:ml-0 md:w-1/4">
                <div class="relative text-gray-700">
                  <input
                    type="number"
                    id="current-rent"
                    name="current-rent"
                    class="w-full pl-8 rounded border border-gray-300 bg-inherit p-3 shadow shadow-gray-100  appearance-none outline-none text-neutral-800 invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500 peer"
                    placeholder="0.00"
                    step="0.01"
                    required
                    onBlur={(e) => changeNumber(2, e)}
                  />
                  <div class="absolute inset-y-0 left-0 flex items-center px-3 pointer-events-none">
                    $
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="mb-4">
            <div class="md:flex md:items-center">
              <div class="mb-2 md:mb-0 md:w-3/4 md:pr-2 flex items-center">
                <div>
                  <label id="rent-label">
                    How many dwellings are in your building?
                  </label>
                  <span
                    aria-hidden="true"
                    class="ml-1 font-bold"
                    title="Required field"
                  >
                    *
                  </span>
                </div>
                <button
                  class="ml-4 transition-colors text-indigo-400 hover:text-indigo-800 focus:text-indigo-900 focus:outline-none "
                  type="button"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 16v-4M12 8h.01" />
                  </svg>
                </button>
              </div>
              <div class="ml-auto md:ml-0 md:w-1/4">
                <div class="relative text-gray-700">
                  <input
                    type="number"
                    id="dwellings-number"
                    name="dwellings-number"
                    class="w-full pl-8 rounded border border-gray-300 bg-inherit p-3 shadow shadow-gray-100  appearance-none outline-none text-neutral-800 invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500 peer"
                    placeholder="0"
                    step="1"
                    required
                   onBlur={(e) => changeNumber(0, e)}
                  />
                 
                </div>
              </div>
            </div>
          </div>
          <div class="mb-4">
            <div class="md:flex md:items-center">
              <div class="mb-2 md:mb-0 md:w-1/2 md:pr-2 flex items-center">
                <div>
                  <label id="rent-label">
                    How is your heating paid?
                  </label>
                 
                </div>
                <button
                  class="ml-4 transition-colors text-indigo-400 hover:text-indigo-800 focus:text-indigo-900 focus:outline-none "
                  type="button"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 16v-4M12 8h.01" />
                  </svg>
                </button>
              </div>
              <div class="md:w-1/2 md:grow">
                <div class="relative text-gray-700">
                <select class="w-full rounded shadow border border-gray-300 p-3" name="heat" aria-labelledby="heat-label" aria-describedby="heat-error" ><option class="p-1" value="0.0128">I pay for heating myself</option><option value="0.0134">My landlord pays for electric heating</option><option value="0.0191">My landlord pays for gas heating</option><option value="0.0373">My landlord pays for oil (or other) heating</option></select>
                
                </div>
              </div>
            </div>
          </div>
          </div>
          <div class="mb-8">
          <h2 class="text-2xl font-bold mb-5">Municipal taxes for the building</h2>
          <div class="mb-4">
            <div class="md:flex md:items-center">
              <div class="mb-2 md:mb-0 md:w-3/4 md:pr-2 flex items-center">
                <div>
                  <label id="municipal-tax-current-year-label">
                  Municipal tax for 2023
                  </label>
                  <span
                    aria-hidden="true"
                    class="ml-1 font-bold"
                    title="Required field"
                  >
                    *
                  </span>
                </div>
                
              </div>
              <div class=" ml-auto md:ml-0 md:w-1/4">
                <div class="relative text-gray-700">
                  <input
                    type="number"
                    id="municipal-tax-current-year"
                    name="municipal-tax-current-year"
                    class="w-full pl-8 rounded border border-gray-300 bg-inherit p-3 shadow shadow-gray-100  appearance-none outline-none text-neutral-800 invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500 peer"
                    placeholder="0.00"
                    step="0.01"
                    required
                    onBlur={(e) => changeNumber(2, e)}
                  />
                  <div class="absolute inset-y-0 left-0 flex items-center px-3 pointer-events-none">
                    $
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="mb-4">
            <div class="md:flex md:items-center">
              <div class="mb-2 md:mb-0 md:w-3/4 md:pr-2 flex items-center">
                <div>
                  <label id="municipal-tax-previous-year-label">
                  Municipal tax for 2022
                  </label>
                  <span
                    aria-hidden="true"
                    class="ml-1 font-bold"
                    title="Required field"
                  >
                    *
                  </span>
                </div>
                
              </div>
              <div class=" ml-auto md:ml-0 md:w-1/4">
                <div class="relative text-gray-700">
                  <input
                    type="number"
                    id="municipal-tax-previous-year"
                    name="municipal-tax-previous-year"
                    class="w-full pl-8 rounded border border-gray-300 bg-inherit p-3 shadow shadow-gray-100  appearance-none outline-none text-neutral-800 invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500 peer"
                    placeholder="0.00"
                    step="0.01"
                    required
                    onBlur={(e) => changeNumber(2, e)}
                  />
                  <div class="absolute inset-y-0 left-0 flex items-center px-3 pointer-events-none">
                    $
                  </div>
                </div>
              </div>
            </div>
          </div>
       
          </div>
          <div class="mb-8">
          <h2 class="text-2xl font-bold mb-5">School taxes for the building</h2>
          <div class="mb-4">
            <div class="md:flex md:items-center">
              <div class="mb-2 md:mb-0 md:w-3/4 md:pr-2 flex items-center">
                <div>
                  <label id="school-tax-current-year-label">
                  School tax for 2022-2023
                  </label>
                  <span
                    aria-hidden="true"
                    class="ml-1 font-bold"
                    title="Required field"
                  >
                    *
                  </span>
                </div>
                
              </div>
              <div class=" ml-auto md:ml-0 md:w-1/4">
                <div class="relative text-gray-700">
                  <input
                    type="number"
                    id="school-tax-current-year"
                    name="school-tax-current-year"
                    class="w-full pl-8 rounded border border-gray-300 bg-inherit p-3 shadow shadow-gray-100  appearance-none outline-none text-neutral-800 invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500 peer"
                    placeholder="0.00"
                    step="0.01"
                    required
                    onBlur={(e) => changeNumber(2, e)}
                  />
                  <div class="absolute inset-y-0 left-0 flex items-center px-3 pointer-events-none">
                    $
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="mb-4">
            <div class="md:flex md:items-center">
              <div class="mb-2 md:mb-0 md:w-3/4 md:pr-2 flex items-center">
                <div>
                  <label id="school-tax-previous-year-label">
                 School tax for 2021-2022
                  </label>
                  <span
                    aria-hidden="true"
                    class="ml-1 font-bold"
                    title="Required field"
                  >
                    *
                  </span>
                </div>
                
              </div>
              <div class=" ml-auto md:ml-0 md:w-1/4">
                <div class="relative text-gray-700">
                  <input
                    type="number"
                    id="school-tax-previous-year"
                    name="school-tax-previous-year"
                    class="w-full pl-8 rounded border border-gray-300 bg-inherit p-3 shadow shadow-gray-100  appearance-none outline-none text-neutral-800 invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500 peer"
                    placeholder="0.00"
                    step="0.01"
                    required
                    onBlur={(e) => changeNumber(2, e)}
                  />
                  <div class="absolute inset-y-0 left-0 flex items-center px-3 pointer-events-none">
                    $
                  </div>
                </div>
              </div>
            </div>
          </div>
       
          </div>
          <div class="mb-8">
          <h2 class="text-2xl font-bold mb-5">Major improvements, repairs or other work</h2>
          <div class="mb-4">
            <div class="md:flex md:items-center">
              <div class="mb-2 md:mb-0 md:w-3/4 md:pr-2 flex items-center">
                <div>
                  <label id="building-improvements-label">
                  Amount spent on major work for the whole building
                  </label>
                  
                </div>
                <button
                  class="ml-4 transition-colors text-indigo-400 hover:text-indigo-800 focus:text-indigo-900 focus:outline-none "
                  type="button"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 16v-4M12 8h.01" />
                  </svg>
                </button>
              </div>
              <div class=" ml-auto md:ml-0 md:w-1/4">
                <div class="relative text-gray-700">
                  <input
                    type="number"
                    id="building-improvements"
                    name="building-improvements"
                    class="w-full pl-8 rounded border border-gray-300 bg-inherit p-3 shadow shadow-gray-100  appearance-none outline-none text-neutral-800 invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500 peer"
                    placeholder="0.00"
                    step="0.01"
                    required
                    onBlur={(e) => changeNumber(2, e)}
                  />
                  <div class="absolute inset-y-0 left-0 flex items-center px-3 pointer-events-none">
                    $
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="mb-4">
            <div class="md:flex md:items-center">
              <div class="mb-2 md:mb-0 md:w-3/4 md:pr-2 flex items-center">
                <div>
                  <label id="dwelling-improvements-label">
                  Amount spent on major work for your dwelling specifically
                  </label>
                 
                </div>
                <button
                  class="ml-4 transition-colors text-indigo-400 hover:text-indigo-800 focus:text-indigo-900 focus:outline-none "
                  type="button"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 16v-4M12 8h.01" />
                  </svg>
                </button>
              </div>
              <div class=" ml-auto md:ml-0 md:w-1/4">
                <div class="relative text-gray-700">
                  <input
                    type="number"
                    id="dwelling-improvements"
                    name="dwelling-improvements"
                    class="w-full pl-8 rounded border border-gray-300 bg-inherit p-3 shadow shadow-gray-100  appearance-none outline-none text-neutral-800 invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500 peer"
                    placeholder="0.00"
                    step="0.01"
                    required
                    onBlur={(e) => changeNumber(2, e)}
                  />
                  <div class="absolute inset-y-0 left-0 flex items-center px-3 pointer-events-none">
                    $
                  </div>
                </div>
              </div>
            </div>
          </div>
       
          </div>
        
          <button
            type="submit"
            class="mt-5 bg-blue-500 py-3 rounded-md text-white  group-invalid:pointer-events-none group-invalid:opacity-30"
          >
            Submit
          </button>
        </form>
      </main>
    </div>
  );
}
