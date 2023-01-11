import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import MainPage from "./pages/MainPage";
import GearCagePage from "./pages/GearCagePage";
import FeaturedImages from "./pages/FeaturedImages";
import ContactsPage from "./pages/ContactsPage";
import BusinessAreas from "./pages/BusinessAreas";
import Layout from "./components/main/Layout/Layout";


function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<Layout />}>
                  <Route path="/" element={<MainPage />}/>
                  <Route path="gear" element={<GearCagePage />}/>
                  <Route path="featuerdi" element={<FeaturedImages />}/>
                  <Route path="contacts" element={<ContactsPage />}/>
                  <Route path="business" element={<BusinessAreas />}/>
              </Route>
          </Routes>
      </BrowserRouter>
  );
}

export default App;
