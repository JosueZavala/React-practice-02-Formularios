import { useFieldArray, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object({
  emails: yup
    .array()
    .of(yup.string().email("Email inválido").required("Requerido"))
    .min(1, "Al menos un email"),
});

export function EmailsForm() {
  const {
    control,
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    defaultValues: { emails: [""] },
    resolver: yupResolver(schema),
  });

  const { fields, append, remove } = useFieldArray({ control, name: "emails" });

  return (
    <>
      <div>
        <h2>React Hook Form Emails Form</h2>
      </div>

      <form onSubmit={handleSubmit(console.log)}>
        {fields.map((field, idx) => (
          <div key={field.id}>
            <input
              {...register(`emails.${idx}`)}
              placeholder={`Email #${idx + 1}`}
            />
            <button type="button" onClick={() => remove(idx)}>
              Eliminar
            </button>
            <div>
              <small>{errors.emails?.[idx]?.message}</small>
            </div>
          </div>
        ))}
        <button type="button" onClick={() => append("")}>
          Agregar email
        </button>
        <button>Enviar</button>
      </form>
    </>
  );
}
