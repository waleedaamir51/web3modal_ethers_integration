"use client";

import { useWeb3Modal } from "@web3modal/ethers5/react";

export default function ConnectButton() {
  const { open } = useWeb3Modal();

  return (
    <>
      <button className="bg-slate-50 p-3 rounded-md text-black" onClick={() => open()}>Open Connect Modal</button>
      <button className="bg-red-500 p-3 rounded-md text-white" onClick={() => open({ view: "Networks" })}>
        Open Network Modal
      </button>
    </>
  );
}
