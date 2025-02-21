import { routes } from "@/constant/routes";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { Separator } from "@/components/ui/separator";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Image from "next/image";

const Footer = () => {
  const t = useTranslations();

  return (
    <>
      <div className="flex justify-center bg-[url('/images/footer-banner.jpg')] bg-cover bg-center py-20 text-white text-center text-lg">
        <div className="flex flex-col items-center gap-8">
          <p className="font-bold">{t("Footer.footerHeading")}</p>
          <Image
            src="/icons/shirt-button.svg"
            alt="shirt-button-icom"
            width={32}
            height={32}
          />
          <p className="w-[20rem] md:w-[40rem]">{t("Footer.footerContent")}</p>
          <Link href="/contact">
            <div className="transition duration-300 ease-in-out rounded-md px-6 py-3 bg-[--primary] hover:bg-[#252525] text-white hover:text-[--primary]">
              {t("Footer.contactButton")}
            </div>
          </Link>
          <div className="flex flex-col items-center">
            <p>{t("Footer.businessName")}</p>
            <p>{t("Footer.phoneNumber1")}</p>
            <p>{t("Footer.phoneNumber2")}</p>
            <div className="flex items-center gap-2">
              <p>{t("Footer.addressLine1")}</p>{" "}
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Image
                      src="/icons/info.svg"
                      alt="info"
                      width={24}
                      height={24}
                    />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>
                      <span className="font-bold">
                        {t("Footer.oldAddressLabel")}
                        {": "}
                      </span>
                      {t("Footer.oldAddress")}
                    </p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
            <p>{t("Footer.addressLine2")}</p>
          </div>
          <div>
            <p>{t("Footer.businessHourLine1")}</p>
            <p>{t("Footer.businessHourLine2")}</p>
          </div>
          <div className="flex items-center gap-2">
            <Link href="https://www.facebook.com/nhamayhongquang/">
              <Image
                src="/icons/facebook.svg"
                alt="facebook"
                width={48}
                height={48}
              />
            </Link>
            <Link href="https://zalo.me/0913192129">
              <Image
                src="/icons/zalo.svg"
                alt="facebook"
                width={48}
                height={48}
              />
            </Link>
          </div>
        </div>
      </div>
      <div className="flex bg-[#252525] py-6 flex-col gap-6 items-center text-sm">
        <p className="text-[#919191]">
          {t("Footer.acknowledgement")}{" "}
          <span>
            <a className="text-[#01a85a]" href="https://github.com/tduyphat">
              Phat Tran
            </a>
          </span>
        </p>
        <div className="flex justify-center flex-wrap gap-6">
          {routes.map((r) => {
            if (r.url !== "/contact") {
              return (
                <div key={r.url} className="flex gap-6">
                  <div className="text-[#919191] hover:text-[--primary]">
                    <Link href={r.url}>{t(`Header.${r.text}`)}</Link>
                  </div>
                  <Separator orientation="vertical" className="bg-[#919191]" />
                </div>
              );
            } else {
              return (
                <div
                  key={r.url}
                  className="text-[#919191] hover:text-[--primary]"
                >
                  <Link href={r.url}>{t(`Header.${r.text}`)}</Link>
                </div>
              );
            }
          })}
        </div>
      </div>
    </>
  );
};

export default Footer;
