import Link from "next/link";

type TProjectRowProps = {
  image?: string;
  title: string;
  description?: string;
  className?: string;
  link?: string;
};

export const ProjectRow = ({
  title,
  description,
  image = "",
  className,
  link = "",
}: TProjectRowProps) => {
  return (
    <div
      className={`flex flex-col justify-between px-6 gap-2 sm:gap-2 md:gap-20 sm:flex-row items-center ${className}`}
    >
      <img src={image} alt={title} className="object-cover w-full sm:w-1/2" />
      <div className="text-white flex flex-col gap-3">
        <h1 className="text-xl">{title}</h1>
        <p className="text-gray-400">{description}</p>
        <Link
          href={link}
          target="_blank"
          className="text-green-500 mt-1 md:mt-10 cursor-pointer"
          passHref
        >
          View Project ---&gt;
        </Link>
      </div>
    </div>
  );
};
