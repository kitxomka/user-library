
export const isFormValid = (editModal) => {
    return (
      !isValueValid(editModal.firstName) ||
      !isValueValid(editModal.lastName) ||
      !isValueValid(editModal.country) ||
      !isValueValid(editModal.city) ||
      !isValueValid(editModal.street) ||
      !isEmailValid(editModal.userEmail)
    );
};

export const isEmailValid = (value) => {
  let regex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  return regex.test(value);
};

export const isValueValid = (value) => {
  return value.length > 2;
};