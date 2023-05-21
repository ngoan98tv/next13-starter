import { ListOptions } from "./shared";

export interface User {
  id: string;
  displayName: string;
  username: string;
  email: string;
  tel: string;
  avatar: string;
}

export interface UserCreateInput extends Omit<User, "id"> {}

export interface UserUpdateInput extends Partial<UserCreateInput> {}

export interface UserFilterParams extends ListOptions<User> {}
