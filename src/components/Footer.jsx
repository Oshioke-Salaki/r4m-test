import ig from "../assets/ig.png";
import twitter from "../assets/twitter.png";
import fb from "../assets/facebook.png";
import yt from "../assets/youtube.png";
import tiktok from "../assets/tiktok.png";

function Footer() {
  return (
    <footer className="pl-[82px] pt-[49px] pb-[32px] bg-[#03071E] relative text-white text-[20px]">
      <div className="flex gap-x-[430px]">
        <div>
          <h2 className="text-[30px] mb-[75px]">Site Map</h2>
          <ul className="flex flex-col gap-y-[14px]">
            <li>About us</li>
            <li>Login</li>
            <li>New members</li>
            <li>Help</li>
            <li>Blog</li>
          </ul>
        </div>
        <div>
          <h2 className="text-[30px] mb-[75px]">Useful Links</h2>
          <ul className="flex flex-col gap-y-[14px]">
            <li>Feedback</li>
            <li>Glossary</li>
            <li>Terms of us</li>
            <li>Contact us</li>
            <li>Address</li>
          </ul>
        </div>
      </div>
      <h6 className="mt-[80px] text-center">Copyright 2023 r4m.com</h6>
      <div className="absolute  top-[200px] right-[140px] flex flex-col gap-y-[10px]">
        <img src={ig} alt="" className="w-10 h-10" />
        <img src={twitter} alt="" className="w-10 h-10" />
        <img src={fb} alt="" className="w-10 h-10" />
        <img src={yt} alt="" className="w-10 h-10" />
        <img src={tiktok} alt="" className="w-10 h-10" />
      </div>
    </footer>
  );
}

export default Footer;
