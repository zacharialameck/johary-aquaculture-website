import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useLocation } from "wouter";
import { Fish, Package, Truck } from "lucide-react";

export default function Products() {
  const [, setLocation] = useLocation();

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-blue-700">Johary Aquaculture</div>
          <div className="flex gap-8 text-sm font-medium">
            <button onClick={() => setLocation("/")} className="text-gray-700 hover:text-blue-700">Home</button>
            <button onClick={() => setLocation("/about")} className="text-gray-700 hover:text-blue-700">About</button>
            <button onClick={() => setLocation("/operations")} className="text-gray-700 hover:text-blue-700">Operations</button>
            <button onClick={() => setLocation("/products")} className="text-blue-700 hover:text-blue-900">Products</button>
            <button onClick={() => setLocation("/training")} className="text-gray-700 hover:text-blue-700">Training</button>
            <button onClick={() => setLocation("/investment")} className="text-gray-700 hover:text-blue-700">Investment</button>
            <button onClick={() => setLocation("/team")} className="text-gray-700 hover:text-blue-700">Team</button>
            <button onClick={() => setLocation("/contact")} className="text-gray-700 hover:text-blue-700">Contact</button>
          </div>
        </div>
      </nav>

      {/* Page Header */}
      <section className="bg-blue-900 text-white py-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-5xl font-bold">Our Products & Supply</h1>
        </div>
      </section>

      {/* Products List */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-blue-900 mb-12 text-center">What We Supply</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 hover:shadow-lg transition-shadow">
              <div className="flex justify-center mb-4">
                <Fish className="w-12 h-12 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-blue-900 mb-4 text-center">Table Fish</h3>
              <p className="text-gray-700 text-center mb-6">High-quality Tilapia and African Catfish, grown to market size in our controlled systems.</p>
              <div className="text-center">
                <span className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full font-semibold">Premium Quality</span>
              </div>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-shadow">
              <div className="flex justify-center mb-4">
                <Package className="w-12 h-12 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-blue-900 mb-4 text-center">Fingerlings</h3>
              <p className="text-gray-700 text-center mb-6">Healthy, strong stock for other farmers to begin their own production cycles.</p>
              <div className="text-center">
                <span className="inline-block bg-green-100 text-green-700 px-4 py-2 rounded-full font-semibold">Certified Healthy</span>
              </div>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-shadow">
              <div className="flex justify-center mb-4">
                <Truck className="w-12 h-12 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-blue-900 mb-4 text-center">Bulk Supply</h3>
              <p className="text-gray-700 text-center mb-6">Ready to supply markets, hotels, distributors, and export partners across the region.</p>
              <div className="text-center">
                <span className="inline-block bg-purple-100 text-purple-700 px-4 py-2 rounded-full font-semibold">Export Ready</span>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Supply Channels */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">Distribution Channels</h2>
          <div className="space-y-4">
            <Card className="p-6 border-l-4 border-l-blue-600">
              <h3 className="text-xl font-bold text-blue-900 mb-2">Local Markets</h3>
              <p className="text-gray-700">Direct supply to regional markets ensuring fresh, high-quality fish.</p>
            </Card>
            <Card className="p-6 border-l-4 border-l-blue-600">
              <h3 className="text-xl font-bold text-blue-900 mb-2">Hotels & Restaurants</h3>
              <p className="text-gray-700">Premium supply for hospitality sector with consistent quality standards.</p>
            </Card>
            <Card className="p-6 border-l-4 border-l-blue-600">
              <h3 className="text-xl font-bold text-blue-900 mb-2">Distributors</h3>
              <p className="text-gray-700">Bulk supply partnerships for regional and national distribution networks.</p>
            </Card>
            <Card className="p-6 border-l-4 border-l-blue-600">
              <h3 className="text-xl font-bold text-blue-900 mb-2">Export Partners</h3>
              <p className="text-gray-700">International export opportunities for certified, high-quality products.</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-12 px-4 mt-auto">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-12 mb-8">
            <div>
              <h4 className="text-xl font-bold mb-4">Johary Aquaculture</h4>
              <p className="text-blue-100">A leading commercial aquaculture platform in East Africa, committed to sustainability and food security.</p>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-blue-100">
                <li><button onClick={() => setLocation("/about")} className="hover:text-white">About Us</button></li>
                <li><button onClick={() => setLocation("/operations")} className="hover:text-white">Operations</button></li>
                <li><button onClick={() => setLocation("/investment")} className="hover:text-white">Investment</button></li>
                <li><button onClick={() => setLocation("/contact")} className="hover:text-white">Contact</button></li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-4">Contact Info</h4>
              <p className="text-blue-100">Kigoma Kwaga, Tanzania</p>
              <p className="text-blue-100">Phone: +61 478 368 301</p>
              <p className="text-blue-100">Email: admin@joharyaquaculturecompanylimited.com</p>
            </div>
          </div>
          <div className="border-t border-blue-800 pt-8 text-center text-blue-100">
            <p>&copy; 2026 Johary Aquaculture Company Limited. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
