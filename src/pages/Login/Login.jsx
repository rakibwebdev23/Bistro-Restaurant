import { useEffect, useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import UseHelmet from '../../components/UseHelmet/UseHelmet';
import SocialSign from '../../components/SocialSign/SocialSign';
import useAuth from '../../hooks/useAuth';

const Login = () => {

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const { signInUser } = useAuth();
    const [disable, setDisable] = useState(true);

    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])

    const handleValidateCaptcha = (e) => {
        const user_captcha_value = e.target.value;
        // console.log(user_captcha_value);
        if (validateCaptcha(user_captcha_value)) {
            setDisable(false);
        }
        else {
            setDisable(true);
        }
    }

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(email, password);
        signInUser(email, password)
            .then(result => {
                const user = result.user;
                // console.log(user);
                Swal.fire({
                    title: `${user.email} Login Successfully`,
                    showClass: {
                        popup: `
                        animate__animated
                        animate__fadeInUp
                        animate__faster
                      `
                    },
                    hideClass: {
                        popup: `
                        animate__animated
                        animate__fadeOutDown
                        animate__faster
                      `
                    }
                });
                navigate(from, { replace: true });
            });
    }

    return (
        <>
            <UseHelmet
                helmetTitle={"Login"}
            ></UseHelmet>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center md:w-1/2 ">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6">

                        </p>
                    </div>
                    <div className="card bg-base-100 md:w-1/2 max-w-sm shadow-2xl">
                        <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <LoadCanvasTemplate />
                                </label>
                                <input onBlur={handleValidateCaptcha} type="text" name="captcha" placeholder="Type here captcha" className="input input-bordered" required />
                            </div>
                            <div className="form-control mt-6">
                                <input disabled={disable} className="btn btn-primary" type="submit" value="Login" />
                            </div>
                        </form>
                        <SocialSign></SocialSign>
                        <p className='text-center mb-4'><small>Don't have an account ! Please <Link className='text-red-500 underline underline-offset-2' to="/signup">SignUp</Link></small></p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;