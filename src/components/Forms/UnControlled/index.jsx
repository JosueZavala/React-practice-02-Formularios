import { useRef } from "react";

function UncontrolledForm() {
  // Creamos referencias para los inputs
  const nombreRef = useRef();
  const emailRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Accedemos al valor directamente desde el DOM
    console.log("Nombre:", nombreRef.current.value);
    console.log("Email:", emailRef.current.value);
  };

  return (
    <>
      <div>
        <h2>Uncontrolled Form</h2>
      </div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Nombre" ref={nombreRef} />
        <input type="email" placeholder="Email" ref={emailRef} />
        <button type="submit">Enviar</button>
      </form>
    </>
  );
}

export default UncontrolledForm;
