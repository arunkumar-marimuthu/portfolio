import React from 'react'
import profilepicture from "../images/profilepicture.jpg"
import Carousel from 'react-bootstrap/Carousel';




const CarouselSlide = () => {

  return (
    <div className='mt-5 mb-5 md:mx-10 outline outline-offset-4'>
      <Carousel>
        <Carousel.Item>
          <img src="https://wallpaperaccess.com/full/9147315.png" alt="..." style={{ width: "100%", height: "400px", maxHeight: "400px", objectFit: "cover" }} />

        </Carousel.Item>
        <Carousel.Item>
          <img src="https://www.skyminds.net/wp-content/uploads/css-banner.jpg" alt="..." style={{ width: "100%", height: "400px", maxHeight: "400px", objectFit: "cover" }} />

        </Carousel.Item>
        <Carousel.Item>
          <img src="https://constructs.stampede-design.com/wp-content/uploads/2017/01/javascriptlogo-2.jpg" alt="..." style={{ width: "100%", height: "400px", maxHeight: "400px", objectFit: "cover" }} />
        </Carousel.Item>

        <Carousel.Item>
          <img src="https://e0.pxfuel.com/wallpapers/390/2/desktop-wallpaper-bootstrap-css-framework.jpg" alt="..." style={{ width: "100%", height: "400px", maxHeight: "400px", objectFit: "cover" }} />
        </Carousel.Item>

        <Carousel.Item>
          <img src="https://www.filepicker.io/api/file/SVFQZQAyRpqJ31f6LNGe" alt="..." style={{ width: "100%", height: "400px", maxHeight: "400px", objectFit: "cover" }} />
        </Carousel.Item>

        <Carousel.Item>
          <img src="https://daqxzxzy8xq3u.cloudfront.net/wp-content/uploads/2019/04/21032431/redux-cover-imgage-1024x768.jpg" alt="..." style={{ width: "100%", height: "400px", maxHeight: "400px", objectFit: "cover" }} />
        </Carousel.Item>

        <Carousel.Item>
          <img src="https://www.nicepng.com/png/detail/383-3839776_node-js-icon-png.png" alt="..." style={{ width: "100%", height: "400px", maxHeight: "400px", objectFit: "cover" }} />
        </Carousel.Item>

        <Carousel.Item>
          <img src="https://curity.io/images/resources/code-examples/code-examples-jwts.jpg" alt="..." style={{ width: "100%", height: "400px", maxHeight: "400px", objectFit: "cover" }} />
        </Carousel.Item>

        <Carousel.Item>
          <img src="https://miro.medium.com/v2/resize:fit:1400/1*kRURuX0Lf2PFNEHcCSA1dQ.png" alt="..." style={{ width: "100%", height: "400px", maxHeight: "400px", objectFit: "cover" }} />
        </Carousel.Item>

        <Carousel.Item>
          <img src="https://fs.buttercms.com/resize=width:940/I351RMgSjC6YAj1Ra8pE" alt="..." style={{ width: "100%", height: "400px", maxHeight: "400px", objectFit: "cover" }} />
        </Carousel.Item>
      </Carousel>
    </div>
  )
}

export default CarouselSlide
