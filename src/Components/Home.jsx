import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <section className="bg-gradient-to-br flex items-center justify-center max-h-screen">
      <div className="flex flex-col md:flex-row items-center justify-center max-w-7xl w-full">
        <div className="max-w-xl text-center md:text-left ml-10">
          <h1 className="text-7xl font-medium text-black leading-tight">
            Take Control <br />
            of <span className="text-[#ff7a30] inline-block">→</span> Your Debt
          </h1>
          <p className="text-gray-700 mt-4">
            Your <span className="text-[#ff7a30]">go-to tool</span> for managing and settling shared expenses effortlessly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-6 justify-center md:justify-start">
            <button
              onClick={() => navigate("/settle")}
              className="bg-black text-white px-5 py-2 rounded-md text-sm hover:bg-gray-900 transition"
            >
              Get Started
            </button>
            <button
              onClick={() => navigate("/about")}
              className="bg-[#ff7a30] px-5 py-2 rounded-md text-sm text-white hover:bg-[#ff9f6c]"
            >
              Learn More
            </button>
          </div>
        </div>

        {/* hero img */}
        <div className="mr-2">
          <img
            src="/hero.png"
            alt="Keyboard with control and debt keys"
            className="w-[700px] h-auto"
            onClick={() => navigate("/")}
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
