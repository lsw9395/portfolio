const projects = [
{
  "id": "mes",
  "category": "work",
  "name": "DRB 동일고무벨트 · Web MES",
  "period": "2025.05 — 2025.10",
  "label": "실무 프로젝트",
  "art": "MES ↔ MCS",
  "caption": "SYSTEM INTEGRATION",
  "tone": "",
  "tags": [
    "Java",
    "Spring Framework",
    "JSP",
    "RabbitMQ"
  ],
  "summary": "베트남 2공장의 Web MES 업무 화면과 공통 기능을 개발했습니다. PostgreSQL에서 MSSQL로 전환하고 현지 작업자들과 시스템을 테스트했습니다.",
  "role": "Java·Spring Framework·JSP 기반 Web MES 개발, PostgreSQL → MSSQL 전환, Spring Boot·RabbitMQ 기반 MES–MCS 연동",
  "context": "DRB 동일고무벨트 베트남 2공장의 스마트팩토리 전환 과정에서 Web MES를 구축하는 프로젝트였습니다.",
  "actions": [
    "베트남 2공장에서 반제품이 한 공정에서 다음 공정으로 넘어가는 과정을 지켜보며, 각 작업에서 어떤 데이터가 기록되는지 확인했습니다.",
    "작업자가 오더 접수 시점에 생산 설비를 정한다는 점을 확인하고, 접수 화면에서 설비를 함께 배정하도록 수정했습니다.",
    "데이터베이스를 전환하며 기존 SQL을 MSSQL에 맞게 수정하고, Web MES의 공통 기능과 다국어 처리를 개발했습니다.",
    "자동화 설비 협력사와 정한 규격에 맞춰 Spring Boot로 JSON 메시지를 송수신하는 서버를 개발했습니다. tranId로 요청과 응답을 짝짓고 송수신 이력을 DB에 기록했습니다."
  ],
  "outcome": "베트남에서는 작업자들과 수정한 Web MES·PDA 기능을 다시 테스트했습니다. 부산공장 사전 테스트에서는 협력사와 양쪽의 메시지를 대조하고, 전송한 요청에 따라 자동창고 설비가 움직이는 것을 확인했습니다.",
  "note": "회사 소스코드와 내부 화면은 비공개입니다.",
  "links": []
},
{
  "id": "nsiis",
  "category": "work",
  "name": "두산에너빌리티 NSIIS · 문서관리",
  "period": "2024.05 — 2025.02",
  "label": "실무 프로젝트",
  "art": "DOCS",
  "caption": "BUSINESS APPLICATION",
  "tone": "art-blue",
  "tags": [
    "Java",
    "Spring 기반 EMRO",
    "Oracle"
  ],
  "summary": "여러 업무 화면에서 재사용하는 문서관리 화면을 개발하고, 결재 결과에 따라 문서 상태와 다음 단계가 바뀌도록 구현했습니다.",
  "role": "공통 문서관리 화면, 전자결재 연계 및 기간별 일정 조회 화면 개발",
  "context": "두산에너빌리티에서 실무 문서로 관리하던 업무를 NSIIS로 옮기는 프로젝트였습니다. 담당자들이 시스템에서 문서를 조회하고 결재를 요청하며 업무 진행 상태를 확인할 수 있도록 했습니다.",
  "actions": [
    "호출 화면에서 전달한 문서 키로 조회 대상을 정하고, 매개변수에 따라 표의 열 개수와 구성을 바꾸도록 구현했습니다.",
    "결재 팝업을 개발한 동료와 문서관리 화면에서 전달할 데이터를 정했습니다. 결재를 요청하면 문서 상태를 결재 중으로 바꾸고, 결재 결과를 문서관리 화면에 반영했습니다.",
    "기존 달력형 일정 화면을 표로 변경했습니다. 조회 기간에 맞춰 날짜 열을 생성해 담당자별 업무를 한눈에 볼 수 있도록 했습니다."
  ],
  "outcome": "각 업무 화면에서 필요한 값만 전달하면 같은 문서관리 화면을 사용할 수 있게 됐습니다. 사용자는 해당 화면에서 결재 상태를 확인하고 문서 상태에 맞는 다음 단계로 진행할 수 있습니다.",
  "note": "회사 소스코드와 내부 화면은 비공개입니다.",
  "links": []
},
{
  "id": "orion",
  "category": "work",
  "name": "오리온테크놀로지 · 포장·출하 PDA",
  "period": "2025.02 — 2025.05",
  "label": "실무 프로젝트",
  "art": "LOT",
  "caption": "PACKING & SHIPPING",
  "tone": "art-dark",
  "tags": [
    "Java",
    "Spring Boot",
    "SQL"
  ],
  "summary": "제품 번호를 박스·팔레트 번호와 연결해 출하 후에도 특정 제품의 포장 이력을 찾을 수 있도록 개발했습니다.",
  "role": "PDA에서 사용하는 Spring Boot 웹 화면과 업무 SQL 개발",
  "context": "오리온테크놀로지의 현장 작업자가 PDA로 제품을 관리할 수 있도록 기존 PDA 시스템을 고도화하는 프로젝트였습니다. 포장·출하 단계에서는 제품이 어느 박스와 팔레트에 실렸는지 기록하고 조회할 수 있어야 했습니다.",
  "actions": [
    "작업자가 포장할 때 제품 번호와 박스 번호를 연결하는 화면과 SQL을 작성했습니다.",
    "팔레트에 실을 때에는 박스 번호를 팔레트 번호와 연결해 두 단계의 포장 기록을 남겼습니다."
  ],
  "outcome": "제품 번호를 기준으로 박스와 팔레트를 거슬러 확인할 수 있게 됐습니다.",
  "note": "회사 소스코드와 내부 화면은 비공개입니다.",
  "links": []
},
{
  "id": "scada",
  "category": "work",
  "name": "일진G&S · 설비 모니터링",
  "period": "2024.02 — 2024.04",
  "label": "실무 프로젝트",
  "art": "MONITOR",
  "caption": "FACTORY OPERATIONS",
  "tone": "art-sand",
  "tags": [
    "SCADAMaster",
    "SQL"
  ],
  "summary": "납품 몇 주 만에 부품 교체 알림이 울려 현장 기록을 분석하고, 대기시간이 가동시간에 포함되던 오류를 수정했습니다.",
  "role": "오토닉스 SCADAMaster 기반 모니터링 화면 개발 및 부품별 가동시간 계산 SQL 작성",
  "context": "일진G&S에서 현장 담당자가 모니터링 화면으로 설비의 가동 상태를 실시간으로 확인하고 관리할 수 있도록 하는 프로젝트였습니다. 설비별 누적 가동시간을 바탕으로 부품 교체 시점을 알려 주는 기능도 필요했습니다.",
  "actions": [
    "약 6개월 뒤 교체할 것으로 예상한 부품에서 납품 몇 주 만에 알림이 발생했습니다. 먼저 테스트 데이터로 SQL을 재검증했지만 계산 결과는 예상한 값과 일치했습니다.",
    "현장에서 수집한 일주일치 신호 기록을 확인했습니다. 설비가 작업을 멈춰도 전원이 켜져 있는 동안에는 신호가 계속 ON으로 남았습니다.",
    "대기시간까지 합산되는 원인을 확인한 뒤, 설비의 실제 작동·정지 신호를 요청했습니다."
  ],
  "outcome": "실제 작동 신호를 기준으로 누적 가동시간을 계산하도록 SQL을 수정했습니다.",
  "note": "회사 소스코드와 내부 화면은 비공개입니다.",
  "links": []
},
{id:'dooray',category:'learning',name:'MiniDooray',period:'2023 · NHN아카데미',label:'교육 · 팀 프로젝트',art:'GATEWAY',caption:'MICROSERVICE ARCHITECTURE',tone:'art-dark',tags:['Java','Spring','Gateway','MSA'],summary:'NHN Dooray의 축소 버전. Gateway를 담당해 API로 분리된 서비스를 연결했습니다.',role:'gateway 및 gateway_cloud 개발',context:'NHN Dooray의 주요 기능을 축소 구현한 팀 프로젝트입니다. 기능별 서비스를 API 형태로 구성했습니다.',actions:['gateway와 gateway_cloud 담당','gateway_cloud를 통해 분리된 API 서비스를 연결하는 MSA 구조 구현'],outcome:'개별 API 서비스와 Gateway의 연결 구조를 구현하며 서비스 간 요청 흐름을 경험했습니다.',note:'심화과정의 CI/CD 환경 구축은 별도 참여 경험이며, 이 프로젝트의 기능 개발과 구분합니다.',links:[['프로젝트 조직','https://github.com/minidooray'],['gateway','https://github.com/minidooray/gateway'],['gateway_cloud','https://github.com/minidooray/gateway_cloud']]},
{id:'emotion',category:'learning',name:'감정인식 음악 추천 앱',period:'2022.10 — 2022.12',label:'캡스톤 · 개발 전담',art:'MOOD → ♫',caption:'MOBILE × MACHINE LEARNING',tone:'art-lilac',tags:['Flutter','Dart','TensorFlow Lite'],summary:'이미지 분류 모델을 모바일 앱에 적용해 감정 분류와 음악 추천 화면을 연결했습니다.',role:'Flutter 애플리케이션 개발 전담 및 이미지 분류 모델 적용',context:'팀에서 수집한 이미지 데이터를 외부 AI 학습 플랫폼에서 학습한 뒤, TensorFlow Lite 형식으로 모바일 애플리케이션에 적용했습니다.',actions:['Flutter·Dart 기반 UI와 이미지 선택 기능 구현','이미지 분류 모델의 감정 분류 결과 표시','음악 재생 및 추천 화면 연결','결과물을 GitHub 소스코드와 시연 영상으로 정리'],outcome:'AI 분류 모델을 실제 모바일 애플리케이션에 적용하는 개발 과정을 경험했습니다.',links:[['GitHub 소스','https://github.com/lsw9395/emotion_music_app']]},
{id:'ai',category:'learning',name:'LLM API 연동 실습',period:'2026.10',label:'개인 학습 · AI 도구 활용',art:'ASK → AI',caption:'API INTEGRATION LAB',tone:'art-blue',tags:['Spring Boot','OpenAI API','JSP'],summary:'직접 발급한 API 키를 적용하고, 질문 입력부터 AI 응답 표시까지 확인했습니다.',role:'API 키 발급·설정, 애플리케이션 실행 및 요청·응답 확인',context:'LLM API가 애플리케이션에서 어떻게 활용되는지 이해하기 위한 개인 실습입니다. AI 코딩 도구로 구성한 Java/Spring 애플리케이션을 사용했습니다.',actions:['OpenAI API 키 직접 발급 및 설정','애플리케이션에 키를 적용하고 실제 API 호출 과정 확인','사용자 질문에 대한 응답 표시 확인'],outcome:'외부 LLM API의 설정과 호출, 웹 애플리케이션에 응답이 표시되는 기본 흐름을 확인했습니다.',note:'AI 코딩 도구를 활용한 학습용 실습입니다. 애플리케이션 전체를 직접 구현한 경험으로 소개하지 않습니다.',links:[['GitHub · 실행 안내','https://github.com/lsw9395/spring-ai-work-assistant'],['영상 새 창에서 보기','./media/ai-demo.mp4']]},
{id:'vr',category:'learning',name:'VR 화재 대응 시뮬레이션',period:'2021.07 — 2022.04',label:'교육 · 장려상 수상',art:'VIRTUAL',caption:'IMMERSIVE FIRE TRAINING',tone:'art-rust',tags:['Unity','Oculus VR'],summary:'VR 기기에서 동작하는 가상현실 화재 대응 체험 프로그램을 개발했습니다.',role:'시뮬레이션 개발 전담',context:'USG공유대학의 Unity·VR 교육 이후 진행한 심화 프로젝트입니다.',actions:['Unity와 Oculus VR 기기를 활용한 가상현실 환경 구현','화재 대응 체험 기능 개발','전문가 멘토링과 피드백을 반영해 프로그램 개선'],outcome:'2022년 4월 작품을 발표하고 USG공유대학 Unity 실감형 콘텐츠 장려상을 수상했습니다.',note:'Unity로 개발한 프로젝트로, 당시 Git을 연결하지 않았으며 프로젝트 용량이 커 소스코드는 GitHub에 업로드하지 못했습니다. 구현 결과는 시연 영상으로 소개합니다.',links:[]}
];
projects.find(p=>p.id==='emotion').video='./media/emotion-demo.mp4';
projects.find(p=>p.id==='vr').video='./media/vr-demo.mp4';
projects.find(p=>p.id==='ai').video='./media/ai-demo.mp4';
const grid=document.querySelector('#project-grid');
grid.innerHTML=projects.map(p=>`<article class="project-card" data-category="${p.category}"><div class="project-art ${p.tone}" data-caption="${p.caption}" aria-hidden="true"><span class="art-code">${p.art}</span></div><div class="card-content"><div class="card-meta"><span>${p.label}</span><span>${p.period}</span></div><h3>${p.name}</h3><p>${p.summary}</p><div class="card-tags">${p.tags.map(t=>`<span>${t}</span>`).join('')}</div><button class="detail-button" data-project="${p.id}" aria-label="${p.name} 상세 보기">역할과 해결 과정 <span aria-hidden="true">↗</span></button></div></article>`).join('');
const dialog=document.querySelector('#project-dialog');let opener;
grid.addEventListener('click',e=>{const btn=e.target.closest('[data-project]');if(!btn)return;const p=projects.find(x=>x.id===btn.dataset.project);opener=btn;document.querySelector('#dialog-content').innerHTML=`<p class="eyebrow">${p.label} · ${p.period}</p><h2 id="dialog-title">${p.name}</h2><div class="chips">${p.tags.map(t=>`<span>${t}</span>`).join('')}</div>${p.video?`<section class="project-video"><h3>시연 영상</h3><video controls playsinline preload="metadata" aria-label="${p.name} 시연 영상"><source src="${p.video}" type="video/mp4">브라우저에서 영상 재생을 지원하지 않습니다.</video><a href="${p.video}" target="_blank" rel="noopener noreferrer">영상 새 창에서 보기 ↗</a></section>`:''}<h3>프로젝트 배경</h3><p>${p.context}</p><h3>담당 역할</h3><p>${p.role}</p><h3>수행 내용</h3><ul>${p.actions.map(a=>`<li>${a}</li>`).join('')}</ul><h3>결과와 배운 점</h3><p>${p.outcome}</p>${p.note?`<p class="scope-note">${p.note}</p>`:''}<div class="dialog-links">${p.links.map(([text,url])=>`<a href="${url}" target="_blank" rel="noopener noreferrer">${text} ↗</a>`).join('')}</div>`;dialog.showModal();document.body.classList.add('modal-open');});
document.querySelector('#close-dialog').addEventListener('click',()=>dialog.close());
dialog.addEventListener('click',e=>{if(e.target===dialog){const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)dialog.close();}});
dialog.addEventListener('close',()=>{dialog.querySelectorAll('video').forEach(v=>v.pause());document.body.classList.remove('modal-open');opener?.focus();});
document.querySelectorAll('[data-filter]').forEach(button=>button.addEventListener('click',()=>{document.querySelectorAll('[data-filter]').forEach(b=>{const active=b===button;b.classList.toggle('active',active);b.setAttribute('aria-pressed',String(active));});let count=0;document.querySelectorAll('.project-card').forEach(card=>{card.hidden=button.dataset.filter!=='all'&&card.dataset.category!==button.dataset.filter;if(!card.hidden)count++;});document.querySelector('#project-count').textContent=`${count}개 프로젝트 표시`; }));
const observer=new IntersectionObserver(entries=>{for(const e of entries){if(e.isIntersecting){document.querySelectorAll('nav a').forEach(a=>{const active=a.hash===`#${e.target.id}`;a.classList.toggle('current',active);if(active)a.setAttribute('aria-current','location');else a.removeAttribute('aria-current');});}}},{rootMargin:'-15% 0px -60% 0px'});
document.querySelectorAll('main section[id]').forEach(s=>observer.observe(s));