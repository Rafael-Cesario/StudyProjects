export interface ITodo {
  id: string;
  title: string;
  notes: string | null;
  createdAt: Date;
}

export interface ITodoCreate {
  title: string;
  notes: string | null;
}

export interface ITodoGetOne {
  id: string;
}

export interface ITodoUpdate {
  id: string;
  title: string;
  notes: string;
}

export interface ITodoRemove {
  id: string;
}
