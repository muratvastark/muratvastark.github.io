import { useLanyard } from "use-lanyard";
import SectionCard from "@/components/section-card";
import { FC } from "react";

const SectionFive: FC = () => {
    const { data } = useLanyard("470974660264067072");

    return (
        <section>

            <SectionCard className="flex-col">
                <div className="uppercase tracking-[4px] text-sm text-neutral-500 font-medium">Discord Account</div>
                <div className="codeBlock w-1/2">
                    <div className={"line3"} aria-hidden />
                    <div className="discord-card flex flex-col md:flex-row">
                        <div className="shine"></div>
                        <img
                            src={`https://cdn.discordapp.com/avatars/${data?.discord_user.id}/${data?.discord_user.avatar}`}
                            alt="avatar"
                            className="w-16 h-16 rounded-2xl"
                        />
                        <div className="flex flex-col ml-4 mt-2 md:mt-0">
                            <div className="text-2xl">{data?.discord_user.username}<span className="text-gray-400 text-base">#{data?.discord_user.discriminator}</span></div>
                            {
                                data?.spotify &&
                                (
                                    <div className="flex items-center justify-center md:justify-start text-green-400 animate-pulse">
                                        <div className="w-2 h-2 rounded-full bg-green-400"></div>
                                        <div className="ml-1">{data?.spotify?.song}</div>
                                    </div>
                                )
                            }
                        </div>
                    </div>
                </div>
            </SectionCard>
        </section>
    )
}

export default SectionFive;
