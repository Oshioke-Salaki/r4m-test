import male from "../assets/male.png";
import female from "../assets/female.png";

function HeroSection() {
  return (
    <div className="flex justify-between text-center">
      <img src={male} alt="" />
      <div className="flex flex-col items-center">
        <p className="text-[50px] text-white mb-[130px] pt-[86px]">
          Find love and win an all-expenses-paid wedding{" "}
        </p>
        <button className="py-[7px] text-[36px] px-[14px] text-[#9D0208] bg-white rounded-md">
          Sign up
        </button>
      </div>
      <img src={female} alt="" />
    </div>
  );
}

export default HeroSection;
