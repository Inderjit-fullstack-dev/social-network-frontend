export interface Post {
  id: number;
  postBody: string;
  userId: number;
  username: string;
  comments: Comment[];
  createDate: string;
}
