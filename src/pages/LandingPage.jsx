
import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import places from "../data/places";

function LandingPage() {
  const [query, setQuery] = useState("");
  const [selectedFeature, setSelectedFeature] = useState("All");
  const [showResults, setShowResults] = useState(false);

  const features = [
    "All",
    "Step-free entrance",
    "Lift information",
    "Accessible toilet",
  ];

  const filteredPlaces = useMemo(() => {
    const search = query.trim().toLowerCase();

    return places.filter((place) => {
      const matchesQuery =
        !search ||
        place.name.toLowerCase().includes(search) ||
        place.area.toLowerCase().includes(search) ||
        place.category.toLowerCase().includes(search);

      const matchesFeature =
        selectedFeature === "All" ||
        place.features.includes(selectedFeature);

      return matchesQuery && matchesFeature;
    });
  }, [query, selectedFeature]);

  function handleSearch(event) {
    event.preventDefault();
    setShowResults(true);

    document
      .getElementById("explore")
      ?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div className="app">
      <header className="navbar">
        <a className="logo" href="#top" aria-label="AccessMap home">
          <span className="logo-mark">a.</span>
          <span>accessmap</span>
        </a>

        <nav className="nav-links" aria-label="Main navigation">
          <a href="#explore">Explore</a>
          <a href="#about">Our approach</a>
          <a href="#contribute">Contribute</a>
        </nav>

        
        <div className="nav-actions">
        <Link to="/signin" className="sign-in-link">
            Sign in
        </Link>
        </div>

      </header>

      <main id="top">
        <section className="hero">
          <div className="hero-copy">
            <p className="eyebrow">
              ACCESSIBILITY, BEFORE YOU ARRIVE
            </p>

            <h1>
              The world is yours to <span>explore.</span>
            </h1>

            <p className="hero-description">
              Know more before you go. Discover useful accessibility
              information about places, so you can plan your next
              journey with greater confidence.
            </p>

            <div className="hero-actions">
              <a className="button-primary" href="#explore">
                Explore places <span aria-hidden="true">↗</span>
              </a>

              <a className="text-link" href="#about">
                Why AccessMap? <span aria-hidden="true">↓</span>
              </a>
            </div>

            <p className="hero-note">
              Built around people. Informed by communities.
            </p>
          </div>

          <div
            className="hero-visual"
            aria-label="A glimpse of the AccessMap experience"
          >
            <div className="visual-topline">
              <span>01 / A MORE INFORMED JOURNEY</span>
              <span aria-hidden="true">↗</span>
            </div>

            <div className="visual-message">
              <span className="visual-label">
                THE LITTLE DETAILS MATTER
              </span>

              <h2>Arrive knowing more.</h2>

              <p>
                Entrance access. Step-free routes. The details
                that help you decide.
              </p>
            </div>

            <div className="visual-bottomline">
              <span>ACCESSMAP FIELD NOTES</span>
              <span>MADE FOR EVERY JOURNEY</span>
            </div>
          </div>
        </section>

        <section className="intro-section" id="about">
          <p className="eyebrow">WHY WE EXIST</p>

          <h2>
            A little more information can make a world of difference.
          </h2>

          <p>
            Finding out whether a place works for you should not
            be another obstacle. AccessMap brings useful
            accessibility details into one place, while being
            honest about what is known and what is still missing.
          </p>
        </section>

        <section className="explore-section" id="explore">
          <div className="explore-copy">
            <p className="eyebrow">YOUR NEXT STOP</p>

            <h2>Know before you go.</h2>

            <p>
              Search our demonstration listings by place name,
              area, or category. Try an accessibility filter too.
            </p>
          </div>

          <div className="search-panel">
            <form className="place-search" onSubmit={handleSearch}>
              <label className="sr-only" htmlFor="place-query">
                Search places or areas
              </label>

              <span className="search-icon" aria-hidden="true">
                ⌕
              </span>

              <input
                id="place-query"
                type="search"
                placeholder="Try Chandigarh, library, café..."
                value={query}
                onChange={(event) => {
                  setQuery(event.target.value);
                  setShowResults(true);
                }}
              />

              <button type="submit" className="search-button">
                Search
              </button>
            </form>

            <div className="filter-list" aria-label="Accessibility filters">
              {features.map((feature) => (
                <button
                  type="button"
                  key={feature}
                  className={`filter-chip ${
                    selectedFeature === feature ? "active" : ""
                  }`}
                  aria-pressed={selectedFeature === feature}
                  onClick={() => {
                    setSelectedFeature(feature);
                    setShowResults(true);
                  }}
                >
                  {feature}
                </button>
              ))}
            </div>

            {showResults && (
              <div className="results-area" aria-live="polite">
                <div className="results-heading">
                  <h3>Matching places</h3>
                  <span>{filteredPlaces.length} found</span>
                </div>

                {filteredPlaces.length > 0 ? (
                  <div className="place-results">
                    {filteredPlaces.map((place) => (
                      <article className="place-result" key={place.id}>
                        <div className="place-result-top">
                          <div>
                            <h4>{place.name}</h4>
                            <p>
                              {place.area} · {place.category}
                            </p>
                          </div>

                          <span className="sample-tag">Sample</span>
                        </div>

                        <div className="place-features">
                          {place.features.map((feature) => (
                            <span key={feature}>{feature}</span>
                          ))}
                        </div>

                        <p className="place-status">
                          {place.status} · Not independently verified
                        </p>

                        <p className="place-description">
                          {place.description}
                        </p>
                      </article>
                    ))}
                  </div>
                ) : (
                  <p className="empty-results">
                    No matching sample places. Try another search
                    or choose a different filter.
                  </p>
                )}
              </div>
            )}

            <p className="sample-notice">
              Demonstration data only. Accessibility details have
              not been independently verified.
            </p>
          </div>
        </section>

        <section className="contribute-section" id="contribute">
          <p className="eyebrow">BETTER INFORMATION, TOGETHER</p>

          <h2>
            Your experience can help someone else's journey.
          </h2>

          <p>
            Community observations can make accessibility
            information more useful for everyone.
          </p>

          <Link to="/signin" className="button-light">
            Join the community <span aria-hidden="true">↗</span>
          </Link>
        </section>

        <section className="sign-in-section" id="sign-in">
          <p className="eyebrow">WELCOME TO ACCESSMAP</p>

          <h2>Your journey starts here.</h2>

          <p>
            You can explore the sample listings without signing in.
            Account authentication is not connected yet.
          </p>

          <Link to="/signin" className="button-primary">
            Go to sign in <span aria-hidden="true">↗</span>
          </Link>
        </section>
      </main>

      <footer className="footer">
        <a className="logo footer-logo" href="#top">
          <span className="logo-mark">a.</span>
          <span>accessmap</span>
        </a>

        <p>More clarity. More confidence. More ways to explore.</p>

        <span className="footer-year">ACCESSMAP · V0</span>
      </footer>
    </div>
  );
}

export default LandingPage;
