import type { Component } from "solid-js";

const main: Component<{}> = (props) => {
  return (
    <section>
      <div class="flex items-center flex-col">
        <h1 class="text-4xl">About Me</h1>
        <div class="flex flex-col gap-4 text-xl">
          <p>
            Hi! I'm Henry Leto, a full stack software developer, specializing in
            backend technology, with experience in
          </p>
          <p>
            I have a passion for programming and love <i>creating</i> things,
            from command-line games to fullstack websites. Computer programming
            is my creative outlet.
          </p>
          <p>
            When I'm not coding I enjoy working out, reading, and playing
            videogames.
          </p>
        </div>
      </div>
    </section>
  );
};

export default main;
