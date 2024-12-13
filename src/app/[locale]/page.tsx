import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import Image from "next/image";

export default function HomePage() {
  const t = useTranslations("Home");

  return (
    <div className="flex flex-col items-center justify-center bg-[url('/images/home-banner.jpg')] bg-cover bg-center h-[100vh] text-white text-center">
      <div className="flex items-center">
        <Image src="/icons/logo-01.svg" alt="logo" width={128} height={128} />
        <p className="text-5xl">{t("bannerHeader")}</p>
      </div>
      <div className="flex items-center gap-4 w-[40rem]">
        <div className="h-[2px] bg-white flex-1"></div>
        <Image
          src="/icons/shirt-button.svg"
          alt="shirt-button-icom"
          width={64}
          height={64}
        />
        <div className="h-[2px] bg-white flex-1"></div>
      </div>
      <Link href="/about" className="mt-2">
        <div className="transition duration-300 ease-in-out rounded-lg px-6 py-2 bg-[--primary] hover:bg-[#252525] text-white hover:text-[--primary]">
          {t("bannerButton")}
        </div>
      </Link>
    </div>
  );
}
