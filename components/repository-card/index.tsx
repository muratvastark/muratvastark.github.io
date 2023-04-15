import Link from "next/link";
import { FC, MouseEventHandler } from "react";
import useSound from "use-sound";

interface IRepositoryCard {
    name: string;
    description: string;
    link: string;
    onMouseLeave: (ev: any) => any;
    onMouseEnter: (ev: any) => any;
}

const RepositoryCard: FC<IRepositoryCard> = ({ description, name, link, onMouseEnter, onMouseLeave }) => {
    const [play] = useSound("/click-sound.mp3");

    return (
        <Link
            onMouseLeave={onMouseLeave}
            onMouseEnter={onMouseEnter}
            className="bg-[#131315] hover:bg-[#1c1d1f] px-6 py-5 rounded-md border border-[#313035]"
            href={link}
            target="_blank"
            onClick={() => play()}
        >
            <h3 className="mb-2 text-lg text-white">{name}</h3>
            <p className="text-xs text-md truncate text-gray-300">{description}</p>
        </Link>
    )
}

export default RepositoryCard;
