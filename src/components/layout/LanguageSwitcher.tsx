import React from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";

const LanguageSwitcher = () => {
  const pathname = usePathname();
  const t = useTranslations("Header");
  const router = useRouter();
  const currentLocale = useLocale();
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

  const handleSwitchLanguage = (locale: string) => {
    if (locale === currentLocale) return;
    const newPathname = pathname.replace(`/${currentLocale}`, `/${locale}`);

    router.push(newPathname);
  };

  return (
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
              onClick={() => handleSwitchLanguage(locale.value)}
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
  );
};

export default LanguageSwitcher;
