export interface INotification {
  show: boolean;
  type: "success" | "error";
  message: string;
}
