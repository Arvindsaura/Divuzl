// src/components/WhatsApp.jsx
import { FaWhatsapp } from "react-icons/fa";

const WhatsApp = () => {
  const phoneNumber = "919220660377"; // replace with your WhatsApp number
  const message = "Hello! I’d like to know more about your services."; // default message
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg 
                 hover:translate-x-[-5px] transition-transform duration-300 ease-in-out 
                 hover:bg-green-600 z-50"
    >
      <FaWhatsapp size={28} />
    </a>
  );
};

export default WhatsApp;
