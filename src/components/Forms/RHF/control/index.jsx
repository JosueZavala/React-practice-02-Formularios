import { useForm, Controller } from "react-hook-form";

export function SelectForm() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: { color: "" },
  });

  const onSubmit = (data) => console.log(data);

  return (
    <>
      <div>
        <h2>React Hook Form Control</h2>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Color favorito</label>
        <Controller
          name="color"
          control={control}
          rules={{ required: "Selecciona un color" }}
          render={({ field }) => (
            <select {...field}>
              <option value="">-- Elegir --</option>
              <option value="blue">Azul</option>
              <option value="green">Verde</option>
            </select>
          )}
        />
        {errors.color && <small>{errors.color.message}</small>}

        <button>Enviar</button>
      </form>
    </>
  );
}
