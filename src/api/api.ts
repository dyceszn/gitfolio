import axios from "axios";

// Define types for the GitHub data
export interface GitHubProfile {
  login: string;
  id: number;
  avatar_url: string;
  name: string;
  bio: string;
  email: string;
  pronouns: string;
  followers: number;
  following: number;
  public_repos: number;
  created_at: string;
}

// Define types for the GitHub repository data
export interface GitHubRepo {
  id: number;
  name: string;
  html_url: string;
  language: string;
  updated_at: string;
  watchers: number;
  license: string;
  size: number;
  description: string;
  stargazers_count: number;
}

// Function to fetch the GitHub profile data
export const fetchGitHubProfile = async (
  username: string
): Promise<GitHubProfile | null> => {
  try {
    const response = await axios.get<GitHubProfile>(
      `https://api.github.com/users/${username}`
    );

    // Log the full response to see all the data returned by GitHub
    // console.log("Full profile response:", response);

    return response.data;
  } catch (error) {
    console.error("Error fetching profile data:", error);
    return null;
  }
};

// Function to fetch the GitHub repository data
export const fetchGitHubRepos = async (
  username: string
): Promise<GitHubRepo[]> => {
  try {
    const response = await axios.get<GitHubRepo[]>(
      `https://api.github.com/users/${username}/repos`
    );

    // Log the full response to see all the data returned by GitHub
    // console.log("Full profile response:", response);

    return response.data;
  } catch (error) {
    console.error("Error fetching repository data:", error);
    return [];
  }
};
