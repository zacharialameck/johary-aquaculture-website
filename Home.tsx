import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useLocation } from "wouter";
import { Waves, TrendingUp, Database, Users } from "lucide-react";

export default function Home() {
  const [, setLocation] = useLocation();

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <img src="https://d2xsxph8kpxj0f.cloudfront.net/310519663497188312/jcQKP8Lf6NW599p6pZ7dEr/johary-logo-MohqscVZve9ymC5dcUL2JJ.webp" alt="Johary Logo" className="h-10" />
            <span className="text-xl font-bold text-blue-700 hidden sm:inline">Johary Aquaculture</span>
          </div>
          <div className="flex gap-8 text-sm font-medium">
            <button onClick={() => setLocation("/")} className="text-blue-700 hover:text-blue-900">Home</button>
            <button onClick={() => setLocation("/about")} className="text-gray-700 hover:text-blue-700">About</button>
            <button onClick={() => setLocation("/operations")} className="text-gray-700 hover:text-blue-700">Operations</button>
            <button onClick={() => setLocation("/products")} className="text-gray-700 hover:text-blue-700">Products</button>
            <button onClick={() => setLocation("/training")} className="text-gray-700 hover:text-blue-700">Training</button>
            <button onClick={() => setLocation("/investment")} className="text-gray-700 hover:text-blue-700">Investment</button>
            <button onClick={() => setLocation("/team")} className="text-gray-700 hover:text-blue-700">Team</button>
            <button onClick={() => setLocation("/contact")} className="text-gray-700 hover:text-blue-700">Contact</button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center text-white overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{backgroundImage: 'url(/hero-tanks.jpg)'}}></div>
        <div className="absolute inset-0 bg-blue-900 opacity-60"></div>
        <div className="relative container mx-auto max-w-4xl text-center px-4 z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">Scalable Commercial Aquaculture Platform in East Africa</h1>
          <p className="text-lg md:text-xl mb-8 text-blue-50">Delivering high-quality tilapia and catfish using modern intensive tank systems, driven by data, efficiency, and sustainability.</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button onClick={() => setLocation("/operations")} className="bg-white text-blue-700 hover:bg-blue-50 px-8 py-3 font-semibold text-lg">
              Explore Our Operations
            </Button>
            <Button onClick={() => setLocation("/contact")} className="bg-blue-600 text-white hover:bg-blue-700 px-8 py-3 font-semibold border border-white text-lg">
              Contact Us
            </Button>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-blue-900 mb-8 text-center">About Johary Aquaculture</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gray-700 mb-4 text-lg">Johary Aquaculture Company Limited is a modern, data-driven aquaculture enterprise based in Kigoma Kwaga, Tanzania. Established in 2025, we focus on scalable, high-efficiency fish production using intensive tank systems.</p>
              <Button onClick={() => setLocation("/about")} className="bg-blue-700 hover:bg-blue-800">
                Read More
              </Button>
            </div>
            <div className="bg-blue-100 rounded-lg h-64 flex items-center justify-center">
              <Waves className="w-24 h-24 text-blue-500" />
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-blue-900 mb-12 text-center">Our Excellence</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 hover:shadow-lg transition-shadow">
              <div className="flex justify-center mb-4">
                <Database className="w-12 h-12 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-blue-900 mb-4 text-center">Operations</h3>
              <p className="text-gray-700 mb-6 text-center">Advanced system overview with 120+ tanks organized into zones for controlled production cycles.</p>
              <div className="text-center">
                <Button onClick={() => setLocation("/operations")} variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                  Explore Operations
                </Button>
              </div>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-shadow">
              <div className="flex justify-center mb-4">
                <Waves className="w-12 h-12 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-blue-900 mb-4 text-center">Products</h3>
              <p className="text-gray-700 mb-6 text-center">High-quality Tilapia, African Catfish, and healthy Fingerlings for markets and export.</p>
              <div className="text-center">
                <Button onClick={() => setLocation("/products")} variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                  View Products
                </Button>
              </div>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-shadow">
              <div className="flex justify-center mb-4">
                <Users className="w-12 h-12 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-blue-900 mb-4 text-center">Training</h3>
              <p className="text-gray-700 mb-6 text-center">Professional hands-on training programs in intensive tank systems and farm operations.</p>
              <div className="text-center">
                <Button onClick={() => setLocation("/training")} variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                  View Training
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-blue-900 mb-12 text-center">Why Choose Us?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 border-l-4 border-l-green-500">
              <TrendingUp className="w-12 h-12 text-green-600 mb-4" />
              <h3 className="text-xl font-bold text-blue-900 mb-3">95% Survival Rate</h3>
              <p className="text-gray-700">Industry-leading survival rates through meticulous care and monitoring.</p>
            </Card>

            <Card className="p-8 border-l-4 border-l-green-500">
              <Database className="w-12 h-12 text-green-600 mb-4" />
              <h3 className="text-xl font-bold text-blue-900 mb-3">Data-Driven (JA-EOS)</h3>
              <p className="text-gray-700">Our proprietary system tracks growth, feeding, and water quality in real-time.</p>
            </Card>

            <Card className="p-8 border-l-4 border-l-green-500">
              <Waves className="w-12 h-12 text-green-600 mb-4" />
              <h3 className="text-xl font-bold text-blue-900 mb-3">Scalable System</h3>
              <p className="text-gray-700">Modern intensive tank systems designed for high-efficiency expansion.</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-12 px-4 mt-auto">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-12 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <img src="https://d2xsxph8kpxj0f.cloudfront.net/310519663497188312/jcQKP8Lf6NW599p6pZ7dEr/johary-logo-MohqscVZve9ymC5dcUL2JJ.webp" alt="Johary Logo" className="h-8" />
                <h4 className="text-xl font-bold">Johary Aquaculture</h4>
              </div>
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
