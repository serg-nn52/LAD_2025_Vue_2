export interface IClickCounterProps {
  title?: string;
}

export interface IClickCounterEmits {
  (e: 'decrement', count: number): void;
}

export interface IUser {
  name: string;
  age: number;
  role: string;
  img: string;
}

export interface IUserCardProps {
  user?: IUser;
}
