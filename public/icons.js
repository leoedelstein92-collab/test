// Pictogrammes du jeu : style cartoon bicolore (contour encré + aplat de couleur).
(() => {
  const INK = "#1d1238";
  const st = `stroke="${INK}" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"`;
  const Y = "#ffd23f", P = "#ff4f8b", C = "#3ad1ff", G = "#3ddc84", O = "#ff9f1c", V = "#b48cff", W = "#fff";

  const ICONS = {
    trophy: `<path d="M7 4 H17 V9 C17 12.5 14.8 14.5 12 14.5 C9.2 14.5 7 12.5 7 9 Z" fill="${Y}" ${st}/>
      <path d="M7 6 H4.5 C4.5 9 5.5 10.5 7.6 11" fill="none" ${st}/><path d="M17 6 H19.5 C19.5 9 18.5 10.5 16.4 11" fill="none" ${st}/>
      <path d="M10.5 14.3 L10 17.5 H14 L13.5 14.3" fill="${O}" ${st}/><rect x="7.5" y="17.5" width="9" height="3" rx="1" fill="${P}" ${st}/>
      <path d="M9.5 6.5 V8.5" stroke="${W}" stroke-width="1.6" stroke-linecap="round"/>`,
    flip: `<g transform="rotate(180 12 12)"><circle cx="12" cy="12" r="9" fill="${C}" ${st}/><circle cx="9" cy="10" r="1.3" fill="${INK}"/><circle cx="15" cy="10" r="1.3" fill="${INK}"/><path d="M8 14 Q12 18 16 14" fill="none" ${st}/></g>`,
    tv: `<path d="M8.5 3.5 L12 7 L15.5 3.5" fill="none" ${st}/><rect x="2.5" y="7" width="19" height="13" rx="3" fill="${P}" ${st}/><rect x="5" y="9.5" width="11" height="8" rx="1.5" fill="${C}" ${st}/><circle cx="18.7" cy="11" r="1.1" fill="${INK}"/><circle cx="18.7" cy="15" r="1.1" fill="${INK}"/><path d="M7 12 L9 11" stroke="${W}" stroke-width="1.4" stroke-linecap="round"/>`,
    manga: `<path d="M12 6 C9.5 4.3 6.5 4 3 4.5 V18.5 C6.5 18 9.5 18.3 12 20 C14.5 18.3 17.5 18 21 18.5 V4.5 C17.5 4 14.5 4.3 12 6 Z" fill="${W}" ${st}/><path d="M12 6 V20" ${st}/><path d="M5.5 8 L9.5 9 M5.5 11 L9.5 12 M5.5 14 L8.5 14.6" stroke="${INK}" stroke-width="1.4" stroke-linecap="round"/><path d="M15 8.5 L17.5 10.5 L15.5 11 L18 14" fill="none" stroke="${P}" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>`,
    crown: `<path d="M3.5 18 L2.5 7 L8 11 L12 4.5 L16 11 L21.5 7 L20.5 18 Z" fill="${Y}" ${st}/><circle cx="12" cy="12.5" r="1.6" fill="${P}" ${st}/><path d="M4 18 H20" ${st}/>`,
    clock: `<circle cx="12" cy="13" r="8.5" fill="${C}" ${st}/><circle cx="12" cy="13" r="6" fill="${W}"/><path d="M12 9.5 V13 L14.5 14.5" fill="none" ${st}/><path d="M9.5 2.5 H14.5 M12 2.5 V4.5" ${st}/>`,
    users: `<circle cx="9" cy="8.5" r="3.5" fill="${P}" ${st}/><path d="M2.5 19.5 C2.5 15.5 5.3 13.5 9 13.5 C12.7 13.5 15.5 15.5 15.5 19.5 Z" fill="${P}" ${st}/>
      <circle cx="16.5" cy="7.5" r="3" fill="${C}" ${st}/><path d="M15.5 12.6 C19 12.4 21.5 14.4 21.5 18 H17" fill="${C}" ${st}/>`,
    copy: `<rect x="8" y="8" width="12" height="12" rx="2.5" fill="${Y}" ${st}/><path d="M16 8 V5.5 C16 4.7 15.3 4 14.5 4 H5.5 C4.7 4 4 4.7 4 5.5 V14.5 C4 15.3 4.7 16 5.5 16 H8" fill="${W}" ${st}/>`,
    play: `<path d="M7 4.5 L19.5 12 L7 19.5 Z" fill="${G}" ${st}/>`,
    check: `<circle cx="12" cy="12" r="9" fill="${G}" ${st}/><path d="M7.5 12.3 L10.7 15.3 L16.5 9" fill="none" stroke="${INK}" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/>`,
    pen: `<path d="M4 20 L5 15.5 L15.5 5 C16.3 4.2 17.7 4.2 18.5 5 L19 5.5 C19.8 6.3 19.8 7.7 19 8.5 L8.5 19 Z" fill="${Y}" ${st}/><path d="M14 6.5 L17.5 10" ${st}/><path d="M4 20 L5 15.5 L8.5 19 Z" fill="${P}" ${st}/>`,
    star: `<path d="M12 2.8 L14.6 8.6 L20.8 9.2 L16.1 13.3 L17.5 19.5 L12 16.3 L6.5 19.5 L7.9 13.3 L3.2 9.2 L9.4 8.6 Z" fill="${Y}" ${st}/>`,
    door: `<path d="M5 20.5 V4.5 C5 3.7 5.7 3 6.5 3 H13 V20.5" fill="${V}" ${st}/><circle cx="10.5" cy="12" r="1" fill="${INK}"/><path d="M3 20.5 H14" ${st}/><path d="M16 12 H21.5 M19 9 L21.8 12 L19 15" fill="none" ${st}/>`,
    camera: `<path d="M3 8.5 C3 7.7 3.7 7 4.5 7 H7.5 L9 4.5 H15 L16.5 7 H19.5 C20.3 7 21 7.7 21 8.5 V18 C21 18.8 20.3 19.5 19.5 19.5 H4.5 C3.7 19.5 3 18.8 3 18 Z" fill="${C}" ${st}/><circle cx="12" cy="13" r="4" fill="${W}" ${st}/><circle cx="12" cy="13" r="1.6" fill="${INK}"/>`,
    globe: `<circle cx="12" cy="12" r="9" fill="${C}" ${st}/><path d="M7 7.5 C9 8 9 10 11 10.5 C12.5 11 11.5 13 13 13.5 C14.5 14 15 16 14 18 M15.5 5 C15 7 17 8 19 8" fill="none" ${st}/><path d="M6.5 14.5 C8 14 9 15 8.5 17" fill="none" ${st}/>`,
    sparkle: `<path d="M12 2.5 C12.8 8 14 9.2 19.5 10 C14 10.8 12.8 12 12 17.5 C11.2 12 10 10.8 4.5 10 C10 9.2 11.2 8 12 2.5 Z" fill="${Y}" ${st}/><path d="M19 15.5 C19.3 17.5 19.8 18 21.5 18.3 C19.8 18.6 19.3 19.1 19 21 C18.7 19.1 18.2 18.6 16.5 18.3 C18.2 18 18.7 17.5 19 15.5 Z" fill="${P}" ${st}/>`,
    arrow: `<path d="M4 12 H18 M13 6.5 L19 12 L13 17.5" fill="none" stroke="${INK}" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round"/>`,
    refresh: `<path d="M19 12 A7 7 0 1 1 16.5 6.6" fill="none" stroke="${INK}" stroke-width="2.6" stroke-linecap="round"/><path d="M14.5 3.5 L17.5 6.5 L14 8.8" fill="none" stroke="${INK}" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/>`,
    sound: `<path d="M3.5 9.5 H7 L12 5 V19 L7 14.5 H3.5 Z" fill="${Y}" ${st}/><path d="M15.5 9 C16.8 10.5 16.8 13.5 15.5 15 M18 6.5 C20.7 9.5 20.7 14.5 18 17.5" fill="none" ${st}/>`,
    mute: `<path d="M3.5 9.5 H7 L12 5 V19 L7 14.5 H3.5 Z" fill="${Y}" ${st}/><path d="M15.5 9.5 L20.5 14.5 M20.5 9.5 L15.5 14.5" ${st}/>`,
    medal: `<path d="M8 2.5 L10.5 9 H13.5 L16 2.5" fill="${C}" ${st}/><circle cx="12" cy="15" r="6.5" fill="${Y}" ${st}/><path d="M12 11.5 L13 14 L15.5 14.2 L13.6 15.8 L14.2 18.3 L12 17 L9.8 18.3 L10.4 15.8 L8.5 14.2 L11 14 Z" fill="${O}"/>`,
    layers: `<path d="M12 3 L21 8 L12 13 L3 8 Z" fill="${P}" ${st}/><path d="M3 12 L12 17 L21 12" fill="none" ${st}/><path d="M3 16 L12 21 L21 16" fill="none" ${st}/>`,
    bubble: `<path d="M4 5.5 C4 4.7 4.7 4 5.5 4 H18.5 C19.3 4 20 4.7 20 5.5 V14.5 C20 15.3 19.3 16 18.5 16 H10 L5.5 20 V16 H5.5 C4.7 16 4 15.3 4 14.5 Z" fill="${W}" ${st}/><circle cx="8.5" cy="10" r="1.2" fill="${INK}"/><circle cx="12" cy="10" r="1.2" fill="${INK}"/><circle cx="15.5" cy="10" r="1.2" fill="${INK}"/>`,
    hourglass: `<path d="M6 3 H18 M6 21 H18" ${st}/><path d="M7 3 C7 8 11 9.5 11 12 C11 14.5 7 16 7 21 H17 C17 16 13 14.5 13 12 C13 9.5 17 8 17 3 Z" fill="${W}" ${st}/><path d="M9 19.5 C9.5 17.5 11 16.5 12 16.5 C13 16.5 14.5 17.5 15 19.5 Z" fill="${O}"/><path d="M9.5 6 H14.5 C14 8 12.5 9 12 9.5 C11.5 9 10 8 9.5 6 Z" fill="${O}"/>`,
    dice: `<rect x="3.5" y="3.5" width="17" height="17" rx="4" fill="${W}" ${st}/><circle cx="8.5" cy="8.5" r="1.5" fill="${P}"/><circle cx="15.5" cy="15.5" r="1.5" fill="${P}"/><circle cx="12" cy="12" r="1.5" fill="${P}"/><circle cx="15.5" cy="8.5" r="1.5" fill="${P}"/><circle cx="8.5" cy="15.5" r="1.5" fill="${P}"/>`,
    close: `<path d="M6 6 L18 18 M18 6 L6 18" stroke="${INK}" stroke-width="3" stroke-linecap="round"/>`,
    gavel: `<rect x="4" y="9" width="10" height="5" rx="1.5" transform="rotate(-40 9 11.5)" fill="${O}" ${st}/><path d="M11.5 13.5 L19 21" stroke="${INK}" stroke-width="3" stroke-linecap="round"/><path d="M11.5 13.5 L19 21" stroke="#c98b5a" stroke-width="1.4" stroke-linecap="round"/>`,
    fire: `<path d="M12 21 C7.5 21 5 18 5 14.5 C5 10.5 8.5 8.5 9 4 C12 6 13 8.5 12.5 11 C14 10 14.8 8.8 15 7.5 C17.5 9.5 19 12 19 14.5 C19 18 16.5 21 12 21 Z" fill="${O}" ${st}/><path d="M12 20 C10 20 9 18.6 9 17 C9 15 11 14 11.5 12 C13.5 13.5 15 15 15 17 C15 18.6 14 20 12 20 Z" fill="${Y}"/>`,
    smile: `<circle cx="12" cy="12" r="9" fill="${Y}" ${st}/><circle cx="9" cy="10" r="1.3" fill="${INK}"/><circle cx="15" cy="10" r="1.3" fill="${INK}"/><path d="M8 14 Q12 18 16 14" fill="none" ${st}/>`,
  };

  window.icon = (name, cls = "") => `<svg class="ic ${cls}" viewBox="0 0 24 24" aria-hidden="true">${ICONS[name] || ""}</svg>`;

  // Mascotte : le Hibou Juge (perruque + marteau).
  window.MASCOT = (cls = "") => `<svg class="mascot ${cls}" viewBox="0 0 220 210" aria-hidden="true">
    <g stroke="${INK}" stroke-width="5" stroke-linejoin="round" stroke-linecap="round">
      <ellipse cx="100" cy="200" rx="62" ry="8" fill="#000" opacity=".18" stroke="none"/>
      <g class="m-body">
        <path d="M48 120 C40 170 70 196 100 196 C130 196 160 170 152 120 Z" fill="#2e2a4f"/>
        <path d="M84 132 L100 150 L116 132 L112 196 H88 Z" fill="#fff"/>
        <path d="M94 142 L100 152 L106 142 L104 160 L96 160 Z" fill="${P}" stroke-width="3"/>
        <path d="M50 64 C44 100 56 132 100 134 C144 132 156 100 150 64 C146 40 126 28 100 28 C74 28 54 40 50 64 Z" fill="#9b6bff"/>
        <path d="M58 52 L52 18 L82 36 Z" fill="#7d4ff0"/><path d="M142 52 L148 18 L118 36 Z" fill="#7d4ff0"/>
        <g class="m-wig" fill="#fff">
          <circle cx="56" cy="62" r="13"/><circle cx="52" cy="84" r="13"/><circle cx="55" cy="106" r="12"/>
          <circle cx="144" cy="62" r="13"/><circle cx="148" cy="84" r="13"/><circle cx="145" cy="106" r="12"/>
          <path d="M62 48 C70 30 130 30 138 48 C130 44 70 44 62 48 Z"/>
        </g>
        <circle cx="78" cy="78" r="22" fill="#fff"/><circle cx="122" cy="78" r="22" fill="#fff"/>
        <g class="m-eyes"><circle cx="81" cy="80" r="10" fill="${INK}" stroke="none"/><circle cx="125" cy="80" r="10" fill="${INK}" stroke="none"/>
        <circle cx="77" cy="75" r="3.6" fill="#fff" stroke="none"/><circle cx="121" cy="75" r="3.6" fill="#fff" stroke="none"/></g>
        <g class="m-lids"><path d="M56 78 A22 22 0 0 1 100 78 Z" fill="#9b6bff"/><path d="M100 78 A22 22 0 0 1 144 78 Z" fill="#9b6bff"/></g>
        <path d="M60 52 Q76 44 92 54" fill="none" stroke-width="6"/><path d="M140 52 Q124 44 108 54" fill="none" stroke-width="6"/>
        <path d="M90 100 L110 100 L100 116 Z" fill="${O}"/>
        <ellipse cx="66" cy="112" rx="8" ry="5" fill="${P}" opacity=".5" stroke="none"/><ellipse cx="134" cy="112" rx="8" ry="5" fill="${P}" opacity=".5" stroke="none"/>
      </g>
      <g class="m-gavel">
        <path d="M150 150 L186 114" stroke-width="9"/><path d="M150 150 L186 114" stroke="#c98b5a" stroke-width="3.5"/>
        <rect x="166" y="86" width="40" height="22" rx="6" transform="rotate(45 186 97)" fill="${O}"/>
        <circle cx="150" cy="150" r="10" fill="#7d4ff0"/>
      </g>
    </g>
  </svg>`;
})();
