import leftArr from "../assets/leftArr.svg";
import rightArr from "../assets/rightArr.svg";
import winners from "../assets/winner.png";

function WinnersSection() {
  return (
    <div className="flex bg-white pt-[135px] pb-[115px] justify-center">
      <img src={leftArr} alt="" />
      <img src={winners} alt="" />
      <img src={rightArr} alt="" />
    </div>
  );
}

export default WinnersSection;
