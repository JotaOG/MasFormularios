import React, { useState } from "react";
import "../App.css";

const MoreForms = () => {
  const [user, setUser] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmPassword: ""
  });
  const [errors, setErrors] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const handleFirstname = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
    setErrors({
      ...errors,
      [e.target.name]: e.target.value,
    });
    if (e.target.value.length < 1 && e.target.name === 'firstname') {
      setErrors({...errors, [e.target.name]:"firstname is required!"});
    } else if (e.target.value.length < 2 && e.target.name === 'firstname') {
      setErrors({...errors, [e.target.name]:"firstname must be 2 characters or longer!"});
    } else {
      setErrors('');
    }
  };
  const handleLastname = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
    setErrors({
      ...errors,
      [e.target.name]: e.target.value,
    });
    if (e.target.value.length < 1 && e.target.name === 'lastname') {
      setErrors({...errors, [e.target.name]:"lastname is required!"});
    } else if (e.target.value.length < 2 && e.target.name === 'lastname') {
      setErrors({...errors, [e.target.name]:"lastname must be 2 characters or longer!"});
    } else {
      setErrors('');
    }
  };
  const handleEmail = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
    setErrors({
      ...errors,
      [e.target.name]: e.target.value,
    });
    if (e.target.value.length < 1 && e.target.name === 'email') {
      setErrors({...errors, [e.target.name]:"email is required!"});
    } else if (e.target.value.length < 2 && e.target.name === 'email') {
      setErrors({...errors, [e.target.name]:"email must be 2 characters or longer!"});
    } else {
      setErrors('');
    }
  };
    const handlePassword = (e) => {
      setUser({
        ...user,
        [e.target.name]: e.target.value,
      });
      setErrors({
        ...errors,
        [e.target.name]: e.target.value,
      });
      if (e.target.value.length < 1 && e.target.name === 'password') {
        setErrors({...errors, [e.target.name]:"password is required!"});
      } else if (e.target.value.length < 2 && e.target.name === 'password') {
        setErrors({...errors, [e.target.name]:"password must be 8 characters or longer!"});
      } else {
        setErrors('');
      }
  };
  const handleConfirmPassword = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
    setErrors({
      ...errors,
      [e.target.name]: e.target.value,
    });
    if (e.target.value.length < 1 && e.target.name === 'confirmPassword') {
      setErrors({...errors, [e.target.name]:"password is required!"});
    } else if (e.target.name === 'confirmPassword' && e.target.value !== user.password) {
      setErrors({...errors, [e.target.name]:"password must be 8 characters and must match!"});
    } else {
      setErrors('');
    }
};
  return (
    <>
      <form>
        <div className="label">
          <label>First Name </label>
          <input type="text" name='firstname' value={user.firstname} onChange={handleFirstname} />
          {errors.firstname ? <p style={{ color: "red" }}>{errors.firstname}</p> : ""}
        </div>
        <div className="label">
          <label>Last Name </label>
          <input type="text" name='lastname' value={user.lastname} onChange={handleLastname} />
          {errors.lastname ? <p style={{ color: "red" }}>{errors.lastname}</p> : ""}
        </div>
        <div className="label">
          <label>Email </label>
          <input type="email" name='email' value={user.email} onChange={handleEmail} />
          {errors.email ? <p style={{ color: "red" }}>{errors.email}</p> : ""}
        </div>
        <div className="label">
          <label>Password </label>
          <input
            type="password"
            name='password'
            value={user.password}
            onChange={handlePassword}
          />
          {errors.password ? <p style={{ color: "red" }}>{errors.password}</p> : ""}
        </div>
        <div className="label">
          <label>Confirm Password </label>
          <input
            type="password"
            name='confirmPassword'
            value={user.confirmPassword}
            onChange={handleConfirmPassword}
          />
          {errors.confirmPassword ? <p style={{ color: "red" }}>{errors.confirmPassword}</p> : ""}
        </div>
      </form>
      <div className="data">
        <h2>Your Form Data</h2>
        <p>First Name: {user.firstname}</p>
        <p>Last Name: {user.lastname}</p>
        <p>Email: {user.email}</p>
        <p>Password: {user.password}</p>
        <p>Confirm Password: {user.confirmPassword}</p>
      </div>
    </>
  );
}

export default MoreForms;
