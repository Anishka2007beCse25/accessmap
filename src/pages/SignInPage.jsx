
import { useState } from "react";
import { Link } from "react-router-dom";
import "./SignInPage.css";

function SignInPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    alert(
      "Sign-in is not connected yet. Authentication will be added later."
    );
  }

  function handleForgotPassword() {
    const recoveryEmail = email.trim();

    if (!recoveryEmail) {
      alert("Please enter your email address first.");
      return;
    }

    const confirmed = window.confirm(
      `Reset password for ${recoveryEmail}?\n\nPassword recovery is not connected yet.`
    );

    if (confirmed) {
      alert(
        "Password reset is not available yet. Once authentication is connected, you will be able to receive a password reset link."
      );
    }
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
          New here? <Link to="/signup">Create account ↗</Link>
        </p>
      </header>

      <section className="auth-layout">
        <div className="auth-intro">
          <span className="auth-eyebrow">
            ACCESSIBILITY, BEFORE YOU ARRIVE
          </span>

          <h1>Every journey deserves a little more certainty.</h1>

          <p>
            Discover places with more confidence. Sign in to be part
            of a community making accessibility information more useful.
          </p>

          <div className="auth-note">
            <span className="auth-note-mark">a.</span>
            <span>
              More clarity. More confidence. More ways to explore.
            </span>
          </div>
        </div>

        <div className="auth-card">
          <p className="auth-card-eyebrow">WELCOME BACK</p>

          <h2>Your journey starts here.</h2>

          <p className="auth-description">
            Sign in to access your AccessMap account.
          </p>

          <form onSubmit={handleSubmit} className="auth-form">
            <label htmlFor="signin-email">Email address</label>

            <input
              id="signin-email"
              type="email"
              placeholder="you@example.com"
              autoComplete="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
            />

            
                <label htmlFor="signin-password">Password</label>

                <input
                id="signin-password"
                type="password"
                placeholder="Enter your password"
                autoComplete="current-password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                required
                />

                <div className="forgot-password-row">
                <button
                    type="button"
                    className="forgot-password"
                    onClick={handleForgotPassword}
                >
                    Forgot password?
                </button>
                </div>


            <button type="submit" className="auth-submit">
              Sign in <span aria-hidden="true">↗</span>
            </button>
          </form>

          <p className="auth-switch">
            Don't have an account? <Link to="/signup">Sign up</Link>
          </p>

          <Link to="/" className="auth-back">
            ← Back to homepage
          </Link>
        </div>
      </section>
    </main>
  );
}

export default SignInPage;
