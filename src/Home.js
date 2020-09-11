import React from 'react'
import './Home.css'
import Product from './Product'
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';

function Home() {
    return (
        <div className="home">
            <div className="home__container">
            <div className="home_image">
                <Carousel>
                    <div>
                        <img src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" />
                        <p className="legend">Legend 1</p>
                    </div>
                    <div>
                        <img src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Toys_en_US_1x._CB431858161_.jpg" />
                        <p className="legend">Legend 2</p>
                    </div>
                </Carousel>
            </div>
                <div className="home__row">
                    <Product id="3" title="HP VH240a 23.8-inch Full HD 1080p IPS LED Monitor with Built-in Speakers and VESA Mounting, Rotating Portrait & Landscape, Tilt, and HDMI & VGA Ports (1KL30AA) - Black" image="https://images-na.ssl-images-amazon.com/images/I/31PTviHMeUL._AC_US160_.jpg" price={50.99} rating={5}/>
                    <Product id="6" title="ASUS VivoBook L203MA Laptop, 11.6” HD Display, Intel Celeron Dual Core CPU, 4GB RAM, 64GB Storage, USB-C, Windows 10 Home In S Mode, Up To 10 Hours Battery Life, One Year of Microsoft 36" image="https://images-na.ssl-images-amazon.com/images/I/51svyK3ruYL._AC_US160_.jpg" price={32.99} rating={5}/>
                    <Product id="8" title="VicTsing MM057 2.4G Wireless MoHP VH240a 23.8-inch Full HD 1080p" image="https://m.media-amazon.com/images/I/71MD3ultk-L._AC_UL320_.jpg" price={819} rating={5}/>
                    <Product id="56" title="BioShock Big Daddy Backpack" image="https://images-na.ssl-images-amazon.com/images/I/912Jm1mF1qL._SX522_.jpg" price={819} rating={5}/>

                </div>
                <div className="home__row">
                    <Product id="1" title="The Lean Startup" image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg" price={1129} rating={5}/>
                    <Product id="12" title="Nintendo Switch 32GB Console Video Games w/ 32GB Memory Card | Neon Red/Neon Blue Joy-Con | 1080p Resolution | 802.11ac WiFi | HDMI" image="https://images-na.ssl-images-amazon.com/images/I/41DQoLIfsRL._AC_US218_.jpg" price={21.99} rating={5}/>
                </div>
                
                <div className="home__row">
                    <Product id="33" title="Acer Nitro 5 Gaming Laptop, 9th Gen Intel Core i5-9300H, NVIDIA GeForce GTX 1650, 15.6 Full HD IPS Display," image="https://m.media-amazon.com/images/I/71s1LRpaprL._AC_UL320_.jpg" price={919} rating={5}/>
                </div>

            </div>
        </div>
    )
}

export default Home
