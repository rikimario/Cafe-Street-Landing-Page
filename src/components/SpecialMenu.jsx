import VanillaLatte from "../assets/imgs/vanilla-latte-popular.svg";
import ShoppingCartPop from "../assets/imgs/popular-shopping-cart.svg";

export default function SpecialMenu() {
  return (
    <section className="pt-36 px-32 grid grid-cols-3">
      <div className="grid justify-center items-center pb-24">
        <div className="relative w-[21.45rem] h-[23.313rem] bg-[#fff] p-4 rounded-xl shadow-md">
          <img className="w-full" src={VanillaLatte} alt="vanilla latte" />
          <div className="flex justify-between items-center text-2xl font-semibold text-[#2F2105]">
            <h2 className="pl-4 py-4">Sandwich</h2>
            <p className="font-bold pr-6">12 K</p>
          </div>
          <div className="flex justify-left items-center pt-2">
            <p>Bread with meat and vegetables</p>
            <button className="pl-20">
              <a href="#">
                <img src={ShoppingCartPop} alt="" />
              </a>
            </button>
          </div>
        </div>
      </div>

      <div className="grid justify-center items-center pb-24">
        <div className="relative w-[21.45rem] h-[23.313rem] bg-[#fff] p-4 rounded-xl shadow-md">
          <img className="w-full" src={VanillaLatte} alt="vanilla latte" />
          <div className="flex justify-between items-center text-2xl font-semibold text-[#2F2105]">
            <h2 className="pl-4 py-4">Hot Milk</h2>
            <p className="font-bold pr-6">12 K</p>
          </div>
          <div className="flex justify-left items-center pt-2">
            <p>Hot milk with less sugar</p>
            <button className="pl-20">
              <a href="#">
                <img src={ShoppingCartPop} alt="" />
              </a>
            </button>
          </div>
        </div>
      </div>

      <div className="grid justify-center items-center pb-24">
        <div className="relative w-[21.45rem] h-[23.313rem] bg-[#fff] p-4 rounded-xl shadow-md">
          <img className="w-full" src={VanillaLatte} alt="vanilla latte" />
          <div className="flex justify-between items-center text-2xl font-semibold text-[#2F2105]">
            <h2 className="pl-4 py-4">Coffee Ice Cream</h2>
            <p className="font-bold pr-6">12 K</p>
          </div>
          <div className="flex justify-left items-center pt-2">
            <p>Coffee ice cream vanilla</p>
            <button className="pl-20">
              <a href="#">
                <img src={ShoppingCartPop} alt="" />
              </a>
            </button>
          </div>
        </div>
      </div>

      <div className="grid justify-center items-center pb-24">
        <div className="relative w-[21.45rem] h-[23.313rem] bg-[#fff] p-4 rounded-xl shadow-md">
          <img className="w-full" src={VanillaLatte} alt="vanilla latte" />
          <div className="flex justify-between items-center text-2xl font-semibold text-[#2F2105]">
            <h2 className="pl-4 py-4">Cappuccino</h2>
            <p className="font-bold pr-6">12 K</p>
          </div>
          <div className="flex justify-left items-center pt-2">
            <p>Hot cappuccino</p>
            <button className="pl-20">
              <a href="#">
                <img src={ShoppingCartPop} alt="" />
              </a>
            </button>
          </div>
        </div>
      </div>

      <div className="grid justify-center items-center pb-24">
        <div className="relative w-[21.45rem] h-[23.313rem] bg-[#fff] p-4 rounded-xl shadow-md">
          <img className="w-full" src={VanillaLatte} alt="vanilla latte" />
          <div className="flex justify-between items-center text-2xl font-semibold text-[#2F2105]">
            <h2 className="pl-4 py-4">Moccacinno</h2>
            <p className="font-bold pr-6">12 K</p>
          </div>
          <div className="flex justify-left items-center pt-2">
            <p>Hot moccacinno</p>
            <button className="pl-20">
              <a href="#">
                <img src={ShoppingCartPop} alt="" />
              </a>
            </button>
          </div>
        </div>
      </div>

      <div className="grid justify-center items-center pb-24">
        <div className="relative w-[21.45rem] h-[23.313rem] bg-[#fff] p-4 rounded-xl shadow-md">
          <img className="w-full" src={VanillaLatte} alt="vanilla latte" />
          <div className="flex justify-between items-center text-2xl font-semibold text-[#2F2105]">
            <h2 className="pl-4 py-4">Waffle Ice Cream</h2>
            <p className="font-bold pr-6">12 K</p>
          </div>
          <div className="flex justify-left items-center pt-2">
            <p>Waffle with ice cream</p>
            <button className="pl-20">
              <a href="#">
                <img src={ShoppingCartPop} alt="" />
              </a>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
