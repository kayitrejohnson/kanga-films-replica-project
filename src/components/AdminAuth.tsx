
import { useState } from "react";
import { Shield, Eye, EyeOff } from "lucide-react";
import { Button } from "@/components/ui/button";

interface AdminAuthProps {
  onAuthenticated: () => void;
}

const AdminAuth = ({ onAuthenticated }: AdminAuthProps) => {
  const [credentials, setCredentials] = useState({ username: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simple authentication - in production, this should be properly secured
    if (credentials.username === "admin" && credentials.password === "kangafilms2025") {
      localStorage.setItem("kangaAdminAuth", "true");
      onAuthenticated();
    } else {
      setError("Invalid credentials. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center">
      <div className="bg-gray-800 p-8 rounded-lg border border-gray-700 w-full max-w-md">
        <div className="text-center mb-6">
          <div className="bg-red-600 p-3 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
            <Shield className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-2xl font-bold text-white mb-2">Admin Access</h1>
          <p className="text-gray-400">Enter your credentials to access the admin dashboard</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Username</label>
            <input
              type="text"
              value={credentials.username}
              onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
              className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:border-red-500"
              placeholder="Enter admin username"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                value={credentials.password}
                onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
                className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:border-red-500 pr-10"
                placeholder="Enter admin password"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
              >
                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
          </div>

          {error && (
            <div className="bg-red-600/20 border border-red-600 text-red-400 px-4 py-2 rounded text-sm">
              {error}
            </div>
          )}

          <Button type="submit" className="w-full bg-red-600 hover:bg-red-700">
            Login to Dashboard
          </Button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-gray-500 text-xs">
            Contact system administrator for access
          </p>
          <p className="text-gray-500 text-xs mt-1">
            Email: kjohnsonkayitare@gmail.com
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdminAuth;
