import { useState } from "react";

export const LanyardGenerator = ({ selectedEmployee }) => {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const cardX = rect.left + rect.width / 2;
    const cardY = rect.top + rect.height / 2;

    const deltaX = e.clientX - cardX;
    const deltaY = e.clientY - cardY;

    const rotateX = (-deltaY / 15).toFixed(2); 
    const rotateY = (deltaX / 15).toFixed(2); 

    setRotation({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setRotation({ x: 0, y: 0 });
  };

  return (
    <div className="perspective-[600px]">
      <div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="transition-transform duration-200 ease-out"
        style={{
          transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
        }}
      >
        <div className="w-72 h-110 font-ubuntu aspect-[3/4] bg-gradient-to-br from-stone-950/80 to-stone-900/100 border border-stone-400/20 shadow-2xl rounded-2xl p-4 flex flex-col items-center justify-start gap-2 text-stone-200 backdrop-blur-md overflow-hidden">
          {/* Slot holes */}
          <div className="w-full flex justify-center relative mt-2 mb-2">
            <div className="w-20 h-4 bg-[#070707] rounded-full shadow-inner z-10 border border-stone-400/20" />
          </div>

          <div className="bg-gradient-to-br from-black/100 to-black/20 h-full w-full rounded-2xl shadow-inner p-6 flex flex-col justify-between gap-1">
            {/* Top Section: Name & Title */}
            <div>
              <h2 className="text-white text-2xl font-extrabold tracking-wide leading-tight drop-shadow-md font-header">
                {selectedEmployee.name}
              </h2>
              <p className="text-stone-400 text-3xl mt-2 tracking-wide font-medium italic font-signature">
                {selectedEmployee.role}
              </p>
            </div>

            {/* ID Info */}
            <div className="text-[10px] text-stone-300 space-y-1 bg-stone-900/0 rounded-xl backdrop-blur-sm shadow-md mt-auto font-header">
              <p><span className=" ">SHLD-042</span></p>
              <p><span className=" tracking-wide">Operations Division</span></p>
              <p><span className="   ">LEVEL 7</span></p>
              <p><span className="   ">{selectedEmployee.email}</span></p>
            </div>

            <img src="/path1.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};
