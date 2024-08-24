import React, { createContext, useState, useEffect, ReactNode } from "react";
import {
  fetchGitHubProfile,
  fetchGitHubRepos,
  GitHubProfile,
  GitHubRepo,
} from "../api/api";

// Define types for context
interface UserContextType {
  username: string;
  setUsername: (username: string) => void;
  profileData: GitHubProfile | null;
  repoData: GitHubRepo[];
  setProfileData: React.Dispatch<React.SetStateAction<GitHubProfile | null>>;
  setRepoData: React.Dispatch<React.SetStateAction<GitHubRepo[]>>;
  loading: boolean;
}

export const UserContext = createContext<UserContextType | undefined>(
  undefined
);

interface UserProviderProps {
  children: ReactNode;
}

// UserProvider component
export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [username, setUsername] = useState<string>(() => {
    return localStorage.getItem("username") || "";
  });

  const [profileData, setProfileData] = useState<GitHubProfile | null>(() => {
    const storedProfileData = localStorage.getItem("profileData");
    return storedProfileData ? JSON.parse(storedProfileData) : null;
  });

  const [repoData, setRepoData] = useState<GitHubRepo[]>(() => {
    const storedRepoData = localStorage.getItem("repoData");
    return storedRepoData ? JSON.parse(storedRepoData) : [];
  });

  const [loading, setLoading] = useState<boolean>(false);

  // Fetch data from GitHub API
  useEffect(() => {
    const fetchData = async () => {
      if (username) {
        setLoading(true);
        const profile = await fetchGitHubProfile(username);
        const repos = await fetchGitHubRepos(username);
        setProfileData(profile);
        setRepoData(repos);
        setLoading(false);
      }
    };

    fetchData();
  }, [username]);

  // Store data in local storage
  useEffect(() => {
    localStorage.setItem("username", username);
  }, [username]);

  useEffect(() => {
    localStorage.setItem("profileData", JSON.stringify(profileData));
  }, [profileData]);

  useEffect(() => {
    localStorage.setItem("repoData", JSON.stringify(repoData));
  }, [repoData]);

  return (
    <UserContext.Provider
      value={{
        username,
        setUsername,
        profileData,
        repoData,
        setProfileData,
        setRepoData,
        loading,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
