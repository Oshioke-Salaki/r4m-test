import bannerImg from "../assets/couples1.png";

function AlreadyEngagedBanner() {
  return (
    <div className="bg-[#370617] flex pl-[762px] items-center relative overflow-hidden">
      <img
        src={bannerImg}
        alt=""
        className="absolute z-[200] top-[-70px] left-[150px]"
      />
      <div className="text-[30px] text-white pt-[82px] flex flex-col items-center pb-[50px]">
        <p className="mb-[24px]">
          Already Engaged?
          <br /> Awesome!
        </p>
        <p>
          Click here and enjoy
          <br /> all the freebies only
          <br /> for couples.
        </p>
        <button className="py-[7px] mt-[30px] text-[20px] px-[14px] text-[#9D0208] bg-white rounded-md">
          Sign up
        </button>
      </div>
    </div>
  );
}

export default AlreadyEngagedBanner;
