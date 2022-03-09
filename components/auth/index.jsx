import { useRef, useState, useEffect } from "react";
import Image from "next/image";

import Button from "../ui/button";
import AuthMessage from "../ui/feedback/auth-message";
import Socials from "../ui/socials";
import Link from "next/link";

export default function Authentication({ path }) {
  const [message, setMessage] = useState({ text: "", variant: "" });
  const [loading, setLoading] = useState(false);

  console.log();

  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();

  useEffect(() => {
    const timer = setTimeout(() => {
      setMessage({ text: "", variant: "" });
    }, 3000);

    return () => clearTimeout(timer);
  }, [message]);

  async function handlerFormSubmision(event) {
    event.preventDefault();

    if (path === "signup") {
      const enteredName = nameRef.current.value;
      const enteredEmail = emailRef.current.value;
      const enteredPassword = passwordRef.current.value;

      try {
        const response = await fetch("/api/auth/signup", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: enteredEmail,
            email: enteredEmail,
            password: enteredPassword,
          }),
        });

        const data = await response.json();

        if (!response.ok) throw new Error(data.message || "Algo deu errado!");
      } catch (error) {
        setMessage({ text: error.message, variant: "error" });
      }
    }
  }

  return (
    <section className="w-full  h-screen flex flex-col lg:flex-row">
      <div className="relative w-full lg:w-2/4 h-2/6 lg:h-full">
        <Image
          src="/images/auth.jpg"
          alt="auth image"
          message
          layout="fill"
          objectFit="cover"
        />
        <div className="absolute text-center w-full top-32 lg:top-72 lg:text-5xl text-3xl text-white font-bold">
          {path === "signin" ? (
            <h1>
              <span className="border-b-4 border-primary">Lo</span>gin
            </h1>
          ) : (
            <h1>
              <span className="border-b-4 border-primary">Cada</span>stro
            </h1>
          )}
        </div>
      </div>

      <div className="w-full lg:w-2/4 lg:mt-36">
        <p className="absolute top-10 right-10 text-primary font-semibold">
          <Link href="/" passHref>
            Voltar
          </Link>
        </p>

        {message.text.length != 0 && (
          <AuthMessage variant={message.variant} message={message.text} />
        )}
        <form
          onSubmit={handlerFormSubmision}
          className="my-0 mx-auto w-9/12 md:w-2/4	p flex justify-center items-start flex-col mt-20"
        >
          {path === "signup" && (
            <input
              className="w-full bg-customGrey focus:bg-customGrey2 rounded p-3 mb-4"
              type="text"
              placeholder="Nome"
              ref={nameRef}
            />
          )}
          <input
            className="w-full bg-customGrey focus:bg-customGrey2 rounded p-3 mb-4"
            type="text"
            placeholder="Email"
            ref={emailRef}
          />
          <input
            className="w-full bg-customGrey focus:bg-customGrey2 rounded p-3 mb-4"
            type="password"
            placeholder="Senha"
            ref={passwordRef}
          />
          <Button className="bg-primary text-white rounded py-3 px-5">
            {path === "signin" ? "Entrar" : "Cadastrar"}
          </Button>
        </form>
        <Socials />
      </div>
    </section>
  );
}
