import { useState } from "react";

import { Header } from "./commons/Header/Header";
import { Form } from "./components/Form/Form";
import { PatientsList } from "./components/PatientsList/PatientsList";
import { ColumnLayout } from "./commons/ColumnLayout/ColumnLayout";
import "./App.styles.scss";

function App() {
  return (
    <div className="container">
      <Header />
      <ColumnLayout>
        <Form />
        <PatientsList />
      </ColumnLayout>
    </div>
  );
}

export default App;
