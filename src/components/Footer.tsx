import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-100 bg-gray-50">
      <div className="container-page py-12">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <Link href="/" className="text-xl font-bold text-brand-600">
              Wiksta
            </Link>
            <p className="mt-3 text-sm leading-6 text-gray-600">
              Run your sports venue on WhatsApp. Bookings, payments, and
              customer management — all in one place.
            </p>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900">Product</h3>
            <ul className="mt-4 space-y-3">
              <li>
                <Link
                  href="/features"
                  className="text-sm text-gray-600 hover:text-brand-600"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  href="/pricing"
                  className="text-sm text-gray-600 hover:text-brand-600"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  href="/for-venues"
                  className="text-sm text-gray-600 hover:text-brand-600"
                >
                  For Venue Owners
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900">Company</h3>
            <ul className="mt-4 space-y-3">
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-gray-600 hover:text-brand-600"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900">Connect</h3>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href="https://wa.me/1234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-600 hover:text-brand-600"
                >
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-gray-200 pt-8">
          <p className="text-center text-xs leading-5 text-gray-500">
            &copy; {currentYear} Wiksta. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
