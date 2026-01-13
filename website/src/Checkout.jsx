import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import "./Checkout.css";
import HomeImg from "./assets/home.jpeg";
import { useState, useEffect } from "react";

function Checkout() {
  const navigate = useNavigate();
  const [captcha, setCaptcha] = useState("");
  const [captchaInput, setCaptchaInput] = useState("");

  // Generate random CAPTCHA on load
  const generateCaptcha = () => {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let captchaStr = "";
    for (let i = 0; i < 6; i++) {
      captchaStr += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setCaptcha(captchaStr);
  };

  useEffect(() => {
    generateCaptcha();
  }, []);

  const validationSchema = Yup.object({
    name: Yup.string()
      .matches(/^[A-Za-z\s]+$/, "Name must contain only alphabets")
      .required("Name is required"),
    age: Yup.number()
      .min(1, "Age must be between 1 and 60")
      .max(60, "Age must be between 1 and 60")
      .required("Age is required"),
    phone: Yup.string()
      .matches(/^[0-9]{10}$/, "Phone number must be exactly 10 digits")
      .required("Phone number is required"),
    email: Yup.string()
      .email("Enter a valid email address")
      .required("Email is required"),
    gender: Yup.string(),
    address: Yup.string(),
    password: Yup.string().required("Password is required"),
    confirmPassword: Yup.string()
      .required("Confirm password is required")
      .oneOf([Yup.ref("password")], "Passwords must match"),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      age: "",
      gender: "",
      phone: "",
      address: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema,
    onSubmit: (values) => {
      if (captchaInput.toUpperCase() !== captcha) {
        alert("CAPTCHA does not match. Please try again.");
        generateCaptcha(); // regenerate captcha
        setCaptchaInput("");
        return;
      }
      // Pass form values to Payment page
      navigate("/payment", { state: { formData: values } });
    },
  });

  return (
    <div
      className="checkout-page"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${HomeImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        padding: "20px",
      }}
    >
      <div className="checkout-card big-card">
        <h1 className="checkout-title">Personal Details</h1>
        <p className="checkout-subtitle">
          Please fill in your details to complete the order
        </p>

        <form className="details-form" onSubmit={formik.handleSubmit}>
          {/* Name */}
          <div className="input-box">
            <label>Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.name && formik.errors.name && (
              <small className="error">{formik.errors.name}</small>
            )}
          </div>
          {/* Age */}
          <div className="input-box">
            <label>Age</label>
            <input
              type="number"
              name="age"
              placeholder="Enter your age"
              value={formik.values.age}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.age && formik.errors.age && (
              <small className="error">{formik.errors.age}</small>
            )}
          </div>

          {/* Gender */}
          <div className="input-box">
            <label>Gender</label>
            <select
              name="gender"
              value={formik.values.gender}
              onChange={formik.handleChange}
            >
              <option value="">Select Gender</option>
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>
          </div>
{/* Phone */}
          <div className="input-box">
            <label>Phone Number</label>
            <input
              type="tel"
              name="phone"
              placeholder="Enter phone number"
              value={formik.values.phone}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.phone && formik.errors.phone && (
              <small className="error">{formik.errors.phone}</small>
            )}
          </div>

          {/* Address */}
          <div className="input-box">
            <label>Delivery Address</label>
            <textarea
              name="address"
              placeholder="Enter full address"
              value={formik.values.address}
              onChange={formik.handleChange}
            />
          </div>


          {/* Email */}
          <div className="input-box">
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.email && formik.errors.email && (
              <small className="error">{formik.errors.email}</small>
            )}
          </div>
          {/* Password */}
          <div className="input-box">
            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.password && formik.errors.password && (
              <small className="error">{formik.errors.password}</small>
            )}
          </div>

          {/* Confirm Password */}
          <div className="input-box">
            <label>Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm password"
              value={formik.values.confirmPassword}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.confirmPassword && formik.errors.confirmPassword && (
              <small className="error">{formik.errors.confirmPassword}</small>
            )}
          </div>

          
          
          

          {/* CAPTCHA */}
          <div className="input-box" style={{ textAlign: "center", marginTop: "20px" }}>
            <label>Enter CAPTCHA</label>
            <div
              style={{
                margin: "10px 0",
                padding: "10px 0",
                fontSize: "24px",
                letterSpacing: "4px",
                fontWeight: "700",
                background: "#f0f0f0",
                borderRadius: "8px",
                userSelect: "none",
              }}
            >
              {captcha}
            </div>
            <input
              type="text"
              placeholder="Enter CAPTCHA"
              value={captchaInput}
              onChange={(e) => setCaptchaInput(e.target.value)}
              style={{ textAlign: "center", padding: "8px 12px", borderRadius: "6px", width: "200px" }}
            />
          </div>

          <button type="submit" className="submit-btn big-btn" style={{ marginTop: "20px" }}>
            Continue to Payment
          </button>
        </form>
      </div>
    </div>
  );
}

export default Checkout;