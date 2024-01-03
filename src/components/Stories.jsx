import img1 from "../assets/natasha.png";
import img2 from "../assets/cecelia.png";
import img3 from "../assets/fawad.png";
function Stories() {
  return (
    <div className="pb-[160px]">
      <h1 className="text-[40px] text-[#9D0208] mb-[70px] text-center">
        Stories
      </h1>
      <div className="flex gap-x-[90px] justify-center items-center">
        <img src={img1} alt="" />
        <img src={img2} alt="" />
        <img src={img3} alt="" />
      </div>
    </div>
  );
}

export default Stories;
