import { FaGoogle } from "react-icons/fa";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import useAxiosSecurePublic from "../../hooks/useAxiosSecurePublic";

const SocialSign = () => {
    const { googleSignIn } = useAuth();
    const axiosSecurePublic = useAxiosSecurePublic();
    const navigate = useNavigate();

    const handleGoogleSignUp = () => {
        googleSignIn()
            .then(result => {
                const userInfo = {
                    name: result.user?.displayName,
                    email: result.user?.email
                }

                axiosSecurePublic.post("/users", userInfo)
                    .then(res => {
                        // console.log(res.data);
                        if (res.data) {
                            navigate("/");
                        }

                    })
            })
            .catch(error => console.error(error))
    }

    return (
        <div className="text-center mt-2">
            <button onClick={handleGoogleSignUp} className="btn md:w-3/4 btn-outline text-blue-600 btn-warning">
                <FaGoogle></FaGoogle>
                Google
            </button>
        </div>
    );
};

export default SocialSign;