import GithubRepo from 'src/models/github-repo';
import Conversation from 'src/models/conversation';
import Room from 'src/models/room';
import UserInfo from './user-info';

class ReduxStorage {
  userInfo!: UserInfo;

  rooms: Room[] = [];

  conversation!: Conversation;

  githubRepos: GithubRepo[] = [];
}

export default ReduxStorage;
