"use client";
import React from "react";
import Link from "next/link";
import { useTranslations } from "next-intl";
export default function SupUs() {
  const t = useTranslations("aboutus");
  return (
    <div className="flex justify-between">
      <div className=" w-[45%] bg-green-400/80 rounded-2xl p-2 text-center leading-8">
        <h1 className="font-bold">{t("gallery")}</h1>
        <p className="w-2/3 mx-auto">{t("galleryprag")}</p>

        <Link
          href={"AboutUs/Gallery"}
          className="p-2 rounded-lg bg-stone-200 shadow-md hover:bg-opacity-80 hover:p-1.5 "
        >
          {" "}
          {t("gallerybutton")}{" "}
        </Link>
      </div>

      <div className=" w-[45%] bg-green-400/80 rounded-2xl p-2 text-center leading-8">
        <h1 className="font-bold">{t("cer")}</h1>
        <p className="w-2/3 mx-auto"> {t("cerprag")}</p>

        <Link
          href={"AboutUs/cer"}
          className="p-2 rounded-lg bg-stone-200 shadow-md hover:bg-opacity-80 hover:p-1.5 "
        >
          {" "}
          {t("cerbutton")}{" "}
        </Link>
      </div>
    </div>
  );
}
