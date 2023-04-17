import Layout from "@/components/layout";
import SectionCard from "@/components/section-card";
import SectionOne from "@/components/sections/section-one";
import SectionTwo from "@/components/sections/section-two";
import SectionThree from "@/components/sections/section-three";
import SectionFour from "@/components/sections/section-four";
import Cursor from "@/components/cursor";
import SectionFive from "@/components/sections/section-five";

export default function Home() {
  return (
    <Layout title="Muratva Stark's Website">
      <Cursor />
      <div className="flex flex-col gap-6">
        <SectionOne />
        <SectionTwo />
        <SectionThree />
        <SectionFour />
        <SectionFive />

        <section>
          <SectionCard className="my-10 relative">
            <div className="font-extrabold text-md font-mono">1881-193∞</div>
          </SectionCard>
        </section>
      </div>
    </Layout>
  )
}
