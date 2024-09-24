import React, { useState } from "react";

export default function App() {
  return (
    <div>
      <Navbar />
      <main></main>
    </div>
  );
}

function Navbar() {
  const [menu, setMenu] = useState(false);
  function handleMenu() {
    setMenu(!menu);
  }
  return (
    <header className="flex items-center flex-col relative">
      <a href="#" className="skip-nav">
        Skip to main content
      </a>
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
          <button
            className="rounded-full w-[48px] h-[48px] bg-dark-white-color hover:bg-grey-color focus-visible:bg-grey-color hidden desktop:inline"
            aria-label="shopping cart"
          ></button>
          <button
            className="rounded-full w-[48px] h-[48px] bg-dark-white-color ml-4 hover:bg-grey-color focus-visible:bg-grey-color hidden desktop:inline"
            aria-label="Account menu"
          ></button>
        </div>
        <button
          className="desktop:hidden"
          aria-expanded={menu}
          onClick={() => handleMenu()}
        >
          <img src="public/menu.svg" alt="menu icon" />
        </button>
      </nav>
      <nav className="w-full">
        <ul
          className={
            menu
              ? "flex flex-col bg-dark-white-color w-full items-center"
              : "hidden"
          }
        >
          <li className="mx-8">
            <a
              className="hover:text-red-color focus-visible:text-red-color"
              href="#"
            >
              Profile
            </a>
          </li>
          <li className="mx-8">
            <a
              className="hover:text-red-color focus-visible:text-red-color"
              href="#"
            >
              Shopping cart
            </a>
          </li>
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
      </nav>
    </header>
  );
}

function Main() {
  return <main></main>;
}

function Photos() {
  return <section></section>;
}

function Pricing() {}

function RelatedProducts() {}

function ProductDetails() {}

function Footer() {}
