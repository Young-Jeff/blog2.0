'use client';

import React from 'react';

import { getCsrfToken, signIn } from 'next-auth/react';

import { SiweMessage } from 'siwe';
import { useAccount, useConnect, useSignMessage } from 'wagmi';
import { injected } from 'wagmi/connectors';

import { Button } from '@/components/ui/button';

import { PATHS } from '@/constants';

export async function getServerSideProps() {
  return {
    props: {
      csrfToken: await getCsrfToken(),
    },
  };
}
export const SignWithWallet = () => {
  const { signMessageAsync } = useSignMessage();
  const { address, isConnected, chain } = useAccount();
  const { connect, status } = useConnect();

  const signMsg: () => Promise<void> = React.useCallback(async () => {
    const message = new SiweMessage({
      domain: window.location.host,
      address: address,
      statement: 'Sign in with Ethereum to the app.',
      uri: window.location.origin,
      version: '1',
      chainId: chain?.id,
      nonce: await getCsrfToken(),
    });
    const signature = await signMessageAsync({
      message: message.prepareMessage(),
    });
    await signIn('credentials', {
      message: JSON.stringify(message),
      signature,
      redirectTo: PATHS.ADMIN_HOME,
    });
  }, [address, chain, signMessageAsync]);

  React.useEffect(() => {
    if (status === 'success') {
      signMsg().catch(() => ({}));
    }
  }, [status, signMsg]);

  const handleLogin = async () => {
    if (!isConnected) {
      connect({ connector: injected() });
      return;
    }
    await signMsg();
  };

  return (
    <Button
      variant="default"
      className="!w-full"
      type="button"
      onClick={() => handleLogin()}
    >
      Connect Wallet
    </Button>
  );
};
