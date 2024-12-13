"use client";

import dynamic from "next/dynamic";

const HeaderNoSSR = dynamic(() => import("./Header"), { ssr: false });

export default function Header() {
  return <HeaderNoSSR />;
}
