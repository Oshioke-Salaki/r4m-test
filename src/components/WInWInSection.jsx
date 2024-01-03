import winwin from "../assets/winwin.png";

function WInWInSection() {
  return (
    <div className="flex justify-center gap-x-[26px]">
      <div className="w-[560px] text-center">
        <h1 className="text-[36px] mb-[58px]">Win Win Win</h1>
        <p className="text-[36px]">
          Lots of amazing prizes up for grab courtessy of our official sponsor
          lady’s Man cosmetics. click here to participate and win.
        </p>
      </div>
      <img src={winwin} alt="" />
    </div>
  );
}

export default WInWInSection;
