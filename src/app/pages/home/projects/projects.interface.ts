export interface IProjectDTO {
  id: number;
  node_id: string;
  name: string;
  full_name: string;
  owner: {
    login: string;
    id: number;
    node_id: string;
    avatar_url: string;
    gravatar_id: string;
    url: string;
    html_url: string;
    followers_url: string;
    following_url: string;
    gists_url: string;
    starred_url: string;
    subscriptions_url: string;
    organizations_url: string;
    repos_url: string;
    events_url: string;
    received_events_url: string;
    type: string;
    site_admin: boolean;
  };
  private: boolean;
  html_url: string;
  description?: string | null;
  fork: boolean;
  url: string;
  archive_url: string;
  assignees_url: string;
  blobs_url: string;
  branches_url: string;
  collaborators_url: string;
  comments_url: string;
  commits_url: string;
  compare_url: string;
  contents_url: string;
  contributors_url: string;
  deployments_url: string;
  downloads_url: string;
  events_url: string;
  forks_url: string;
  git_commits_url: string;
  git_refs_url: string;
  git_tags_url: string;
  git_url?: null | undefined | '';
  issue_comment_url?: null | undefined | '';
  issue_events_url?: null | undefined | '';
  issues_url?: null | undefined | '';
  keys_url?: null | undefined | '';
  labels_url?: null | undefined | '';
  languages_url?: null | undefined | '';
  merges_url?: null | undefined | '';
  milestones_url?: null | undefined | '';
  notifications_url?: null | undefined | '';
  pulls_url?: null | undefined | '';
  releases_url?: null | undefined | '';
}

export interface IProject {
  description: string;
  repoUrl: string;
  name: string;
  imageUrl: string;
}
