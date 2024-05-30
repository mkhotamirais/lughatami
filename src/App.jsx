import Footer from "./components/Footer";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { removeOpenNav } from "./app/features/basicSlice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const App = () => {
  const { dark, openNav } = useSelector((state) => state.basic);
  const dispatch = useDispatch();
  const handleMain = () => {
    if (openNav) dispatch(removeOpenNav());
  };
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (openNav) dispatch(removeOpenNav());
    });
  }, [openNav, dispatch]);

  return (
    <div className={`${dark ? "bg-slate-800 text-white" : "bg-white"} text-gray-700`}>
      <Header />
      <main onClick={handleMain} className="min-h-screen px-3 lg:px-12">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default App;
