import TopCart from "../assets/imgs/top-cart-nav.png";
import CartWheels from "../assets/imgs/shoping-cart-wheels.png";
import CartCircle from "../assets/imgs/Ellipse 4.png";
import Cafe from "../assets/imgs/cafe.png";
import Street from "../assets/imgs/street.png";
import Cup from "../assets/imgs/logo-cup.png";
import Handle from "../assets/imgs/logo-handle.png";
import Liquid from "../assets/imgs/logo-liquid.png";
import Underline from "../assets/imgs/logo-underline.png";
import Search from "../assets/imgs/search.png";

export default function Nav() {
  return (
    <header className="">
      <nav className="absolute top-0 left-0 w-full pl-7 flex justify-around items-center z-50">
        <a href="#">
          <div className="absolute top-[2.3rem] left-[11.711rem]">
            <img src={Liquid} alt="logo liquid" />
          </div>
          <div className="flex mt-9">
            <div className="flex flex-col gap-[0.15rem]">
              <img src={Cup} alt="logo cup" />
              <img src={Underline} alt="logo underline" />
            </div>

            <img className="w-3 h-3" src={Handle} alt="logo handle" />

            <div className="flex gap-1 pl-1">
              <img className="h-6" src={Street} alt="cafe logo" />
              <img className="h-4" src={Cafe} alt="street logo" />
            </div>
          </div>
        </a>
        <ul className="flex text-lg font-bold text-[#000] items-center mt-7 gap-8">
          <a href="#">
            <li className="text-[#FF902B]">About us</li>
          </a>
          <a href="#">
            <li>Our Product</li>
          </a>
          <a href="#">
            <li>Delivery</li>
          </a>
        </ul>

        <div className="flex item-center gap-9 mt-7">
          <span className="absolute inset-y-0 right-[24rem] top-8 flex items-center">
            <img src={Search} alt="search icon" />
          </span>
          <input
            className="w-[13.9rem] h-10 rounded-[2.2rem] placeholder:text-[#929292] pl-11"
            type="text"
            placeholder="Cappuccino"
          />
          <div>
            <span className="absolute top-9 right-[9.7rem] z-10">
              <img src={CartCircle} alt="cart orange circle" />
            </span>
            <span className="absolute top-[2.15rem] right-[10.2rem]">
              <img src={CartWheels} alt="shoping cart wheels" />
            </span>
            <span className="absolute top-10 right-40">
              <img src={TopCart} alt="top cart" />
            </span>
          </div>
        </div>
      </nav>
    </header>
  );
}
