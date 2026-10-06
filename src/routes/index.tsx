import { createFileRoute } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";
import { telegramLink } from "@/config";
import { useReveal } from "@/hooks/useReveal";
import hero from "@/assets/hero.jpg";
import g1 from "@/assets/g1.jpg";
import g2 from "@/assets/g2.jpg";
import g3 from "@/assets/g3.jpg";
import g4 from "@/assets/g4.jpg";
import g5 from "@/assets/g5.jpg";
import g6 from "@/assets/g6.jpg";

const TITLE = "Ateliê Bela — Unhas & Beleza | Agende pelo Telegram";
const DESC =
  "Manicure, pedicure, gel, alongamento e sobrancelha. Agende seu horário em 1 minuto pelo Telegram, 24 horas por dia.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const TG_LABEL = "Agendar pelo Telegram (abre em nova aba)";

/* ---------- Ícones simples ---------- */
const Check = ({ className = "h-5 w-5" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
    <path d="M5 12l5 5L20 7" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
const Clock = () => (
  <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3 2" strokeLinecap="round" />
  </svg>
);
const ChatIcon = () => (
  <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
    <path d="M21 12a8 8 0 01-11.6 7.1L4 20l1-4.6A8 8 0 1121 12z" strokeLinejoin="round" />
  </svg>
);

/* ---------- Botão de agendar ---------- */
function AgendarLink({ servico, className, children }: { servico?: string; className: string; children: ReactNode }) {
  return (
    <a href={telegramLink(servico)} target="_blank" rel="noopener" aria-label={TG_LABEL} className={className}>
      {children}
    </a>
  );
}

/* ---------- Seção com animação ---------- */
function Section({ id, labelId, className = "", children }: { id?: string; labelId: string; className?: string; children: ReactNode }) {
  const ref = useReveal<HTMLElement>();
  return (
    <section id={id} aria-labelledby={labelId} ref={ref} className={`reveal px-5 py-16 md:py-24 ${className}`}>
      <div className="mx-auto max-w-6xl">{children}</div>
    </section>
  );
}

/* ---------- Dados ---------- */
const NAV = [
  { href: "#servicos", label: "Serviços" },
  { href: "#como-agendar", label: "Como agendar" },
  { href: "#depoimentos", label: "Depoimentos" },
  { href: "#duvidas", label: "Dúvidas" },
  { href: "#contato", label: "Contato" },
];

const CATEGORIAS = ["Todos", "Mãos", "Pés", "Gel e alongamento", "Sobrancelha"];

const SERVICOS = [
  { nome: "Manicure", cats: ["Mãos"], desc: "Cutilagem, lixamento e esmaltação tradicional.", dur: "40 min", preco: "R$ 35", cod: "manicure" },
  { nome: "Pedicure", cats: ["Pés"], desc: "Cuidado completo dos pés com esmaltação tradicional.", dur: "50 min", preco: "R$ 40", cod: "pedicure" },
  { nome: "Pé e mão", cats: ["Mãos", "Pés"], desc: "O combo clássico para sair renovada.", dur: "1h30", preco: "R$ 70", cod: "pe_e_mao" },
  { nome: "Spa dos pés", cats: ["Pés"], desc: "Esfoliação, hidratação profunda e massagem relaxante.", dur: "50 min", preco: "R$ 60", cod: "spa_pes" },
  { nome: "Esmaltação em gel", cats: ["Gel e alongamento"], desc: "Brilho e cor que duram até três semanas.", dur: "1h", preco: "R$ 80", cod: "gel" },
  { nome: "Alongamento em gel", cats: ["Gel e alongamento"], desc: "Unhas no formato e comprimento que você quiser.", dur: "2h30", preco: "R$ 160", cod: "alongamento" },
  { nome: "Manutenção de alongamento", cats: ["Gel e alongamento"], desc: "Reposição e acabamento para manter o alongamento perfeito.", dur: "1h30", preco: "R$ 110", cod: "manutencao" },
  { nome: "Design de sobrancelha", cats: ["Sobrancelha"], desc: "Modelagem respeitando o formato do seu rosto.", dur: "30 min", preco: "R$ 45", cod: "sobrancelha" },
];

const GALERIA = [
  { src: g1, alt: "Unhas curtas com esmaltação em gel na cor vinho" },
  { src: g2, alt: "Unhas amendoadas longas em tom nude com linhas douradas" },
  { src: g3, alt: "Unhas com francesinha clássica de pontas brancas" },
  { src: g4, alt: "Unhas quadradas rosa-claro com pequenas flores brancas" },
  { src: g5, alt: "Pés com pedicure e unhas esmaltadas de vermelho sobre toalha branca" },
  { src: g6, alt: "Unhas longas em formato bailarina, branco leitoso com detalhes em folha de ouro" },
];

const FAQ = [
  ["Preciso instalar algum aplicativo?", "Por enquanto, o agendamento é feito pelo Telegram, que é gratuito. Em breve, também pelo WhatsApp."],
  ["Como remarco ou cancelo?", "É só mandar uma mensagem na mesma conversa. Pedimos aviso com pelo menos 2 horas de antecedência."],
  ["Posso falar com uma pessoa?", "Claro. Peça na conversa e uma atendente do salão assume o atendimento."],
  ["Quais as formas de pagamento?", "Pix, cartão de débito, cartão de crédito e dinheiro, no salão."],
  ["Qual a tolerância de atraso?", "Até 15 minutos. Depois disso, talvez seja preciso remarcar para não atrasar a próxima cliente."],
  ["Vocês atendem sem horário marcado?", "Quando há horário livre, sim, mas agendando você garante sua vez."],
];

/* ---------- Página ---------- */
function Index() {
  return (
    <>
      <a href="#conteudo" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] btn btn-primary on-vinho">
        Pular para o conteúdo
      </a>
      <Header />
      <main id="conteudo" tabIndex={-1}>
        <Hero />
        <AntesAgora />
        <Servicos />
        <ComoAgendar />
        <Diferenciais />
        <Galeria />
        <Depoimentos />
        <Duvidas />
        <ChamadaFinal />
        <Contato />
      </main>
      <Footer />
      <a
        href={telegramLink()}
        target="_blank"
        rel="noopener"
        aria-label="Falar com o assistente de agendamento pelo Telegram"
        className="on-vinho fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-vinho text-creme shadow-suave hover:bg-vinho-escuro"
      >
        <ChatIcon />
      </a>
    </>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b bg-creme/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3">
        <a href="#" className="flex min-h-12 items-center font-display text-3xl text-vinho">Ateliê Bela</a>
        <nav aria-label="Menu principal" className="hidden md:block">
          <ul className="flex items-center gap-6">
            {NAV.map((n) => (
              <li key={n.href}><a href={n.href} className="flex min-h-12 items-center font-medium text-texto hover:text-vinho">{n.label}</a></li>
            ))}
          </ul>
        </nav>
        <div className="flex items-center gap-2">
          <AgendarLink className="btn btn-primary hidden sm:inline-flex">Agendar</AgendarLink>
          <button
            type="button"
            className="flex h-12 w-12 items-center justify-center rounded-full text-vinho md:hidden"
            aria-expanded={open}
            aria-controls="menu-mobile"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            onClick={() => setOpen(!open)}
          >
            <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              {open ? <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" /> : <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />}
            </svg>
          </button>
        </div>
      </div>
      {open && (
        <nav id="menu-mobile" aria-label="Menu principal (celular)" className="border-t px-5 pb-4 md:hidden">
          <ul>
            {NAV.map((n) => (
              <li key={n.href}><a href={n.href} onClick={() => setOpen(false)} className="flex min-h-12 items-center font-medium">{n.label}</a></li>
            ))}
            <li className="mt-2"><AgendarLink className="btn btn-primary w-full">Agendar</AgendarLink></li>
          </ul>
        </nav>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section aria-labelledby="hero-titulo" className="px-5 pb-16 pt-10 md:pb-24 md:pt-16">
      <div className="mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-2">
        <div>
          <p className="mb-4 inline-block rounded-full border border-dourado px-4 py-1 text-sm font-semibold uppercase tracking-widest text-dourado-escuro">Unhas &amp; Beleza</p>
          <h1 id="hero-titulo" className="text-5xl text-vinho md:text-7xl">Unhas lindas, agenda fácil.</h1>
          <p className="mt-6 max-w-xl text-texto-2">
            Marque seu horário em 1 minuto, a qualquer hora do dia. É só mandar uma mensagem: nosso assistente entende o que você precisa, confere a agenda e confirma na hora.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <AgendarLink className="btn btn-primary">Agendar agora</AgendarLink>
            <a href="#servicos" className="btn btn-outline">Ver serviços</a>
          </div>
          <p className="mt-4 text-base text-texto-2">Atendimento pelo Telegram, 24 horas por dia.</p>
        </div>
        <div className="relative">
          <div className="absolute -inset-3 -z-10 rounded-[2rem] bg-rosa" aria-hidden="true" />
          <img src={hero} width={1024} height={1280} alt="Mãos femininas com unhas curtas bem-feitas, esmaltadas em tom vinho, sobre tecido de linho claro" className="aspect-[4/5] w-full rounded-[1.5rem] object-cover" />
        </div>
      </div>
    </section>
  );
}

function AntesAgora() {
  const antes = ["Mandar mensagem no Instagram e esperar horas por uma resposta.", "Vai e volta até achar um horário que sirva.", "Só conseguir marcar no horário comercial."];
  const agora = ["Escrever do seu jeito, como se falasse com uma amiga.", "O assistente confere a agenda e confirma na hora.", "Agendar de madrugada, no ônibus ou no intervalo do trabalho."];
  return (
    <Section labelId="antes-titulo" className="bg-rosa">
      <h2 id="antes-titulo" className="text-center text-4xl text-vinho md:text-5xl">Chega de esperar resposta no direct</h2>
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        <div className="card p-8">
          <h3 className="flex items-center gap-3 text-3xl text-texto-2"><Clock /> Antes</h3>
          <ul className="mt-4 space-y-3 text-texto-2">{antes.map((t) => <li key={t} className="border-l-2 border-border pl-4">{t}</li>)}</ul>
        </div>
        <div className="card border-2 border-vinho p-8">
          <h3 className="flex items-center gap-3 text-3xl text-vinho"><Check className="h-6 w-6" /> Agora</h3>
          <ul className="mt-4 space-y-3">{agora.map((t) => <li key={t} className="flex gap-3"><span className="mt-1 text-vinho"><Check /></span>{t}</li>)}</ul>
        </div>
      </div>
    </Section>
  );
}

function Servicos() {
  const [filtro, setFiltro] = useState("Todos");
  const lista = filtro === "Todos" ? SERVICOS : SERVICOS.filter((s) => s.cats.includes(filtro));
  return (
    <Section id="servicos" labelId="servicos-titulo">
      <h2 id="servicos-titulo" className="text-4xl text-vinho md:text-5xl">Nossos serviços</h2>
      <p className="mt-3 max-w-2xl text-texto-2">Escolha o serviço e agende direto. Os valores são de referência e podem variar conforme o comprimento e a decoração.</p>
      <div className="mt-8 flex flex-wrap gap-3" role="group" aria-label="Filtrar serviços por categoria">
        {CATEGORIAS.map((c) => {
          const ativo = filtro === c;
          return (
            <button key={c} type="button" aria-pressed={ativo} onClick={() => setFiltro(c)} className={`btn px-5 ${ativo ? "btn-primary" : "btn-outline"}`}>
              {ativo && <Check />}{c}
            </button>
          );
        })}
      </div>
      <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {lista.map((s) => (
          <li key={s.cod} className="card flex flex-col p-6">
            <h3 className="text-3xl text-texto">{s.nome}</h3>
            <p className="mt-2 flex-1 text-texto-2">{s.desc}</p>
            <div className="mt-4 flex items-baseline justify-between border-t pt-4">
              <span className="text-texto-2">{s.dur}</span>
              <span className="font-display text-3xl text-dourado-escuro">{s.preco}</span>
            </div>
            <AgendarLink servico={s.cod} className="btn btn-primary mt-5 w-full">Agendar este serviço</AgendarLink>
          </li>
        ))}
      </ul>
    </Section>
  );
}

function ComoAgendar() {
  const passos = [
    ["Toque em Agendar", "O botão abre nossa conversa no Telegram."],
    ["Escreva do seu jeito", "Diga o serviço, o dia e o horário. Por exemplo: pé e mão sábado às 10h."],
    ["Pronto, confirmado", "Se o horário estiver livre, você recebe a confirmação na hora."],
  ];
  return (
    <Section id="como-agendar" labelId="como-titulo" className="bg-rosa">
      <div className="grid items-center gap-12 md:grid-cols-2">
        <div>
          <h2 id="como-titulo" className="text-4xl text-vinho md:text-5xl">Agendar é tão fácil quanto conversar</h2>
          <ol className="mt-8 space-y-6">
            {passos.map(([t, d], i) => (
              <li key={t} className="flex gap-4">
                <span className="on-vinho flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-vinho font-display text-2xl text-dourado">{i + 1}</span>
                <div><h3 className="text-2xl">{t}</h3><p className="text-texto-2">{d}</p></div>
              </li>
            ))}
          </ol>
        </div>
        <figure className="card mx-auto w-full max-w-md p-6">
          <div className="space-y-3">
            <p className="ml-auto max-w-[80%] rounded-2xl rounded-br-sm bg-vinho px-4 py-3 text-creme">Oi! Queria fazer pé e mão no sábado às 10h</p>
            <p className="max-w-[85%] rounded-2xl rounded-bl-sm bg-rosa px-4 py-3">Oi! Sábado às 10h está livre. Agendei pé e mão (1h30) para você. Te esperamos no Ateliê Bela!</p>
            <p className="ml-auto max-w-[80%] w-fit rounded-2xl rounded-br-sm bg-vinho px-4 py-3 text-creme">Obrigada!</p>
          </div>
          <figcaption className="mt-5 text-center text-base text-texto-2">Exemplo ilustrativo de conversa</figcaption>
        </figure>
      </div>
    </Section>
  );
}

function Diferenciais() {
  const itens = [
    ["Agenda aberta 24h", "Marque quando for melhor para você, até fora do horário de atendimento."],
    ["Confirmação na hora", "Nada de ficar esperando resposta para saber se deu certo."],
    ["Atendimento humano quando quiser", "Prefere falar com a gente? É só pedir na conversa que uma atendente assume."],
    ["Higiene em primeiro lugar", "Materiais esterilizados e lixas descartáveis em todos os atendimentos."],
  ];
  return (
    <Section labelId="dif-titulo">
      <h2 id="dif-titulo" className="text-center text-4xl text-vinho md:text-5xl">Por que escolher o Ateliê Bela</h2>
      <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {itens.map(([t, d]) => (
          <li key={t} className="card p-6">
            <span className="mb-4 block h-1 w-10 rounded-full bg-dourado" aria-hidden="true" />
            <h3 className="text-2xl">{t}</h3>
            <p className="mt-2 text-texto-2">{d}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}

function Galeria() {
  return (
    <Section labelId="galeria-titulo" className="bg-rosa">
      <h2 id="galeria-titulo" className="text-4xl text-vinho md:text-5xl">Nossos trabalhos</h2>
      <ul className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-3">
        {GALERIA.map((g) => (
          <li key={g.alt}><img src={g.src} alt={g.alt} width={816} height={816} loading="lazy" className="aspect-square w-full rounded-xl object-cover shadow-suave" /></li>
        ))}
      </ul>
    </Section>
  );
}

function Depoimentos() {
  const deps = [
    ["Marquei de madrugada, depois do plantão, e de manhã já estava confirmado. Salvou minha semana!", "Marina, 24 anos"],
    ["Eu vivia esquecendo de responder o direct e perdia o horário. Agora resolvo em um minuto.", "Cláudia, 47 anos"],
    ["Minha neta me ensinou uma vez e agora eu marco sozinha. Muito fácil!", "Dona Lourdes, 68 anos"],
  ];
  return (
    <Section id="depoimentos" labelId="dep-titulo">
      <h2 id="dep-titulo" className="text-center text-4xl text-vinho md:text-5xl">Quem vem, volta</h2>
      <ul className="mt-10 grid gap-6 md:grid-cols-3">
        {deps.map(([q, a]) => (
          <li key={a}>
            <figure className="card h-full p-8">
              <span className="font-display text-6xl leading-none text-dourado" aria-hidden="true">“</span>
              <blockquote className="text-lg">{q}</blockquote>
              <figcaption className="mt-4 font-semibold text-vinho">— {a}</figcaption>
            </figure>
          </li>
        ))}
      </ul>
    </Section>
  );
}

function Duvidas() {
  const [aberta, setAberta] = useState<number | null>(null);
  return (
    <Section id="duvidas" labelId="faq-titulo" className="bg-rosa">
      <div className="mx-auto max-w-3xl">
        <h2 id="faq-titulo" className="text-center text-4xl text-vinho md:text-5xl">Dúvidas frequentes</h2>
        <div className="mt-10 space-y-3">
          {FAQ.map(([p, r], i) => {
            const open = aberta === i;
            return (
              <div key={p} className="card">
                <h3 className="font-sans text-lg font-semibold">
                  <button
                    type="button"
                    id={`faq-btn-${i}`}
                    aria-expanded={open}
                    aria-controls={`faq-resp-${i}`}
                    onClick={() => setAberta(open ? null : i)}
                    className="flex min-h-14 w-full items-center justify-between gap-4 rounded-xl px-6 py-4 text-left"
                  >
                    {p}
                    <span className="font-display text-3xl text-vinho" aria-hidden="true">{open ? "−" : "+"}</span>
                  </button>
                </h3>
                <div id={`faq-resp-${i}`} role="region" aria-labelledby={`faq-btn-${i}`} hidden={!open} className="px-6 pb-5 text-texto-2">
                  {r}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}

function ChamadaFinal() {
  return (
    <section aria-labelledby="cta-titulo" className="on-vinho bg-vinho px-5 py-20 text-center">
      <h2 id="cta-titulo" className="mx-auto max-w-3xl text-4xl text-dourado md:text-6xl">Seu horário está a uma mensagem de distância</h2>
      <p className="mt-4 text-creme">Escolha o serviço, mande uma mensagem e pronto.</p>
      <AgendarLink className="btn btn-creme mt-8">Agendar agora</AgendarLink>
    </section>
  );
}

function Contato() {
  return (
    <Section id="contato" labelId="contato-titulo">
      <h2 id="contato-titulo" className="text-center text-4xl text-vinho md:text-5xl">Venha nos visitar</h2>
      <dl className="mt-10 grid gap-6 text-center md:grid-cols-3">
        <div className="card p-6"><dt className="font-semibold text-dourado-escuro">Endereço</dt><dd className="mt-1">Rua das Flores, 123 — Centro</dd></div>
        <div className="card p-6"><dt className="font-semibold text-dourado-escuro">Horário</dt><dd className="mt-1">Terça a sábado, das 9h às 19h</dd></div>
        <div className="card p-6"><dt className="font-semibold text-dourado-escuro">Instagram</dt><dd className="mt-1">@ateliebela</dd></div>
      </dl>
    </Section>
  );
}

function Footer() {
  return (
    <footer className="on-vinho bg-vinho-escuro px-5 py-10 text-center text-base text-creme">
      <p>© 2026 Ateliê Bela — Unhas &amp; Beleza</p>
      <p className="mt-1">Agendamento inteligente por BelaAgenda</p>
      <p className="mt-1">Site desenvolvido para fins acadêmicos.</p>
    </footer>
  );
}
