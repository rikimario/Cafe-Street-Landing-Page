import PopularRec from "../assets/imgs/popular-rec.svg";
import VanillaLatte from "../assets/imgs/vanilla-latte-popular.svg";
import Espresso from "../assets/imgs/espresso-popular.svg";
import HazelnutLatte from "../assets/imgs/hazelnut-latte-popular.svg";
import ShoppingCartPop from "../assets/imgs/popular-shopping-cart.svg";
import PopularBlur from "../assets/imgs/popular-blur.svg";

export default function Popular() {
  return (
    <section className="relative px-32 bottom-96">
      <h2 className="text-4xl font-bold h-6 pl-28">
        Popular{" "}
        <span className="underline underline-offset-8 decoration-4 decoration-[#FF902B]">
          Now
        </span>
      </h2>
      <div className="relative flex items-end h-[35rem]">
        <img className="absolute pl-12" src={PopularRec} alt="shape" />

        <div className="absolute inset-0 flex items-center justify-center gap-11">
          <img className="absolute" src={PopularBlur} alt="" />
          <img className="absolute left-[8.7rem]" src={PopularBlur} alt="" />
          <img className="absolute right-[8.7rem]" src={PopularBlur} alt="" />
          <div className="relative w-[21.45rem] h-[23.313rem] bg-[#fff] p-4 rounded-xl">
            <img className="w-full" src={VanillaLatte} alt="vanilla latte" />
            <div className="flex justify-between items-center text-2xl font-semibold text-[#2F2105]">
              <h2 className="pl-4 py-4">Vanilla Latte</h2>
              <p className="font-bold pr-6">21 K</p>
            </div>
            <div className="flex justify-left items-center pt-2">
              <div className="flex pl-5 gap-4 font-medium">
                <button className="px-3 py-1 border-2 border-solid border-[#FF902B] rounded-lg text-[#FF902B]">
                  Hot
                </button>
                <button className="px-3 py-1 border-2 border-solid border-[#FFD28F] rounded-lg text-[#FFD28F]">
                  Cold
                </button>
              </div>
              <button className="pl-20">
                <a href="#">
                  <img src={ShoppingCartPop} alt="" />
                </a>
              </button>
            </div>
          </div>

          <div className="w-[21.45rem] h-[23.313rem] bg-[#fff] p-4 rounded-xl z-50">
            <img className="w-full" src={Espresso} alt="vanilla latte" />
            <div className="flex justify-between items-center text-2xl font-semibold text-[#2F2105]">
              <h2 className="pl-4 py-4">Espresso</h2>
              <p className="font-bold pr-6">12 K</p>
            </div>
            <div className="flex justify-left items-center pt-2">
              <div className="flex pl-5 gap-4 font-medium">
                <button className="px-3 py-1 border-2 border-solid border-[#FFD28F] rounded-lg text-[#FFD28F]">
                  Hot
                </button>
                <button className="px-3 py-1 border-2 border-solid border-[#FFD28F] rounded-lg text-[#FFD28F]">
                  Cold
                </button>
              </div>
              <button className="pl-20">
                <a href="#">
                  <img src={ShoppingCartPop} alt="" />
                </a>
              </button>
            </div>
          </div>

          <div className="w-[21.45rem] h-[23.313rem] bg-[#fff] p-4 rounded-xl z-50">
            <img
              className="w-full rounded-xl"
              src={HazelnutLatte}
              alt="vanilla latte"
            />
            <div className="flex justify-between items-center text-2xl font-semibold text-[#2F2105]">
              <h2 className="pl-4 py-4">Hazelnut Latte</h2>
              <p className="font-bold pr-6">23 K</p>
            </div>
            <div className="flex justify-left items-center pt-2">
              <div className="flex pl-5 gap-4 font-medium">
                <button className="px-3 py-1 border-2 border-solid border-[#FFD28F] rounded-lg text-[#FFD28F]">
                  Hot
                </button>
                <button className="px-3 py-1 border-2 border-solid border-[#FFD28F] rounded-lg text-[#FFD28F]">
                  Cold
                </button>
              </div>
              <button className="pl-20">
                <a href="#">
                  <img src={ShoppingCartPop} alt="" />
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
