import ChooseCoffee from "../assets/imgs/choose-your-coffe.svg";
import FoodTruck from "../assets/imgs/food-truck.svg";
import CoffeeCup from "../assets/imgs/coffee-cup.svg";

export default function HowTo() {
  return (
    <section className="relative bottom-32 px-32">
      <div>
        <h2 className="text-3xl font-bold h-6 pl-28 flex gap-3">
          How to use delivery
          <span className="underline underline-offset-8 decoration-4 decoration-[#FF902B]">
            service
          </span>
        </h2>

        <div className="flex items-center text-center justify-around pt-10 ">
          <div className="flex flex-col justify-center item-center">
            <img src={ChooseCoffee} alt="coffee cup with pointer hand" />
            <h2 className="text-lg font-semibold">Choose your coffee</h2>
            <p>there are 20+ coffee for you</p>
          </div>

          <div>
            <img src={FoodTruck} alt="delivery truck" />
            <h2 className="text-lg font-semibold pt-9">We deliver to you</h2>
            <p>Choose delivery service</p>
          </div>

          <div>
            <img src={CoffeeCup} alt="coffee cup" />
            <h2 className="text-lg font-semibold pt-9">Enjoy your coffee</h2>
            <p>Choose delivery service</p>
          </div>
        </div>
      </div>
    </section>
  );
}
