import googles from "../assets/googles.png";
import ideas from "../assets/idea.png";
import money from "../assets/money.png";

function QualitiesSection() {
  return (
    <div className="pt-[60px] flex justify-center gap-x-[230px] px-[140px] text-center pb-[120px]">
      <div className="flex flex-col items-center gap-y-[27px]">
        <img src={googles} alt="" className="w-[150px] h-[150px]" />
        <p className="w-[190px]">
          Our match making algorithym based on your queries solves the hassle of
          finding that special one
        </p>
      </div>
      <div className="flex flex-col items-center gap-y-[27px]">
        <img src={ideas} alt="" className="w-[150px] h-[150px]" />
        <p className="w-[190px]">
          You can be rest assured, every one we showcase on our platform have
          been equipped with the right knowledge
        </p>
      </div>
      <div className="flex flex-col items-center gap-y-[27px]">
        <img src={money} alt="" className="w-[150px] h-[150px]" />
        <p className="w-[190px]">
          Finance is one major part of making a relationship stable and we
          create a enabling envinroment for couples to thrive economically
        </p>
      </div>
    </div>
  );
}

export default QualitiesSection;
