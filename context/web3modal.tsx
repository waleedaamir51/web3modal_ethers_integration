'use client'

import { createWeb3Modal, defaultConfig } from '@web3modal/ethers5/react'


const projectId = '244e6c0ff6d6fd8b9d4b5d61e83a4f2f'


const mainnet = {
  chainId: 1,
  name: 'Ethereum',
  currency: 'ETH',
  explorerUrl: 'https://etherscan.io',
  rpcUrl: 'https://cloudflare-eth.com'
}


const metadata = {
  name: 'Web3Modal',
  description: 'Example',
  url: 'http://localhost:3000', 
  icons: ['https://avatars.mywebsite.com/']
}


const ethersConfig = defaultConfig({
  metadata,
  enableEIP6963: true, 
  enableInjected: true, 
  enableCoinbase: true, 
  rpcUrl: '...', 
  defaultChainId: 1 
})


createWeb3Modal({
  ethersConfig,
  chains: [mainnet,],
  projectId,
  enableAnalytics: true, 
  enableOnramp: true 
})

export function Web3Modal({ children }:any) {
  return children
}