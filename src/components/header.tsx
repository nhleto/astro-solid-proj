import type { Component } from "solid-js";

const header: Component<{}> = (props) => {
  return (
    <nav class="max-sm:flex-col max-sm:items-center flex flex-row justify-between m-5 font-medium text-xl border-b-2 border-dosis pb-14">
      <section class="flex flex-col max-sm:my-3 max-sm:items-center">
        <span class="text-5xl">Henry Leto</span>
        <span class="text-xl">Full Stack Developer</span>
      </section>
      <section class="flex flex-row gap-3">
        <span class="cursor-pointer hover:text-highlight transition-colors h-fit">
          <a href="/">About</a>
        </span>
        {/* <span class="cursor-pointer hover:text-highlight transition-colors h-fit">
          <a href="/experience">Experience</a>
        </span> */}
        <span class="cursor-pointer hover:text-highlight transition-colors h-fit">
          Projects
        </span>
        <span class="cursor-pointer hover:text-highlight transition-colors h-fit">
          Contact
        </span>
        <span class="cursor-pointer hover:text-highlight transition-colors h-fit">
          <a target="_blank" href="https://github.com/nhleto">
            Github
          </a>
        </span>
      </section>
    </nav>
  );
};

export default header;
