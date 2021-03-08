import React, { useEffect } from 'react';
import axios from 'axios';
import GithubRepo from 'src/models/github-repo';
import styled from 'styled-components';
import { StarFilled } from '@ant-design/icons';
import { getDateDiff } from 'src/utils/date.util';
import InfiniteScrollProps from 'src/models/infinite-scroll';
import { GIT_ACCESS_TOKEN } from 'src/constants/constants';
import { useDispatch, useSelector } from 'react-redux';
import ReduxStorage from 'src/models/storage';
import { fetchGetList } from 'src/reducers/github-repo.reducer';

const Repo = styled.div`
  margin: var(--margin-s);
  padding: var(--margin-m);
`;

const RepoStar = styled.div`
  align-items: center;
  width: 50px;
  margin: auto 0 auto auto;
`;

const RepoUpdateTime = styled.div`
  margin: auto 0 auto auto;
`;

export default function GithubRepoList(props: InfiniteScrollProps<{ searchName: string; page: number }>) {
  const { propsData, isLoadCompleted, isFetchingData } = props;
  const { searchName, page } = propsData;
  const dispatch = useDispatch();
  const repos = useSelector((store: ReduxStorage) => store.githubRepos);

  const getGitRepo = () => {
    isFetchingData && isFetchingData(true);

    axios
      .get<GithubRepo[]>(`https://api.github.com/users/${searchName}/repos`, {
        params: { page, per_page: 10 },
        headers: { Authorization: `token ${GIT_ACCESS_TOKEN}` },
      })
      .then((response) => {
        if (isLoadCompleted && !response.data.length) {
          isLoadCompleted(true);
          return;
        }

        dispatch(fetchGetList(response.data));
        isFetchingData && isFetchingData(false);
      });
  };

  const getStartCount = (starCount: number) => (starCount / 1000 > 1 ? `${(starCount / 1000).toFixed(1)}k` : starCount);

  useEffect(() => {
    getGitRepo();
  }, [page]);

  useEffect(() => {}, [searchName]);

  const goToGithub = (url: string) => window.open(url);

  const getRepoLanguage = (language: string) => (language ? `${language}．` : '');

  return (
    <>
      <ul className="reset-ul">
        {repos?.map((repo) => (
          <Repo className="shadow-card" key={repo.id} onClick={() => goToGithub(repo.html_url)}>
            <div className="flex-row">
              <span className="title-3">{repo.full_name}</span>
              <RepoStar className="flex-row">
                <StarFilled />
                <span className="L-margin-s">{getStartCount(repo.stargazers_count)}</span>
              </RepoStar>
            </div>
            <small className="small-text">{repo.description}</small>
            <div className="flex-row title-5">
              {getRepoLanguage(repo.language)}
              {repo?.license?.name}
              <RepoUpdateTime>{getDateDiff(repo.updated_at)}</RepoUpdateTime>
            </div>
          </Repo>
        ))}
      </ul>
    </>
  );
}
