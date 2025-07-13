import { LuShieldCheck } from "react-icons/lu";
import { Link } from "react-router-dom";

export default function ThankYou() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
   
      <div className="h-1 bg-blue-600 w-full"></div>
      
      {/* Main content */}
      <div className="flex-1 flex flex-col items-center justify-center px-6 py-10">
        {/* Minimalist shield icon */}
        <div className="mb-10">
          <div className="bg-blue-100 rounded-full p-6">
            <LuShieldCheck className="h-16 w-16 text-blue-600" strokeWidth={2} />
          </div>
        </div>
        
        {/* Simplified thank you message */}
        <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
          Thank You
        </h1>
        
        <div className="max-w-md text-center mb-10">
          <p className="text-lg text-gray-800 mb-4">
            Your  request has been received.
          </p>
          
          <p className="text-gray-600">
            Our  team will contact you within 24 hours.
          </p>
        </div>
        
        {/* Simplified action buttons */}
        <div className="flex gap-4 mb-16 w-full max-w-xs">
          <Link 
            to="/home" 
            className="flex-1 py-3 bg-[#003366] text-white hover:bg-white hover:text-[#003366]  rounded-md  transition-all text-center font-bold"
          >
            Home
          </Link>
          
          <Link 
            to="/service" 
            className="flex-1 py-3 bg-white text-[#003366] font-bold rounded-md border border-blue-200 hover:bg-[#003366] hover:text-white transition-all text-center"
          >
            Services
          </Link>
        </div>
        
        {/* Simplified emergency contact */}
        <div className="flex items-center bg-white rounded-lg shadow-sm p-4 border-l-4 border-red-500">
          <span className="text-red-500 mr-3">⚠️</span>
          <p className="text-gray-700">
            Emergency: <a href="tel:866-500-2050" className="text-[#003366] font-bold">866-500-2050</a>
          </p>
        </div>
      </div>
      
    </div>
  );
}