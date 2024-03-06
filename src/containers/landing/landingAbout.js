import Link from "next/link";

const LandingAbout = () => {
  return (
    <section className="flex md:pb-36 md:px-60 md:pt-10 justify-center gap-20 md:flex-row flex-col">
      <div className="flex text-3xl md:w-2/3 px-10 tracking-wide leading-normal md:text-justify">
        Dove deep into the Web Development universe, but the allure of Machine
        Learning proved irresistible. Why the ML quest? Well, predicting browser
        quirks paled next to predicting algorithm outcomes. Because who needs
        div drama when you can decode data mysteries with a side of intensive
        math? Still tab vs. space friendly, but now adding a dash of ML magic to
        the mix. From pixels to tensors, this coder's journey just got an
        upgrade!
      </div>
      <div className="flex">
        <Link href={"/about"}>
          <div className="w-60 h-60 rounded-full flex bg-[#A52A2A] text-white items-center justify-center text-2xl text-center">
            Read About Me
          </div>
        </Link>
      </div>
    </section>
  );
};

export default LandingAbout;
