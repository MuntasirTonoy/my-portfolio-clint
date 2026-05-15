import React, { useState } from "react";
import { useNavigate } from "react-router";
import { motion } from "framer-motion";
import { FiLock, FiEye, FiEyeOff, FiShield, FiMail } from "react-icons/fi";
import { loginAdmin } from "../../Api/Api";

const AdminLogin = () => {
  const [email, setEmail] = useState("admin@example.com");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const data = await loginAdmin({ email, password });
      localStorage.setItem("admin_auth", "true");
      localStorage.setItem("admin_token", data.token);
      localStorage.setItem("admin_user", JSON.stringify(data));
      navigate("/admin/dashboard");
    } catch (err) {
      setError(err.response?.data?.message || "Login failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-base-200 flex items-center justify-center relative overflow-hidden px-4">
      {/* Background glows */}
      <div
        className="absolute -top-40 -left-40 w-96 h-96 rounded-full opacity-10 blur-3xl pointer-events-none"
        style={{ background: "#02b677" }}
      />
      <div
        className="absolute -bottom-40 -right-40 w-96 h-96 rounded-full opacity-10 blur-3xl pointer-events-none"
        style={{ background: "#4f46e5" }}
      />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(#02b677 1px, transparent 1px), linear-gradient(90deg, #02b677 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 w-full max-w-md"
      >
        {/* Card */}
        <div className="bg-base-100 rounded-2xl shadow-2xl border border-base-300 overflow-hidden">
          {/* Header */}
          <div
            className="p-8 pb-6 text-center"
            style={{
              background:
                "linear-gradient(135deg, rgba(2,182,119,0.15) 0%, rgba(79,70,229,0.1) 100%)",
            }}
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="w-16 h-16 rounded-2xl mx-auto mb-4 flex items-center justify-center"
              style={{ background: "rgba(2,182,119,0.2)" }}
            >
              <FiShield className="text-3xl" style={{ color: "#02b677" }} />
            </motion.div>
            <h1 className="text-2xl font-extrabold mb-1">Admin Panel</h1>
            <p className="text-base-content/50 text-sm">
              Portfolio Content Manager
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleLogin} className="p-8 space-y-5">
            <div className="space-y-2">
              <label className="text-sm font-semibold text-base-content/70">
                Admin Email
              </label>
              <div className="relative">
                <FiMail
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-base-content/40"
                  size={16}
                />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setError("");
                  }}
                  placeholder="admin@example.com"
                  className="w-full pl-10 pr-4 py-3 bg-base-200 border border-base-300 rounded-md text-sm focus:outline-none focus:border-[#02b677] focus:ring-1 focus:ring-[#02b677] transition-all"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold text-base-content/70">
                Admin Password
              </label>
              <div className="relative">
                <FiLock
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-base-content/40"
                  size={16}
                />
                <input
                  id="admin-password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    setError("");
                  }}
                  placeholder="Enter admin password"
                  className="w-full pl-10 pr-10 py-3 bg-base-200 border border-base-300 rounded-md text-sm focus:outline-none focus:border-[#02b677] focus:ring-1 focus:ring-[#02b677] transition-all"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-base-content/40 hover:text-base-content/70 transition-colors"
                >
                  {showPassword ? <FiEyeOff size={16} /> : <FiEye size={16} />}
                </button>
              </div>
            </div>

            {error && (
              <motion.p
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                className="text-red-500 text-xs font-medium bg-red-500/10 px-3 py-2 rounded-lg"
              >
                {error}
              </motion.p>
            )}

            <button
              id="admin-login-btn"
              type="submit"
              disabled={loading}
              className="w-full py-3 rounded-md font-bold text-sm tracking-wider transition-all duration-300 relative overflow-hidden"
              style={{
                background: loading
                  ? "rgba(2,182,119,0.5)"
                  : "linear-gradient(135deg, #02b677, #00955f)",
                color: "white",
                boxShadow: loading ? "none" : "0 4px 20px rgba(2,182,119,0.4)",
              }}
            >
              {loading ? (
                <span className="flex items-center justify-center gap-2">
                  <span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                  Authenticating...
                </span>
              ) : (
                "Access Dashboard"
              )}
            </button>

            <p className="text-center text-xs text-base-content/30 pt-2">
              🔒 Secure admin access only
            </p>
          </form>
        </div>
      </motion.div>
    </div>
  );
};

export default AdminLogin;
