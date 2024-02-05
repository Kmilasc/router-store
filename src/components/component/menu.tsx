import Link from "next/link"
import { categories } from "./store-showcase"


export function Menu() {
  return (
    <header className="flex items-center justify-between h-16 px-6 bg-gray-100 dark:bg-gray-800">
      <Link className="text-2xl font-semibold" href="/">Our Store</Link>
      <nav className="flex gap-4">
        {categories.map((item) => (
          <Link className="text-lg font-medium hover:text-gray-700 dark:hover:text-gray-300" href={`/#${item}`}>
            {item}
          </Link>
        ))}
      </nav>
    </header>
  )
}
