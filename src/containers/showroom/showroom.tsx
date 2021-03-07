import React from 'react';
import GlobalHeader from 'src/components/global-header';
import GithubRepos from 'src/containers/github-repo/github-repos';

function Showroom() {
  return (
    <>
      <GlobalHeader title="Show Room" />
      <main className="full-layout flex-col ">
        <GithubRepos />
      </main>
    </>
  );
}

export default Showroom;
