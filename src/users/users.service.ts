// src/items/items.service.ts

/**
 * Data Model Interfaces
 */
import { BaseUser, User } from "./user.interface";
import { Users } from "./users.interface";
/**
 * In-Memory Store
 */
let users: Users = {
  1: {
    id: 1,
    name: "Collin",
    auth0Id: "1",
  },
  2: {
    id: 2,
    name: "Alyssa",
    auth0Id: "2",
  },
  3: {
    id: 3,
    name: "Luna",
    auth0Id: "3",
  },
  4: {
    id: 4,
    name: "Millie",
    auth0Id: "4",
  },
};
/**
 * Service Methods
 */
export const findAll = async (): Promise<User[]> => Object.values(users);

export const find = async (id: number): Promise<User> => users[id];

export const create = async (newItem: BaseUser): Promise<User> => {
  const id = new Date().valueOf();

  users[id] = {
    id,
    ...newItem,
  };

  return users[id];
};
export const update = async (
  id: number,
  userUpdate: BaseUser
): Promise<User | null> => {
  const user = await find(id);

  if (!user) {
    return null;
  }

  users[id] = { id, ...userUpdate };

  return users[id];
};
export const remove = async (id: number): Promise<null | void> => {
  const user = await find(id);

  if (!user) {
    return null;
  }

  delete users[id];
};
