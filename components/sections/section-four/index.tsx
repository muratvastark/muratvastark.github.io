import SectionCard from "@/components/section-card";
import { FC, createElement } from "react";
import { SiTwitter, SiDiscord, SiSpotify, SiReddit } from 'react-icons/si';
import { AiFillGithub } from "react-icons/ai";
import useSound from "use-sound";
import Link from "next/link";

const SectionFour: FC = () => {
    const [play, { stop }] = useSound("/hover-sound.mp3");
    const clickSound = useSound("/click-sound.mp3");

    const socials = [
        { icon: SiTwitter, url: "https://twitter.com/muratvastark", name: "Twitter", className: "bg-cyan-500" },
        { icon: AiFillGithub, url: "https://github.com/muratvastark", name: "Github", className: "bg-black border-2 border-[#111]" },
        { icon: SiDiscord, url: "https://discord.com/users/1158396365701910588", name: "Discord", className: "bg-slate-600" },
        { icon: SiSpotify, url: "https://open.spotify.com/user/fezs35azf7ja0mdvxv606juk6", name: "Spotify", className: "bg-green-600" },
        { icon: SiReddit, url: "https://www.reddit.com/user/muratvastark", name: "Reddit", className: "bg-orange-600" },
    ];

    return (
        <section>
            <SectionCard className="flex-col my-10 relative">
                <div className="uppercase tracking-[4px] text-sm text-neutral-500 font-medium">Contact</div>
                <div className="flex items-center justify-center mt-2 gap-2">
                    {
                        socials.map((social, i) => (
                            <Link
                                key={i}
                                href={social.url}
                                target="_blank"
                                className={`${social.className} p-3 rounded-md cursor-pointer hover:bg-opacity-70 group relative flex justify-center`}
                                onMouseEnter={() => play()}
                                onMouseLeave={() => stop()}
                                onClick={() => clickSound[0]()}
                            >
                                {createElement(social.icon, { size: 20 })}
                                <span
                                    className="absolute top-14 scale-0 transition-all rounded bg-white/5 p-2 text-xs text-white group-hover:scale-100"
                                >
                                    {social.name}
                                </span>
                            </Link>
                        ))
                    }
                </div>
            </SectionCard>
        </section>
    )
}

export default SectionFour;
