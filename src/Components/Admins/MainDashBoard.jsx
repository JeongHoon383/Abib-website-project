import React, { PureComponent } from "react";
import { FaEllipsisV } from "react-icons/fa";
import PieComponent from "./PieComponent";
import { Progress, Tooltip, Space } from "antd";
import { FaRegCalendarMinus } from "react-icons/fa";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

export default function Main() {
  return (
    <div className=" bg-[#f8f9fc] px-[25px] pt-[25px]  shadow">
      <div className="flex items-center justify-between">
        <h1 className="cursor-pointer text-[28px] font-normal leading-[34px] text-[#5a5c69]">
          Dashboard
        </h1>
        <button className="flex h-[32px] items-center justify-center rounded-[3px] bg-[#2e59d9] px-[30px] text-white ">
          Generate Report
        </button>
      </div>

      <div className="mt-[25px] grid grid-cols-4 gap-[30px] pb-[15px]">
        <div className="hover:shadow-1g trnasition flex h-[100px] transform cursor-pointer items-center justify-between rounded-[8px] border-l-[4px] border-[#4e73df] bg-white px-[30px] duration-300 ease-out hover:scale-[103%]">
          <div>
            <h2 className="text-[11px] font-bold leading-[17px] text-[#b589df]">
              EARNINGS (MONTHLY)
            </h2>
            <h1 className="mt-[5px] text-[20px]  font-bold leading-[24px] text-[#5a5c69]">
              $40,000
            </h1>
          </div>

          <FaRegCalendarMinus fontSize={28} color="" />
        </div>
        <div className="hover:shadow-1g trnasition flex h-[100px] transform cursor-pointer items-center justify-between rounded-[8px] border-l-[4px] border-[#4e73df] bg-white px-[30px] duration-300 ease-out hover:scale-[103%]">
          <div>
            <h2 className="text-[11px] font-bold leading-[17px] text-[#1CC88A]">
              EARNINGS (ANNUAL)
            </h2>
            <h1 className="mt-[5px] text-[20px]  font-bold leading-[24px] text-[#5a5c69]">
              $240,000
            </h1>
          </div>

          <FaRegCalendarMinus fontSize={28} color="" />
        </div>

        <div className="hover:shadow-1g trnasition flex h-[100px] transform cursor-pointer items-center justify-between rounded-[8px] border-l-[4px] border-[#4e73df] bg-white px-[30px] duration-300 ease-out hover:scale-[103%]">
          <div>
            <h2 className="text-[11px] font-bold leading-[17px] text-[#1CC88A]">
              TASKS
            </h2>
            <h1 className="mt-[5px] text-[20px]  font-bold leading-[24px] text-[#5a5c69]">
              $240,000
            </h1>
          </div>

          <FaRegCalendarMinus fontSize={28} color="" />
        </div>
        <div className="hover:shadow-1g trnasition flex h-[100px] transform cursor-pointer items-center justify-between rounded-[8px] border-l-[4px] border-[#4e73df] bg-white px-[30px] duration-300 ease-out hover:scale-[103%]">
          <div>
            <h2 className="text-[11px] font-bold leading-[17px] text-[#b589df]">
              PENDING REQUESTS
            </h2>
            <h1 className="mt-[5px] text-[20px]  font-bold leading-[24px] text-[#5a5c69]">
              $240,000
            </h1>
          </div>

          <FaRegCalendarMinus fontSize={28} color="" />
        </div>
      </div>

      <div className="mt-[22px] flex w-full gap-[30px]">
        <div className="basis-[70%] cursor-pointer rounded-[4px] border bg-white shadow-md">
          <div className="mb-[20px] flex items-center justify-between border-b-[1px] border-[#ededed] bg-[#f8f9fc] px-[20px] py-[15px]">
            <h2>Earnings Overview</h2>
            <FaEllipsisV color="gray" className="cursor-pointer" />
          </div>
          <div>
            <LineChart
              width={1150}
              height={500}
              data={data}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="pv"
                stroke="#8884d8"
                activeDot={{ r: 8 }}
              />
              <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
            </LineChart>
          </div>
        </div>

        <div className="basis-[30%] cursor-pointer rounded-[4px] bg-white shadow-md ">
          <div className="flex items-center justify-between border-b-[1px] border-[#ededed] bg-[#f8f9fc] px-[20px] py-[15px]">
            <h2>Revenue Resources</h2>
            <FaEllipsisV color="gray" className="cursor-pointer" />
          </div>
          <div className="pl-[35px]">
            <PieComponent />
          </div>
        </div>
      </div>

      <div className="mt-[22px] flex w-full gap-[30px]">
        <div className="basis-[55%] cursor-pointer rounded-[4px] border bg-white shadow-md">
          <div className="flex items-center justify-between border-b-[1px] border-[#ededed] bg-[#f8f9fc] px-[20px] py-[15px]">
            <h2 className="text-[16px] font-bold leading-[19px] text-[#4e73df]">
              Projects Overview
            </h2>
            <FaEllipsisV color="gray" className="cursor-pointer" />
          </div>

          <div className="space-y-[15px] px-[25px] py-[15px]">
            <h2>매출 성장률</h2>
            <Progress percent={30} strokeColor="#e74a3b" />
          </div>
          <div className="space-y-[15px] px-[25px] py-[15px]">
            <h2>마케팅 홍보</h2>
            <Progress percent={50} status="active" strokeColor="#f6c23e" />
          </div>
          <div className="space-y-[15px] px-[25px] py-[15px]">
            <h2>국내시장 점유율</h2>
            <Progress percent={70} status="active" strokeColor="#4e73df" />
          </div>
        </div>
        <div className="basis-[45%] cursor-pointer rounded-[4px] border bg-white shadow-md">
          <div className="flex items-center justify-between border-b-[1px] border-[#ededed] bg-[#f8f9fc] px-[20px] py-[15px]">
            <h2 className="text-[16px] font-bold leading-[19px] text-[#4e73df]">
              Resources
            </h2>
            <FaEllipsisV color="gray" className="cursor-pointer" />
          </div>
          <div className="space-y-[30px] px-[25px] py-[30px]">
            <Tooltip title="3 done / 3 in progress / 4 to do">
              <Progress
                percent={60}
                success={{
                  percent: 30,
                }}
              />
            </Tooltip>
            <Space wrap>
              <Tooltip title="3 done / 3 in progress / 4 to do">
                <Progress
                  percent={30}
                  success={{
                    percent: 30,
                  }}
                  type="circle"
                />
              </Tooltip>
              <Tooltip title="3 done / 3 in progress / 4 to do">
                <Progress
                  percent={70}
                  success={{
                    percent: 30,
                  }}
                  type="dashboard"
                />
              </Tooltip>
            </Space>
          </div>
        </div>
      </div>
    </div>
  );
}
