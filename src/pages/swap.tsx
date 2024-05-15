import type { NextPage } from "next";
import Head from "next/head";
import { JupiterView } from "../views";

const Swap: NextPage = (props) => {
  return (
    <div>
      <Head>
        <title>Caw Caw!</title>
        <meta
          name="description"
          content="This site will fly high 🦤"
        />
                <script src="https://terminal.jup.ag/main-v2.js" data-preload></script>

      </Head>
      <JupiterView />
    </div>
  );
};

export default Swap;
