import PropTypes from "prop-types";
import { Phone } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
const CallMe = ({
  color = "text-sky-600 ",
  hoverColor = "hover:text-sky-700",
}) => {
  return (
    <>
      <div>
        <motion.div
          className="flex items-center justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Link
            to="tel:0554183175"
            className="flex items-center space-x-2  font-semibold  px-5 rounded-lg  transform transition duration-500 hover:scale-105"
          >
            <motion.span
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="tracking-wide"
            >
              <div className="py-2 text-gray-700">
                <motion.div
                  className="flex items-center"
                  animate={{
                    scale: [1, 1.1, 1],
                    transition: {
                      duration: 1.5,
                      repeat: Infinity,
                      repeatType: "loop",
                    },
                  }}
                >
                  <span
                    className={`text-md Amiri-font sm:text-lg lg:text-xl pe-2 ${color}${hoverColor} transition duration-300 hover:scale-105`}
                  >
                    0554183175
                  </span>
                  <div className="p-1 bg-sky-500 rounded-full shadow-lg hover:bg-sky-600 transform transition-all duration-300">
                    <Phone className="text-white text-sm" />
                  </div>
                </motion.div>
              </div>
            </motion.span>
          </Link>
        </motion.div>
      </div>
    </>
  );
};

export default CallMe;

CallMe.propTypes = {
  color: PropTypes.string,
  hoverColor: PropTypes.string,
};
