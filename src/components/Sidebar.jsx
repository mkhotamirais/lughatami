import { FaBars } from "react-icons/fa6";
import { Link } from "react-router-dom";
import usePath from "../hooks/usePath";
import { useDispatch, useSelector } from "react-redux";
import { removeOpenAside, removeOpenNav, toggleOpenAside } from "../app/features/basicSlice";

const kaidahMenus = [
  { href: "/kaidah", text: "مقدمة" },
  { href: "/kaidah/isim", text: "اسم" },
  { href: "/kaidah/fiil", text: "فعل" },
  { href: "/kaidah/huruf", text: "حرف" },
];

const quranMenus = [
  { href: "", text: "مقدمة" },
  { href: "", text: "تجويد" },
];

const doaMenus = [
  { href: "", text: "مقدمة" },
  { href: "", text: "عداء يومية" },
];

export const AsideBtn = () => {
  const dispatch = useDispatch();
  const { openNav } = useSelector((state) => state.basic);
  const handleClick = () => {
    dispatch(toggleOpenAside());
    if (openNav) removeOpenNav();
  };
  return (
    <button onClick={handleClick}>
      <FaBars />
    </button>
  );
};

export const AsideContent = ({ className }) => {
  const { path } = usePath();
  const { openAside } = useSelector((state) => state.basic);
  const dispatch = useDispatch();
  let menus;
  if (path[1] === "kaidah") menus = kaidahMenus;
  else if (path[1] === "quran") menus = quranMenus;
  else if (path[1] === "doa") menus = doaMenus;
  else menus = [];
  const handleClick = () => {
    if (openAside) dispatch(removeOpenAside());
  };

  return (
    <div className="flex flex-col mt-2">
      {menus.map((item, i) => (
        <Link onClick={handleClick} className={`${className} hover:text-cyan-500 py-2`} to={item?.href} key={i}>
          {item?.text}
        </Link>
      ))}
    </div>
  );
};
AsideContent.propTypes;

export const AsideMain = ({ className }) => {
  return (
    <div className={`${className} hidden sm:block`}>
      <AsideContent />
    </div>
  );
};
AsideMain.propTypes;

export const AsideCollapse = ({ className }) => {
  const { openAside, dark } = useSelector((state) => state.basic);
  const { path } = usePath();
  if (path[1] === "kaidah") path[1] = "القواعد";

  return (
    <div
      className={`${className} z-50 p-3 block sm:hidden ${
        openAside ? "scale-x-100" : "scale-x-0"
      } origin-right fixed right-0 top-16 bottom-0 w-2/3 transition-all duration-150 border-l rounded-l-lg ${
        dark ? "bg-slate-800" : "bg-slate-50"
      }`}
    >
      <h2 className="text-xl font-medium">قائمة {path[1]}</h2>
      <AsideContent className={"border-b"} />
    </div>
  );
};
AsideCollapse.propTypes;
