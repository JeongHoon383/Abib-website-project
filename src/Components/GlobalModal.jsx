import { useDispatch, useSelector } from "react-redux";
import ReviewModal from "./Review/ReviewModal";
import ReviewPhotoModal from "./Review/ReviewPhotoModal";
import { closeModal, selectModal } from "../Modules/Modal";

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
  // modal type을 string 형태로 받습니다.
  const { modalType, isOpen } = useSelector(selectModal);
  const dispatch = useDispatch();
  if (!isOpen) return;

  const findModal = modalComponents.find((modal) => {
    return modal.type === modalType;
  });

  const renderModal = () => {
    return findModal.component;
  };

  return (
    <div className="z-60 fixed inset-0 flex items-center justify-center">
      <div
        className="fixed inset-0 bg-black/90"
        onClick={() => dispatch(closeModal())}
      />
      {renderModal()}
    </div>
  );
}
