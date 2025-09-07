import Link from "next/link";
import Image from "next/image";
import { auth, signOut, signIn } from "@/auth";
import { BadgePlus, LogOut } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import PrimaryThemeToggle from "@/components/primary-theme-toggle";

const Navbar = async () => {
  const session = await auth();

  return (
    <header className="px-5 py-3 bg-white shadow-sm font-work-sans">
      <nav className="flex justify-between items-center" role="navigation" aria-label="Main navigation">
        <Link href="/" aria-label="YC Directory - Home">
          <Image src="/logo.png" alt="YC Directory Logo" width={144} height={30} />
        </Link>

        <div className="flex items-center gap-5 text-black">
          {session && session?.user ? (
            <>
              <PrimaryThemeToggle />
              <Link 
                href="/startup/create" 
                className="flex items-center gap-2 hover:underline focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded"
                aria-label="Create new startup pitch"
              >
                <span className="max-sm:hidden">Create</span>
                <BadgePlus size={24} className="sm:hidden" aria-hidden="true" />
              </Link>

              <form
                action={async () => {
                  "use server";

                  await signOut({ redirectTo: "/" });
                }}
              >
                <button 
                  type="submit"
                  className="flex items-center gap-2 hover:underline focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded cursor-pointer"
                  aria-label="Sign out of your account"
                >
                  <span className="max-sm:hidden">Logout</span>
                  <LogOut size={24} className="sm:hidden text-red-500" aria-hidden="true" />
                </button>
              </form>

              <Link 
                href={`/user/${session?.id}`}
                className="focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-full"
                aria-label={`View profile for ${session?.user?.name || 'user'}`}
              >
                <Avatar className="size-10">
                  <AvatarImage
                    src={session?.user?.image || ""}
                    alt={`Profile picture of ${session?.user?.name || 'user'}`}
                  />
                  <AvatarFallback aria-label="User avatar">
                    {session?.user?.name?.charAt(0) || 'U'}
                  </AvatarFallback>
                </Avatar>
              </Link>
            </>
          ) : (
            <form
              action={async () => {
                "use server";

                await signIn("github");
              }}
            >
              <button 
                type="submit"
                className="hover:underline focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded px-2 py-1 cursor-pointer"
                aria-label="Sign in with GitHub"
              >
                Login
              </button>
            </form>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

