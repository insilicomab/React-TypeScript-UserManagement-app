import { User } from "./api/user";

export type LoginUserType = User & { isAdmin: boolean };
