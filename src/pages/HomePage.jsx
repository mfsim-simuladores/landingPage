// src/pages/HomePage.jsx

import AboutUs from '../components/home/AboutUs';
import CtaSection from '../components/home/CtaSection';
import Features from '../components/home/Features';
import Hero from '../components/home/Hero';
import Location from '../components/home/Location';
import Mission from '../components/home/Mission';
import Partners from '../components/home/Partners';
import Products from '../components/home/Products';
import Testimonials from '../components/home/Testimonials';

const HomePage = () => {
    return (
        <>
            <Hero />
            <Features />
            <Products />
            <Mission />
            <AboutUs />
            <Location />
            <Testimonials />
            <Partners />
            <CtaSection />
        </>
    );
};

export default HomePage;