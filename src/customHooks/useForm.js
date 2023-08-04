import { useState } from "react";

export function useForm(initialFields) {
  const [fields, setFields] = useState(initialFields);

  function handleChange({ target }) {
    const field = target.name;
    let value = target.value;

    switch (target.type) {
      case "number":
      case "range":
        value = +value; // Convert value to a number if the input type is number or range
        break;
      case "checkbox":
        value = target.checked; // Use the "checked" property for checkboxes
        break;
      case "radio":
        value = target.checked; // Use the "checked" property for radio buttons
        break;
      default:
        break;
    }

    setFields((prevFields) => ({ ...prevFields, [field]: value }));
  }

  return [fields, handleChange, setFields];
}
