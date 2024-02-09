import "./App.css";
import PreNavbar from "./components/PreNavbar";
import NavBar from "./components/Navbar";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Slider from "./components/Slider.js";
import Offers from "./components/Offers.js";
import Heading from "./components/Heading.js";
import data from "./data/data.json";
import StarProduct from "./components/StarProduct.js";
import HotAccessoriesMenu from "./components/HotAccessoriesMenu.js";
import Footer from "./components/Footer.js"

import Banner from "./components/Banner.js";
import Videos from "./components/Videos.js";
import ProductReviews from "./components/ProductReviews.js";
import HotAccessories from "./components/HotAccessories.js";
import NavOptions from "./components/NavOptions.js"

function App() {
  return (
    <Router>
      <PreNavbar />
      <NavBar />

      <NavOptions miPhones = {data.miPhones} redmiPhones={data.redmiPhones} tv ={data.tv} laptop={data.laptop} fitnessAndLifestyle = {data.fitnessAndLifeStyle} home ={data.home} audio = {data.audio}  accessories = {data.accessories} />
      <Slider start={data.banner.start} />
      <Offers offers={data.offer} />
      <Heading text="STAR PRODUCTS" />
      <StarProduct starProduct={data.starProduct} />
      <Heading text="HOT ACCESSORIES" />
      <HotAccessoriesMenu />
      <Routes>
        <Route
          exact
          path="/music"
          element={
            <HotAccessories
              music={data.hotAccessories.music}
              musicCover={data.hotAccessoriesCover.music}
            />
          }
        />

        <Route
          exact
          path="/smartDevices"
          element={
            <HotAccessories
              music={data.hotAccessories.smartDevice}
              musicCover={data.hotAccessoriesCover.smartDevice}
            />
          }
        />
        <Route
          exact
          path="/home"
          element={
            <HotAccessories
              music={data.hotAccessories.home}
              musicCover={data.hotAccessoriesCover.home}
            />
          }
        />
        <Route
          exact
          path="/lifestyle"
          element={
            <HotAccessories
              music={data.hotAccessories.lifeStyle}
              musicCover={data.hotAccessoriesCover.lifeStyle}
            />
          }
        />
        <Route
          exact
          path="/mobileAccessories"
          element={
            <HotAccessories
              music={data.hotAccessories.mobileAccessories}
              musicCover={data.hotAccessoriesCover.mobileAccessories}
            />
          }
        />
      </Routes>
      <Heading text="PRODUCT REVIEW" />
      <ProductReviews productReviews={data.productReviews} />
      <Heading text="VIDEOS" />
      <Videos videos={data.videos} />
      <Heading text="IN THE PRESS" />
      <Banner banner={data.banner} />

      <Footer footer={data.footer}/>
    </Router>
  );
}

export default App;
