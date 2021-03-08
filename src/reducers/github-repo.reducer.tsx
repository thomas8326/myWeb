import ReduxAction from 'src/models/action';
import GithubRepo from 'src/models/github-repo';

const initState: GithubRepo[] = [];

export const FETCH_LIST = 'FETCH_LIST';
export const SEARCH_NEW_GIT_REPO = 'SEARCH_NEW_GIT_REPO';

export function fetchGetList(list: GithubRepo[]): ReduxAction<GithubRepo> {
  return {
    type: FETCH_LIST,
    payload: list,
  };
}
export function searchNewRepo(key: string): ReduxAction<GithubRepo, string> {
  return {
    type: SEARCH_NEW_GIT_REPO,
    payload: [],
    object: key,
  };
}

const githubRepoReducer = (state = initState, action: ReduxAction<GithubRepo, string>): GithubRepo[] => {
  switch (action.type) {
    case FETCH_LIST:
      return [...state, ...action.payload];
    case SEARCH_NEW_GIT_REPO:
      return [];
    default:
      return state;
  }
};

export default githubRepoReducer;
