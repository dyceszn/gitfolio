import React from "react";
import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Suspense } from "react";
import Loading from "./Components/Loading";

// lazy loading
const Home = React.lazy(() => import("./Pages/Home"));
const Profile = React.lazy(() => import("./Pages/Profile"));
const Error404 = React.lazy(() => import("./Pages/Error404"));
const Repository = React.lazy(() => import("./Pages/Repository"));
const Errormsg = React.lazy(() => import("./Pages/Errmsg"));

function App() {
  return (
    <Router>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/repository" element={<Repository />} />
          <Route path="/errmsg" element={<Errormsg />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
