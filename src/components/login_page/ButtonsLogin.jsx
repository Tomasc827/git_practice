import { useNavigate } from "react-router-dom";

const ButtonsLogin = ({ errorLogin }) => {
  const navigate = useNavigate();

  return (
    <div className="mt-10">
      <button
        type="submit"
        className="bg-blue-700 text-white p-5 rounded-full min-w-[100px] w-[150px] border-2 hover:shadow-lg hover:shadow-purple-600 duration-500 hover:animate-pulse me-8"
      >
        Login
      </button>
      <button
        className="bg-blue-700 text-white p-5 rounded-full min-w-[100px] w-[150px] border-2 hover:shadow-lg hover:shadow-purple-600 duration-500 hover:animate-pulse"
        onClick={() => navigate("/registration")}
      >
        Sign up
      </button>
      <div className="flex justify-center items-center mt-8">
      {errorLogin && <p className="bg-purple-400 text-center text-white rounded-3xl p-3 text-xl opacity-90 border-2 mt-10 error-animation absolute">{errorLogin}</p>}</div>
    </div>
  );
};

export default ButtonsLogin;
