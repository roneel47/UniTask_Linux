import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../hooks/useAuth";

export default function Register() {
  const [formData, setFormData] = useState({
    usn: "",
    password: "",
    name: "",
    email: "",
    role: "student",
  });
  const [success, setSuccess] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formattedUSN = formData.usn.trim().toUpperCase();
    const updatedForm = { ...formData, usn: formattedUSN };

    try {
      const res = await axios.post("http://localhost:5000/api/auth/register", updatedForm);
      login(res.data);
      localStorage.setItem("name", formData.name);
      setSuccess(true);
      setTimeout(() => {
        navigate("/dashboard");
      }, 1500);
    } catch (err) {
      alert("❌ Registration failed");
    }
  };

  return (
    <main className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 via-indigo-900 to-gray-800 text-white">
      <section className="w-[28rem] p-8 rounded-xl bg-gray-900 shadow-lg">
        <h2 className="text-3xl font-bold text-center mb-6">Create Account</h2>

        {success && (
          <p className="text-green-400 text-center mb-4 text-sm">
            ✅ Registered successfully! Redirecting...
          </p>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          <input
            type="text"
            name="usn"
            placeholder="University USN"
            value={formData.usn}
            onChange={handleChange}
            required
            className="w-full p-3 bg-gray-800 border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
            className="w-full p-3 bg-gray-800 border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-3 bg-gray-800 border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-3 bg-gray-800 border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />

          <button
            type="submit"
            className="w-full py-2 bg-indigo-600 hover:bg-indigo-500 rounded font-semibold transition"
          >
            Register
          </button>
        </form>

        <p className="text-center mt-6 text-gray-400">
          Already have an account?{" "}
          <a href="/" className="text-indigo-400 hover:underline">
            Login
          </a>
        </p>
      </section>
    </main>
  );
}
