import React from "react";

export default function App() {
  return (
    <div>
      <Navbar />
    </div>
  );
}

function Navbar() {
  return (
    <header className="flex justify-center">
      <nav className="flex justify-between max-w-[1400px] w-full p-2 items-center border-b-dark-white-color border-b-2">
        <img src="/public/CoolClothes.com.svg" alt="" />
        <ul className=" hidden desktop:flex">
          <li className="mx-8">
            <a
              className="hover:text-red-color focus-visible:text-red-color"
              href="#"
            >
              Kids
            </a>
          </li>
          <li className="mx-8">
            <a
              className="hover:text-red-color focus-visible:text-red-color"
              href="#"
            >
              Women
            </a>
          </li>
          <li className="mx-8">
            <a
              className="hover:text-red-color focus-visible:text-red-color"
              href="#"
            >
              Men
            </a>
          </li>
          <li className="mx-8">
            <a
              className="hover:text-red-color focus-visible:text-red-color"
              href="#"
            >
              Accesories
            </a>
          </li>
          <li className="mx-8">
            <a
              className="hover:text-red-color focus-visible:text-red-color"
              href="#"
            >
              Contact
            </a>
          </li>
        </ul>
        <div>
          <button className="rounded-full w-[48px] h-[48px] bg-dark-white-color hover:bg-grey-color focus-visible:bg-grey-color hidden desktop:inline"></button>
          <button className="rounded-full w-[48px] h-[48px] bg-dark-white-color ml-4 hover:bg-grey-color focus-visible:bg-grey-color hidden desktop:inline"></button>
        </div>
        <button className="desktop:hidden">
          <img src="public/menu.svg" alt="menu icon" />
        </button>
      </nav>
    </header>
  );
}

function Main() {
  return <section></section>;
}

function Photos() {
  return <section></section>;
}

function Pricing() {}

function RelatedProducts() {}

function ProductDetails() {}

function Footer() {}
