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

const githubRepoReducer = (state = initState, action: ReduxAction<GithubRepo>): GithubRepo[] => {
  switch (action.type) {
    case FETCH_LIST:
      return [...state, ...action.payload];
    case SEARCH_NEW_GIT_REPO:
      return [...action.payload];
    default:
      return state;
  }
};

export default githubRepoReducer;
