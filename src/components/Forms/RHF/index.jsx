import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup
  .object({
    name: yup
      .string()
      .required("El nombre es obligatorio")
      .min(2, "Mínimo 2 caracteres"),
    email: yup
      .string()
      .required("El email es obligatorio")
      .email("Email no válido"),
    age: yup
      .number()
      .typeError("Debes ingresar un número")
      .integer("Debe ser entero")
      .min(18, "Debes ser mayor de edad"),
  })
  .required();

export default function BasicReactHookForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({ resolver: yupResolver(schema), mode: "onSubmit" });

  const onSubmit = async (data) => {
    // Simula envío
    await new Promise((r) => setTimeout(r, 600));
    alert(JSON.stringify(data, null, 2));
  };

  return (
    <>
      <div>
        <h2>React Hook Form</h2>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <label>Nombre</label>
        <input {...register("name")} />
        {errors.name && <small>{errors.name.message}</small>}

        <label>Email</label>
        <input type="email" {...register("email")} />
        {errors.email && <small>{errors.email.message}</small>}

        <label>Edad</label>
        <input type="number" {...register("age")} />
        {errors.age && <small>{errors.age.message}</small>}

        <button disabled={isSubmitting}>Enviar</button>
      </form>
    </>
  );
}
