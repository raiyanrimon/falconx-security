import { Link } from "react-router-dom";
import img from "../assets/images/404-page.jpg";
import SEO from "./shared/Seo";

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center py-20 md:my-0 mb-10">
      <SEO title="Link Not Found - Best Security Guard Service Company" />
      <div className="relative">
        <img className="rounded-xl" src={img} alt="" />
        <Link to="/">
          <button className=" bg-[#003366] border-none rounded-lg font-bold p-3 font-rubik text-white w-full    ">
            Go Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
