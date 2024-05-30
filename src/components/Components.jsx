import { AsideBtn } from "./Sidebar";

export const Title = ({ children }) => {
  return (
    <div className="flex items-center gap-2 text-xl font-medium mt-2 mb-1">
      <AsideBtn />
      {children}
    </div>
  );
};
Title.propTypes;
