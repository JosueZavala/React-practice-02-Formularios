import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

// Función que simula el fetch
const fetchUserData = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        name: "Josué",
        terms: true,
      });
    }, 500); // retraso simulado de 500ms
  });
};

export default function ReactHookFormReset() {
  const { register, handleSubmit, reset, setValue, watch } = useForm({
    defaultValues: { name: "Invitado", terms: false },
  });

  // Leer cambios en tiempo real
  const accept = watch("terms");

  // Escribir un valor desde UI externa
  // setValue("name", "Josué");

  useEffect(() => {
    fetchUserData().then((data) => {
      reset(data); // 👈 adaptas la data al formulario
    });
  }, [reset]);

  const onSubmit = async (data) => {
    // Simula envío
    await new Promise((r) => setTimeout(r, 600));
    alert(JSON.stringify(data, null, 2));
  };

  return (
    <>
      <div>
        <h2>React Hook Form - Reset Form</h2>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <label>Nombre</label>
        <input {...register("name")} />
        <label>Terms</label>
        <input type="checkbox" {...register("terms")} />
      </form>
    </>
  );
}
