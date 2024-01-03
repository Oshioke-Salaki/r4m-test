import logo from "../assets/Logo.png";

function Navbar() {
  return (
    <nav className="flex justify-between text-white text-[30px] px-[180px] h-[124px]">
      <img src={logo} alt="" />
      <ul className="flex pt-[30px] gap-x-[88px] ">
        <li>Courses</li>
        <li>Contest</li>
        <li>Meet</li>
        <li>
          <button className="py-[7px] px-[14px] text-[#9D0208] bg-white rounded-md">
            Login
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
