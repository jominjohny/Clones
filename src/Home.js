import React from 'react'
import "./Home.css"
import Product from './Product'


function Home() {
    return (
        <div className="home">
            <img className="home_image"
                src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt="" />

            <div className="home__row">
                <Product id="123456" title="Amazone Watch"
                    price={11.6} rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg" />

                <Product id="1234567" title="Amazone Eco dot with wifi and alexa"
                    price={11.6} rating={3}
                    image="https://images-na.ssl-images-amazon.com/images/I/6182S7MYC2L._AC_UL320_SR320,320_.jpg" />

            </div>

            <div className="home__row">
                <Product id="12345" title="Amazone Eco dot with wifi and alexa"
                    price={10.6} rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/6182S7MYC2L._AC_UL320_SR320,320_.jpg" />

                <Product id="1234" title="Amazone Eco dot with wifi and alexa"
                    price={6} rating={3}
                    image="https://images-na.ssl-images-amazon.com/images/I/6182S7MYC2L._AC_UL320_SR320,320_.jpg" />

                <Product id="123" title="Amazone Eco dot with wifi and alexa"
                    price={13} rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/I/6182S7MYC2L._AC_UL320_SR320,320_.jpg" />

            </div>

            <div className="home__row">
                <Product id="12345678" title="Amazone Eco dot with wifi and alexa"
                    price={8} rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/6182S7MYC2L._AC_UL320_SR320,320_.jpg" />

            </div>
        </div>
    )
}

export default Home
