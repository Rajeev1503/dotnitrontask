import Header from "@/components/header/header";
import Menus from "@/components/menus/menus";

export default function Layout({ children }) {
  return (
    <div className="h-[100vh] w-full flex flex-row scroll-smooth font-semibold primaryBg primaryText antialiased">
      <div className={`bg-[#1E293B] h-full w-[14%] border-r primaryBorder`}>
        <Menus />
      </div>
      <div className=" w-[86%] h-full">
        <header className="bg-white h-[8vh]">
          <Header />
        </header>
        <main className="bg-[#F1F5F9] h-[92vh] w-full flex flex-row justify-center items-center">
          <div className="h-full w-full">{children}</div>
        </main>
      </div>
    </div>
  );
}
