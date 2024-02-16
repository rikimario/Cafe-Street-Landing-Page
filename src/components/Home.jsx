import CoffeeImage from "../assets/imgs/unsplash_PKXAiiy1O4U.png";
import Ellipse from "../assets/imgs/Ellipse 6.png";
import OrderNowCart from "../assets/imgs/order now cart.png";
import Exclude from "../assets/imgs/Exclude.png";
import CoffeeBeans from "../assets/imgs/bg_img_hero.png";
import RatingRec from "../assets/imgs/rating-hero-rec.svg";
import RatingFrame from "../assets/imgs/rating-white-frame.svg";
import CappuccinoHero from "../assets/imgs/cappuccino-white-space.svg";
import CappuccinoHeroBlur from "../assets/imgs/cappuccino-blur.svg";
import EighteenWhiteSpace from "../assets/imgs/18k-white-space.svg";
import EighteenBlur from "../assets/imgs/18k-blur.svg";

export default function Hero() {
  return (
    <section className="max-w-fit grid grid-cols-2 items-center text-left bg-[#f6ebda] pl-[11.44rem] pb-96">
      <div className="pt-[13.5rem]">
        <h1 className="text-[#2F2105] text-5xl font-bold leading-[1.3] pr-[15rem]">
          Enjoy your <span className="text-[#FF902B]">coffee</span> before your
          activity
        </h1>
        <p className="text-lg mt-12 text-[#7E7D7A] pr-[22rem] tracking-[0.030]">
          Boost your productivity and build your mood with a glass of coffee in
          the morning
        </p>
        <div className="flex gap-12 pt-10">
          <button className="flex justify-around items-center bg-[#2F2105] text-[#FFF] text-base py-3 px-5 w-[11rem] rounded-[2.0625rem] relative overflow-hidden hover:bg-[#362c18] transition-colors duration-200">
            Order now
            <img src={Ellipse} alt="orange circle" />
            <img
              className="absolute top-1/2 left-[8.41rem] transform -translate-x-1/2 -translate-y-1/2"
              src={OrderNowCart}
              alt="shopping cart"
            />
          </button>
          <button className="text-[#F4AE26] text-sm p-3 border-2 rounded-[2.0625rem] border-transparent hover:border-solid hover:border-[#F4AE26]">
            More menu
          </button>
        </div>

        <div>
          <img
            className="absolute top-[40rem] right-[66rem]"
            src={CoffeeBeans}
            alt="coffee beans"
          />
        </div>
      </div>

      <div className="relative flex justify-center pt-48">
        <div className="absolute bottom-11 left-[15rem]">
          <img src={CoffeeBeans} alt="coffee beans" />
        </div>

        <div className="relative">
          <span className="absolute right-[-12.1rem] top-[-12rem] rounded-full bg-[#2F2105] w-[26rem] h-[26rem]"></span>
        </div>

        <img
          className="absolute top-20 left-44 max-w-full h-auto"
          src={Exclude}
          alt="shape of a cup"
        />

        <img
          className="absolute z-10 top-1 flex"
          src={CoffeeImage}
          alt="Image of a cup of coffee"
        />

        <div>
          <img
            className="absolute top-[1rem] right-[24.8rem] z-50"
            src={CappuccinoHero}
            alt=""
          />
          <img
            className="absolute top-[0.6rem] right-[24.5rem] z-50"
            src={CappuccinoHeroBlur}
            alt=""
          />
          <span className="absolute top-6 right-[28.8rem] text-[#2F2105] text-2xl font-bold tracking-wide z-50">
            Cappuccino
          </span>
        </div>

        <div>
          <img
            className="absolute top-[19.9rem] left-[10rem] z-50"
            src={EighteenWhiteSpace}
            alt=""
          />
          <img
            className="absolute top-[19.5rem] left-[9.5rem] z-50"
            src={EighteenBlur}
            alt=""
          />
          <span className="absolute top-[20.5rem] left-[13rem] text-[#2F2105] text-2xl font-bold tracking-wide z-50">
            18K
          </span>
        </div>

        <div>
          <img
            className="absolute top-20 right-36 z-50"
            src={RatingFrame}
            alt=""
          />
          <img
            className="absolute top-[4.4rem] right-[8.6rem] z-40"
            src={RatingRec}
            alt=""
          />
        </div>
      </div>
    </section>
  );
}
