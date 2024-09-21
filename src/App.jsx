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
        <ul className="flex">
          <li className="mx-8">
            <a href="#">Kids</a>
          </li>
          <li className="mx-8">
            <a href="#">Women</a>
          </li>
          <li className="mx-8">
            <a href="#">Men</a>
          </li>
          <li className="mx-8">
            <a href="#">Accesories</a>
          </li>
          <li className="mx-8">
            <a href="#">Contact</a>
          </li>
        </ul>
        <div>
          <button className="rounded-full w-[48px] h-[48px] bg-dark-white-color"></button>
          <button className="rounded-full w-[48px] h-[48px] bg-dark-white-color ml-4"></button>
        </div>
      </nav>
    </header>
  );
}

function Main() {}

function Photos() {}

function Pricing() {}

function RelatedProducts() {}

function ProductDetails() {}

function Footer() {}
