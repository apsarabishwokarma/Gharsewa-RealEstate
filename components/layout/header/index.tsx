import NavBar from "./nav-bar";
import UserNavBar from "./user-navbar";

export default function Header() {
  return (
    <>
      <main className="container mx-auto">
        <div className="flex items-center">
          <div>logo and name</div>
          <NavBar />
          <UserNavBar />
        </div>
      </main>
    </>
  );
}
