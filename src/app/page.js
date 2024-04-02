import Buttons from "@/components/button/button";
import Image from "next/image";

export default function Home() {
  return (
    <main
      className="w-full  relative "
      style={{
        backgroundImage:
          " linear-gradient(138deg, rgba(10,87,131,1) 39%, rgba(24,161,154,1) 79%)",
      }}
    >
      <div className="text-white px-[101px] pt-[84px]">
        <div className="flex flex-col justify-center items-center">
          <h3 className="font-semibold text-[76px] text-center">
            Check your financial health
          </h3>
          <p className="text-center text-[32px] font-thin leading-9 py-4 mt-2 mb-4 ">
            Use WeathoMeter to get a free report
            <br /> card for your finances- within minutes!
          </p>
         <Buttons/>
        </div>
      </div>
      <div className="flex justify-between px-[201px] relative pb-[600px]">
        <div className="mt-[86px]">
          <div className="flex items-center gap-2 mb-3">
            <Image
              src={"/chackIcon.png"}
              width={100}
              height={100}
              alt="item"
              className="h-[30px] w-[30px] "
            />
            <p className="border-b-[3px] w-[250px] text-white font-medium leading-9">
              Expected Retirement Age
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Image
              src={"/chackIcon.png"}
              width={100}
              height={100}
              alt="item"
              className="h-[30px] w-[30px] "
            />
            <p className="border-b-[3px] w-[250px] text-white font-medium leading-9">
              Expected Retirement Age
            </p>
          </div>
        </div>
        <div className="mt-[86px]">
          <div className="flex items-center gap-2 mb-3">
            <Image
              src={"/chackIcon.png"}
              width={100}
              height={100}
              alt="item"
              className="h-[30px] w-[30px] "
            />
            <p className="border-b-[3px] w-[250px] text-white font-medium leading-9">
              Expected Retirement Age
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Image
              src={"/chackIcon.png"}
              width={100}
              height={100}
              alt="item"
              className="h-[30px] w-[30px] "
            />
            <p className="border-b-[3px] w-[250px] text-white font-medium leading-9">
              Expected Retirement Age
            </p>
          </div>
        </div>
        <Image
          src={"/mobile.png"}
          alt="mobile"
          width={500}
          height={500}
          className="absolute right-[450px]"
        />
      </div>

      <div
        className="absolute w-full h-[800px] top-[660px] z-10"
        style={{
          backgroundImage: "url('/bg.png')",
          backgroundPosition: "bottom",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="flex justify-center text-white items-center w-full h-full pt-14">
          <div>
            <h3 className="font-semibold text-[50px] text-center my-5">
              How it works?
            </h3>
            <Image
              src={"/3page.png"}
              alt="3 page"
              height={200}
              width={800}
              className=""
            />
            <div className="flex justify-between text-center font-light text-[20px] ml-3">
              <p>
                Answer few
                <br />
                questions
              </p>
              <p className="ml-5">
                Register using
                <br />
                phone and OTP
              </p>
              <p>
                Get report and
                <br />
                personal roadmap
              </p>
            </div>
            <div className="mt-16 flex justify-center">

            <Buttons/>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
