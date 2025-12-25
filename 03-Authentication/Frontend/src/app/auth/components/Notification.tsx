export interface Notification {
  title: string;
  message: string;
  show: boolean;
}

interface NotificationProps {
  props: {
    notification: Notification;
    setNotification: (notification: Notification) => void;
  };
}

export const Notification = ({ props: { notification, setNotification } }: NotificationProps) => {
  const { title, message } = notification;

  return (
    <div className="absolute bg-neutral-900 px-4 py-2 top-4 left-4 w-100 ">
      <h1 className="font-bold">{title}</h1>
      <p className="mt-2">{message}</p>
      <button
        onClick={() => setNotification({ title: "", message: "", show: false })}
        className="bg-neutral-200 text-neutral-900 w-full mt-4"
      >
        Fechar notificação
      </button>
    </div>
  );
};
