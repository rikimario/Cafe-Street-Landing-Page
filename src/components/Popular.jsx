import PopularRec from "../assets/imgs/popular-rec.svg";

export default function Popular() {
  return (
    <section className="relative px-20">
      <div className="h-[35rem]">
        <img
          className="absolute bottom-80 right-[12.34rem]"
          src={PopularRec}
          alt=""
        />

        <div className="absolute top-[-14rem] left-52 flex"></div>
      </div>
    </section>
  );
}
