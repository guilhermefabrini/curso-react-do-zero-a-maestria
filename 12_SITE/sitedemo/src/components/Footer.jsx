const Footer = () => {
    return (
      <div>
        <footer className="border-t border-white/5">
          <div className="mx-auto max-w-6xl px-4 py-8 flex flex-col items-center">
            <div className="mb-4">Minha Marca @ {new Date().getFullYear()}</div>
            <a href="#" className="text-slate-300">
              Política de Privacidade
            </a>
          </div>
        </footer>
      </div>
    );
}

export default Footer