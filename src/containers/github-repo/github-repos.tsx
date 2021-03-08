import React, { useState, KeyboardEvent } from 'react';
import InfiniteScroll from 'src/hoc/infinite-scroll';
import GithubRepoList from 'src/containers/github-repo/github-repo-list';
import InfiniteScrollProps from 'src/models/infinite-scroll';
import { useDispatch } from 'react-redux';
import { searchNewRepo } from 'src/reducers/github-repo.reducer';
import useEnterKey from 'src/utils/useKeyEnter';

export default function GithubRepos() {
  const [page, setPage] = useState<number>(1);
  const [searchName, setSearchName] = useState('');
  const dispatch = useDispatch();

  const updateThePage = (isLoaded: boolean) => isLoaded && setPage((prePage) => prePage + 1);

  const RepoList = InfiniteScroll<InfiniteScrollProps<{ searchName: string; page: number }>>(
    GithubRepoList,
    updateThePage,
  );

  return (
    <>
      <input
        type="text"
        defaultValue={searchName}
        onKeyUp={(e: KeyboardEvent<HTMLInputElement>) =>
          useEnterKey(() => {
            const text = e.currentTarget.value;
            if (text) {
              setSearchName(e.currentTarget.value);
              dispatch(searchNewRepo(e.currentTarget.value));
            }
          })(e)
        }
      />
      <RepoList propsData={{ searchName, page }} />
    </>
  );
}
