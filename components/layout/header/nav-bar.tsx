import { headerData } from "@/data/navigation-data";
import Link from "next/link";

export default function NavBar() {
  return (
    <main>
      <div className="lg:flex hidden gap-4 items-center">
        {headerData.map(({ link, title }) => (
          <Link key={title} href={link} className="">
            {title}
          </Link>
        ))}
      </div>
    </main>
  );
}
