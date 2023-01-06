import Link from "next/link";

const index = () => {
  return (
    <>
      <div className="snap-y snap-mandatory h-screen w-screen overflow-scroll scrollbar-hide">
        <div className="snap-start bg-amber-200 w-screen h-screen flex items-center justify-center text-8xl"></div>
        <Link href="/about">
          <div className="snap-start bg-teal-200 w-screen h-screen flex items-center justify-center text-8xl"></div>
        </Link>
        <Link href="/blog">
          <div className="snap-start bg-gray-200 w-screen h-screen flex items-center justify-center text-8xl"></div>
        </Link>
        <Link href="/contact">
          <div className="snap-start bg-amber-200 w-screen h-screen flex items-center justify-center text-8xl"></div>
        </Link>
      </div>
    </>
  );
};

export default index;
