import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getProduct } from "../../Modules/Products";
import CartModal from "../../Components/Cart/CartModal";

export default function ProductList() {
  const { category } = useParams();
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productSlice.list);

  const [modalOpen, setModalOpen] = useState(false);

  const showModal = () => {
    setModalOpen(true);
  };

  useEffect(() => {
    // 서버에서 데이터를 불러오는 createAsyncThunk 호출
    dispatch(getProduct(category));
  }, [dispatch, category]);

  const replaceCategory = category.includes("_")
    ? category.replace("_", "/")
    : category;
  return (
    <>
      {modalOpen && <CartModal setModalOpen={setModalOpen} />}
      <div className="categoryName">
        <h2 className="p-20 text-center text-3xl">{replaceCategory}</h2>
      </div>
      <div className="m-auto w-11/12">
        <div className="categoryPath mb-4 sm:mb-8">
          <span className="text-xs">Abib / 카테고리 / {replaceCategory}</span>
        </div>
        <div className="mb-52 grid grid-cols-2 gap-5 px-2 sm:grid-cols-3">
          {productList.map((item) => (
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
                    src={`http://127.0.0.1:9090/uploads/${item.cover}`}
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
              <button
                onClick={showModal}
                className="visible mb-12 mt-3 w-full border border-gray-300 px-5 py-1.5 text-center text-xs font-medium text-gray-700 hover:bg-gray-900 hover:text-white focus:outline-none focus:ring-4 focus:ring-gray-300 sm:invisible sm:py-2.5 sm:hover:transition-all sm:group-hover/btn:visible sm:group-hover/list:transition-all dark:border-gray-600 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-800"
              >
                카트에 담기
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
