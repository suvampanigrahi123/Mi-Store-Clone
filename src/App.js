import './App.css';
import NavBar from './Components/NavBar';
import PreNavbar from './Components/PreNavbar';
import {BrowserRouter as Router,Route, Switch} from 'react-router-dom'
import Slider from './Components/Slider';
import Offers from './Components/Offers';
import data from './Data/data.json'
import Heading from './Components/Heading'
import StarProducts from './Components/StarProducts';
import HotAccessoriesMenu from './Components/HotAccessoriesMenu';
import HotAccessSeries from './Components/HotAccessSeries';
import ProductReview from './Components/ProductReview';
import Videos from './Components/Videos';
import Banner from './Components/Banner.js'
import Footer from './Components/Footer.js'
import NavOption from './Components/NavOption.js'
function App() {
  return (
    <Router >
    <PreNavbar />
    <NavBar />
    <NavOption miphones={data.miPhones} RedmiPhones={data.redmiPhones} tv={data.tv} laptops={data.laptop} lifeStyle={data.fitnessAndLifeStyle} home={data.home} radio={data.audio} accessSeries={data.accessories} />
    <Slider />
    <Offers  offer={data.offer} />
    <Heading value="STAR PRODUCTS"/>
    <StarProducts Data={data.starProduct} />
    <Heading value="HOT ACCESSORIES"/>
    <HotAccessoriesMenu />
    <Switch>
    <Route exact path='/music' ><HotAccessSeries music={data.hotAccessories.music} musicCover={data.hotAccessoriesCover.music} /> </Route>
    <Route exact path='/smartdevices' ><HotAccessSeries smartDevice={data.hotAccessories.smartDevice} smartDeviceCover={data.hotAccessoriesCover.smartDevice} /> </Route>
    <Route exact path='/home' ><HotAccessSeries Home={data.hotAccessories.home} HomeCover={data.hotAccessoriesCover.home} /> </Route>
    <Route exact path='/lifeStyle' ><HotAccessSeries lifeStyle={data.hotAccessories.lifeStyle} lifeStyleCover={data.hotAccessoriesCover.lifeStyle} /> </Route>
    <Route exact path='/MobileAccessories' ><HotAccessSeries mobileAccessories={data.hotAccessories.mobileAccessories} mobileAccessoriesCover={data.hotAccessoriesCover.mobileAccessories} /> </Route>
    </Switch>
    <Heading value='PRODUCT REVIEWS'/>
    <ProductReview review={data.productReviews} />
    <Heading value='VIDEOES' />
    <Videos video={data.videos} />
    <Heading value='IN THE PRESS' />
    <Banner banner={data.banner.end} />
    <Footer footer={data.footer} />
    </Router>
  );
}
export default App;