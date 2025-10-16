import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-[#2D2D2D] text-white/80 py-12 relative overflow-hidden">
      {/* Wood texture effect */}
      <div className="absolute inset-0 opacity-5 bg-gradient-to-br from-[#DDBEA9] to-transparent"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-serif font-bold text-xl text-[#7FB77E] mb-4">TinyGardenKit 🌱</h3>
            <p className="text-sm text-white/60">Nature in your apartment</p>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Products</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="hover:text-[#7FB77E] transition-colors">
                  Kits
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#7FB77E] transition-colors">
                  Grow Lights
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#7FB77E] transition-colors">
                  Auto-Watering
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Information</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="hover:text-[#7FB77E] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#7FB77E] transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#7FB77E] transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="hover:text-[#7FB77E] transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#7FB77E] transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-sm text-white/60">
          <p className="mb-2">© 2025 TinyGardenKit. All rights reserved.</p>
          
        </div>
      </div>
    </footer>
  )
}
