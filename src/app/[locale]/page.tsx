import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import Image from "next/image";

import { charm } from "./layout";
import { sourceSans3 } from "./layout";

export default function HomePage() {
  const t = useTranslations("Home");

  return (
    <div className="flex flex-col gap-40">
      <div className="flex flex-col items-center justify-center bg-[url('/images/home-banner.jpg')] bg-cover bg-center h-[100vh] text-white text-center">
        <div className="flex items-center">
          <Image src="/icons/logo-01.svg" alt="logo" width={128} height={128} />
          <p className={`${charm.className} text-5xl`}>{t("bannerHeader")}</p>
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
      <div className="lg:grid grid-cols-2 mx-10">
        <div className="flex flex-col justify-center items-center gap-4 lg:my-0 my-10">
          <div className="flex flex-col items-center">
            <p className={`${charm.className} text-5xl text-[--primary]`}>
              {" "}
              {t("section1HeaderLine1")}
            </p>
            <p className={`${sourceSans3.className} font-light text-shadow-sm text-3xl text-center`}> {t("section1HeaderLine2")}</p>
          </div>
          <Image
            src="/icons/shirt-button.svg"
            alt="shirt-button-icom"
            width={32}
            height={32}
          />
          <p className="text-center lg:w-[40rem]">{t("section1Content")}</p>
          <Link href="/about">
            <div className="transition duration-300 ease-in-out p-1 border-b-2 border-[--primary] text-[--primary] hover:text-[#252525] hover:border-[#252525]">
              {t("section1Button")}
            </div>
          </Link>
        </div>
        <div className="md:flex gap-8">
          <Image
            src="/images/home-section1-1.jpg"
            alt="home-section1-pic1"
            width={576}
            height={768}
          />
          <Image
            src="/images/home-section1-2.jpg"
            alt="home-section2-pic2"
            width={576}
            height={768}
          />
        </div>
      </div>
      <div className="flex lg:flex-row lg:gap-0 gap-10 flex-col justify-between mx-10">
        <Image
          src="/images/home-section2-1.jpg"
          alt="home-section1-pic1"
          width={768}
          height={576}
        />
        <Image
          src="/images/home-section2-2.jpg"
          alt="home-section2-pic2"
          width={768}
          height={576}
        />
      </div>
      <div className="flex flex-col justify-center items-center gap-4 lg:my-0 my-10">
        <div className="flex flex-col items-center">
          <p className={`${charm.className} text-5xl text-[--primary]`}>
            {" "}
            {t("section2HeaderLine1")}
          </p>
          <p className={`${sourceSans3.className} font-light text-shadow-sm text-3xl text-center`}> {t("section2HeaderLine2")}</p>
        </div>
        <Image
          src="/icons/shirt-button.svg"
          alt="shirt-button-icom"
          width={32}
          height={32}
        />
        <p className="text-center lg:w-[40rem]">{t("section2Content")}</p>
        <Link href="/alterations">
          <div className="transition duration-300 ease-in-out p-1 border-b-2 border-[--primary] text-[--primary] hover:text-[#252525] hover:border-[#252525]">
            {t("section2Button")}
          </div>
        </Link>
      </div>
      <div className="lg:grid grid-cols-2 mx-10">
        <div className="flex flex-col justify-center items-center gap-4 lg:my-0 my-10">
          <div className="flex flex-col items-center">
            <p className={`${charm.className} text-5xl text-[--primary]`}>
              {" "}
              {t("section3HeaderLine1")}
            </p>
            <p className={`${sourceSans3.className} font-light text-shadow-sm text-3xl text-center`}> {t("section3HeaderLine2")}</p>
            <p className={`${sourceSans3.className} font-light text-center`}> {t("section3HeaderLine3")}</p>
          </div>
          <Image
            src="/icons/shirt-button.svg"
            alt="shirt-button-icom"
            width={32}
            height={32}
          />
          <p className="text-center lg:w-[40rem]">{t("section3Content")}</p>
          <Link href="/alterations">
            <div className="transition duration-300 ease-in-out p-1 border-b-2 border-[--primary] text-[--primary] hover:text-[#252525] hover:border-[#252525]">
              {t("section3Button")}
            </div>
          </Link>
        </div>
        <div className="md:flex gap-8">
          <Image
            src="/images/home-section3-1.jpg"
            alt="home-section3-pic1"
            width={576}
            height={768}
          />
          <Image
            src="/images/home-section3-2.jpg"
            alt="home-section3-pic2"
            width={576}
            height={768}
          />
        </div>
      </div>
    </div>
  );
}
