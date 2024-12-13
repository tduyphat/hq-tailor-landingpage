"use client";

import Image from "next/image";
import { Link } from "@/i18n/routing";
import { usePathname } from "next/navigation";
import { twMerge } from "tailwind-merge";
import { useTranslations, useLocale } from "next-intl";
import { useMediaQuery } from "usehooks-ts";

import { routes } from "@/constant/routes";
import LanguageSwitcher from "../LanguageSwitcher";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import { useState } from "react";

const Header = () => {
  const pathname = usePathname();
  const currentLocale = useLocale();
  const t = useTranslations("Header");
  const isLg = useMediaQuery("(min-width: 1024px)");

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const stripLocale = (path: string) => {
    if (path.startsWith(`/${currentLocale}/`)) {
      return path.replace(`/${currentLocale}`, "");
    }
    if (path === `/${currentLocale}`) {
      return "/";
    }
    return path;
  };

  const normalizedPathname = stripLocale(pathname || "");

  return (
    <>
      {isLg ? (
        <div className="sticky top-0 bg-white p-6 flex items-center justify-between">
          <Link href="/">
            <Image src="/icons/logo-01.svg" alt="logo" width={64} height={64} />
          </Link>
          <div className="flex gap-12">
            {routes.map((r) => (
              <div
                key={r.url}
                className={twMerge(
                  normalizedPathname === r.url &&
                    "transition duration-300 ease-in-out border-b-2 border-black hover:border-[--primary]",
                  "transition duration-300 ease-in-out hover:text-[--primary]"
                )}
              >
                <Link href={r.url}>{t(r.text)}</Link>
              </div>
            ))}
          </div>
          <LanguageSwitcher />
        </div>
      ) : (
        <div className="sticky top-0 bg-white p-4 flex items-center justify-between">
          <Drawer open={isDrawerOpen} onOpenChange={setIsDrawerOpen}>
            <DrawerTrigger asChild>
              <button>
                <Image
                  src="/icons/hamburger.svg"
                  alt="hamburger"
                  width={24}
                  height={24}
                />
              </button>
            </DrawerTrigger>
            <DrawerContent>
              <div className="p-4">
                {routes.map((r) => (
                  <div key={r.url} className="py-4">
                    <Link
                      href={r.url}
                      className={twMerge(
                        normalizedPathname === r.url && "text-[--primary]",
                        "text-lg"
                      )}
                      onClick={() => setIsDrawerOpen(false)}
                    >
                      {t(r.text)}
                    </Link>
                  </div>
                ))}
              </div>
            </DrawerContent>
          </Drawer>
          <Link href="/">
            <Image src="/icons/logo-01.svg" alt="logo" width={48} height={48} />
          </Link>
          <LanguageSwitcher />
        </div>
      )}
    </>
  );
};

export default Header;
