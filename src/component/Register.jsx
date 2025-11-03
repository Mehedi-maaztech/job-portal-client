import Lottie from 'lottie-react';
import registerLottidata from '../assets/Login Leady.json';
import { toast } from 'react-toastify';
import { useContext, useState } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { Link, useNavigate } from 'react-router';
import { Eye, EyeOff } from "lucide-react"
const Register = () => {
     const [showPassword, setShowPassword] = useState(false);
    const { createUser } = useContext(AuthContext);
    const navigate = useNavigate();
    const handleRegister = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_\-+={}[\]:;"'<>,.?/~`|\\]).{6,}$/;
        if (!passwordRegex.test(password)) {
            toast("Password must be at least 6 characters long and include at least one uppercase letter, one lowercase letter, and one special character.");
            return;
        }

        // Proceed with form submission or further processing
        createUser(email, password)
            .then(result => {
                const loggeduser = result.user;
                console.log(loggeduser);
                form.reset();
                navigate('/auth/signin');
                toast("User registered successfully!");
            })
            .catch(error => {
                console.log(error);
                toast(error.message);
            });


    }
    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse lg:gap-20">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Register now!</h1>
                    <div className='py-6 w-96'>
                        <Lottie animationData={registerLottidata}></Lottie>
                    </div>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <div className="card-body">
                        <form className="fieldset" onSubmit={handleRegister}>
                            <label className="label">Email</label>
                            <input type="email" className="input" placeholder="Email" name='email' />
                            <label className="label">Password</label>
                            <div className="relative w-full">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    className="input input-bordered w-full pr-10"
                                    placeholder="Password"
                                    name="password"
                                />

                                {/* Toggle Button */}
                                <button
                                    type="button"
                                    className="absolute inset-y-0 right-3 flex items-center text-gray-500"
                                    onClick={() => setShowPassword((prev) => !prev)}
                                >
                                    {showPassword ? (
                                        <EyeOff className="w-5 h-5" />
                                    ) : (
                                        <Eye className="w-5 h-5" />
                                    )}
                                </button>
                            </div>
                            <div><a className="link link-hover">Forgot password?</a></div>
                            <button className="btn btn-neutral mt-4">Login</button>
                        </form>

                        <p>Already have an account? <Link to='/auth/signin' className='font-bold text-purple-900'>Sign in</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;