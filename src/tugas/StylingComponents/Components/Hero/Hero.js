import NavBar from "../NavBar/NavBar";
import SocialCons from "./Socialcons";

export default function Hero() {
  return (
    <div className="bg-hero h-[635px]">
      <div className="container mx-auto">
        <NavBar />
        <div className="text-center mt-10 lg:mt-32">
          <h1 className="text-white text-5xl font-semibold leading-relaxed">
            I'am <span className="text-yellow-500">Front</span> End{" "}
            <span className="text-yellow-500">Developer</span>
          </h1>
          <p className="text-white text-opacity-60 text-3xl leading-relaxed">
            Based <span className="text-yellow-500">in</span> Indonesia
          </p>
          <SocialCons variant="horizon" />
          <SocialCons variant="vertic" />
        </div>
      </div>
    </div>
  );
}
