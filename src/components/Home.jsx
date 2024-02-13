import CoffeeImage from "../assets/imgs/unsplash_PKXAiiy1O4U.png";

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
          <div className="flex gap-12 pt-12">
            <button className="bg-[#2F2105] text-[#FFF] text-sm py-3 px-3 font-s w-[9rem] rounded-[2.0625rem]">
              Order now
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
