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
      }}
    >
      {/* اسم المستخدم */}
      <div className="form-item">
        <Input
          className="text-gray-900"
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
          className="text-gray-900"
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
          className="text-gray-900 text-right"
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
          className="w-full h-28 rounded-xl border border-gray-300 bg-white py-3 px-4 text-md placeholder-gray-500 outline-none focus:border-[var(--primary-gold-orange)] focus:ring-2 focus:ring-[var(--primary-gold-orange)] focus:ring-offset-1 hover:border-[var(--primary-gold-orange)] shadow-sm hover:shadow-md transition-all duration-200"
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
          className="bg-[#a98b5b] text-white font-semibold  py-7 px-8 rounded-full shadow-lg hover:bg-[#977b4f] hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-[#cdbb9e] focus:ring-offset-2 "
          disabled={isSubmitting}
        >
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
