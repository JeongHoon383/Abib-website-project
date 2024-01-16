import React from "react";
import AdminNav from "./AdminNav";

export default function MembersList() {
  return (
    <>
      <div className="flex">
        <AdminNav />
        <div className="flex-1">
          <div className="h-screen bg-gray-100 p-5">
            <h1 className="mb-2 text-xl font-bold text-gray-500">
              Members List
            </h1>

            <div className="overflow-auto rounded-lg shadow ">
              <table className="w-full">
                <thead className="border border-b-2 border-gray-300 bg-gray-50">
                  <tr className="bg-white">
                    <th className="traking-wide p-3 text-left text-sm font-semibold">
                      No.
                    </th>
                    <th className="traking-wide p-3 text-left text-sm font-semibold">
                      Name
                    </th>
                    <th className="traking-wide p-3 text-left text-sm font-semibold">
                      Phone
                    </th>
                    <th className="traking-wide p-3 text-left text-sm font-semibold">
                      Email
                    </th>
                    <th className="traking-wide p-3 text-left text-sm font-semibold">
                      User Mileage
                    </th>
                    <th className="traking-wide p-3 text-left text-sm font-semibold">
                      Join Date
                    </th>
                    <th className="traking-wide p-3 text-left text-sm font-semibold">
                      Birth Date
                    </th>
                    <th className="traking-wide p-3 text-left text-sm font-semibold">
                      Address1
                    </th>
                    <th className="traking-wide p-3 text-left text-sm font-semibold">
                      Grade Name
                    </th>
                    <th className="traking-wide p-3 text-left text-sm font-semibold">
                      Address 2
                    </th>
                    <th className="traking-wide p-3 text-left text-sm font-semibold">
                      Postal Code
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
                        김**
                      </td>
                      <td className="white-space-nowrap p-3 text-sm text-gray-700">
                        010-****-****
                      </td>
                      <td className="white-space-nowrap p-3 text-sm text-gray-700">
                        y***@naver.com
                      </td>
                      <td className="white-space-nowrap p-3 text-sm text-gray-700">
                        1,000
                      </td>
                      <td className="white-space-nowrap p-3 text-sm text-gray-700">
                        2024-01-11
                      </td>
                      <td className="white-space-nowrap p-3 text-sm text-gray-700">
                        19**-**-** 
                      </td>
                      <td className="white-space-nowrap p-3 text-sm text-gray-700">
                        서울특별시 **
                      </td>
                      <td className="white-space-nowrap p-3 text-sm text-gray-700">
                        white
                      </td>
                      <td className="white-space-nowrap p-3 text-sm text-gray-700">
                        서울특별시 **
                      </td>
                      <td className="white-space-nowrap p-3 text-sm text-gray-700">
                        03955
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
                        이**
                      </td>
                      <td className="white-space-nowrap p-3 text-sm text-gray-700">
                        010-****-****
                      </td>
                      <td className="white-space-nowrap p-3 text-sm text-gray-700">
                        e***@naver.com
                      </td>
                      <td className="white-space-nowrap p-3 text-sm text-gray-700">
                        500
                      </td>
                      <td className="white-space-nowrap p-3 text-sm text-gray-700">
                        2019-09-05
                      </td>
                      <td className="white-space-nowrap p-3 text-sm text-gray-700">
                        19**-**-**
                      </td>
                      <td className="white-space-nowrap p-3 text-sm text-gray-700">
                        서울특별시 **
                      </td>
                      <td className="white-space-nowrap p-3 text-sm text-gray-700">
                        white
                      </td>
                      <td className="white-space-nowrap p-3 text-sm text-gray-700">
                        서울특별시 **
                      </td>
                      <td className="white-space-nowrap p-3 text-sm text-gray-700">
                        03955
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
                        윤**
                      </td>
                      <td className="white-space-nowrap p-3 text-sm text-gray-700">
                        010-****-****
                      </td>
                      <td className="white-space-nowrap p-3 text-sm text-gray-700">
                        u***gmail.com
                      </td>
                      <td className="white-space-nowrap p-3 text-sm text-gray-700">
                        500
                      </td>
                      <td className="white-space-nowrap p-3 text-sm text-gray-700">
                        2023-01-07
                      </td>
                      <td className="white-space-nowrap p-3 text-sm text-gray-700">
                        19**-**-**
                      </td>
                      <td className="white-space-nowrap p-3 text-sm text-gray-700">
                        서울특별시 **
                      </td>
                      <td className="white-space-nowrap p-3 text-sm text-gray-700">
                        white
                      </td>
                      <td className="white-space-nowrap p-3 text-sm text-gray-700">
                        서울특별시 **
                      </td>
                      <td className="white-space-nowrap p-3 text-sm text-gray-700">
                        03955
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
                        문**
                      </td>
                      <td className="white-space-nowrap p-3 text-sm text-gray-700">
                        010-****-****
                      </td>
                      <td className="white-space-nowrap p-3 text-sm text-gray-700">
                        h***gmail.com
                      </td>
                      <td className="white-space-nowrap p-3 text-sm text-gray-700">
                        500
                      </td>
                      <td className="white-space-nowrap p-3 text-sm text-gray-700">
                        2020-01-07
                      </td>
                      <td className="white-space-nowrap p-3 text-sm text-gray-700">
                        19**-**-**
                      </td>
                      <td className="white-space-nowrap p-3 text-sm text-gray-700">
                        서울특별시 **
                      </td>
                      <td className="white-space-nowrap p-3 text-sm text-gray-700">
                        white
                      </td>
                      <td className="white-space-nowrap p-3 text-sm text-gray-700">
                        서울특별시 **
                      </td>
                      <td className="white-space-nowrap p-3 text-sm text-gray-700">
                        03955
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
                        지**
                      </td>
                      <td className="white-space-nowrap p-3 text-sm text-gray-700">
                        010-****-****
                      </td>
                      <td className="white-space-nowrap p-3 text-sm text-gray-700">
                        d***gmail.com
                      </td>
                      <td className="white-space-nowrap p-3 text-sm text-gray-700">
                        500
                      </td>
                      <td className="white-space-nowrap p-3 text-sm text-gray-700">
                        2023-01-07
                      </td>
                      <td className="white-space-nowrap p-3 text-sm text-gray-700">
                        19**-**-**
                      </td>
                      <td className="white-space-nowrap p-3 text-sm text-gray-700">
                        서울특별시 **
                      </td>
                      <td className="white-space-nowrap p-3 text-sm text-gray-700">
                        white
                      </td>
                      <td className="white-space-nowrap p-3 text-sm text-gray-700">
                        서울특별시 **
                      </td>
                      <td className="white-space-nowrap p-3 text-sm text-gray-700">
                        03955
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
                        길**
                      </td>
                      <td className="white-space-nowrap p-3 text-sm text-gray-700">
                        010-****-****
                      </td>
                      <td className="white-space-nowrap p-3 text-sm text-gray-700">
                        z***gmail.com
                      </td>
                      <td className="white-space-nowrap p-3 text-sm text-gray-700">
                        500
                      </td>
                      <td className="white-space-nowrap p-3 text-sm text-gray-700">
                        2020-01-07
                      </td>
                      <td className="white-space-nowrap p-3 text-sm text-gray-700">
                        19**-**-**
                      </td>
                      <td className="white-space-nowrap p-3 text-sm text-gray-700">
                        서울특별시 **
                      </td>
                      <td className="white-space-nowrap p-3 text-sm text-gray-700">
                        white
                      </td>
                      <td className="white-space-nowrap p-3 text-sm text-gray-700">
                        서울특별시 **
                      </td>
                      <td className="white-space-nowrap p-3 text-sm text-gray-700">
                        03955
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
                        조**
                      </td>
                      <td className="white-space-nowrap p-3 text-sm text-gray-700">
                        010-****-****
                      </td>
                      <td className="white-space-nowrap p-3 text-sm text-gray-700">
                        t***gmail.com
                      </td>
                      <td className="white-space-nowrap p-3 text-sm text-gray-700">
                        500
                      </td>
                      <td className="white-space-nowrap p-3 text-sm text-gray-700">
                        2023-04-07
                      </td>
                      <td className="white-space-nowrap p-3 text-sm text-gray-700">
                        19**-**-**
                      </td>
                      <td className="white-space-nowrap p-3 text-sm text-gray-700">
                        서울특별시 **
                      </td>
                      <td className="white-space-nowrap p-3 text-sm text-gray-700">
                        white
                      </td>
                      <td className="white-space-nowrap p-3 text-sm text-gray-700">
                        서울특별시 **
                      </td>
                      <td className="white-space-nowrap p-3 text-sm text-gray-700">
                        03955
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
                        하**
                      </td>
                      <td className="white-space-nowrap p-3 text-sm text-gray-700">
                        010-****-****
                      </td>
                      <td className="white-space-nowrap p-3 text-sm text-gray-700">
                        w***gmail.com
                      </td>
                      <td className="white-space-nowrap p-3 text-sm text-gray-700">
                        500
                      </td>
                      <td className="white-space-nowrap p-3 text-sm text-gray-700">
                        2019-10-07
                      </td>
                      <td className="white-space-nowrap p-3 text-sm text-gray-700">
                        20**-**-**
                      </td>
                      <td className="white-space-nowrap p-3 text-sm text-gray-700">
                        서울특별시 **
                      </td>
                      <td className="white-space-nowrap p-3 text-sm text-gray-700">
                        white
                      </td>
                      <td className="white-space-nowrap p-3 text-sm text-gray-700">
                        서울특별시 **
                      </td>
                      <td className="white-space-nowrap p-3 text-sm text-gray-700">
                        03955
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
                        신**
                      </td>
                      <td className="white-space-nowrap p-3 text-sm text-gray-700">
                        010-****-****
                      </td>
                      <td className="white-space-nowrap p-3 text-sm text-gray-700">
                        q***gmail.com
                      </td>
                      <td className="white-space-nowrap p-3 text-sm text-gray-700">
                        3,000
                      </td>
                      <td className="white-space-nowrap p-3 text-sm text-gray-700">
                        2021-07-07
                      </td>
                      <td className="white-space-nowrap p-3 text-sm text-gray-700">
                        20**-**-**
                      </td>
                      <td className="white-space-nowrap p-3 text-sm text-gray-700">
                        서울특별시 **
                      </td>
                      <td className="white-space-nowrap p-3 text-sm text-gray-700">
                        Ivory
                      </td>
                      <td className="white-space-nowrap p-3 text-sm text-gray-700">
                        서울특별시 **
                      </td>
                      <td className="white-space-nowrap p-3 text-sm text-gray-700">
                        03955
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
                        윤**
                      </td>
                      <td className="white-space-nowrap p-3 text-sm text-gray-700">
                        010-****-****
                      </td>
                      <td className="white-space-nowrap p-3 text-sm text-gray-700">
                        u***gmail.com
                      </td>
                      <td className="white-space-nowrap p-3 text-sm text-gray-700">
                        3,000
                      </td>
                      <td className="white-space-nowrap p-3 text-sm text-gray-700">
                        2023-01-07
                      </td>
                      <td className="white-space-nowrap p-3 text-sm text-gray-700">
                        20**-**-**
                      </td>
                      <td className="white-space-nowrap p-3 text-sm text-gray-700">
                        서울특별시 **
                      </td>
                      <td className="white-space-nowrap p-3 text-sm text-gray-700">
                        Ivory
                      </td>
                      <td className="white-space-nowrap p-3 text-sm text-gray-700">
                        서울특별시 **
                      </td>
                      <td className="white-space-nowrap p-3 text-sm text-gray-700">
                        03955
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
