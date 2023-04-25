import { useForm } from "react-hook-form";
// Custom Hook
import useLogin from "../../hooks/useLogIn";
function LoginForm({ handleSign }) {
  const loginToApp = useLogin();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  const SubmitForm = (values) => {
    loginToApp(values);
  };
  return (
    <>
      <form onSubmit={handleSubmit(SubmitForm)}>
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
        <p className="form__error">
          {" "}
          {errors.email && errors.email.message}
        </p>
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
        <button type="submit">Sign In</button>
      </form>
      <p>
        Not a member?{" "}
        <span className="login__register" onClick={handleSign}>
          Sign Up
        </span>
      </p>
    </>
  );
}

export default LoginForm;
