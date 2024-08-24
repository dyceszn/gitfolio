import React from "react";
import RepositoryStyle from "../Styles/Repo.module.css";
import {
  Amazon,
  Android,
  Angular,
  Ansible,
  Azure,
  GitKraken,
  GitLab,
  Go,
  Haskell,
  Heroku,
  Html,
  Bitbucket,
  BitbucketV2,
  C,
  CSharp,
  Cpp,
  Java,
  Javascript,
  JQuery,
  Json,
  Kotlin,
  Laravel,
  Cassandra,
  CodeIgniter,
  Css,
  Dart,
  Deno,
  Django,
  Materialize,
  MongoDB,
  MySQL,
  NodeJs,
  Npm,
  Oracle,
  Docker,
  Firebase,
  Flask,
  GCloud,
  Git,
  GitHub,
  Php,
  PostgreSQL,
  Python,
  Rails,
  Redis,
  Redux,
  Ruby,
  Spring,
  Terraform,
  Typescript,
  Vuejs,
} from "../assets";

interface RepoBoxProps {
  name: string;
  language: string;
  onClick: () => void;
}

// RepoBox component
const RepoBox: React.FC<RepoBoxProps> = ({ name, language, onClick }) => {
  // Array of logos
  const Logos = [
    { name: "Amazon", logo: Amazon },
    { name: "Android", logo: Android },
    { name: "Angular", logo: Angular },
    { name: "Ansible", logo: Ansible },
    { name: "Azure", logo: Azure },
    { name: "GitKraken", logo: GitKraken },
    { name: "GitLab", logo: GitLab },
    { name: "Go", logo: Go },
    { name: "Haskell", logo: Haskell },
    { name: "Heroku", logo: Heroku },
    { name: "HTML", logo: Html },
    { name: "Bitbucket", logo: Bitbucket },
    { name: "BitbucketV2", logo: BitbucketV2 },
    { name: "C", logo: C },
    { name: "C#", logo: CSharp },
    { name: "C++", logo: Cpp },
    { name: "Java", logo: Java },
    { name: "JavaScript", logo: Javascript },
    { name: "jQuery", logo: JQuery },
    { name: "JSON", logo: Json },
    { name: "Kotlin", logo: Kotlin },
    { name: "Laravel", logo: Laravel },
    { name: "Cassandra", logo: Cassandra },
    { name: "CodeIgniter", logo: CodeIgniter },
    { name: "CSS", logo: Css },
    { name: "Dart", logo: Dart },
    { name: "Deno", logo: Deno },
    { name: "Django", logo: Django },
    { name: "Materialize", logo: Materialize },
    { name: "MongoDB", logo: MongoDB },
    { name: "MySQL", logo: MySQL },
    { name: "Node.js", logo: NodeJs },
    { name: "Npm", logo: Npm },
    { name: "Oracle", logo: Oracle },
    { name: "Docker", logo: Docker },
    { name: "Firebase", logo: Firebase },
    { name: "Flask", logo: Flask },
    { name: "GCloud", logo: GCloud },
    { name: "Git", logo: Git },
    { name: "GitHub", logo: GitHub },
    { name: "PHP", logo: Php },
    { name: "PostgreSQL", logo: PostgreSQL },
    { name: "Python", logo: Python },
    { name: "Rails", logo: Rails },
    { name: "Redis", logo: Redis },
    { name: "Redux", logo: Redux },
    { name: "Ruby", logo: Ruby },
    { name: "Spring", logo: Spring },
    { name: "Terraform", logo: Terraform },
    { name: "TypeScript", logo: Typescript },
    { name: "Vue.js", logo: Vuejs },
  ];

  let address = ""; // Default address

  // Find the logo for the language
  const logoObject = Logos.find((logo) => logo.name === language);
  if (logoObject) {
    address = logoObject.logo;
  }

  // Function to truncate the name
  const truncateName = (name: string, maxLength: number) => {
    if (name.length > maxLength) {
      return name.slice(0, maxLength) + "...";
    }
    return name;
  };

  return (
    <div className={RepositoryStyle.repo_box} onClick={onClick}>
      <img
        src={address || GitHub}
        alt=""
        className={RepositoryStyle.repo_img}
      />
      <p className={RepositoryStyle.p}>{truncateName(name, 20)}</p>
    </div>
  );
};

export default RepoBox;
