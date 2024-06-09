"use client";

import { LogOutIcon, MoonIcon, NetworkIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";
import dynamic from "next/dynamic";
import { toast } from "sonner";
import { useAccount, useDisconnect } from "wagmi";
import { Button } from "~/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { Label } from "~/components/ui/label";
import { Address } from "~/components/web3/Address";
import { LogoutButton } from "~/components/web3/WalletButtons";

const ConnectedWalletLabel = dynamic(() => import("~/components/web3/ConnnectedWalletLabel"), {
  ssr: false,
});

export const SettingsPage = () => {
  const { setTheme } = useTheme();

  const ping = () => {
    toast.success("pong!", {
      description: "also, it's not a real thing",
    });
  };

  const themeButtons = ["light", "dark"].map((theme) => (
    <Button
      data-theme={theme}
      type="submit"
      key={theme}
      variant={"secondary"}
      size="sm_icon"
      onClick={() => setTheme(theme)}
    >
      {theme === "dark" ? <MoonIcon size={20} className="sm:mr-2" /> : <SunIcon size={20} className="sm:mr-2" />}
      <div className="hidden sm:flex text-base">{theme}</div>
    </Button>
  ));

  return (
    <div className="space-y-4">
      {/* <ProfileSettings user={undefined} /> */}

      <Card className="hover:bg-card">
        <CardHeader>
          <CardTitle>App</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-2">
          <Label className="text-lg">Theme</Label>
          <span className="flex gap-2">{themeButtons}</span>
          <Label className="text-lg">Misc</Label>
          <Button variant="outline" size="sm_icon" onClick={ping}>
            <NetworkIcon size={20} className="sm:mr-2" />
            <div className="hidden sm:flex text-base">ping</div>
          </Button>
        </CardContent>
      </Card>

      <Card className="hover:bg-card">
        <CardHeader>
          <CardTitle>Account</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-4">
          <ConnectedWalletLabel />
          <LogoutButton />
        </CardContent>
      </Card>
    </div>
  );
};