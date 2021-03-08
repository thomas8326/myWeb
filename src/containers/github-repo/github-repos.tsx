import React, { useState } from 'react';
import InfiniteScroll from 'src/hoc/infinite-scroll';
import GithubRepoList from 'src/containers/github-repo/github-repo-list';
import InfiniteScrollProps from 'src/models/infinite-scroll';

export default function GithubRepos() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [page, setPage] = useState<number>(1);
  const [searchName, setSearchName] = useState('facebook');

  const updateThePage = (isLoaded: boolean) => isLoaded && setPage((prePage) => prePage + 1);

  const RepoList = InfiniteScroll<InfiniteScrollProps<{ searchName: string; page: number }>>(
    GithubRepoList,
    updateThePage,
  );

  return (
    <>
      {page}
      <button onClick={() => setPage(page + 1)} type="button">
        123
      </button>
      <input value={searchName} onInput={(e) => setSearchName(e.currentTarget.value)} />
      <RepoList propsData={{ searchName, page }} />
    </>
  );
}
