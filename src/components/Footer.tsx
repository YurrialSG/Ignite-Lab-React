import { Rockeatseat } from "./Rockeatseat";

export function Footer() {
  return (
    <footer className="w-full py-6 flex flex-col itens-center justify-center  bg-gray-700 border-b border-gray-600">
      <div className="flex w-full flex-col items-center justify-center mx-auto sm:flex-row sm:justify-between sm:w-11/12">
        <div className="flex flex-col items-center sm:flex-row">
          <Rockeatseat />
          <p className="mt-4 text-sm text-gray-300 sm:mt-0 sm:ml-6">
            Rocketseat - Todos os direitos reservados
          </p>
        </div>
        <div>
          <a href="#" className="flex mt-4 text-sm text-gray-300 sm:mt-0">
            Políticas de privacidade
          </a>
        </div>
      </div>
    </footer>
  );
}
