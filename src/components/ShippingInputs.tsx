import {
  inputsValue,
  keyOfErrorValue,
  keysOfInputsValue,
} from "./ShippingInformation";
function ShippingInputs({
  placeholder,
  value,
  valueName,
  flag,
  updateValue,
}: {
  placeholder: string;
  value: inputsValue;
  valueName: keysOfInputsValue;
  flag: keyOfErrorValue;
  updateValue: (
    e: React.FormEvent<HTMLInputElement>,
    valueName: keysOfInputsValue,
    flag: keyOfErrorValue
  ) => void;
}) {
  return (
    <input
      onChange={(e) => updateValue(e, valueName, flag)}
      value={value[valueName]}
      className={`shippingInput`}
      placeholder={placeholder}
    />
  );
}

export default ShippingInputs;
