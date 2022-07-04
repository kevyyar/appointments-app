import { createContext, useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

export const PatientsContext = createContext({})

export function PatientsProvider({ children }) {
  const [patients, setPatients] = useState([]);
  const [editPatient, setEditPatient] = useState({})

  const addPatient = (patient) => {
    setPatients((prevPatients) => {
      return [...prevPatients, { ...patient, id: uuidv4() }];
    });
  };

  console.log(editPatient)

  const onEditPatient = (patient) => {
    setEditPatient(patient);
  }

  return (
    <PatientsContext.Provider value={{ patients, addPatient, editPatient, onEditPatient }}>
      {children}
    </PatientsContext.Provider>
  )

}

