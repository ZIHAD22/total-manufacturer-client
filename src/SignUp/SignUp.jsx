import React from "react";
import { Link } from "react-router-dom";
import SocialLogin from "../Pages/Shared/SocialLogin";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import auth from "../firebase.init";
import Spinner from "../Pages/Shared/Spinner";
import { toast } from "react-toastify";

const SignUp = () => {
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const handleSignUp = async (data) => {
    const { userEmail, userName, userPassword } = data;
    await createUserWithEmailAndPassword(userEmail, userPassword);
    reset();
  };

  if (loading) {
    return <Spinner />;
  }

  if (user) {
    toast.success("Sign Up Success");
  }

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="text-2xl text-center font-bold">Sign Up</h2>

          <form onSubmit={handleSubmit(handleSignUp)}>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text font-medium">Name</span>
              </label>
              <input
                type="text"
                {...register("userName", { required: "required" })}
                className="input input-bordered w-full max-w-xs"
              />
              {errors.userName?.message && (
                <p className="text-red-600">{errors.userName?.message}</p>
              )}
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text font-medium">Email</span>
              </label>
              <input
                type="email"
                {...register("userEmail", { required: "required" })}
                className="input input-bordered w-full max-w-xs"
              />
              {errors.userEmail?.message && (
                <p className="text-red-600">{errors.userEmail?.message}</p>
              )}
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text font-medium">Password</span>
              </label>
              <input
                type="password"
                {...register("userPassword", { required: "required" })}
                className="input input-bordered w-full max-w-xs"
              />
              {errors.userPassword?.message && (
                <p className="text-red-600">{errors.userPassword?.message}</p>
              )}
              {error && <p className="text-red-600">{error.message}</p>}
              <label className="label">
                <Link to="/resetPass" className="label-text link">
                  Forgot Password ?
                </Link>
              </label>
            </div>
            <button className="btn btn-outline w-full my-2">Sign Up</button>
          </form>
          <p>
            <span className="text-sm">Already Have an Account? </span>
            <Link to="/signIn" className="text-secondary cursor-pointer">
              Sign In
            </Link>
          </p>
          <SocialLogin />
        </div>
      </div>
    </div>
  );
};

export default SignUp;