function ModaleRender({ setModal }) {
  return (
    <div className="modale">
      <div className="overlay" onClick={() => setModal(false)}>
        <div className="modale-content" onClick={(e) => e.stopPropagation()}>
          <h1>Je suis la modale</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore
            deserunt delectus inventore ducimus assumenda reiciendis et nostrum
            sint alias excepturi commodi, tenetur esse consequuntur aliquid quod
            vero, impedit fuga vitae.
          </p>
          <button onClick={() => setModal(false)}>X</button>
        </div>
      </div>
    </div>
  );
}
export default ModaleRender;
