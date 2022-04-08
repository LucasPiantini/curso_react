import Paciente from "./Paciente";
import { useEffect } from "react/cjs/react.development";

const ListadoPacientes = ({ pacientes, setPaciente }) => {

  useEffect(() => {
    console.log("nuevo paciente");
  }, [pacientes]);

  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen">
      {pacientes && pacientes.length ? (
        <>
          <h2 className="font-black text-3xl text-center">Listado Pacientes</h2>
          <p className="text-xl mt-5 mb-10 text-center">
            Administra tus {""}
            <span className="text-indigo-600 font-bold">Pacientes y Citas</span>
          </p>

          {pacientes.map((pacientes) => (
            <Paciente key={pacientes.id} pacientes={pacientes} setPaciente={setPaciente}/>
          ))}
        </>
      ) : (
        <>
          <h2 className="font-black text-3xl text-center">No hay Pacientes</h2>
          <p className="text-xl mt-5 mb-10 text-center">
            Comienza agregando pacientes {""}
            <span className="text-indigo-600 font-bold">y aparecerán en este lugar</span>
          </p>
        </>
      )}
    </div>
  );
};

export default ListadoPacientes;
