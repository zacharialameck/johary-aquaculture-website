import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useLocation } from "wouter";
import { BookOpen, Users, Briefcase, GraduationCap } from "lucide-react";

export default function Training() {
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
            <button onClick={() => setLocation("/training")} className="text-blue-700 hover:text-blue-900">Training</button>
            <button onClick={() => setLocation("/investment")} className="text-gray-700 hover:text-blue-700">Investment</button>
            <button onClick={() => setLocation("/team")} className="text-gray-700 hover:text-blue-700">Team</button>
            <button onClick={() => setLocation("/contact")} className="text-gray-700 hover:text-blue-700">Contact</button>
          </div>
        </div>
      </nav>

      {/* Page Header */}
      <section className="bg-blue-900 text-white py-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-5xl font-bold">Aquaculture Training Programs</h1>
        </div>
      </section>

      {/* Training Content */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-blue-900 mb-8">Our Training Services</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gray-700 mb-6 text-lg">We provide hands-on training in all aspects of modern aquaculture management to ensure success for new and existing farmers.</p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center"><span className="text-blue-600 mr-3">✓</span> Intensive tank systems operation</li>
                <li className="flex items-center"><span className="text-blue-600 mr-3">✓</span> Feeding and FCR optimization</li>
                <li className="flex items-center"><span className="text-blue-600 mr-3">✓</span> Water quality management</li>
                <li className="flex items-center"><span className="text-blue-600 mr-3">✓</span> Fish health management</li>
                <li className="flex items-center"><span className="text-blue-600 mr-3">✓</span> Farm operations & logistics</li>
              </ul>
            </div>
            <div className="bg-blue-100 rounded-lg h-64 flex items-center justify-center">
              <BookOpen className="w-24 h-24 text-blue-600" />
            </div>
          </div>
        </div>
      </section>

      {/* Target Audience */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-blue-900 mb-12 text-center">Who We Train</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <GraduationCap className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-blue-900 mb-2">New Farmers</h3>
              <p className="text-gray-700">Start your aquaculture journey with a solid foundation in modern techniques.</p>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <Users className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-blue-900 mb-2">Existing Farmers</h3>
              <p className="text-gray-700">Upgrade your skills with advanced production and management strategies.</p>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <Briefcase className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-blue-900 mb-2">Farm Workers</h3>
              <p className="text-gray-700">Professionalize your staff with practical operational training.</p>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <Users className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-blue-900 mb-2">Investors</h3>
              <p className="text-gray-700">Understand the technical side of your investment to make informed decisions.</p>
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
