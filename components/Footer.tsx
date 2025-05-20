export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-gray-400 py-10 px-6 md:px-20 text-sm mt-32">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-6">
        <div>
          <p className="font-semibold text-white">Tulipán</p>
          <p className="mt-2">© {new Date().getFullYear()} Todos los derechos reservados.</p>
        </div>
        <div className="space-y-1">
          <p><a href="#" className="hover:text-white">Inicio</a></p>
          <p><a href="#" className="hover:text-white">Casos</a></p>
          <p><a href="#" className="hover:text-white">Contacto</a></p>
        </div>
        <div className="space-y-1">
          <p>🇨🇴 Colombia</p>
          <p>🇩🇪 Alemania</p>
          <p><a href="mailto:hello@tulipan.ai" className="hover:text-white">hello@tulipan.ai</a></p>
        </div>
      </div>
    </footer>
  );
}