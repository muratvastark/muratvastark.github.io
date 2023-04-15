import SectionCard from "@/components/section-card";
import { SiGo, SiTypescript, SiMongodb, SiTailwindcss } from 'react-icons/si';
import { DiJavascript1, DiPython } from 'react-icons/di';
import { createElement, FC } from "react";
import useSound from "use-sound";

const SectionTwo: FC = () => {
    const [play, { stop }] = useSound("/hover-sound.mp3");
    const languages = [
        { icon: SiGo, name: "GoLang" },
        { icon: DiJavascript1, name: "Javascript" },
        { icon: SiTypescript, name: "TypeScript" },
        { icon: DiPython, name: "Pyhton" },
        { icon: SiTailwindcss, name: "TailwindCSS" },
        { icon: SiMongodb, name: "MongoDB" },
    ];

    return (
        <section>
            <SectionCard className="flex-col relative mt-5">
                <div className="uppercase tracking-[4px] text-sm text-neutral-500 font-medium">Tools</div>
                <div className="grid grid-cols-3 md:grid-cols-6 gap-2 mt-6 items-center">
                    {
                        languages.map((language, i) => (
                            <div
                                key={i}
                                onMouseEnter={() => play()}
                                onMouseLeave={() => stop()}
                                className="hover:text-white/70 cursor-pointer group relative flex justify-center"
                            >
                                {createElement(language.icon, { size: 40 })}
                                <span
                                    className="absolute top-12 scale-0 transition-all rounded bg-white/5 p-2 text-xs text-white group-hover:scale-100"
                                >
                                    {language.name}
                                </span>
                            </div>
                        ))
                    }
                </div>
            </SectionCard>
        </section>
    )
}

export default SectionTwo;
