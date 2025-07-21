import React from "react";

const Loader = () => {
  return (
    <div className="m-auto my-8 flex justify-center gap-4">
      <img src={"/icon.png"} alt="loader" className="animate-bounce" />
      <img
        src={"/icon.png"}
        alt="loader"
        className="animate-bounce fader-delay-100"
      />
      <img
        src={"/icon.png"}
        alt="loader"
        className="animate-bounce fader-delay-200"
      />
    </div>
  );
};

export default Loader;
