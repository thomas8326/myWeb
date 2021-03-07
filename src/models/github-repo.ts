export default class GithubRepo {
  id!: number;

  full_name!: string;

  description!: string;

  html_url!: string;

  stargazers_count!: number;

  language!: string;

  license!: { key: string; name: string };

  updated_at!: string;
}
