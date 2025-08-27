import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppBtn() {
  const phone = "+9779841343885"; // your number
  const text = "Hello! Sir, I Want More Details About Hostel";

  return (
    <a
      href={`https://wa.me/${+9779841343885}?text=${encodeURIComponent(text)}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-15 right-4 bg-green-500 text-white p-3 rounded-full shadow-lg translate duration-300 delay-100 ease-in hover:text-green-600 hover:bg-amber-50"
    >
      <FaWhatsapp size={28} />
    </a>
  );
}
