import { useTranslations } from "next-intl";
import { sourceSans3 } from "../layout";

export default function AboutPage() {
  const t = useTranslations("About");
  return (
    <div className="flex flex-col gap-40">
      <div className="flex flex-col items-center justify-center bg-[url('/images/about-banner.jpg')] bg-cover bg-center h-[100vh] text-white text-center">
        <p
          className={`${sourceSans3.className} font-light text-shadow-lg text-5xl`}
        >
          {t("bannerHeader")}
        </p>
      </div>
      <div className="flex justify-center mx-10">
        <div className="max-w-[50rem]">
          <p className={`${sourceSans3.className} font-thin text-4xl`}>
            {t("header1")}
          </p>
          <div className="w-full">
            <img
              className="float-right w-[50%]"
              src="/images/about-section1-1.jpg"
              alt="about-section1-1"
            />
            <p className="mt-8">{t("content1-part1")}</p>
            <p className="mt-8">{t("content1-part2")}</p>
            <p className="mt-8">{t("content1-part3")}</p>
            <p className="mt-8">{t("content1-part4")}</p>
          </div>
          <p className={`${sourceSans3.className} font-thin text-4xl mt-8`}>
            {t("header2")}
          </p>
          <p className="mt-8">{t("content2-part1")}</p>
          <p className="mt-8">{t("content2-part2")}</p>
          <p className={`${sourceSans3.className} font-thin text-4xl mt-8`}>
            {t("header3")}
          </p>
          <p className="mt-8">{t("content3-part1")}</p>
        </div>
      </div>
    </div>
  );
}
