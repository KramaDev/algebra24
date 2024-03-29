import { Route, Routes } from "react-router-dom";
import Berries from "./pages/berries";
import Layout from "./components/layout";
import Home from "./pages/home";
import NoMatch from "./pages/no-match";
import Charmander from "./pages/charmander";
import ProfileMaker from "./pages/profile-maker";
import Vjezbe from "./pages/vjezbe";
import DataTypes from "./pages/datatypes";
import Gallery from "./pages/gallery";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="berries" element={<Berries />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="charmander" element={<Charmander />} />
          <Route path="profile-maker" element={<ProfileMaker />} />
          <Route path="datatypes" element={<DataTypes />} />
          <Route path="vjezbe" element={<Vjezbe />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </>
  );
};
export default App;
