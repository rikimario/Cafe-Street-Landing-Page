import AboutImg from "../assets/imgs/about-bg-image.svg";
import AboutCoffeeImg from "../assets/imgs/about-coffee-img.svg";

export default function About() {
  return (
    <section className=" pt-36 flex">
      <img className="absolute w-full" src={AboutImg} alt="img background" />

      <div className="relative flex-1 z-20">
        <img
          className="absolute -top-24 left-72"
          src={AboutCoffeeImg}
          alt="coffee img"
        />
      </div>

      <div className="flex-1 z-30 pt-24 pl-32">
        <h2 className="text-5xl font-bold h-6 flex gap-3">
          About{" "}
          <span className="underline underline-offset-8 decoration-4 decoration-[#FF902B]">
            us
          </span>
        </h2>
        <p className="text-2xl font-bold leading-8 pt-14 pr-[28rem]">
          We provide quality coffee, and ready to deliver.
        </p>
        <p className="text-lg text-[#7E7D7A] leading-6 tracking-wider pt-5 pr-[20rem]">
          We are a company that makes and distributes delicious drinks. Our main
          product is made with a secret recipe and available in stores
          worldwide.
        </p>

        <div className="pt-12">
          <button className="flex justify-around items-center bg-[#2F2105] text-[#F4AE26] text-base py-3 px-5 w-[11rem] rounded-[2.0625rem] relative overflow-hidden hover:bg-[#362c18] transition-colors duration-200">
            Get your coffee
          </button>
        </div>
      </div>
    </section>
  );
}
