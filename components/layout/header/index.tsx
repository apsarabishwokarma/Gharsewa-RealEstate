import { Icons } from "@/components/ui/icon";
import Text from "@/components/ui/text";
import NavBar from "./nav-bar";
import UserNavBar from "./user-navbar";

export default function Header() {
  return (
    <>
      <main className="container mx-auto">
        <div className="flex items-center">
          <div className="flex gap-1">
            <Icons.logo />
            <Text variant="xl" className="font-bold">
              Gharsewa
            </Text>
          </div>

          <NavBar />
          <UserNavBar />
        </div>
      </main>
    </>
  );
}
