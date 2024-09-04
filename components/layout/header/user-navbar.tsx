import Button from "@/components/ui/button";

export default function UserNavBar() {
  return (
    <main className="container mx-auto">
      <div className="lg:flex hidden items-center">
        <Button type="secondary" size="medium">
          Login
        </Button>
        <Button type="primary" size="medium">
          Sign Up
        </Button>
      </div>
    </main>
  );
}
