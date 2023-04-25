import { useForm } from "react-hook-form";
// Custom Hook
import useSignUp from "../../hooks/useSignUp";

function SignUpForm({ handleSign }) {
  const [registerNewUser] = useSignUp();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const SubmitForm = (values) => {
    registerNewUser(values);
  };
  return (
    <>
      <form onSubmit={handleSubmit(SubmitForm)}>
        <input
          type="text"
          placeholder="Full Name*"
          {...register("name", {
            required: "Required",
          })}
        />
        <p className="form__error">
          {" "}
          {errors.name && "Please provide your name"}
        </p>
        <input
          type="text"
          placeholder="Profile pic URL (optional)"
          {...register("profileURL")}
        />
        <input
          type="email"
          placeholder="Email"
          {...register("email", {
            required: "Required",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Please provide a valid Email",
            },
          })}
        />
        <p className="form__error"> {errors.email && errors.email.message}</p>
        <input
          type="password"
          placeholder="Password"
          {...register("password", {
            required: "Required",
          })}
        />
        <p className="form__error">
          {" "}
          {errors.password && "Please provide a password"}
        </p>
        <button type="submit">Sign Up</button>
      </form>
      <p>
        Already have an account?{" "}
        <span className="login__register" onClick={handleSign}>
          Log In
        </span>
      </p>
    </>
  );
}

export default SignUpForm;
