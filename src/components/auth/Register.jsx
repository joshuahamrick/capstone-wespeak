import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import { createUser, getUserByEmail } from "../../services/userService.js";

export const Register = (props) => {
  const [customer, setCustomer] = useState({
    email: "",
    name: "",
    username: "",
    bio: "",
    location: "",
    contact: "",
  });

  let navigate = useNavigate();

  const registerNewUser = () => {
    createUser(customer).then((createdUser) => {
      if (createdUser.hasOwnProperty("id")) {
        localStorage.setItem(
          "honey_user",
          JSON.stringify({
            id: createdUser.id,
            staff: createdUser.isStaff,
          })
        );

        navigate("/");
      }
    });
  };

  const handleRegister = (e) => {
    e.preventDefault();
    getUserByEmail(customer.email).then((response) => {
      if (response.length > 0) {
        // Duplicate email. No good.
        window.alert("Account with that email address already exists");
      } else {
        // Good email, create user.
        registerNewUser();
      }
    });
  };

  const updateCustomer = (evt) => {
    const copy = { ...customer };
    copy[evt.target.id] = evt.target.value;
    setCustomer(copy);
  };

  return (
    <main style={{ textAlign: "center" }}>
      <form className="form-login" onSubmit={handleRegister}>
        <h1>Wespeak</h1>
        <h2>Please Register</h2>
        <fieldset>
          <div className="form-group">
            <input
              onChange={updateCustomer}
              type="text"
              id="name"
              className="form-control"
              placeholder="Enter your name"
              required
            />
          </div>
        </fieldset>
        <fieldset>
          <div className="form-group">
            <input
              onChange={updateCustomer}
              type="text"
              id="username"
              className="form-control"
              placeholder="Enter your user name"
              required
            />
          </div>
        </fieldset>
        <fieldset>
          <div className="form-group">
            <input
              onChange={updateCustomer}
              type="email"
              id="email"
              className="form-control"
              placeholder="Email address"
              required
            />
          </div>
        </fieldset>

        <fieldset>
          <div className="form-group">
            <button className="button" type="submit">
              Register
            </button>
          </div>
        </fieldset>
      </form>
    </main>
  );
};
