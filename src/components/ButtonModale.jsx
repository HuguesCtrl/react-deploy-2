import "../modale.css";

function ButtonModale({ toggleModal }) {
  return (
    <button className="btn-modale" onClick={() => toggleModal()}>
      Ouvrir la modale !
    </button>
  );
}
export default ButtonModale;
