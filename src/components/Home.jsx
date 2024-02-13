import CoffeeImage from "../assets/imgs/unsplash_PKXAiiy1O4U.png";
import Ellipse from "../assets/imgs/Ellipse 6.png";
import OrderNowCart from "../assets/imgs/order now cart.png";

export default function Hero() {
  return (
    <>
      <div className="max-w-fit grid grid-cols-2 items-center text-left bg-[#f6ebda] pl-[15.44rem]">
        <div className="pt-[13.5rem]">
          <h1 className="text-[#2F2105] text-5xl font-bold leading-[1.3] pr-[15rem]">
            Enjoy your <span className="text-[#FF902B]">coffee</span> before
            your activity
          </h1>
          <p className="text-lg mt-12 text-[#7E7D7A] pr-[23rem] tracking-[0.030]">
            Boost your productivity and build your mood with a glass of coffee
            in the morning
          </p>
          <div className="flex gap-12 pt-10">
            <button className="flex gap-2 justify-around bg-[#2F2105] text-[#FFF] text-sm py-3 px-5 font-s w-[9rem] rounded-[2.0625rem] relative overflow-hidden">
              Order now
              <img src={Ellipse} alt="orange circle" />
              <img
                className="absolute top-1/2 left-[6.9rem] transform -translate-x-1/2 -translate-y-1/2"
                src={OrderNowCart}
                alt="shopping cart"
              />
            </button>
            <button className="text-[#F4AE26] text-xs">More menu</button>
          </div>
        </div>
        <div className="flex justify-center pt-48">
          <img
            className="flex "
            src={CoffeeImage}
            alt="Image of a cup of coffee"
          />
        </div>
      </div>
    </>
  );
}
