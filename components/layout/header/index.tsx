import Button from "@/components/ui/button";
import { Icons } from "@/components/ui/icon";
import Text from "@/components/ui/text";
import NavBar from "./nav-bar";
import UserNavBar from "./user-navbar";
export default function Header() {
  return (
    <header>
      <main className="container mx-auto justify-center items-center">
        <div className="flex">
          <div className="flex gap-14">
            <div className="flex gap-1">
              <Icons.logo />
              <Text variant="xl" className="font-bold text-center">
                Gharsewa
              </Text>
            </div>
            <NavBar />
          </div>
          <UserNavBar />
          <Button variant="ghost" className="p-2 lg:hidden">
            <Icons.Menu size={30} />
          </Button>
        </div>
      </main>
    </header>
  );
}
