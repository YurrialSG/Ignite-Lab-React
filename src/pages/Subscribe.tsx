import { useState, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { Footer } from "../components/Footer";
import { Logo } from "../components/Logo";
import { useCreateSubscribeMutation } from "../graphql/generated";

export function Subscribe() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const [createSubscriber, { loading }] = useCreateSubscribeMutation();

  async function handleSubscribe(event: FormEvent) {
    event.preventDefault();

    await createSubscriber({
      variables: {
        name,
        email,
      },
    });

    navigate("/event");
  }

  return (
    <div className="min-h-screen bg-blur bg-cover bg-no-repeat flex flex-col items-center">
      <div className="w-full container max-w-[1100px] flex items-center justify-between text-center mt-10 flex-col mx-auto sm:mt-20 sm:flex-row sm:text-start">
        <div className="flex flex-col items-center max-w-[640px] w-11/12 sm:items-start">
          <Logo />

          <h1 className="mt-8 text-[1.9rem] max-w-[20rem] leading-tight sm:text-[2.5rem] sm:max-w-full">
            Construa uma{" "}
            <strong className="text-blue-500">aplicação completa</strong>, do
            zero, com <strong className="text-blue-500">React</strong>
          </h1>
          <p className="mt-6 mb-8 text-gray-200 sm:leading-relaxed sm:mt-4 sm:mb-0">
            Em apenas uma semana você vai dominar na prática uma das tecnologias
            mais utilizadas e com alta demanda para acessar as melhores
            oportunidades do mercado.
          </p>
        </div>

        <div className="w-full p-8 bg-gray-700 sm:border sm:border-gray-500 sm:rounded sm:max-w-sm">
          <strong className="text-start text-lg mb-6 block sm:text-2xl">
            Inscreva-se gratuitamente
          </strong>

          <form
            onSubmit={handleSubscribe}
            className="flex flex-col gap-2 w-full"
          >
            <input
              className="bg-gray-900 rounded px-5 h-14"
              type="text"
              placeholder="Seu nome completo"
              onChange={(event) => setName(event.target.value)}
            />
            <input
              className="bg-gray-900 rounded px-5 h-14"
              type="email"
              placeholder="Digite seu e-mail"
              onChange={(event) => setEmail(event.target.value)}
            />
            <button
              type="submit"
              disabled={loading}
              className="mt-4 bg-green-500 uppercase py-4 rounded font-bold text-sm hover:bg-green-700 disabled:opacity-50 transition-colors"
            >
              Garantir minha vaga
            </button>
          </form>
        </div>
      </div>
      <div className="flex py-3 items-center justify-center mx-auto sm:py-0">
        <div className="sm:mt-10 w-[98%] sm:w-full">
          <img
            src="/src/assets/code-mockup.png"
            className="w-full object-cover"
            alt="Imagem de code mockup"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}
