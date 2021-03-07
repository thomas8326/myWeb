import React, { useState } from 'react';
import InfiniteScroll from 'src/hoc/infinite-scroll';
import GithubRepoList from 'src/containers/github-repo/github-repo-list';

export default function GithubRepos() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [page, setPage] = useState<number>(1);
  const [searchName, setSearchName] = useState('facebook');
  const RepoList = InfiniteScroll<{ searchName: string; page: number }>(GithubRepoList);

  return (
    <>
      <button onClick={() => setPage(page + 1)} type="button">
        123
      </button>
      <input value={searchName} onInput={(e) => setSearchName(e.currentTarget.value)} />
      <RepoList searchName={searchName} page={page} />
    </>
  );
}
