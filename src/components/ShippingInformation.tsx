import { useState } from "react";
import "../css/ShippingInformation.css";
import ShippingInputs from "./ShippingInputs";

export interface inputsValue {
  firstName: string;
  lastName: string;
  adress: string;
  postCode: string;
  city: string;
  country: string;
  email: string;
  phoneNumber: string;
}
const initValues = {
  firstName: "",
  lastName: "",
  adress: "",
  postCode: "",
  city: "",
  country: "",
  email: "",
  phoneNumber: "",
};
export interface errorValue {
  firstName: boolean;
  lastName: boolean;
  adress: boolean;
  postCode: boolean;
  city: boolean;
  country: boolean;
  email: boolean;
  phoneNumber: boolean;
}
const initialError = {
  firstName: false,
  lastName: false,
  adress: false,
  postCode: false,
  city: false,
  country: false,
  email: false,
  phoneNumber: false,
};

export type keysOfInputsValue = keyof inputsValue;
export type keyOfErrorValue = keyof errorValue;

function ShippingInformation() {
  const [valueInputs, setValueInputs] = useState<inputsValue>(initValues);
  const [flags, setFlag] = useState<errorValue>(initialError);
  const errors = Object.keys(initialError) as keyOfErrorValue[];

  const pay = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    let isError = false;
    errors.forEach((incorrect) => {
      flags[incorrect] = valueInputs[incorrect] === "";
      if (flags[incorrect]) isError = true;
      console.log(isError, flags[incorrect]);
      if (valueInputs["email"].includes("@")) isError = true;
    });
    setFlag({ ...flags });
    if (isError) alert("Podaj poprawne dane do wysyłki");
    else alert("Dziąkujemy za zakupy");
  };

  const updateValue = (
    e: React.FormEvent<HTMLInputElement>,
    valueName: keysOfInputsValue,
    flag: keyOfErrorValue
  ) => {
    const value = e.currentTarget.value;
    valueInputs[valueName] = value;
    setValueInputs({ ...valueInputs });
    if (valueInputs[valueName] === "") {
      flags[flag] = true;
    } else {
      flags[flag] = false;
    }
    setFlag({ ...flags });
  };
  return (
    <form className="containerForm">
      <h2
        style={{
          textAlign: "center",
          marginBottom: "30px",
        }}
      >
        Przejdź do kasy
      </h2>
      <p style={{ marginBottom: "20px" }}>Dane do wysyłki</p>
      <div className="groupInput">
        <div className="containerForError">
          <ShippingInputs
            placeholder={"Imię"}
            value={valueInputs}
            valueName="firstName"
            flag="firstName"
            updateValue={updateValue}
          />
          {flags["firstName"] ? <span>Podaj imię</span> : null}
        </div>
        <div className="containerForError">
          <ShippingInputs
            placeholder={"Nazwisko"}
            value={valueInputs}
            valueName="lastName"
            flag="lastName"
            updateValue={updateValue}
          />
          {flags["lastName"] ? <span>Podaj Nazwisko</span> : null}
        </div>
      </div>
      <div className="groupInput">
        <div className="containerForError">
          <ShippingInputs
            placeholder={"Adres"}
            value={valueInputs}
            valueName="adress"
            flag="adress"
            updateValue={updateValue}
          />
          {flags["adress"] ? <span>Podaj Adres</span> : null}
        </div>
      </div>
      <div className="groupInput">
        <div className="containerForError">
          <ShippingInputs
            placeholder={"Kod pocztowy"}
            value={valueInputs}
            valueName="postCode"
            flag="postCode"
            updateValue={updateValue}
          />
          {flags["postCode"] ? <span>Podaj Kod pocztowy</span> : null}
        </div>
        <div className="containerForError">
          <ShippingInputs
            placeholder={"Miasto"}
            value={valueInputs}
            valueName="city"
            flag="city"
            updateValue={updateValue}
          />
          {flags["city"] ? <span>Podaj Misato</span> : null}
        </div>
        <div className="containerForError">
          <ShippingInputs
            placeholder={"Kraj"}
            value={valueInputs}
            valueName="country"
            flag="country"
            updateValue={updateValue}
          />
          {flags["country"] ? <span>Podaj Kraj</span> : null}
        </div>
      </div>
      <div className="groupInput">
        <div className="containerForError">
          <ShippingInputs
            placeholder={"E-mail"}
            value={valueInputs}
            valueName="email"
            flag="email"
            updateValue={updateValue}
          />
          {flags["email"] ? <span>Podaj E-mail</span> : null}
        </div>
        <div className="containerForError">
          <ShippingInputs
            placeholder={"Numer telefonu"}
            value={valueInputs}
            valueName="phoneNumber"
            flag="phoneNumber"
            updateValue={updateValue}
          />
          {flags["phoneNumber"] ? <span>Podaj Numer telefonu</span> : null}
        </div>
      </div>
      <button onClick={pay} className="saveAndPay">
        Zapisz i zapłać
      </button>
    </form>
  );
}

export default ShippingInformation;
