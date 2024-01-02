import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function ProductList() {
  const [data, setData] = useState([]);
  const url = "http://127.0.0.1:9090/product/list";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get(url);
        setData(result.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [url]);

  return (
    <>
      <div className="categoryName">
        <h2 className="p-20 text-center text-3xl">스킨케어</h2>
      </div>
      <div className="m-auto w-11/12">
        <div className="categoryPath mb-4 sm:mb-8">
          <span className="text-xs">Abib / 카테고리 / 스킨케어</span>
        </div>
        <div className="mb-52 grid grid-cols-2 gap-5 px-2 sm:grid-cols-3">
          {data.map((item) => (
            <div key={item.pid} className="group/btn group/list">
              <div className="sm:group-hover/list:opacity-45 sm:group-hover/list:transition-all">
                <Link to={`/product/detail/${item.pid}`}>
                  <img src={item.cover} alt="" className="mb-7" />
                </Link>
                <p className="mb-1 text-sm sm:mb-3">{item.title}</p>
                <p className="mb-2 text-sm font-medium text-neutral-400 sm:mb-4">
                  <span>{item.productVolume}</span>
                  {item.prodOption && <span>/ {item.prodOption}</span>}
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
    </>
  );
}
