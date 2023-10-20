import Link from "next/link";

const HeroSection = () => {
  return (
    <>
      <section className="mt-24 mx-auto max-w-screen-xl pb-12 px-4 items-center lg:flex md:px-8">
        <div className="space-y-4 flex-1 sm:text-center lg:text-left">
          <h1 className="text-[#000] font-bold text-4xl xl:text-5xl">
            One page Template for
            <span className="text-[#92E3A9]"> Digital agency</span>
          </h1>
          <p className="text-[#1c4587] max-w-xl leading-relaxed sm:mx-auto lg:ml-0">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum
          </p>
          <div className="pt-10 items-center justify-center space-y-3 sm:space-x-6 sm:space-y-0 sm:flex lg:justify-start">
            <Link
              href="/login"
              className="px-7 py-3 w-full bg-[#92E3A9] text-gray-800 text-center rounded-md shadow-md block sm:w-auto"
            >
              Get started
            </Link>
          </div>
        </div>
        <div className="flex-1 text-center mt-7 lg:mt-0 lg:ml-3">
          <img
            src="https://i.postimg.cc/HxHyt53c/undraw-heatmap-uyye.png"
            className="w-full mx-auto sm:w-10/12  lg:w-full"
          />
        </div>
      </section>
      <div className="border-t border-gray-300 my-4"></div>
    </>
  );
};

export default HeroSection;
