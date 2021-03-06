import { user } from '../Models/typeUser';
import { BaseDataBase } from './connectionData';

export class UserDataBase extends BaseDataBase {
  signupUser = async (user: user) => {
    await BaseDataBase.connection('labook_users').insert({
      id: user.id,
      name: user.name,
      email: user.email,
      password: user.password,
    });
  };

  selectUserByEmail = async (email: string) => {
    const user: any = await BaseDataBase.connection('labook_users')
      .select('*')
      .where({ email });

    return user[0];
  };
}