import Image from "next/image";
import logoPic from "../assets/ananisai-logo.png";
export default function LogoShow() {
  return (
    <div className="flex flex-col inset-x-0 items-center justify-center text-center py-5 text-white text-sm">
      <Image src={logoPic} alt="alt" className="py-5" />
      <p className="mb-5 px-10">
        តើលោកអ្នកចាប់អារម្មណ៍នឹងប្រើប្រាស់សេវាកម្មរបស់ពួកយើងសម្រាប់កម្មវិធីរបស់លោកអ្នកដែរឬទេ?
      </p>
      <div>
        <p>ទាក់ទងមកកាន់ពួកយើងឥឡូវនេះ </p>
        <p>លេខទូរស័ព្ទ: 098456866 </p>
        <p>E-mail: ananisai.kh@gmail.com</p>
      </div>
    </div>
  );
}
