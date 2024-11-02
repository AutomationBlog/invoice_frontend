import { Link } from "react-router-dom";
import logo from "../assets/invoice-now-logo.png";
const HomeLogo = () => {
  return (
    <div className="flex-1">
      <Link to="/">
        <img src={logo} className="w-34 h-8" />
      </Link>
    </div>
  );
};

export default HomeLogo;
