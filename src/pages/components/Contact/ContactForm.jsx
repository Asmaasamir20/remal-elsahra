import { useForm } from "react-hook-form";
import { User, Mail, PhoneCall, Send } from "lucide-react";
import { Input } from "@/components/Ui/input";
import { Button } from "@/components/Ui/button";
import emailjs from "emailjs-com";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const sendEmail = (data) => {
    emailjs
      .send(
        "service_qmryda7",
        "template_j2yk6xe",
        {
          username: data.username,
          userEmail: data.userEmail,
          userPhone: data.userPhone,
          userMessage: data.userMessage,
        },
        "9fTFC1g4Y4Qx05K6m"
      )
      .then((response) => {
        console.log("Email sent successfully!", response.status, response.text);
        toast.success("تم إرسال الرسالة بنجاح!", {
          containerId: "belowButton",
        });
        reset(); // إعادة تعيين النموذج بعد الإرسال
      })
      .catch((error) => {
        console.error("Failed to send email:", error);
        toast.error("حدث خطأ أثناء الإرسال. حاول مرة أخرى.", {
          containerId: "belowButton",
        });
      });
  };

  return (
    <form
      className="space-y-4 mt-3"
      onSubmit={handleSubmit(sendEmail)}
      onKeyDown={(e) => {
        if (e.key === "Enter") handleSubmit(sendEmail)();
      }}>
      {/* اسم المستخدم */}
      <div className="form-item">
        <Input
          className="border-2 shadow-md hover:shadow-lg placeholder:text-gray-600 text-gray-900 border-gray-200 focus:border-white focus:ring-0 p-2 rounded-xl pr-10 transition-all duration-200"
          type="text"
          placeholder="اسم المستخدم"
          endIcon={User}
          {...register("username", { required: "اسم المستخدم مطلوب" })}
        />
        {errors.username && (
          <span className="text-red-500 text-sm">
            {errors.username.message}
          </span>
        )}
      </div>

      {/* البريد الإلكتروني */}
      <div className="form-item">
        <Input
          className="border-2 shadow-md hover:shadow-lg placeholder:text-gray-600 text-gray-900 border-gray-200 focus:border-white focus:ring-0 p-2 rounded-xl pr-10 transition-all duration-200"
          type="email"
          placeholder="البريد الإلكتروني"
          endIcon={Mail}
          {...register("userEmail", {
            required: "البريد الإلكتروني مطلوب",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "صيغة البريد الإلكتروني غير صحيحة",
            },
          })}
        />
        {errors.userEmail && (
          <span className="text-red-500 text-sm">
            {errors.userEmail.message}
          </span>
        )}
      </div>

      {/* رقم الهاتف */}
      <div className="form-item">
        <Input
          className="border-2 shadow-lg hover:shadow-xl placeholder:text-gray-600 text-gray-900 border-gray-200 focus:border-white focus:ring-0 p-2 rounded-xl pr-10 transition-all duration-200 text-right"
          type="tel"
          placeholder="رقم الهاتف"
          endIcon={PhoneCall}
          {...register("userPhone", {
            required: "رقم الهاتف مطلوب",
            pattern: {
              value: /^[0-9]+$/,
              message: "رقم الهاتف يجب أن يحتوي على أرقام فقط",
            },
          })}
        />
        {errors.userPhone && (
          <span className="text-red-500 text-sm">
            {errors.userPhone.message}
          </span>
        )}
      </div>

      {/* الرسالة */}
      <div className="form-item">
        <textarea
          placeholder="اكتب رسالتك هنا"
          {...register("userMessage", { required: "الرسالة مطلوبة" })}
          className="w-full h-24 rounded-xl border border-gray-300 bg-white py-3 px-4 text-md placeholder-gray-500 focus:border-blue-400 focus:ring-0 shadow-sm hover:shadow-md transition-all duration-200"
        />
        {errors.userMessage && (
          <span className="text-red-500 text-sm">
            {errors.userMessage.message}
          </span>
        )}
      </div>

      <div className="relative flex justify-center">
        <Button
          type="submit"
          className="btn w-full sm:w-1/2 md:w-1/2 lg:w-1/3 h-16 rounded-xl Amiri-font font-bold text-md sm:text-lg md:text-md lg:text-xl text-gray-50 border-sky-400 bg-sky-500 hover:bg-sky-600 hover:text-white transition-all duration-200 px-6 py-2 shadow-md shadow-black"
          disabled={isSubmitting}>
          {isSubmitting ? "جاري الإرسال..." : "ارسال البيانات"}
          <Send />
        </Button>
      </div>

      <ToastContainer
        containerId="belowButton"
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={true}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </form>
  );
};

export default ContactForm;
