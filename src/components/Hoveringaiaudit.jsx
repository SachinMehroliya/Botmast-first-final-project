import React, { useRef, useState } from 'react';

const HoveringImage = () => {
  const imageRefConsultations = useRef(null); // Ref for the image behind "Consultations"
  const imageRefPrompt = useRef(null); // Ref for the image behind "Prompt Engineering"
  const imageRefAudit = useRef(null); // Ref for the image behind "AI Audits"
  const imageRefAuditText = useRef(null); // Ref for the image behind the audit description text

  const [isHoveredConsultations, setIsHoveredConsultations] = useState(false);
  const [isHoveredPrompt, setIsHoveredPrompt] = useState(false);
  const [isHoveredAudit, setIsHoveredAudit] = useState(false);
  const [isHoveredAuditText, setIsHoveredAuditText] = useState(false);

  const handleMouseMove = (e, imageRef) => {
    if (imageRef.current) {
      const { clientX } = e;
      imageRef.current.style.left = `${clientX}px`; // Align horizontally with the cursor
      imageRef.current.style.top = '50%'; // Center vertically in the parent div
      imageRef.current.style.transform = 'translateY(-50%)'; // Offset to center
    }
  };

  const handleMouseMove2 = (e, imageRef) => {
    if (imageRef.current) {
      const { clientX } = e;
      imageRef.current.style.left = `${clientX}px`; // Align horizontally with the cursor
      imageRef.current.style.top = '50%'; // Center vertically in the parent div
      imageRef.current.style.transform = 'translateY(-70%)'; // Offset to center
    }
  };

  return (
    <div className="bg-[#101115] h-[270px] relative">
      {/* AI Audits Section */}
      <div
        className="flex items-center pl-[150px] relative"
        onMouseMove={(e) => handleMouseMove(e, imageRefAudit)}
      >
        <h1 className="text-white mr-32">(02)</h1>
        <div>
          <h1
            className="font-extrabold text-white text-6xl cursor-default relative z-10"
            onMouseEnter={() => setIsHoveredAudit(true)}
            onMouseLeave={() => setIsHoveredAudit(false)}
          >
            AI Audits
          </h1>

          {isHoveredAudit && (
            <div
              ref={imageRefAudit}
              className="absolute transition-all duration-150 ease-in-out rounded-lg"
              style={{
                width: '200px',
                height: '300px',
                backgroundImage: 'url("https://financialit.net/sites/default/files/audit.jpg")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                pointerEvents: 'none',
                zIndex: 0, // Ensure it stays behind the text
              }}
            ></div>
          )}
        </div>
      </div>

      {/* Text Below AI Audits */}
      <div
        className="mt-4 pl-[305px] relative"
        onMouseMove={(e) => handleMouseMove2(e, imageRefAuditText)}
      >
        <p
          className="text-white cursor-default relative z-10"
          onMouseEnter={() => setIsHoveredAuditText(true)}
          onMouseLeave={() => setIsHoveredAuditText(false)}
        >
          Scrutinizing Your Business Processes • Identifying Areas for AI Automation • Offering Updates for Refined and Updated Solutions
        </p>

        {isHoveredAuditText && (
          <div
            ref={imageRefAuditText}
            className="absolute transition-all duration-150 ease-in-out rounded-lg"
            style={{
              width: '200px',
              height: '300px',
              backgroundImage: 'url("https://financialit.net/sites/default/files/audit.jpg")',
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
