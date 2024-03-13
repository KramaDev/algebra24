import { Routes, Route, Outlet, Link } from "react-router-dom";
import Layout from "./components/layout";
import Home from "./pages/home";
import NoMatch from "./pages/no-match";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
