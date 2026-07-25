export interface Content {
  _id: string;
  title: string;
  link: string;
  type: "article" | "youtube" | "twitter";
  createdAt: string;
}