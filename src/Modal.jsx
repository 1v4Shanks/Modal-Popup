import { MdOutlineCancel } from "react-icons/md";
import { FiDownload } from "react-icons/fi";

export default function Modal({ onClose }) {
  return (
    <div className="popup-container" onClick={onClose}>
      <div className="popup-content" onClick={(e) => e.stopPropagation()}>
        <MdOutlineCancel onClick={onClose} className="icon1" />
        <h1>Dowload free ebook</h1>
        <p>
          Want to Learn How to Become
          <br />
          Proficient in Web Development!{" "}
        </p>
        <button className="btn2" onClick={onClose}>
          {" "}
          <FiDownload className="icon2" />
          Download eBook
        </button>
      </div>
    </div>
  );
} 