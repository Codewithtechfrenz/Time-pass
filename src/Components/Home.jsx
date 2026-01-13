import React from "react";
import Header from "./Header";
import DeliveryStoryPage from "./Delivery";
import Hero from "./Hero";
import ImageTextSection from "./Content";
import CoffeeCards from "./Preparation";
import ShowcaseSection from "./Content1";
import PopularBeverages from "./Menu";
import OurStory from "./Story";
import WorkplaceService from "./Service";
import FutureBeverages from "./FutureBeverages";
import FAQSection from "./FAQ";
import ReviewSection from "./Reviews";
import OfferSection from "./Offer";
import Footer from "./Footer";

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <DeliveryStoryPage />
      <ImageTextSection />
      <CoffeeCards />
      <ShowcaseSection />
      <PopularBeverages />
      <OurStory />
      <WorkplaceService />
      <FutureBeverages />
      <FAQSection/>
      <ReviewSection/>
      <OfferSection/>
      <Footer />
    </>
  );
};

export default Home;
