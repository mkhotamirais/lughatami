import { FaMoon, FaSun, FaXmark, FaBars } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { removeOpenNav, toggleDark, toggleOpenNav } from "../app/features/basicSlice";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const navMenus = [
  { href: "", text: "شرفة" },
  { href: "quran", text: "قرآن" },
  { href: "kaidah", text: "قواعد" },
  { href: "doa", text: "دعاء" },
];

const Header = () => {
  const { dark } = useSelector((state) => state.basic);
  return (
    <>
      <header className={`z-40 ${dark ? "bg-slate-800" : "bg-white"} h-16 px-4 lg:px-12 border-b sticky top-0`}>
        <div className="flex justify-between items-center h-full gap-8">
          <Logo />
          <NavMain />
          <div className="flex gap-3">
            <DarkMode />
            <NavBtn />
          </div>
        </div>
      </header>
      <NavCollapse />
    </>
  );
};
export default Header;

// nav
const NavBtn = () => {
  const { openNav } = useSelector((state) => state.basic);
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(toggleOpenNav());
  };

  return (
    <button
      onClick={handleClick}
      className={`block sm:hidden text-xl ${openNav ? "rotate-180" : ""} transition-all duration-100`}
    >
      {openNav ? <FaXmark /> : <FaBars />}
    </button>
  );
};

const NavContent = ({ classLink }) => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(removeOpenNav());
  };
  return navMenus.map((item, i) => (
    <NavLink onClick={handleClick} to={item.href} key={i} className={`${classLink} hover:text-cyan-500 capitalize`}>
      {item?.text}
    </NavLink>
  ));
};

const NavMain = () => {
  return (
    <nav className="hidden sm:block w-full">
      <div className="flex gap-5">
        <NavContent />
      </div>
    </nav>
  );
};

const NavCollapse = () => {
  const { dark, openNav } = useSelector((state) => state.basic);
  return (
    <nav
      className={`z-50 block sm:hidden ${dark ? "bg-slate-800" : "bg-white"} ${
        openNav ? "scale-y-100" : "scale-y-0"
      } origin-top fixed top-16 w-full border-b shadow rounded-lg p-3 transition-all duration-100`}
    >
      <div className="flex flex-col">
        <NavContent classLink={"py-2 border-b rounded"} />
      </div>
    </nav>
  );
};

// logo, dark mode
const Logo = () => {
  return (
    <a href="/" className="min-w-max block text-lg font-medium">
      <div>لغة تام</div>
    </a>
  );
};

const DarkMode = () => {
  const dispatch = useDispatch();
  const { dark } = useSelector((state) => state.basic);
  const handleClick = () => {
    dispatch(toggleDark());
  };
  return (
    <button onClick={handleClick} className={`text-xl size-5 overflow-hidden`}>
      <FaMoon className={`${dark ? "-translate-y-full" : "translate-y-0"} transition-all duration-150`} />
      <FaSun className={`${dark ? "-translate-y-full" : "translate-y-0"} transition-all duration-150`} />
    </button>
  );
};
