import { MdOutlineCancel } from "react-icons/md";
import { FiDownload } from "react-icons/fi";

export default function Modal({ close }) {
  return (
    <div className="popup-container" onClick={close}>
      <div className="popup-content" onClick={(e) => e.stopPropagation()}>
        <MdOutlineCancel onClick={close} className="icon1" />
        <h1>Dowload free ebook</h1>
        <p>
          Want to Learn How to Become
          <br />
          Proficient in Web Development!{" "}
        </p>
        <button className="btn2" onClick={close}>
          {" "}
          <FiDownload className="icon2" />
          Download eBook
        </button>
      </div>
    </div>
  );
} 