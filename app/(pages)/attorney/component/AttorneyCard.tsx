import { motion, useAnimation } from "framer-motion";
import Link from "next/link";
import { useEffect } from "react";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaBalanceScale } from "react-icons/fa";
import { MdMail } from "react-icons/md";
import { useInView } from "react-intersection-observer";

interface AttorneyCardProps {
  id: number;
  name: string;
  phone: string;
  email: string;
  practiceArea: string;
  description: string;
  image: string;
}

const AttorneyCard = ({
  id,
  name,
  phone,
  email,
  practiceArea,
  description,
  image,
}: AttorneyCardProps) => {
  const controls = useAnimation();
  const { ref, inView } = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      className="bg-[#fof1f3] p-6 rounded-md shadow-md hover:shadow-lg transition-shadow duration-300 border border-border flex gap-6"
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 0.3 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <div className="flex-shrink-0">
        <img
          src={image}
          alt={name}
          className="w-48 h-48 rounded-md object-cover"
        />
      </div>
      <div className="flex-grow">
        <Link href={`/attorney/profile/ `}>
          <h2 className="attorney-name text-3xl font-bold font-heading text-primary mb-2 ">
            {name}
          </h2>
        </Link>
        <div className="flex items-center text-primary mb-2">
          <FaBalanceScale className="mr-2" />
          <span className="text-body">{practiceArea}</span>
        </div>
        <div className="flex items-center text-primary mb-2">
          <BsFillTelephoneFill className="mr-2" />
          <span className="text-body">{phone}</span>
        </div>
        <div className="flex items-center text-primary mb-4">
          <MdMail className="mr-2" />
          <span className="text-body">{email}</span>
        </div>
        <p className="text-body text-primary">{description}</p>
      </div>
    </motion.div>
  );
};

export default AttorneyCard;
