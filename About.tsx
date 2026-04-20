import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useLocation } from "wouter";
import { Eye, Target } from "lucide-react";

export default function About() {
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
            <button onClick={() => setLocation("/about")} className="text-blue-700 hover:text-blue-900">About</button>
            <button onClick={() => setLocation("/operations")} className="text-gray-700 hover:text-blue-700">Operations</button>
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
          <h1 className="text-5xl font-bold">About Johary Aquaculture</h1>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <p className="text-gray-700 mb-4 text-lg leading-relaxed">Johary Aquaculture Company Limited is a modern, data-driven aquaculture enterprise based in Kigoma Kwaga, Tanzania. Established in 2025, the company focuses on scalable, high-efficiency fish production using intensive tank systems.</p>
              <p className="text-gray-700 mb-4 text-lg leading-relaxed">We combine structured feeding, strict water quality management, and data-driven monitoring (JA-EOS) to achieve high survival rates and strong production performance.</p>
            </div>
            <div className="bg-blue-100 rounded-lg h-64 flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl font-bold text-blue-600 mb-2">2025</div>
                <p className="text-blue-800 font-semibold">Year Established</p>
              </div>
            </div>
          </div>

          {/* Vision and Mission */}
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8 border-l-4 border-l-blue-600">
              <div className="flex items-center mb-4">
                <Eye className="w-8 h-8 text-blue-600 mr-3" />
                <h3 className="text-2xl font-bold text-blue-900">Vision</h3>
              </div>
              <p className="text-gray-700 text-lg">To become a leading commercial aquaculture platform in East Africa.</p>
            </Card>

            <Card className="p-8 border-l-4 border-l-green-600">
              <div className="flex items-center mb-4">
                <Target className="w-8 h-8 text-green-600 mr-3" />
                <h3 className="text-2xl font-bold text-blue-900">Mission</h3>
              </div>
              <p className="text-gray-700 text-lg">To produce high-quality fish sustainably while supporting food security, job creation, and aquaculture development.</p>
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
