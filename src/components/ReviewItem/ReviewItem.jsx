import { textCut } from "helpers/textCut";
import s from "./ReviewItem.module.css";
import { format } from "date-fns";
import Loader from "components/Loader/Loader";
import { Suspense, lazy, useState } from "react";
import { createImgURL } from "helpers/createImgURL";
const Modal = lazy(() => import("../Modal/Modal"));

const ReviewItem = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);

  return (
    <>
      <li className={s.li_review} onClick={openModal}>
        <div>
          <h3>{item.author}</h3>
          <img
            className={s.icon}
            src={createImgURL(item.author_details.avatar_path, "person")}
            alt={item.name}
          />
        </div>
        <p>{textCut(item.content)}</p>
        <div className={s.date}> {format(item.created_at, "PPPP")}</div>
      </li>

      {isOpen && (
        <Suspense fallback={<Loader />}>
          <Modal onClose={closeModal} title={`${item.author}`}>
            <div className={s.modal_desc}>
              <p className={s.text}>{item.content}</p>
              <p className={s.modal_date}>{format(item.created_at, "PPPP")}</p>
            </div>
          </Modal>
        </Suspense>
      )}
    </>
  );
};

export default ReviewItem;
