import share from "../assets/share.png";

function ShareYourStory() {
  return (
    <div className="flex justify-center gap-x-[26px]">
      <img src={share} alt="" />
      <div className="w-[560px] text-center">
        <h1 className="text-[36px] mb-[58px]">Share your story</h1>
        <p className="text-[36px]">
          Join the fun and get the thrill on our share your story feature where
          you meet people you can relate with their experiences and a community
          you can share yours with.
        </p>
      </div>
    </div>
  );
}

export default ShareYourStory;
