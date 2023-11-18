import { FaGoogle } from "react-icons/fa";
import useAuth from "../../hook/useAuth";
import { useNavigate } from "react-router-dom";
import useAxiosPublic from "../../hook/useAxiosPublic";

const SocialLogin = () => {
  const navigate = useNavigate();
  const axiosPublic = useAxiosPublic();
  const { googleSignIn } = useAuth();

  const handleGoogleSignIn = () => {
    googleSignIn().then((result) => {
      console.log(result.user);
      const userInfo = {
        email: result.user?.email,
        name: result.user?.displayName,
      };
      axiosPublic.post("/users", userInfo).then((res) => {
        console.log(res.data);
        navigate("/");
      });
    });
  };

  return (
    <div>
      <button onClick={handleGoogleSignIn} className="btn btn-sm btn-ghost">
        <FaGoogle></FaGoogle>
        Google
      </button>
    </div>
  );
};

export default SocialLogin;
