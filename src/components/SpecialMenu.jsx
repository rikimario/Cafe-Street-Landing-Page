import ShoppingCartPop from "../assets/imgs/popular-shopping-cart.svg";
import Sandwich from "../assets/imgs/sandwitch.svg";
import HotMilk from "../assets/imgs/hot-milk.svg";
import CoffeeIceCream from "../assets/imgs/coffee-ice-creem.svg";
import Cappuccino from "../assets/imgs/cappucino.svg";
import Mochaccino from "../assets/imgs/moccachino.svg";
import WaffleIceCream from "../assets/imgs/waffle-ice-creem.svg";

export default function SpecialMenu() {
  return (
    <>
      <h2 className="text-3xl font-bold pl-52 pt-12 tracking-wide">
        Special Menu{" "}
        <span className="underline underline-offset-8 decoration-4 decoration-[#FF902B]">
          for you
        </span>
      </h2>
      <section className="pt-8 px-32 grid grid-cols-3">
        <div className="grid justify-center items-center pb-24">
          <div className="relative w-[21.45rem] h-[23.313rem] bg-[#fff] p-4 rounded-xl shadow-md">
            <img
              className="w-full rounded-lg overflow-hidden"
              src={Sandwich}
              alt="sandwich"
            />
            <div className="flex justify-between items-center text-[#2F2105]">
              <div className="pl-2 pr-6 py-4">
                <h2 className="text-2xl font-semibold">Sandwich</h2>
                <p className="text-[#7E7D7A] text-sm pt-2">
                  Bread with meat and vegetables
                </p>
              </div>
              <div className="justify-left items-center">
                <p className="font-bold text-2xl py-4">12 K</p>
                <button className="">
                  <a href="#">
                    <img src={ShoppingCartPop} alt="" />
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="grid justify-center items-center pb-24">
          <div className="relative w-[21.45rem] h-[23.313rem] bg-[#fff] p-4 rounded-xl shadow-md">
            <img
              className="w-full rounded-lg overflow-hidden"
              src={HotMilk}
              alt="vanilla latte"
            />
            <div className="flex justify-between items-center text-[#2F2105]">
              <div className="pl-2 pr-6 py-4">
                <h2 className="text-2xl font-semibold">Hot Milk</h2>
                <p className="text-[#7E7D7A] text-sm pt-2">
                  Hot milk with less sugar
                </p>
              </div>
              <div className="justify-left items-center">
                <p className="font-bold text-2xl py-4">12 K</p>
                <button className="">
                  <a href="#">
                    <img src={ShoppingCartPop} alt="" />
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="grid justify-center items-center pb-24">
          <div className="relative w-[21.45rem] h-[23.313rem] bg-[#fff] p-4 rounded-xl shadow-md">
            <img
              className="w-full rounded-lg overflow-hidden"
              src={CoffeeIceCream}
              alt="vanilla latte"
            />
            <div className="flex justify-between items-center text-[#2F2105]">
              <div className="pl-2 pr-6 py-4">
                <h2 className="text-2xl font-semibold">Coffee Ice Cream</h2>
                <p className="text-[#7E7D7A] text-sm pt-2">
                  Coffee with ice cream vanilla
                </p>
              </div>
              <div className="justify-left items-center">
                <p className="font-bold text-2xl py-4">12 K</p>
                <button className="">
                  <a href="#">
                    <img src={ShoppingCartPop} alt="" />
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="grid justify-center items-center pb-24">
          <div className="relative w-[21.45rem] h-[23.313rem] bg-[#fff] p-4 rounded-xl shadow-md">
            <img
              className="w-full rounded-lg overflow-hidden"
              src={Cappuccino}
              alt="vanilla latte"
            />
            <div className="flex justify-between items-center text-[#2F2105]">
              <div className="pl-2 pr-6 py-4">
                <h2 className="text-2xl font-semibold">Cappuccino</h2>
                <p className="text-[#7E7D7A] text-sm pt-2">Hot cappuccino</p>
              </div>
              <div className="justify-left items-center">
                <p className="font-bold text-2xl py-4">12 K</p>
                <button className="">
                  <a href="#">
                    <img src={ShoppingCartPop} alt="" />
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="grid justify-center items-center pb-24">
          <div className="relative w-[21.45rem] h-[23.313rem] bg-[#fff] p-4 rounded-xl shadow-md">
            <img
              className="w-full rounded-lg overflow-hidden"
              src={Mochaccino}
              alt="vanilla latte"
            />
            <div className="flex justify-between items-center text-[#2F2105]">
              <div className="pl-2 pr-6 py-4">
                <h2 className="text-2xl font-semibold">Mochaccino</h2>
                <p className="text-[#7E7D7A] text-sm pt-2">Hot mochaccino</p>
              </div>
              <div className="justify-left items-center">
                <p className="font-bold text-2xl py-4">12 K</p>
                <button className="">
                  <a href="#">
                    <img src={ShoppingCartPop} alt="" />
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="grid justify-center items-center pb-24">
          <div className="relative w-[21.45rem] h-[23.313rem] bg-[#fff] p-4 rounded-xl shadow-md">
            <img
              className="w-full rounded-lg overflow-hidden"
              src={WaffleIceCream}
              alt="vanilla latte"
            />
            <div className="flex justify-between items-center text-[#2F2105]">
              <div className="pl-2 pr-6 py-4">
                <h2 className="text-2xl font-semibold">Waffle Ice Cream</h2>
                <p className="text-[#7E7D7A] text-sm pt-2">
                  Waffle with ice cream
                </p>
              </div>
              <div className="justify-left items-center">
                <p className="font-bold text-2xl py-4">12 K</p>
                <button className="">
                  <a href="#">
                    <img src={ShoppingCartPop} alt="" />
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
