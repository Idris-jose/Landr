
export default function Section5(){
    return(
        <section className="bg-[#F2F4F3] px-6 md:px-10 py-12 md:py-16">
            <div className="bg-[#02D482]  p-8 md:p-12">
                <div className="text-left mb-8">
                    <h1 className="text-white font-medium text-2xl md:text-3xl leading-tight mb-6">
                        It's time to take back our housing & truly start living.<br />
                        On our terms. With our means.
                    </h1>
                    <p className="font-Poppins text-white text-lg md:text-xl leading-relaxed">
                        Create an account today and let <span className="font-bold">Landr handle<br />
                        the rest. No stress & zero complications.</span>
                    </p>
                </div>

                <hr className="border-white/30 mb-8"/>
                
                <footer className="text-white flex flex-col md:flex-row justify-between items-center gap-4">
                    <div>
                        <p className="text-sm md:text-base">2025. Landr inc. all rights reserved</p>
                    </div>
                    <div className="flex gap-6">
                        <a href="#" className="text-sm md:text-base hover:text-white/80 transition-colors">Terms of service</a>
                        <a href="#" className="text-sm md:text-base hover:text-white/80 transition-colors">Privacy policy</a>
                    </div>
                </footer>
            </div>
        </section>
    )
}