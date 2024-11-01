import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="hero min-h-screen bg-base-200 flex items-center justify-center">
      <div className="card bg-base-100 w-96 shadow-xl">
        <p className="text-center text-[22px] font-bold pt-2">Login</p>
        <div className="card-body items-center text-center">
          <form>
            <div className="form-control">
              <input
                type="text"
                placeholder="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control pt-5">
              <input
                type="text"
                placeholder="password"
                className="input input-bordered"
              />
            </div>
          </form>
          <div className="card-actions flex-col items-center justify-center pt-3">
            <button className="btn btn-primary">Login</button>
            <p>
              Don't have an account?
              <Link to="/signup">
                <span className="hover:underline text-blue-800 font-bold">
                  {" "}
                  Sign Up
                </span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
