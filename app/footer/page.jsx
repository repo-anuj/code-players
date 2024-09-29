"use client";

import Image from "next/image";
import Link from "next/link";

export default function PrivacyPolicy() {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Navbar */}
      <nav className="bg-white py-4 px-8 shadow-md">
        <div className="container mx-auto flex items-center justify-
between">
          <Link href="/">
            <Image
              src="/logo/logo.png" // Replace with your logo
              alt="Logo"
              width={100}
              height={50}
            />
          </Link>
          <ul className="flex space-x-6">
            <li>
              <Link href="/" className="hover:text-blue-500">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-blue-50
0">
                About
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-blue-500">
                Services
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-blue-500">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      {/* Main Content */}
      <main className="container mx-auto py-8 px-4">
        <h1 className="text-3xl font-bold mb-6 text-gray-500">Privacy Policy</h1>
        <br />
        <ul className="list-disc text-gray-700 ml-6">
          <li>https://codeplayers.in website</li>
          <li>https://api.codeplayers.in website</li>
          <li>Infinity ERP</li>
          <li>Infinity X
</li>
          <li>At Your Service</li>
        </ul>
        <p className="text-gray-700 mt-4">
          These platforms provide software services (Service) for GST returns
          preparation, offering relevant information and assistance.
        </p>
        <p className="text-gray-700 mt-4">
          This page informs website visitors and software users about our
          policies regarding the collection, use, and disclosure of Personal
          Information when using our Service.
        </p>
        <p className="text-gray-700 mt-4">
          By downloading and using the CODEPLAYERS applications mentioned above,
          you expressly consent to the use and disclosure of your personal
          information in accordance with this Privacy Policy. We collect
          Personal Information to provide and improve the Service. We will not
          use or share your information with anyone except as described in this
          Privacy Policy.
        </p>
        <p className="text-gray-700 mt-4">
          The terms used in this Privacy Policy have the same meanings as in our
          Terms of Use, accessible at https://codeplayers.in, unless otherwise
          defined in this Privacy Policy.
        </p>
        <p className="text-gray-700">
          {/* Replace with your actual privacy policy content */}
          At [Company Name], we are committed to protecting your privacy. This
          Privacy Policy explains how we collect, use, and disclose your
          personal information when you use our website and services.
        </p>

        {/* Add more sections and content as needed */}

        <h2 className="text-2xl font-semibold mt-8 mb-4">
          
Information We Collect
        </h2>
        <p className="text-gray-700">
          We collect personal information that you voluntarily provide to us,
          such as your name, email address, and phone number when you fill out a
          form or contact us.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">
          How We Use Your Information
        </h2>
        <p className="text-gray-700">
          We use your information to respond to your inquiries, provide you with
          our services, and improve our website and services.
        </p>
        {/* ... more sections ... */}
      </main>

      {/* Footer */}
      <footer className="bg-[#fafafa] py-10  px-6 md:px-0 md:mx-auto border-t">
        <div className="flex flex-col  justify-between gap-y-3 xl:w-4/5 2xl:w-[68%] mx-auto">
          <h1 className="text-3xl md:text-5xl font-medium ">
            <Image
              src={"/logo/logo.png"}
              width={10000}
              height={10000}
              className="w-40"
              alt="image"
            />{" "}
          </h1>
          <div className="w-1/2">
          <p className="text-left  text-2xl  text-black">We create taste from finest experiences</p>
          <p className="text-left  text-xl  text-gray-500">As a Solution Provider, we eat sleep and dream digital solutions! Similarly, our interaction with brands happen via email, live chat, text, app or social engagements.
We are incurably curious, and side by side, we are driven by data. This nature of us helps us in creating the finest wines for our brands, enjoyed by the customers.</p></div>
          <p className="text-left  text-xl  text-gray-500">519-200-5000</p>
          <p className="text-left  text-xl  text-gray-500">
            admin@birdsoftware.ca
          </p>
        </div>

        <div className="flex md:justify-center gap-x-4 mt-10">
          © 2024 CodePlayers. All Rights Reserved.
          <Link href="/footer" className="text-blue-500">
            Privacy Policy
          </Link>
          <Link href="/" className="text-blue-500">
            Term of Uses
          </Link>
          <Link href="/" className="text-blue-500">
            legual discloser
          </Link>
          <Link href="/" className="text-blue-500">
            EULA
          </Link>
        </div>
      </footer>
    </div>
  );
}
