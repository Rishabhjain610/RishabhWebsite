// "use client";
// import React, { useState, useEffect } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import { cn } from "../../lib/utils";
// import { useTheme } from "next-themes";
// import { HiSun, HiMoon } from "react-icons/hi";
// import {
//   IoHomeOutline,
//   IoPeopleOutline,
//   IoCalendarOutline,
//   IoMailOutline,
//   IoTrophyOutline,
// } from "react-icons/io5";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const pathname = usePathname();
//   const { resolvedTheme, setTheme } = useTheme();
//   const [mounted, setMounted] = useState(false);

//   useEffect(() => {
//     setMounted(true);
//   }, []);

//   const currentTheme = mounted ? resolvedTheme : "light";
//   const logoSrc = currentTheme === "dark" ? "/LogoDark.png" : "/LogoLight.png";

//   const navLinks = [
//     { name: "Home", href: "/", icon: <IoHomeOutline size={20} /> },
//     { name: "Teams", href: "/teams", icon: <IoPeopleOutline size={20} /> },
//     { name: "Events", href: "/events", icon: <IoCalendarOutline size={20} /> },
//     { name: "Sponsors", href: "/sponsors", icon: <IoTrophyOutline size={20} /> },
//     { name: "Contact", href: "/contact", icon: <IoMailOutline size={20} /> },
//   ];

//   return (
//     <>
//       <nav
//         className={cn(
//           "fixed z-50 w-[95%] top-4 rounded-2xl -translate-x-1/2 left-1/2 border backdrop-blur-xl transition-colors duration-300",
//           "bg-white/60 dark:bg-black/50 border-black/50 dark:border-white/10",
//           "md:top-4 md:left-1/2 md:w-[65%] md:-translate-x-1/2 lg:rounded-full md:border"
//         )}
//       >
//         <div className="flex h-16 items-center justify-between px-4 md:px-6">
//           <Link href="/" className="flex items-center gap-2">
//             <Image 
//               src={logoSrc} 
//               alt="Website Logo" 
//               width={45} 
//               height={45} 
//               priority 
//               className="transition-opacity duration-300"
//             />
//           </Link>

//           <div className="hidden items-center gap-1 lg:flex">
//             {navLinks.map((link) => (
//               <Link
//                 key={link.name}
//                 href={link.href}
//                 className={cn(
//                   "flex items-center gap-2 rounded-full px-3 py-2 text-sm font-medium transition-colors duration-300",
//                   "text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white",
//                   pathname === link.href && "bg-gray-900/5 dark:bg-white/10 text-gray-900 dark:text-white"
//                 )}
//               >
//                 {link.icon}
//                 <span>{link.name}</span>
//               </Link>
//             ))}
//           </div>

//           <div className="flex items-center gap-2">
//             {/* Theme Toggle Button with Smooth Transition */}
//             <button
//               aria-label="Toggle theme"
//               onClick={() => setTheme(currentTheme === "dark" ? "light" : "dark")}
//               className={cn(
//                 "rounded-full p-2 transition-all duration-500 ease-in-out",
//                 "text-gray-700 dark:text-gray-300",
//                 "hover:bg-gray-900/5 dark:hover:bg-white/10",
//                 "hover:scale-110"
//               )}
//             >
//               <div className="relative w-[18px] h-[18px] flex items-center justify-center">
//                 {currentTheme === "dark" ? (
//                   <HiSun 
//                     size={18} 
//                     className="absolute transition-all duration-500 ease-in-out rotate-0 opacity-100"
//                   />
//                 ) : (
//                   <HiMoon 
//                     size={18} 
//                     className="absolute transition-all duration-500 ease-in-out opacity-100"
//                   />
//                 )}
//               </div>
//             </button>

//             <div className="flex lg:hidden">
//               <button
//                 onClick={() => setIsOpen(!isOpen)}
//                 type="button"
//                 className="relative z-50 inline-flex h-10 w-10 items-center justify-center rounded-full text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-300"
//                 aria-controls="mobile-menu"
//                 aria-expanded={isOpen}
//               >
//                 <span className="sr-only">Open main menu</span>
//                 <div className="relative h-5 w-5">
//                   <span
//                     className={cn(
//                       "absolute block h-0.5 w-5 transform bg-current transition duration-300 ease-in-out top-1/2 -translate-y-1/2",
//                       isOpen ? "rotate-45" : "-translate-y-1.5"
//                     )}
//                   />
//                   <span
//                     className={cn(
//                       "absolute block h-0.5 w-5 transform bg-current transition duration-300 ease-in-out top-1/2 -translate-y-1/2",
//                       isOpen && "opacity-0"
//                     )}
//                   />
//                   <span
//                     className={cn(
//                       "absolute block h-0.5 w-5 transform bg-current transition duration-300 ease-in-out top-1/2 -translate-y-1/2",
//                       isOpen ? "-rotate-45" : "translate-y-1.5"
//                     )}
//                   />
//                 </div>
//               </button>
//             </div>
//           </div>
//         </div>
//       </nav>

//       <div
//         className={cn(
//           "fixed inset-0 z-40 md:hidden transition-opacity duration-300",
//           isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
//         )}
//         onClick={() => setIsOpen(false)}
//       />

//       <div
//         className={cn(
//           "fixed left-1/2 top-24 z-50 w-[95%] sm:w-[65%] -translate-x-1/2 rounded-2xl border backdrop-blur-xl transition-all duration-300 ease-out lg:hidden",
//           "bg-white/90 dark:bg-black/60",
//           "border-black/50 dark:border-white/10",
//           isOpen
//             ? "opacity-100 translate-y-0 scale-100"
//             : "opacity-0 -translate-y-4 scale-95 pointer-events-none"
//         )}
//       >
//         <div className="p-6">
//           <nav className="flex flex-col gap-1">
//             {navLinks.map((link, index) => (
//               <Link
//                 key={link.name}
//                 href={link.href}
//                 onClick={() => setIsOpen(false)}
//                 className={cn(
//                   "flex items-center justify-between rounded-lg p-3 transition-all duration-200",
//                   "text-gray-700 dark:text-gray-300",
//                   pathname === link.href && "bg-gray-900/10 dark:bg-white/15 text-gray-900 dark:text-white",
//                   "hover:bg-gray-900/5 dark:hover:bg-white/10",
//                   isOpen
//                     ? "translate-x-0 opacity-100"
//                     : "translate-x-4 opacity-0"
//                 )}
//                 style={{
//                   transitionDelay: isOpen ? `${index * 50}ms` : "0ms",
//                 }}
//               >
//                 <div className="flex items-center gap-3">
//                   {link.icon}
//                   <span className="font-medium">{link.name}</span>
//                 </div>

//                 <span
//                   className={cn(
//                     "h-2 w-2 rounded-full bg-gray-900 dark:bg-white transition-all duration-200",
//                     pathname === link.href
//                       ? "opacity-100 scale-100"
//                       : "opacity-0 scale-75"
//                   )}
//                 />
//               </Link>
//             ))}
//           </nav>

//           <div className="pt-4 mt-4 border-t border-gray-200/20 dark:border-white/10">
//             <p className="text-xs text-gray-500 dark:text-gray-400 text-center">GDG TSEC © 2025</p>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Navbar;
"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "../../lib/utils";
import { useTheme } from "next-themes";
import { HiSun, HiMoon } from "react-icons/hi";
import {
  IoHomeOutline,
  IoPerson,
  IoRocketOutline,
  IoCode,
  IoMailOutline,
  IoBriefcaseOutline,
  IoStatsChartOutline,
  IoTrophy,
} from "react-icons/io5";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const currentTheme = mounted ? resolvedTheme : "light";
  const logoSrc = currentTheme === "dark" ? "/LogoDark.png" : "/LogoLight.png";

  const navLinks = [
    { name: "Home", href: "/", icon: <IoHomeOutline size={18} /> },
    { name: "About", href: "#About", icon: <IoPerson size={18} /> },
    { name: "Skills", href: "#Skills", icon: <IoCode size={18} /> },
    { name: "Projects", href: "#Projects", icon: <IoRocketOutline size={18} /> },
    { name: "Work", href: "#Work", icon: <IoBriefcaseOutline size={18} /> },
    { name: "Stats", href: "#Stats", icon: <IoStatsChartOutline size={18} /> },
    { name: "Achievements", href: "#Achievements", icon: <IoTrophy size={18} /> },
    { name: "Contact", href: "#Contact", icon: <IoMailOutline size={18} /> },
  ];

  return (
    <>
      <nav
        className={cn(
          "fixed z-50 w-[95%] top-5 rounded-2xl -translate-x-1/2 left-1/2 border-2 backdrop-blur-xl transition-all duration-300",
          "bg-[#F4F4F4]/50 dark:bg-[#121212]/70",
          "border-[#2E2E2E]/40 dark:border-[#E0E0E0]/30 hover:border-[#4A90E2]/60 dark:hover:border-[#4A90E2]/50 hover:shadow-lg hover:shadow-[#4A90E2]/10",
          "md:top-3 md:left-1/2 md:w-[70%] md:-translate-x-1/2 lg:rounded-full"
        )}
      >
        <div className="flex h-16 items-center justify-between px-4 md:px-8">
          <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity duration-300 flex-shrink-0">
            <Image 
              src={logoSrc} 
              alt="Website Logo" 
              width={48} 
              height={48} 
              priority 
              className="transition-opacity duration-300"
            />
          </Link>

          <div className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "flex items-center gap-1.5 rounded-full px-3 py-2 text-xs font-medium transition-all duration-300 border h-10 whitespace-nowrap",
                  "text-[#2E2E2E] dark:text-[#E0E0E0]",
                  pathname === link.href 
                    ? "bg-[#4A90E2]/20 text-[#4A90E2] border-[#4A90E2]/50 shadow-md shadow-[#4A90E2]/15" 
                    : "border-transparent hover:bg-[#4A90E2]/15 hover:text-[#4A90E2] hover:border-[#4A90E2]/40 hover:shadow-md hover:shadow-[#4A90E2]/10"
                )}
              >
                <span className="flex-shrink-0">{link.icon}</span>
                <span className="hidden xl:inline">{link.name}</span>
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-2">
            {/* Theme Toggle Button with Smooth Transition */}
            <button
              aria-label="Toggle theme"
              onClick={() => setTheme(currentTheme === "dark" ? "light" : "dark")}
              className={cn(
                "rounded-full p-2 transition-all duration-500 ease-in-out flex-shrink-0",
                "text-[#2E2E2E] dark:text-[#E0E0E0]",
                "hover:bg-[#4A90E2]/15 hover:text-[#4A90E2] hover:scale-110",
                "border border-transparent hover:border-[#4A90E2]/40 hover:shadow-md hover:shadow-[#4A90E2]/10",
                "w-10 h-10 flex items-center justify-center"
              )}
            >
              <div className="relative w-[18px] h-[18px] flex items-center justify-center">
                {currentTheme === "dark" ? (
                  <HiSun 
                    size={18} 
                    className="absolute transition-all duration-500 ease-in-out rotate-0 opacity-100"
                  />
                ) : (
                  <HiMoon 
                    size={18} 
                    className="absolute transition-all duration-500 ease-in-out opacity-100"
                  />
                )}
              </div>
            </button>

            <div className="flex lg:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className={cn(
                  "relative z-50 inline-flex h-10 w-10 items-center justify-center rounded-full transition-all duration-300 flex-shrink-0",
                  "text-[#2E2E2E] dark:text-[#E0E0E0]",
                  "hover:bg-[#4A90E2]/15 hover:text-[#4A90E2] hover:scale-105",
                  "border border-transparent hover:border-[#4A90E2]/40 hover:shadow-md hover:shadow-[#4A90E2]/10"
                )}
                aria-controls="mobile-menu"
                aria-expanded={isOpen}
              >
                <span className="sr-only">Open main menu</span>
                <div className="relative h-5 w-5">
                  <span
                    className={cn(
                      "absolute block h-0.5 w-5 transform bg-current transition duration-300 ease-in-out top-1/2 -translate-y-1/2",
                      isOpen ? "rotate-45" : "-translate-y-1.5"
                    )}
                  />
                  <span
                    className={cn(
                      "absolute block h-0.5 w-5 transform bg-current transition duration-300 ease-in-out top-1/2 -translate-y-1/2",
                      isOpen && "opacity-0"
                    )}
                  />
                  <span
                    className={cn(
                      "absolute block h-0.5 w-5 transform bg-current transition duration-300 ease-in-out top-1/2 -translate-y-1/2",
                      isOpen ? "-rotate-45" : "translate-y-1.5"
                    )}
                  />
                </div>
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div
        className={cn(
          "fixed inset-0 z-40 md:hidden transition-opacity duration-300 bg-black/20",
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
        onClick={() => setIsOpen(false)}
      />

      <div
        className={cn(
          "fixed left-1/2 top-28 z-50 w-[95%] -translate-x-1/2 rounded-2xl border-2 backdrop-blur-xl transition-all duration-300 ease-out lg:hidden",
          "bg-[#F4F4F4]/60 dark:bg-[#121212]/80",
          "border-[#2E2E2E]/40 dark:border-[#E0E0E0]/30 shadow-lg shadow-black/10 dark:shadow-black/30",
          isOpen
            ? "opacity-100 translate-y-0 scale-100"
            : "opacity-0 -translate-y-4 scale-95 pointer-events-none"
        )}
      >
        <div className="p-5 max-h-[70vh] overflow-y-auto">
          <nav className="flex flex-col gap-1.5">
            {navLinks.map((link, index) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "flex items-center justify-between rounded-lg px-3 py-2.5 transition-all duration-200 border text-sm",
                  "text-[#2E2E2E] dark:text-[#E0E0E0]",
                  pathname === link.href 
                    ? "bg-[#4A90E2]/20 text-[#4A90E2] border-[#4A90E2]/50 shadow-md shadow-[#4A90E2]/20" 
                    : "border-transparent hover:bg-[#4A90E2]/15 hover:text-[#4A90E2] hover:border-[#4A90E2]/40 hover:shadow-md hover:shadow-[#4A90E2]/15",
                  isOpen
                    ? "translate-x-0 opacity-100"
                    : "translate-x-4 opacity-0"
                )}
                style={{
                  transitionDelay: isOpen ? `${index * 50}ms` : "0ms",
                }}
              >
                <div className="flex items-center gap-2.5">
                  <span className="flex-shrink-0">{link.icon}</span>
                  <span className="font-medium">{link.name}</span>
                </div>

                <span
                  className={cn(
                    "h-2 w-2 rounded-full bg-[#4A90E2] transition-all duration-200 flex-shrink-0",
                    pathname === link.href
                      ? "opacity-100 scale-100"
                      : "opacity-0 scale-75"
                  )}
                />
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;