"use client";

import Image from "next/image";
import Link from "next/link";

const blogs = [
  {
    title: "Expert Advice for First-Time Yacht Charter Guests in Dubai",
    desc: "A deep dive into how you can enjoy yacht life without breaking the bank.",
    date: "March 17, 2025",
    img: "/assets/read1.jpg",
  },
  {
    title: "Yacht Charter Packages in Dubai: What’s Included and What’s Extra",
    desc: "A deep dive into how you can enjoy yacht life without breaking the bank.",
    date: "March 17, 2025",
    img: "/assets/read2.jpg",
  },
  {
    title: "Why Yacht Hire in Dubai is Gaining Popularity Among Families?",
    desc: "A deep dive into how you can enjoy yacht life without breaking the bank.",
    date: "March 17, 2025",
    img: "/assets/read3.jpg",
  },
  {
    title: "The Rise of Luxury Yacht Charters in Dubai’s Tourism Industry",
    desc: "A deep dive into how you can enjoy yacht life without breaking the bank.",
    date: "March 17, 2025",
    img: "/assets/read4.jpg",
  },
];

function topReads() {
  return (
    <>
      <section className="w-full px-6 pb-8 md:px-18 lg:px-16 lg:mb-20 py-8">
        {/* Title */}
        <h2 className="font-[Absans] text-[33px] md:text-[44px] lg:text-[64px] mb-5 text-center">Top Reads</h2>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {blogs.map((blog, i) => (
            <Link key={i} href="/blog/details">
              <div className="flex h-[232px] lg:h-[500px] xl:h-[554px] bg-white border border-gray-200 cursor-pointer 
                hover:scale-[1.01] transition-transform duration-300 overflow-hidden">
                {/* Left Image */}
                <div className="relative w-1/2 ">
                  <Image
                    src={blog.img}
                    alt={blog.title}
                    fill
                    className="object-fill"
                  />
                </div>

                {/* Right Text */}
                <div className="w-1/2 pl-4 pr-2 py-6 flex mt-6 flex-col justify-between ">
                  <div>
                    <p className="text-md text-blue-600 font-medium mb-1">
                      Explore
                    </p>
                    <p className="text-[16.76px] lg:text-[34px] xl:text-[40px] font-bold leading-[16px] lg:leading-[36px] mb-2 tracking-[-1px] lg:tracking-[-2px]">{blog.title}</p>
                    <p className="text-[10.05px] lg:text-[24px] text-md font-normal leading-[10px] lg:leading-[28px] tracking-[0px] lg:tracking-[-1px]">{blog.desc}</p>
                  </div>
                  <p className="text-sm font-semibold mt-4">{blog.date}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* View All Blogs Button */}
        <div className="flex justify-center mt-4">
          <button className="mt-4 px-8 py-3 border cursor-pointer border-[#A3A3A3] text-[#000] hover:bg-black hover:text-white transition-all">
            View all Blogs
          </button>
        </div>
      </section>
    </>
  );
}

export default topReads;
