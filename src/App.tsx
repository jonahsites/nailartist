/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Portfolio from "./components/Portfolio";
import Services from "./components/Services";
import Booking from "./components/Booking";
import Footer from "./components/Footer";
import AnimatedBlobs from "./components/AnimatedBlobs";

export default function App() {
  return (
    <main className="relative min-h-screen">
      <AnimatedBlobs />
      <Navbar />
      <Hero />
      <Services />
      <Portfolio />
      <Booking />
      <Footer />
    </main>
  );
}
