import { useState } from "react";
import { createPortal } from "react-dom";
import ModaleRender from "../components/ModaleRender";
import ButtonModale from "../components/ButtonModale";

function Modale() {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
    console.log(!modal);
  };
  return (
    <div className="container">
      <ButtonModale toggleModal={toggleModal} />
      {modal &&
        createPortal(<ModaleRender setModal={setModal} />, document.body)}
    </div>
  );
}
export default Modale;
