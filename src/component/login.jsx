import { useState } from "react";
import Navbar from "./navbar";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Loader from "./Loader";
import "../App.css";
import Axios from "../utils/axios";
import { toast } from "sonner";

function Login(prop) {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {

    if (loading) return;

    setLoading(true);
    try {
      const response = await Axios.patch("/auth/sign-in", {
        email: data.email,
        password: data.password,
        rememberMe: rememberMe,
      });

      if (response.data.status == "ok") {
        toast.success("User logged in successfully");
        localStorage.setItem("user", JSON.stringify(response.data.data));
        return navigate("/dash");
      }
    } catch (err) {
      console.error(err);
      setLoading(false);
      const { status } = err?.response;
      if (status == 400) return toast.error("Invalid Login details");
      toast.error("Error occured while logging in user");
    } finally {
      setLoading(false);
    }
  };

  function showP() {
    setShowPassword((prev) => {
      return !prev;
    });
  }

  return (
    <section>
      <Navbar />
      {prop.loadState ? (
        <div className="loader-box">
          <div className="loader"></div>
        </div>
      ) : (
        ""
      )}
      <div className="login">
        <div className="login-left">
          <h1>
            Welcome <br /> Back
          </h1>
          <p>
            it is a long established fact that a reader will be distracted by
            the readable content of a page when looking at it's layout. The
            point of using
          </p>
          <div className="icons">
            <i className="bi-facebook"></i>
            <i className="bi-twitter"></i>
            <i className="bi-instagram"></i>
            <i className="bi-youtube"></i>
          </div>
        </div>
        <div className="login-right">
          {prop.showErr ? (
            <div className="error-box">
              <p>{prop.errText}</p>
            </div>
          ) : (
            ""
          )}
          <h1>Sign in</h1>
          <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
            <div className="fields">
              <p>Email Address </p>
              <input
                type="email"
                name="email"
                {...register("email", {
                  required: "Email is required",
                })}
                className={`${errors.email ? "red_border" : "gold-border"}`}
                defaultValue=""
                // onChange={prop.gatherLog}
              />
              {errors.email && (
                <p className="error-message">{errors.email.message}</p>
              )}
            </div>
            <div className="fields">
              <p>Password</p>
              <div
                className={`pass ${
                  errors.password ? "red_border " : "gold-border eye-input"
                }`}
              >
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  {...register("password", {
                    required: "Password is required",
                    validate: (value) => {
                      if (value.length < 6) {
                        return "Password length must be atleast six characters";
                      }
                      if (value.length > 30) {
                        return "Password must not exceeds 30 characters.";
                      }
                    },
                  })}
                  className="eye-input"
                />
                <div className="eye" onClick={showP}>
                  {showPassword ? (
                    <i className="bi-eye"></i>
                  ) : (
                    <i className="bi-eye-slash"></i>
                  )}
                </div>
              </div>
              {errors.password && (
                <p className="error-message">{errors.password.message}</p>
              )}
            </div>
            <div className="remember-check">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
              />
              <p>Remember me</p>
            </div>
            <button onClick={handleSubmit(onSubmit)} className="cursor-pointer">
              {loading ? <Loader /> : "Sign in now"}
            </button>{" "}
            <h2>Lost your password?</h2>
            <h3>
              By clicking on "Sign in now" you agree to <u>Terms of service</u>{" "}
              | <u>Privacy Policy</u>
            </h3>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Login;
