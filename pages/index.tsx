import { Input } from "../components/Form/Input";

export default function SignIn() {
  return (
    <>
      <div className="flex w-screen h-screen items-center justify-center">
        <form
          className="flex w-full max-w-2sm bg-gray-800 p-8 rounded-lg 
          flex-col gap-3"
        >
          <Input name="email" label="Email" />
          <Input name="password" label="Password" />
          <button
            type="submit"
            className="mt-6 bg-pink-500 text-gray-50 p-3 rounded-md font-bold"
          >
            Entrar
          </button>
        </form>
      </div>
    </>
  );
}
