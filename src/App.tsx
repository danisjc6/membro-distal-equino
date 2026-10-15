import { useState } from "react";
import {
  navigation,
  anatomyRegions,
  imagingModalities,
  projectAbout,
} from "./data/content";
import ZoomableImage from "./components/ZoomableImage";
import type { Pathology, SubSection } from "./data/content";
import radiografia from "./assets/inicio/radiografia.png";
import carpo_dorsal from "./assets/anatomia/carpo_dorsal.png";
import ligg_lateral from "./assets/anatomia/ligg _lateral.png";
import metacarpo_palmar from "./assets/anatomia/metacarpo_palmar.png";
import ligg_palmar from "./assets/anatomia/ligg_palmar.png";
import falanges_dorsal from "./assets/anatomia/falanges_dorsal.png";

type View = "home" | "anatomia" | "patologias" | "imagem" | "sobre";

export default function App() {
  const [activeView, setActiveView] = useState<View>("home");
  const [activePathologyId, setActivePathologyId] = useState<string | null>(
    "fratura-mc2-mc4"
  );
  const [activeSectionId, setActiveSectionId] = useState<string>("anatomia");
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const allPathologies =
    navigation.find((n) => n.id === "patologias")?.pathologies ?? [];
  const activePathology =
    allPathologies.find((p) => p.id === activePathologyId) ?? null;

  function navigate(view: View, pathologyId?: string) {
    setActiveView(view);
    if (pathologyId) {
      setActivePathologyId(pathologyId);
      setActiveSectionId("anatomia");
    }
  }

  return (
    <div className="flex h-dvh flex-col overflow-hidden md:flex-row" style={{ fontFamily: "'Source Sans 3', sans-serif" }}>
      {/* Sidebar */}
      <aside
        className={`flex w-full shrink-0 flex-col md:h-full md:transition-all md:duration-300 ${sidebarOpen ? "md:w-64" : "md:w-16"}`}
        style={{ background: "#1c3d30", color: "#e8e3d8" }}
      >
        {/* Logo */}
        <div className="flex items-center gap-3 border-b px-3 py-3 md:px-4 md:py-5" style={{ borderColor: "rgba(255,255,255,0.08)" }}>
          <div className="shrink-0 w-8 h-8 rounded flex items-center justify-center text-white font-bold text-sm" style={{ background: "#b87333" }}>
            <HorseIcon />
          </div>
          <div className={sidebarOpen ? "" : "md:hidden"}>
              <p className="text-xs font-semibold tracking-widest uppercase opacity-60" style={{ fontFamily: "'Source Sans 3', sans-serif" }}>
                Anatomia
              </p>
              <p className="text-sm font-semibold leading-tight" style={{ fontFamily: "'Fraunces', serif" }}>
                Membro Torácico Distal
              </p>
          </div>
          {sidebarOpen && (
            <button
              onClick={() => setSidebarOpen(false)}
              aria-label="Recolher menu"
              title="Recolher menu"
              className="ml-auto hidden rounded p-2 opacity-60 transition-colors hover:bg-white/10 hover:opacity-100 md:block"
            >
              <ChevronIcon dir="left" />
            </button>
          )}
        </div>

        {/* Nav */}
        <nav className="flex flex-row overflow-x-auto py-2 md:flex-1 md:flex-col md:overflow-x-hidden md:overflow-y-auto md:py-4">
          {!sidebarOpen && (
            <button
              onClick={() => setSidebarOpen(true)}
              aria-label="Expandir menu"
              title="Expandir menu"
              className="mx-2 hidden h-10 w-10 shrink-0 items-center justify-center rounded opacity-60 transition-colors hover:bg-white/10 hover:opacity-100 md:flex md:mx-auto md:mb-3"
            >
              <ChevronIcon dir="right" />
            </button>
          )}
          <NavItem
            icon={<HomeIcon />}
            label="Início"
            active={activeView === "home"}
            collapsed={!sidebarOpen}
            onClick={() => navigate("home")}
          />
          <NavItem
            icon={<BoneIcon />}
            label="Anatomia"
            active={activeView === "anatomia"}
            collapsed={!sidebarOpen}
            onClick={() => navigate("anatomia")}
          />

          {/* Pathologies group */}
          <div className="shrink-0 md:mt-2">
            <NavItem
              icon={<StethoscopeIcon />}
              label="Patologias"
              active={activeView === "patologias"}
              collapsed={!sidebarOpen}
              onClick={() => navigate("patologias", "fratura-mc2-mc4")}
            />
            {sidebarOpen && activeView === "patologias" && (
              <div className="hidden space-y-0.5 pr-2 md:ml-9 md:mt-1 md:block">
                {allPathologies.map((p) => (
                  <button
                    key={p.id}
                    onClick={() => navigate("patologias", p.id)}
                    className={`w-full text-left text-xs px-2 py-1.5 rounded transition-colors ${
                      activePathologyId === p.id
                        ? "bg-white/10 text-white"
                        : "text-white/50 hover:text-white/80"
                    }`}
                  >
                    {p.shortTitle}
                  </button>
                ))}
              </div>
            )}
          </div>

          <NavItem
            icon={<ImageIcon />}
            label="Diagnóstico por Imagem"
            active={activeView === "imagem"}
            collapsed={!sidebarOpen}
            onClick={() => navigate("imagem")}
          />
          <div className="shrink-0 pt-2 md:mt-auto">
            <NavItem
              icon={<InfoIcon />}
              label="Sobre"
              active={activeView === "sobre"}
              collapsed={!sidebarOpen}
              onClick={() => navigate("sobre")}
            />
          </div>
        </nav>

        {/* Footer */}
        <div className="hidden border-t px-4 py-3 text-xs opacity-40 md:block" style={{ borderColor: "rgba(255,255,255,0.08)" }}>
          {sidebarOpen && <p>Ciências Agrárias · UFAPE</p>}
        </div>
      </aside>

      {/* Main content */}
      <main className="min-h-0 flex-1 overflow-y-auto" style={{ background: "#f5f2eb" }}>
        {activeView === "home" && <HomeView onNavigate={navigate} />}
        {activeView === "anatomia" && <AnatomyView />}
        {activeView === "patologias" && activePathology && (
          <>
            <div className="flex gap-1 overflow-x-auto border-b px-3 py-2 md:hidden" style={{ background: "#1c3d30", borderColor: "rgba(255,255,255,0.08)" }}>
              {allPathologies.map((pathology) => (
                <button
                  key={pathology.id}
                  onClick={() => navigate("patologias", pathology.id)}
                  className={`shrink-0 rounded px-3 py-2 text-xs ${
                    activePathologyId === pathology.id
                      ? "bg-white/15 text-white"
                      : "text-white/70"
                  }`}
                >
                  {pathology.shortTitle}
                </button>
              ))}
            </div>
            <PathologyView
              pathology={activePathology}
              activeSectionId={activeSectionId}
              setActiveSectionId={setActiveSectionId}
            />
          </>
        )}
        {activeView === "imagem" && <ImagingView />}
        {activeView === "sobre" && <AboutView />}
      </main>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Home                                                                   */
/* ------------------------------------------------------------------ */

function HomeView({ onNavigate }: { onNavigate: (view: View, pathologyId?: string) => void }) {
  return (
    <div className="min-h-full">
      {/* Hero */}
      <div className="relative overflow-hidden" style={{ background: "#1c3d30", minHeight: 380 }}>
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url(https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?w=1600&h=600&fit=crop&auto=format)`,
            backgroundSize: "cover",
            backgroundPosition: "center 40%",
          }}
        />
        <div className="relative z-10 mx-auto max-w-4xl px-5 py-14 sm:px-8 sm:py-20">
          <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "#b87333" }}>
            Ciências Agrárias · UFAPE
          </p>
          <h1 className="mb-4 text-4xl font-light leading-tight text-white sm:text-5xl" style={{ fontFamily: "'Fraunces', serif" }}>
            Anatomia Aplicada do<br />
            <em>Membro Torácico Distal</em>
          </h1>
          <p className="text-white/70 text-lg max-w-xl leading-relaxed">
            Guia interativo sobre anatomia, patologias e diagnóstico por imagem da região distal do membro torácico equino.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <button
              onClick={() => onNavigate("anatomia")}
              className="px-5 py-2.5 text-sm font-semibold rounded transition-colors"
              style={{ background: "#b87333", color: "#fff" }}
            >
              Explorar Anatomia
            </button>
            <button
              onClick={() => onNavigate("patologias", "fratura-mc2-mc4")}
              className="px-5 py-2.5 text-sm font-semibold rounded border border-white/30 text-white hover:bg-white/10 transition-colors"
            >
              Ver Patologias
            </button>
          </div>
        </div>
      </div>

      {/* Cards */}
      <div className="mx-auto max-w-4xl px-4 py-8 sm:px-8 sm:py-12">
        <h2 className="text-2xl font-semibold mb-8" style={{ fontFamily: "'Fraunces', serif", color: "#1c3d30" }}>
          Conteúdo da Plataforma
        </h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <HomeCard
            title="Anatomia"
            desc="Estudo sistemático das estruturas do membro torácico distal: ossos, articulações e tendões, com ênfase em anatomia aplicada."
            icon={<BoneIcon />}
            accent="#1c3d30"
            onClick={() => onNavigate("anatomia")}
          />
          <HomeCard
            title="Patologias"
            desc="Fraturas, desmites, tendinites e demais afecções com etiologia, fisiopatologia, diagnóstico e tratamento."
            icon={<StethoscopeIcon />}
            accent="#b87333"
            onClick={() => onNavigate("patologias", "fratura-mc2-mc4")}
          />
          <HomeCard
            title="Diagnóstico por Imagem"
            desc="Radiografia, ultrassonografia, ressonância magnética e tomografia: técnicas, projeções e interpretação."
            icon={<ImageIcon />}
            accent="#4a6741"
            onClick={() => onNavigate("imagem")}
          />
        </div>

        {/* Highlighted pathology */}
        <div className="mt-12">
          <div className="flex items-center justify-between mb-5">
            <h2 className="text-xl font-semibold" style={{ fontFamily: "'Fraunces', serif", color: "#1c3d30" }}>
              Patologia em Destaque
            </h2>
            <button
              onClick={() => onNavigate("patologias", "fratura-mc2-mc4")}
              className="text-sm font-medium"
              style={{ color: "#b87333" }}
            >
              Ver completo →
            </button>
          </div>
          <div
            className="rounded border p-6 cursor-pointer hover:shadow-md transition-shadow"
            style={{ background: "#fff", borderColor: "#d4cfc4" }}
            onClick={() => onNavigate("patologias", "fratura-mc2-mc4")}
          >
            <div className="flex items-start gap-4">
              <div
                className="shrink-0 w-10 h-10 rounded flex items-center justify-center"
                style={{ background: "rgba(28,61,48,0.08)" }}
              >
                <BoneIcon />
              </div>
              <div>
                <p className="text-xs font-semibold tracking-widest uppercase mb-1" style={{ color: "#b87333" }}>
                  Ossos Metacarpianos
                </p>
                <h3 className="text-lg font-semibold mb-2" style={{ fontFamily: "'Fraunces', serif" }}>
                  Fratura do II e IV Metacarpiano
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "#5a5a52" }}>
                  Os metacarpianos acessórios absorvem forças de torção transmitidas pelo carpo. Fraturas ocorrem por trauma direto, coice ou sobrecarga mecânica repetitiva, manifestando-se com claudicação aguda e dor localizada.
                </p>
                <div className="flex gap-2 mt-3 flex-wrap">
                  {["Diagnóstico", "Radiografia", "Tratamento Cirúrgico"].map((t) => (
                    <span
                      key={t}
                      className="text-xs px-2 py-0.5 rounded-full"
                      style={{ background: "rgba(28,61,48,0.08)", color: "#1c3d30" }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Anatomy preview */}
        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div
            className="relative rounded overflow-hidden"
            style={{ background: "#1c3d30", minHeight: 200 }}
          >
            <img
              src="https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?w=600&h=300&fit=crop&auto=format"
              alt="Cavalo em movimento"
              className="absolute inset-0 w-full h-full object-cover opacity-40"
            />
            <div className="relative p-6 h-full flex flex-col justify-end">
              <p className="text-white text-lg font-semibold mb-1" style={{ fontFamily: "'Fraunces', serif" }}>
                Biomecânica do Movimento
              </p>
              <p className="text-white/60 text-sm">
                Entenda como as forças se distribuem durante a locomoção
              </p>
            </div>
          </div>
          <div
            className="relative rounded overflow-hidden"
            style={{ background: "#3a2a18", minHeight: 200 }}
          >
            <img
              src={radiografia}
              alt="Diagnóstico por imagem veterinário"
              className="absolute inset-0 w-full h-full object-cover opacity-30"
            />
            <div className="relative p-6 h-full flex flex-col justify-end">
              <p className="text-white text-lg font-semibold mb-1" style={{ fontFamily: "'Fraunces', serif" }}>
                Imagem Diagnóstica
              </p>
              <p className="text-white/60 text-sm">
                Radiografia, US, RM e TC aplicadas ao membro distal
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function HomeCard({
  title,
  desc,
  icon,
  accent,
  onClick,
}: {
  title: string;
  desc: string;
  icon: React.ReactNode;
  accent: string;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="text-left rounded border p-5 hover:shadow-md transition-all group"
      style={{ background: "#fff", borderColor: "#d4cfc4" }}
    >
      <div
        className="w-9 h-9 rounded flex items-center justify-center mb-3"
        style={{ background: `${accent}18`, color: accent }}
      >
        {icon}
      </div>
      <h3 className="font-semibold mb-1.5 group-hover:underline" style={{ fontFamily: "'Fraunces', serif", color: "#1a1a18" }}>
        {title}
      </h3>
      <p className="text-sm leading-relaxed" style={{ color: "#6b6b60" }}>
        {desc}
      </p>
    </button>
  );
}

/* ------------------------------------------------------------------ */
/* Anatomy                                                                */
/* ------------------------------------------------------------------ */

function AnatomyView() {
  const [activeRegion, setActiveRegion] = useState(anatomyRegions[1].id);
  const region = anatomyRegions.find((r) => r.id === activeRegion)!;

  return (
    <div className="min-h-full">
      <PageHeader
        label="Anatomia"
        title="Estruturas do Membro Torácico Distal"
        subtitle="Carpo · Metacarpo · Boleto · Quartela · Casco"
      />

      <div className="mx-auto max-w-5xl px-4 py-6 sm:px-8 sm:py-8">
        {/* Region tabs */}
        <div className="flex gap-1 mb-8 overflow-x-auto pb-1">
          {anatomyRegions.map((r) => (
            <button
              key={r.id}
              onClick={() => setActiveRegion(r.id)}
              className={`shrink-0 px-4 py-2 text-sm font-medium rounded transition-colors ${
                activeRegion === r.id
                  ? "text-white"
                  : "hover:bg-black/5"
              }`}
              style={activeRegion === r.id ? { background: "#1c3d30" } : { color: "#5a5a52" }}
            >
              {r.name}
            </button>
          ))}
        </div>

        {/* Region content */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <div className="rounded border p-6" style={{ background: "#fff", borderColor: "#d4cfc4" }}>
            <p
              className="text-xs font-semibold tracking-widest uppercase mb-2"
              style={{ color: "#b87333" }}
            >
              {region.name}
            </p>
            <h2
              className="text-2xl font-semibold mb-4"
              style={{ fontFamily: "'Fraunces', serif", color: "#1c3d30" }}
            >
              {region.name}
            </h2>
            <p className="text-sm leading-relaxed mb-5" style={{ color: "#5a5a52" }}>
              {region.description}
            </p>
            <div>
              <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "#6b6b60" }}>
                Estruturas Principais
              </p>
              <ul className="space-y-2">
                {region.structures.map((s) => (
                  <li key={s} className="flex gap-2 text-sm items-start">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0" style={{ background: "#1c3d30" }} />
                    <span style={{ color: "#3a3a35" }}>{s}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div
            className="rounded overflow-hidden relative"
            style={{ background: "#d4cfc4", minHeight: 300 }}
          >
            <ZoomableImage
              src={regionImage(region.id)}
              alt={`Anatomia — ${region.name}`}
              className="w-full h-full object-contain"
            />
            <div
              className="absolute bottom-0 left-0 right-0 px-4 py-3 text-xs text-white/70"
              style={{ background: "linear-gradient(transparent, rgba(0,0,0,0.6))" }}
            >
              Fonte: Acervo do Laboratório de Anatomia e Patologia Animal
            </div>
          </div>
        </div>

        {/* All regions overview */}
        <div className="mt-10">
          <h3 className="text-lg font-semibold mb-4" style={{ fontFamily: "'Fraunces', serif", color: "#1c3d30" }}>
            Todas as Regiões
          </h3>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {anatomyRegions.map((r) => (
              <button
                key={r.id}
                onClick={() => setActiveRegion(r.id)}
                className="text-left rounded border p-4 hover:shadow-sm transition-all"
                style={{
                  background: activeRegion === r.id ? "rgba(28,61,48,0.05)" : "#fff",
                  borderColor: activeRegion === r.id ? "#1c3d30" : "#d4cfc4",
                }}
              >
                <p className="font-semibold text-sm mb-1" style={{ fontFamily: "'Fraunces', serif", color: "#1c3d30" }}>
                  {r.name}
                </p>
                <p className="text-xs leading-relaxed" style={{ color: "#8a8a80" }}>
                  {r.structures.length} estruturas
                </p>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function regionImage(id: string) {
  const map: Record<string, string> = {
    carpo: carpo_dorsal,
    metacarpo: metacarpo_palmar,
    boleto: ligg_lateral,
    pastern: ligg_palmar,
    casco: falanges_dorsal,
  };
  return map[id] ?? map.metacarpo;
}

/* ------------------------------------------------------------------ */
/* Pathology                                                              */
/* ------------------------------------------------------------------ */

function PathologyView({
  pathology,
  activeSectionId,
  setActiveSectionId,
}: {
  pathology: Pathology;
  activeSectionId: string;
  setActiveSectionId: (id: string) => void;
}) {
  const activeSection = pathology.sections.find((s) => s.id === activeSectionId) ?? pathology.sections[0];

  return (
    <div className="min-h-full">
      <PageHeader
        label={`Patologias · ${pathology.region}`}
        title={pathology.title}
        subtitle={pathology.overview}
      />

      <div className="mx-auto flex max-w-5xl flex-col gap-5 px-4 py-6 sm:px-8 sm:py-8 lg:flex-row lg:gap-8">
        {/* Section nav */}
        <aside className="w-full shrink-0 lg:w-44">
          <p className="mb-2 text-xs font-semibold uppercase tracking-widest lg:mb-3" style={{ color: "#6b6b60" }}>
            Seções
          </p>
          <nav className="flex gap-1 overflow-x-auto pb-1 lg:block lg:space-y-0.5 lg:overflow-visible">
            {pathology.sections.map((s) => (
              <button
                key={s.id}
                onClick={() => setActiveSectionId(s.id)}
                className={`w-auto shrink-0 whitespace-nowrap rounded px-3 py-2 text-left text-sm transition-colors lg:w-full ${
                  activeSectionId === s.id
                    ? "font-semibold"
                    : "hover:bg-black/5"
                }`}
                style={
                  activeSectionId === s.id
                    ? { background: "rgba(28,61,48,0.1)", color: "#1c3d30" }
                    : { color: "#6b6b60" }
                }
              >
                {s.title}
              </button>
            ))}
            <div className="shrink-0 border-l pl-1 lg:mt-3 lg:border-l-0 lg:border-t lg:pl-0 lg:pt-3" style={{ borderColor: "#d4cfc4" }}>
              <button
                onClick={() => setActiveSectionId("refs")}
                className={`w-auto shrink-0 whitespace-nowrap rounded px-3 py-2 text-left text-sm transition-colors lg:w-full ${
                  activeSectionId === "refs" ? "font-semibold" : "hover:bg-black/5"
                }`}
                style={
                  activeSectionId === "refs"
                    ? { background: "rgba(28,61,48,0.1)", color: "#1c3d30" }
                    : { color: "#6b6b60" }
                }
              >
                Referências
              </button>
            </div>
          </nav>
        </aside>

        {/* Section content */}
        <div className="flex-1 min-w-0">
          {activeSectionId === "refs" ? (
            <ReferencesSection refs={pathology.references} />
          ) : (
            <SectionContent section={activeSection} />
          )}
        </div>
      </div>
    </div>
  );
}

function SectionContent({ section }: { section: SubSection }) {
 return (
    <div
      className="rounded border p-5 sm:p-7"
      style={{ background: "#fff", borderColor: "#d4cfc4" }}
    >
      {section.images?.map((image, index) => (
        <div
          key={`${image.src}-${index}`}
          className="grid grid-cols-1 md:grid-cols-[45%_55%] gap-8 items-start mt-6 pt-6 border-t"
          style={{ borderColor: "#e8e3d8" }}
        >
          <figure className="m-0">
            <ZoomableImage
              src={image.src}
              alt={image.alt}
              className="w-full max-h-[400px] object-contain rounded"
            />

            {image.caption && (
              <figcaption
                className="text-xs mt-2 leading-relaxed"
                style={{ color: "#6b6b60" }}
              >
                {image.caption}
              </figcaption>
            )}
          </figure>

          <div className="pt-2 md:pl-6">
            {image.title && (
              <h3
                className="text-xl font-semibold mb-3"
                style={{
                  fontFamily: "'Fraunces', serif",
                  color: "#1c3d30",
                }}
              >
                {image.title}
              </h3>
            )}

            <p className="text-sm leading-7" style={{ color: "#3a3a35" }}>
              {image.explanation}
            </p>

            {image.source && (
              <p className="text-xs mt-5 italic leading-relaxed" style={{ color: "#8a8a80" }}>
                Fonte: {image.source}
              </p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

function ReferencesSection({ refs }: { refs: string[] }) {
  return (
    <div className="rounded border p-5 sm:p-7" style={{ background: "#fff", borderColor: "#d4cfc4" }}>
      <p className="text-xs font-semibold tracking-widest uppercase mb-1" style={{ color: "#b87333" }}>
        Bibliografia
      </p>
      <h2 className="text-2xl font-semibold mb-6" style={{ fontFamily: "'Fraunces', serif", color: "#1c3d30" }}>
        Referências
      </h2>
      <ul className="space-y-4">
        {refs.map((ref, i) => (
          <li key={i} className="flex gap-3 text-sm leading-relaxed">
            <span
              className="shrink-0 mt-0.5 w-6 h-6 rounded-full flex items-center justify-center text-xs font-mono font-bold"
              style={{ background: "rgba(28,61,48,0.08)", color: "#1c3d30" }}
            >
              {i + 1}
            </span>
            <span style={{ color: "#3a3a35", fontFamily: "'JetBrains Mono', monospace", fontSize: "0.78rem", lineHeight: 1.7 }}>
              {ref}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Imaging                                                                */
/* ------------------------------------------------------------------ */

function ImagingView() {
  const [active, setActive] = useState(imagingModalities[0].id);
  const modality = imagingModalities.find((m) => m.id === active)!;

  return (
    <div className="min-h-full">
      <PageHeader
        label="Diagnóstico por Imagem"
        title="Modalidades de Imagem"
        subtitle="Técnicas aplicadas ao diagnóstico do membro torácico distal equino"
      />

      <div className="mx-auto max-w-5xl px-4 py-6 sm:px-8 sm:py-8">
        {/* Modality tabs */}
        <div className="flex gap-2 mb-8 flex-wrap">
          {imagingModalities.map((m) => (
            <button
              key={m.id}
              onClick={() => setActive(m.id)}
              className={`px-5 py-2.5 rounded text-sm font-semibold transition-colors`}
              style={
                active === m.id
                  ? { background: "#1c3d30", color: "#fff" }
                  : { background: "#fff", color: "#5a5a52", border: "1px solid #d4cfc4" }
              }
            >
              <span
                className="text-xs font-mono mr-1.5"
                style={{ color: active === m.id ? "#b87333" : "#b87333" }}
              >
                {m.shortName}
              </span>
              {m.name}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {/* Info */}
          <div className="rounded border p-4 sm:p-6" style={{ background: "#fff", borderColor: "#d4cfc4" }}>
            <p
              className="text-xs font-semibold tracking-widest uppercase mb-2"
              style={{ color: "#b87333", fontFamily: "'JetBrains Mono', monospace" }}
            >
              {modality.shortName}
            </p>
            <h2 className="text-2xl font-semibold mb-4" style={{ fontFamily: "'Fraunces', serif", color: "#1c3d30" }}>
              {modality.name}
            </h2>
            <p className="text-sm leading-relaxed mb-6" style={{ color: "#5a5a52" }}>
              {modality.description}
            </p>

            <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "#6b6b60" }}>
              Indicações Clínicas
            </p>
            <ul className="space-y-2">
              {modality.indications.map((ind) => (
                <li key={ind} className="flex gap-2.5 text-sm items-start">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0" style={{ background: "#1c3d30" }} />
                  <span style={{ color: "#3a3a35" }}>{ind}</span>
                </li>
              ))}
            </ul>

            {modality.views && (
              <div className="mt-6 pt-5 border-t" style={{ borderColor: "#e8e3d8" }}>
                <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "#6b6b60" }}>
                  Projeções
                </p>
                <div className="space-y-2">
                  {modality.views.map((v) => (
                    <div key={v.code} className="flex items-center gap-3">
                      <span
                        className="shrink-0 text-xs font-bold font-mono px-2 py-0.5 rounded"
                        style={{ background: "rgba(28,61,48,0.08)", color: "#1c3d30" }}
                      >
                        {v.code}
                      </span>
                      <span className="text-sm" style={{ color: "#5a5a52" }}>
                        {v.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Modality images and projection references */}
          <div className="space-y-4">
            {modality.images?.map((image, index) => (
              <figure
                key={`${image.src}-${index}`}
                className="m-0 overflow-hidden rounded border p-4"
                style={{ background: "#fff", borderColor: "#d4cfc4" }}
              >
                <ZoomableImage
                  src={image.src}
                  alt={image.alt}
                  className="w-full max-h-[400px] object-contain rounded"
                />
                {image.title && (
                  <h3
                    className="text-lg font-semibold mt-4"
                    style={{ fontFamily: "'Fraunces', serif", color: "#1c3d30" }}
                  >
                    {image.title}
                  </h3>
                )}
                {image.caption && (
                  <figcaption className="text-xs mt-2 leading-relaxed" style={{ color: "#6b6b60" }}>
                    {image.caption}
                  </figcaption>
                )}
                <p className="text-sm leading-relaxed mt-3" style={{ color: "#3a3a35" }}>
                  {image.explanation}
                </p>
                {image.source && (
                  <p className="text-xs mt-3 italic" style={{ color: "#8a8a80" }}>
                    Fonte: {image.source}
                  </p>
                )}
              </figure>
            ))}

          </div>
        </div>

        {/* All modalities overview */}
        <div className="mt-10">
          <h3 className="text-lg font-semibold mb-4" style={{ fontFamily: "'Fraunces', serif", color: "#1c3d30" }}>
            Comparativo de Modalidades
          </h3>
          <div className="overflow-x-auto rounded border" style={{ borderColor: "#d4cfc4" }}>
            <table className="w-full min-w-[600px] text-sm">
              <thead>
                <tr style={{ background: "#1c3d30", color: "#e8e3d8" }}>
                  <th className="text-left px-4 py-3 font-semibold">Modalidade</th>
                  <th className="text-left px-4 py-3 font-semibold">Melhor para</th>
                  <th className="text-left px-4 py-3 font-semibold">Limitações</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { mod: "RX", best: "Estruturas ósseas, fraturas, articulações", limit: "Tecidos moles invisíveis" },
                  { mod: "US", best: "Tendões, ligamentos, líquido sinovial", limit: "Limitado em osso e casco" },
                  { mod: "RM", best: "Tecido mole + osso simultâneos", limit: "Custo elevado, requer anestesia" },
                  { mod: "TC", best: "Fraturas 3D complexas, cirurgia", limit: "Radiação, custo" },
                ].map((row, i) => (
                  <tr
                    key={row.mod}
                    style={{ background: i % 2 === 0 ? "#fff" : "#faf8f4", borderBottom: "1px solid #e8e3d8" }}
                  >
                    <td className="px-4 py-3">
                      <span
                        className="font-mono font-bold text-xs px-2 py-0.5 rounded"
                        style={{ background: "rgba(28,61,48,0.08)", color: "#1c3d30" }}
                      >
                        {row.mod}
                      </span>
                    </td>
                    <td className="px-4 py-3" style={{ color: "#3a3a35" }}>{row.best}</td>
                    <td className="px-4 py-3" style={{ color: "#8a8a80" }}>{row.limit}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* About                                                                 */
/* ------------------------------------------------------------------ */

function AboutView() {
  return (
    <div className="min-h-full">
      <PageHeader
        label="Sobre"
        title="Objetivo e desenvolvimento"
        subtitle="Informações gerais sobre a plataforma e a equipe envolvida na criação deste material educativo."
      />

      <div className="mx-auto max-w-4xl px-4 py-6 sm:px-8 sm:py-10">
        <div className="rounded border p-5 sm:p-7" style={{ background: "#fff", borderColor: "#d4cfc4" }}>
          <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "#b87333" }}>
            Projeto
          </p>
          <p className="text-base leading-8 mb-8" style={{ color: "#3a3a35" }}>
            {projectAbout.objective}
          </p>

          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "#6b6b60" }}>
                Desenvolvedores
              </p>
              <ul className="space-y-3">
                {projectAbout.developers.map((person) => (
                  <li key={person} className="flex gap-2.5 text-sm items-start">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full shrink-0" style={{ background: "#1c3d30" }} />
                    <span style={{ color: "#3a3a35" }}>{person}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "#6b6b60" }}>
                Finalidade
              </p>
              <p className="text-sm leading-7" style={{ color: "#3a3a35" }}>
                Facilitar a compreensão da anatomia e da semiologia do membro torácico distal equino, servindo como recurso didático para estudantes, profissionais e pesquisadores da área veterinária, que poderá ser potencializado com o uso dos materiais do Acervo 3D do Laboratório de Anatomia e Patologia Animal - UFAPE.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Shared UI                                                              */
/* ------------------------------------------------------------------ */

function PageHeader({ label, title, subtitle }: { label: string; title: string; subtitle: string }) {
  return (
    <div
      className="border-b px-4 py-6 sm:px-8 sm:py-8"
      style={{ background: "#fff", borderColor: "#d4cfc4" }}
    >
      <p className="text-xs font-semibold tracking-widest uppercase mb-2" style={{ color: "#b87333" }}>
        {label}
      </p>
      <h1 className="mb-2 text-2xl font-semibold sm:text-3xl" style={{ fontFamily: "'Fraunces', serif", color: "#1c3d30" }}>
        {title}
      </h1>
      <p className="text-sm leading-relaxed max-w-2xl" style={{ color: "#6b6b60" }}>
        {subtitle}
      </p>
    </div>
  );
}

function NavItem({
  icon, label, active, collapsed, onClick,
}: {
  icon: React.ReactNode; label: string; active: boolean; collapsed: boolean; onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      title={collapsed ? label : undefined}
      className={`flex w-auto shrink-0 items-center gap-2 px-3 py-2 text-xs transition-colors md:w-full md:gap-3 md:px-4 md:py-2.5 md:text-sm ${
        active ? "bg-white/10 text-white" : "text-white/60 hover:text-white hover:bg-white/5"
      }`}
    >
      <span className="shrink-0 w-5 h-5">{icon}</span>
      {!collapsed && <span className="whitespace-nowrap font-medium md:whitespace-normal">{label}</span>}
    </button>
  );
}

/* ------------------------------------------------------------------ */
/* Icons                                                                  */
/* ------------------------------------------------------------------ */

function HomeIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
      <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h4a1 1 0 001-1v-4h2v4a1 1 0 001 1h4a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
    </svg>
  );
}
function BoneIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-5 h-5">
      <path d="M9.5 2a3.5 3.5 0 0 1 2.5 5.97V8h1.03A3.5 3.5 0 0 1 22 11.5a3.5 3.5 0 0 1-5.97 2.5H16v-1.03A3.5 3.5 0 0 1 12.5 16a3.5 3.5 0 0 1-2.5-5.97V10H8.97A3.5 3.5 0 0 1 2 6.5 3.5 3.5 0 0 1 5.97 4H7v1.03A3.5 3.5 0 0 1 9.5 2z" />
    </svg>
  );
}
function StethoscopeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-5 h-5">
      <path d="M4.8 2.3A.3.3 0 1 0 5 2H4a2 2 0 0 0-2 2v5a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6V4a2 2 0 0 0-2-2h-1a.2.2 0 1 0 .3.3" />
      <path d="M8 15v1a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6v-4" />
      <circle cx="20" cy="10" r="2" />
    </svg>
  );
}
function ImageIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-5 h-5">
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <circle cx="8.5" cy="8.5" r="1.5" />
      <path d="m21 15-5-5L5 21" />
    </svg>
  );
}
function InfoIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-5 h-5">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 10v6" />
      <circle cx="12" cy="7.2" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}
function HorseIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M19 3c-1.1 0-2 .4-2.7 1.1L14 6.4V4a1 1 0 0 0-2 0v3.5l-2.3 2.3c-.9-.8-2-1.3-3.2-1.3-2.8 0-5 2.2-5 5 0 1.5.7 2.9 1.8 3.9L2 19a1 1 0 0 0 1.4 1.4L5 19c.5.3 1 .5 1.5.5H17a2 2 0 0 0 2-2v-5.2l2-2V7a4 4 0 0 0-2-4zm-6 13H6.5C5 16 4 14.9 4 13.5S5 11 6.5 11s2.5 1.1 2.5 2.5c0 .4-.1.8-.3 1.1L10 16h3v.5c0 .3-.1.5-.3.5H13z" />
    </svg>
  );
}
function ChevronIcon({ dir }: { dir: "left" | "right" }) {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
      {dir === "left" ? (
        <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" />
      ) : (
        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" />
      )}
    </svg>
  );
}
