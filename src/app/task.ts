import { User } from "./user";

export class Task {
    id: number | undefined;
    subject: string | undefined;
    dueDate: Date | undefined;
    status: TaskStatus | undefined;
    userID: number | undefined;
}

export enum TaskStatus {
    New = 'NEW',
    InProgress = 'IN PROGRESS',
    DONE = 'DONE'
}
