import React, { useMemo } from "react";

const Location = () => {
  const mapSrc = useMemo(
    () =>
      "https://maps.google.com/maps?q=%D8%B4%D8%A7%D8%B1%D8%B9%20%D8%A7%D9%84%D9%86%D8%B9%D9%85%D8%A7%D9%86%20%D8%A8%D9%86%20%D8%A8%D8%B4%D9%8A%D8%B1,%20%D8%A7%D9%84%D8%AD%D8%B2%D9%85,%20%D8%A7%D9%84%D8%B1%D9%8A%D8%A7%D8%B6&t=m&z=17&output=embed",
    []
  );

  return (
    <div className="h-full w-full mx-auto rounded-lg overflow-hidden ">
      <iframe
        className="w-full h-full rounded-lg"
        src={mapSrc}
        title="شارع النعمان بن بشير، الحزم، الرياض"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default React.memo(Location);
