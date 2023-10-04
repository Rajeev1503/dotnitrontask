import { useSelector } from "react-redux";

export default function Filters() {
  const theme = useSelector((state) => state.theme);

  return (
    <div className="flex flex-row justify-between items-center">
      <div className="max-w-max text-xs">
        <ul className="flex flex-row gap-2 justify-start items-center">
          <li className="cursor-pointer">All (100)</li>
          <span className={`${theme.secondaryText} cursor-default`}>|</span>
          <li className="cursor-pointer">Published (90)</li>
          <span className={`${theme.secondaryText} cursor-default`}>|</span>
          <li className="cursor-pointer">Draft (4)</li>
          <span className={`${theme.secondaryText} cursor-default`}>|</span>
          <li className="cursor-pointer">Under Review (6)</li>
        </ul>
      </div>
      <div className="w-[30%]">
        <input
          type="text"
          placeholder="Search"
          className={`w-full p-1 px-2 rounded-lg ${theme.primaryInputBox}`}
        />
      </div>
    </div>
  );
}
