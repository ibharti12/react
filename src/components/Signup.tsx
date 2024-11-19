import { useState } from "react";
import { IoMdEyeOff,IoMdEye } from "react-icons/io";

const Signup = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
    phone:""

    })
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    password: "",
    phone:""
  });
  const [showPassword,setShowPassword]=useState(false)
  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const validate = () => {
    let valid = true;
    let newErrors = { name: "", email: "", password: "",phone:"" };

    // Name Validation
    if (userData?.name === "") {
      newErrors.name = "Name is required";
      valid = false;
    } else {
      const nameRegex = /^[a-zA-Z ]{2,30}$/;
      if (!nameRegex.test(userData?.name)) {
        newErrors.name = "Name format is not correct";
        valid = false;
      }
    }

    // Email Validation
    const emailRegex =
      /^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.[a-z]{2,})$/i;
    if (userData?.email === "") {
      newErrors.email = "Email is required";
      valid = false;
    } else if (!emailRegex.test(userData?.email)) {
      newErrors.email = "Email format is not correct";
      valid = false;
    }

    // Number Validation
    const numnerRegex=/^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$/
    if (userData?.phone === "") {
        newErrors.phone = "Number is required";
        valid = false;
      } else if (!numnerRegex.test(userData?.phone)) {
        newErrors.phone = "Number format is not correct";
        valid = false;
      }

    // Password Validation
    const passRegex= /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    if (userData?.password === "") {
      newErrors.password = "Password is required";
      valid = false;
    } else if (userData?.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
      valid = false;
    }else if(!passRegex.test(userData?.password)){
        newErrors.password = "In 8 letter password, with at least a symbol, upper and lower case letters and a number";
        valid = false;
    }


    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (validate()) {
      console.log("Form Submitted Successfully", userData);
    }
  };

  const togglePasswordVisibility=()=>{
    
    setShowPassword(!showPassword)
  }
  return (
    <div className="container d-flex flex-column justify-content-center align-items-center vh-100">
      <h1>SignUp</h1>
            
      <div className="col-md-6 col-sm-8">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Name</label>
            <input
              type="text"
              name="name"
              value={userData.name}
              onChange={handleChange}
              className={`form-control ${errors.name ? "is-invalid" : ""}`}
              placeholder="UserName"
            />
            {errors.name && <div className="invalid-feedback">{errors.name}</div>}
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input
              type="string"
              name="email"
              value={userData.email}
              onChange={handleChange}
              className={`form-control ${errors.email ? "is-invalid" : ""}`}
              placeholder="Email"
            />
            {errors.email && <div className="invalid-feedback">{errors.email}</div>}
          </div>
          <div className="mb-3">
            <label htmlFor="phone" className="form-label">Phone</label>
            <input
              type="text"
              name="phone"
              value={userData.phone}
              onChange={handleChange}
              className={`form-control ${errors.phone ? "is-invalid" : ""}`}
              placeholder="Password"
            />
            {errors.phone && <div className="invalid-feedback">{errors.phone}</div>}
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input
              type={showPassword ? "text" :"password"}
              name="password"
              value={userData.password}
              onChange={handleChange}
              className={`form-control ${errors.password ? "is-invalid" : ""}`}
              placeholder="Password"
            />
            <div
                        className="password-icon position-absolute rightNum"
                        onClick={togglePasswordVisibility}
                      >
                        {showPassword ? <IoMdEye /> : <IoMdEyeOff />}
                      </div>

            {errors.password && <div className="invalid-feedback">{errors.password}</div>}
          </div>
       
          <button type="submit" className="btn btn-primary w-100">Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
