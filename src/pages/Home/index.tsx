import React, { useEffect, useState } from "react";
import "../../styles/home.styles.scss";
import { api } from "../../services";
import { Profile } from "../../components/Profile";
import { CardRepo } from "../../components/Card";
interface UserProps {
  login: string;
  id: number;
  url: string;
  name: string;
  bio: string;
  public_repos: number;
  followers: number;
  following: number;
  avatar_url: string;
}
interface ReposProps {
  id: number;
  name: string;
  updated_at: string;
  private: boolean;
  description: string;
  language: string;
  html_url: string;
}

export function Home() {
  const [user, setUser] = useState<UserProps>();
  const [repositorys, setRepositorys] = useState<ReposProps[]>();
  useEffect(() => {
    async function getUser() {
      await handleUser();
      await handleRepositoryes();
    }
    getUser();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function handleUser() {
    try {
      const data = await api.get("Icaro8");
      setUser(data.data);
    } catch (error) {
      window.alert(error);
    }
  }
  async function handleRepositoryes() {
    try {
      const response = await api.get("Icaro8/repos");
      setRepositorys(response.data);
    } catch (error) {
      window.alert(error);
    }
  }
  console.log(repositorys);
  return (
    <div className="containerPage">
      <div>
        <Profile
          followers={user?.followers}
          following={user?.following}
          img={user?.avatar_url}
          name={user?.name}
          public_repos={user?.public_repos}
        />
      </div>
      <div className="cardsSection">
        {repositorys?.map((element) => (
          <div key={element.id} className="containercards">
            <CardRepo
              description={element.description}
              name={element.name}
              updated_at={element.updated_at}
              html_url={element.html_url}
              language={element.language}
              private_={element.private}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
