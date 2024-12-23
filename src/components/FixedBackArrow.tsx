import { IoIosArrowRoundBack } from "react-icons/io";
import Link from "next/link";
import "./fixedbackarrow.css";

const FixedBackArrow = () => {
  return (
    <div className="fixed-back-arrow">
      <Link href="/web"><IoIosArrowRoundBack color="white"/></Link>
    </div>
  );
};

export default FixedBackArrow;
