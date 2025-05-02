import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../hooks/useAuth";

export default function Login() {
  const [formData, setFormData] = useState({ usn: "", password: "" });
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    const formattedValue = name === "usn" ? value.toUpperCase().trim() : value.trim();
    setFormData({ ...formData, [name]: formattedValue });
  };
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    //const formattedUSN = formData.usn.trim().toUpperCase();
    //const updatedForm = { ...formData, usn: formattedUSN };
    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", formData);
      login(res.data);
      localStorage.setItem("name", res.data.user.name);
      navigate("/dashboard");
    } catch (err) {
      alert("❌ Login failed. Check your USN or password.");
    }
  };

  return (
    <main className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 via-indigo-900 to-gray-800 text-white">
      <section className="w-[28rem] p-8 rounded-xl bg-gray-900 shadow-lg">
        <h2 className="text-3xl font-bold text-center mb-6">Login to UniTask</h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <input
            type="text"
            name="usn"
            placeholder="University USN"
            value={formData.usn}
            onChange={handleChange}
            spellCheck={false}
            className="w-full p-3 bg-gray-800 border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full p-3 bg-gray-800 border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />
          <button
            type="submit"
            className="w-full py-2 bg-indigo-600 hover:bg-indigo-500 rounded font-semibold transition"
          >
            Log In
          </button>
        </form>

        <p className="text-center mt-6 text-gray-400">
          No account?{" "}
          <a href="/register" className="text-indigo-400 hover:underline">
            Create One
          </a>
        </p>
      </section>
    </main>
  );
}
