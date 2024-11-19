export type Filter = "all" | "todo" | "done";

export type Task = {
  id: string;
  title: string;
  done: boolean;
};