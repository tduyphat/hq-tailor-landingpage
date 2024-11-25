"use client";

import Image from "next/image";
import { Link } from "@/i18n/routing";
import { usePathname } from "next/navigation";
import { twMerge } from "tailwind-merge";
import { useTranslations, useLocale } from "next-intl";
import { useMediaQuery } from "usehooks-ts";

import { routes } from "@/constant/routes";
import LanguageSwitcher from "./LanguageSwitcher";

const Header = () => {
  const pathname = usePathname();
  const currentLocale = useLocale();
  const t = useTranslations("Header");
  const isLg = useMediaQuery("(min-width: 1024px)");

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
                    "border-b-2 border-black hover:border-[--primary]",
                  "hover:text-[--primary]"
                )}
              >
                <Link href={r.url}>{t(r.text)}</Link>
              </div>
            ))}
          </div>
          <LanguageSwitcher />
        </div>
      ) : (
        <div className="sticky top-0 bg-white p-6 flex items-center justify-center">
          <Link href="/">
            <Image src="/icons/logo-01.svg" alt="logo" width={64} height={64} />
          </Link>
        </div>
      )}
    </>
  );
};

export default Header;
