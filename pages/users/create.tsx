import { Input } from "../../components/Form/Input";
import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";

export default function CreateUser() {
  return (
    <div>
      <Header />

      <div className="flex my-6 w-full max-w-[1480px] mx-auto px-6">
        <Sidebar />
        <div className="flex-1 rounded-lg bg-gray-800 p-8">
          <h2 className="font-normal text-lg">Criar usuário</h2>
          <hr />
          <div className="flex mt-16">
            <div className="grid gap-4 max-w-lg w-full">
              <Input name="name" label="Nome Completo" />
              <Input name="email" label="E-mail" type="email" />
            </div>

            <div className="grid gap-4 max-w-5xl w-full ml-14">
              <Input name="password" type="password" label="Senha" />
              <Input
                name="password_confirmation"
                type="password"
                label="Confirme sua senha"
              />
            </div>
          </div>
          <div className="flex mt-8 justify-end gap-4">
            <button
              className="bg-gray-600 text-gray-50 py-2 px-4 rounded-lg
              hover:bg-gray-500 transition-all"
            >
              Cancelar
            </button>
            <button
              className="bg-pink-500 text-gray-50 py-2 px-4 rounded-lg
            hover:bg-pink-400 transition-all"
            >
              Salvar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
