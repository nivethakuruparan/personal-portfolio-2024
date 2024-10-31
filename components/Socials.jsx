import Link from "next/link";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const social = [
  { icon: <FaGithub />, path: "https://github.com/nivethakuruparan" },
  {
    icon: <FaLinkedinIn />,
    path: "https://www.linkedin.com/in/nivethakuruparan",
  },
  { icon: <MdEmail />, path: "mailto:nivetha.kuruparan@gmail.com" },
];

const Socials = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {social.map((item, index) => {
        return (
          <Link key={index} href={item.path} className={iconStyles}>
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
