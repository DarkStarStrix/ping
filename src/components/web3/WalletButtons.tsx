"use client";

import { useLogout } from "@lens-protocol/react-web";
import { GlobeIcon, LogInIcon, LogOutIcon, UserMinusIcon } from "lucide-react";
import { type PropsWithChildren, useState } from "react";
import { useAccount, useConnect, useDisconnect } from "wagmi";
import { WalletConnectIcon } from "../Icons";
import { Button } from "../ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog";
import { Address } from "./Address";
import { LensProfileSelect } from "./LensProfileSelect";
import { clearCookies } from "./LogOut";

export function ConnectWalletButton() {
  const [dialogOpen, setDialogOpen] = useState(false);
  const { connectors, connect } = useConnect();
  const { isConnected: walletConnected, address } = useAccount();
  const { disconnect } = useDisconnect();

  const connectorList = connectors.map((connector) => {
    if (connector.id !== "injected" && connector.id !== "walletConnect") return null;
    const name = connector.id === "injected" ? "Browser Wallet" : "Wallet Connect";
    const icon = connector.id === "injected" ? <GlobeIcon strokeWidth={1.1} size={26} /> : <WalletConnectIcon />;
    return (
      <Button
        className="w-full flex flex-row justify-between"
        variant="outline"
        key={connector.uid}
        onClick={() => connect({ connector })}
      >
        {name}
        {icon}
      </Button>
    );
  });

  return (
    <Dialog open={dialogOpen}>
      <DialogTrigger asChild>
        <Button size="sm_icon" onClick={(_e) => setDialogOpen(true)}>
          <div className="hidden sm:flex text-xl -mt-1">connect</div>
          <LogInIcon className="sm:ml-2" size={20} />
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-sm flex flex-col justify-center">
        <DialogHeader>
          <DialogTitle>{!walletConnected ? "Select a wallet to connect" : "Select a Profile"}</DialogTitle>
          {walletConnected && (
            <DialogDescription className="flex flex-row gap-2 items-center">
              Connected wallet: <Address address={address} />
              <Button size="icon" className="w-4 h-4" variant="ghost" onClick={(_e) => disconnect()}>
                <LogOutIcon />
              </Button>
            </DialogDescription>
          )}
        </DialogHeader>

        {!walletConnected ? <>{connectorList}</> : <LensProfileSelect setDialogOpen={setDialogOpen} />}
      </DialogContent>
    </Dialog>
  );
}

export function DisconnectWalletButton(props: PropsWithChildren) {
  const { isConnected } = useAccount();
  const { disconnect } = useDisconnect();

  if (!isConnected) {
    return null;
  }

  return (
    <Button variant="destructive" size="sm_icon" onClick={(_e) => disconnect()}>
      <div className="hidden sm:flex text-base">{props.children}</div>
    </Button>
  );
}

export function LogoutButton() {
  const { execute: disconnect } = useLogout();

  return (
    <Button
      variant="destructive"
      onClick={() => {
        disconnect();
        clearCookies();
      }}
    >
      <UserMinusIcon size={20} className="sm:mr-2" />
      Log out
    </Button>
  );
}
