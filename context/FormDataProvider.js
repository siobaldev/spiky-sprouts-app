"use client";

import { createContext, useContext, useState } from "react";

const FormDataContext = createContext();

export function FormDataProvider({ children }) {
  const [formData, setFormData] = useState(null);

  return (
    <FormDataContext.Provider value={{ formData, setFormData }}>
      {children}
    </FormDataContext.Provider>
  );
}

export function useFormData() {
  return useContext(FormDataContext);
}
