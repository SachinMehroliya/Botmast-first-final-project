import React, { useRef, useState } from 'react';

const HoveringImage = () => {
  const imageRefConsultations = useRef(null); // Ref for the image behind "Consultations"
  const imageRefPrompt = useRef(null); // Ref for the image behind "Prompt Engineering"
  
  const [isHoveredConsultations, setIsHoveredConsultations] = useState(false);
  const [isHoveredPrompt, setIsHoveredPrompt] = useState(false);

  const handleMouseMove = (e, imageRef) => {
    if (imageRef.current) {
      const { clientX } = e;
      // Update the position of the image based on the cursor's position
      imageRef.current.style.left = `${clientX}px`; // Align horizontally with the cursor
      imageRef.current.style.top = '50%'; // Center vertically in the parent div
      imageRef.current.style.transform = 'translateY(-50%)'; // Offset to center
    }
  };

  const handleMouseMove2 = (e, imageRef) => {
    if (imageRef.current) {
      const { clientX } = e;
      // Update the position of the image based on the cursor's position
      imageRef.current.style.left = `${clientX}px`; // Align horizontally with the cursor
      imageRef.current.style.top = '50%'; // Center vertically in the parent div
      imageRef.current.style.transform = 'translateY(-70%)'; // Offset to center
    }
  };

  return (
    <div className="bg-[#101115] h-[300px] relative">
      {/* Hover Effect for Consultations */}
      <div
        className="flex items-center pl-[150px] relative"
        onMouseMove={(e) => handleMouseMove(e, imageRefConsultations)}
      >
        <h1 className="text-white mr-32">(03)</h1> {/* Add margin-right for spacing */}
        
        <div>
          <h1
            className="font-extrabold text-white text-6xl cursor-default relative z-10"
            onMouseEnter={() => setIsHoveredConsultations(true)}
            onMouseLeave={() => setIsHoveredConsultations(false)}
          >
            AI Product Development
          </h1>

          {isHoveredConsultations && (
            <div
              ref={imageRefConsultations}
              className="absolute transition-all duration-150 ease-in-out rounded-lg"
              style={{
                width: '200px',
                height: '300px',
                backgroundImage: 'url("https://i0.wp.com/procreator.design/blog/wp-content/uploads/2023/12/Human_ai_collaboration.png?resize=1024%2C682&ssl=1")', // Replace with your image URL
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                pointerEvents: 'none',
                zIndex: 0, // Ensure it stays behind the text
              }}
            ></div>
          )}
        </div>
      </div>

      {/* Hover Effect for Prompt Engineering Text */}
      <div
        className="mt-4 pl-[305px] relative"
        onMouseMove={(e) => handleMouseMove2(e, imageRefPrompt)}
      >
        <p
          className="text-white cursor-default relative z-10"
          onMouseEnter={() => setIsHoveredPrompt(true)}
          onMouseLeave={() => setIsHoveredPrompt(false)}
        >
          Custom GPTS, AI Chatbots • Data Analysis, Customer Interaction, Operational Efficiency Tools • Products Tailored to Your Needs
        </p>

        {isHoveredPrompt && (
          <div
            ref={imageRefPrompt}
            className="absolute transition-all duration-150 ease-in-out rounded-lg"
            style={{
              width: '200px',
              height: '300px',
              backgroundImage: 'url("https://i0.wp.com/procreator.design/blog/wp-content/uploads/2023/12/Human_ai_collaboration.png?resize=1024%2C682&ssl=1")', // Replace with your image URL
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              pointerEvents: 'none',
              zIndex: 0, // Ensure it stays behind the text
            }}
          ></div>
        )}
      </div>

      <div className="w-[900px] h-[2px] bg-white mt-20 ml-[305px]"></div>
    </div>
  );
};

export default HoveringImage;


