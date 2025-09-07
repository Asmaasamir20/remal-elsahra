
import notfoundImg from "@/assets/notFoundPage/notFound.webp";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
const NotFoundPage = () => {
  return (
    <div className="container">
      <LazyLoadImage
        src={notfoundImg}
        alt={"notfoundImg"}
        className="w-full "
        effect="blur"
        width="100%"
        height="100%"
      />
    </div>
  );
}

export default NotFoundPage
