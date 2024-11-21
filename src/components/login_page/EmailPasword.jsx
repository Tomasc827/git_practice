import { useState } from "react";
import logo from "../../assets/img/logo.png";
import ButtonsLogin from "./ButtonsLogin";

const EmailPassword = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const validateEmailPassword = (email, password) => {
    const RegExpEmail =
      /^[a-zA-Z0-9._:$!%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const RegExpPassword =
      /^(?=.*?[A-Za-z])(?=.*?[0-9])(?=.*?[-+_!@#$%^&*.,?]).{8,}$/;
      if (!RegExpEmail.test(email)) {
        throw new Error("Invalid email format.");
      }   if (!RegExpPassword.test(password)) {
        throw new Error("Password must contain at least 8 characters, including letters, numbers, and special characters.");
      }
      
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      validateEmailPassword(email, password);
      setError("");
      alert("Successful Login");
    } catch (error) {
      setError(error.message)
      setTimeout(() => {
        setError("")
      },3000);
    }
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="flex justify-center flex-col items-center"
      >
        <img src={logo} className="max-w-[500px] min-w-[200px] rotate-y"></img>
        <label className="text-white text-center  text-xl">
          <p>Email:</p>
          <input
            className="min-w-[200px] w-[350px] mt-5 rounded-lg border-2 border-blue-400 shadow-md shadow--900 text-black"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter Your Email"
          ></input>
        </label>
        <label className="text-white text-center pt-5 text-xl">
          <p>Password:</p>
          <input
            className="min-w-[200px] w-[350px] text-black mt-5 rounded-lg border-2 border-blue-400 shadow-md shadow--900"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter Your Password"
          ></input>
        </label>
        <ButtonsLogin errorLogin={error} />
      </form>
    </div>
  );
};

export default EmailPassword;
