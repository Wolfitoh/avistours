"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Search, ChevronDown, Menu, X } from "lucide-react"

const navLinks = [
    { label: "Inicio", href: "/" },
    { label: "Tours", href: "/packages" },
    { label: "Blog", href: "/blog" },
    { label: "Operador", href: "/contact" },
]

export default function Navbar() {
    const pathname = usePathname()
    const [scrolled, setScrolled] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 1)
        }

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    const isActive = (path: string) => pathname === path || (path !== "/" && pathname.startsWith(path))
    const closeMenu = () => setMenuOpen(false)

    const linkClass = (path: string) => `
    transition-colors duration-300
    ${isActive(path)
            ? scrolled
                ? "text-green-500"
                : "text-white"
            : scrolled
                ? "text-gray-800 hover:text-green-500"
                : "text-white/70 hover:text-white"
        }
  `

    const mobileLinkClass = (path: string) => `
    flex items-center justify-between rounded-md px-4 py-3 text-sm font-medium transition
    ${isActive(path)
            ? "bg-green-50 text-green-600"
            : "text-gray-700 hover:bg-slate-50 hover:text-green-600"
        }
  `

    return (
        <div
            className={`
        w-full z-50
        transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]
        ${scrolled
                    ? "fixed top-0 bg-white/85 backdrop-blur-md border-b border-white/20 shadow-[0_4px_20px_rgba(0,0,0,0.05)]"
                    : "absolute top-0 md:top-12 bg-white/0"
                }
      `}
        >
            <div className="max-w-6xl mx-auto px-4 py-3 md:py-4 flex justify-between items-center">

                {/* LOGO */}
                <Link
                    href="/"
                    aria-label="AviTours"
                    className="inline-flex shrink-0 items-center leading-none"
                >
                    {scrolled ? (
                        <span className="text-xl font-bold text-green-600 md:text-2xl">
                            <b className="text-orange-400">Avis</b><span className="text-yellow-600">.</span>Tours
                        </span>
                    ) : (
                        <Image
                            src="/logo_imagen_texto_avistours.webp"
                            alt="Logo AviTours"
                            width={220}
                            height={64}
                            priority
                            sizes="(min-width: 768px) 220px, 170px"
                            className="h-auto w-[95px] drop-shadow-[0_3px_12px_rgba(0,0,0,0.28)] transition md:w-[130px]"
                        />
                    )}
                </Link>

                {/* MENU */}
                <ul className="hidden lg:flex items-center text-[15px] gap-8">

                    {navLinks.slice(0, 2).map((link) => (
                        <li key={link.href}>
                            <Link href={link.href} className={linkClass(link.href)}>
                                {link.label}
                            </Link>
                        </li>
                    ))}

                    {/* DROPDOWN */}
                    {/* <li className="relative group">
                        <div className={dropdownClass}>
                            Guía <ChevronDown size={16} />
                        </div>

                        <div className="absolute top-8 left-0 opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-all duration-200">
                            <div className="bg-white text-black rounded-xl shadow-lg w-56 py-2">
                                <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Mareas</div>
                                <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Manglares</div>
                            </div>
                        </div>
                    </li> */}

                    {navLinks.slice(2).map((link) => (
                        <li key={link.href}>
                            <Link href={link.href} className={linkClass(link.href)}>
                                {link.label}
                            </Link>
                        </li>
                    ))}

                </ul>

                {/* RIGHT */}
                <div
                    className={`
            hidden sm:flex gap-4 transition-colors duration-300
            ${scrolled ? "text-black" : "text-white"}
          `}
                >
                    <Link href="/packages" aria-label="Buscar tours y blogs">
                        <Search size={20} className="cursor-pointer hover:text-green-500 transition" />
                    </Link>
                    {/* <User size={20} className="cursor-pointer hover:text-green-500 transition" /> */}
                </div>

                <button
                    type="button"
                    aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
                    aria-expanded={menuOpen}
                    onClick={() => setMenuOpen((open) => !open)}
                    className={`
            lg:hidden h-10 w-10 rounded-md border flex items-center justify-center transition
            ${scrolled
                            ? "border-slate-200 bg-white text-gray-800"
                            : "border-white/25 bg-white/10 text-white backdrop-blur"
                        }
          `}
                >
                    {menuOpen ? <X size={22} /> : <Menu size={22} />}
                </button>

            </div>

            <div
                className={`
          lg:hidden mx-4 overflow-hidden rounded-lg bg-white shadow-[0_18px_60px_rgba(15,23,42,0.18)] transition-all duration-300
          ${menuOpen ? "max-h-[520px] opacity-100 translate-y-0" : "max-h-0 opacity-0 -translate-y-2 pointer-events-none"}
        `}
            >
                <div className="p-3">
                    <Link href="/packages" onClick={closeMenu} className="flex items-center gap-3 border-b border-slate-100 px-3 py-3 text-gray-700">
                        <Search size={18} className="text-green-500" />
                        <span className="text-sm">Buscar tours y blogs</span>
                    </Link>

                    <nav className="py-3">
                        {navLinks.map((link) => (
                            <Link key={link.href} href={link.href} onClick={closeMenu} className={mobileLinkClass(link.href)}>
                                {link.label}
                                <span className="h-1.5 w-1.5 rounded-full bg-current opacity-40" />
                            </Link>
                        ))}

                        <div className="mt-2 rounded-md bg-slate-50 px-4 py-3">
                            <div className="flex items-center gap-2 text-sm font-medium text-gray-700">
                                Más información <ChevronDown size={16} />
                            </div>
                            <div className="mt-3 grid gap-2 text-sm text-gray-500">
                                <Link href="/blog/mareas-en-puerto-pizarro" onClick={closeMenu} className="hover:text-green-600 transition">Mareas</Link>
                                <Link href="/blog/isla-de-los-pajaros-y-manglares" onClick={closeMenu} className="hover:text-green-600 transition">Manglares</Link>
                            </div>
                        </div>
                    </nav>

                    <Link
                        href="/contact"
                        onClick={closeMenu}
                        className="flex items-center justify-center rounded-md bg-green-500 px-4 py-3 text-sm font-semibold text-white hover:bg-green-600 transition"
                    >
                        Planificar viaje
                    </Link>
                </div>
            </div>
        </div>
    )
}
