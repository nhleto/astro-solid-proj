import type { Component } from "solid-js";

const header: Component<{}> = (props) => {
  return (
    <nav class="flex flex-row justify-between m-5 font-medium text-xl">
      <section>
        <span>Favicon</span>
      </section>
      <section>Text</section>
    </nav>
  );
};

export default header;
