import { Outlet, useNavigate } from "react-router-dom";
import { Button } from "antd-mobile";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getBillList } from "@/store/billStore";
import { Badge, TabBar } from "antd-mobile";
import {
  BillOutline,
  AddCircleOutline,
  CalculatorOutline
} from "antd-mobile-icons";
import "./index.scss";

const tabs = [
  {
    key: "/",
    title: "月度账单",
    icon: <BillOutline />,
  },
  {
    key: "/New",
    title: "记账",
    icon: <AddCircleOutline />,
  },
  {
    key: "/Years",
    title: "年度账单",
    icon: <CalculatorOutline />,
  },
];

const Layout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(getBillList());
  }, [dispatch]);

  const onChange = (key) => {
    navigate(key)
  }

  return (
    <div>
      <div className="container">
        <Outlet />
      </div>
      <div className="footer">
        <TabBar onChange={onChange} >
          {tabs.map((item) => (
            <TabBar.Item  key={item.key} icon={item.icon} title={item.title} />
          ))}
        </TabBar>
      </div>
    </div>
  );
};

export default Layout;
