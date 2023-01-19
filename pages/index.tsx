import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import useScrollFadeIn from "../hooks/useScrollFadeIn";
import Layout from "./components/Layout";

export default function Home() {
  const [ScrollActive, setScrollActive] = useState<number>(0);
  function handleScroll() {
    console.log("window.pageYOffset:", window.pageYOffset);
    if (window.pageYOffset > 500) {
      setScrollActive(0);
    }
    if (window.pageYOffset > 528) {
      setScrollActive(2);
    }
    if (window.pageYOffset > 1465) {
      setScrollActive(3);
    }
    if (window.pageYOffset > 2450) {
      setScrollActive(4);
    }
    if (window.pageYOffset > 3350) {
      setScrollActive(5);
    }
  }

  const test = () => {
    if (ScrollActive === 0) {
      return "bg-[#fff]";
    }
    if (ScrollActive === 1) {
      return "bg-[#fff]";
    }
    if (ScrollActive === 2) {
      return "bg-[#000]";
    }
    if (ScrollActive === 3) {
      return "bg-[#3255ed]";
    }
    if (ScrollActive === 4) {
      return "bg-[#fff]";
    }
    if (ScrollActive === 5) {
      return "bg-[#373737]";
    }
  };

  useEffect(() => {
    function scrollListener() {
      window.addEventListener("scroll", handleScroll);
    } //  window 에서 스크롤을 감시 시작
    scrollListener(); // window 에서 스크롤을 감시
    return () => {
      window.removeEventListener("scroll", handleScroll);
    }; //  window 에서 스크롤을 감시를 종료
  });
  const animatedAbout = useScrollFadeIn(1, 0);

  return (
    <Layout>
      <div className="scrollbar-hide">
        <div className={`flex w-screen h-screen ${test()} duration-700`}>
          <p
            {...animatedAbout}
            className={`font-['Soak-Up-The-Sun'] text-[#3255ed] flex items-center justify-center text-[400px] h-screen w-screen`}
          >
            KuHell
          </p>
        </div>
        <div
          className={`flex items-center justify-center text-8xl h-screen w-screen ${test()} duration-700`}
        >
          <Link href="/project">
            <p
              className={`${
                ScrollActive === 1 || ScrollActive === 0
                  ? "text-black"
                  : "text-white"
              } `}
            >
              PROJECT
            </p>
          </Link>
        </div>
      </div>
    </Layout>
  );
}
