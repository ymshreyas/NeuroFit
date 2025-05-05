// "use client";

// import { SignInButton, SignUpButton, UserButton, useUser } from "@clerk/nextjs";
// import { DumbbellIcon, HomeIcon, UserIcon, ZapIcon } from "lucide-react";
// import Link from "next/link";
// import { Button } from "./ui/button";

// const Navbar = () => {
//   const { isSignedIn } = useUser();

//   return (
//     <header className="fixed top-0 left-0 right-0 z-50 bg-background/60 backdrop-blur-md border-b border-border py-3">
//       <div className="container mx-auto flex items-center justify-between">
//         {/* LOGO */}
//         <Link href="/" className="flex items-center gap-2">
//           <div className="p-1 bg-primary/10 rounded">
//             <ZapIcon className="w-4 h-4 text-primary" />
//           </div>
//           <span className="text-xl font-bold font-mono">
//             Neuro<span className="text-primary">Fit</span>
//           </span>
//         </Link>

//         {/* NAVIGATION */}
//         <nav className="flex items-center gap-5">
//           {isSignedIn ? (
//             <>
//               <Link
//                 href="/"
//                 className="flex items-center gap-1.5 text-sm hover:text-primary transition-colors"
//               >
//                 <HomeIcon size={16} />
//                 <span>Home</span>
//               </Link>

//               <Link
//                 href="/profile"
//                 className="flex items-center gap-1.5 text-sm hover:text-primary transition-colors"
//               >
//                 <UserIcon size={16} />
//                 <span>Profile</span>
//               </Link>
//               <Button
//                 asChild
//                 variant="outline"
//                 className="ml-2 border-primary/50 text-primary hover:text-white hover:bg-primary/10"
//               >
//                 <Link href="/generate_program">
//                   <DumbbellIcon size={16} />
//                   Get Started
//                 </Link>
//               </Button>
//               <UserButton />
//             </>
//           ) : (
//             <>
//               <SignInButton>
//                 <Button
//                   variant={"outline"}
//                   className="border-primary/50 text-primary hover:text-white hover:bg-primary/10"
//                 >
//                   Sign In
//                 </Button>
//               </SignInButton>

//               <SignUpButton>
//                 <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
//                   Sign Up
//                 </Button>
//               </SignUpButton>
//             </>
//           )}
//         </nav>
//       </div>
//     </header>
//   );
// };
// export default Navbar;
"use client";

import { SignInButton, SignUpButton, UserButton, useUser } from "@clerk/nextjs";
import {
  DumbbellIcon,
  HomeIcon,
  UserIcon,
  ZapIcon,
  MenuIcon,
  XIcon,
} from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";
import { useState } from "react";

const Navbar = () => {
  const { isSignedIn } = useUser();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/60 backdrop-blur-md border-b border-border py-3">
      <div className="container mx-auto flex items-center justify-between">
        {/* LOGO */}
        <Link href="/" className="flex items-center gap-2">
          <div className="p-1 bg-primary/10 rounded">
            <ZapIcon className="w-4 h-4 text-primary" />
          </div>
          <span className="text-xl font-bold font-mono">
            Neuro<span className="text-primary">Fit</span>
          </span>
        </Link>

        {/* HAMBURGER MENU FOR SMALL SCREENS */}
        <button
          className="lg:hidden p-2 rounded-md text-primary hover:bg-primary/10"
          onClick={toggleMenu}
        >
          {isMenuOpen ? <XIcon size={20} /> : <MenuIcon size={20} />}
        </button>

        {/* NAVIGATION */}
        <nav
          className={`${
            isMenuOpen ? "block" : "hidden"
          } lg:flex lg:items-center lg:gap-5 absolute lg:static top-full left-0 w-full lg:w-auto bg-background lg:bg-transparent border-t lg:border-none border-border lg:py-0 py-3`}
        >
          {isSignedIn ? (
            <>
              <Link
                href="/"
                className="flex items-center gap-1.5 text-sm hover:text-primary transition-colors px-4 lg:px-0 py-2 lg:py-0"
              >
                <HomeIcon size={16} />
                <span>Home</span>
              </Link>

              <Link
                href="/profile"
                className="flex items-center gap-1.5 text-sm hover:text-primary transition-colors px-4 lg:px-0 py-2 lg:py-0"
              >
                <UserIcon size={16} />
                <span>Profile</span>
              </Link>
              <Button
                asChild
                variant="outline"
                className="ml-2 border-primary/50 text-primary hover:text-white hover:bg-primary/10 px-4 lg:px-0 py-2 lg:py-0"
              >
                <Link href="/generate_program">
                  <DumbbellIcon size={16} />
                  Get Started
                </Link>
              </Button>
              <div className="px-4 lg:px-0 py-2 lg:py-0">
                <UserButton />
              </div>
            </>
          ) : (
            <>
              <div className="px-4 lg:px-0 py-2 lg:py-0">
                <SignInButton>
                  <Button
                    variant={"outline"}
                    className="border-primary/50 text-primary hover:text-white hover:bg-primary/10"
                  >
                    Sign In
                  </Button>
                </SignInButton>
              </div>

              <div className="px-4 lg:px-0 py-2 lg:py-0">
                <SignUpButton>
                  <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                    Sign Up
                  </Button>
                </SignUpButton>
              </div>
            </>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
