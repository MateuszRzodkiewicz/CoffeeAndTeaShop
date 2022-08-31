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
export interface flagValue {
  flag1: boolean;
  flag2: boolean;
  flag3: boolean;
  flag4: boolean;
  flag5: boolean;
  flag6: boolean;
  flag7: boolean;
  flag8: boolean;
}
const initialFlag = {
  flag1: false,
  flag2: false,
  flag3: false,
  flag4: false,
  flag5: false,
  flag6: false,
  flag7: false,
  flag8: false,
};

export type keysOfInputsValue = keyof inputsValue;
export type keyOfFlag = keyof flagValue;
export type keyOfFlag7 = keyof flagValue;

function ShippingInformation() {
  const [valueInputs, setValueInputs] = useState<inputsValue>(initValues);
  const [flags, setFlag] = useState<flagValue>(initialFlag);

  const pay = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (
      flags["flag1"] ||
      flags["flag2"] ||
      flags["flag3"] ||
      flags["flag4"] ||
      flags["flag5"] ||
      flags["flag6"] ||
      flags["flag7"] ||
      flags["flag8"] ||
      valueInputs["firstName"] === "" ||
      valueInputs["lastName"] === "" ||
      valueInputs["adress"] === "" ||
      valueInputs["city"] === "" ||
      valueInputs["country"] === "" ||
      valueInputs["postCode"] === "" ||
      valueInputs["country"] === "" ||
      valueInputs["email"] === "" ||
      valueInputs["phoneNumber"] === "" ||
      !valueInputs["email"].includes("@")
    ) {
      alert("Podaj poprawne dane do wysylki");
    } else {
      alert("Dziekujemy za dokonanie zakupu");
    }
  };

  const updateValue = (
    e: React.FormEvent<HTMLInputElement>,
    valueName: keysOfInputsValue,
    flag: keyOfFlag
  ) => {
    const value = e.currentTarget.value;
    valueInputs[valueName] = value;
    setValueInputs({ ...valueInputs });
    if (valueInputs[valueName] === "") {
      flags[flag] = true;
      setFlag({ ...flags });
    } else {
      flags[flag] = false;
      setFlag({ ...flags });
    }
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
            flag="flag1"
            updateValue={updateValue}
          />
          {flags["flag1"] ? <span>Podaj imię</span> : null}
        </div>
        <div className="containerForError">
          <ShippingInputs
            placeholder={"Nazwisko"}
            value={valueInputs}
            valueName="lastName"
            flag="flag2"
            updateValue={updateValue}
          />
          {flags["flag2"] ? <span>Podaj Nazwisko</span> : null}
        </div>
      </div>
      <div className="groupInput">
        <div className="containerForError">
          <ShippingInputs
            placeholder={"Adres"}
            value={valueInputs}
            valueName="adress"
            flag="flag3"
            updateValue={updateValue}
          />
          {flags["flag3"] ? <span>Podaj Adres</span> : null}
        </div>
      </div>
      <div className="groupInput">
        <div className="containerForError">
          <ShippingInputs
            placeholder={"Kod pocztowy"}
            value={valueInputs}
            valueName="postCode"
            flag="flag4"
            updateValue={updateValue}
          />
          {flags["flag4"] ? <span>Podaj Kod pocztowy</span> : null}
        </div>
        <div className="containerForError">
          <ShippingInputs
            placeholder={"Miasto"}
            value={valueInputs}
            valueName="city"
            flag="flag5"
            updateValue={updateValue}
          />
          {flags["flag5"] ? <span>Podaj Misato</span> : null}
        </div>
        <div className="containerForError">
          <ShippingInputs
            placeholder={"Kraj"}
            value={valueInputs}
            valueName="country"
            flag="flag6"
            updateValue={updateValue}
          />
          {flags["flag6"] ? <span>Podaj Kraj</span> : null}
        </div>
      </div>
      <div className="groupInput">
        <div className="containerForError">
          <ShippingInputs
            placeholder={"E-mail"}
            value={valueInputs}
            valueName="email"
            flag="flag7"
            updateValue={updateValue}
          />
          {flags["flag7"] ? <span>Podaj E-mail</span> : null}
        </div>
        <div className="containerForError">
          <ShippingInputs
            placeholder={"Numer telefonu"}
            value={valueInputs}
            valueName="phoneNumber"
            flag="flag8"
            updateValue={updateValue}
          />
          {flags["flag8"] ? <span>Podaj Numer telefonu</span> : null}
        </div>
      </div>
      <button onClick={pay} className="saveAndPay">
        Zapisz i zapłać
      </button>
    </form>
  );
}

export default ShippingInformation;
