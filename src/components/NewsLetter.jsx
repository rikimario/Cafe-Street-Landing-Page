import NewsLetterBg from "../assets/imgs/news-letter-bg.svg";

export default function NewsLetter() {
  return (
    <section className="mb-10">
      <div className="relative top-72 flex justify-center items-center">
        <img
          className="absolute"
          src={NewsLetterBg}
          alt="news letter background of a coffee"
        />

        <div className="z-50">
          <h2 className="text-white font-bold text-4xl pb-14 z-50 ">
            Subscribe to get 50% discount price
          </h2>
          <div className="relative flex justify-center item-center">
            <input className="w-[30rem] h-12 rounded-3xl" type="text" />
            <div className="absolute ml-44">
              <button className="absolute flex justify-around items-center h-10 bg-[#2F2105] text-[#FFF] text-base mt-1 px-5 w-[9rem] rounded-[2.0625rem] overflow-hidden hover:bg-[#362c18] transition-colors duration-200">
                Order now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
