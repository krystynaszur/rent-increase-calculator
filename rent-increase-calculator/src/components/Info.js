import { LuInfo } from "react-icons/lu";


const showInfo = (info) => {
    console.log(info);
}


export const Info = ({ info }) => {
    return (   
    <div> <button
    className="ml-4 text-xl align-middle flex
     transition-colors text-indigo-400 hover:text-indigo-800 focus:text-indigo-900 focus:outline-none "
    type="button" onClick={showInfo(info)}
  >
    <LuInfo />
  </button>
  </div>
       
    )
  }