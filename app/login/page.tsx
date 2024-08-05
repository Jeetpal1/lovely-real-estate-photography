"use client";

import { useState } from "react";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { useAuth } from "../hooks/useAuth";

export default function Login() {
  const { user, login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setError("");
    try {
      await login(email, password);
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <div className="bg-background min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-primary text-4xl font-bold">Login</h1>
        {user ? (
          <p className="text-text mt-4">
            You are already logged in as {user.email}
          </p>
        ) : (
          <>
            <p className="text-text mt-4">
              Please log in to access your account.
            </p>
            <form onSubmit={handleSubmit} className="mt-8">
              <div className="mb-4">
                <label className="block text-text mb-2" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full p-2 border border-neutral rounded"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-text mb-2" htmlFor="password">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  className="w-full p-2 border border-neutral rounded"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              {error && <p className="text-red-500">{error}</p>}
              <button
                type="submit"
                className="bg-primary text-text-light py-2 px-4 rounded"
              >
                Login
              </button>
            </form>
          </>
        )}
      </main>
      <Footer />
    </div>
  );
}
