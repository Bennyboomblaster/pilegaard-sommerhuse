// Labelled striped photo placeholders
window.PilePhoto = function({label = "photo", tone = "warm", caption, className = "", style = {}, objectLabel}) {
    const palettes = {
        warm: { bg: "#e8ddc9", stripe: "#dccdb1", ink: "#6b5a3f" },
        red: { bg: "#8b2a26", stripe: "#7a2420", ink: "#f4ede2" },
        forest: { bg: "#2b3a2a", stripe: "#243221", ink: "#d7d0bd" },
        steel: { bg: "#2a3138", stripe: "#232a30", ink: "#cfc9bf" },
        concrete: { bg: "#d9d4cc", stripe: "#ccc6bb", ink: "#3a3631" },
        cream: { bg: "#f4ede2", stripe: "#ebe1d0", ink: "#2b261d" },
        orange: { bg: "#d9541a", stripe: "#c34911", ink: "#fff5e6" },
        sky: { bg: "#c9d5dd", stripe: "#bcc9d2", ink: "#3a4852" },
        dune: { bg: "#d8c8a8", stripe: "#ccbc9a", ink: "#5a4a2e" },
    };
    const p = palettes[tone] || palettes.warm;
    return React.createElement("div", {
            className: "pile-photo " + className,
            style: { background: p.bg, color: p.ink, ...style },
        },
        React.createElement("div", { className: "pile-photo__stripes", style: { "--stripe": p.stripe } }),
        React.createElement("div", { className: "pile-photo__label" },
            React.createElement("span", { className: "pile-photo__dot" }),
            objectLabel || label
        ),
        caption && React.createElement("div", { className: "pile-photo__caption" }, caption)
    );
};
