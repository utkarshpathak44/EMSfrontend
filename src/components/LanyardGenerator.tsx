export const LanyardGenerator = () => {
  return (
    <div className="perspective-[400px]">
      <div className="w-72 h-110 font-ubuntu aspect-[3/4] bg-gradient-to-br from-stone-950/80 to-stone-900/100 border border-stone-400/20 shadow-2xl rounded-2xl p-4 flex flex-col items-center justify-start gap-2 text-stone-200 backdrop-blur-md overflow-hidden transform rotate-x-[2deg] rotate-y-[6deg]">
        {/* Slot holes */}
        <div className="w-full flex justify-center relative mt-2 mb-2">
          <div className="w-14 h-4 bg-[#050505] rounded-full shadow-inner z-10 border border-stone-400/20" />
        </div>
        <div className="bg-gradient-to-br from-black/100 to-black/20 h-full w-full rounded-2xl shadow-inner p-6 flex flex-col justify-between gap-1">
          {/* Top Section: Name & Title */}
          <div className="">
            <h2 className="text-white text-2xl font-extrabold tracking-wide leading-tight drop-shadow-md font-header">
              Grant Ward
            </h2>
            <p className="text-stone-400 text-3xl mt-2 tracking-wide font-medium italic font-signature">
              Field agent
            </p>
          </div>

          {/* Divider */}
          {/* <div className="w-full h-px bg-gradient-to-r from-stone-700/40 via-stone-600/70 to-stone-700/40 my-0" /> */}

          {/* ID Info */}
          <div className="text-[10px] text-stone-300 space-y-1 bg-stone-900/0  rounded-xl backdrop-blur-sm shadow-md mt-auto font-header">
            <p>
              <span className=" ">SHLD-042</span>
            </p>
            <p>
              <span className=" tracking-wide">Operations Division</span>
            </p>
            <p>
              <span className="   ">LEVEL 7</span>
            </p>
          </div>
          <img src="/path1.svg" alt="" />
        </div>
      </div>
    </div>
  );
};
