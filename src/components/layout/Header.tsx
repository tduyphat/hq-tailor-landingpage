"use client";
import { routes } from "@/constant/routes";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import Image from "next/image";
import { Link } from "@/i18n/routing";
import { usePathname, useRouter } from "next/navigation";
import { twMerge } from "tailwind-merge";
import { useTranslations, useLocale } from "next-intl";

const Header = () => {
  const router = useRouter();
  const pathname = usePathname();
  const currentLocale = useLocale();
  const t = useTranslations("Header");

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

  const locales = [
    {
      value: "en",
      text: "english",
    },
    {
      value: "vi",
      text: "vietnamese",
    },
  ];

  const switchLanguage = (locale: string) => {
    if (locale === currentLocale) return;
    const newPathname = pathname.replace(`/${currentLocale}`, `/${locale}`);

    router.push(newPathname);
  };

  return (
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
      <Popover>
        <PopoverTrigger>
          <Image
            src={`/icons/${currentLocale}-flag.svg`}
            alt={currentLocale}
            width={24}
            height={24}
          />
        </PopoverTrigger>
        <PopoverContent>
          <div className="flex flex-col gap-2">
            {locales.map((locale) => (
              <div
                key={locale.value}
                onClick={() => switchLanguage(locale.value)}
                className="flex items-center gap-2 hover:text-[--primary] cursor-pointer"
              >
                <Image
                  src={`/icons/${locale.value}-flag.svg`}
                  alt={locale.value}
                  width={16}
                  height={16}
                />
                {t(locale.text)}
              </div>
            ))}
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default Header;
