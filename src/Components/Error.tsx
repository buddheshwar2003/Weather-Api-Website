
import { FaExclamationTriangle } from "react-icons/fa";

const Error = ({ message = "Something went wrong!" }) => {
  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-80 flex flex-col items-center justify-center text-center px-4">
      <FaExclamationTriangle className="text-red-500 text-5xl mb-4 animate-pulse" />
      <h2 className="text-white text-2xl font-semibold mb-2">Error</h2>
      <p className="text-gray-300 text-lg">{message}</p>
    </div>
  );
};

export default Error;