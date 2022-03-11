export class Recipe {
  constructor(
    private id: string,
    private title: string,
    private description: string,
    private date: string,
    private userId: string
    ) {}

    public getId(): string {
      return this.id
    }
    public getTitle(): string {
      return this.title
    }
    public getDescription(): string {
      return this.description
    }
    public getDate(): string {
      return this.date
    }

    public getUserId(): string {
      return this.userId
    }
}