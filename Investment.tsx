import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useLocation } from "wouter";
import { TrendingUp, Zap, Building2, DollarSign } from "lucide-react";

export default function Investment() {
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
            <button onClick={() => setLocation("/products")} className="text-gray-700 hover:text-blue-700">Products</button>
            <button onClick={() => setLocation("/training")} className="text-gray-700 hover:text-blue-700">Training</button>
            <button onClick={() => setLocation("/investment")} className="text-blue-700 hover:text-blue-900">Investment</button>
            <button onClick={() => setLocation("/team")} className="text-gray-700 hover:text-blue-700">Team</button>
            <button onClick={() => setLocation("/contact")} className="text-gray-700 hover:text-blue-700">Contact</button>
          </div>
        </div>
      </nav>

      {/* Page Header */}
      <section className="bg-blue-900 text-white py-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-5xl font-bold">Investment Opportunity</h1>
        </div>
      </section>

      {/* The Opportunity */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-blue-900 mb-8">The Opportunity</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gray-700 mb-6 text-lg">East Africa has a strong demand for fish protein with significant supply gaps. Johary Aquaculture is perfectly positioned to fill this gap with our proven production system.</p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center"><span className="text-green-600 mr-3 font-bold">✓</span> Proven production system</li>
                <li className="flex items-center"><span className="text-green-600 mr-3 font-bold">✓</span> ~95% survival rate</li>
                <li className="flex items-center"><span className="text-green-600 mr-3 font-bold">✓</span> FCR ~1.6</li>
                <li className="flex items-center"><span className="text-green-600 mr-3 font-bold">✓</span> Strong profitability potential</li>
                <li className="flex items-center"><span className="text-green-600 mr-3 font-bold">✓</span> Scalable model</li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-green-100 to-blue-100 rounded-lg h-64 flex items-center justify-center">
              <TrendingUp className="w-24 h-24 text-green-600" />
            </div>
          </div>
        </div>
      </section>

      {/* Use of Funds */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-blue-900 mb-12 text-center">Use of Funds</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 hover:shadow-lg transition-shadow">
              <div className="flex justify-center mb-4">
                <Building2 className="w-12 h-12 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-blue-900 mb-4 text-center">Expansion</h3>
              <p className="text-gray-700 text-center">Expansion of tank capacity to increase overall production output and reach new markets.</p>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-shadow">
              <div className="flex justify-center mb-4">
                <Zap className="w-12 h-12 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-blue-900 mb-4 text-center">Technology</h3>
              <p className="text-gray-700 text-center">Further development of our JA-EOS monitoring system for better efficiency and data analytics.</p>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-shadow">
              <div className="flex justify-center mb-4">
                <DollarSign className="w-12 h-12 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-blue-900 mb-4 text-center">Infrastructure</h3>
              <p className="text-gray-700 text-center">Upgrading farm infrastructure and working capital for sustainable operations.</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Investment Highlights */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">Why Invest in Johary?</h2>
          <div className="space-y-4">
            <Card className="p-6 border-l-4 border-l-green-600">
              <h3 className="text-xl font-bold text-blue-900 mb-2">Market Demand</h3>
              <p className="text-gray-700">Strong regional demand for fish protein with existing supply gaps in East Africa.</p>
            </Card>
            <Card className="p-6 border-l-4 border-l-green-600">
              <h3 className="text-xl font-bold text-blue-900 mb-2">Proven Track Record</h3>
              <p className="text-gray-700">Our operational systems have demonstrated consistent high survival rates and profitability.</p>
            </Card>
            <Card className="p-6 border-l-4 border-l-green-600">
              <h3 className="text-xl font-bold text-blue-900 mb-2">Scalability</h3>
              <p className="text-gray-700">Our model is designed for expansion, allowing for growth without compromising quality.</p>
            </Card>
            <Card className="p-6 border-l-4 border-l-green-600">
              <h3 className="text-xl font-bold text-blue-900 mb-2">Expert Management</h3>
              <p className="text-gray-700">Led by experienced professionals with deep knowledge of aquaculture operations.</p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 px-4 bg-blue-900 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Invest?</h2>
          <p className="text-xl mb-8 text-blue-100">Contact us today to discuss investment opportunities and partnership possibilities.</p>
          <Button onClick={() => setLocation("/contact")} className="bg-white text-blue-900 hover:bg-blue-50 px-8 py-6 text-lg font-semibold">
            Get in Touch
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-12 px-4">
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
