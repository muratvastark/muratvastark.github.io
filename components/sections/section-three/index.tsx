import SectionCard from "@/components/section-card";
import { Repository } from "@/types/Repository";
import axios from "axios";
import Link from "next/link";
import { FC, useState, useEffect } from "react";
import useSound from "use-sound";

const SectionThree: FC = () => {
  const [repositories, setRepositories] = useState<Repository[]>([]);
  const [play, { stop }] = useSound("/hover-sound.mp3");
  const clickSound = useSound("/click-sound.mp3");

  useEffect(() => {
    axios.get("https://api.github.com/users/muratvastark/repos?per_page=100")
      .then((res) => {
        setRepositories((res.data as Repository[]).sort((a, b) => b?.stargazers_count - a?.stargazers_count).slice(0, 6));
      })
      .catch((e) => console.log(e));
  }, []);

  return (
    <section>
      <SectionCard className="flex-col my-10 relative">
        <div className="uppercase tracking-[4px] text-sm text-neutral-500 font-medium">Popular Repositories</div>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-2">
          {
            repositories.map((repository, i) => (
              <Link
                key={i}
                onMouseLeave={() => play()}
                onMouseEnter={() => stop()}
                className="bg-[#131315] hover:bg-[#1c1d1f] px-6 py-5 rounded-md border border-[#313035] hover:-translate-y-0.5 duration-75"
                href={repository.html_url}
                target="_blank"
                onClick={() => clickSound[0]()}
              >
                <h3 className="mb-2 text-lg text-white">{repository.name}</h3>
                <p className="text-xs text-md truncate text-gray-300">{repository.description || "Not have description."}</p>
              </Link>
            ))
          }
          <div className="section-three-gradient"></div>
        </div>
      </SectionCard>
    </section>
  )
}

export default SectionThree;
