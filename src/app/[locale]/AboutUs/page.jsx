import { useTranslations } from "next-intl";
import Box from "../../layout/Box";
import Motion from "../../layout/Motion";
import MotionL from "../../layout/MotionL";
import MotionR from "../../layout/MotionR";
import { FcAbout } from "react-icons/fc";
import { IoMdMailUnread } from "react-icons/io";
import { GiStairsGoal } from "react-icons/gi";
import Image from "next/image";
import { ThreeWay } from "../../layout/ThreeWay";
import SupUs from "../../components/SupUs";

export default function page() {
  const t = useTranslations("aboutus");
  return (
    <>
    <MotionR>
      <div className="  w-full  text-start align-middle text- mb-8 her h-[70svh] flex  ">
        <h1
          className="text-4xl w-1/2 
  max-md:w-4/5 bg-black/20 content-center backdrop-blur-sm font-serif path text-green-400 pl-4"
        >
          {t("head")}
        </h1>
      </div></MotionR>
      {/* box start and about */}
      <Box>
          <ThreeWay>
            <div className="text-center bg-green-300/50 rounded-xl w-auto  ">
              <h2 className="font-bold m-1">
                {t("title")}
                <span>
                  <FcAbout className="inline-block mx-2" />
                </span>
              </h2>
              <p className="leading-6">{t("prag")}</p>
            </div>
          </ThreeWay>
        <div className="flex  gap-3  max-md:flex-col">

          <MotionL>
            <div className="text-center bg-blue-100/70 rounded-xl ">
              <h2 className="font-bold mt-5">
                {t("messtitle")}
                <span>
                  <IoMdMailUnread className="inline-block mx-2 text-pink-500" />
                </span>
              </h2>
              <p className="leading-6">{t("message")}</p>
            </div>
          </MotionL>

          <MotionR>
            <div className="text-center bg-orange-100/90 rounded-xl ">
              <h3 className="font-bold mt-5">
                {t("goaltitle")}
                <span>
                  <GiStairsGoal className="inline-block mx-2 text-green-600" />
                </span>
              </h3>
              <p className="leading-6">{t("goal")}</p>
            </div>
          </MotionR>
        </div>
        {/* leadar board */}
        <h4
          className="w-fit p-2 shadow-lg mx-auto my-8 rounded-2xl bg-clip-text bg-gradient-to-r from-violet-600 to-red-600 text-transparent
text-3xl"
        >
          {t("lead")}
        </h4>
        <div className="w-fit mx-auto text-center text-2xl my-10">
          {/* elhamy    */}
          <Motion>
            <div className=" flex max-sm:flex-col-reverse shadow-2x1 rounded-3xl ">
              <div className="text-center content-center w-3/6 bg-gray-200/80 rounded-2xl max-sm:w-full">
                <h2>{t("el")}</h2>
                <h5>{t("elp").toLocaleUpperCase()}</h5>
                <p className="   my-1">
                  {" "}
                  <q>{t("elqt")}</q>{" "}
                </p>
              </div>
              <Image
                src={"/image/ceo.jpeg"}
                width={400}
                height={200}
                alt="ceo img"
                className=" rounded-2xl"
              />
            </div>
          </Motion>
          {/* ramy */}
          <MotionL>
            <div className=" flex max-sm:flex-col-reverse shadow-2x1 rounded-3xl  my-10">
              <Image
                src={"/image/cm.jpg"}
                width={400}
                height={200}
                alt="ceo img"
                className=" rounded-2xl"
              />
              <div className="text-center content-center w-3/6 bg-gray-200/80 rounded-2xl max-sm:w-full">
                <h2>{t("ry")}</h2>
                <h5>{t("ryp").toLocaleUpperCase()}</h5>
                <p className="   my-1">
                  {" "}
                  <q>{t("elqt")}</q>{" "}
                </p>
              </div>
            </div>
          </MotionL>
          {/* israa */}
          <MotionR>
            <div className=" flex max-sm:flex-col-reverse shadow-2x1 rounded-3xl  my-10">
              <div className="text-center content-center w-3/6 bg-gray-200/80 rounded-2xl max-sm:w-full">
                <h2>{t("is")}</h2>
                <h5>{t("isp").toLocaleUpperCase()}</h5>
                <p className="   my-1">
                  {" "}
                  <q>{t("isqt")}</q>{" "}
                </p>
              </div>
              <Image
              
                src={"/image/dp.jpeg"}
                width={400}
                height={200}
                alt="ceo img"
                className=" rounded-2xl"
              />
            </div>
          </MotionR>
        </div>
        {/* Certificates */}
        <div>


        </div>
      </Box>
      <div className="w-11/12 mx-auto my-4">
      <h4 className="w-fit p-2 shadow-lg mx-auto my-8 rounded-2xl bg-clip-text bg-gradient-to-r from-violet-600 to-red-600 text-transparent
text-3xl">{t("last")}</h4>
        <SupUs/>
      </div>
    </>
  );
}
