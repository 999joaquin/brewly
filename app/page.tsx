"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Clock, Phone, Instagram } from "lucide-react"
import Image from "next/image"
import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"

function FlippableQuoteCard() {
  return (
    <div className="relative h-96 rounded-lg overflow-hidden">
      <Image
        src="/images/about-coffee.jpg"
        alt="Coffee with latte art on open book with white linens"
        fill
        className="object-cover rounded-lg"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
    </div>
  )
}

export default function BrewlyHomePage() {
  const [isVisible, setIsVisible] = useState(false)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const router = useRouter()

  useEffect(() => {
    // Trigger fade-in animation on component mount
    setIsVisible(true)
  }, [])

  const handleNavigation = (path: string) => {
    setIsTransitioning(true)
    setTimeout(() => {
      router.push(path)
    }, 500) // Wait for fade-out animation to complete
  }

  return (
    <div
      className={`min-h-screen bg-stone-50 ${isVisible ? "page-fade-in" : ""} ${isTransitioning ? "page-fade-out" : ""}`}
    >
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-stone-50/95 backdrop-blur-sm z-50 border-b border-stone-200">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-serif font-bold text-stone-800">Brewly</h1>
          <div className="hidden md:flex space-x-8">
            <a href="#home" className="text-stone-700 hover:text-stone-900 transition-colors">
              Home
            </a>
            <a href="#about" className="text-stone-700 hover:text-stone-900 transition-colors">
              About
            </a>
            <button
              onClick={() => handleNavigation("/menu")}
              className="text-stone-700 hover:text-stone-900 transition-colors"
            >
              Menu
            </button>
            <a href="#visit" className="text-stone-700 hover:text-stone-900 transition-colors">
              Visit
            </a>
            <a href="#contact" className="text-stone-700 hover:text-stone-900 transition-colors">
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-banner.png"
            alt="Coffee beans scattered on burlap fabric surface"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-stone-900/40"></div>
        </div>
        <div className={`relative z-10 text-center text-white px-4 ${isVisible ? "hero-text-fade" : "opacity-0"}`}>
          <h1 className="text-5xl md:text-7xl font-serif font-light mb-6 leading-tight">
            Brew Better.
            <br />
            Live Slower.
          </h1>
          <p className="text-xl md:text-2xl mb-8 font-light max-w-2xl mx-auto">
            Discover the art of slow coffee in our carefully crafted space
          </p>
          <Button
            size="lg"
            className="bg-amber-700 hover:bg-amber-800 text-white px-8 py-3 text-lg font-medium"
            onClick={() => handleNavigation("/menu")}
          >
            View Menu
          </Button>
        </div>
      </section>

      {/* About Brewly */}
      <section id="about" className={`py-20 bg-stone-100 ${isVisible ? "section-fade-in" : "opacity-0"}`}>
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif text-stone-800 mb-8">About Brewly</h2>
            <div className="w-24 h-1 bg-amber-700 mx-auto mb-12"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-stone-700 leading-relaxed">
                At Brewly, we believe that great coffee is more than just a beverage—it's a moment of pause in our
                fast-paced world. Founded in 2019, we've dedicated ourselves to sourcing the finest beans from
                sustainable farms around the globe.
              </p>
              <p className="text-lg text-stone-700 leading-relaxed">
                Our artisanal approach combines traditional brewing methods with modern techniques, creating a space
                where every cup tells a story. We're committed to environmental responsibility, using compostable
                packaging and supporting fair-trade practices.
              </p>
              <p className="text-lg text-stone-700 leading-relaxed">
                Step into our warm, minimalist space and discover the calm that comes with truly exceptional coffee.
                Here, time moves a little slower, conversations flow deeper, and every sip is savored.
              </p>
            </div>
            <FlippableQuoteCard />
          </div>
        </div>
      </section>

      {/* Menu Preview */}
      <section id="menu" className={`py-20 bg-stone-50 ${isVisible ? "section-fade-in-delay" : "opacity-0"}`}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif text-stone-800 mb-8">Our Signature Drinks</h2>
            <div className="w-24 h-1 bg-amber-700 mx-auto mb-12"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
            <Card className="bg-white border-stone-200 hover:shadow-lg transition-shadow">
              <div className="relative h-64 overflow-hidden rounded-t-lg">
                <Image
                  src="/images/brewly-signature-latte.jpg"
                  alt="Brewly Signature Latte with heart latte art"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-serif text-stone-800 mb-2">Brewly Signature Latte</h3>
                <p className="text-stone-600 mb-4">
                  Our house blend with steamed milk, finished with delicate latte art and a hint of vanilla.
                </p>
                <p className="text-2xl font-semibold text-amber-700">Rp 45k</p>
              </CardContent>
            </Card>

            <Card className="bg-white border-stone-200 hover:shadow-lg transition-shadow">
              <div className="relative h-64 overflow-hidden rounded-t-lg">
                <Image
                  src="/images/slow-drip-cold-brew.jpg"
                  alt="Slow-Drip Cold Brew with ice"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-serif text-stone-800 mb-2">Slow-Drip Cold Brew</h3>
                <p className="text-stone-600 mb-4">
                  24-hour cold extraction process creates a smooth, rich coffee with notes of chocolate and caramel.
                </p>
                <p className="text-2xl font-semibold text-amber-700">Rp 38k</p>
              </CardContent>
            </Card>

            <Card className="bg-white border-stone-200 hover:shadow-lg transition-shadow">
              <div className="relative h-64 overflow-hidden rounded-t-lg">
                <Image
                  src="/images/ceremonial-matcha-latte.jpg"
                  alt="Ceremonial Matcha Latte with latte art"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-serif text-stone-800 mb-2">Ceremonial Matcha Latte</h3>
                <p className="text-stone-600 mb-4">
                  Premium Japanese matcha whisked to perfection with oat milk and a touch of honey.
                </p>
                <p className="text-2xl font-semibold text-amber-700">Rp 52k</p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Button
              variant="outline"
              size="lg"
              className="border-amber-700 text-amber-700 hover:bg-amber-700 hover:text-white px-8 py-3"
              onClick={() => handleNavigation("/menu")}
            >
              View Full Menu
            </Button>
          </div>
        </div>
      </section>

      {/* Instagram Feed / Gallery */}
      <section className={`py-20 bg-stone-100 ${isVisible ? "section-fade-in" : "opacity-0"}`}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif text-stone-800 mb-8">Café Moments</h2>
            <div className="w-24 h-1 bg-amber-700 mx-auto mb-12"></div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="relative aspect-square overflow-hidden rounded-lg group cursor-pointer">
                <Image
                  src={`/placeholder.svg?height=300&width=300`}
                  alt={`Café moment ${i}`}
                  fill
                  className="object-cover transition-transform group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-stone-900/0 group-hover:bg-stone-900/20 transition-colors flex items-center justify-center">
                  <Instagram className="text-white opacity-0 group-hover:opacity-100 transition-opacity" size={32} />
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-stone-600 mb-4">Follow us for daily coffee inspiration</p>
            <Button variant="outline" className="border-stone-400 text-stone-700 hover:bg-stone-200">
              <Instagram className="mr-2" size={20} />
              @brewlycafe
            </Button>
          </div>
        </div>
      </section>

      {/* Visit Us */}
      <section id="visit" className={`py-20 bg-stone-50 ${isVisible ? "section-fade-in-delay" : "opacity-0"}`}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif text-stone-800 mb-8">Visit Us</h2>
            <div className="w-24 h-1 bg-amber-700 mx-auto mb-12"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Map Placeholder */}
            <div className="relative h-96 bg-stone-200 rounded-lg overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="mx-auto mb-4 text-stone-500" size={48} />
                  <p className="text-stone-600">Interactive Map</p>
                  <p className="text-sm text-stone-500">123 Coffee Street, Downtown</p>
                </div>
              </div>
            </div>

            {/* Location Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-serif text-stone-800 mb-4">Location & Hours</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <MapPin className="text-amber-700 mt-1" size={20} />
                    <div>
                      <p className="text-stone-800 font-medium">123 Coffee Street</p>
                      <p className="text-stone-600">Downtown District, City 12345</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Clock className="text-amber-700 mt-1" size={20} />
                    <div>
                      <p className="text-stone-800 font-medium">Business Hours</p>
                      <div className="text-stone-600 space-y-1">
                        <p>Monday - Friday: 7:00 AM - 8:00 PM</p>
                        <p>Saturday: 8:00 AM - 9:00 PM</p>
                        <p>Sunday: 8:00 AM - 6:00 PM</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Phone className="text-amber-700 mt-1" size={20} />
                    <div>
                      <p className="text-stone-800 font-medium">(555) 123-BREW</p>
                      <p className="text-stone-600">Call for reservations</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <Button size="lg" className="w-full bg-amber-700 hover:bg-amber-800 text-white">
                  Message on WhatsApp
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full border-amber-700 text-amber-700 hover:bg-amber-700 hover:text-white"
                >
                  Contact Us
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-12 bg-black ${isVisible ? "section-fade-in" : "opacity-0"}`}>
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-serif font-bold mb-4 text-white">Brewly</h3>
              <p className="text-white">Crafting exceptional coffee experiences, one cup at a time.</p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>
              <div className="space-y-2">
                <a href="#home" className="block hover:text-stone-800 transition-colors text-white">
                  Home
                </a>
                <a href="#about" className="block hover:text-stone-800 transition-colors text-white">
                  About
                </a>
                <button
                  onClick={() => handleNavigation("/menu")}
                  className="block hover:text-stone-800 transition-colors text-white text-left"
                >
                  Menu
                </button>
                <a href="#visit" className="block hover:text-stone-800 transition-colors text-white">
                  Visit
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-stone-600 hover:text-stone-800 transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                <a href="#" className="text-stone-600 hover:text-stone-800 transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-stone-300 pt-8 text-center">
            <p className="text-white">© 2024 Brewly. All rights reserved. | Made with ❤️ and lots of coffee</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
