import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import slide1 from "../images/Kalakand.png";
import slide2 from "../images/cookies.png";
import slide3 from "../images/dry-fruits.png";
import slide4 from "../images/home-made-achar.png";
import slide5 from "../images/indore-namkeens.png";
import slide6 from "../images/nan-khatai.png";
import slide7 from "../images/pure-desi-cow-ghee.png";
import slide8 from "../images/panchhi-petha.png";
import slide9 from "../images/patisa.png";
import app1 from "../images/google_Play_logo.png"
import app2 from "../images/ios-app-store.png"

const Home = () => {
  return (
    <div>
        <section className="slider container mb-3">
        <Carousel>
      <Carousel.Item className='slide'>
        <img
          className="d-block w-100"
          src= {slide1}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item className='slide'>
        <img
          className="d-block w-100"
          src={slide2}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item className='slide'>
        <img
          className="d-block w-100"
          src={slide3}
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item className='slide'>
        <img
          className="d-block w-100"
          src={slide4}
          alt="Fourth slide"
        />
      </Carousel.Item>
      <Carousel.Item className='slide'>
        <img
          className="d-block w-100"
          src={slide5}
          alt="Fifth slide"
        />
      </Carousel.Item>
      <Carousel.Item className='slide'>
        <img
          className="d-block w-100"
          src={slide6}
          alt="Six slide"
        />
      </Carousel.Item>
      <Carousel.Item className='slide'>
        <img
          className="d-block w-100"
          src={slide7}
          alt="Seven slide"
        />
      </Carousel.Item>
      <Carousel.Item className='slide'>
        <img
          className="d-block w-100"
          src={slide8}
          alt="Eight slide"
        />
      </Carousel.Item>
      <Carousel.Item className='slide'>
        <img
          className="d-block w-100"
          src={slide9}
          alt="Nine slide"
        />
      </Carousel.Item>
    </Carousel>
    </section>

    <section className="timing-wraper">
	<div className="container">
		<div className="col-sm-12 section-title">
			<h3 className="heading">Order Online</h3>
			<div className="subtitle">
				Download The App 
			</div>
      <div className="col-md-4 d-flex offset-sm-4 justify-content-center">
        <div className="col-sm-6 text-center">
        <a href="https://play.google.com/store/apps/details?id=com.mcn.mcnecomandroid" target="new">
          <img src= {app1} className="img-play-store" alt="go pure play store"/>
        </a>
        </div>
        <div className="col-sm-6 text-center">
        <a href="https://apps.apple.com/us/app/go-pure-app/id1558129667" target="new">
          <img src= {app2} className="img-ios-store" alt="go pure ios store"/>
        </a>
        </div>
      </div>
		</div>
	</div>
</section>

    </div>
  )
}

export default Home
