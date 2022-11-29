export const validEmail = new RegExp(
  "^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$"
);
export const validPassword = new RegExp("^(?=.*?[A-Za-z])(?=.*?[0-9]).{6,}$");

export const validNumber = new RegExp(
  "^[+]?[(]?[0-9]{3}[)]?[-s.]?[0-9]{3}[-s.]?[0-9]{4,6}$"
);
export const validPincode = new RegExp("^[1-9]{1}[0-9]{2}\\s{0, 1}[0-9]{3}$");

export const validName = new RegExp(
  "^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$"
);
