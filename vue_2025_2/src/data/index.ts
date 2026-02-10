interface IUser {
  id: string | number;
  name: string;
  age: number;
  role: string;
  img: string;
  titleAppend?: string;
  titlePrepend?: string;
}

// export const users: IUser[] = [];

export const users: IUser[] = [
  {
    name: 'Sergey',
    age: 40,
    role: 'Teacher',
    img: 'https://img.freepik.com/premium-photo/picture-boy-with-hoodie-that-says-hes_644690-179027.jpg',
    id: 0,
    titleAppend: '*Признан иноагентом',
  },
  {
    id: 1,
    name: 'Ilya',
    age: 30,
    role: 'Student',
    img: 'https://img.freepik.com/premium-photo/romantic-cartoonlike-3d-pixar-character-zhao-with-glasses_899449-139436.jpg',
    titlePrepend: 'Sisadmin',
  },
  {
    id: 2,
    name: 'Darya',
    age: 20,
    role: 'Student',
    img: 'https://img.freepik.com/premium-photo/romantic-cartoonlike-3d-pixar-character-zhao-with-glasses_899449-139436.jpg',
  },
];
