import React from "react";
import { Link, useLocation } from "react-router-dom";

function flattenFlow(flow) {
  if (!flow) return [];
  if (Array.isArray(flow.items)) return flow.items;
  if (Array.isArray(flow.sections)) {
    return flow.sections.flatMap((s) => (Array.isArray(s.items) ? s.items : []));
  }
  return [];
}

export default function FlowNav({ flow, moduleId }) {
  const location = useLocation();
  const items = React.useMemo(() => flattenFlow(flow), [flow]);

  const index = items.findIndex((it) => it.path === location.pathname);
  const total = items.length;

  if (total === 0 || index === -1) return null;

  const prev = index > 0 ? items[index - 1] : null;
  const next = index < total - 1 ? items[index + 1] : null;

  // uložíme orientační progress: “kde jsem v modulu”
  React.useEffect(() => {
    if (!moduleId) return;
    localStorage.setItem(`zzm:progress:${moduleId}:index`, String(index));
  }, [moduleId, index]);

  return (
    <div className="flowNav">
      <div className="flowNavRow">
        <div className="muted small">
          Krok <strong>{index + 1}</strong> / <strong>{total}</strong>
        </div>

        <div className="flowNavButtons">
          {prev ? (
            <Link className="btnSmallGhost" to={prev.path} title={prev.label}>
              ← Předchozí
            </Link>
          ) : (
            <span className="btnSmallGhost disabled">← Předchozí</span>
          )}

          {next ? (
            <Link className="btnSmall" to={next.path} title={next.label}>
              Další →
            </Link>
          ) : (
            <span className="btnSmall disabled">Další →</span>
          )}
        </div>
      </div>

      {next && (
        <div className="muted small" style={{ marginTop: 6 }}>
          Následuje: <strong>{next.label}</strong>
        </div>
      )}
    </div>
  );
}
