import { INotification } from "../interfaces/notificationInterface";

interface NotificationProps {
  props: INotification;
}

// Tasks:
// Button close notification

export const Notification = ({ props: { type, message } }: NotificationProps) => {
  const configs = {
    success: { title: "Sucesso", color: "text-green-500" },
    error: { title: "Algo deu errado", color: "text-red-500" },
  };

  return (
    <>
      <div className="absolute right-10 top-30 bg-neutral-900 p-4 w-xs rounded-lg border-2 border-neutral-800">
        <h1 className={`text-2xl ${configs[type].color} mb-2`}>{configs[type].title}</h1>
        <p className="text-neutral-300 mb-4">{message}</p>
        <button className="text-black bg-neutral-100 w-full rounded-md cursor-pointer">Confirmar</button>
      </div>
    </>
  );
};
