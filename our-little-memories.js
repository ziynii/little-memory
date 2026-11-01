(async()=>{
const ID='cq-overlay-v1'; if(document.getElementById(ID)){document.getElementById(ID).remove();return}
const base='cq-v1:',room=(()=>{let u=new URL(location.href);return u.origin+u.pathname+u.search.replace(/([?&])(utm_[^&]+|t)=[^&]*/g,'')})(),key=base+'room:'+room;
const Q=[["미래와 우리의 이야기","언젠가 둘이 꼭 가보고 싶은 장소는?"],["마음과 감정","함께하면서 가장 크게 웃었던 순간은?"],["일상과 취향","둘이 함께 있을 때 가장 좋아하는 시간대는?"],["장난과 티키타카","무인도에 단둘이 떨어진다면 누가 먼저 사고를 칠까요?"],["서로에 대해","한 사람이 삐졌을 때, 나만의 화해 방법은?"],["첫 만남과 설렘","처음으로 서로 가까워졌다고 느낀 순간은?"],["엉뚱한 상상","연인이 하루 동안 투명인간이 된다면 무슨 사고를 칠 것 같나요?"],["장난과 티키타카","어느 날 연인이 고양이가 되어 나타난다면?"],["일상과 취향","연인을 계절에 비유한다면 어떤 계절인가요?"],["첫 만남과 설렘","처음 귀엽다고 느꼈던 순간을 기억하나요?"],["미래와 우리의 이야기","둘이 함께 꼭 이루고 싶은 작은 소원은?"],["엉뚱한 상상","두 사람이 초능력 하나를 나눠 가질 수 있다면?"],["마음과 감정","가장 고마웠던 순간을 하나 꼽는다면?"],["서로에 대해","둘 중 누가 더 뻔뻔하게 장난을 치나요?"],["첫 만남과 설렘","첫인상과 지금 모습은 얼마나 다른가요?"],["미래와 우리의 이야기","앞으로 둘이 새롭게 시작해보고 싶은 일은?"],["장난과 티키타카","서로의 휴대폰에 저장할 애칭을 정한다면?"],["마음과 감정","함께 있지 않을 때 가장 생각나는 것은?"],["일상과 취향","연인에게 꼭 먹여주고 싶은 음식은?"],["엉뚱한 상상","하루 동안 부탁을 무엇이든 들어줘야 한다면 가장 두려운 부탁은?"],["서로에 대해","가장 사랑스럽다고 느끼는 습관은?"],["서로에 대해","가장 자기다운 모습이 드러나는 순간은?"],["장난과 티키타카","살짝 약 올리고 싶을 때 쓰는 비장의 방법은?"],["마음과 감정","딱 한 문장만 전할 수 있다면 무슨 말을 할 건가요?"],["첫 만남과 설렘","처음으로 특별한 사람이라고 의식했던 순간은?"],["일상과 취향","연인이 요리를 망치고 맛있다고 우긴다면?"],["미래와 우리의 이야기","오래도록 기억되고 싶은 나의 모습은?"],["엉뚱한 상상","어느 날 연인이 어린아이가 된다면 어떻게 돌봐줄 건가요?"],["마음과 감정","우리 관계에서 가장 소중하게 지키고 싶은 것은?"],["서로에 대해","아직 들키지 않은 작은 비밀이 있나요?"],["장난과 티키타카","서로의 생각을 하루 동안 읽을 수 있다면 가장 곤란한 순간은?"],["첫 만남과 설렘","첫 만남의 날로 돌아간다면 무엇을 다르게 하고 싶나요?"],["엉뚱한 상상","연인이 갑자기 왕이 된다면 어떤 자리를 요구하고 싶나요?"],["미래와 우리의 이야기","10년 후의 우리는 어떤 모습일까요?"],["일상과 취향","둘 중 누가 더 늦잠을 잘 것 같나요?"],["서로에 대해","가장 멋있어 보이는 순간은 언제인가요?"],["엉뚱한 상상","둘이 악당 콤비라면 각자 어떤 역할일까요?"],["첫 만남과 설렘","처음 관심을 보인 사람은 둘 중 누구였나요?"],["장난과 티키타카","하루아침에 몸이 바뀐다면 가장 먼저 해보고 싶은 일은?"],["마음과 감정","나에 대해 얼마나 잘 알고 있다고 생각하나요?"],["미래와 우리의 이야기","먼 훗날 지금의 우리를 돌아보며 무슨 말을 하고 싶나요?"],["일상과 취향","단둘이 여행을 떠난다면 첫 목적지는 어디인가요?"],["첫 만남과 설렘","처음 만났을 때 어떤 생각을 했나요?"],["장난과 티키타카","둘 중 누가 더 상대에게 약한 사람인가요?"],["서로에 대해","서로를 세 단어로 표현해 본다면?"],["일상과 취향","우리 사이를 떠올리게 하는 노래가 있나요?"],["엉뚱한 상상","우리 이야기가 책으로 나온다면 제목은?"],["마음과 감정","가장 큰 위로를 받았던 순간은 언제인가요?"],["미래와 우리의 이야기","둘만의 특별한 기념일을 만든다면 어떤 날인가요?"],["일상과 취향","연인이 내 옷을 몰래 입고 나간다면 어떤 반응일까요?"],["엉뚱한 상상","우리 둘이 예능에 출연한다면 어떤 장면이 화제가 될까요?"],["장난과 티키타카","연인이 갑자기 유명해진다면 가장 먼저 하고 싶은 일은?"],["첫 만남과 설렘","첫눈에 가장 마음을 끌었던 모습은?"],["마음과 감정","미안했지만 제대로 말하지 못한 일이 있나요?"],["서로에 대해","자기도 모르게 짓는 표정 중 가장 귀여운 것은?"],["장난과 티키타카","갑자기 뽀뽀하고 아무 일 없던 척한다면 어떤 반응일까요?"],["첫 만남과 설렘","우리의 첫 만남을 영화 제목으로 짓는다면?"],["일상과 취향","아무 일정 없는 하루, 둘이 무엇을 하고 싶나요?"],["서로에 대해","아직 전하지 못한 칭찬이 있나요?"],["마음과 감정","한 사람이 힘든 날, 가장 해주고 싶은 일은?"],["미래와 우리의 이야기","함께 살아간다면 가장 기대되는 일상은?"],["엉뚱한 상상","어느 날 연인이 나를 기억하지 못한다면 어떻게 다시 마음을 얻을 건가요?"],["마음과 감정","가장 듣고 싶은 말은 무엇인가요?"],["서로에 대해","가장 닮고 싶은 점을 하나 꼽는다면?"],["첫 만남과 설렘","처음 호기심이 생겼던 순간은 언제인가요?"],["미래와 우리의 이야기","나이가 들어도 우리 사이에서 변하지 않았으면 하는 것은?"],["엉뚱한 상상","세상에 우리 둘만 남는다면 가장 먼저 할 일은?"],["일상과 취향","평범한 하루 중 가장 좋아하는 순간은?"],["장난과 티키타카","장난은 누가 먼저 걸고, 누가 더 크게 당하나요?"],["미래와 우리의 이야기","마지막 질문! 지금 서로에게 가장 하고 싶은 말은?"]];
const LEGACY_Q=[
['첫 만남','서로를 처음 본 날, 무슨 생각을 했나요?'],['첫 만남','처음 나에게 관심이 생겼던 순간은?'],['첫 만남','첫 대화에서 가장 기억나는 말은?'],['첫 만남','첫인상과 지금 가장 달라진 점은?'],['첫 만남','처음 함께 웃었던 순간은?'],['첫 만남','처음 둘만의 시간을 보냈을 때 어땠나요?'],['첫 만남','언제부터 상대가 특별해졌나요?'],['첫 만남','처음 설렜던 행동은 무엇인가요?'],['첫 만남','그 시절의 우리에게 한마디 한다면?'],['첫 만남','첫 만남의 하루를 다시 보낸다면 무엇을 할 건가요?'],
['서로에 대해','상대의 가장 사랑스러운 습관은?'],['서로에 대해','상대의 의외의 면을 발견한 순간은?'],['서로에 대해','상대를 세 단어로 표현한다면?'],['서로에 대해','상대가 자주 하는 말 중 좋아하는 말은?'],['서로에 대해','서로 닮았다고 느끼는 점은?'],['서로에 대해','상대의 장점 중 가장 부러운 것은?'],['서로에 대해','상대방이 가장 빛나 보이는 순간은?'],['서로에 대해','상대의 작은 버릇 하나를 소개한다면?'],['서로에 대해','아직 상대에게 물어보지 못한 질문은?'],['서로에 대해','서로만 아는 비밀스러운 신호가 있다면?'],
['일상과 취향','함께 보내는 가장 좋아하는 시간은?'],['일상과 취향','둘이 하루 종일 쉰다면 무엇을 할 건가요?'],['일상과 취향','함께 먹고 싶은 음식은?'],['일상과 취향','상대에게 가장 어울리는 계절은?'],['일상과 취향','함께 듣고 싶은 노래는?'],['일상과 취향','서로의 잠버릇을 상상한다면?'],['일상과 취향','둘만의 작은 전통을 만든다면?'],['일상과 취향','함께 여행을 간다면 첫 목적지는?'],['일상과 취향','평범한 하루 중 가장 행복한 순간은?'],['일상과 취향','상대가 힘든 날 해주고 싶은 일은?'],
['마음과 감정','상대에게 가장 고마웠던 순간은?'],['마음과 감정','상대가 보고 싶어지는 순간은?'],['마음과 감정','상대에게 전하지 못한 말이 있나요?'],['마음과 감정','서로에게 위로가 되었던 기억은?'],['마음과 감정','상대에게 사과하고 싶은 일이 있나요?'],['마음과 감정','가장 오래 기억하고 싶은 추억은?'],['마음과 감정','상대의 어떤 말이 마음에 남았나요?'],['마음과 감정','서운할 때 어떻게 마음을 전하고 싶나요?'],['마음과 감정','상대의 행복을 느끼는 순간은?'],['마음과 감정','우리 관계를 한 문장으로 표현한다면?'],
['미래와 상상','둘이 함께 꼭 해보고 싶은 일은?'],['미래와 상상','언젠가 함께 가고 싶은 장소는?'],['미래와 상상','일 년 뒤의 우리는 어떤 모습일까요?'],['미래와 상상','둘만의 공간을 꾸민다면?'],['미래와 상상','함께 특별한 기념일을 만든다면?'],['미래와 상상','상대에게 어떤 선물을 하고 싶나요?'],['미래와 상상','같은 하루를 무한히 반복할 수 있다면?'],['미래와 상상','상대와 새롭게 도전하고 싶은 일은?'],['미래와 상상','아주 먼 훗날 함께 떠올리고 싶은 장면은?'],['미래와 상상','미래의 우리에게 남기고 싶은 약속은?']];
const get=(k,d)=>{try{return JSON.parse(localStorage.getItem(k))??d}catch{return d}},put=(k,v)=>localStorage.setItem(k,JSON.stringify(v));
let data=get(key,{answers:{},custom:[],settings:{memory:true,selected:[],turns:10,provider:'openai',url:'',model:'',key:'',character:'',persona:'',rememberKey:false,manualMemory:'',manualLore:'',recent:''}}), s=data.settings;delete s.customPrompt;delete s.recent;
let state={tab:'questions',index:0,noticed:'',sources:[],loreStatus:'동기화된 로어북을 확인해 주세요.',profileStatus:''};
let connectedBooks=[],internalBooks=[],availableProfiles=[],roomStorageKey='',detectedCharacter='';
const root=document.createElement('div');root.id=ID;root.innerHTML=`<style>
@import url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css');
#${ID}{--ink:#24272d;--muted:#858a94;--line:#e8e9ed;--bg:#ffffff;--sub:#f7f8fa;--accent:#30343b;position:fixed!important;inset:0!important;z-index:2147483647!important;font:14px/1.55 'Pretendard',-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif!important;color:var(--ink)!important}
#${ID} *,#${ID} *::before,#${ID} *::after{box-sizing:border-box;font-family:'Pretendard',-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif!important}
#${ID} .cq-back{position:absolute;inset:0;background:rgba(19,23,32,.46);backdrop-filter:blur(3px)}
#${ID} .cq-wrap{position:absolute;inset:4vh auto 4vh 50%;transform:translateX(-50%);width:min(660px,94vw);background:var(--bg);border:1px solid var(--line);border-radius:16px;box-shadow:0 22px 65px rgba(14,18,28,.16);display:flex;flex-direction:column;overflow:hidden}
#${ID} .cq-head{display:flex;gap:12px;align-items:center;justify-content:space-between;padding:18px 22px 15px;background:#fff;border-bottom:1px solid var(--line)}
#${ID} h2{font-size:19px;font-weight:700;margin:0;color:var(--ink);letter-spacing:-.04em}
#${ID} h3{font-size:15px;font-weight:700;margin:0 0 12px;letter-spacing:-.025em}
#${ID} .cq-content{overflow:auto;padding:22px;flex:1;min-height:0;background:#fff}
#${ID} .cq-tabs{display:flex;gap:4px;padding:10px 18px;background:white;border-bottom:1px solid var(--line);flex-wrap:wrap}
#${ID} button{font-size:13px;font-weight:550;cursor:pointer;border:1px solid #dfe1e6;border-radius:8px;background:#fff;color:#454950;padding:9px 13px;white-space:normal;transition:background .15s,border-color .15s}
#${ID} button:hover{background:var(--sub)}
#${ID} button.primary{background:#30343b;color:white;border-color:#30343b;font-weight:600}
#${ID} button.primary:hover{background:#1e2228}
#${ID} button:disabled{opacity:.48;cursor:default}
#${ID} button.active{background:#f2f3f5;border-color:#d3d6dc;color:#22252b;font-weight:650}
#${ID} .cq-tabs button{border:0;background:transparent;color:#737781;padding:9px 12px}
#${ID} .cq-tabs button.active{background:#f2f3f5;color:#25292f}
#${ID} textarea,#${ID} input,#${ID} select{font:inherit;width:100%;background:#fff;color:var(--ink);padding:10px 12px;border:1px solid #dfe1e6;border-radius:8px;outline:0}
#${ID} textarea:focus,#${ID} input:focus,#${ID} select:focus{border-color:#9299a5;box-shadow:0 0 0 3px rgba(85,95,110,.08)}
#${ID} textarea{min-height:80px;resize:vertical}
#${ID} label{display:block;font-weight:600;margin:15px 0 7px;font-size:13px}
#${ID} .cq-card{background:#fff;border:1px solid var(--line);border-radius:11px;padding:17px;margin:12px 0}
#${ID} .cq-question{display:flex;align-items:baseline;gap:10px;margin:20px 0 24px;padding:0;background:none;border:0;border-radius:0;text-align:left}
#${ID} .cq-question strong{font-size:19px;line-height:1.55;color:#30343b;font-weight:650;letter-spacing:-.03em}#${ID} .cq-question .cq-qmark{font-size:21px;font-weight:700;color:#7b828d;flex-shrink:0}
#${ID} .cq-muted{font-size:12px;color:var(--muted)}
#${ID} .cq-row{display:flex;gap:8px;align-items:center;flex-wrap:wrap}#${ID} .cq-row>*{min-width:0}
#${ID} .cq-pill{padding:4px 9px;border-radius:6px;background:#f1f2f4;font-size:12px;color:#5a606b}
#${ID} .cq-settings-section{border:1px solid #e7e9ee;background:#fff;border-radius:13px;padding:18px 16px;margin:12px 0 18px}
#${ID} .cq-section-title{font-size:16px;font-weight:700;letter-spacing:-.02em;color:#30343b;margin-bottom:7px}
#${ID} .cq-section-desc{font-size:12px;line-height:1.65;margin-bottom:14px}
#${ID} .cq-settings-section label:not(.cq-checkbox){margin-top:17px}
#${ID} .cq-settings-actions{padding:5px 0 12px;gap:10px}
#${ID} .cq-profile-actions{display:flex;gap:10px;flex-wrap:wrap;margin-top:12px;margin-bottom:12px}#${ID} .cq-profile-actions button{flex:1;min-width:170px}#${ID} .cq-profile-help{margin-top:8px;line-height:1.65}#${ID} .cq-field-help{margin-top:6px;font-size:11px;line-height:1.6}#${ID} .cq-note{margin:11px 0;padding:12px 14px;border-radius:8px;background:#f7f8fa;border:1px solid #eef0f2;color:#5e6570;font-size:12px;white-space:pre-wrap}
#${ID} .cq-foot{padding:12px 22px;background:#fff;display:flex;justify-content:space-between;align-items:center;gap:8px;border-top:1px solid var(--line)}
#${ID} .cq-checkbox{display:flex;gap:8px;align-items:center;font-weight:400;margin:10px 0}#${ID} .cq-checkbox input{width:auto;accent-color:#424853}
#${ID} .cq-source{border:1px solid var(--line);padding:11px 13px;border-radius:9px;margin:8px 0}
#${ID} .cq-item{display:flex;gap:8px;align-items:center;justify-content:space-between;border-bottom:1px solid var(--line);padding:12px 0}#${ID} .cq-item span{flex:1;cursor:pointer}
#${ID} .cq-sticky{display:flex;gap:8px;flex-wrap:wrap;margin-top:15px}#${ID} .cq-sticky button{flex:1}
#${ID} .cq-status{font-size:12px;color:#7d838c}
#${ID} .cq-clip{max-height:140px;overflow:auto;white-space:pre-wrap;word-break:break-word;font-size:11px;background:#f7f8fa;padding:10px;border-radius:8px}
#${ID} .cq-answer-label{display:flex;align-items:center;justify-content:space-between;gap:10px;margin:18px 0 8px;font-size:13px;font-weight:650}
#${ID} .cq-answer-bubble{border-radius:14px;padding:15px 17px;white-space:pre-wrap;overflow-wrap:anywhere;line-height:1.75;font-size:14px;border:1px solid #e7e9ed;position:relative}
#${ID} .cq-answer-bubble.mine{background:#f1f3f6;margin-left:12%;border-bottom-right-radius:4px}
#${ID} .cq-answer-bubble.ai{background:#fff;margin-right:12%;border-bottom-left-radius:4px}
#${ID} .cq-answer-actions{display:flex;gap:8px;justify-content:flex-end;margin-top:9px}
#${ID} .cq-answer-actions.ai-actions{justify-content:flex-start}
#${ID} .cq-inline-editor{display:grid;gap:9px}
#${ID} .cq-empty-answer{background:#f8f9fa;border:1px dashed #dde1e6;border-radius:12px;padding:15px;color:#818792;font-size:13px}
#${ID} .cq-danger{color:#a33c51}
</style><div class="cq-back" data-act="close"></div><section class="cq-wrap"><header class="cq-head"><div><h2>Our Little Memories</h2><div class="cq-muted" id="cq-roomname"></div></div><button data-act="close">✕ 닫기</button></header><nav class="cq-tabs"><button data-tab="questions">💌 문답</button><button data-tab="library">📖 보관함</button><button data-tab="sources">🧠 기억·로어북</button><button data-tab="settings">⚙️ 설정</button></nav><main class="cq-content" id="cq-body"></main><footer class="cq-foot"><span class="cq-status" id="cq-status"></span><button data-act="export">JSON 백업</button></footer></section>`;document.body.appendChild(root);
const $=(sel)=>root.querySelector(sel),esc=(x)=>String(x??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c])),all=()=>Q.map((x,i)=>({id:'n'+i,category:x[0],q:x[1]})).concat(LEGACY_Q.map((x,i)=>({id:'b'+i,category:'이전 50문 기록',q:x[1]})).filter(x=>data.answers[x.id]?.mine?.trim()||data.answers[x.id]?.ai?.trim())).concat(data.custom),current=()=>all()[Math.min(state.index,all().length-1)],save=()=>{let backup=s.key;if(!s.rememberKey)s.key='';put(key,data);s.key=backup;$('#cq-status').textContent='이 방에 저장됨 · '+new Date().toLocaleTimeString()},status=(m)=>{$('#cq-status').textContent=m},notice=(m)=>{state.noticed=m;render()};
$('#cq-roomname').textContent='우리만의 작은 기록';
function extractCharacterName(){
 // 캐릭터 프로필/헤더에서 명시적으로 제공하는 이름만 인식한다. 플롯 제목이나 채팅 메시지는 사용하지 않는다.
 const selectors=[
  '[data-character-name]', '[data-testid="character-name"]', '[data-testid="characterName"]',
  '[data-testid="character-profile-name"]', '[data-testid="chat-character-name"]',
  '[aria-label="캐릭터 이름"]', '[aria-label="Character name"]', '[data-testid="characterNameText"]', '[data-testid="character-profile-title"]',
  'meta[property="og:character"]', 'meta[name="character-name"]'
 ];
 for(const sel of selectors){
  const nodes=[...document.querySelectorAll(sel)].filter(el=>!root.contains(el));
  for(const el of nodes){const value=(el.getAttribute('data-character-name')||el.getAttribute('content')||el.textContent||'').trim();
   if(value && value.length<=50 && !/[\n\r]/.test(value))return value;
  }
 }
 return '';
}
function actualCharacterName(){const cache=safeJson('ZETAKIT_LORE_ZETA_ROOM_CACHE_V1',{});return String(cache[roomStorageKey]?.plotLabel||'').trim()||'이름 미설정'}
function characterName(){return String(s.character||'').trim()||actualCharacterName()}
function updateCharacterName(){const el=$('#cq-roomname');if(el)el.textContent=characterName()==='이름 미설정'?'우리만의 작은 기록':characterName()+'와의 문답'}
function safeJson(k,f){try{return JSON.parse(localStorage.getItem(k)||'null')??f}catch{return f}}
function resolveRoom(){
 const selections=safeJson('ZETAKIT_REVIEW_ZETA_LORE_SELECTIONS',{}),cache=safeJson('ZETAKIT_LORE_ZETA_ROOM_CACHE_V1',{});
 const keys=[...new Set([...Object.keys(cache),...Object.keys(selections)])].filter(x=>x.startsWith('room:'));
 const url=decodeURIComponent(location.pathname+location.search+location.hash);
 const matched=keys.filter(k=>url.includes(k.slice(5)) || (cache[k]?.plotId&&url.includes(cache[k].plotId)));
 if(matched.length===1)return matched[0];
 // 다른 채팅방 로어북을 잘못 사용하지 않도록 URL이 일치할 때만 선택한다.
 return ''; // 여러 방이면 임의로 선택하지 않는다
}
function idbBooks(){return new Promise((resolve,reject)=>{
 if(!window.indexedDB)return reject(Error('IndexedDB를 사용할 수 없어요.'));
 let r=indexedDB.open('ZETAKIT_LORE');
 r.onerror=()=>reject(r.error||Error('로어북 데이터베이스 접근 실패'));
 r.onupgradeneeded=()=>{r.transaction.abort();reject(Error('로어북 저장본이 아직 없어요. ZETAKIT에서 먼저 동기화해 주세요.'))};
 r.onsuccess=()=>{const db=r.result;if(!db.objectStoreNames.contains('zetaBooks')){db.close();resolve([]);return}
 const tx=db.transaction('zetaBooks','readonly'),req=tx.objectStore('zetaBooks').getAll();
 req.onsuccess=()=>resolve(req.result||[]);req.onerror=()=>reject(req.error);tx.oncomplete=()=>db.close();tx.onerror=()=>db.close();
 }
})}
async function loadZetakit(){
 availableProfiles=safeJson('ZETAKIT_REVIEW_API_PROFILES',[]);if(!Array.isArray(availableProfiles))availableProfiles=[];
 // 응답검토의 선택 프로필을 실행할 때마다 읽기 전용으로 다시 연결한다. API 비밀키는 문답 저장소에 복제하지 않는다.
 if(!s.profileId && availableProfiles.length===1 && !s.url && !s.model){s.profileId=availableProfiles[0].id;loadProfileToSettings();save()}
 else if(s.profileId){loadProfileToSettings()}
 const rawInternal=safeJson('ZETAKIT_REVIEW_LOREBOOKS',[]);
 const internalSelections=safeJson('ZETAKIT_REVIEW_ROOM_LORE_SELECTIONS',{});
 // 응답검토에서 현재 방에 명시적으로 선택한 내부 로어북만 사용한다.
 // 자동 생성 장기기억이라도 응답검토에서 선택한 항목이면 허용한다.
 const selectionKey='room:'+((location.pathname.match(/\/rooms\/([0-9a-f-]{36})/i)||[])[1]||'');
 const chosenInternal=new Set(Array.isArray(internalSelections[selectionKey])?internalSelections[selectionKey]:[]);
 internalBooks=Array.isArray(rawInternal)?rawInternal.filter(b=>b && typeof b==='object'
   && ( !b.roomKey || b.roomKey===room || b.roomKey===location.origin+location.pathname || (selectionKey!=='room:' && String(b.roomKey).includes(selectionKey.slice(5))) )
   && chosenInternal.has(String(b.id)))
   .map(b=>({id:String(b.id||''),title:String(b.t||b.autoTitle||b.id||'제목 없는 로어북'),content:String(b.b||'')}))
   .filter(b=>b.id&&b.content):[];
 // 응답검토에서 선택이 해제된 항목은 이전 버전의 설정에 남아 있어도 사용하지 않는다.
 const availableInternalIds=new Set(internalBooks.map(b=>b.id));
 if(!Array.isArray(s.internalBooks)) s.internalBooks=[...availableInternalIds];
 else s.internalBooks=s.internalBooks.filter(id=>availableInternalIds.has(id));
 s.memory=false;
 roomStorageKey=resolveRoom();const selected=safeJson('ZETAKIT_REVIEW_ZETA_LORE_SELECTIONS',{}),cache=safeJson('ZETAKIT_LORE_ZETA_ROOM_CACHE_V1',{});
 detectedCharacter=extractCharacterName();updateCharacterName();
 if(!roomStorageKey){connectedBooks=[];state.loreStatus=`응답검토 내부 로어북 ${internalBooks.length}개 확인 · 제타 연결 로어북은 현재 방 ID를 확인하지 못했어요.`;return}
 try{const records=await idbBooks();const chosen=new Set(selected[roomStorageKey]||[]);
 connectedBooks=records.map(record=>record.book||record).filter(book=>chosen.has(book.id)).map(book=>({id:book.id,title:book.title||'제목 없는 로어북',items:Array.isArray(book.items)?book.items:[],selected:chosen.has(book.id)}));
 const valid=new Set(connectedBooks.map(b=>b.id));if(!Array.isArray(s.zetaBooks))s.zetaBooks=connectedBooks.filter(b=>b.selected).map(b=>b.id);
 s.zetaBooks=s.zetaBooks.filter(id=>valid.has(id));
 state.loreStatus=`현재 방: ${cache[roomStorageKey]?.plotLabel||roomStorageKey} · 연결 ${connectedBooks.length}권 · 선택 ${s.zetaBooks.length}권`;
 }catch(e){connectedBooks=[];state.loreStatus='로어북 읽기 실패: '+e.message}
}
function itemText(item){let o=item||{},raw=o.raw||{};const val=(...names)=>names.map(n=>o[n]??raw[n]).find(v=>v!==undefined&&v!==null&&v!=='');let title=val('title','name')||'제목 없음',keywords=val('keywords','keyword','keys')||[],content=val('content','text','body','description','value');if(typeof content==='object')content=JSON.stringify(content);return content?`제목: ${title}\n키워드: ${Array.isArray(keywords)?keywords.join(', '):keywords}\n내용: ${String(content)}`:''}
function selectedLoreText(){return connectedBooks.filter(b=>(s.zetaBooks||[]).includes(b.id)).map(b=>`[로어북: ${b.title}]\n${b.items.map(itemText).filter(Boolean).join('\n\n')}`).join('\n\n').slice(0,18000)}
function loadProfileToSettings(){let p=availableProfiles.find(p=>p.id===s.profileId);if(!p)return false;
 s.provider=p.provider||'openai';s.url=p.url||'';s.model=p.model||'';s.key=p.key||'';return true}
let editMine=false,editAi=false;
function preserveEditor(){if(state.tab!=='questions')return;let a=data.answers[current().id]||{};let mine=$('#cq-mine'),ai=$('#cq-ai');if(mine){a.mine=mine.value;editMine=true}if(ai){a.ai=ai.value;editAi=true}data.answers[current().id]=a}
function answerFields(a){let mine=a.mine||'',ai=a.ai||'';return `<div class="cq-answer-label"><span>나의 답변</span></div>${mine&&!editMine?`<div class="cq-answer-bubble mine">${esc(mine)}</div><div class="cq-answer-actions"><button data-act="editmine">수정</button></div>`:`<div class="cq-inline-editor"><textarea id="cq-mine" placeholder="나의 답변을 적어주세요">${esc(mine)}</textarea><div class="cq-answer-actions"><button class="primary" data-act="registermine">답변 등록</button>${mine?'<button data-act="cancelmine">취소</button>':''}</div></div>`}<div class="cq-answer-label"><span>${esc(characterName())}의 답변</span></div>${ai&&!editAi?`<div class="cq-answer-bubble ai">${esc(ai)}</div><div class="cq-answer-actions ai-actions"><button data-act="editai">수정</button><button data-act="generate">다시 생성</button></div>`:`${editAi?`<div class="cq-inline-editor"><textarea id="cq-ai" placeholder="${esc(characterName())}의 답변 수정">${esc(ai)}</textarea><div class="cq-answer-actions ai-actions"><button class="primary" data-act="registerai">수정 완료</button><button data-act="cancelai">취소</button></div></div>`:'<div class="cq-empty-answer">아직 생성된 답변이 없어요.</div>'}<div class="cq-answer-actions ai-actions"><button class="primary" data-act="generate">${esc(characterName())} 답변 생성</button></div>`}`}
function render(){const list=all();state.index=Math.max(0,Math.min(state.index,list.length-1));root.querySelectorAll('[data-tab]').forEach(x=>x.classList.toggle('active',x.dataset.tab===state.tab));let html=state.noticed?`<div class="cq-note">${esc(state.noticed)}</div>`:'';
if(state.tab==='questions'){let q=current(),a=data.answers[q.id]||{};let done=Object.values(data.answers).filter(x=>x?.ai?.trim()).length;html+=`<div class="cq-row" style="justify-content:space-between"><span class="cq-pill">QUESTION ${state.index+1} / ${list.length}</span><span class="cq-muted">완성 ${done}개</span></div><div class="cq-question"><span class="cq-qmark">Q.</span><strong>${esc(q.q)}</strong></div>${answerFields(a)}<div class="cq-sticky"><button data-act="prev" ${state.index===0?'disabled':''}>← 이전 질문</button><button data-act="next" ${state.index===list.length-1?'disabled':''}>다음 질문 →</button></div>`}
if(state.tab==='library'){html+=`<h3>우리의 문답 보관함</h3><div class="cq-muted">기본 70문 + 직접 추가 ${data.custom.length}문 · 이전 작성 기록은 별도 보존 · 채팅방별 분리 저장</div><div class="cq-row" style="margin-top:12px"><input id="cq-newq" placeholder="새 질문 입력" style="flex:1"/><button data-act="addq">+ 질문 추가</button></div>`;for(let i=0;i<list.length;i++){let q=list[i],a=data.answers[q.id]||{};html+=`<div class="cq-item"><span data-jump="${i}"><b>${i+1}.</b> ${esc(q.q)} <small class="cq-muted">${a.ai?'♥ 완료':a.mine?'작성 중':''}</small></span>${q.id.startsWith('c')?`<button data-edit="${esc(q.id)}">수정</button><button data-del="${esc(q.id)}">삭제</button>`:''}</div>`}}
if(state.tab==='sources'){html+=`<h3>ZETAKIT 응답검토 연결 로어북</h3><div class="cq-note">ZETAKIT이 이미 동기화한 로컬 데이터만 읽어요. 제타 내부 API 호출이나 원본 변경은 하지 않습니다.</div><div class="cq-muted">${esc(state.loreStatus)}</div><button data-act="rescan">↻ 저장된 로어북 다시 읽기</button>`;
 html+=`<h3 style="margin-top:20px">응답검토 내부 로어북 · ${internalBooks.length}개</h3><div class="cq-muted">현재 방의 응답검토에서 선택한 로어북만 표시해요. 장기기억도 응답검토에서 선택했을 때만 포함돼요. AI 참고 로어북은 최대 50,000자까지 전달하며, 토큰 절약을 위해 20,000자 이내를 권장해요.</div>`;
 if(internalBooks.length){for(let b of internalBooks){let checked=(s.internalBooks||[]).includes(b.id);html+=`<div class="cq-source"><label class="cq-checkbox"><input type="checkbox" data-internal="${esc(b.id)}" ${checked?'checked':''}/> <span><b>${esc(b.title)}</b> · 내부 로어북 · ${b.content.length.toLocaleString()}자</span></label></div>`}}else{html+=`<div class="cq-note">현재 방의 응답검토에서 선택한 내부 로어북이 없어요. 응답검토의 선택 상태를 확인해 주세요.</div>`}
 html+=`<h3 style="margin-top:20px">제타 연결 로어북 · ${connectedBooks.length}개</h3>`;
 if(connectedBooks.length){for(let b of connectedBooks){html+=`<div class="cq-source"><label class="cq-checkbox"><input type="checkbox" data-zbook="${esc(b.id)}" ${(s.zetaBooks||[]).includes(b.id)?'checked':''}/> <span><b>${esc(b.title)}</b> · ${b.items.length}항목</span></label></div>`}}else{html+='<div class="cq-note">현재 방과 일치하는 로어북이 없으면 ZETAKIT 응답검토에서 먼저 동기화해 주세요.</div>'}
 html+=`<button class="primary" data-act="savesources">선택 저장</button>`}
if(state.tab==='diagnostic'){
 const d=recentChat(s.turns),examples=d.samples||[];
 html+=`<h3>말투 분석 확인</h3><div class="cq-note">브라우저에 보이는 최근 대화만 분석해요. 이 진단은 AI API를 호출하거나 내용을 서버로 전송하지 않아요.</div><div class="cq-source"><b>감지된 메시지</b> ${d.count}개 · <b>화자 확인</b> ${d.tagged}개<br><b>캐릭터 발화 예시</b> ${examples.length}개<br><b>말투 추정</b> ${esc(speechDiagnosis(d))}<br><b>선택 로어북 분량</b> ${loreText().length.toLocaleString()}자<br><b>감지 방식</b> ${esc(d.method)}</div><h3>캐릭터 실제 발화 예시</h3><div class="cq-muted">감지된 캐릭터 발화 중 최근 최대 8개만 표시해요. 틀린 화자가 섞여 있다면 말투 재현에도 문제가 생길 수 있어요.</div>`;
 html+=examples.length?examples.map((x,i)=>`<div class="cq-source"><b>${i+1}.</b> ${esc(x)}</div>`).join(''):'<div class="cq-note">캐릭터 발화가 확인되지 않았어요. 최근 대화 감지 또는 화자 분류를 점검해야 해요.</div>';
 html+='<div class="cq-row" style="margin-top:14px"><button data-act="diagnose">다시 분석</button><button class="primary" data-act="backsettings">설정으로 돌아가기</button></div>';
}
if(state.tab==='settings'){html+=`<div class="cq-settings-section"><div class="cq-section-title">문답 설정</div><div class="cq-muted cq-section-desc">현재 방의 문답 이름과 AI가 참고할 대화 범위를 설정해요.</div><label>애칭</label><input id="cq-character" value="${esc(s.character)}" placeholder="애칭을 입력해 주세요 (선택)"><div class="cq-muted cq-field-help">비워두면 현재 방의 플롯 제목을 사용해요. 애칭을 입력하면 답변 이름에 우선 표시돼요.</div><label>캐릭터 소개·말투 메모 (선택)</label><textarea id="cq-persona" placeholder="기억 외에 참고할 인물 설정">${esc(s.persona)}</textarea><label>참고할 최근 대화 (0~40턴)</label><input type="number" id="cq-turns" min="0" max="40" step="1" value="${s.turns}"><div class="cq-muted cq-field-help">현재 화면에 로딩된 대화만 참고해요. 최근 대화는 자동 감지해요.</div><div class="cq-row" style="margin-top:10px"><button type="button" data-act="checkchat">최근 대화 감지 확인</button><button type="button" data-act="diagnose">말투 분석 확인</button></div></div><div class="cq-settings-section"><div class="cq-section-title">API 설정</div><div class="cq-muted cq-section-desc">ZETAKIT 응답검토에 저장한 외부 AI 프로필을 가져오거나 직접 입력할 수 있어요. 제타 내부 API는 사용하지 않아요.</div><label>응답검토 API 프로필</label><select id="cq-profile"><option value="">직접 입력 / 선택 안 함</option>${availableProfiles.map(p=>`<option value="${esc(p.id)}" ${s.profileId===p.id?'selected':''}>${esc(p.name||p.provider||p.model||p.id)}</option>`).join('')}</select><div class="cq-profile-actions"><button data-act="loadprofile">선택한 프로필 불러오기</button><button data-act="refreshprofiles">프로필 목록 새로고침</button></div><div class="cq-profile-help cq-muted">선택한 프로필은 다음 실행부터 자동 연결돼요. API Key는 JSON 백업에 포함되지 않아요.</div><label>API 종류</label><select id="cq-provider">${[['openai','OpenAI / 호환'],['openrouter','OpenRouter'],['gemini','Gemini AI Studio'],['claude','Claude'],['custom','직접 입력']].map(([v,l])=>`<option value="${v}" ${s.provider===v?'selected':''}>${l}</option>`).join('')}</select><label>API URL</label><input id="cq-url" value="${esc(s.url)}" placeholder="https://..."><label>모델 ID</label><input id="cq-model" value="${esc(s.model)}" placeholder="모델 ID"><label>API Key</label><input type="password" id="cq-key" value="${esc(s.key||'')}" autocomplete="off" placeholder="API Key"><label class="cq-checkbox"><input type="checkbox" id="cq-remkey" ${s.rememberKey?'checked':''}/> API 키를 이 브라우저에 저장 (공용 기기 비추천)</label><div class="cq-muted cq-field-help">AI 답변 생성 시 설정한 외부 제공자에게 선택한 로어북과 대화가 전달돼요. 브라우저에서 직접 요청하므로 CORS 제한이 있을 수 있어요.</div></div><div class="cq-row cq-settings-actions"><button class="primary" data-act="savesettings">설정 저장</button><button data-act="test">API 연결 테스트</button><button data-act="import">백업 복원</button></div>`}
$('#cq-body').innerHTML=html; if(state.tab==='settings'&&s.key)$('#cq-key').value=s.key;
}
function scan(){let arr=[];for(let i=0;i<localStorage.length;i++){let k=localStorage.key(i);if(k.startsWith(base))continue;if(!/zeta|lore|memory|review|patch|기억|로어|검토/i.test(k))continue;let v=localStorage.getItem(k)||'';if(v.length>500000)continue;arr.push({key:k,value:v})}return arr.slice(0,60)}
function persistAnswer(){let q=current(),old=data.answers[q.id]||{};data.answers[q.id]={...old,mine:$('#cq-mine')?.value??old.mine??'',ai:$('#cq-ai')?.value??old.ai??'',date:new Date().toLocaleDateString('ko-KR')};save()}
function settingsRead(){s.profileId=$('#cq-profile')?.value||s.profileId||'';let $v=(id)=>$('#'+id).value;s.character=$v('cq-character').trim();updateCharacterName();s.persona=$v('cq-persona');s.provider=$v('cq-provider');s.url=$v('cq-url').trim();s.model=$v('cq-model').trim();s.key=$v('cq-key').trim();s.rememberKey=$('#cq-remkey').checked;s.turns=Math.max(0,Math.min(40,Number($v('cq-turns'))||0));let stored=s.key;if(!s.rememberKey)s.key='';save();s.key=stored}
function classifyMessage(el){
 // 실제 제타 채팅 DOM 기준: 오른쪽은 유저, 왼쪽은 캐릭터.
 const body=el?.matches?.('[data-sentry-component="BodyView"]')?el:el?.closest?.('[data-sentry-component="BodyView"]');
 if(body?.querySelector('[data-sentry-component="LeftTextContent"]'))return 'char';
 if(body?.querySelector('[data-sentry-component="RightTextContent"]'))return 'user';
 return '';
}
function recentChat(n){
 if(!n)return {text:'',count:0,tagged:0,method:'off',samples:[]};
 // 제타 화면에 이미 렌더링된 메시지만 DOM에서 읽는다. 내부 API/네트워크 호출 없음.
 const containers=[...document.querySelectorAll('[data-key^="message-"], [data-index][data-key*="message-"]')]
  .filter(el=>!root.contains(el)&&!el.closest('#'+ID)&&el.getClientRects().length);
 const unique=new Map();
 for(const container of containers){
  // 하나의 message wrapper만 유지하여 중복 집계 방지.
  if(container.parentElement?.closest('[data-key^="message-"]'))continue;
  const key=container.getAttribute('data-key')||container.id;
  if(unique.has(key))continue;
  const user=container.querySelector('[data-sentry-component="RightTextContent"]');
  const char=container.querySelector('[data-sentry-component="LeftTextContent"]');
  let target=user||char;if(!target)continue;
  // 캐릭터의 스와이프 답변은 현재 활성화된 슬라이드 안에서만 읽는다.
  if(char){
   const active=container.querySelector('.swiper-slide-active [data-sentry-component="LeftTextContent"]');
   if(active)target=active;
   else if(container.querySelector('.swiper-slide'))continue;
  }
  const bubble=target.querySelector('[data-sentry-component="ChatBubbleContainer"] .chat')
    ||target.querySelector('.message-context-menu-trigger .chat');
  if(!bubble)continue;
  const role=user?'user':'char';
  const copy=bubble.cloneNode(true);
  // 캐릭터 말투 예시는 지문(<em>)을 제외한 실제 대사만 사용한다.
  if(role==='char')copy.querySelectorAll('em,script,style').forEach(node=>node.remove());
  const message=(copy.innerText||copy.textContent||'').replace(/\s+/g,' ').trim();
  if(!message)continue;
  unique.set(key,{role,text:message,index:Number(container.getAttribute('data-index')??NaN)});
 }
 const lines=[...unique.values()].sort((a,b)=>Number.isFinite(a.index)&&Number.isFinite(b.index)?a.index-b.index:0)
  .slice(-Math.min(80,Math.max(1,Number(n))*2));
 return {text:lines.map(x=>`[${x.role==='char'?'캐릭터':'유저'}] ${x.text.slice(0,900)}`).join('\n').slice(-9000),
  count:lines.length,tagged:lines.length,method:'Zeta LeftTextContent / RightTextContent',
  samples:lines.filter(x=>x.role==='char').slice(-8).map(x=>x.text.slice(0,220))};
}
function styleGuide(chatText){
 // 별도 API 호출 없이 최근 캐릭터 발화에서 존댓말/반말 사용 경향만 추정한다.
 const utterances=String(chatText||'').split(/\n(?=\[(?:캐릭터|유저|화자 미확인)\])/)
  .filter(line=>line.startsWith('[캐릭터]')).map(line=>line.replace(/^\[캐릭터\]\s*/, '').trim()).filter(Boolean).slice(-12);
 if(!utterances.length)return '최근 캐릭터 발화를 확인할 수 없으므로 로어북에 명시된 화법을 따르라. 임의로 다정한 말투를 만들지 마라.';
 let polite=0,casual=0;
 for(const line of utterances){
  const sentences=line.split(/(?<=[.!?。！？])\s*|\n+/).filter(Boolean);
  for(const raw of sentences){const part=raw.replace(/[\s"“”'’()\[\]]+$/g,'').trim();
   if(/(?:습니다|ㅂ니다|습니까|세요|어요|아요|여요|이에요|예요|거든요|겠어요|입니다|해요|해줘요|할까요|인가요|네요|군요|죠|요)[.!?。！？~]*$/.test(part))polite++;
   else if(/(?:했어|됐어|좋아|맞아|거야|잖아|했지|할게|하자|하네|하냐|거든|싶어|고마워|사랑해|알아|몰라|할래|괜찮아|있어|없어|야|니|냐|지|네|다|어|아)[.!?。！？~]*$/.test(part))casual++;
  }
 }
 const example=utterances.slice(-8).map((x,i)=>`${i+1}) ${x.slice(0,110)}`).join(' / ').slice(0,750);
 const mode=polite>=2&&polite>casual*1.3?'최근 캐릭터 발화는 존댓말 우세. 질문 답변도 자연스럽게 존댓말을 유지하라.':casual>=2&&casual>polite*1.3?'최근 캐릭터 발화는 반말 우세. 질문 답변도 자연스럽게 반말을 유지하라.':'존댓말/반말의 우세가 명확하지 않음. 최근 캐릭터 발화 및 로어북의 말투를 우선해 일관되게 답하라.';
 return `${mode} 캐릭터의 호칭, 문장 길이, 농담 방식과 관계의 거리감을 따르되 이전 대사를 그대로 복사하지 마라. [최근 캐릭터 발화 예시] ${example}`;
}

function speechDiagnosis(d){
 const examples=d.samples||[];const combined=examples.join(' ');
 let polite=(combined.match(/(?:습니다|습니까|세요|어요|아요|예요|이에요|네요|군요|죠|요)(?=[.!?\s”"'~]|$)/g)||[]).length;
 let casual=(combined.match(/(?:했어|됐어|좋아|맞아|거야|잖아|했지|할게|하자|할래|괜찮아|있어|없어|해|야|니|냐|지)(?=[.!?\s”"'~]|$)/g)||[]).length;
 return !examples.length?'캐릭터 발화 확인 불가':polite>casual*1.35?'존댓말 우세 (추정)':casual>polite*1.35?'반말 우세 (추정)':'혼합 또는 판단 어려움';
}
function loreText(){const internal=internalBooks.filter(b=>(s.internalBooks||[]).includes(b.id)).map(b=>`[응답검토 내부 로어북: ${b.title}]\n${b.content}`).join('\n\n');return [internal,selectedLoreText()].filter(Boolean).join('\n\n').slice(0,50000)}
async function aiCall(messages){let url=s.url.trim();if(!url){url=s.provider==='gemini'?'https://generativelanguage.googleapis.com/v1beta/models/'+encodeURIComponent(s.model)+':generateContent':s.provider==='claude'?'https://api.anthropic.com/v1/messages':s.provider==='openrouter'?'https://openrouter.ai/api/v1/chat/completions':'https://api.openai.com/v1/chat/completions'}if(!s.model||!s.key)throw Error('설정에서 모델 ID와 API Key를 입력해 주세요.');let res,body,headers={'Content-Type':'application/json'};
if(s.provider==='gemini'){headers['x-goog-api-key']=s.key;body={contents:messages.map(m=>({role:m.role==='assistant'?'model':'user',parts:[{text:m.content}]})),generationConfig:{temperature:0.85}}}else if(s.provider==='claude'){headers['x-api-key']=s.key;headers['anthropic-version']='2023-06-01';body={model:s.model,max_tokens:250,system:messages.filter(m=>m.role==='system').map(m=>m.content).join('\n'),messages:messages.filter(m=>m.role!=='system')}}else{headers['Authorization']='Bearer '+s.key;body={model:s.model,messages,temperature:0.85,max_tokens:250}}
res=await fetch(url,{method:'POST',headers,body:JSON.stringify(body)});let raw=await res.text();try{body=JSON.parse(raw)}catch{throw Error('API가 JSON이 아닌 응답을 보냈어요: '+raw.slice(0,250))}if(!res.ok)throw Error('API 오류 '+res.status+': '+JSON.stringify(body).slice(0,350));return s.provider==='gemini'?body.candidates?.[0]?.content?.parts?.map(x=>x.text||'').join(''):s.provider==='claude'?body.content?.map(x=>x.text||'').join(''):body.choices?.[0]?.message?.content}
async function generate(){persistAnswer();let q=current(),a=data.answers[q.id];if(!s.key){state.tab='settings';notice('먼저 설정에서 API 키를 입력해 주세요.');return}let mem=loreText(),observed=recentChat(s.turns),chat=observed.text,speechRule=styleGuide(chat),prompt=`너는 아래 자료 속 캐릭터로서 커플문답에 답한다. 선택된 로어북은 관계의 역사·현재 관계 단계·인물 성격·사실의 근거이며, 최근 대화 속 캐릭터 발화는 존댓말·반말과 호칭·말버릇의 근거다. 현재 관계를 처음 만난 사이 또는 무조건 연인으로 단정하지 말고 로어북에 기록된 관계에 맞게 답하라. [캐릭터]로 표시된 발화만 말투 예시로 사용하라. [유저] 또는 [화자 미확인] 발화의 어미는 따라 하지 마라. 최근 캐릭터 발화의 호칭·어미·길이·농담을 재현하라. 최근 캐릭터 대사 예시를 말투의 최우선 기준으로 사용하되 문구를 그대로 복제하지 마라. 존댓말·반말을 로어북과 실제 발화에 맞게 일관되게 유지하라. ${speechRule} 어떤 캐릭터든 똑같이 다정하고 시적인 연인 말투로 바꾸지 말 것. 자료에 없는 추억은 사실처럼 지어내지 말 것. 현재 문답에서 유저가 먼저 답했더라도 그 답변은 전달되지 않으며, 캐릭터는 유저의 답에 대한 댓글이나 반응이 아닌 독립적인 답변을 작성한다. 질문에 직접 답하는 1인칭 구어체 1~3문장만 출력. 분석·지문·따옴표는 제외.\n현재 방의 플롯 제목(이름 표시용): ${actualCharacterName()}\n커플문답에 표시할 애칭: ${characterName()}\n추가 설정: ${s.persona||'(없음)'}\n[응답검토에서 선택된 로어북]\n${mem||'(없음)'}\n[최근 대화]\n${chat||'(없음)'}`;let b=root.querySelector('[data-act="generate"]');b.disabled=true;b.textContent='생성 중…';status(`최근 메시지 ${observed.count}개 감지 (화자 확인 ${observed.tagged}개) · API 요청 중`);try{let result=await aiCall([{role:'system',content:prompt},{role:'user',content:`커플문답 질문: ${q.q}\n캐릭터 자신의 관점에서 독립적으로 답해. 현재 문답의 유저 답변은 참고하지 마.`}]);if(!result)throw Error('빈 응답이 돌아왔어요.');data.answers[q.id]={...data.answers[q.id],ai:result,date:new Date().toLocaleDateString('ko-KR')};editAi=false;save();render();status('답변 생성 완료')}catch(e){status('생성 실패');alert('커플문답 생성 실패\n'+e.message+'\n\n브라우저 CORS 오류라면 서버 중계가 필요할 수 있어요.')}finally{if(b.isConnected){b.disabled=false;b.textContent=characterName()+' 답변 생성'}}}

root.addEventListener('click',async e=>{let el=e.target.closest('[data-act],[data-tab],[data-jump],[data-del],[data-edit]');if(!el)return;if(el.dataset.tab){preserveEditor();state.tab=el.dataset.tab;state.noticed='';render();return}if(el.dataset.jump!==undefined){editMine=false;editAi=false;state.index=Number(el.dataset.jump);state.tab='questions';render();return}if(el.dataset.del){if(confirm('추가한 질문과 해당 답변을 삭제할까요?')){data.custom=data.custom.filter(x=>x.id!==el.dataset.del);delete data.answers[el.dataset.del];save();render()}return}if(el.dataset.edit){let q=data.custom.find(x=>x.id===el.dataset.edit);if(!q)return;let changed=prompt('질문 수정',q.q);if(changed?.trim()){q.q=changed.trim();save();render()}return}let act=el.dataset.act;if(act==='close'){root.remove();return}if(act==='prev'||act==='next'){persistAnswer();editMine=false;editAi=false;state.index+=act==='next'?1:-1;render();return}if(act==='editmine'){editMine=true;render();return}if(act==='cancelmine'){editMine=false;render();return}if(act==='registermine'){if(!$('#cq-mine')?.value.trim()){status('답변을 먼저 작성해 주세요.');return}persistAnswer();editMine=false;render();status('내 답변 등록 완료');return}if(act==='editai'){editAi=true;render();return}if(act==='cancelai'){editAi=false;render();return}if(act==='registerai'){persistAnswer();editAi=false;render();status('캐릭터 답변 수정 완료');return}if(act==='saveanswer'){persistAnswer();editMine=false;editAi=false;render();status('저장 완료');return}if(act==='generate'){await generate();return}if(act==='diagnose'){state.tab='diagnostic';render();return}if(act==='backsettings'){state.tab='settings';render();return}if(act==='checkchat'){let d=recentChat(s.turns);notice(`대화 감지: ${d.count}개 / 화자 확인: ${d.tagged}개 / 방식: ${d.method}. 0개라면 제타 화면의 메시지 요소 구조 확인이 필요해요.`);return}if(act==='rescan'){await loadZetakit();render();return}if(act==='refreshprofiles'){await loadZetakit();render();return}if(act==='loadprofile'){s.profileId=$('#cq-profile').value;if(!loadProfileToSettings()){notice('프로필을 선택해 주세요.');return}save();notice('응답검토 API 프로필 연결 완료! 다음부터는 자동으로 불러와요.');return}if(act==='savesources'){s.memory=false;s.internalBooks=[...root.querySelectorAll('[data-internal]:checked')].map(x=>x.dataset.internal);s.zetaBooks=[...root.querySelectorAll('[data-zbook]:checked')].map(x=>x.dataset.zbook);save();notice('현재 방 로어북 선택 저장 완료!');return}if(act==='savesettings'){settingsRead();render();notice('설정 저장 완료! 애칭이 있다면 캐릭터 이름 대신 표시돼요.');return}if(act==='test'){settingsRead();try{status('API 연결 확인 중…');let a=await aiCall([{role:'user',content:'연결 확인입니다. OK만 답해 주세요.'}]);notice('API 연결 성공: '+String(a).slice(0,100))}catch(err){notice('API 연결 실패: '+err.message)}return}if(act==='addq'){let v=$('#cq-newq').value.trim();if(!v)return;data.custom.push({id:'c'+Date.now()+'-'+Math.random().toString(36).slice(2,6),category:'직접 추가',q:v});save();render();return}if(act==='export'){let copy=JSON.parse(JSON.stringify(data));copy.settings.key='';copy.settings.rememberKey=false;let blob=new Blob([JSON.stringify({version:1,room,data:copy},null,2)],{type:'application/json'}),a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download='커플문답_백업_'+new Date().toISOString().slice(0,10)+'.json';a.click();setTimeout(()=>URL.revokeObjectURL(a.href),3000);return}if(act==='import'){let inp=document.createElement('input');inp.type='file';inp.accept='.json,application/json';inp.onchange=async()=>{try{let loaded=JSON.parse(await inp.files[0].text());if(!loaded.data?.answers||!Array.isArray(loaded.data?.custom))throw Error('올바른 커플문답 백업 파일이 아니에요.');if(!confirm('현재 방의 문답 데이터를 백업 파일로 바꿀까요?'))return;let keep=s.key;data=loaded.data;s=data.settings;s.key=keep;save();render()}catch(err){alert(err.message)}};inp.click()}});
root.addEventListener('input',e=>{if(e.target.id==='cq-character'){const label=$('#cq-roomname');if(label){const nickname=($('#cq-character')?.value||'').trim();const name=nickname||actualCharacterName();label.textContent=name==='이름 미설정'?'우리만의 작은 기록':name+'와의 문답';}}});
root.addEventListener('change',e=>{if(e.target.id==='cq-provider'){let v=e.target.value;let urls={gemini:'https://generativelanguage.googleapis.com/v1beta/models/모델ID:generateContent',claude:'https://api.anthropic.com/v1/messages',openrouter:'https://openrouter.ai/api/v1/chat/completions',openai:'https://api.openai.com/v1/chat/completions'};if(!$('#cq-url').value||Object.values(urls).includes($('#cq-url').value))$('#cq-url').value=v==='gemini'?'':urls[v]||''}});
loadZetakit().then(()=>render()).catch(()=>render());
})();
