import SectionCard from "@/components/section-card"
import { StarsIllustration } from "@/components/stars"
import { FC } from "react";

const SectionOne: FC = () => {
    return (
        <section className="section-one-gradient">
            <SectionCard className="h-[calc(60vh_-_100px)]">
                <div className="text-2xl sm:text-4xl font-bold tracking-wide">
                    <div className="text-gray-400/90 font-mono text-xl">Hi there, I&apos;m Murat K. - aka Muratva Stark 👋</div>
                    <div className="text-white">I&apos;m a Backend Developer and Student.</div>
                </div>
                <div className="absolute mt-80">
                    <StarsIllustration />
                </div>
            </SectionCard>
        </section>
    )
}

export default SectionOne;
