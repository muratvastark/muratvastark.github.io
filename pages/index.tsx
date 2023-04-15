import Layout from "@/components/layout";
import SectionCard from "@/components/section-card";
import SectionOne from "@/components/sections/section-one";
import SectionTwo from "@/components/sections/section-two";
import SectionThree from "@/components/sections/section-three";
import SectionFour from "@/components/sections/section-four";
import { useLanyard } from "use-lanyard";
import Cursor from "@/components/cursor";

export default function Home() {
  const { data } = useLanyard("470974660264067072");

  return (
    <Layout title="Muratva Stark's Website">
      <Cursor />
      <div className="flex flex-col gap-6">
        <SectionOne />
        <SectionTwo />
        <SectionThree />
        <SectionFour />
{/* 
         <img
              src={`https://cdn.discordapp.com/avatars/${data?.discord_user.id}/${data?.discord_user.avatar}`}
              alt="avatar"
              className="w-30 h-30 rounded-2xl shadow-[0_3px_50px_-12px_rgb(255,255,255)]"
            />  */}

        <section>
          <SectionCard className="my-10 relative">
            <div className="font-extrabold text-md font-mono">1881-193∞</div>
          </SectionCard>
        </section>
      </div>
    </Layout>
  )
}
