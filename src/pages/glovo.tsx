import { useEffect, useState } from "react";
import DatePicker from "react-date-picker";
import TimePicker from "react-time-picker";

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

const Glovo = () => {
  const [valueDate, onChangeDate] = useState<Value>(new Date());
  const [value, onChange] = useState<string | null>("10:00");

  useEffect(() => {}, []);
  return (
    <>
      <h1>Create Order</h1>
      <form
        onSubmit={(values) => {
          values.preventDefault();
          const formElements = values.target as HTMLFormElement;
          const formData = new FormData(formElements);
          const formValues: { [key: string]: string } = {};
          formData.forEach((value, key) => {
            formValues[key] = value as string;
          });
        }}
      >
        <h3 className="text">Food</h3>
        <div className="field">
          <label htmlFor="food">Choose Food</label>
          <select className="input input--select" name="food" id="food">
            <option value="pizza">Pizza</option>
            <option value="hamburger">Hamburger</option>
            <option value="tacos">Tacos</option>
            <option value="tortilla">Tortilla</option>
            <option value="soup">Soup</option>
          </select>
        </div>
        <div className="field">
          <label htmlFor="quantity">Quantity</label>
          <input
            className="input"
            name="quantity"
            id="quantity"
            type="number"
          />
        </div>
        <h3 className="text">Buyer Info</h3>
        <div className="field">
          <label htmlFor="fullName">Name</label>
          <input className="input" name="fullName" id="fullName" type="text" />
          <div className="field">
            <label htmlFor="address">Address</label>
            <input className="input" type="text" name="address" id="address" />
          </div>
        </div>
        <button className="btn" type="submit">
          Submit
        </button>
      </form>

      <h1>Date Picker</h1>
      <form>
        <div>
          <h2>Date Picker</h2>
          <DatePicker onChange={onChangeDate} value={valueDate} />
        </div>
        <div>
          <h2>Date Picker</h2>
          <TimePicker onChange={onChange} value={value} />
        </div>
      </form>

      <h3>React Hook Form</h3>
    </>
  );
};
export default Glovo;
