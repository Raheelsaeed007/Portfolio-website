import { HiOutlineMail } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import SingleInfo from "./SingleInfo";

const ContactInfo = () => {
  return (
    <div className="flex flex-col gap-4">
      <SingleInfo text="raheelrahman1972@gmail.com" Image={HiOutlineMail} />
      <SingleInfo text="+971 52 8134240" Image={FiPhone} />
      <SingleInfo text="Dubai, UAE" Image={IoLocationOutline} />
    </div>
  );
};

export default ContactInfo;
