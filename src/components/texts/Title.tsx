import { Georama } from "next/font/google";
import "./title.css";

const georama = Georama({
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
});

const Title = ({title}: {title: string}) => {
    return <h1 className={`title ${georama.className}`}>{title}</h1>
};

export default Title
