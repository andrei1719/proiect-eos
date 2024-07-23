import { User } from "./user";

export class Task {
    id: number | undefined;
    subject: string | undefined;
    dueDate: Date | undefined;
    status: TaskStatus | undefined;
    user: User | undefined;
}

export enum TaskStatus {
    NEW = 'NEW',
    IN_PROGRESS = 'IN PROGRESS',
    DONE = 'DONE'
}
