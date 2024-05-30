import { Outlet } from "react-router-dom";
import { Title } from "../../components/Components";

const Kaidah = () => {
  return (
    <div>
      <Title>قواعد</Title>
      <Outlet />
    </div>
  );
};

export default Kaidah;
