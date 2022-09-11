import React, { useContext } from "react";
import { Pie, ResponsiveContainer, Tooltip } from "recharts";
import { ChartdataContext } from "./Dashboard";

const PieChart = () => {

  const datas = useContext(ChartdataContext);
  console.log(datas);
  return (
    <div>
      
    </div>
  );
};

export default PieChart;
