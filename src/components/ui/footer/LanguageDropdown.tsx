import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { FaCaretDown, FaCheck, FaEarthAmericas } from "react-icons/fa6";
import { setLanguage } from "../../../redux/languageSlice";
import { useState } from "react";

const LanguageDropdown = () => {
  const [dropdownIsOpen, setDropdownIsOpen] = useState(false);
  const { lang } = useSelector((state: RootState) => state.lang);
  const dispatch = useDispatch();
  return (
    <div className="relative text-sm max-w-[200px]">
      <div
        onClick={() => setDropdownIsOpen((currState) => !currState)}
        className="mt-6 border border-gray-600 rounded px-2 py-1 flex items-center justify-between text-gray-300 cursor-pointer"
      >
        <div className="flex items-center gap-2">
          <FaEarthAmericas />
          {lang === "en" ? "ქართული" : "English"}
        </div>
        <FaCaretDown />
      </div>
      {dropdownIsOpen && (
        <div className="bg-secondary absolute -bottom-1 rounded translate-y-full left-0 flex flex-col gap-2 items-start w-full p-2">
          <button
            className={`px-2 py-1 hover:bg-secondary-tint w-full text-left rounded flex items-center justify-between ${
              lang === "en" ? "bg-secondary-tint" : ""
            }`}
            onClick={() => {
              dispatch(setLanguage("en"));
              setDropdownIsOpen(false);
            }}
          >
            English
            <FaCheck className={`${lang === "en" ? "block" : "hidden"}`} />
          </button>
          <button
            className={`px-2 py-1 hover:bg-secondary-tint w-full text-left rounded flex items-center justify-between ${
              lang === "ka" ? "bg-secondary-tint" : ""
            }`}
            onClick={() => {
              dispatch(setLanguage("ka"));
              setDropdownIsOpen(false);
            }}
          >
            ქართული
            <FaCheck className={`${lang === "ka" ? "block" : "hidden"}`} />
          </button>
        </div>
      )}
    </div>
  );
};

export default LanguageDropdown;
