import { test as base } from '@playwright/test';

export type Users = {
  username: string;
  password: string;
};

export type TestOptions = {
  users: Users[];
};

export const test = base.extend<TestOptions>({
  users: async ({}, use) => {
    await use([
      { username: 'standard_user', password: 'secret_sauce' },
      { username: 'locked_out_user', password: 'secret_sauce' },
      { username: 'problem_user', password: 'secret_sauce' },
    ]);
  },
});