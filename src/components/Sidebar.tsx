import Link from "next/link";
import { SearchBar } from "./SearchBar";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

export function Sidebar() {
  return (
    <div className="flex flex-col gap-3 py-3.5 sm:px-2">
      <SearchBar defaultText="" />
      <Card>
        <CardHeader>
          <CardTitle className="text-xl">Pingpad is in beta</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-2">
          <p>Welcome and Thank You for being here so early!</p>
          <p>
            If you encounter any bugs or wish to provide feedback, kindly report it to the{" "}
            <a
              className="hover:underline font-bold"
              href="https://github.com/pingpad-io/ping/issues"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </p>
        </CardContent>
      </Card>
      <Links />
    </div>
  );
}
const Links = () => {
  return (
    <div className="flex flex-col gap-1 text-xs ">
      <div className="flex flex-wrap h-fit w-fit gap-1 overflow-auto">
        <Link className="hover:underline" href={"/tos"}>
          ToS
        </Link>
        <Link className="hover:underline" href={"/policy"}>
          Privacy
        </Link>
        <Link href="https://github.com/pingpad-io/ping/" className="hover:underline" target="_blank" rel="noreferrer">
          GitHub
        </Link>
        <Link className="hover:underline" href={"/about"}>
          About
        </Link>
      </div>
      <span className="select-none">© 2024</span>
    </div>
  );
};
