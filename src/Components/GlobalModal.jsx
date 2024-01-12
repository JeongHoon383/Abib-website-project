import { useSelector } from "react-redux";
import ReviewModal from "./Review/ReviewModal";
import ReviewPhotoModal from "./Review/ReviewPhotoModal";
import { selectModal } from "../Modules/Modal";

const modalTypes = {
  ReviewModal: "ReviewModal",
  ReviewPhotoModal: "ReviewPhotoModal",
};

const modalComponents = [
  {
    type: modalTypes.ReviewModal,
    component: <ReviewModal />,
  },
  {
    type: modalTypes.ReviewPhotoModal,
    component: <ReviewPhotoModal />,
  },
];

export default function GlobalModal() {
  const { modalType, isOpen } = useSelector(selectModal);
  if (!isOpen) return;

  const findModal = modalComponents.find((modal) => {
    return modal.type === modalType;
  });

  const renderModal = () => {
    return findModal.component;
  };

  return (
    <div className="absolute bottom-0 left-0 right-0 top-0 z-10 flex h-full w-full flex-col items-center">
      <div className="fixed h-full w-full bg-black/70" />
      {renderModal()}
    </div>
  );
}
