import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { axiosInstance } from "../utils/axiosInstance";
import Navbar from "../components/Navbar";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    if (!name || !email || !password) {
      alert("All fields are required");
    }

    try {
      const response = await axiosInstance.post("/api/auth/signup", {
        name,
        email,
        password,
      });
      if (response.data.success) {
        localStorage.setItem("token", response.data.token);
        navigate("/dashboard");
      } else {
        alert(response.data.message);
        navigate("/");
      }
    } catch (error) {
      console.log("Error while signing up", error);
    }
  };

  return (
    <>
      <Navbar />
      <div className="hero min-h-screen bg-base-200 flex items-center justify-center">
        <div className="card bg-base-100 w-96 shadow-xl">
          <p className="text-center text-[22px] font-bold pt-2">Sign Up</p>
          <div className="card-body items-center text-center">
            <form onSubmit={handleSignup}>
              <div className="form-control">
                <input
                  type="text"
                  placeholder="name"
                  className="input input-bordered"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="form-control pt-5">
                <input
                  type="text"
                  placeholder="email"
                  className="input input-bordered"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="form-control pt-5">
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="card-actions flex-col items-center justify-center pt-3">
                <button className="btn btn-primary">Sign Up</button>
              </div>
            </form>
            <p>
              Already have an account?
              <Link to="/login">
                <span className="hover:underline text-blue-800 font-bold">
                  {" "}
                  Login
                </span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
