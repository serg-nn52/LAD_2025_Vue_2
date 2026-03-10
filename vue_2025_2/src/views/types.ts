export interface IPost {
  id: number;
  body: string;
  title: string;
  userId: number;
}

export interface IUser {
  id: number;
  name: string;
  username: string;
  email: string;
}
