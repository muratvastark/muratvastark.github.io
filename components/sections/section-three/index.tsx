import RepositoryCard from "@/components/repository-card";
import SectionCard from "@/components/section-card";
import { Repository } from "@/types/Repository";
import axios from "axios";
import { FC, useState, useEffect } from "react";
import useSound from "use-sound";

const SectionThree: FC = () => {
  const [repositories, setRepositories] = useState<Repository[]>([]);
  const [play, { stop }] = useSound("/hover-sound.mp3");
  
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
            <div className="mt-6 grid grid-cols-2 md:grid-cols-3 gap-2">
              {
                repositories.map((repository, i) => (<RepositoryCard
                  key={i}
                  onMouseEnter={() => play()}
                  onMouseLeave={() => stop()}
                  link={repository.html_url}
                  name={repository.name}
                  description={repository.description || "Not have description."}
                />))
              }
              <div className="section-three-gradient"></div>
            </div>
          </SectionCard>
        </section>
    )
}

export default SectionThree;
