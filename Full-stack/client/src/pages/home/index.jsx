import React, { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import "./index.scss";
import { Button } from "antd";
import axios from "axios";
import {Helmet} from "react-helmet";

const Home = () => {
  const [toggle, setToggle] = useState(true);
  const [foods, setFoods] = useState([]);
  const [emblaRef] = useEmblaCarousel({ loop: false }, [Autoplay()]);
  useEffect(() => {
    getData();
  }, []);
  const getData = () => {
    axios.get("http://localhost:8000/foods").then((res) => {
      setFoods(res.data);
    });
  };
  const handleDelete = (e) => {
    axios.delete(`http://localhost:8000/foods/${e._id}`);
    setFoods([...foods.filter((el) => el._id !== e._id)]);
  };
  const handleSearch = (e) => {
    axios.get("http://localhost:8000/foods").then((res) => {
      let searchedFoods = res.data.filter((element) =>element.name.toLocaleLowerCase().includes( e.target.value.toLocaleLowerCase()));
      setFoods(searchedFoods);
    });
  };
  const handleSortByPrice = () => {
    toggle ? setFoods([...foods.sort((a, b) => a.price - b.price)]) : getData();
    setToggle(!toggle);
  };
  const handleAddToFavorites=()=>{
    favorites
  }
  return (
    <div id="home">
           <Helmet>
                <meta charSet="utf-8" />
                <title>Home</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
      <section id="first">
        <div className="embla" ref={emblaRef}>
          <div className="embla__container">
            <div className="embla__slide">
              <div className="image1">
                <div>
                  <p>Welcome to</p>
                  <h1>Pato place</h1>
                  <Button danger>Look Menu</Button>
                </div>
              </div>
            </div>
            <div className="embla__slide">
              <div className="image2">
                <div>
                  <p>Welcome to</p>
                  <h1>Pato place</h1>
                  <Button danger>Look Menu</Button>
                </div>
              </div>
            </div>
            <div className="embla__slide">
              <div className="image3">
                <div>
                  <p>Welcome to</p>
                  <h1>Pato place</h1>
                  <Button danger>Look Menu</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="second-section">
        <div className="container">
          <div>
            <div className="left">
              <p className="italic">Italian Restaurant</p>
              <h1>
                <strong>WELCOME</strong>
              </h1>
              <p>
                Donec quis lorem nulla. Nunc eu odio mi. Morbi nec lobortis est.
                Sed fringilla, nunc sed imperdiet lacinia, nisl ante egestas mi,
                ac facilisis ligula sem id neque.
              </p>
            </div>
            <div className="right">
              <img
                src="https://preview.colorlib.com/theme/pato/images/our-story-01.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
      <section id="third-section">
        <div>
          <p className="italic">Discover</p>
          <h1>PATO PLACE</h1>
        </div>
      </section>
      <section id="cards-section">
        <input
          type="text"
          placeholder="searching"
          onChange={(e) => {
            handleSearch(e);
          }}
        />
        <Button type="primary" onClick={handleSortByPrice}>
          SortByPrice
        </Button>
        <div className="cards">
          {foods.map((e) => {
            return (
              <div className="card">
                <div>
                  <img src={e.imgUrl} alt="" />
                </div>
                <div>
                  <h1>{e.name}</h1>
                  <p>{e.description}</p>
                  <p className="price">${e.price}</p>
                  <p>
                    <i className={e.icon} onClick={()=>{handleAddToFavorites(e._id)}}></i>
                  </p>
                  <Button
                    onClick={() => {
                      handleDelete(e);
                    }}
                    type="primary"
                    danger
                  >
                    Delete
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Home;
