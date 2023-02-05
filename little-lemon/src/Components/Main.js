import React from "react";
import { useNavigate } from "react-router";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";
export default function Main() {
  const navigate = useNavigate();


  const reserveTable= ()=>{
    navigate("/booking")
  }
  return (
    <main>
      <div className="hero-section">
        <div className="content">
          <h2>Little Lemon</h2>
          <h3>Chicago</h3>
          <p>
            We are a family owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist.
          </p>
          <button className="reserve-table-btn" onClick={reserveTable}>Reserve a table</button>
        </div>
        <img
          className="hero-img"
          src={require("../Assets/img/imageheader.png")}
        />
      </div>
      <div className="highlight-section">
        <div className="head">
          <h3>Special Menu</h3>
          <div className="grid-btn" style={{height : 'max-content'}}>
            <button className="online-menu-btn">Online Menu</button>
          </div>
        </div>
        <div className="cards">
          <div className="container">
            <img src="https://firebasestorage.googleapis.com/v0/b/cajaregistradora-776cc.appspot.com/o/pngwing.com(2).png?alt=media&token=bde13cf8-4b17-4da9-90cf-c16db83b2e1f" />
            <div className="content-box">
              <h4 className="name">Veggie Burguer</h4>
              <p>
                A burguer typically considered a sandwich, consisting of one or
                more cooked patties-usually placed inside a sliced bread roll or
                bun
              </p>
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
              <p>
                A burguer typically considered a sandwich, consisting of one or
                more cooked patties-usually placed inside a sliced bread roll or
                bun
              </p>
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
              <p>
                A burguer typically considered a sandwich, consisting of one or
                more cooked patties-usually placed inside a sliced bread roll or
                bun
              </p>
              <p>Onion, Lettuce, Tomatoe, Patty, Cheese</p>
              <div className="btn">
                <h2 className="price">$ 5</h2>
                <a href="#">Order Now</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="about-section">
      <div className="content">
          <h2 style={{fontSize : '30px'}}>About us</h2>
          <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took
          a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but
          also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software 
          like Aldus PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
        <img
          className="hero-img"
          src={require("../Assets/img/imagehead.PNG")}
        />
      </div>
      <div className="testimonials-section">
        <h2 >
          Testimonials
        </h2>
        <h3 >
          See Our Clients Feedback
        </h3>
<div className="cards">
        <div className="row">
          <h2>Nicole Pearson</h2>

          <div className="photo">
            <img
              src="https://content-static.upwork.com/uploads/2014/10/01073427/profilephoto1.jpg"
              className="image--cover"
            />
          </div>
          <div>
            <p>
              {" "}
              <a href="#">
                {" "}
                <AiFillStar />
              </a>
              <a href="#">
                <AiFillStar />{" "}
              </a>
              <a href="#">
                <AiFillStar />{" "}
              </a>
              <a href="#">
                <AiFillStar />
              </a>
              <a href="#">
                <AiOutlineStar />
              </a>
            </p>
            <p>
              <strong>Review: </strong> Read, out with friends, listen to music,
              draw and learn new things.{" "}
            </p>
          </div>
        </div>
        <div className="row">
          <h2>Nicole Pearson</h2>

          <div className="photo">
            <img
              src="https://content-static.upwork.com/uploads/2014/10/01073427/profilephoto1.jpg"
              className="image--cover"
            />
          </div>
          <div>
            <p>
              {" "}
              <a href="#">
                {" "}
                <AiFillStar />
              </a>
              <a href="#">
                <AiFillStar />{" "}
              </a>
              <a href="#">
                <AiFillStar />{" "}
              </a>
              <a href="#">
                <AiFillStar />
              </a>
              <a href="#">
                <AiOutlineStar />
              </a>
            </p>
            <p>
              <strong>Review: </strong> Read, out with friends, listen to music,
              draw and learn new things.{" "}
            </p>
          </div>
        </div>
        </div>
      </div>

    </main>
  );
}
