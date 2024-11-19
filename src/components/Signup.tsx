import { useState } from "react"

const Signup = () => {
    const [userData, setUserData] = useState({
        name: "",
        email: "",
        password: ""

    })
    const [errors, setErrors] = useState({
        name: "",
        email: "",
        password: "",
    });
    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setUserData({ ...userData, [name]: value });


    }
    const validate=()=>{
        alert("pppppppp")
        let valid = true
        let newErrors = { name: "", email: "", password: "" };

        if(userData?.name==""){
            newErrors.name="Name is required"
            valid=false
        }
       var nameRegex = /^[a-zA-Z ]{2,30}$/;
       nameRegex.test(userData?.name);
        
        if(nameRegex.test(userData?.name)){
            newErrors.name="Name format is not correct"
            valid=false
        }
        // Email Validaiton
        var emailRegex=/^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i
        if(emailRegex.test(userData?.name)){
            newErrors.email="email format is not correct"
            valid=false
        }
        setErrors(newErrors);
        console.log(newErrors,"newErrorsnewErrors")
        return valid;





    }
   const handleSumbit=()=>{
    alert("i am")
    if(validate()){
        console.log("Form Submitted Successfully", userData);

    }


   }
    return (
        <div className="container d-flex flex-column justify-content-center align-items-center vh-100">
            <h1>SignUp</h1>
            
            <div className="col-md-6 col-sm-8">
            <form  onSubmit={handleSumbit}>
                <div className="mb-3">
                    <label></label>
                    <input type="text" name="name" value={userData.name} onChange={handleChange} className="form-control" placeholder="UserName" />
                    {errors.name && <div className="invalid-feedback">{errors.name}</div>}

                </div>
                <div className="mb-3">
                    <input type="email"name="email" value={userData?.email} onChange={handleChange} className="form-control" placeholder="Email" />
                </div>
                <div className="mb-3">
                    <input type="password" name="password"value={userData?.password} onChange={handleChange} className="form-control" placeholder="Password" />
                </div>
                <button className="btn btn-primary w-100">Sign Up</button>
                </form>
            </div>
         
            
        </div>


    )
}
export default Signup