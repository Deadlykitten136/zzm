import React from "react";
import { Route, Routes, useLocation, useNavigate, Navigate } from "react-router-dom";
import HomePage from "./pages/homepage.jsx";
import LoginPage from "./pages/login.jsx";
import { isAuthed } from "./auth/auth.js";

// automaticky načti všechny flow soubory, které existují v src/data/flow/*.json
const flowModules = import.meta.glob("./data/flow/*.json", { eager: true });

// všechny .jsx stránky v /pages (automatické routy)
const pageModules = import.meta.glob("./pages/**/*.jsx", { eager: true });

// "./pages/prvni_pomoc/uvod.jsx" -> "/prvni_pomoc/uvod"
function filePathToRoute(filePath) {
  return filePath.replace("./pages", "").replace(/\.jsx$/, "");
}

function NotFound() {
  return (
    <div className="card">
      <h2>404</h2>
      <p className="muted">Tahle stránka neexistuje (nebo není vytvořená).</p>
    </div>
  );
}

function getFlowSections(flow) {
  if (flow?.sections && Array.isArray(flow.sections)) return flow.sections;
  if (flow?.items && Array.isArray(flow.items)) {
    return [{ id: "items", title: flow.title ?? "Obsah", items: flow.items }];
  }
  return [];
}

function getStoredBool(key, defaultValue) {
  const raw = localStorage.getItem(key);
  if (raw === null) return defaultValue;
  return raw === "true";
}

function setStoredBool(key, value) {
  localStorage.setItem(key, value ? "true" : "false");
}

function Sidebar({ modules, isCollapsed, onToggle, currentPath, onNavigate }) {
  const safeModules = Array.isArray(modules) ? modules : [];

  return (
    <aside className={`sidebar ${isCollapsed ? "isCollapsed" : ""}`}>
      <div className="sidebarTop">
        <button className="sidebarToggle" onClick={onToggle} type="button">
          {isCollapsed ? "›" : "‹"}
        </button>

        {!isCollapsed && (
          <button
            type="button"
            className="sidebarBrand"
            onClick={() => onNavigate("/")}
            title="Domů"
            style={{
              background: "transparent",
              border: "none",
              color: "inherit",
              cursor: "pointer",
              padding: 0,
              fontWeight: 800,
              letterSpacing: "0.08em",
            }}
          >
            ZZM
          </button>
        )}
      </div>

      <nav className="sidebarNav">
        {safeModules.map((mod) => {
          const modTitle = mod?.title ?? mod?.name ?? mod?.id ?? "Modul";
          const modId = mod?.id ?? mod?.moduleId ?? modTitle;
          const groups = Array.isArray(mod?.groups) ? mod.groups : [];

          return (
            <div className="sidebarModule" key={modId}>
              {!isCollapsed && <div className="sidebarModuleTitle">{modTitle}</div>}

              <div className="sidebarGroups">
                {groups.map((g, gi) => {
                  const gTitle = g?.title ?? g?.name ?? `Sekce ${gi + 1}`;
                  const gItems = Array.isArray(g?.items) ? g.items : [];

                  // ✅ defaultně zavřené, otevře se jen aktivní sekce
                  const isActiveGroup = gItems.some((p) => p?.path === currentPath);

                  return (
                    <details className="sidebarGroup" key={`${modId}-g-${gi}`} open={isActiveGroup}>
                      {!isCollapsed && <summary className="sidebarGroupTitle">{gTitle}</summary>}

                      <div className="sidebarLinks">
                        {gItems.map((p) => {
                          const path = p?.path ?? "";
                          const title = p?.label ?? p?.title ?? p?.name ?? p?.id ?? "Stránka";
                          const active = path && currentPath === path;

                          return (
                            <button
                              key={`${modId}-${path}-${title}`}
                              className={`sidebarLink ${active ? "isActive" : ""}`}
                              onClick={() => path && onNavigate(path)}
                              type="button"
                              title={title}
                            >
                              {isCollapsed ? title.slice(0, 1) : title}
                            </button>
                          );
                        })}
                      </div>
                    </details>
                  );
                })}
              </div>
            </div>
          );
        })}
      </nav>
    </aside>
  );
}

function buildModulesFromFlowFiles() {
  const flows = Object.entries(flowModules)
    .map(([filePath, flow]) => {
      const fileName = filePath.split("/").pop() || "";
      const idFromFile = fileName.replace(".json", "");
      const moduleId = flow?.moduleId ?? idFromFile;
      const title = flow?.title ?? moduleId;

      const sections = getFlowSections(flow);
      const groups = sections.map((s, idx) => ({
        id: s?.id ?? `${moduleId}-sec-${idx}`,
        title: s?.title ?? `Sekce ${idx + 1}`,
        items: Array.isArray(s?.items) ? s.items : [],
      }));

      return { id: moduleId, title, groups };
    })
    .filter(Boolean);

  // preferované pořadí (ostatní se přidají nakonec)
  const preferredOrder = [
    "prvni_pomoc",
    "anatomie",
    "fyziologie_patologie",
    "farmakologie",
    "krevni_testy",
    "interna"
  ];

  const byId = new Map(flows.map((m) => [m.id, m]));
  const ordered = [];

  preferredOrder.forEach((id) => {
    if (byId.has(id)) ordered.push(byId.get(id));
  });

  flows.forEach((m) => {
    if (!preferredOrder.includes(m.id)) ordered.push(m);
  });

  return ordered;
}

// ✅ jednoduchý guard
function RequireAuth({ children }) {
  if (!isAuthed()) return <Navigate to="/login" replace />;
  return children;
}

export default function App() {
  const location = useLocation();
  const navigate = useNavigate();

  const [collapsed, setCollapsed] = React.useState(() =>
    getStoredBool("zzm:ui:sidebarCollapsed", false)
  );

  React.useEffect(() => {
    setStoredBool("zzm:ui:sidebarCollapsed", collapsed);
  }, [collapsed]);

  const modulesFromFlows = React.useMemo(() => buildModulesFromFlowFiles(), []);

  // ✅ Velký test (mix) jako extra modul (stránku si vytvoříš později)
  const bigTestModule = {
    id: "velky_test",
    title: "Velký test (mix)",
    groups: [
      {
        id: "mix",
        title: "Test",
        items: [{ path: "/test/velky_test", label: "Spustit velký test (mix)" }],
      },
    ],
  };

  const modules = [...modulesFromFlows, bigTestModule];

  return (
    <Routes>
      {/* veřejné */}
      <Route path="/login" element={<LoginPage />} />

      {/* zamčené */}
      <Route
        path="*"
        element={
          <RequireAuth>
            <div className={`layout ${collapsed ? "layoutSidebarCollapsed" : ""}`}>
              <Sidebar
                modules={modules}
                isCollapsed={collapsed}
                onToggle={() => setCollapsed((v) => !v)}
                currentPath={location.pathname}
                onNavigate={(path) => navigate(path)}
              />

              <main className="content">
                <Routes>
                  <Route path="/" element={<HomePage />} />

                  {/* automatické routy pro všechny stránky v /pages */}
                  {Object.entries(pageModules).map(([filePath, mod]) => {
                    const path = filePathToRoute(filePath);

                    // nechceme duplikovat /login, ten řešíme výše
                    if (path === "/login") return null;

                    const Component = mod.default;
                    if (!Component) return null;
                    return <Route key={filePath} path={path} element={<Component />} />;
                  })}

                  <Route path="*" element={<NotFound />} />
                </Routes>
              </main>
            </div>
          </RequireAuth>
        }
      />
    </Routes>
  );
}
