import { FaFacebookF, FaGoogle } from "react-icons/fa";

export default function Socials() {
  return (
    <div className="mt-10 w-full flex flex-col items-center">
      <p className="mb-5">Ou entre com</p>
      <div className="bg-sky-600 hover:bg-sky-700 cursor-pointer flex items-center w-10/12 md:w-2/4	p-2 mb-3 text-white rounded">
        <FaFacebookF color="#fff" />
        <p className="ml-5">Facebook</p>
      </div>
      <div className="bg-red-500 hover:bg-red-600 cursor-pointer flex items-center w-10/12 md:w-2/4	p	p-2 text-white rounded">
        <FaGoogle color="#fff" />
        <p className="ml-5">Google</p>
      </div>
    </div>
  );
}
