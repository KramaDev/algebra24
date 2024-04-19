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
import Stuff from "./pages/stuff";
import Tabss from "./pages/tabss";
import Games from "./pages/games";
import GameInfo from "./pages/gameinfo";
import Glovo from "./pages/glovo";

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
          <Route path="stuff" element={<Stuff />} />
          <Route path="glovo" element={<Glovo />} />
          <Route path="tabss" element={<Tabss />} />
          <Route path="games">
            <Route index element={<Games />} />
            <Route path=":gameId" element={<GameInfo />} />
          </Route>
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </>
  );
};
export default App;
