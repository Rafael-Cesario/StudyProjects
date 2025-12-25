interface HeaderProps {
  props: {
    activeForm: "login" | "create";
    setActiveForm: (formName: "login" | "create") => void;
  };
}

export const Header = ({ props: { activeForm, setActiveForm } }: HeaderProps) => {
  const textMap = {
    login: { title: "Ainda não tem uma conta?", button: "Criar conta" },
    create: { title: "Já tem uma conta?", button: "Entrar" },
  };

  const { title, button } = textMap[activeForm];

  return (
    <header className="flex justify-end items-center h-10 p-10 mb-8">
      <div className="flex">
        <p className="mr-2">{title}</p>
        <button className="text-blue-500">{button}</button>
      </div>
    </header>
  );
};
