export class Repo {
  constructor(
    public name: string,
    public html_url: string,
    public description: string,
    public language: string,
    public watchers: number,
    public forks: number,
    public created_at: Date
  ) {}
}
