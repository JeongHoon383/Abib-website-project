import React from "react";
import AdminNav from "./AdminNav";

export default function Products() {
  return (
    <>
      <div className="flex">
        <AdminNav />
        <div className="flex-1">
          <div className="h-screen bg-gray-100 p-5">
            <h1 className="mb-2 text-xl font-bold text-gray-500">
              Products List
            </h1>

            <div className="overflow-auto rounded-lg shadow ">
              <table className="w-full">
                <thead className="border border-b-2 border-gray-300 bg-gray-50">
                  <tr className="bg-white">
                    <th className="traking-wide p-3 text-left text-sm font-semibold">
                      No.
                    </th>
                    <th className="traking-wide p-3 text-left text-sm font-semibold">
                      Title
                    </th>
                    <th className="traking-wide p-3 text-left text-sm font-semibold">
                      Eng Title
                    </th>
                    <th className="traking-wide p-3 text-left text-sm font-semibold">
                      Product Volume
                    </th>
                    <th className="traking-wide p-3 text-left text-sm font-semibold">
                      Original Price
                    </th>
                    <th className="traking-wide p-3 text-left text-sm font-semibold">
                      Price Sales
                    </th>
                    <th className="traking-wide p-3 text-left text-sm font-semibold">
                      Prod Option
                    </th>
                    <th className="traking-wide p-3 text-left text-sm font-semibold">
                      Functional
                    </th>
                    <th className="traking-wide p-3 text-left text-sm font-semibold">
                      Category
                    </th>
                    <th className="traking-wide p-3 text-left text-sm font-semibold">
                      Description
                    </th>
                    <th className="traking-wide p-3 text-left text-sm font-semibold">
                      Image(Cover)
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
                        어성초 카밍 토너/스킨 부스터
                      </td>
                      <td className="white-space-nowrap p-3 text-sm text-gray-700">
                        Heartleaf calming toner Skin booster
                      </td>
                      <td className="white-space-nowrap p-3 text-sm text-gray-700">
                        200ml
                      </td>
                      <td className="white-space-nowrap p-3 text-sm text-gray-700">
                        23,000
                      </td>
                      <td className="white-space-nowrap p-3 text-sm text-gray-700">
                        16,100
                      </td>
                      <td className="white-space-nowrap p-3 text-sm text-gray-700">
                        -
                      </td>
                      <td className="white-space-nowrap p-3 text-sm text-gray-700">
                        -
                      </td>
                      <td className="white-space-nowrap p-3 text-sm text-gray-700">
                        스킨케어/진정
                      </td>
                      <td className="white-space-nowrap p-3 text-sm text-gray-700">
                        지친 피부를 위한 촘촘한 보습/진정이 필요한 순간, 어성초
                        토너
                      </td>
                      <td className="white-space-nowrap p-3 text-sm text-gray-700">
                        1704522357546-580577773_Heartleaf calming toner Skin
                        booster.jpg
                      </td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="white-space-nowrap p-3 text-sm text-gray-700">
                        <a
                          href=""
                          className="font-bold text-blue-500 hover:underline"
                        >
                          2
                        </a>
                      </td>
                      <td className="white-space-nowrap p-3 text-sm text-gray-700">
                        어성초 카밍 토너/스킨 부스터
                      </td>
                      <td className="white-space-nowrap p-3 text-sm text-gray-700">
                        Heartleaf calming toner Skin booster
                      </td>
                      <td className="white-space-nowrap p-3 text-sm text-gray-700">
                        200ml
                      </td>
                      <td className="white-space-nowrap p-3 text-sm text-gray-700">
                        23,000
                      </td>
                      <td className="white-space-nowrap p-3 text-sm text-gray-700">
                        16,100
                      </td>
                      <td className="white-space-nowrap p-3 text-sm text-gray-700">
                        -
                      </td>
                      <td className="white-space-nowrap p-3 text-sm text-gray-700">
                        -
                      </td>
                      <td className="white-space-nowrap p-3 text-sm text-gray-700">
                        스킨케어/진정
                      </td>
                      <td className="white-space-nowrap p-3 text-sm text-gray-700">
                        지친 피부를 위한 촘촘한 보습/진정이 필요한 순간, 어성초
                        토너
                      </td>
                      <td className="white-space-nowrap p-3 text-sm text-gray-700">
                        1704522357546-580577773_Heartleaf calming toner Skin
                        booster.jpg
                      </td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="white-space-nowrap p-3 text-sm text-gray-700">
                        <a
                          href=""
                          className="font-bold text-blue-500 hover:underline"
                        >
                          3
                        </a>
                      </td>
                      <td className="white-space-nowrap p-3 text-sm text-gray-700">
                        어성초 카밍 토너/스킨 부스터
                      </td>
                      <td className="white-space-nowrap p-3 text-sm text-gray-700">
                        Heartleaf calming toner Skin booster
                      </td>
                      <td className="white-space-nowrap p-3 text-sm text-gray-700">
                        200ml
                      </td>
                      <td className="white-space-nowrap p-3 text-sm text-gray-700">
                        23,000
                      </td>
                      <td className="white-space-nowrap p-3 text-sm text-gray-700">
                        16,100
                      </td>
                      <td className="white-space-nowrap p-3 text-sm text-gray-700">
                        -
                      </td>
                      <td className="white-space-nowrap p-3 text-sm text-gray-700">
                        -
                      </td>
                      <td className="white-space-nowrap p-3 text-sm text-gray-700">
                        스킨케어/진정
                      </td>
                      <td className="white-space-nowrap p-3 text-sm text-gray-700">
                        지친 피부를 위한 촘촘한 보습/진정이 필요한 순간, 어성초
                        토너
                      </td>
                      <td className="white-space-nowrap p-3 text-sm text-gray-700">
                        1704522357546-580577773_Heartleaf calming toner Skin
                        booster.jpg
                      </td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="white-space-nowrap p-3 text-sm text-gray-700">
                        <a
                          href=""
                          className="font-bold text-blue-500 hover:underline"
                        >
                          4
                        </a>
                      </td>
                      <td className="white-space-nowrap p-3 text-sm text-gray-700">
                        어성초 카밍 토너/스킨 부스터
                      </td>
                      <td className="white-space-nowrap p-3 text-sm text-gray-700">
                        Heartleaf calming toner Skin booster
                      </td>
                      <td className="white-space-nowrap p-3 text-sm text-gray-700">
                        200ml
                      </td>
                      <td className="white-space-nowrap p-3 text-sm text-gray-700">
                        23,000
                      </td>
                      <td className="white-space-nowrap p-3 text-sm text-gray-700">
                        16,100
                      </td>
                      <td className="white-space-nowrap p-3 text-sm text-gray-700">
                        -
                      </td>
                      <td className="white-space-nowrap p-3 text-sm text-gray-700">
                        -
                      </td>
                      <td className="white-space-nowrap p-3 text-sm text-gray-700">
                        스킨케어/진정
                      </td>
                      <td className="white-space-nowrap p-3 text-sm text-gray-700">
                        지친 피부를 위한 촘촘한 보습/진정이 필요한 순간, 어성초
                        토너
                      </td>
                      <td className="white-space-nowrap p-3 text-sm text-gray-700">
                        1704522357546-580577773_Heartleaf calming toner Skin
                        booster.jpg
                      </td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="white-space-nowrap p-3 text-sm text-gray-700">
                        <a
                          href=""
                          className="font-bold text-blue-500 hover:underline"
                        >
                          5
                        </a>
                      </td>
                      <td className="white-space-nowrap p-3 text-sm text-gray-700">
                        어성초 카밍 토너/스킨 부스터
                      </td>
                      <td className="white-space-nowrap p-3 text-sm text-gray-700">
                        Heartleaf calming toner Skin booster
                      </td>
                      <td className="white-space-nowrap p-3 text-sm text-gray-700">
                        200ml
                      </td>
                      <td className="white-space-nowrap p-3 text-sm text-gray-700">
                        23,000
                      </td>
                      <td className="white-space-nowrap p-3 text-sm text-gray-700">
                        16,100
                      </td>
                      <td className="white-space-nowrap p-3 text-sm text-gray-700">
                        -
                      </td>
                      <td className="white-space-nowrap p-3 text-sm text-gray-700">
                        -
                      </td>
                      <td className="white-space-nowrap p-3 text-sm text-gray-700">
                        스킨케어/진정
                      </td>
                      <td className="white-space-nowrap p-3 text-sm text-gray-700">
                        지친 피부를 위한 촘촘한 보습/진정이 필요한 순간, 어성초
                        토너
                      </td>
                      <td className="white-space-nowrap p-3 text-sm text-gray-700">
                        1704522357546-580577773_Heartleaf calming toner Skin
                        booster.jpg
                      </td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="white-space-nowrap p-3 text-sm text-gray-700">
                        <a
                          href=""
                          className="font-bold text-blue-500 hover:underline"
                        >
                          6
                        </a>
                      </td>
                      <td className="white-space-nowrap p-3 text-sm text-gray-700">
                        어성초 카밍 토너/스킨 부스터
                      </td>
                      <td className="white-space-nowrap p-3 text-sm text-gray-700">
                        Heartleaf calming toner Skin booster
                      </td>
                      <td className="white-space-nowrap p-3 text-sm text-gray-700">
                        200ml
                      </td>
                      <td className="white-space-nowrap p-3 text-sm text-gray-700">
                        23,000
                      </td>
                      <td className="white-space-nowrap p-3 text-sm text-gray-700">
                        16,100
                      </td>
                      <td className="white-space-nowrap p-3 text-sm text-gray-700">
                        -
                      </td>
                      <td className="white-space-nowrap p-3 text-sm text-gray-700">
                        -
                      </td>
                      <td className="white-space-nowrap p-3 text-sm text-gray-700">
                        스킨케어/진정
                      </td>
                      <td className="white-space-nowrap p-3 text-sm text-gray-700">
                        지친 피부를 위한 촘촘한 보습/진정이 필요한 순간, 어성초
                        토너
                      </td>
                      <td className="white-space-nowrap p-3 text-sm text-gray-700">
                        1704522357546-580577773_Heartleaf calming toner Skin
                        booster.jpg
                      </td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="white-space-nowrap p-3 text-sm text-gray-700">
                        <a
                          href=""
                          className="font-bold text-blue-500 hover:underline"
                        >
                          7
                        </a>
                      </td>
                      <td className="white-space-nowrap p-3 text-sm text-gray-700">
                        어성초 카밍 토너/스킨 부스터
                      </td>
                      <td className="white-space-nowrap p-3 text-sm text-gray-700">
                        Heartleaf calming toner Skin booster
                      </td>
                      <td className="white-space-nowrap p-3 text-sm text-gray-700">
                        200ml
                      </td>
                      <td className="white-space-nowrap p-3 text-sm text-gray-700">
                        23,000
                      </td>
                      <td className="white-space-nowrap p-3 text-sm text-gray-700">
                        16,100
                      </td>
                      <td className="white-space-nowrap p-3 text-sm text-gray-700">
                        -
                      </td>
                      <td className="white-space-nowrap p-3 text-sm text-gray-700">
                        -
                      </td>
                      <td className="white-space-nowrap p-3 text-sm text-gray-700">
                        스킨케어/진정
                      </td>
                      <td className="white-space-nowrap p-3 text-sm text-gray-700">
                        지친 피부를 위한 촘촘한 보습/진정이 필요한 순간, 어성초
                        토너
                      </td>
                      <td className="white-space-nowrap p-3 text-sm text-gray-700">
                        1704522357546-580577773_Heartleaf calming toner Skin
                        booster.jpg
                      </td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="white-space-nowrap p-3 text-sm text-gray-700">
                        <a
                          href=""
                          className="font-bold text-blue-500 hover:underline"
                        >
                          8
                        </a>
                      </td>
                      <td className="white-space-nowrap p-3 text-sm text-gray-700">
                        어성초 카밍 토너/스킨 부스터
                      </td>
                      <td className="white-space-nowrap p-3 text-sm text-gray-700">
                        Heartleaf calming toner Skin booster
                      </td>
                      <td className="white-space-nowrap p-3 text-sm text-gray-700">
                        200ml
                      </td>
                      <td className="white-space-nowrap p-3 text-sm text-gray-700">
                        23,000
                      </td>
                      <td className="white-space-nowrap p-3 text-sm text-gray-700">
                        16,100
                      </td>
                      <td className="white-space-nowrap p-3 text-sm text-gray-700">
                        -
                      </td>
                      <td className="white-space-nowrap p-3 text-sm text-gray-700">
                        -
                      </td>
                      <td className="white-space-nowrap p-3 text-sm text-gray-700">
                        스킨케어/진정
                      </td>
                      <td className="white-space-nowrap p-3 text-sm text-gray-700">
                        지친 피부를 위한 촘촘한 보습/진정이 필요한 순간, 어성초
                        토너
                      </td>
                      <td className="white-space-nowrap p-3 text-sm text-gray-700">
                        1704522357546-580577773_Heartleaf calming toner Skin
                        booster.jpg
                      </td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="white-space-nowrap p-3 text-sm text-gray-700">
                        <a
                          href=""
                          className="font-bold text-blue-500 hover:underline"
                        >
                          9
                        </a>
                      </td>
                      <td className="white-space-nowrap p-3 text-sm text-gray-700">
                        어성초 카밍 토너/스킨 부스터
                      </td>
                      <td className="white-space-nowrap p-3 text-sm text-gray-700">
                        Heartleaf calming toner Skin booster
                      </td>
                      <td className="white-space-nowrap p-3 text-sm text-gray-700">
                        200ml
                      </td>
                      <td className="white-space-nowrap p-3 text-sm text-gray-700">
                        23,000
                      </td>
                      <td className="white-space-nowrap p-3 text-sm text-gray-700">
                        16,100
                      </td>
                      <td className="white-space-nowrap p-3 text-sm text-gray-700">
                        -
                      </td>
                      <td className="white-space-nowrap p-3 text-sm text-gray-700">
                        -
                      </td>
                      <td className="white-space-nowrap p-3 text-sm text-gray-700">
                        스킨케어/진정
                      </td>
                      <td className="white-space-nowrap p-3 text-sm text-gray-700">
                        지친 피부를 위한 촘촘한 보습/진정이 필요한 순간, 어성초
                        토너
                      </td>
                      <td className="white-space-nowrap p-3 text-sm text-gray-700">
                        1704522357546-580577773_Heartleaf calming toner Skin
                        booster.jpg
                      </td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="white-space-nowrap p-3 text-sm text-gray-700">
                        <a
                          href=""
                          className="font-bold text-blue-500 hover:underline"
                        >
                          10
                        </a>
                      </td>
                      <td className="white-space-nowrap p-3 text-sm text-gray-700">
                        어성초 카밍 토너/스킨 부스터
                      </td>
                      <td className="white-space-nowrap p-3 text-sm text-gray-700">
                        Heartleaf calming toner Skin booster
                      </td>
                      <td className="white-space-nowrap p-3 text-sm text-gray-700">
                        200ml
                      </td>
                      <td className="white-space-nowrap p-3 text-sm text-gray-700">
                        23,000
                      </td>
                      <td className="white-space-nowrap p-3 text-sm text-gray-700">
                        16,100
                      </td>
                      <td className="white-space-nowrap p-3 text-sm text-gray-700">
                        -
                      </td>
                      <td className="white-space-nowrap p-3 text-sm text-gray-700">
                        -
                      </td>
                      <td className="white-space-nowrap p-3 text-sm text-gray-700">
                        스킨케어/진정
                      </td>
                      <td className="white-space-nowrap p-3 text-sm text-gray-700">
                        지친 피부를 위한 촘촘한 보습/진정이 필요한 순간, 어성초
                        토너
                      </td>
                      <td className="white-space-nowrap p-3 text-sm text-gray-700">
                        1704522357546-580577773_Heartleaf calming toner Skin
                        booster.jpg
                      </td>
                    </tr>
                  </>
                </tbody>
              </table>
            </div>
            <button
              type="submit"
              className="focus:shadow-outline-blue mt-5 rounded bg-gray-300 px-3 py-1 font-bold text-white hover:bg-blue-500 focus:outline-none active:bg-blue-800"
            >
              New Products
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
