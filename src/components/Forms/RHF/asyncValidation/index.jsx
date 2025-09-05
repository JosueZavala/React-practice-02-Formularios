import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const checkUsername = async (u) => {
  await new Promise((r) => setTimeout(r, 300)); // simula API
  return u.toLowerCase() !== "admin"; // “admin” ocupado
};

const schema = yup.object({
  username: yup
    .string()
    .required("Usuario requerido")
    .test("available", "Usuario no disponible", (value) =>
      checkUsername(value || "")
    ),
});

export default function ReactHookFormAsyncValidation() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({ resolver: yupResolver(schema), mode: "onChange" });

  const onSubmit = async (data) => {
    console.log(data);
  };

  return (
    <>
      <div>
        <h2>React Hook Form Async Validation</h2>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <label>UserName</label>
        <input placeholder="write admin" {...register("username")} />
        {errors.username && <small>{errors.username.message}</small>}

        <button disabled={isSubmitting}>Enviar</button>
      </form>
    </>
  );
}
