import { User } from "./user";

export interface Credentials {
    accessToken: string;
    tokenType: string;
    user: User;
}
