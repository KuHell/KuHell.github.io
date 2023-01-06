import Link from "next/link";
import React, { useEffect, useState } from "react";

const index = () => {
  const [ScrollActive, setScrollActive] = useState<number>(0);
  function handleScroll() {
    if (window.pageYOffset > 500) {
      setScrollActive(1);
    }
    if (window.pageYOffset > 1000) {
      setScrollActive(2);
    }
    if (window.pageYOffset > 2000) {
      setScrollActive(3);
    }
  }

  useEffect(() => {
    function scrollListener() {
      window.addEventListener("scroll", handleScroll);
    } //  window 에서 스크롤을 감시 시작
    scrollListener(); // window 에서 스크롤을 감시
    return () => {
      window.removeEventListener("scroll", handleScroll);
    }; //  window 에서 스크롤을 감시를 종료
  });

  return (
    <main
      className={`snap-y snap-mandatory h-screen w-screen ${
        ScrollActive === 1 ? "bg-teal-100" : "bg-teal-500"
      } duration-700`}
    >
      <div
        className={`snap-start flex items-center justify-center text-8xl snap-y snap-mandatory h-screen w-screen ${
          ScrollActive === 1
            ? "bg-red-600"
            : ScrollActive === 2
            ? "bg-yellow-500"
            : ScrollActive === 3
            ? "bg-green-600"
            : "bg-red-600"
        } duration-700`}
      >
        1
      </div>
      <div
        className={`snap-start flex items-center justify-center text-8xl snap-y snap-mandatory h-screen w-screen ${
          ScrollActive === 1
            ? "bg-red-600"
            : ScrollActive === 2
            ? "bg-yellow-500"
            : ScrollActive === 3
            ? "bg-green-600"
            : "bg-red-600"
        } duration-700`}
      >
        <Link href="/about">About</Link>
      </div>
      <div
        className={`snap-start flex items-center justify-center text-8xl snap-y snap-mandatory h-screen w-screen ${
          ScrollActive === 1
            ? "bg-red-600"
            : ScrollActive === 2
            ? "bg-yellow-500"
            : ScrollActive === 3
            ? "bg-green-600"
            : "bg-red-600"
        } duration-700`}
      >
        <Link href="/blog">Blog</Link>
      </div>
      <div
        className={`snap-start flex items-center justify-center text-8xl snap-y snap-mandatory h-screen w-screen ${
          ScrollActive === 1
            ? "bg-red-600"
            : ScrollActive === 2
            ? "bg-yellow-500"
            : ScrollActive === 3
            ? "bg-green-600"
            : "bg-red-600"
        } duration-700`}
      >
        <Link href="/contact">Contact</Link>
      </div>
    </main>
  );
};

export default index;
