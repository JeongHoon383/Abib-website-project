import { useDispatch, useSelector } from "react-redux";
import ReviewModal from "./Review/ReviewModal";
import ReviewPhotoModal from "./Review/ReviewPhotoModal";
import { closeModal, selectModal } from "../Modules/Modal";

const modalTypes = {
  ReviewModal: "ReviewModal",
  ReviewPhotoModal: "ReviewPhotoModal",
};

const modalComponents = {
  [modalTypes.ReviewModal]: ReviewModal,
  [modalTypes.ReviewPhotoModal]: ReviewPhotoModal,
};

export default function GlobalModal() {
  const { modalType, isOpen, modalData } = useSelector(selectModal);
  const dispatch = useDispatch();
  if (!isOpen) return;

  const ModalComponent = modalComponents[modalType];

  if (!ModalComponent) {
    console.error(`Unknown modal type: ${modalType}`);
    return null;
  }

  return (
    <div className="absolute bottom-0 left-0 right-0 top-0 z-10 flex h-full w-full flex-col items-center">
      <div
        className="fixed h-full w-full bg-black/70"
        onClick={() => {
          dispatch(closeModal());
        }}
      />
      <ModalComponent {...modalData} />
    </div>
  );
}
