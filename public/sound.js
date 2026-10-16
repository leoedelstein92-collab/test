// Petits effets sonores synthétisés (aucun fichier audio à charger).
(() => {
  let ctx = null;
  let muted = false;
  try { muted = localStorage.getItem("cc_muted") === "1"; } catch {}

  function ac() {
    if (!ctx) {
      const AC = window.AudioContext || window.webkitAudioContext;
      if (!AC) return null;
      ctx = new AC();
    }
    if (ctx.state === "suspended") ctx.resume();
    return ctx;
  }

  function tone(freq, { at = 0, dur = 0.12, type = "triangle", vol = 0.18, slide = 0 } = {}) {
    const a = ac();
    if (!a || muted) return;
    const t0 = a.currentTime + at;
    const o = a.createOscillator();
    const g = a.createGain();
    o.type = type;
    o.frequency.setValueAtTime(freq, t0);
    if (slide) o.frequency.exponentialRampToValueAtTime(freq * slide, t0 + dur);
    g.gain.setValueAtTime(0.0001, t0);
    g.gain.exponentialRampToValueAtTime(vol, t0 + 0.015);
    g.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);
    o.connect(g).connect(a.destination);
    o.start(t0);
    o.stop(t0 + dur + 0.02);
  }

  const SFX = {
    click: () => tone(520, { dur: 0.07, type: "square", vol: 0.06, slide: 1.4 }),
    pop: () => tone(380, { dur: 0.12, vol: 0.16, slide: 2.2 }),
    join: () => { tone(523, { dur: 0.1 }); tone(784, { at: 0.08, dur: 0.14 }); },
    submit: () => { tone(660, { dur: 0.08 }); tone(990, { at: 0.07, dur: 0.16 }); },
    tick: () => tone(1200, { dur: 0.04, type: "square", vol: 0.05 }),
    start: () => [392, 523, 659, 784].forEach((f, i) => tone(f, { at: i * 0.09, dur: 0.16, vol: 0.15 })),
    drum: () => { for (let i = 0; i < 10; i++) tone(110 + Math.random() * 20, { at: i * 0.06, dur: 0.05, type: "sawtooth", vol: 0.05 }); },
    reveal: () => tone(300, { dur: 0.18, vol: 0.12, slide: 2.5 }),
    win: () => [523, 659, 784, 1046, 784, 1046].forEach((f, i) => tone(f, { at: i * 0.11, dur: i === 5 ? 0.5 : 0.14, vol: 0.16 })),
  };

  window.SFX = {
    play: (name) => { try { SFX[name] && SFX[name](); } catch {} },
    get muted() { return muted; },
    toggle() {
      muted = !muted;
      try { localStorage.setItem("cc_muted", muted ? "1" : "0"); } catch {}
      if (!muted) SFX.pop();
      return muted;
    },
  };
})();
