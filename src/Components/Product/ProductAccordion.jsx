import React, { useState } from "react";
import ProductInfo from "./ProductInfo";
import ProductIngredients from "./ProductIngredients";
import ProductCaution from "./ProductCaution";

export default function ProductAccordion() {
  const [container, setContainer] = useState([
    { key: 1, title: "제품 정보", content: <ProductInfo /> },
    { key: 2, title: "전성분", content: <ProductIngredients /> },
    { key: 3, title: "사용할 때의 주의사항", content: <ProductCaution /> },
  ]);

  const [expandedItems, setExpandedItems] = useState({});

  const handleBtnClick = (key) => {
    setExpandedItems((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <>
      {container.map((item) => (
        <div id={`accordion-collapse-${item.key}`} key={item.key}>
          <h2 id={`accordion-collapse-heading-${item.key}`}>
            <button
              type="button"
              onClick={() => handleBtnClick(item.key)}
              className="lg:dark:text-gray-40 flex w-full items-center justify-between p-5 font-medium text-black rtl:text-right dark:border-gray-700 dark:focus:ring-gray-800"
            >
              <span>{item.title}</span>
              <svg
                data-accordion-icon
                className={`h-3 w-3 shrink-0 rotate-${
                  expandedItems[item.key] ? "0" : "180"
                }`}
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5 5 1 1 5"
                />
              </svg>
            </button>
          </h2>
          <div
            id={`accordion-collapse-body-${item.key}`}
            className={`mx-auto w-11/12 overflow-hidden ${
              expandedItems[item.key] ? "h-auto" : "h-0"
            }`}
          >
            <div className="border-t border-gray-200 py-4 dark:border-gray-700 dark:bg-gray-900">
              {item.content}
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
