"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, Coffee, Leaf, Wheat } from "lucide-react"
import Image from "next/image"
import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"

export default function MenuPage() {
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
          <button onClick={() => handleNavigation("/")} className="text-2xl font-serif font-bold text-stone-800">
            Brewly
          </button>
          <div className="hidden md:flex space-x-8">
            <button
              onClick={() => handleNavigation("/")}
              className="text-stone-700 hover:text-stone-900 transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => handleNavigation("/#about")}
              className="text-stone-700 hover:text-stone-900 transition-colors"
            >
              About
            </button>
            <span className="text-stone-700 hover:text-stone-900 transition-colors font-semibold">Menu</span>
            <button
              onClick={() => handleNavigation("/#visit")}
              className="text-stone-700 hover:text-stone-900 transition-colors"
            >
              Visit
            </button>
            <button
              onClick={() => handleNavigation("/#contact")}
              className="text-stone-700 hover:text-stone-900 transition-colors"
            >
              Contact
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        className={`relative h-96 flex items-center justify-center mt-16 ${isVisible ? "hero-text-fade" : "opacity-0"}`}
      >
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-banner.png"
            alt="Coffee beans scattered on burlap fabric surface"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-stone-900/60"></div>
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <button
            onClick={() => handleNavigation("/")}
            className="inline-flex items-center text-white/80 hover:text-white mb-4 transition-colors"
          >
            <ArrowLeft className="mr-2" size={20} />
            Back to Home
          </button>
          <h1 className="text-4xl md:text-6xl font-serif font-light mb-4">Our Menu</h1>
          <p className="text-xl font-light max-w-2xl mx-auto">Carefully crafted beverages and bites for every moment</p>
        </div>
      </section>

      {/* Menu Introduction */}
      <section className={`py-16 bg-white ${isVisible ? "section-fade-in" : "opacity-0"}`}>
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl font-serif text-stone-800 mb-6">Crafted with Care</h2>
          <p className="text-lg text-stone-600 leading-relaxed mb-8">
            Every item on our menu is thoughtfully prepared using premium ingredients sourced from sustainable farms.
            From our signature coffee blends to our artisanal pastries, we believe in quality that you can taste.
          </p>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <Coffee className="text-amber-700 mb-3" size={32} />
              <h3 className="font-semibold text-stone-800 mb-2">Premium Coffee</h3>
              <p className="text-stone-600 text-sm">Ethically sourced beans from the world's finest coffee regions</p>
            </div>
            <div className="flex flex-col items-center">
              <Leaf className="text-amber-700 mb-3" size={32} />
              <h3 className="font-semibold text-stone-800 mb-2">Sustainable</h3>
              <p className="text-stone-600 text-sm">
                Committed to environmental responsibility and fair trade practices
              </p>
            </div>
            <div className="flex flex-col items-center">
              <Wheat className="text-amber-700 mb-3" size={32} />
              <h3 className="font-semibold text-stone-800 mb-2">Fresh Daily</h3>
              <p className="text-stone-600 text-sm">Pastries and food items baked fresh every morning</p>
            </div>
          </div>
        </div>
      </section>

      {/* Coffee Section */}
      <section className={`py-16 bg-stone-100 ${isVisible ? "section-fade-in-delay" : "opacity-0"}`}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif text-stone-800 mb-4">☕ Signature Coffee</h2>
            <div className="w-24 h-1 bg-amber-700 mx-auto mb-6"></div>
            <p className="text-stone-600 max-w-2xl mx-auto">
              Our coffee menu features carefully selected beans roasted to perfection, showcasing unique flavor profiles
              from around the world.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="bg-white border-stone-200 hover:shadow-lg transition-shadow">
              <div className="relative h-80 overflow-hidden rounded-t-lg">
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
                  Our house blend with steamed milk, finished with delicate latte art and a hint of vanilla. Smooth,
                  creamy, and perfectly balanced.
                </p>
                <p className="text-2xl font-semibold text-amber-700">Rp 45k</p>
              </CardContent>
            </Card>

            <Card className="bg-white border-stone-200 hover:shadow-lg transition-shadow">
              <div className="relative h-80 overflow-hidden rounded-t-lg">
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
                  Bold yet refreshing.
                </p>
                <p className="text-2xl font-semibold text-amber-700">Rp 38k</p>
              </CardContent>
            </Card>

            <Card className="bg-white border-stone-200 hover:shadow-lg transition-shadow">
              <div className="relative h-80 overflow-hidden rounded-t-lg">
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
                  Premium Japanese matcha whisked to perfection with oat milk and a touch of honey. Earthy, creamy, and
                  energizing.
                </p>
                <p className="text-2xl font-semibold text-amber-700">Rp 52k</p>
              </CardContent>
            </Card>

            <Card className="bg-white border-stone-200 hover:shadow-lg transition-shadow">
              <div className="relative h-80 overflow-hidden rounded-t-lg">
                <Image
                  src="/images/americano.jpg"
                  alt="Classic Americano - pure espresso with hot water"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-serif text-stone-800 mb-2">Classic Americano</h3>
                <p className="text-stone-600 mb-4">
                  Pure espresso shots with hot water. Simple, strong, and perfect for coffee purists who appreciate
                  clean flavors.
                </p>
                <p className="text-2xl font-semibold text-amber-700">Rp 32k</p>
              </CardContent>
            </Card>

            <Card className="bg-white border-stone-200 hover:shadow-lg transition-shadow">
              <div className="relative h-80 overflow-hidden rounded-t-lg">
                <Image
                  src="/images/caramel-macchiato.jpg"
                  alt="Caramel Macchiato with layered caramel sauce"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-serif text-stone-800 mb-2">Caramel Macchiato</h3>
                <p className="text-stone-600 mb-4">
                  Espresso marked with steamed milk and finished with house-made caramel sauce. Sweet, indulgent, and
                  comforting.
                </p>
                <p className="text-2xl font-semibold text-amber-700">Rp 48k</p>
              </CardContent>
            </Card>

            <Card className="bg-white border-stone-200 hover:shadow-lg transition-shadow">
              <div className="relative h-80 overflow-hidden rounded-t-lg">
                <Image
                  src="/images/ethiopian-pour-over.jpg"
                  alt="Ethiopian Pour Over setup with dripper and coffee beans"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-serif text-stone-800 mb-2">Ethiopian Pour Over</h3>
                <p className="text-stone-600 mb-4">
                  Single-origin Ethiopian beans brewed with precision. Bright acidity with floral notes and a clean
                  finish.
                </p>
                <p className="text-2xl font-semibold text-amber-700">Rp 42k</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Non-Coffee Drinks Section */}
      <section className={`py-16 bg-white ${isVisible ? "section-fade-in" : "opacity-0"}`}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif text-stone-800 mb-4">🍵 Non-Coffee Drinks</h2>
            <div className="w-24 h-1 bg-amber-700 mx-auto mb-6"></div>
            <p className="text-stone-600 max-w-2xl mx-auto">
              Thoughtfully crafted alternatives for those seeking caffeine-free or lighter options, each with its own
              unique character and flavor profile.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="bg-stone-50 border-stone-200 hover:shadow-lg transition-shadow">
              <div className="relative h-80 overflow-hidden rounded-t-lg">
                <Image
                  src="/images/hojicha-oat-latte.jpg"
                  alt="Hojicha Oat Latte with foam on woven coaster"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-serif text-stone-800 mb-2">Hojicha Oat Latte</h3>
                <p className="text-stone-600 mb-4">
                  Roasted Japanese green tea blended with creamy oat milk and a touch of brown sugar syrup. Smoky,
                  smooth, and caffeine-light.
                </p>
                <p className="text-2xl font-semibold text-amber-700">Rp 38k</p>
              </CardContent>
            </Card>

            <Card className="bg-stone-50 border-stone-200 hover:shadow-lg transition-shadow">
              <div className="relative h-80 overflow-hidden rounded-t-lg">
                <Image
                  src="/images/sparkling-yuzu-fizz.png"
                  alt="Sparkling Yuzu Fizz with bubbles and lemon slice"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-serif text-stone-800 mb-2">Sparkling Yuzu Fizz</h3>
                <p className="text-stone-600 mb-4">
                  Refreshing yuzu citrus syrup, soda water, and a slice of lemon. Zesty and bubbly, perfect for hot
                  days.
                </p>
                <p className="text-2xl font-semibold text-amber-700">Rp 35k</p>
              </CardContent>
            </Card>

            <Card className="bg-stone-50 border-stone-200 hover:shadow-lg transition-shadow">
              <div className="relative h-80 overflow-hidden rounded-t-lg">
                <Image
                  src="/images/chai-milk-tea.png"
                  alt="Chai Spice Milk Tea with cinnamon dusting"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-serif text-stone-800 mb-2">Chai Spice Milk Tea</h3>
                <p className="text-stone-600 mb-4">
                  A cozy blend of black tea, cinnamon, cardamom, and steamed milk, topped with cinnamon dust. Warm,
                  comforting, and aromatic.
                </p>
                <p className="text-2xl font-semibold text-amber-700">Rp 37k</p>
              </CardContent>
            </Card>

            <Card className="bg-stone-50 border-stone-200 hover:shadow-lg transition-shadow">
              <div className="relative h-80 overflow-hidden rounded-t-lg">
                <Image
                  src="/images/golden-turmeric-latte.png"
                  alt="Golden Turmeric Latte with heart latte art"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-serif text-stone-800 mb-2">Golden Turmeric Latte</h3>
                <p className="text-stone-600 mb-4">
                  Warming blend of turmeric, ginger, and coconut milk with a hint of black pepper. Anti-inflammatory and
                  naturally energizing.
                </p>
                <p className="text-2xl font-semibold text-amber-700">Rp 40k</p>
              </CardContent>
            </Card>

            <Card className="bg-stone-50 border-stone-200 hover:shadow-lg transition-shadow">
              <div className="relative h-80 overflow-hidden rounded-t-lg">
                <Image
                  src="/images/hibiscus-iced-tea.png"
                  alt="Hibiscus Iced Tea with lime slice garnish"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-serif text-stone-800 mb-2">Hibiscus Iced Tea</h3>
                <p className="text-stone-600 mb-4">
                  Tart and refreshing hibiscus tea served over ice with a touch of agave. Naturally caffeine-free and
                  rich in antioxidants.
                </p>
                <p className="text-2xl font-semibold text-amber-700">Rp 33k</p>
              </CardContent>
            </Card>

            <Card className="bg-stone-50 border-stone-200 hover:shadow-lg transition-shadow">
              <div className="relative h-80 overflow-hidden rounded-t-lg">
                <Image
                  src="/images/hot-chocolate.png"
                  alt="House-Made Hot Chocolate with whipped cream and chocolate shavings"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-serif text-stone-800 mb-2">House-Made Hot Chocolate</h3>
                <p className="text-stone-600 mb-4">
                  Rich Belgian chocolate melted with steamed milk and topped with whipped cream. Decadent comfort in a
                  cup.
                </p>
                <p className="text-2xl font-semibold text-amber-700">Rp 41k</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pastries & Light Bites Section */}
      <section className={`py-16 bg-stone-100 ${isVisible ? "section-fade-in-delay" : "opacity-0"}`}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif text-stone-800 mb-4">🥐 Pastries & Light Bites</h2>
            <div className="w-24 h-1 bg-amber-700 mx-auto mb-6"></div>
            <p className="text-stone-600 max-w-2xl mx-auto">
              Freshly baked pastries and carefully prepared light meals, perfect companions to your favorite beverage or
              as satisfying snacks on their own.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="bg-white border-stone-200 hover:shadow-lg transition-shadow">
              <div className="relative h-80 overflow-hidden rounded-t-lg">
                <Image
                  src="/images/truffle-mushroom-toast.png"
                  alt="Truffle Mushroom Toast with sautéed mushrooms and parmesan"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-serif text-stone-800 mb-2">Truffle Mushroom Toast</h3>
                <p className="text-stone-600 mb-4">
                  Artisan sourdough topped with sautéed mushrooms, truffle oil, and shaved parmesan. Earthy, savory, and
                  satisfying.
                </p>
                <p className="text-2xl font-semibold text-amber-700">Rp 45k</p>
              </CardContent>
            </Card>

            <Card className="bg-white border-stone-200 hover:shadow-lg transition-shadow">
              <div className="relative h-80 overflow-hidden rounded-t-lg">
                <Image
                  src="/images/lemon-poppyseed-muffin.png"
                  alt="Lemon Poppyseed Muffin with lemon slice garnish"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-serif text-stone-800 mb-2">Lemon Poppyseed Muffin</h3>
                <p className="text-stone-600 mb-4">
                  Soft muffin bursting with citrusy flavor and a light crunch of poppyseeds. Bright, fluffy, and not too
                  sweet.
                </p>
                <p className="text-2xl font-semibold text-amber-700">Rp 28k</p>
              </CardContent>
            </Card>

            <Card className="bg-white border-stone-200 hover:shadow-lg transition-shadow">
              <div className="relative h-80 overflow-hidden rounded-t-lg">
                <Image
                  src="/images/croissant-trio.png"
                  alt="Mini Croissant Trio - plain, chocolate, and almond varieties"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-serif text-stone-800 mb-2">Mini Croissant Trio</h3>
                <p className="text-stone-600 mb-4">
                  A sampler of three bite-sized croissants: almond, chocolate, and plain. Crispy, buttery variety for
                  indecisive snackers.
                </p>
                <p className="text-2xl font-semibold text-amber-700">Rp 32k</p>
              </CardContent>
            </Card>

            <Card className="bg-white border-stone-200 hover:shadow-lg transition-shadow">
              <div className="relative h-80 overflow-hidden rounded-t-lg">
                <Image
                  src="/images/avocado-sourdough-toast.png"
                  alt="Avocado Sourdough Toast with cherry tomatoes and feta"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-serif text-stone-800 mb-2">Avocado Sourdough Toast</h3>
                <p className="text-stone-600 mb-4">
                  Smashed avocado on toasted sourdough with cherry tomatoes, feta, and everything seasoning. Fresh,
                  healthy, and Instagram-worthy.
                </p>
                <p className="text-2xl font-semibold text-amber-700">Rp 42k</p>
              </CardContent>
            </Card>

            <Card className="bg-white border-stone-200 hover:shadow-lg transition-shadow">
              <div className="relative h-80 overflow-hidden rounded-t-lg">
                <Image
                  src="/images/blueberry-scone.png"
                  alt="Blueberry Scone with clotted cream and jam"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-serif text-stone-800 mb-2">Blueberry Scone</h3>
                <p className="text-stone-600 mb-4">
                  Traditional English scone studded with fresh blueberries, served with clotted cream and jam. Crumbly,
                  sweet, and perfect with tea.
                </p>
                <p className="text-2xl font-semibold text-amber-700">Rp 35k</p>
              </CardContent>
            </Card>

            <Card className="bg-white border-stone-200 hover:shadow-lg transition-shadow">
              <div className="relative h-80 overflow-hidden rounded-t-lg">
                <Image
                  src="/images/grilled-cheese-sandwich.png"
                  alt="Grilled Cheese Sandwich with melted cheese and tomato soup"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-serif text-stone-800 mb-2">Grilled Cheese Sandwich</h3>
                <p className="text-stone-600 mb-4">
                  Artisan bread with aged cheddar and gruyere, grilled to golden perfection. Comfort food at its finest,
                  served with tomato soup.
                </p>
                <p className="text-2xl font-semibold text-amber-700">Rp 38k</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className={`py-16 bg-amber-50 ${isVisible ? "section-fade-in" : "opacity-0"}`}>
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-serif text-stone-800 mb-6">Ready to Visit?</h2>
          <p className="text-lg text-stone-600 mb-8 max-w-2xl mx-auto">
            Come experience our carefully crafted menu in person. We're open daily and ready to serve you the perfect
            cup and bite for any moment of your day.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => handleNavigation("/#visit")}
              className="bg-amber-700 hover:bg-amber-800 text-white px-8 py-3 rounded-md text-lg font-medium transition-colors"
            >
              Find Our Location
            </button>
            <Button
              variant="outline"
              size="lg"
              className="border-amber-700 text-amber-700 hover:bg-amber-700 hover:text-white px-8 py-3"
            >
              Order for Pickup
            </Button>
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
                <button
                  onClick={() => handleNavigation("/")}
                  className="block hover:text-stone-800 transition-colors text-white text-left"
                >
                  Home
                </button>
                <button
                  onClick={() => handleNavigation("/#about")}
                  className="block hover:text-stone-800 transition-colors text-white text-left"
                >
                  About
                </button>
                <span className="block text-white">Menu</span>
                <button
                  onClick={() => handleNavigation("/#visit")}
                  className="block hover:text-stone-800 transition-colors text-white text-left"
                >
                  Visit
                </button>
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
