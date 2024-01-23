import React from 'react'
import './Home.css'
import Product from './Product'
import hero from './logo/—Pngtree—taobao vector creative technology online_1110799.jpg'

function Home() {
  return (
    <div className='home'>
      {/* <img className='home__image' 
      src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
       alt="" /> */}
      <img className='home__image' 
      src={hero}
       alt="" />
      <div className="home__row">
        <Product
          id='1234'
          title='The lean startup: How constant Innovation Creates Radically Successful Business Paperback'
          price={11.98}
          rating={5}
          image='https://m.media-amazon.com/images/I/81SrwYY-6-L._AC_UY218_.jpg'
        />
        <Product
          id='1234'
         title='Hisense 65 Inches Smart 4K UHD TV + Free Wall Bracket 65A6K'
          price={10497}
          rating={5}
          image='https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/61/2736521/1.jpg?7804'
        />
      </div>
      <div className="home__row">
        <Product
          id='1234'
          title='ADIDAS Daily Ii Backpack Unisex'
          price={ 510500
          }
          rating={5}
          image='https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/49/0314491/1.jpg?2716'
          
        />
        <Product
          id='1234'
          title='Scanfrost 4-Burner Gas Cooker 50 X 50cm (CK-5400B) + 2 Years Warranty'
          price={11.98}
          rating={5}
          image='https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/25/788258/1.jpg?9991'
        />
        <Product
          id='1234'
          title='Tri Fidget Spinner 360°Hand Finger Spinner Hybrid Rotation Bearing Spin Widget Focus Toy '
          price={11.98}
          rating={5}
          image='https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/48/7181462/1.jpg?2555'
        />
      </div>
      <div className="home__row">
      <Product
          id='1234'
          title='Sony PlayStation 5 Console - Standard Edition'
          price={11.98}
          rating={5}
          image='https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/97/5490752/1.jpg?7906'
        />
      </div>
       
    </div>
  )
}

export default Home
