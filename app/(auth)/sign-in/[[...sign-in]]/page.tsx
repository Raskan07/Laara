import { SignIn } from "@clerk/nextjs";
import Image from 'next/image'


export default function Page() {
  return (
        <section className="bg-white">
        <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
            <aside className="relative block h-16 lg:order-last lg:col-span-5 lg:h-full xl:col-span-6">
            <img
                alt=""
                src="https://cdn.pixabay.com/photo/2023/04/15/21/58/ai-generated-7928669_960_720.jpg"
                className="absolute inset-0 h-full w-full object-cover"
            />
            </aside>

            <main
            className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6"
            >
            <div className="max-w-xl lg:max-w-3xl">
                <a className="block text-blue-600 absolute top-5 left-5 ">
                <Image  src={"/logo.png"} width={70}  height={70} alt="" />
                </a>

                <h1 className="mt-6 text-2xl  text-center font-bold text-gray-900 sm:text-3xl md:text-4xl mb-4">
                Welcome to  Laraa
                </h1>
                <SignIn />

            </div>
            </main>
        </div>
        </section>
  );
}