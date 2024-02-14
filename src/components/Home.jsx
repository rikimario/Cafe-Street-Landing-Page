import CoffeeImage from "../assets/imgs/unsplash_PKXAiiy1O4U.png";
import Ellipse from "../assets/imgs/Ellipse 6.png";
import OrderNowCart from "../assets/imgs/order now cart.png";
import Exclude from "../assets/imgs/Exclude.png";
import IconStar from "../assets/imgs/akar-icons_star.png";

export default function Hero() {
  return (
    <>
      <div className="max-w-fit grid grid-cols-2 items-center text-left bg-[#f6ebda] pl-[15.44rem] pb-96">
        <div className="pt-[13.5rem]">
          <h1 className="text-[#2F2105] text-5xl font-bold leading-[1.3] pr-[15rem]">
            Enjoy your <span className="text-[#FF902B]">coffee</span> before
            your activity
          </h1>
          <p className="text-lg mt-12 text-[#7E7D7A] pr-[22rem] tracking-[0.030]">
            Boost your productivity and build your mood with a glass of coffee
            in the morning
          </p>
          <div className="flex gap-12 pt-10">
            <button className="flex gap-2 justify-around bg-[#2F2105] text-[#FFF] text-sm py-3 px-5 font-s w-[9rem] rounded-[2.0625rem] relative overflow-hidden hover:bg-[#3f3219]">
              Order now
              <img src={Ellipse} alt="orange circle" />
              <img
                className="absolute top-1/2 left-[6.9rem] transform -translate-x-1/2 -translate-y-1/2"
                src={OrderNowCart}
                alt="shopping cart"
              />
            </button>
            <button className="text-[#F4AE26] text-sm p-3 border-2 rounded-[2.0625rem] border-transparent hover:border-solid hover:border-[#F4AE26]">
              More menu
            </button>
          </div>
        </div>
        <div className="flex justify-center pt-48 relative z-20">
          <img
            className="flex relative z-10"
            src={CoffeeImage}
            alt="Image of a cup of coffee"
          />
          <img
            className="absolute -inset-1 top-[16.5rem] left-[9.1rem] z-10"
            src={Exclude}
            alt="shape of a cup"
          />

          <span className="absolute -inset-1 top-52 left-[3.5rem] flex items-center justify-center text-[#2F2105] text-center text-2xl font-bold tracking-wide bg-white border-solid border-8 border-gray-300 border-opacity-20 w-[16.95rem] h-[4rem] rounded-[3.565rem] z-10">
            Cappuccino
          </span>

          <span className="absolute -inset-1 top-[31rem] left-[10rem] flex items-center justify-center text-[#2F2105] text-center text-2xl font-bold tracking-wide bg-white border-solid border-8 border-gray-300 border-opacity-20 w-[8.812rem] h-[4rem] rounded-[42px] z-10">
            18K
          </span>

          <span className="absolute -inset-1 top-[17rem] left-[27.9rem] flex items-center justify-center text-[#2F2105] text-center text-2xl font-bold tracking-wide bg-white border-solid border-8 border-gray-300 border-opacity-20 w-[8.812rem] h-[4rem] rounded-[42px] z-10 gap-3">
            4.8
            <img src={IconStar} alt="icon star" />
          </span>

          <span className="absolute -inset-1 top-44 left-[8.8rem] rounded-full bg-[#2F2105] w-[26rem] h-[26rem] z-0"></span>
        </div>
      </div>
    </>
  );
}
