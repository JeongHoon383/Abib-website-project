import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import CartModal from "../../Components/Cart/CartModal";

export default function SearchResult() {
  const { query } = useParams();
  const [searchList, setSearchList] = useState([]);
  const url = `http://192.168.50.16:9091/search/${query}`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get(url);
        setSearchList(result.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [url]);

  return (
    <div className="m-auto w-11/12">
      <div className="my-6 pl-2">
        <span className="text-xs">
          총 {searchList.length}개의 상품이 검색되었습니다.
        </span>
      </div>
      <div className="mb-52 grid grid-cols-2 gap-5 px-2 sm:grid-cols-3">
        {searchList &&
          searchList.map((item) => (
            <div key={item.pid} className="group/btn group/list">
              <div className="relative sm:group-hover/list:opacity-45 sm:group-hover/list:transition-all">
                <Link to={`/product/detail/${item.pid}`}>
                  {item.priceSales && (
                    <img
                      src={"/product/saleImg.png"}
                      alt=""
                      className="absolute left-3 top-3 w-[35px] sm:top-4 sm:w-[50px] lg:left-4 lg:w-[70px]"
                    />
                  )}
                  <img
                    src={`http://192.168.50.16:9091/uploads/${item.cover}`}
                    alt=""
                    className="mb-7"
                  />
                </Link>
                <span className="block text-sm">
                  {item.title.split("/")[0]}
                </span>
                <span className="mb-1 block text-sm font-bold sm:mb-3">
                  {item.title.split("/")[1]}
                </span>
                <p className="mb-2 text-sm font-medium text-neutral-400 sm:mb-4">
                  <span>{item.productVolume}</span>
                  {item.prodOption && <span> / {item.prodOption}</span>}
                </p>
                {item.priceSales ? (
                  <p className="text-sm">
                    <span className="mr-2 line-through">
                      ₩{item.originalPrice.toLocaleString()}
                    </span>
                    <span className="font-semibold text-blue-500">
                      ₩{item.priceSales.toLocaleString()}
                    </span>
                  </p>
                ) : (
                  <span className="text-sm">
                    ₩{item.originalPrice.toLocaleString()}
                  </span>
                )}
              </div>
              <button className="visible mb-12 mt-3 w-full border border-gray-300 px-5 py-1.5 text-center text-xs font-medium text-gray-700 hover:bg-gray-900 hover:text-white focus:outline-none focus:ring-4 focus:ring-gray-300 sm:invisible sm:py-2.5 sm:hover:transition-all sm:group-hover/btn:visible sm:group-hover/list:transition-all dark:border-gray-600 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-800">
                카트에 담기
              </button>
            </div>
          ))}
      </div>
    </div>
  );
}
