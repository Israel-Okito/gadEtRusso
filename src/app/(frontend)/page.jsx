import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b text-black border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 ">
          Bienvenue dans &nbsp;
          <code className="font-mono font-bold">Gad ET Russo service Sarl</code>
        </p>
      
      </div>

      <div className="relative  flex items-center"> 
      <p className="font-bold p-1">Avec nous souriez beaucoup grace à nos services </p>
        <Image
          className="relative rounded-full "
          src="/mac.jpg"
          alt="Next.js Logo"
          width={250}
          height={37}
          priority
        />
      </div>

      <div className="mb-32 grid text-center text-white  hover:text-black lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-3 lg:text-left ">
        <Link
          href="/materiel"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 "
        
        >
          <h2 className={`mb-3 text-2xl font-semibold hover:text-black`}>
            Docs{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Trouvez tout ce dont vous avez besoin pour votre setup informatique chez nous ! Des ordinateurs portables aux composants PC
          </p>
        </Link>

        <Link
          href="/technicien"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 "
          
        >
          <h2 className={`mb-3 text-2xl font-semibold text-hover hover:text-black`}>
             Techniciens{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
           Vous pouvez trouvé les techniciens pour la réparations de vos matériels chez nous
          </p>
        </Link>

        <a
          href="https://okito.vercel.app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 "
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold text-white hover:text-black`}>
            Aide développeur {" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
           Explorer le site du Freelancer en conception de sites Web
          </p>
        </a>

      
      </div>
    </main>
  );
}
