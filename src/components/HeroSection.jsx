import { Link } from "react-router-dom";
import heroImage from "../assets/hero-invoice-now-2.png";

const HeroSection = () => {
  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={heroImage} className="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-5xl font-bold">Invoice Now</h1>
            <p className="py-6">
              Manage your invoices with ease. Create, edit, and print invoices
              in just a few clicks. And, get paid on time.
            </p>
            <Link to="/signup">
              <button className="btn btn-primary">Get Started</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
