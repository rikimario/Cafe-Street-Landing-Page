import Ellipse from "../assets/imgs/Ellipse 6.png";
import OrderNowCart from "../assets/imgs/order now cart.png";
import CoffeeBeans from "../assets/imgs/bg_img_hero.png";
import ImgHero from "../assets/imgs/img-hero.svg";

export default function Hero() {
  return (
    <section className="max-w-fit grid grid-cols-2 items-center text-left bg-[#f6ebda] px-[11.44rem] pb-[33rem]">
      <div className="pt-[13.5rem]">
        <h1 className="text-[#2F2105] text-5xl font-bold leading-[1.3] pr-[12rem]">
          Enjoy your <span className="text-[#FF902B]">coffee</span> before your
          activity
        </h1>
        <p className="text-lg mt-12 text-[#7E7D7A] pr-[19rem] tracking-[0.030]">
          Boost your productivity and build your mood with a glass of coffee in
          the morning
        </p>
        <div className="flex gap-11 pt-10">
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
            className="absolute top-[40rem] right-[67rem]"
            src={CoffeeBeans}
            alt="coffee beans"
          />
        </div>
      </div>

      <div className="relative flex justify-center pt-48">
        <div className="absolute top-0 left-44">
          <img src={CoffeeBeans} alt="coffee beans" />
        </div>

        <div className="pr-16 z-50">
          <img className="flex items-start" src={ImgHero} alt="" />
        </div>
      </div>
    </section>
  );
}
