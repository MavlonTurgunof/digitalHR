import React from "react";
import Metrics from "./Metrics";
import AbsenteeRateChart from "./AbsenteeRateChart";
import TotalSalaryChart from "./TotalSalaryChart";
import EmployeeGrowthAndDepartmentDistribution from "./employeeGrowthData";
import UpcomingSalaryPayments from "./UpcomingPayments";

function General() {
  return (
    <div className="">
      <div className="md:h-20 flex gap-4 md:items-center items-start flex-col md:flex-row justify-between mb-[30px]">
        <h1 className="text-[22px] md:text-3xl font-bold text-textColor">
          Dashboard
        </h1>
      </div>
      <div>
        <Metrics />
        <AbsenteeRateChart />
        <TotalSalaryChart />
        <EmployeeGrowthAndDepartmentDistribution />
        <UpcomingSalaryPayments />
      </div>
    </div>
  );
}

export default General;
