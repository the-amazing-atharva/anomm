import React from "react";
import Footer from "../components/globals/Footer";
import NavBar from "../components/globals/NavBar";
import Features from "../components/home/Features";
import Hero from "../components/home/Hero";

export default function Page() {
  return (
    <main className="bg-emerald-50/5">
      <NavBar />
      <Hero />
      <Features />
      <Footer />
    </main>
  );
}
