import "./styles.css";
import { useState } from "react";
export default function App() {
  const [formValue, setFormValue] = useState({
    email: "",
    password: ""
  });
  const handleinput = (e) => {
    const { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
  };
  const handlesubmit = (e) => {
    e.preventDefault();
    console.log(formValue);
  };
  return (
    <div className="App">
      <form onSubmit={handlesubmit}>
        <label>Email:</label>
        <input
          name="email"
          type="email"
          value={formValue.email}
          onChange={handleinput}
        />
        <br />
        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={formValue.password}
          onChange={handleinput}
        />
        <br />
        <button>Submit</button>
      </form>
    </div>
  );
}
