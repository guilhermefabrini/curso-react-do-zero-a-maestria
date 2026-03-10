import { useState, useEffect } from "react";
import { Sparkles, Menu, X } from "lucide-react";

const Navbar = () => {
  // Este estado é usado para controlar a abertura e fechamento do menu para mobile.
  const [open, setOpen] = useState(false);
  const [isTop, setIsTop] = useState(true);

  const navLinks = [
    { href: "#features", label: "Recursos" },
    { href: "#testimonials", label: "Depoimentos" },
    { href: "#pricing", label: "Preços" },
    { href: "#faq", label: "FAQ" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsTop(window.scrollY <= 1);
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      {/* Navbar */}
      <header
        className={`bg-slate-950 sticky top-0 z-40 border-b border-white/5 ${
          isTop
            ? "bg-slate-950 sticky top-0 z-40 border-b border-white/5"
            : "bg-white-950 sticky top-0 z-40 border-b border-white/5 shadow-lg"
        }`}
      >
        <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <img src="../../public/gteclg.png" className="w-30 rounded-lg" />
          </a>

          <nav className="hidden md:flex items-center gap-6 text-sm">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="hover:text-sky-300 transition"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <button
            className="md:hidden p-2 rounded-lg"
            onClick={() => setOpen(true)}
          >
            <Menu className="size-5" />
          </button>
        </div>

        {open && (
          <div className="md:hidden">
            <div className="fixed bg-black/60" onClick={() => setOpen(false)}>
              <div className="fixed right-0 top-0 h-full w-80 bg-slate-900 border-l border-white/10 p-6">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <img
                      src="../../public/gteclg.png"
                      className="w-30 rounded-lg"
                    />
                  </div>
                  <button
                    className="p-2 rounded-lg hover:text-sky-300 transition cursor-pointer"
                    onClick={() => setOpen(false)}
                  >
                    <X className="size-5" />
                  </button>
                </div>
                <div className="flex flex-col gap-4 bg-slate-900 p-4 w-90">
                  {navLinks.map((l) => (
                    <a
                      key={l.href}
                      href={l.href}
                      className="text-slate-200 hover:text-sky-300 transition"
                      onClick={() => setOpen(false)}
                    >
                      {l.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}

export default Navbar;