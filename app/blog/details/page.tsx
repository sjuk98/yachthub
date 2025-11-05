"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/navbar";
import { FaWhatsapp } from "react-icons/fa";
import Newsletter from "@/components/newsLetter";
import TopReads from "@/components/topReads";
import Footer from "@/components/footer";
import Book from "@/components/book";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

export default function BlogDetails() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { href: "#destinations", label: "Destinations" },
    { href: "#types", label: "Types" },
    { href: "#about", label: "About" },
    { href: "#contact", label: "Contact" },
    { href: "/blog", label: "Blog" },
    { href: "#services", label: "Services" },
  ];

  useEffect(() => {
  const sections = document.querySelectorAll("article section");
  const navLinks = document.querySelectorAll("aside ul li");

  const handleScroll = () => {
    let current = "";

    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      if (rect.top <= 150 && rect.bottom >= 150) {
        current = section?.querySelector("h2")?.textContent.trim() || "";
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("text-blue-600", "font-semibold");
      if (link.textContent.trim() === current) {
        link.classList.add("text-blue-600", "font-semibold");
      }
    });
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);

  return (
    <>
      <main className="flex flex-col items-center w-full">
        <nav className="absolute top-0 left-0 w-full z-50 font-absans flex items-center justify-between 
          px-2 lg:px-4 py-6 text-white bg-transparent">
          {/* Left section: Logo + Nav Links */}
          <div className="flex items-center">
            {/* Logo */}
            <div className="flex items-center w-[153px] md:w-[151px] lg:w-[189px]">
              <Image src="/assets/Group-dark.svg" alt="Logo" width={186} height={48} />
            </div>
            <span className="hidden md:inline-block"
              style={{
                width: "2px",
                height: "40px",
                backgroundColor: "black",
              }}
            ></span>

            {/* Nav Links */}
            <div className="hidden lg:flex md:ml-2  items-center">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="font-[Absans] md:font-[16px] lg:font-[20px] font-normal md:px-1 lg:px-2 py-1 text-[#000] hover:bg-white hover:text-[#00313F] "
                >
                  {link.label}
                </Link>
              ))}
            </div>

          </div>


          {/* Mobile Menu */}
          {menuOpen && (
            <div className="absolute top-full left-0 w-full bg-[#00313F] border-t border-white flex flex-col items-center space-y-4 py-6 lg:hidden z-50">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="font-[Absans] font-normal text-lg hover:text-[#00B8D9] transition"
                >
                  {link.label}
                </Link>
              ))}
              <Button className=" md:hidden block bg-white border border-[#000] text-black hover:bg-[#dbdbdb] w-fit h-[45px] cursor-pointer  rounded-none font-medium transition mr-0">
                Download Brochure
              </Button>
            </div>
          )}

          {/* Right section: Buttons */}
          <div className="flex items-center md:space-x-4">
            {/* WhatsApp Button */}
            <Button className="bg-[#02CE1A] hover:bg-[#03a41b] w-[119px] h-[30px] md:w-fit md:h-[45px] 
              rounded-none text-white cursor-pointer flex items-center md:mr-0 md:mr-4">
              <img src="/assets/whatsapp.svg" className="w-[13] h-[13] md:w-5 md:h-5" alt="" />
              <span className="text-[9px] md:text-[13px] lg:text-[13px] ">Book on WhatsApp</span>
            </Button>

            {/* Get Started Button */}
            <Button className="hidden md:block bg-white text-black border border-[#000] hover:bg-[#dbdbdb] w-fit h-[45px] cursor-pointer  rounded-none font-medium transition mr-0">
              Download Brochure
            </Button>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden p-2 rounded-md focus:outline-none"
            >
              {menuOpen ? <X size={28} color="black" /> : <Menu size={28} color="black" />}
            </button>
          </div>
          {/* Hamburger Icon (Mobile) */}

        </nav>

        {/* Header Section */}
        <section className="w-full bg-white pt-14 mt-12 flex flex-col items-center text-center px-4">
          {/* <p className="text-md text-[#3B5BFF] font-medium mb-2">Explore</p> */}
          <h1 className="text-3xl md:text-5xl font-bold text-[#0F172A] max-w-3xl leading-tight">
            A Guide to Affordable Yacht Hire Options in Dubai
          </h1>
          <p className="text-gray-500 mt-3 text-md">
            a deep dive into how you can enjoy yacht life without breaking the
            bank
          </p>
          <p className="text-md font-semibold mt-2 mb-3">March 17, 2025</p>
        </section>

        {/* Hero Image */}
        <section className="w-full max-w-8xl">
          <Image
            src="/assets/blog-card.jpg"
            alt="Yacht image"
            width={1200}
            height={100}
            className="w-full object-cover"
          />
        </section>

        {/* Content Section */}
        <section className="w-[100%] max-w-7xl grid grid-cols-1 md:grid-cols-[250px_1fr] gap-10 text-[#0F172A] px-8 lg:px-12 py-16">
          {/* Sidebar */}
          <aside className="hidden md:block">
            <div className="sticky top-20">
              <h3 className="text-2xl font-bold mb-4">Contents</h3>
              <ul className="space-y-2 text-md text-gray-500">
                <li className="cursor-pointer">Introduction</li>
                <li className="cursor-pointer">Start with yacht size and layout</li>
                <li className="cursor-pointer">
                  Duration matters more than many realize
                </li>
                <li className="cursor-pointer">Services you can tailor</li>
              </ul>
            </div>
          </aside>

          {/* Main Content */}
          <article className="space-y-18 space-x-30 leading-relaxed">
            <section className="m-0 mb-8">
              <h2 className="text-4xl mb-2">Introduction</h2>
              <p className="text-gray-700">
                Affordable yacht hire in Dubai is possible when you focus on
                your precise needs and match the yacht size, duration, and
                services with it. The idea that every yacht is a superyacht is
                simply a misconception. Many families, couples, and small groups
                find mid-range options more viable as they offer comfort and
                privacy without exceeding their budget.
              </p>
            </section>

            <section className="m-0 mb-8">
              <h2 className="text-4xl mb-2">
                Start with yacht size and layout
              </h2>
              <p className="text-gray-700">
                The single biggest factor in affordability is the size of the
                yacht. Smaller vessels, often ranging between 50 and 65 feet,
                cost much less than larger yachts. For a couple or small family,
                this size is ideal as it offers indoor lounges, shaded decks,
                and enough space without unnecessary extras.
              </p>
              <p className="text-gray-700 mt-2">
                A yacht like the Elite Cruiser 50 Yacht represents a good entry
                point. It offers a sweet blend of comfort and practicality for
                shorter outings.
              </p>
            </section>

            <section className="m-0 mb-8">
              <h2 className="text-4xl mb-2">
                Duration matters more than many realize
              </h2>
              <p className="text-gray-700">
                Another way to manage cost is by adjusting the duration of your
                trip. Shorter charters cost less, and many guests find two- or
                three-hour trips sufficient. Cruising around Dubai Marina, JBR,
                or Palm Jumeirah doesn’t always require a full day either.
              </p>
              <p className="text-gray-700 mt-2">
                Longer day trips or overnight stays add costs for fuel, crew,
                and catering. Unless you need extended travel, shorter trips are
                the best way to keep yacht hire within budget.
              </p>
            </section>

            <section className="m-0 mb-8">
              <h2 className="text-4xl mb-2">Services you can tailor</h2>
              <p className="text-gray-700">
                Affordability also comes down to services. Most charters let you
                customize what’s included. You can book a private chef for a BBQ
                or bring your own food on board. Opting out of extras helps keep
                costs low while still ensuring comfort and privacy.
              </p>
              <p className="text-gray-700 mt-2">
                The key is to decide which additions truly matter for you. Many
                first-time guests are surprised at how enjoyable even a basic
                yacht hire can be.
              </p>
            </section>
          </article>
        </section>

        {/* Newsletter Section */}
        <Newsletter />

        {/* More Reads Section */}
        <TopReads />

        {/* Book */}
        <Book />
      </main>
      <Footer />
    </>
  );
}
