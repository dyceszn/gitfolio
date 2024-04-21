import React from "react";
import "./styles/card.css";

const RepoCard = ({ repo, username }) => {
  return (
    <div>
      <div className="card-box">
        <div className="card-row card-row-1">
          <a
            href={`https://github.com/${username}/${repo.name}`}
            target="blank"
          >
            <h1>Repository Name: {repo.name}</h1>
          </a>
          <hr />
          <p>Primary Language: {repo.language}</p>
          <p>Last Updated: {repo.updated_at}</p>
        </div>
        <div className="card-row card-row-2">
          <button className="card-delete-button">Delete</button>
        </div>
      </div>
    </div>
  );
};

export default RepoCard;
