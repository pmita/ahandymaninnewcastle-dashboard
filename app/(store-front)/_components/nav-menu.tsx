// NEXT
import Link from "next/link"

export async function NavMenu() {
  return (
    <nav className="container min-h-[10vh] mx-auto bg-secondary flex justify-between items-center p-4">
      <Link 
        href="/" 
        className="text-md text-primary font-poppins font-bold"
      >
        A <span className="text-alternate">Handyman</span> in Newcastle
      </Link>
      <ul className="flex gap-4 pt-1.5 text-md lg:pt-0 lg:text-lg">
        <li className="lg:px-4">
          <Link 
            href="/projects" 
            className="text-primary font-semibold hover:text-alternate"
          >
            Projects
          </Link>
        </li>
        <li className="lg:pl-4">
          <Link 
            href="/contact" 
            className="text-primary font-semibold hover:text-alternate"
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  )
}