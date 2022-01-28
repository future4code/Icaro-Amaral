type UserTypes = {
    id: number;
    name: string;
    email: string;
    type: string;
    age: number;
  };
  
  enum TYPE {
    ADMIN = 'ADMIN',
    NORMAL = 'NORMAL',
  }
  
  export let users: UserTypes[] = [
    {
      id: 1,
      name: 'Evelim',
      email: 'evelimmg@email.com',
      type: TYPE.ADMIN,
      age: 28,
    },
    {
      id: 2,
      name: 'Vlad',
      email: 'vladslash1987@email.com',
      type: TYPE.NORMAL,
      age: 18,
    },
];