import React from "react";
import AdminNav from "./AdminNav";

export default function Shipping() {
  return (
    <>
      <div className="flex">
        <AdminNav />
        <div className="flex-1">
          <div className="h-screen bg-gray-100 p-5">
            <h1 className="mb-2 text-xl font-bold text-gray-500">
              Shipping List
            </h1>

            <div className="overflow-auto rounded-lg shadow ">
              <table className="w-full">
                <thead className="border border-b-2 border-gray-300 bg-gray-50">
                  <tr className="bg-white">
                    <th className="traking-wide p-3 text-left text-sm font-semibold">
                      No.
                    </th>
                    <th className="traking-wide p-3 text-left text-sm font-semibold">
                      Delivery Name
                    </th>
                    <th className="traking-wide p-3 text-left text-sm font-semibold">
                      Delivery Postal Code
                    </th>
                    <th className="traking-wide p-3 text-left text-sm font-semibold">
                      Delivery Address1
                    </th>
                    <th className="traking-wide p-3 text-left text-sm font-semibold">
                      Delivery Phone
                    </th>
                    <th className="traking-wide p-3 text-left text-sm font-semibold">
                      Delivery Email
                    </th>
                    <th className="traking-wide p-3 text-left text-sm font-semibold">
                      Delivery Message
                    </th>
                    <th className="traking-wide p-3 text-left text-sm font-semibold">
                      Delivery Address2
                    </th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-gray-100">
                  <>
                    <tr className="bg-gray-50">
                      <td className="white-space-nowrap p-3 text-sm text-gray-700">
                        <a
                          href=""
                          className="font-bold text-blue-500 hover:underline"
                        >
                          1
                        </a>
                      </td>
                      <td className="white-space-nowrap p-3 text-sm text-gray-700">
                        Sam****
                      </td>
                      <td className="white-space-nowrap p-3 text-sm text-gray-700">
                        07293
                      </td>
                      <td className="white-space-nowrap p-3 text-sm text-gray-700">
                        Seoul, Korea
                      </td>
                      <td className="white-space-nowrap p-3 text-sm text-gray-700">
                        010-****-****
                      </td>
                      <td className="white-space-nowrap p-3 text-sm text-gray-700">
                        b***@gmail.com
                      </td>
                      <td className="white-space-nowrap p-3 text-sm text-gray-700">
                        please leave deliveries ...
                      </td>
                      <td className="white-space-nowrap p-3 text-sm text-gray-700">
                        Seoul, Korea
                      </td>
                    </tr>
                    <tr className="white-space-nowrap bg-white p-3 text-sm text-gray-700">
                      <td className="white-space-nowrap p-3 text-sm text-gray-700">
                        <a
                          href=""
                          className="font-bold text-blue-500 hover:underline"
                        >
                          2
                        </a>
                      </td>
                      <td className="white-space-nowrap p-3 text-sm text-gray-700">
                        김**
                      </td>
                      <td className="white-space-nowrap p-3 text-sm text-gray-700">
                        03955
                      </td>
                      <td className="white-space-nowrap p-3 text-sm text-gray-700">
                        경기도 일***
                      </td>
                      <td className="white-space-nowrap p-3 text-sm text-gray-700">
                        010-****-****
                      </td>
                      <td className="white-space-nowrap p-3 text-sm text-gray-700">
                        c***@gmail.com
                      </td>
                      <td className="white-space-nowrap p-3 text-sm text-gray-700">
                        부재시 경비실에 ...
                      </td>
                      <td className="white-space-nowrap p-3 text-sm text-gray-700">
                        경기도 일***
                      </td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="white-space-nowrap p-3 text-sm text-gray-700">
                        <a
                          href="#"
                          className="font-bold text-blue-500 hover:underline"
                        >
                          3
                        </a>
                      </td>
                      <td className="white-space-nowrap p-3 text-sm text-gray-700">
                        박**
                      </td>
                      <td className="white-space-nowrap p-3 text-sm text-gray-700">
                        63166
                      </td>
                      <td className="white-space-nowrap p-3 text-sm text-gray-700">
                        제주특별시 **
                      </td>
                      <td className="white-space-nowrap p-3 text-sm text-gray-700">
                        010-****-****
                      </td>
                      <td className="white-space-nowrap p-3 text-sm text-gray-700">
                        e***@naver.com
                      </td>
                      <td className="white-space-nowrap p-3 text-sm text-gray-700">
                        문앞에 두고 가주세요
                      </td>
                      <td className="white-space-nowrap p-3 text-sm text-gray-700">
                        제주특별시 **
                      </td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="white-space-nowrap p-3 text-sm text-gray-700">
                        <a
                          href="#"
                          className="font-bold text-blue-500 hover:underline"
                        >
                          4
                        </a>
                      </td>
                      <td className="white-space-nowrap p-3 text-sm text-gray-700">
                        이**
                      </td>
                      <td className="white-space-nowrap p-3 text-sm text-gray-700">
                        05235
                      </td>
                      <td className="white-space-nowrap p-3 text-sm text-gray-700">
                        서울특별시 **
                      </td>
                      <td className="white-space-nowrap p-3 text-sm text-gray-700">
                        010-****-****
                      </td>
                      <td className="white-space-nowrap p-3 text-sm text-gray-700">
                        e***@naver.com
                      </td>
                      <td className="white-space-nowrap p-3 text-sm text-gray-700">
                        문앞에 두고 가주세요
                      </td>
                      <td className="white-space-nowrap p-3 text-sm text-gray-700">
                        제주특별시 **
                      </td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="white-space-nowrap p-3 text-sm text-gray-700">
                        <a
                          href="#"
                          className="font-bold text-blue-500 hover:underline"
                        >
                          5
                        </a>
                      </td>
                      <td className="white-space-nowrap p-3 text-sm text-gray-700">
                        문**
                      </td>
                      <td className="white-space-nowrap p-3 text-sm text-gray-700">
                        05235
                      </td>
                      <td className="white-space-nowrap p-3 text-sm text-gray-700">
                        서울특별시 **
                      </td>
                      <td className="white-space-nowrap p-3 text-sm text-gray-700">
                        010-****-****
                      </td>
                      <td className="white-space-nowrap p-3 text-sm text-gray-700">
                        e***@naver.com
                      </td>
                      <td className="white-space-nowrap p-3 text-sm text-gray-700">
                        부재시 경비실에 ...
                      </td>
                      <td className="white-space-nowrap p-3 text-sm text-gray-700">
                        서울특별시 **
                      </td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="white-space-nowrap p-3 text-sm text-gray-700">
                        <a
                          href="#"
                          className="font-bold text-blue-500 hover:underline"
                        >
                          6
                        </a>
                      </td>
                      <td className="white-space-nowrap p-3 text-sm text-gray-700">
                        정**
                      </td>
                      <td className="white-space-nowrap p-3 text-sm text-gray-700">
                        03955
                      </td>
                      <td className="white-space-nowrap p-3 text-sm text-gray-700">
                        서울특별시 **
                      </td>
                      <td className="white-space-nowrap p-3 text-sm text-gray-700">
                        010-****-****
                      </td>
                      <td className="white-space-nowrap p-3 text-sm text-gray-700">
                        l***@naver.com
                      </td>
                      <td className="white-space-nowrap p-3 text-sm text-gray-700">
                        부재시 경비실에 ...
                      </td>
                      <td className="white-space-nowrap p-3 text-sm text-gray-700">
                        서울특별시 **
                      </td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="white-space-nowrap p-3 text-sm text-gray-700">
                        <a
                          href="#"
                          className="font-bold text-blue-500 hover:underline"
                        >
                          7
                        </a>
                      </td>
                      <td className="white-space-nowrap p-3 text-sm text-gray-700">
                        박**
                      </td>
                      <td className="white-space-nowrap p-3 text-sm text-gray-700">
                        03955
                      </td>
                      <td className="white-space-nowrap p-3 text-sm text-gray-700">
                        서울특별시 **
                      </td>
                      <td className="white-space-nowrap p-3 text-sm text-gray-700">
                        010-****-****
                      </td>
                      <td className="white-space-nowrap p-3 text-sm text-gray-700">
                        k***@naver.com
                      </td>
                      <td className="white-space-nowrap p-3 text-sm text-gray-700">
                        문앞에 두고 가주세요
                      </td>
                      <td className="white-space-nowrap p-3 text-sm text-gray-700">
                        서울특별시 **
                      </td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="white-space-nowrap p-3 text-sm text-gray-700">
                        <a
                          href="#"
                          className="font-bold text-blue-500 hover:underline"
                        >
                          8
                        </a>
                      </td>
                      <td className="white-space-nowrap p-3 text-sm text-gray-700">
                        신**
                      </td>
                      <td className="white-space-nowrap p-3 text-sm text-gray-700">
                        01053
                      </td>
                      <td className="white-space-nowrap p-3 text-sm text-gray-700">
                        서울특별시 **
                      </td>
                      <td className="white-space-nowrap p-3 text-sm text-gray-700">
                        010-****-****
                      </td>
                      <td className="white-space-nowrap p-3 text-sm text-gray-700">
                        c***@naver.com
                      </td>
                      <td className="white-space-nowrap p-3 text-sm text-gray-700">
                        부재시 경비실에 ...
                      </td>
                      <td className="white-space-nowrap p-3 text-sm text-gray-700">
                        서울특별시 **
                      </td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="white-space-nowrap p-3 text-sm text-gray-700">
                        <a
                          href="#"
                          className="font-bold text-blue-500 hover:underline"
                        >
                          9
                        </a>
                      </td>
                      <td className="white-space-nowrap p-3 text-sm text-gray-700">
                        유**
                      </td>
                      <td className="white-space-nowrap p-3 text-sm text-gray-700">
                        01053
                      </td>
                      <td className="white-space-nowrap p-3 text-sm text-gray-700">
                        제주특별시 **
                      </td>
                      <td className="white-space-nowrap p-3 text-sm text-gray-700">
                        010-****-****
                      </td>
                      <td className="white-space-nowrap p-3 text-sm text-gray-700">
                        t***@naver.com
                      </td>
                      <td className="white-space-nowrap p-3 text-sm text-gray-700">
                        부재시 경비실에 ...
                      </td>
                      <td className="white-space-nowrap p-3 text-sm text-gray-700">
                        제주특별시 **
                      </td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="white-space-nowrap p-3 text-sm text-gray-700">
                        <a
                          href="#"
                          className="font-bold text-blue-500 hover:underline"
                        >
                          10
                        </a>
                      </td>
                      <td className="white-space-nowrap p-3 text-sm text-gray-700">
                        정**
                      </td>
                      <td className="white-space-nowrap p-3 text-sm text-gray-700">
                        63166
                      </td>
                      <td className="white-space-nowrap p-3 text-sm text-gray-700">
                        제주특별시 **
                      </td>
                      <td className="white-space-nowrap p-3 text-sm text-gray-700">
                        010-****-****
                      </td>
                      <td className="white-space-nowrap p-3 text-sm text-gray-700">
                        t***@naver.com
                      </td>
                      <td className="white-space-nowrap p-3 text-sm text-gray-700">
                        부재시 경비실에 ...
                      </td>
                      <td className="white-space-nowrap p-3 text-sm text-gray-700">
                        제주특별시 **
                      </td>
                    </tr>
                  </>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
