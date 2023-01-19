import React from 'react'

export default function Main() {
  return (
    <main>
        <div className='hero-section'>
            <div className='content'>
                <h2>
                Little Lemon
                </h2>
                <h3>Chicago</h3>
                <p>
                We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
                </p>
                <button className='reserve-table-btn'>Reserve a table</button>
                </div>
            <img className='hero-img' src={require('../Assets/img/imagehead.PNG')}/>
        </div>
        <div className='highlight-section'>
        <div className='head'>
            <h3>Specials</h3>
            <div className='grid-btn'>
            <button className='online-menu-btn'>Online Menu</button></div>
            </div>
<div className='cards'>
<div className="container">
  <img src="https://firebasestorage.googleapis.com/v0/b/cajaregistradora-776cc.appspot.com/o/pngwing.com(2).png?alt=media&token=bde13cf8-4b17-4da9-90cf-c16db83b2e1f" />
  <div className="content-box">
    <h4 className="name">Veggie Burguer</h4>
    <p>A burguer typically considered a sandwich, consisting of one or more cooked patties-usually placed inside a sliced bread roll or bun</p>
    <p>Onion, Lettuce, Tomatoe, Patty, Cheese</p>
    <div className="btn">
      <h2 className="price">$ 5</h2>
      <a href="#">Order Now</a>
    </div>
  </div>
</div>


<div className="container">
  <img src="https://firebasestorage.googleapis.com/v0/b/cajaregistradora-776cc.appspot.com/o/pngwing.com(2).png?alt=media&token=bde13cf8-4b17-4da9-90cf-c16db83b2e1f" />
  <div className="content-box">
    <h4 className="name">Veggie Burguer</h4>
    <p>A burguer typically considered a sandwich, consisting of one or more cooked patties-usually placed inside a sliced bread roll or bun</p>
    <p>Onion, Lettuce, Tomatoe, Patty, Cheese</p>
    <div className="btn">
      <h2 className="price">$ 5</h2>
      <a href="#">Order Now</a>
    </div>
  </div>
</div>
<div className="container">
  <img src="https://firebasestorage.googleapis.com/v0/b/cajaregistradora-776cc.appspot.com/o/pngwing.com(2).png?alt=media&token=bde13cf8-4b17-4da9-90cf-c16db83b2e1f" />
  <div className="content-box">
    <h4 className="name">Veggie Burguer</h4>
    <p>A burguer typically considered a sandwich, consisting of one or more cooked patties-usually placed inside a sliced bread roll or bun</p>
    <p>Onion, Lettuce, Tomatoe, Patty, Cheese</p>
    <div className="btn">
      <h2 className="price">$ 5</h2>
      <a href="#">Order Now</a>
    </div>
  </div>
</div>
</div>


        </div>
        <div className='testimonials-section'>
        <h4>Testimonials</h4>
        <div className='cards'>test4</div>
        </div>
        <div className='about-section'>
        <div className='content'>test</div>
            <div className='img'>test2</div>
        </div>
        </main>
  )
}
