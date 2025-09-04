import Frame8 from "../assets/Frame8.png";
import Frame9 from "../assets/AI created Realistic Professional man.jpeg";
import { Link, Element, scroller } from "react-scroll";
import { useNavigate } from "react-router-dom";
import PressButton from "../components/PressButton";

export default function Section4() {
  const navigate = useNavigate();

  return (
    <Element name="section4">
      <section className="px-6 md:px-10 py-12 md:py-16">
        <div className="bg-[#F2F4F3]  p-8 md:p-12 flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          <div className="flex-1 max-w-2xl">
            <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-6">
              See how we solve solutions effectively
            </h1>
            <p className="font-Poppins text-lg leading-relaxed mb-6 text-gray-700">
              At Landr, our focus is the Nigerian. The average people working
              extremely hard, but facing monstrous housing costs, that ought not
              to be so. We believe in our resolve to ensure everyone has a home.
            </p>
            <p className="font-Poppins font-bold text-lg mb-8 text-gray-800">
              - The team at Landr.
            </p>

            <div className="relative inline-block">
              {/* ************************* */}
              {/* ************************* */}
              {/* <div className="absolute top-1.5 left-1.5 w-full h-full bg-black rounded"></div> */}
              {/* <button
                onClick={() => navigate("/signup")}
                className="relative bg-green-300 border border-black text-black px-6 py-3 text-sm font-Poppins hover:bg-[#02C478] transition-colors rounded"
                style={{ width: "180px" }}
              >
                Get started
              </button> */}
              <PressButton
                onClick={() => navigate("/signup")}
                text="Get started"
                border="black"
                shadow="black"
              />
            </div>
          </div>

          <div className="flex-1 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[550px] aspect-[1.1/1]">
              <img
                src={Frame9}
                alt="Landr solutions illustration"
                className="absolute h-full w-full object-cover shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>
    </Element>
  );
}
