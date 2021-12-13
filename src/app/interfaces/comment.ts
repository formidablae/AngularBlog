import { IUser } from "./user";

export interface IComment {
    id: number;
    text: string;
    created_at: string;
    updated_at: string;
    post_id: number;
    user: IUser;
}
