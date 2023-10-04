import { BiSearch } from "react-icons/bi";
import { FiChevronDown } from "react-icons/fi";
import {
  MdInbox,
  MdMessage,
  MdNotifications,
  MdOutlineDarkMode,
  MdPortrait,
} from "react-icons/md";
export default function Header() {
  return (
    <div className="w-full h-full p-2 text-black flex items-center justify-between text-xs font-semibold">
      <div className="flex flex-row gap-2 items-center px-4">
        <div className="text-gray-500">
          <BiSearch />
        </div>
        <input
          type="text"
          className="bg-transparent outline-none text-black placeholder:text-gray-400"
          placeholder="Search..."
        />
      </div>
      <div className="flex flex-row items-center justify-evenly gap-2 text-base">
        <div className="p-2 bg-gray-100 rounded-full flex items-center">
          <span></span>
          <span className="text-xs">En</span>
        </div>
        <div className="p-2 bg-gray-100 rounded-full">
          <span>
            <MdOutlineDarkMode />
          </span>
          <span></span>
        </div>
        <div className="p-2 bg-gray-100 rounded-full">
          <span>
            <MdMessage />
          </span>
          <span></span>
        </div>
        <div className="p-2 bg-gray-100 rounded-full">
          <span>
            <MdNotifications />
          </span>
          <span></span>
        </div>
        <div className="flex items-center gap-3 p-2 bg-gray-100 rounded-full">
          <span>
            <MdPortrait />
          </span>
          <span className="text-xs">Albert Flores</span>
          <span>
            <FiChevronDown />
          </span>
        </div>
      </div>
    </div>
  );
}
