import { User } from "./User.type";

export interface Glide {
  id: string;
  content: string;
  user: User;
  likesCount: number;
  subglidesCount: number;
  date: Date;
}
