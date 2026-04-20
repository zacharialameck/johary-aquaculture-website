import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useLocation } from "wouter";
import { Droplet, Thermometer, Heart, TrendingUp } from "lucide-react";

export default function Operations() {
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
            <button onClick={() => setLocation("/")} className="text-gray-700 hover:text-blue-700">Home</button>
            <button onClick={() => setLocation("/about")} className="text-gray-700 hover:text-blue-700">About</button>
            <button onClick={() => setLocation("/operations")} className="text-blue-700 hover:text-blue-900">Operations</button>
            <button onClick={() => setLocation("/products")} className="text-gray-700 hover:text-blue-700">Products</button>
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
          <h1 className="text-5xl font-bold">Farm Operations & Production System</h1>
        </div>
      </section>

      {/* System Overview */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-blue-900 mb-8">Our Production System</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gray-700 mb-6 text-lg">Our facility features a 120+ tank system organized into specialized zones to ensure controlled production cycles and optimal fish growth.</p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center"><span className="text-blue-600 mr-3">✓</span> 120+ tank system organized into zones</li>
                <li className="flex items-center"><span className="text-blue-600 mr-3">✓</span> Controlled production cycles</li>
                <li className="flex items-center"><span className="text-blue-600 mr-3">✓</span> Advanced feeding management</li>
                <li className="flex items-center"><span className="text-blue-600 mr-3">✓</span> Water quality monitoring (DO, pH, temperature)</li>
                <li className="flex items-center"><span className="text-blue-600 mr-3">✓</span> Fish health monitoring & mortality control</li>
              </ul>
            </div>
            <div className="bg-blue-100 rounded-lg h-64 flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl font-bold text-blue-600 mb-2">120+</div>
                <p className="text-blue-800 font-semibold">Tank System</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Daily Operations */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-blue-900 mb-12 text-center">Daily Operations</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <TrendingUp className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-blue-900 mb-2">Feeding Management</h3>
              <p className="text-gray-700">Structured feeding schedules optimized for growth and efficiency.</p>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <Droplet className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-blue-900 mb-2">Water Quality</h3>
              <p className="text-gray-700">Continuous monitoring of DO, pH, and temperature parameters.</p>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <Heart className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-blue-900 mb-2">Fish Health</h3>
              <p className="text-gray-700">Regular health assessments and disease prevention protocols.</p>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <Thermometer className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-blue-900 mb-2">Mortality Control</h3>
              <p className="text-gray-700">Proactive measures to maintain high survival rates.</p>
            </Card>
          </div>
        </div>
      </section>

      {/* JA-EOS System */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">Data-Driven System (JA-EOS)</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8 border-l-4 border-l-blue-600">
              <h3 className="text-2xl font-bold text-blue-900 mb-4">Real-Time Tracking</h3>
              <p className="text-gray-700 text-lg">JA-EOS tracks feeding, growth, mortality, and water parameters in real-time, allowing for data-driven decisions and maximum efficiency.</p>
            </Card>

            <Card className="p-8 border-l-4 border-l-green-600">
              <h3 className="text-2xl font-bold text-blue-900 mb-4">Quality Control</h3>
              <p className="text-gray-700 text-lg">Strict water quality management ensures the healthiest environment for our tilapia and catfish.</p>
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
