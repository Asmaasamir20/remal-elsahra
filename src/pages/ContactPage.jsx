import ContactForm from "./components/Contact/ContactForm";
import ContactSeo from "./components/Contact/ContactSeo";
import Location from "./components/Contact/Location";
import CallMe from "@/shared/CallMe";

const ContactPage = () => {
  return (
    <>
      <ContactSeo />
      <section className="relative contact bg-cover bg-center bg-About bg-fixed min-h-screen">
        <div className="h-full py-8">
          <div className="container max-w-6xl pb-14 rounded-2xl shadow-xl shadow-gray-700 transform transition-all duration-700  border-r-2 border-b-2 border-yellow-600  hover:shadow-2xl hover:shadow-gray-800  hover:bg-gray-700/10 lg:min-w-7xl px-4 md:px-10 mx-auto  flex items-center justify-center">
            <div className="w-full max-w-4xl ">
              <h2 className="text-xl sm:text-xl lg:text-3xl w-full md:w-1/2 lg:w-1/3 mx-auto text-white text-center mb-3 py-4 px-6  border-b-2 border-sky-600   transition-all duration-500 rounded-xl shadow-lg hover:shadow-2xl font-bold  hover:scale-105 transform ease-in-out">
                تواصل معنا
              </h2>
              <div className="container max-w-2xl  mx-auto md:px-8">
                <div className=" flex Amiri-font items-center justify-center ">
                  <h4 className="text-md border-b-2 text-gray-300 border-sky-600 rounded-s-xl rounded-e-xl sm:text-lg lg:text-2xl font-semibold ">
                    اتصل بنا:
                  </h4>
                  <CallMe
                    color="text-gray-200 "
                    hoverColor="hover:text-sky-400"
                  />
                </div>
              </div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <section>
        <Location />
      </section>
    </>
  );
};

export default ContactPage;
