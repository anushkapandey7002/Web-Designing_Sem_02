import { useState } from "react";
import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [cart, setCart] = useState(0);
  return (
    <div className={darkMode ? "dark" : ""}>
    <header>
      <div className="nav-container">
        <button
  onClick={() => setDarkMode(!darkMode)}
  style={{ marginLeft: "10px", padding: "8px" }}
>
  {darkMode ? " Light Mode" : " Dark Mode"}
</button>
        <img src="https://tse2.mm.bing.net/th/id/OIP.SwPo2q6RRC1jETuVyd2FJQHaCs?pid=Api&P=0&h=180"id="logo"alt="Amazon Logo"/>

          <div className="search-box">
            <input type="text" placeholder="Search Amazon" />
            <button>🔍</button>
          </div>

          <div style={{ color: "white", marginLeft: "20px" }}> 🛒 Cart: {cart}</div>
      </div>

    <br />

      <div>
          <nav className="nav-bar">
            <ul>
              <li><a href="#">BestSellers</a></li>
              <li><a href="#">Mobiles</a></li>
              <li><a href="#">Today's Deal</a></li>
              <li><a href="#">New Releases</a></li>
              <li><a href="#">Fashion</a></li>
              <li><a href="#">Electronics</a></li>
              <li><a href="#">Home & Kitchen</a></li>
              <li><a href="#">Books</a></li>
              <li><a href="#">Toys & Games</a></li>
              <li><a href="#">Computers</a></li>
              <li><a href="#">Amazon Pay</a></li>
              <li><a href="#">Prime</a></li>
              <li><a href="#">Customer Service</a></li>
            </ul>
          </nav>
      </div>
    </header>

      <h1>Up to 40% Off | Deals on trendy furniture</h1>

      <div className="container">
        <div className="box">
          <img className="AImage"src="https://m.media-amazon.com/images/I/617UyLjOhQL._AC_SY200_.jpg"alt=""/>
          <button onClick={() => setCart(cart + 1)}> Add to Cart  </button>
        </div>

        <div className="box">
          <img className="AImage" src="https://m.media-amazon.com/images/I/71s1v3rI5OL._AC_SY200_.jpg" alt=""/>
          <button onClick={() => setCart(cart + 1)}> Add to Cart  </button>
        </div>

        <div className="box">
          <img className="AImage"src="https://m.media-amazon.com/images/I/71D6tAH3ztL._AC_SY200_.jpg"alt=""/>
          <button onClick={() => setCart(cart + 1)}> Add to Cart  </button>
        </div>

        <div className="box">
          <img className="AImage"src="https://m.media-amazon.com/images/I/61XW0sVeqgL._AC_SY200_.jpg" alt=""/>
          <button onClick={() => setCart(cart + 1)}> Add to Cart  </button>
        </div>

        <div className="box">
          <img className="AImage"src="https://m.media-amazon.com/images/I/51v2VR1e+eL._AC_SY200_.jpg" alt=""/>
          <button onClick={() => setCart(cart + 1)}> Add to Cart  </button>
        </div>

        <div className="box">
          <img className="AImage"src="https://m.media-amazon.com/images/I/71Pig4c37IL._AC_SY200_.jpg"alt=""  />
          <button onClick={() => setCart(cart + 1)}> Add to Cart  </button>
        </div>
      </div>

      <br></br>
      <br></br>

      <h1>Up to 60% off | Cookware, kitchen tool & more | Amazon Launchpad</h1>

      <div className="container">
        <div className="box">
          <img className="Image"src="https://m.media-amazon.com/images/I/619sSmzbUjL._AC_SY200_.jpg"alt=""/>
          <button onClick={() => setCart(cart + 1)}> Add to Cart  </button>
        </div>

        <div className="box">
          <img className="Image"src="https://m.media-amazon.com/images/I/71wGvVv88uL._AC_SY200_.jpg"alt=""/>
          <button onClick={() => setCart(cart + 1)}> Add to Cart  </button>
        </div>

        <div className="box">
          <img className="Image"src="https://m.media-amazon.com/images/I/61-l-DKrlsL._AC_SY200_.jpg"alt=""/>
          <button onClick={() => setCart(cart + 1)}> Add to Cart  </button>
        </div>

        <div className="box">
          <img className="Image"src="https://m.media-amazon.com/images/I/71aHbP5M2HL._AC_SY200_.jpg"alt=""/>
          <button onClick={() => setCart(cart + 1)}> Add to Cart  </button>
        </div>

        <div className="box">
          <img className="Image" src="https://m.media-amazon.com/images/I/51WmCssta3L._AC_SY200_.jpg"alt=""/>
          <button onClick={() => setCart(cart + 1)}> Add to Cart  </button>
        </div>

        <div className="box">
          <img className="Image"src="https://m.media-amazon.com/images/I/41ggFXk-slL._AC_SY200_.jpg"alt="" />
          <button onClick={() => setCart(cart + 1)}> Add to Cart  </button>
        </div>

      </div>

      <div className="product-row">
        <div>
          <h2>Best Sellers in Beauty</h2>
          <img className="product-img1 "src="https://www.byrdie.com/thmb/y3P9gLajbta9v-_rJTJUyXlLFxc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/elf_recirc-01a7a331cf7f4f49b627e4940054cc4b.jpg"alt=""/>
        </div>

        <div>
          <h2>Best Sellers in Home & Kitchen</h2>
          <img className="product-img2 "src="https://tse1.mm.bing.net/th/id/OIP.i8PBb19FI0UnBts5JwLEogHaFj?pid=Api&P=0&h=180"alt=""/>
        </div>

        <div>
          <h2>Best Sellers in Computers & Accessories</h2>
          <img className="product-img3 "src="https://img.freepik.com/premium-photo/futuristic-gadgets-showcase-lineup-sleek-modern-technological-devices_977107-682.jpg"alt=""/>
        </div>

        <div>
          <h2>Best Sellers in Kids Wear</h2>
          <img className="product-img4" src="https://m.media-amazon.com/images/I/61habLYDn2L._AC_UL480_FMwebp_QL65_.jpg" alt="" />
        </div>

      </div>

      <div>
        <img className="sale-img" src="https://imgeng.jagran.com/images/2023/jul/Amazon%20Prime%20Day%20Sale%2020231688734756797.jpeg" alt="" />
      </div>

      <br></br>

      <footer>
        <div className="footer-container">
          <div className="footer-section">
            <h3>Get to Know Us</h3>

            <ul>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Press Releases</a></li>
              <li><a href="#">Amazon Cares</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Connect with Us</h3>

            <ul>
              <li><a href="#">Facebook</a></li>
              <li><a href="#">Twitter</a></li>
              <li><a href="#">Instagram</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Make Money with Us</h3>

            <ul>
              <li><a href="#">Sell on Amazon</a></li>
              <li><a href="#">Affiliate Program</a></li>
              <li><a href="#">Advertise Your Products</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Let Us Help You</h3>

            <ul>
              <li><a href="#">Your Account</a></li>
              <li><a href="#">Returns Centre</a></li>
              <li><a href="#">Help</a></li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;