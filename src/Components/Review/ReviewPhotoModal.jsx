import React from "react";

export default function ReviewPhotoModal({ setModalOpen }) {
  const closeModal = () => {
    setModalOpen(false);
  };
  return (
    // container
    <div className="absolute bottom-0 left-0 right-0 top-0 z-10 flex h-full w-full flex-col items-center">
      {/* background */}
      <div className="fixed h-full w-full bg-black/70" />
      {/* Modal */}
      <div className="absolute min-h-96 w-[22rem] bg-white p-5">
        <div className="border-b-2 border-black pb-2">
          <button
            onClick={closeModal}
            type="button"
            className="end-2.5 ms-auto bg-transparent text-sm text-gray-400"
          >
            <svg
              className="h-3 w-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
