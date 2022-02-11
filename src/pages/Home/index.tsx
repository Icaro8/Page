import React, { useEffect, useState } from "react";

import { api } from "../../services";
import { Profile } from "../../components/Profile";
interface DataProps {
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

export function Home() {
  const [user, setUser] = useState<DataProps>();

  useEffect(() => {
    async function getUser() {
      await handleUser();
    }
    getUser();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function handleUser() {
    try {
      const data = await api.get("Icaro8");
      setUser(data.data);
      console.log(user);
    } catch (error) {
      window.alert(error);
    }
  }

  return (
    <div>
      <Profile
        followers={user?.followers}
        following={user?.following}
        img={user?.avatar_url}
        name={user?.name}
        public_repos={user?.public_repos}
      />
    </div>
  );
}
