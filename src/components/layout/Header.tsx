"use client";
import { routes } from "@/constant/routes";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { twMerge } from "tailwind-merge";

const Header = () => {
  const pathname = usePathname();

  return (
    <div className="sticky top-0 bg-white p-6 flex items-center justify-between">
      <Link href="/">
        <Image src="/logos/logo-01.svg" alt="logo" width={64} height={64} />
      </Link>
      <div className="flex gap-12">
        {routes.map((r) => (
          <div
            key={r.url}
            className={twMerge(
              pathname === r.url &&
                "border-b-2 border-black hover:border-[--primary]",
              "hover:text-[--primary]"
            )}
          >
            <Link href={r.url}>{r.text}</Link>
          </div>
        ))}
      </div>
      <Popover>
        <PopoverTrigger>English</PopoverTrigger>
        <PopoverContent>
          <div className="flex flex-col gap-2">
            <div>English</div>
            <div>Vietnamese</div>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
};
export default Header;
