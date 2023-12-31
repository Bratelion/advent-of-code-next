import { HeartIcon } from "@heroicons/react/20/solid";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="max-w-md px-4 py-6 mx-auto overflow-hidden md:py-8 lg:py-12 sm:px-6 lg:px-8" >
      <div className="flex flex-col gap-2">
        <p className="flex items-center justify-center text-base text-zinc-400 gap-x-2">
          <a
            href="https://github.com/MartinSeeler/advent-of-code-next"
            target={"_blank"}
            rel="noopener noreferrer"
            className="a-defaults"
          >
            View template on GitHub
          </a>
        </p>
        <p className="flex items-center justify-center text-base text-zinc-400 gap-x-2">
          <span>Made with</span>
          <HeartIcon aria-hidden="true" className="w-4 h-4 mx-1 text-red-500" />
          <span>by</span>
          <a
            href="https://martinseeler.com?utm_source=aoc2022&utm_medium=footer"
            target={"_blank"}
            rel="noopener noreferrer"
            className="a-defaults"
          >
            Martin Seeler
          </a>
        </p>
      </div>
    </footer>
  );
};
export default Footer;
