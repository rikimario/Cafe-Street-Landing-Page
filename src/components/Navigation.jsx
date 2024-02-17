import TopCart from "../assets/imgs/top-cart-nav.png";
import CartWheels from "../assets/imgs/shoping-cart-wheels.png";
import CartCircle from "../assets/imgs/Ellipse 4.png";
import Search from "../assets/imgs/search.png";
import LogoNav from "../assets/imgs/logo_coffe.svg";

export default function Nav() {
  return (
    <header className="">
      <nav className="absolute top-0 left-16 w-full pr-[11.44rem] flex justify-around items-center z-50">
        <a className="relative" href="/">
          <div className="pt-[2.2rem]">
            <img src={LogoNav} alt="" />
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

        <div className="relative flex item-center gap-14 mt-7">
          <span className="absolute right-60 top-3 flex items-center">
            <img src={Search} alt="search icon" />
          </span>
          <input
            className="w-[13.9rem] h-10 rounded-[2.2rem] placeholder:text-[#929292] pl-11"
            type="text"
            placeholder="Cappuccino"
          />
          <div>
            <span className="absolute top-2 right-[0.10rem] z-10">
              <img src={CartCircle} alt="cart orange circle" />
            </span>
            <span className="absolute top-[0.30rem] right-2">
              <img src={CartWheels} alt="shopping cart wheels" />
            </span>
            <span className="absolute top-3 right-1">
              <img src={TopCart} alt="top cart" />
            </span>
          </div>
        </div>
      </nav>
    </header>
  );
}
