"use client";

interface FooterProps {
  dict: {
    footer_empresa: string;
    footer_derechos: string;
    footer_inicio: string;
    footer_casos: string;
    footer_contacto: string;
    footer_correo: string;
    policy: string;
  };
}

export default function Footer({ dict }: FooterProps) {
  return (
    <footer className="bg-black text-gray-400 py-10 px-6 md:px-20 text-sm mt-32">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-6">
        <div>
          <p className="font-semibold text-white">{dict.footer_empresa}</p>
          <p className="mt-2">
            © {new Date().getFullYear()} {dict.footer_derechos}
          </p>
        </div>
        <div className="space-y-1">
          <p>
            <a href="#" className="hover:text-white">
              {dict.footer_inicio}
            </a>
          </p>
          <p>
            <a href="#casos" className="hover:text-white">
              {dict.footer_casos}
            </a>
          </p>
          <p>
            <a href="#contacto" className="hover:text-white">
              {dict.footer_contacto}
            </a>
          </p>
        </div>
        <div className="space-y-1">
          <p>
            <a href="mailto:hello@tulipan.ai" className="hover:text-white">
              {dict.footer_correo}
            </a>
          </p>
            <p>{dict.policy}</p>

        </div>
      </div>
    </footer>
  );
}
