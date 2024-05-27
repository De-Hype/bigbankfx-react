import { useState } from "react";
import Navbar from "./navbar";
import { useNavigate } from "react-router-dom";
import Loader from "./Loader";
import { useForm } from "react-hook-form";
import Axios from "../utils/axios";
import { toast } from "sonner";

function SignUp(prop) {
  const [loading, setLoading] = useState(false);
  const navigate=useNavigate();
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
      const response = await Axios.post(
        "/auth/register",
        {
          first_name: data.first_name,
          last_name: data.last_name,
          email: data.email,
          username: data.username,
          password: data.password,
          confirm_password: data.confirm_password,
        }
      );
      if (response.data.status == "Accepted") {
        toast.success("Account registration successfull. Please log in");
        return navigate("/login")  
      }
      
    } catch (err) {
      console.error(err);
      const { status } = err?.response;
      if (status == 401) return toast.error("Invalid Registration details");
      toast.error("Error occured while registering user");
      setLoading(false);
    } finally {
      
      setLoading(false);
    }
  };

  return (
    <section>
      <Navbar />
      <div className="sign-up">
        {prop.loadState ? (
          <div className="loader-box">
            <div className="loader"></div>
          </div>
        ) : (
          ""
        )}
        {prop.showErr ? (
          <div className="error-box">
            <p>{prop.errText}</p>
          </div>
        ) : (
          ""
        )}
        <form className="sign-box" onSubmit={handleSubmit(onSubmit)}>
          <h1>Sign Up</h1>

          <div className="double-input">
            <div className="sign-input">
              <p>First Name</p>
              <input
                type="text"
                name="firstName"
                {...register("first_name", {
                  required: "First name is required",
                  validate: (value) => {
                    if (value.length < 3) {
                      return "First name must be atleast three characters";
                    }
                  },
                })}
                className={`${
                  errors.first_name ? "red_border" : "gold-border"
                }`}
                defaultValue=""
              />
              {errors.first_name && (
                <p className="error-message">{errors.first_name.message}</p>
              )}
            </div>
            <div className="sign-input">
              <p>Last Name</p>
              <input
                type="text"
                name="lastName"
                {...register("last_name", {
                  required: "Last name is required",
                  validate: (value) => {
                    if (value.length < 3) {
                      return "Last name must be atleast three characters";
                    }
                  },
                })}
                className={`${errors.last_name ? "red_border" : "gold-border"}`}
                defaultValue=""
              />
              {errors.last_name && (
                <p className="error-message">{errors.last_name.message}</p>
              )}
            </div>
          </div>

          <div className="sign-input">
            <p>User Name</p>
            <input
              type="text"
              name="userName"
              {...register("username", {
                required: "Username is required",
                validate: (value) => {
                  if (value.length < 5) {
                    return "Username must be atleast five characters";
                  }
                },
              })}
              className={`${errors.username ? "red_border" : "gold-border"}`}
              defaultValue=""
            />
            {errors.username && (
              <p className="error-message">{errors.username.message}</p>
            )}
          </div>

          <div className="sign-input">
            <p>Email Address</p>
            <input
              type="text"
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

          <div className="double-input">
            <div className="sign-input">
              <p>Password</p>
              <input
                type="password"
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
              />
              {errors.password && (
                <p className="error-message">{errors.password.message}</p>
              )}
            </div>
            <div className="sign-input">
              <p>Confirm Password</p>
              <input
                type="password"
                name="confirmPassword"
                {...register("confirm_password", {
                  required: "Confirm Password is required",
                  validate: (value) => {
                    if (value.length < 6) {
                      return "Password length must be atleast six characters";
                    }
                    if (value.length > 30) {
                      return "Password must not exceeds 30 characters.";
                    }
                  },
                })}
              />
              {errors.confirm_password && (
                <p className="error-message">
                  {errors.confirm_password.message}
                </p>
              )}
            </div>
          </div>

          <button
            onClick={handleSubmit(onSubmit)}
            className="sign-btn2 cursor-pointer"
          >
            {loading ? <Loader /> : "SIGN UP"}
          </button>
        </form>
      </div>
    </section>
  );
}

export default SignUp;
