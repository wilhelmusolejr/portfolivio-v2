import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

import Navigator from "@components/Navigator";
import SectionLine from "../components/SectionLine";

export default function Project() {
  return (
    <>
      <Navigator />

      <div className="container mx-auto mt-24 mb-12 w-10/12 max-w-5xl">
        {/* BACK */}
        <div className="mb-5 flex items-center gap-2">
          <FontAwesomeIcon icon={faArrowLeft} />
          <span>Back</span>
        </div>

        {/* HEADING */}
        <h1 className="mb-2 text-2xl font-bold tracking-wide text-white">
          Philippine currency identifier
        </h1>

        {/* SMALL INFO */}
        <p className="text-tertiary-white text-sm">Currency recognition app.</p>
      </div>

      {/* image */}
      <div className="border-light-white h-[40vh] border-t-1 border-b-1 bg-slate-700"></div>

      {/* details */}
      <div className="container mx-auto mt-24 mb-12 flex w-10/12 max-w-5xl flex-col gap-12">
        {/* ITEM - Overview */}
        <div className="">
          {/* HEADING */}
          <h2 className="capiltalize mb-3 text-2xl font-medium tracking-wide text-white">
            Overview
          </h2>

          <p className="text-tertiary-white leading-relaxed font-light">
            Philippine Currency Identifier is a thesis-developed app that helps
            visually impaired people in the Philippines identify currency
            denominations using a convolutional neural network. It offers vocal
            denomination recognition and a user-friendly interface for easy
            accessibility, enabling independent financial transactions through a
            quick smartphone scan. This app represents a significant advancement
            in assistive technology and inclusivity.
          </p>
        </div>

        {/* ITEM - Features */}
        <div className="">
          {/* HEADING */}
          <h2 className="capiltalize mb-3 text-2xl font-medium tracking-wide text-white">
            Features
          </h2>

          <ul className="text-tertiary-white ms-5 flex list-disc flex-col gap-2 leading-relaxed font-light">
            {/* item */}
            <li className="">
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Tenetur, ad.
              </p>
            </li>
            {/* item */}
            <li className="">
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Tenetur, ad.
              </p>
            </li>
          </ul>
        </div>

        {/* ITEM - Contact */}
        <div className="">
          {/* HEADING */}
          <h2 className="capiltalize mb-3 text-2xl font-medium tracking-wide text-white">
            Contact
          </h2>

          <p className="text-tertiary-white leading-relaxed font-light">
            If you encounter any issues or have questions about this project,
            please don't hesitate to reach out to me directly at{" "}
            <span className="text-green-600">wilhelmus.olejr@gmail.com</span>.
            As the sole developer, I am dedicated to providing support and will
            do my best to respond to your concerns promptly, aiming to offer
            solutions and address your queries.
          </p>
        </div>

        {/* ITEM - Demo */}
        <div className="">
          {/* HEADING */}
          <h2 className="capiltalize mb-3 text-2xl font-medium tracking-wide text-white">
            Demo
          </h2>

          <a href="#" className="text-tertiary-white font-light underline">
            https://demo.com
          </a>
        </div>
      </div>

      {/* tags */}
      <div className="container mx-auto my-32 max-w-5xl">
        <div className="flex flex-wrap items-center justify-center gap-3">
          {/* item */}
          <div className="border-light-white bg-third-black w-fit rounded-md border-1 px-3 py-2">
            <p className="text-tertiary-white font-light">TensorFLOW</p>
          </div>

          {/* item */}
          <div className="border-light-white bg-third-black w-fit rounded-md border-1 px-3 py-2">
            <p className="text-tertiary-white font-light">TensorFLOW</p>
          </div>

          {/* item */}
          <div className="border-light-white bg-third-black w-fit rounded-md border-1 px-3 py-2">
            <p className="text-tertiary-white font-light">TensorFLOW</p>
          </div>
        </div>
      </div>

      {/* album */}
      <div className="scrollbar-hide mx-auto w-10/12 overflow-x-auto">
        <div className="flex gap-5">
          <div className="h-48 w-56 flex-shrink-0 rounded-lg bg-red-300"></div>
          <div className="h-48 w-56 flex-shrink-0 rounded-lg bg-blue-300"></div>
          <div className="h-48 w-56 flex-shrink-0 rounded-lg bg-green-300"></div>
          <div className="h-48 w-56 flex-shrink-0 rounded-lg bg-yellow-300"></div>
        </div>
      </div>

      <SectionLine />

      <div className="container mx-auto w-10/12 max-w-5xl">
        <div className="flex flex-col gap-15">
          {/* FONTS */}
          <div className="">
            <h3 className="mb-2 text-2xl">Fonts</h3>
            <p className="text-tertiary-white">Poppins</p>
          </div>

          {/* LANGUAGES */}
          <div className="">
            <h3 className="mb-5 text-2xl">Languages</h3>

            <div className="mb-5 flex h-2 gap-1">
              <div className="h-2 w-8/12 rounded-s-lg bg-blue-400"></div>
              <div className="h-2 w-3/12 bg-red-500"></div>
              <div className="h-2 w-1/12 rounded-e-lg bg-yellow-400"></div>
            </div>

            <div className="mt-4 flex flex-wrap gap-3">
              {/* item */}
              <div className="flex items-center gap-3">
                {/* circle */}
                <div className="h-3 w-3 rounded-full bg-blue-400"></div>
                {/* data */}
                <div className="flex items-center gap-2">
                  <p>PHP</p>
                  <p className="text-xs">66%</p>
                </div>
              </div>
              {/* item */}
              <div className="flex items-center gap-3">
                {/* circle */}
                <div className="h-3 w-3 rounded-full bg-red-500"></div>
                {/* data */}
                <div className="flex items-center gap-2">
                  <p>PHP</p>
                  <p className="text-xs">66%</p>
                </div>
              </div>
              {/* item */}
              <div className="flex items-center gap-3">
                {/* circle */}
                <div className="h-3 w-3 rounded-full bg-yellow-400"></div>
                {/* data */}
                <div className="flex items-center gap-2">
                  <p>PHP</p>
                  <p className="text-xs">66%</p>
                </div>
              </div>
            </div>
          </div>

          {/* Colors */}
          <div className="">
            <h3 className="mb-5 text-2xl">Colors</h3>
            <div className="flex flex-wrap gap-4">
              {/* item */}
              <div className="flex items-center gap-4">
                {/* box */}
                <div className="h-10 w-20 rounded-lg border-2 border-green-700 bg-green-500"></div>
                {/* name */}
                <p className="text-tertiary-white font-light tracking-wider">
                  #327B36
                </p>
              </div>

              {/* item */}
              <div className="flex items-center gap-4">
                {/* box */}
                <div className="h-10 w-20 rounded-lg border-2 border-green-700 bg-green-500"></div>
                {/* name */}
                <p className="text-tertiary-white font-light tracking-wider">
                  #327B36
                </p>
              </div>
            </div>
          </div>

          {/* Tags */}
          <div className="">
            <h3 className="mb-5 text-2xl">Tags</h3>
            <div className="flex flex-col gap-2 capitalize">
              <p>voice-assistance</p>
              <p>currency-identification</p>
              <p>Machine-learning</p>
            </div>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <footer className="container mx-auto my-14 h-52 w-10/12 rounded-md bg-gray-800"></footer>
    </>
  );
}
