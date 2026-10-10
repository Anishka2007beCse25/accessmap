
import { BrowserRouter, Routes, Route } from "react-router-dom";

import LandingPage from "./pages/LandingPage";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import ExplorePage from "./pages/ExplorePage";
import PlaceDetailsPage from "./pages/PlaceDetailsPage";
import ContributePage from "./pages/ContributePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/explore" element={<ExplorePage />} />
        <Route path="/places/:id" element={<PlaceDetailsPage />} />
        <Route path="/contribute" element={<ContributePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
