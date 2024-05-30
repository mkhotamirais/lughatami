import Footer from "./components/Footer";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { removeOpenAside, removeOpenNav } from "./app/features/basicSlice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { AsideCollapse, AsideMain } from "./components/Sidebar";
import usePath from "./hooks/usePath";

const App = () => {
  const { dark, openNav, openAside } = useSelector((state) => state.basic);
  const { path } = usePath();
  const dispatch = useDispatch();
  const handleMain = () => {
    if (openNav) dispatch(removeOpenNav());
    if (openAside) dispatch(removeOpenAside());
  };
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (openNav) dispatch(removeOpenNav());
      if (openAside) dispatch(removeOpenAside());
    });
  }, [openNav, openAside, dispatch]);

  return (
    <div className={`${dark ? "bg-slate-800 text-white" : "bg-white"} text-gray-700`}>
      <Header />
      {!path[1] || path[1] === "" ? (
        <main onClick={handleMain} className="min-h-screen px-3 lg:px-12">
          <Outlet />
        </main>
      ) : (
        <main onClick={handleMain} className="min-h-screen px-3 lg:px-12 grid grid-cols-5 items-start">
          <AsideMain className={"col-span-1"} />
          <div className="col-span-5 sm:col-span-4">
            <Outlet />
          </div>
        </main>
      )}
      <AsideCollapse />
      <Footer />
    </div>
  );
};

export default App;
