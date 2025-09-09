import { memo } from "react";
import PropTypes from "prop-types";
import { clientsImage } from "./clientsImages";
import { Link } from "react-router-dom";
import ClientsSeo from "./ClientsSeo";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

// مكون عرض العميل (مقترح)
const ClientCard = memo(({ link, src, index, alt }) => (
  <Link
    to={link}
    target="_blank"
    rel="noopener noreferrer"
    className="block transform transition duration-300 w-full h-32 sm:h-40 md:h-48 lg:h-56 overflow-hidden rounded-lg shadow-lg hover:scale-105"
  >
    <LazyLoadImage
      src={src}
      alt={alt || `Logo of client ${index + 1}`}
      className="w-full h-full object-contain"
      effect="blur"
      placeholderSrc="/path/to/low-res-placeholder.jpg" // صورة منخفضة الدقة للتحميل
      width="100%"
      height="100%"
      onError={(e) => (e.target.src = "/path/to/fallback-image.jpg")} // صورة احتياطية في حال فشل التحميل
    />
  </Link>
));

ClientCard.displayName = "ClientCard";

ClientCard.propTypes = {
  link: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  index: PropTypes.number,
  alt: PropTypes.string,
};

const Clients = () => {
  return (
    <>
      <ClientsSeo />
      <div className="p-8 bg-gray-100 text-center rounded-xl">
    
        <p className="text-md sm:text-lg lg:w-2/3 mx-auto leading-8 text-md font-normal mt-2 py-2 lg:px-10 text-gray-600">
          على مدى الأعوام الماضية، شرفنا بالتعاون مع نخبة من الشركات الرائدة،
          حيث قمنا بتنفيذ مشاريع كبرى وهامة تُجسد الثقة المتبادلة والرؤية
          المشتركة بيننا وبين شركائنا في النجاح.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 mt-10">
          {clientsImage.map((client, index) => (
            <ClientCard
              key={index}
              link={client.link}
              src={client.src}
              index={index}
              alt={client.alt} // يمكنك إضافة alt في ملف clientsImages
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Clients;
