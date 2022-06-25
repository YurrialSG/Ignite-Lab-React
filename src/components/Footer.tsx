import { Rockeatseat } from "./Rockeatseat";

export function Footer() {
  return (
    <footer className="w-full py-6 flex flex-col itens-center justify-center bg-gray-700 border-b border-gray-600">
      <div className="flex flex-col items-center">
        <Rockeatseat />
        <p className="mt-4 text-sm text-gray-300">
          Rocketseat - Todos os direitos reservados
        </p>
      </div>
      <div className="flex flex-col items-center">
        <p className="mt-4 text-sm text-gray-300">Políticas de privacidade</p>
      </div>
    </footer>
  );
}
