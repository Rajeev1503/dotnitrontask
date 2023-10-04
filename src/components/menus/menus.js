import Link from "next/link";
import menuList from "./menuList.json";
import { GoDot, GoDotFill } from "react-icons/go";
import { FiChevronDown } from "react-icons/fi";
import { usePathname } from "next/navigation";
import { useReducer } from "react";
export default function Menus() {

  const currentPage = usePathname().split("/");

  return (
    <div className="h-full w-full px-2">
      <div className="h-full w-[100%] py-8 m-auto">
        <div className="flex flex-col gap-6 pb-24">
          <div className="flex flex-col gap-4 justify-between text-xs font-semibold rounded-lg py-1 capitalize">
            {menuList.map((e) => {
              return (
                <div key={e.id}>
                  <p className=" text-sm sm:text-xs mb-4 uppercase">
                    {e.title}
                  </p>
                  {e.menu.map((z) => {
                    const hasSubMenu = Object.keys(z).includes("subMenu");
                    if (z.name == "Changelog") {
                      return (
                        <div
                          className={`${
                            currentPage.includes(z.name.toLowerCase())
                              ? "bg-red-500"
                              : ""
                          } w-full pl-4 flex flex-col justify-center rounded-lg px-2 py-2 cursor-pointer`}
                        >
                          <div className="w-full flex flex-row gap-2 items-center justify-between">
                            <p>{z.name}</p>
                            <span className="text-xs px-2 rounded-md bg-[#344155]">
                              {z.version}
                            </span>
                          </div>
                        </div>
                      );
                    } else
                      return (
                        <div
                          className={`w-full pl-4 flex flex-col rounded-lg px-2 py-2 cursor-pointer`}
                        >
                          <div
                            className={`${
                              currentPage.includes(z.name.toLowerCase())
                                ? "bg-[#3B4759] p-2"
                                : ""
                            } rounded-md w-full flex flex-row gap-2 items-center justify-between `}
                          >
                            <p>{z.name}</p>
                            {hasSubMenu && (
                              <span className="rounded-full text-lg bg-[#344155]">
                                <FiChevronDown />
                              </span>
                            )}
                          </div>
                          {hasSubMenu && (
                            <div className="cursor-pointer flex flex-col gap-2">
                              {z.subMenu.map((subMenu) => {
                                if (Object.keys(subMenu).length < 1) return;
                                return (
                                  <Link href={subMenu.url}
                                    className={`text-xs mb-2 first:mt-4 font-semibold text-white`}
                                    key={subMenu.id}
                                  >
                                    <div className="flex flex-row gap-2 items-center">
                                      <span
                                        className={`${
                                          currentPage.includes(
                                            subMenu.name
                                              .split(" ")
                                              .join("")
                                              .toLowerCase()
                                          )
                                            ? "bg-[#3B4759] rounded-full"
                                            : ""
                                        }`}
                                      >
                                        {currentPage.includes(
                                          subMenu.name
                                            .split(" ")
                                            .join("")
                                            .toLowerCase()
                                        ) ? (
                                          <GoDotFill />
                                        ) : (
                                          <GoDot />
                                        )}
                                      </span>
                                      {subMenu.name}
                                    </div>
                                  </Link>
                                );
                              })}
                            </div>
                          )}
                        </div>
                      );
                  })}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
