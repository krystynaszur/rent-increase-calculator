import { GoQuestion } from "react-icons/go";
import React, { useState } from "react";
import RentFormModal from "./RentFormModal";
import { useTranslation } from "react-i18next";

export const ModalButton = ({ modalContent }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();

  return (
    <div className="w-full mb-3">
      <button
        onClick={(e) => setIsOpen(true)}
        className="flex items-center gap-1 p-5 font-semibold text-white bg-emerald-600 rounded-md hover:bg-emerald-800"
        type="button"
      >
        <span className="text-2xl">
          <GoQuestion />
        </span>
        <span className="text-md">{t(`${modalContent}.button`)}</span>
      </button>
      <RentFormModal
        modalContent={modalContent}
        onClick={(e) => e.stopPropagation()}
        open={isOpen}
        onClose={() => setIsOpen(false)}
      />
    </div>
  );
};
