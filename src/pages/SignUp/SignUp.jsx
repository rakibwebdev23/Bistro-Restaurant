import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import UseHelmet from '../../components/UseHelmet/UseHelmet';
import Swal from 'sweetalert2';
import useAxiosSecurePublic from '../../hooks/useAxiosSecurePublic';
import SocialSign from '../../components/SocialSign/SocialSign';
import useAuth from '../../hooks/useAuth';

const SignUp = () => {

    const { createUser, updateUserProfile, logOut } = useAuth();
    const navigate = useNavigate();
    const axiosSecurePublic = useAxiosSecurePublic();

    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        // console.log(data)
        createUser(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);        
                updateUserProfile(data.name, data.photoURL)
                    .then(() => {
                        // Create user entry to the database
                        const userInfo = {
                            name: data.name,
                            email: data.email
                        }
                        axiosSecurePublic.post("/users", userInfo)
                            .then(res => {
                                if (res.data.insertedId) {
                                    // console.log("User added to the database successfully");
                                    
                                    reset();
                                    Swal.fire({
                                        position: "top-end",
                                        icon: "success",
                                        title: "User sign up successfully",
                                        showConfirmButton: false,
                                        timer: 1500
                                    });
                                    logOut()
                                        .then(() => {
                                            navigate("/");
                                        })
                                        .catch(error => {
                                            console.log(error);
                                        })
                                }
                            })
                    })
                    .catch(error => {
                        console.log(error)
                    })
            })
    }


    return (
        <>
            <UseHelmet
                helmetTitle={"Sign Up"}
            ></UseHelmet>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center md:w-1/2 lg:text-left">
                        <h1 className="text-5xl font-bold">SignUp now!</h1>
                        <p className="py-6">

                        </p>
                    </div>
                    <div className="card bg-base-100 md:w-1/2 max-w-sm shadow-2xl">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" {...register("name", { required: true })} name='name' placeholder="Your Name" className="input input-bordered" />
                                {errors.name?.type === 'required' && <span className='text-red-500'>Name is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text" {...register("photoURL", { required: true })} placeholder="photo url" className="input input-bordered" />
                                {errors.photoURL?.type === 'required' && <span className='text-red-500'>Photo URL is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' {...register("email", {
                                    required: true,
                                    pattern:
                                        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                                    ,
                                })} placeholder="Email" className="input input-bordered" />
                                {errors.email?.type === 'required' && <span className='text-red-500'>Email is required</span>}
                                {errors.email?.type === 'pattern' && (
                                    <span className='text-red-500'>Please enter a valid email</span>
                                )}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" {...register("password", {
                                    required: true,
                                    minLength: 6,
                                    maxLength: 20,
                                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/

                                })} name='password' placeholder="Password" className="input input-bordered" />
                                {errors.password?.type === 'required' && <span className='text-red-500'>Password is required</span>}
                                {errors.password?.type === 'minLength' && <p className='text-red-500'>Password must be 6 characters</p>}
                                {errors.password?.type === 'maxLength' && <p className='text-red-500'>Password must be less 20 characters</p>}
                                {errors.password?.type === 'pattern' && <p className='text-red-500'>Password must have one Uppercase, one Lowercase and one Special characters.</p>}
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-primary" type="submit" value="SignUp" />
                            </div>

                        </form>
                        <SocialSign></SocialSign>
                        <p className='text-center mb-4'><small>Do you have an account ! Please <Link className='text-red-500 underline underline-offset-2' to="/login">Login</Link></small></p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SignUp;