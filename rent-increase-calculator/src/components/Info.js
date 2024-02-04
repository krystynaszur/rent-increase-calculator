import { LuInfo } from "react-icons/lu";
import { Tooltip } from "react-tooltip";

export const Info = ({ infoId, infoText }) => {
  return (
    <div>
      <button
        data-tooltip-id={infoId}
        data-tooltip-content={infoText}
        className="infoButton ml-4 text-xl align-middle flex
     transition-colors text-emerald-400 hover:text-emerald-800 focus:text-emerald-900 focus:outline-none "
        type="button"
      >
        <LuInfo />
      </button>
      <Tooltip
        id={infoId}
        anchorSelect=".infoButton"
        place="bottom"
        style={{
          backgroundColor: "#e4e4e7",
          color: "#312e81",
          maxWidth: "95vw",
          width: "300px",
          zIndex: "10",
        }}
      />
    </div>
  );
};
