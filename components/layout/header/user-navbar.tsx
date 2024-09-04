import Button from "@/components/ui/button";

export default function UserNavBar() {
  return (
    <main className="container mx-auto">
      <div className="lg:flex gap-4 hidden items-center">
        <Button variant="secondary" size="md">
          Login
        </Button>
        <Button variant="primary" size="md">
          Sign Up
        </Button>
      </div>
    </main>
  );
}
