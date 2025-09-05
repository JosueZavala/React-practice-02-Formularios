# React-practice-02-Formularios

Este proyecto es una práctica de **formularios en React**, mostrando diferentes formas de manejar inputs, validaciones y envío de datos.

## 🚀 Tecnologías utilizadas

- [React](https://react.dev/)
- [React Hook Form](https://react-hook-form.com/)
- [Yup](https://github.com/jquense/yup)

## 📌 Contenido

El proyecto incluye ejemplos de:

1. **Formulario controlado** – Manejo del estado con `useState`:contentReference[oaicite:0]{index=0}.
2. **Formulario no controlado** – Uso de referencias con `useRef`:contentReference[oaicite:1]{index=1}.
3. **React Hook Form + Yup** – Manejo de formularios con validaciones declarativas:contentReference[oaicite:2]{index=2}.

## ▶️ Ejecución del proyecto

Clona el repositorio e instala las dependencias:

```bash
git clone https://github.com/<tu-usuario>/React-practice-02-Formularios.git
cd React-practice-02-Formularios
npm install
npm start
```

## 📖 Ejemplos de uso

### Formulario Controlado

```jsx
<input
  type="text"
  value={nombre}
  onChange={(e) => setNombre(e.target.value)}
  placeholder="Nombre"
/>
```

### Formulario No Controlado

```jsx
<input type="text" placeholder="Nombre" ref={nombreRef} />
```

### React Hook Form con Yup

```jsx
const schema = yup.object({
  name: yup.string().required("El nombre es obligatorio"),
  email: yup.string().email("Email no válido").required(),
});
```
