import { atom } from 'recoil';
import { User } from '../../interface/user.types';

export const userAtom = atom<User | null>({
  key: 'exampleAtom',
  default: null
});
