import React, { useState } from 'react';
import InfiniteScroll from 'src/hoc/infinite-scroll';
import GithubRepoList from 'src/containers/github-repo/github-repo-list';
import InfiniteScrollProps from 'src/models/infinite-scroll';
import { useDispatch } from 'react-redux';
import { searchNewRepo } from 'src/reducers/github-repo.reducer';
import throttle from 'src/utils/throttle';

export default function GithubRepos() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [page, setPage] = useState<number>(1);
  const [searchName, setSearchName] = useState('facebook');
  const dispatch = useDispatch();

  const updateThePage = (isLoaded: boolean) => isLoaded && setPage((prePage) => prePage + 1);

  const onSearch = throttle((key) => {
    dispatch(searchNewRepo(key));
    setSearchName(key);
  }, 450);

  const RepoList = InfiniteScroll<InfiniteScrollProps<{ searchName: string; page: number }>>(
    GithubRepoList,
    updateThePage,
  );

  return (
    <>
      <input value={searchName} onChange={(e) => onSearch(e.currentTarget.value)} />
      <RepoList propsData={{ searchName, page }} />
    </>
  );
}
