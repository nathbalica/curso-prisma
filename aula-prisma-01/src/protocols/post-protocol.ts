export type Post = {
  id: number;
  username: string;
  title: string;
  content: string;  // Renomeado de body para content
  createdAt: Date;  // Novo campo
}

export type ApplicationError = {
  name: string;
  message: string;
};