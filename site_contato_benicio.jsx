export default function SiteContatoBenicio() {
  const contacts = [
    {
      title: "E-mail",
      value: "faculdadebc1@gmail.com",
      href: "mailto:faculdadebc1@gmail.com",
      description: "Para contato acadêmico, colaborações e oportunidades de pesquisa.",
    },
    {
      title: "WhatsApp",
      value: "+55 79 99865-4313",
      href: "https://wa.me/5579998654313",
      description: "Contato direto para conversas rápidas.",
    },
    {
      title: "ResearchGate",
      value: "Perfil de pesquisa",
      href: "https://www.researchgate.net/profile/Benicio-Cruz/research",
      description: "Publicações, atividades e conexões acadêmicas.",
    },
    {
      title: "ORCID",
      value: "0009-0001-3008-727X",
      href: "https://orcid.org/0009-0001-3008-727X",
      description: "Identificador acadêmico e produção científica.",
    },
    {
      title: "Google Scholar",
      value: "Perfil acadêmico",
      href: "https://scholar.google.com/citations?view_op=list_works&hl=pt-BR&hl=pt-BR&user=TgpVx6sAAAAJ",
      description: "Citações, artigos e histórico de publicações.",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(59,130,246,0.18),_transparent_30%),radial-gradient(circle_at_bottom_left,_rgba(16,185,129,0.16),_transparent_28%)]" />

        <div className="relative mx-auto max-w-6xl px-6 py-16 md:px-10 md:py-24">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <div className="mb-4 inline-flex items-center rounded-full border border-slate-700 bg-slate-900/70 px-4 py-1 text-sm text-slate-300 backdrop-blur">
                Instituto Tecnológico de Aeronáutica · ITA
              </div>

              <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-white md:text-6xl">
                Benicio Barbosa Cruz
              </h1>

              <p className="mt-3 text-xl text-blue-200 md:text-2xl">
                PhD Student
              </p>

              <p className="mt-6 max-w-3xl text-base leading-8 text-slate-300 md:text-lg">
                Doutorando no ITA, com atuação em sistemas de controle, guiamento e navegação de
                sistemas aéreos multiagentes, com foco em robótica aérea, enxames de drones,
                controle preditivo, segurança crítica e métodos baseados em otimização.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="mailto:faculdadebc1@gmail.com"
                  className="rounded-2xl bg-blue-600 px-5 py-3 text-sm font-medium text-white shadow-lg shadow-blue-950/40 transition hover:scale-[1.02] hover:bg-blue-500"
                >
                  Enviar e-mail
                </a>
                <a
                  href="https://wa.me/5579998654313"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-2xl border border-slate-700 bg-slate-900 px-5 py-3 text-sm font-medium text-slate-100 transition hover:scale-[1.02] hover:border-slate-500 hover:bg-slate-800"
                >
                  Falar no WhatsApp
                </a>
              </div>
            </div>

            <div className="rounded-[28px] border border-slate-800 bg-slate-900/80 p-6 shadow-2xl shadow-black/30 backdrop-blur">
              <div className="mb-4">
                <p className="text-sm uppercase tracking-[0.2em] text-slate-400">Resumo profissional</p>
                <h2 className="mt-2 text-2xl font-semibold text-white">Pesquisa e contato</h2>
              </div>

              <div className="space-y-4 text-sm leading-7 text-slate-300">
                <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-4">
                  <p className="font-medium text-white">Instituição</p>
                  <p>Instituto Tecnológico de Aeronáutica (ITA)</p>
                </div>

                <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-4">
                  <p className="font-medium text-white">Área de atuação</p>
                  <p>
                    Guiamento, navegação e controle de drones e sistemas multiagentes, com ênfase em
                    planejamento de trajetórias, controle preditivo, barreiras de segurança e
                    cooperação entre agentes.
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-4">
                  <p className="font-medium text-white">Disponível para</p>
                  <p>Contato acadêmico, colaborações em pesquisa, projetos e networking científico.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-16 md:px-10 md:pb-24">
        <div className="mb-8">
          <p className="text-sm uppercase tracking-[0.2em] text-slate-400">Contatos</p>
          <h2 className="mt-2 text-3xl font-semibold text-white">Canais para entrar em contato</h2>
          <p className="mt-3 max-w-2xl text-slate-300">
            Escolha o canal mais adequado para sua mensagem. Os links abaixo direcionam diretamente
            para cada plataforma.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {contacts.map((contact) => (
            <a
              key={contact.title}
              href={contact.href}
              target={contact.href.startsWith("http") ? "_blank" : undefined}
              rel={contact.href.startsWith("http") ? "noreferrer" : undefined}
              className="group rounded-[24px] border border-slate-800 bg-slate-900 p-6 shadow-lg shadow-black/20 transition hover:-translate-y-1 hover:border-blue-500/60 hover:bg-slate-800"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-lg font-semibold text-white">{contact.title}</h3>
                  <p className="mt-2 break-all text-sm text-blue-200">{contact.value}</p>
                </div>
                <span className="rounded-full border border-slate-700 px-3 py-1 text-xs text-slate-300 transition group-hover:border-blue-400 group-hover:text-blue-200">
                  Abrir
                </span>
              </div>
              <p className="mt-4 text-sm leading-6 text-slate-400">{contact.description}</p>
            </a>
          ))}
        </div>
      </section>

      <footer className="border-t border-slate-800 px-6 py-8 text-center text-sm text-slate-400 md:px-10">
        <p>Benicio Barbosa Cruz · PhD Student · ITA</p>
      </footer>
    </div>
  );
}
