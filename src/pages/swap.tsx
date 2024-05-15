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
      </Head>
      <JupiterView />
    </div>
  );
};

export default Swap;
