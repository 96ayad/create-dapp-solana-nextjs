'use client'
import { useEffect } from 'react';
import styles from './index.module.css';

import Link from "next/link";
import { FC } from "react";
import { useWallet } from "@solana/wallet-adapter-react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";

import { SolanaLogo } from "components";
// import styles from "./index.module.css";

export const JupiterView: FC = ({}) => {
  const { publicKey } = useWallet();

  const onClick = () => {};

  useEffect(() => {
    // Dynamically load the Jupiter script
    const script = document.createElement('script');
    script.src = "https://terminal.jup.ag/main-v2.js";
    script.onload = () => launchJupiter(); // Initialize Jupiter after the script loads
    document.head.appendChild(script);
  }, []);

  function launchJupiter() {
    if (window.Jupiter) {
      window.Jupiter.init({ 
        displayMode: "integrated",
        integratedTargetId: "integrated-terminal",
        // endpoint: "https://mainnet.helius-rpc.com/?api-key=YOUR_API_KEY_HERE",

        endpoint: "https://api.devnet.solana.com",
        strictTokenList: false,
        defaultExplorer: "SolanaFM",
        formProps: {
          initialAmount: "0.1",
          // initialInputMint: "DezXAZ8z7PnrnRJjz3wXBoRgixCa6xjnB7YaB1pPB263",

          initialInputMint: "So11111111111111111111111111111111111111112",
          
          initialOutputMint: "AZsHEMXd36Bj1EMNXhowJajpUXzrKcK57wW4ZGXVa7yR",
        },
      });
    } else {
      console.error("Jupiter script not loaded yet");
    }
  }

  return (
    
    <div className="container mx-auto max-w-6xl p-8 2xl:px-0">
      <div className={styles.container}>
        <div className="navbar mb-2 shadow-lg bg-neutral text-neutral-content rounded-box">
          <div className="flex-none">
            <button className="btn btn-square btn-ghost">
              <span className="text-4xl">🦤</span>
            </button>
          </div>
          <div className="flex-1 px-2 mx-2">
            <span className="text-lg font-bold">Caw Caw</span>
          </div>
          <div className="flex-none">
            <WalletMultiButton className="btn btn-ghost" />
          </div>
        </div>


        {/* <script src="https://terminal.jup.ag/main-v2.js"></script> */}

        <div className={styles.body}>
        <script src="https://terminal.jup.ag/main-v2.js" data-preload></script>

        <div id="integrated-terminal"></div>

        </div>
        

      </div>
    </div>
  );
};
