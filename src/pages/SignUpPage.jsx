
import { useState } from "react";
import { Link } from "react-router-dom";
import "./SignInPage.css";

function SignUpPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    setError("");

    if (password.length < 8) {
      setError("Your password must contain at least 8 characters.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Your passwords do not match. Please try again.");
      return;
    }

    setError(
      "Your details passed the basic checks. Account creation is not connected yet."
    );
  }

  return (
    <main className="auth-page">
      <div className="auth-background" aria-hidden="true" />

      <header className="auth-header">
        <Link to="/" className="auth-logo">
          <span className="auth-logo-mark">a.</span>
          <span>accessmap</span>
        </Link>

        <p>
          Already a member? <Link to="/signin">Sign in ↗</Link>
        </p>
      </header>

      <section className="auth-layout">
        <div className="auth-intro">
          <span className="auth-eyebrow">YOUR JOURNEY STARTS HERE</span>
          <h1>Make room for more accessible journeys.</h1>
          <p>
            Join a community working to make useful accessibility
            information easier to discover and share.
          </p>

          <div className="auth-note">
            <span className="auth-note-mark">a.</span>
            <span>Discover thoughtfully. Share responsibly.</span>
          </div>
        </div>

        <div className="auth-card">
          <p className="auth-card-eyebrow">JOIN ACCESSMAP</p>
          <h2>Create your account.</h2>
          <p className="auth-description">
            Start exploring and help make place information more useful.
          </p>

          <form onSubmit={handleSubmit} className="auth-form">
            <label htmlFor="signup-name">Full name</label>
            <input
              id="signup-name"
              type="text"
              placeholder="Your name"
              autoComplete="name"
              value={name}
              onChange={(event) => setName(event.target.value)}
              required
            />

            <label htmlFor="signup-email">Email address</label>
            <input
              id="signup-email"
              type="email"
              placeholder="you@example.com"
              autoComplete="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
            />

            <label htmlFor="signup-password">Password</label>
            <input
              id="signup-password"
              type="password"
              placeholder="At least 8 characters"
              autoComplete="new-password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              minLength={8}
              required
            />

            <label htmlFor="signup-confirm-password">
              Confirm password
            </label>
            <input
              id="signup-confirm-password"
              type="password"
              placeholder="Enter your password again"
              autoComplete="new-password"
              value={confirmPassword}
              onChange={(event) => setConfirmPassword(event.target.value)}
              required
            />

            {error && (
              <p className="auth-form-message" role="status">
                {error}
              </p>
            )}

            <button type="submit" className="auth-submit">
              Create account <span aria-hidden="true">↗</span>
            </button>
          </form>

          <p className="auth-switch">
            Already have an account? <Link to="/signin">Sign in</Link>
          </p>

          <Link to="/" className="auth-back">
            ← Back to homepage
          </Link>
        </div>
      </section>
    </main>
  );
}

export default SignUpPage;
