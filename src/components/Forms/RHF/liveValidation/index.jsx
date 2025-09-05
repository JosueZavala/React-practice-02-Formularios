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
  })
  .required();

export default function ReactHookFormLiveValidation() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({ resolver: yupResolver(schema), mode: "onChange" });

  const onSubmit = async (data) => {
    // Simula envío
    await new Promise((r) => setTimeout(r, 600));
    alert(JSON.stringify(data, null, 2));
  };

  return (
    <>
      <div>
        <h2>React Hook Form Live Validation</h2>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <label>Nombre</label>
        <input {...register("name")} />
        {errors.name && <small>{errors.name.message}</small>}

        <label>Email</label>
        <input type="email" {...register("email")} />
        {errors.email && <small>{errors.email.message}</small>}

        <button disabled={isSubmitting}>Enviar</button>
      </form>
    </>
  );
}
