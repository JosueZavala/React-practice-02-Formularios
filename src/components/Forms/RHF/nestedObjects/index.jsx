import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object({
  profile: yup.object({
    firstName: yup.string().required("Requerido"),
    address: yup.object({
      street: yup.string().required("Calle requerida"),
      zip: yup.string().matches(/^[0-9]{5}$/, "C.P. de 5 dígitos"),
    }),
  }),
});

export function NestedForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  return (
    <>
      <div>
        <h2>React Hook Form Nested Form</h2>
      </div>

      <form onSubmit={handleSubmit(console.log)}>
        <input placeholder="Nombre" {...register("profile.firstName")} />
        {errors.profile?.firstName && (
          <small>{errors.profile.firstName.message}</small>
        )}

        <input placeholder="Calle" {...register("profile.address.street")} />
        {errors.profile?.address?.street && (
          <small>{errors.profile.address.street.message}</small>
        )}

        <input placeholder="CP" {...register("profile.address.zip")} />
        {errors.profile?.address?.zip && (
          <small>{errors.profile.address.zip.message}</small>
        )}

        <button>Guardar</button>
      </form>
    </>
  );
}
