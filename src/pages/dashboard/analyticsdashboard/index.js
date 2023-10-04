import { MdOutlineCalendarToday, MdShowChart } from "react-icons/md";
import { HiOutlineFilter } from "react-icons/hi";
export default function AnalyticsDashboard() {
  return (
    <div className="h-full p-6 text-black">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl">Dashboard</h1>
        <div className="flex gap-4">
          <button className="bg-white rounded-md px-4 p-2 text-sm flex gap-2 items-center">
            <MdOutlineCalendarToday /> Weekly
          </button>
          <button className="bg-white rounded-md px-4 p-2 text-sm flex gap-2 items-center">
          <HiOutlineFilter /> Select Date
          </button>
        </div>
      </div>
      <div className="flex flex-col gap-4 pt-8">
        <div className="flex gap-4 items-center justify-between">
          <div className="relative overflow-hidden w-[25%] p-4 rounded-md bg-gradient-to-r from-[#08CBF9] via-[#80E1A5] to-[#F5F753] flex flex-row gap-4 justify-between items-center">
            <div className="flex flex-col gap-2">
              <h1 className="text-xl">
                Upgrade Your Plan <br />
                To Pro
              </h1>
              <p className="text-sm">for better results</p>
              <svg
                className="absolute -right-[3.2rem] -top-[1.6rem]"
                width="200"
                height="200"
                viewBox="0 0 100 100"
              >
                <circle
                  r="40"
                  cx="50"
                  cy="50"
                  fill="transparent"
                  stroke="#E3F8DA"
                  stroke-width="4px"
                ></circle>
                <circle
                  r="40"
                  cx="50"
                  cy="50"
                  fill="transparent"
                  stroke="#E3F8DA"
                  stroke-width="4px"
                ></circle>
              </svg>
              <svg
                className="absolute -right-8 top-0"
                width="150"
                height="150"
                viewBox="0 0 100 100"
              >
                <circle
                  r="40"
                  cx="50"
                  cy="50"
                  fill="transparent"
                  stroke="#E3F8DA"
                  stroke-width="6px"
                ></circle>
                <circle
                  r="40"
                  cx="50"
                  cy="50"
                  fill="transparent"
                  stroke="#E3F8DA"
                  stroke-width="6px"
                ></circle>
              </svg>
            </div>
            <div className="bg-white rounded-full p-2 text-xs h-12 w-12 flex justify-center items-center">
              Now
            </div>
          </div>
          <div className="w-[75%] p-4 rounded-md bg-white flex flex-row gap-4 justify-between items-center">
            <div className="grow rounded-md p-2 py-4 flex flex-row gap-4 items-center bg-[#E5F9FF]">
              <div className="text-4xl text-[#71F1FF]"><MdShowChart /></div>
              <div className="flex flex-col gap-2">
              <p className="text-xs">
                Total Revenue
              </p>
              <p className="text-base font-semibold">3,564</p>
              </div>
            </div>
            <div className="grow rounded-md p-2 py-4 flex flex-row gap-4 items-center bg-[#FFEDE5]">
              <div className="text-4xl text-[#FB956D]"><MdShowChart /></div>
              <div className="flex flex-col gap-2">
              <p className="text-xs">
                Products Sold
              </p>
              <p className="text-base font-semibold">564</p>
              </div>
            </div>
            <div className="grow rounded-md p-2 py-4 flex flex-row gap-4 items-center bg-[#EAE5FF]">
              <div className="text-4xl text-[#5743BE]"><MdShowChart /></div>
              <div className="flex flex-col gap-2">
              <p className="text-xs">
                Growth
              </p>
              <p className="text-base font-semibold">+5.0%</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div>revenue report</div>
          <div>overview</div>
        </div>
      </div>
    </div>
  );
}
