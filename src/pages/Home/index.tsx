

export const Home: React.FC = ()=>{

    return(

        <div className="flex flex-col w-full py-4 items-center justify-center">

            <strong className="md:text-4xl text-3xl font-bold text-white mt-20">Alan Mestezk</strong>

            <span  className="text-gray-50 md-5 mt-3 font-bold">Veja meus links 👇</span>

            <main className="flex flex-col w-11/12 max-w-xl text-center mt-8">

                <section className="bg-white mb-4 w-full py-2 rounded-lg select-none transition-transform hover:scale-105 cursor-pointer">

                    <a href="">
                        <p className="text-base font-bold md:text-lg">Canal Youtube</p>
                    </a>

                </section>

                <footer className="flex justify-center gap-3 my-4">

                </footer>

            </main>

        </div>
    )
}