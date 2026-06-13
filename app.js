/* ===== 도쿄 여행 페이지 ===== */
const $ = (s, el = document) => el.querySelector(s);
const $$ = (s, el = document) => [...el.querySelectorAll(s)];

let curDay = TRIP.days[0].id;
let curWho = "전체";
const commentCache = {}; // itemId -> [ {name, who, text} ]

/* --- 헤더 채우기 --- */
$("#hero-title").textContent = TRIP.title;
$("#hero-dates").textContent = TRIP.dates;
$("#hero-sub").textContent = TRIP.subtitle;
document.title = TRIP.title + " " + TRIP.dates;

/* --- 날짜 탭 --- */
function buildTabs() {
  const tabs = TRIP.days.map(d => `
    <button class="daytab ${d.id === curDay ? "active" : ""}" data-day="${d.id}">
      <span class="d">${d.date}</span><span class="w">(${d.weekday})</span>
    </button>`).join("");
  $("#daytabs").innerHTML = tabs;
  $$("#daytabs .daytab").forEach(b =>
    b.onclick = () => { curDay = b.dataset.day; render(); window.scrollTo({ top: 0, behavior: "smooth" }); });
}

/* --- who 필터 바 --- */
$$("#who-bar .who-chip").forEach(b =>
  b.onclick = () => {
    $$("#who-bar .who-chip").forEach(x => x.classList.remove("active"));
    b.classList.add("active");
    curWho = b.dataset.who;
    render();
  });

/* --- 사람 매칭 (가족 = 전부 포함) --- */
function matchesWho(item) {
  if (curWho === "전체") return true;
  return item.who.includes(curWho) || item.who.includes("가족");
}

/* --- 구글맵 링크 --- */
function mapUrl(item) {
  if (item.lat != null && item.lon != null)
    return `https://www.google.com/maps/search/?api=1&query=${item.lat},${item.lon}`;
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(item.search)}`;
}

/* --- 한 카드 --- */
function cardHTML(item) {
  const dim = matchesWho(item) ? "" : "dim";
  const photo = PHOTOS[item.id]
    ? `<img class="photo" loading="lazy" src="${PHOTOS[item.id]}" alt="${item.title}">`
    : `<div class="photo-ph">${item.emoji}</div>`;
  const whoTags = item.who.map(w => `<span class="tag ${w}">${w}</span>`).join("");
  const n = (commentCache[item.id] || []).length;
  return `
  <article class="item ${dim}" id="card-${item.id}">
    ${photo}
    <div class="item-body">
      <div class="item-top">
        <span class="time">${item.time}</span>
        <span class="who-tags">${whoTags}</span>
      </div>
      <h3>${item.emoji} ${item.title}</h3>
      <p class="desc">${item.desc}</p>
      <div class="item-actions">
        <a class="btn btn-map" href="${mapUrl(item)}" target="_blank" rel="noopener">🗺️ 지도</a>
        <button class="btn btn-c" data-toggle="${item.id}">💬 댓글 <span class="ct">${n ? n : ""}</span></button>
      </div>
      <div class="comments" id="cm-${item.id}"></div>
    </div>
  </article>`;
}

/* --- 하루 렌더 --- */
function render() {
  buildTabs();
  const day = TRIP.days.find(d => d.id === curDay);
  const cards = day.items.map(cardHTML).join("");
  $("#app").innerHTML = `
    <div class="day-head">
      <div class="theme">${day.date} (${day.weekday}) · ${day.theme}</div>
      <div class="hotel">🏨 ${day.hotel}</div>
    </div>
    ${day.note ? `<div class="day-note">📌 ${day.note}</div>` : ""}
    ${cards}`;
  // 댓글 토글 버튼
  $$("#app [data-toggle]").forEach(b =>
    b.onclick = () => toggleComments(b.dataset.toggle));
}

/* --- 팁 --- */
$("#tips").innerHTML = `<h2>🧳 알아두기</h2>` + TRIP.tips.map(t => `
  <div class="tip"><div class="th">${t.emoji} ${t.title}</div><div class="td">${t.desc}</div></div>`).join("");

/* ===== 댓글 ===== */
function toggleComments(itemId) {
  const box = $("#cm-" + itemId);
  if (box.classList.contains("open")) { box.classList.remove("open"); return; }
  box.classList.add("open");
  renderComments(itemId);
  loadComments(itemId);
}

function renderComments(itemId) {
  const box = $("#cm-" + itemId);
  const list = commentCache[itemId];
  let listHTML;
  if (list === undefined) listHTML = `<div class="cmt-empty">불러오는 중…</div>`;
  else if (list.length === 0) listHTML = `<div class="cmt-empty">아직 댓글이 없어요. 첫 의견을 남겨봐!</div>`;
  else listHTML = list.map(c => `
    <div class="cmt">
      <div class="av ${c.who}">${c.who[0]}</div>
      <div class="cmt-bubble"><div class="cmt-name">${c.name || c.who}</div>
        <div class="cmt-text">${escapeHTML(c.text)}</div></div>
    </div>`).join("");

  const apiReady = !!CONFIG.COMMENTS_API;
  box.innerHTML = `
    ${listHTML}
    <div class="cmt-form">
      <div class="cmt-whochips">
        ${["엘리", "안드레스", "진유"].map(w => `<button class="mini-chip" data-w="${w}">${w}</button>`).join("")}
      </div>
      <div class="cmt-input-row">
        <textarea class="cmt-input" rows="1" placeholder="${apiReady ? "의견 남기기…" : "댓글 기능 연결 준비 중 💬"}" ${apiReady ? "" : "disabled"}></textarea>
        <button class="cmt-send" disabled>전송</button>
      </div>
      ${apiReady ? "" : `<div class="cmt-note">곧 댓글을 남길 수 있게 연결할게요!</div>`}
    </div>`;

  // 폼 동작
  let who = null;
  const chips = $$(".mini-chip", box), ta = $(".cmt-input", box), send = $(".cmt-send", box);
  chips.forEach(c => c.onclick = () => {
    chips.forEach(x => x.classList.remove("on"));
    c.classList.add("on"); who = c.dataset.w; updateSend();
  });
  function updateSend() { send.disabled = !(who && ta.value.trim() && CONFIG.COMMENTS_API); }
  ta.oninput = () => { ta.style.height = "auto"; ta.style.height = ta.scrollHeight + "px"; updateSend(); };
  send.onclick = () => postComment(itemId, who, ta.value.trim());
}

function escapeHTML(s) { const d = document.createElement("div"); d.textContent = s; return d.innerHTML; }

/* --- 서버 통신 (Apps Script) --- */
async function loadComments(itemId) {
  if (!CONFIG.COMMENTS_API) { commentCache[itemId] = commentCache[itemId] || []; renderComments(itemId); refreshCount(itemId); return; }
  try {
    const r = await fetch(`${CONFIG.COMMENTS_API}?item=${encodeURIComponent(itemId)}`);
    const data = await r.json();
    commentCache[itemId] = data.comments || [];
  } catch (e) { commentCache[itemId] = commentCache[itemId] || []; }
  renderComments(itemId); refreshCount(itemId);
}

async function postComment(itemId, who, text) {
  const send = $(`#cm-${itemId} .cmt-send`);
  send.disabled = true; send.textContent = "…";
  const payload = { item: itemId, who, name: who, text };
  try {
    await fetch(CONFIG.COMMENTS_API, {
      method: "POST", body: JSON.stringify(payload),
      headers: { "Content-Type": "text/plain;charset=utf-8" } // Apps Script CORS 회피
    });
    (commentCache[itemId] = commentCache[itemId] || []).push(payload);
  } catch (e) { alert("전송 실패 — 인터넷 확인 후 다시!"); }
  send.textContent = "전송";
  renderComments(itemId); refreshCount(itemId);
}

function refreshCount(itemId) {
  const n = (commentCache[itemId] || []).length;
  const ct = $(`#card-${itemId} .btn-c .ct`);
  if (ct) ct.textContent = n ? n : "";
}

render();
