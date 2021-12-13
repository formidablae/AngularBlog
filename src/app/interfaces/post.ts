import { IUser } from "./user";

export interface IPost {
    id: number;
    title: string;
    text: string;
    created_at: string;
    updated_at: string;
    comments_count: number;
    user: IUser;
}
