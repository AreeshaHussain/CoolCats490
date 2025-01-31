import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import RegisterForm from "../Components/Register/RegisterForm";

const RegisterUser = () => {
  return (
    <div className = "container-fluid vh-100 bg-dark text-white">
      <h1 className = "text-center">Create Squad Seek Account</h1>
      <div className = "d-flex flex-wrap justify-content-center mt-auto">
        <RegisterForm></RegisterForm>
      </div>
    </div>
  );
};

export default RegisterUser;
