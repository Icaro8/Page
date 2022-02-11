import React, { useEffect, useState } from "react";
import { AxiosResponse } from "axios";
import { api } from "../../services";

interface DataProps {
  login: string;
  id: number;
  url: string;
  name: string;
  bio: string;
  public_repos: number;
  followers: number;
  following: number;
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
    <>
      <h1>{user?.name}</h1>
    </>
  );
}
