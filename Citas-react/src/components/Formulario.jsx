import { useState, useEffect } from "react";
import Error from "./error";

const Formulario = ({ pacientes , setPacientes, paciente}) => {
  const [nombre, setNombre] = useState("");
  const [propietario, setPropietario] = useState("");
  const [email, setEmail] = useState("");
  const [fecha, setFecha] = useState("");
  const [sintomas, setSintomas] = useState("");
  
  const [error, setError] = useState(false);

  useEffect(() => {

  }, [paciente]);


  const generarId = () => {
    const random = Math.random().toString(36).substring(2);
    const fecha = Date.now().toString(36);
    return fecha + random;
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if ([nombre, propietario, email, fecha, sintomas].includes("")) {
      setError(true);
    } else {
      const objetoPaciente = {nombre, propietario, email, fecha, sintomas, id:generarId()}
      setError(false);
      setPacientes([...pacientes, objetoPaciente]);
      console.log("Formulario enviado");
      setNombre("");
      setPropietario("");
      setEmail("");
      setFecha("");
      setSintomas("");
    }
  };

  return (
    <div className="md:w-1/2 lg:w-2/5">
      <h2 className="font-black text-3xl text-center">Seguimiento Pacienes</h2>

      <p className="text-lg mt-5 text-center mb-10">
        Añade Pacientes y{" "}
        <span className="text-indigo-600 font-bold"> Administralos</span>
      </p>

      <form
        className="bg-white shadow-md rounded-lg py-10 px-5 mb-10"
        onSubmit={handleSubmit}
      >
        {error ? <Error mensaje = "Complete todos los campos"/> : null}

        <div className="mb-5">
          <label
            htmlFor="mascota"
            className="block text-grey-700 uppercase font-bold"
          >
            Nombre Mascota
          </label>
          <input
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            id="mascota"
            type="text"
            placeholder="Nombre de la Mascota"
            className="border-2 w-full p-2 mt-2 placeholder-grey-400 rounded-md"
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="propietario"
            className="block text-grey-700 uppercase font-bold"
          >
            Nombre Propietario
          </label>
          <input
            value={propietario}
            onChange={(e) => setPropietario(e.target.value)}
            id="propietario"
            type="text"
            placeholder="Nombre del propietario"
            className="border-2 w-full p-2 mt-2 placeholder-grey-400 rounded-md"
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="email"
            className="block text-grey-700 uppercase font-bold"
          >
            Email Contacto Propietario
          </label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            id="email"
            type="email"
            placeholder="Nombre del propietario"
            className="border-2 w-full p-2 mt-2 placeholder-grey-400 rounded-md"
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="alta"
            className="block text-grey-700 uppercase font-bold"
          >
            Alta
          </label>
          <input
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
            id="alta"
            type="date"
            className="border-2 w-full p-2 mt-2 placeholder-grey-400 rounded-md"
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="sintomas"
            className="block text-grey-700 uppercase font-bold"
          >
            Sintomas
          </label>
          <textarea
            value={sintomas}
            onChange={(e) => setSintomas(e.target.value)}
            id="sintomas"
            placeholder="Describe los Sintomas"
            type="date"
            className="border-2 w-full p-2 mt-2 placeholder-grey-400 rounded-md
                    "
          />
        </div>

        <input
          value="AGREGAR PACIENTE"
          type="submit"
          className="cursor-pointer bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 transition-all"
        />
      </form>
    </div>
  );
};

export default Formulario;
