import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

// Načti všechny flow soubory automaticky (co existují ve složce)
const flowFiles = import.meta.glob("../data/flow/*.json", { eager: true });

function getFlowSections(flow) {
  if (flow?.sections && Array.isArray(flow.sections)) return flow.sections;
  if (flow?.items && Array.isArray(flow.items)) {
    return [{ id: "items", title: flow.title ?? "Obsah", items: flow.items }];
  }
  return [];
}

function normalizePath(p) {
  if (!p) return "";
  return p.startsWith("/") ? p : `/${p}`;
}

function firstPathSegment(pathname) {
  // "/anatomie/nazvoslovi/roviny_tela" -> "anatomie"
  const seg = pathname.split("/").filter(Boolean)[0];
  return seg || "";
}

function buildIndexFromFlow(flow) {
  const sections = getFlowSections(flow);
  const flat = [];

  sections.forEach((s) => {
    const items = Array.isArray(s?.items) ? s.items : [];
    items.forEach((it) => {
      const path = normalizePath(it?.path);
      const label = it?.label ?? it?.title ?? it?.name ?? it?.id ?? "Stránka";
      if (path) flat.push({ path, label });
    });
  });

  return flat;
}

function findFlowForModule(moduleId) {
  // flow může mít moduleId v obsahu, nebo se bere z názvu souboru
  const entries = Object.entries(flowFiles).map(([filePath, flow]) => {
    const fileName = filePath.split("/").pop() || "";
    const fileId = fileName.replace(".json", "");
    const id = flow?.moduleId ?? fileId;
    return { id, flow };
  });

  return entries.find((e) => e.id === moduleId)?.flow ?? null;
}

export default function PageLayout({ title, lead, children }) {
  const location = useLocation();
  const navigate = useNavigate();

  const moduleId = firstPathSegment(location.pathname);
  const flow = React.useMemo(() => findFlowForModule(moduleId), [moduleId]);

  const flatIndex = React.useMemo(() => {
    if (!flow) return [];
    return buildIndexFromFlow(flow);
  }, [flow]);

  const currentIndex = React.useMemo(() => {
    const p = normalizePath(location.pathname);
    return flatIndex.findIndex((x) => x.path === p);
  }, [flatIndex, location.pathname]);

  const prevPath = currentIndex > 0 ? flatIndex[currentIndex - 1]?.path : null;
  const nextPath =
    currentIndex >= 0 && currentIndex < flatIndex.length - 1
      ? flatIndex[currentIndex + 1]?.path
      : null;

  return (
    <div className="page">
      <div className="pageCard">
        <div className="card">
          <h1 className="pageTitle">{title}</h1>
          {lead ? <div className="muted">{lead}</div> : null}
        </div>

        {children}

        {/* Navigace se ukáže jen pokud jsme stránku našli ve flow */}
        {currentIndex >= 0 && flatIndex.length > 0 ? (
          <div className="flowNav">
            <div className="flowNavRow">
              <div className="small muted">
                Krok {currentIndex + 1} / {flatIndex.length}
              </div>

              <div className="flowNavButtons">
                <button
                  type="button"
                  className={`btnSmallGhost ${!prevPath ? "disabled" : ""}`}
                  onClick={() => prevPath && navigate(prevPath)}
                  disabled={!prevPath}
                >
                  ← Předchozí
                </button>

                <button
                  type="button"
                  className={`btnSmall ${!nextPath ? "disabled" : ""}`}
                  onClick={() => nextPath && navigate(nextPath)}
                  disabled={!nextPath}
                >
                  Další →
                </button>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}
