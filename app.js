// ===== DATA =====
const phases = [
  { icon: '📢', num: 'Phase 01', name: 'Announcement', desc: 'The government officially announces the election date, setting the entire process in motion.', detail: 'The election announcement marks the formal start. Authorities set the official date, form the Election Commission, and publish the election schedule. Political parties begin mobilizing.', points: ['Official gazette notification', 'Election Commission formation', 'Model Code of Conduct enforced', 'Election schedule published'] },
  { icon: '📋', num: 'Phase 02', name: 'Voter Registration', desc: 'Citizens register to vote, ensuring their names appear on the electoral roll.', detail: 'Every eligible citizen must be registered. Registration drives are held, voter ID cards issued, and electoral rolls updated. Deadlines are strictly enforced.', points: ['Eligibility: Age 18+, citizen', 'Submit proof of identity & address', 'Receive Voter ID card', 'Check name on electoral roll'] },
  { icon: '🏃', num: 'Phase 03', name: 'Candidate Nomination', desc: 'Aspiring candidates formally file their nominations and campaign for votes.', detail: 'Candidates submit their papers, pay a security deposit, and have their nominations scrutinized. Withdrawals are allowed before the final list is published.', points: ['File nomination papers', 'Pay security deposit', 'Scrutiny by Returning Officer', 'Withdrawal window closes', 'Final candidate list published'] },
  { icon: '📣', num: 'Phase 04', name: 'Campaigning', desc: 'Candidates and parties campaign to persuade voters through rallies, ads, and outreach.', detail: 'Campaigns run for several weeks with rallies, door-to-door canvassing, and media advertising. A mandatory "silent period" is observed before polling day.', points: ['Rallies, debates, advertisements', 'Spending limits enforced', 'Silent period 48 hrs before polling', 'No campaigning on polling day'] },
  { icon: '🗳️', num: 'Phase 05', name: 'Polling Day', desc: 'Citizens cast their votes at designated polling stations on election day.', detail: 'On polling day, registered voters visit their assigned booths, verify their identity, and cast their ballot either on paper or electronically.', points: ['Bring Voter ID to polling booth', 'Verify identity with officials', 'Cast secret ballot / press EVM button', 'Ink mark applied to finger'] },
  { icon: '📊', num: 'Phase 06', name: 'Counting & Results', desc: 'Votes are counted, results declared, and winners are certified by election officials.', detail: 'Counting happens under strict observation from agents of all parties. Results are tallied, winners declared, and certificates of election issued.', points: ['Counting agents from all parties present', 'Postal ballots counted first', 'Electronic counts verified', 'Results declared & certified'] }
];

const timelineEvents = [
  { phase: 'pre', badge: 'Pre-Election', title: 'Election Announcement', date: '~6 months before', summary: 'Government announces the election date. Model Code of Conduct comes into effect immediately.', detail: 'The ruling government notifies the Election Commission, which in turn issues the formal election schedule. From this moment, all government activity is monitored to ensure a level playing field.' },
  { phase: 'pre', badge: 'Pre-Election', title: 'Voter Registration Deadline', date: '~4 months before', summary: 'Last date for citizens to register or update their voter details.', detail: 'Electoral rolls are revised and published. Citizens who miss this deadline cannot vote. Voter helplines are set up to assist with queries.' },
  { phase: 'pre', badge: 'Pre-Election', title: 'Nomination Filing', date: '~3 months before', summary: 'Candidates officially file their nomination papers with the Returning Officer.', detail: 'Forms are submitted, security deposits paid, and supporting documents verified. Any citizen meeting the eligibility criteria can file a nomination.' },
  { phase: 'pre', badge: 'Pre-Election', title: 'Scrutiny & Withdrawal', date: '~10 weeks before', summary: 'Nominations are scrutinized; candidates may withdraw within the allowed window.', detail: 'The Returning Officer checks all nominations for validity. Candidates can withdraw without penalty during the official withdrawal period. Final candidate list published after this.' },
  { phase: 'pre', badge: 'Pre-Election', title: 'Campaigning Period Begins', date: '~8 weeks before', summary: 'Official campaign season opens. Rallies, ads and outreach begin.', detail: 'Parties launch their campaigns within the rules set by the Election Commission. Spending limits are monitored. Independent observers are deployed.' },
  { phase: 'pre', badge: 'Pre-Election', title: 'Silent Period', date: '48 hrs before polling', summary: 'All campaigning must stop 48 hours before polling begins.', detail: 'No rallies, speeches, or advertising allowed. This is to give voters time to reflect freely without influence.' },
  { phase: 'election', badge: 'Election Day', title: 'Polling Day', date: 'Election Day', summary: 'Registered voters cast their ballots at designated polling stations.', detail: 'Polling stations open early (typically 7am) and close in the evening. Security personnel are deployed. EVMs (Electronic Voting Machines) or paper ballots used depending on the country.' },
  { phase: 'post', badge: 'Post-Election', title: 'Vote Counting', date: 'Counting Day', summary: 'Ballots are counted under the supervision of election officials and party agents.', detail: 'Counting begins at a designated time. Party agents observe each table. Postal and absentee ballots are counted first. Running totals are updated and publicly announced.' },
  { phase: 'post', badge: 'Post-Election', title: 'Results Declaration', date: 'Counting Day', summary: 'Winners are officially declared and Certificates of Election issued.', detail: 'The Returning Officer formally declares results for each constituency. Winning candidates receive their certificates and take an oath before assuming office.' },
  { phase: 'post', badge: 'Post-Election', title: 'Government Formation', date: 'Within 2 weeks', summary: 'The winning party or coalition forms the government and sworn in.', detail: 'The party (or coalition) with majority support forms the government. The head of government is sworn in, cabinet is appointed, and legislative sessions begin.' }
];

const steps = [
  { icon: '📢', title: 'Election Announcement', desc: 'The election process begins when the competent authority officially announces the election. This triggers the Model Code of Conduct, ensuring fair play from all parties.', points: ['Election Commission takes control of election machinery', 'Transfers of officials to ensure neutrality', 'Government cannot announce new welfare schemes', 'Dates set for all subsequent stages'] },
  { icon: '📋', title: 'Voter Registration', desc: 'Every eligible citizen must register to vote. This ensures only qualified individuals participate, and their votes are properly counted.', points: ['Must be a citizen aged 18 or above', 'Submit application with ID proof and address', 'Special drives for new voters (youth)', 'Electoral roll is publicly displayed for objections'] },
  { icon: '🏃', title: 'Candidate Nomination', desc: 'Anyone who meets eligibility can contest. Nominations ensure serious candidates with accountability enter the race.', points: ['Candidate must meet age and citizenship requirements', 'Security deposit required (forfeited if < threshold votes)', 'Party affiliation or independent status declared', 'Criminal records disclosed by law'] },
  { icon: '📣', title: 'Election Campaign', desc: 'Candidates persuade voters through rallies, debates, media and door-to-door outreach — all within strict spending and conduct rules.', points: ['Spending limits per constituency enforced', 'Hate speech and bribery are criminal offences', 'Equal media access rules apply', 'Election observers monitor compliance'] },
  { icon: '🗳️', title: 'Casting Votes', desc: 'On polling day, every registered voter has the equal right to cast one secret ballot. This is the cornerstone of democracy.', points: ['Bring valid Voter ID to your assigned polling booth', 'Queue and await your turn', 'Receive ballot / press EVM button in private booth', 'Indelible ink applied to finger to prevent double voting'] },
  { icon: '📦', title: 'Ballot Security & Chain of Custody', desc: 'After polling closes, ballot boxes / EVMs are sealed and transported securely to counting centres under watch.', points: ['Sealed in presence of candidates\' agents', 'Strong rooms monitored by CCTV & security', 'Candidates may post their own guards', 'Tamper-evident seals tracked throughout'] },
  { icon: '🔢', title: 'Vote Counting', desc: 'Counting is a transparent process with observers from all parties present at every counting table.', points: ['Counting agents representing each candidate present', 'Postal ballots counted first', 'Each round announced publicly', 'Recounts possible if margin is very small'] },
  { icon: '🏆', title: 'Results & Formation of Government', desc: 'The candidate with the most votes wins. The winning party or coalition then forms the government.', points: ['Certificate of election issued to winner', 'Elected officials take oath of office', 'Majority party leader becomes head of government', 'Cabinet is selected and sworn in'] }
];

const journeySteps = [
  { text: 'Check your eligibility', sub: 'Age 18+, citizen, no disqualifications' },
  { text: 'Register to vote', sub: 'Submit your voter registration form online or in person' },
  { text: 'Receive Voter ID', sub: 'Keep your Voter ID card safe — you\'ll need it on polling day' },
  { text: 'Stay informed', sub: 'Research candidates, parties, and their manifestos' },
  { text: 'Find your polling station', sub: 'Check your assigned booth on the official electoral roll' },
  { text: 'Go vote on polling day', sub: 'Bring your Voter ID. Follow instructions at the booth' },
  { text: 'Check results', sub: 'Results are published online and on news channels' }
];

const quizData = [
  { q: 'What is the minimum voting age in most democracies?', opts: ['16', '18', '21', '25'], correct: 1, explanation: 'In most countries, the minimum voting age is 18. Some countries like Scotland and Austria allow 16-year-olds to vote.' },
  { q: 'What is a "Model Code of Conduct"?', opts: ['Rules candidates must follow during campaigns', 'A code for counting votes', 'A voter registration form', 'A ballot design standard'], correct: 0, explanation: 'The Model Code of Conduct is a set of guidelines issued by the Election Commission to ensure fair elections during the campaign period.' },
  { q: 'What does EVM stand for?', opts: ['Electoral Vote Mechanism', 'Electronic Voting Machine', 'Election Verification Module', 'Equal Voter Management'], correct: 1, explanation: 'EVM stands for Electronic Voting Machine — a tamper-resistant device used in many countries to record and count votes electronically.' },
  { q: 'What is a "constituency"?', opts: ['A political party', 'A geographic area represented by one elected official', 'A voter registration centre', 'A type of ballot'], correct: 1, explanation: 'A constituency (also called a district or riding) is a geographic area whose voters elect one representative to a legislative body.' },
  { q: 'What does "indelible ink" used during elections prevent?', opts: ['Ballot fraud', 'Double voting', 'Late voting', 'Candidate impersonation'], correct: 1, explanation: 'Indelible ink is applied to a voter\'s finger after they vote to prevent them from voting a second time at the same or different polling station.' },
  { q: 'What is the "silent period" before elections?', opts: ['Time when counting happens', '48-hour ban on campaigning before polling', 'Period when nominations are filed', 'Time for voter registration'], correct: 1, explanation: 'The silent period (usually 48 hours) is a no-campaigning window before polling day, giving voters time to reflect without campaign influence.' },
  { q: 'What happens to a security deposit if a candidate gets very few votes?', opts: ['It is doubled', 'It is refunded', 'It is forfeited', 'It is donated to charity'], correct: 2, explanation: 'Security deposits are forfeited if the candidate fails to secure a minimum threshold of total votes cast — this discourages frivolous candidacies.' },
  { q: 'Who certifies the winning candidate after vote counting?', opts: ['The Prime Minister', 'The Returning Officer', 'The Chief Justice', 'The Police Commissioner'], correct: 1, explanation: 'The Returning Officer — the senior official assigned to oversee an election in a constituency — formally declares and certifies the result.' }
];

const knowledgeBase = [
  { keys: ['register', 'registration', 'sign up', 'enrol', 'enroll'], answer: '**To register to vote**, you need to:\n1. Be 18+ and a citizen\n2. Submit a voter registration form (online or at your local election office)\n3. Provide proof of identity and address\n4. Wait for your name to appear on the electoral roll\n\nDeadlines apply — check your local election authority for the cutoff date!' },
  { keys: ['electoral college', 'college', 'usa election', 'american election'], answer: '**The Electoral College** is the US system for electing the President. Each state gets a number of "electors" equal to its Congressional representatives. Most states use a winner-takes-all system. A candidate needs 270 of the 538 electoral votes to win. This means winning the popular vote nationwide doesn\'t guarantee winning the presidency.' },
  { keys: ['count', 'counting', 'votes counted', 'tally'], answer: '**How votes are counted:**\n1. Polling stations close and ballot boxes/EVMs are sealed\n2. Sealed boxes are transported to counting centres under guard\n3. Party agents and observers are present at every counting table\n4. Postal/absentee ballots are counted first\n5. Electronic counts are verified, paper tallies verified\n6. Running totals announced publicly\n7. Final result declared by the Returning Officer' },
  { keys: ['run for office', 'candidate', 'contest', 'eligibility', 'who can run'], answer: '**To run for office**, candidates typically need to:\n- Meet minimum age requirements (varies by position)\n- Be a citizen of the country\n- Not be disqualified (e.g., no serious criminal conviction)\n- File nomination papers with the election authority\n- Pay a security deposit\n- Declare their assets and liabilities' },
  { keys: ['primary', 'primary election', 'primaries'], answer: '**A Primary Election** is a preliminary vote held within a political party to select their candidate for the general election. In a **closed primary**, only registered party members vote. In an **open primary**, any registered voter can participate. Primaries determine who represents the party on the final ballot.' },
  { keys: ['evm', 'electronic voting', 'voting machine', 'ballot paper', 'ballot'], answer: '**Ballot / EVM:**\n- **Paper ballot**: Voter marks their choice on a printed form and deposits it in a sealed box\n- **EVM (Electronic Voting Machine)**: Voter presses a button next to their candidate\'s name; result stored digitally\nBoth methods are designed to be secret and tamper-resistant. Many countries use a combination for security.' },
  { keys: ['fraud', 'rigging', 'cheat', 'corrupt', 'manipulation'], answer: '**Preventing election fraud involves:**\n- Voter ID verification at polls\n- Indelible ink on fingers to prevent double voting\n- Party agents observing counting\n- Independent election observers (national & international)\n- CCTV cameras at counting centres\n- Audit trails for EVMs\n- Legal penalties for violations' },
  { keys: ['polling station', 'booth', 'polling booth', 'where to vote'], answer: '**Finding your polling station:**\n1. Check your voter registration card — it lists your assigned booth\n2. Visit your country\'s official election authority website\n3. Search by your voter ID number\n\nYou must vote at your *assigned* booth. Bring your Voter ID card on the day.' },
  { keys: ['result', 'winner', 'declared', 'who won'], answer: '**Election results process:**\n1. Counting completes for all constituencies\n2. Returning Officer formally declares the winner\n3. Certificate of Election issued\n4. Results published on election authority\'s website\n5. The winning party/coalition forms the government\n6. Head of government is sworn in within a specified period' },
  { keys: ['campaign', 'campaigning', 'rally', 'canvass'], answer: '**Campaigning rules typically include:**\n- Spending limits per candidate/party\n- No bribery or voter intimidation\n- Hate speech prohibited\n- Campaigning must stop 48 hours before polling (silent period)\n- Equal media access requirements\n- Election Commission monitors compliance' }
];

// ===== UTILITY =====
function scrollToSection(id) { document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }); }
function openModal(html) {
  document.getElementById('modal-content').innerHTML = html;
  document.getElementById('modal-overlay').classList.add('open');
}
function closeModal() { document.getElementById('modal-overlay').classList.remove('open'); }

// ===== PHASES =====
function renderPhases() {
  const grid = document.getElementById('phases-grid');
  grid.innerHTML = phases.map((p, i) => `
    <div class="phase-card" id="phase-card-${i}" onclick="openPhaseModal(${i})">
      <span class="phase-arrow">→</span>
      <span class="phase-icon">${p.icon}</span>
      <div class="phase-num">${p.num}</div>
      <div class="phase-name">${p.name}</div>
      <div class="phase-desc">${p.desc}</div>
    </div>`).join('');
}

function openPhaseModal(i) {
  const p = phases[i];
  openModal(`
    <div style="font-size:2.5rem;margin-bottom:12px">${p.icon}</div>
    <h2>${p.name}</h2>
    <p>${p.detail}</p>
    <ul>${p.points.map(pt => `<li>${pt}</li>`).join('')}</ul>`);
}

// ===== TIMELINE =====
let activeFilter = 'all';
function renderTimeline(filter = 'all') {
  const wrapper = document.getElementById('timeline-wrapper');
  const filtered = filter === 'all' ? timelineEvents : timelineEvents.filter(e => e.phase === filter);
  wrapper.innerHTML = filtered.map((e, i) => `
    <div class="timeline-item" style="animation-delay:${i * 0.06}s">
      <div class="timeline-dot">●</div>
      <div class="timeline-card" onclick="openTimelineModal(${timelineEvents.indexOf(e)})">
        <span class="timeline-phase-badge badge-${e.phase}">${e.badge}</span>
        <div class="timeline-title">${e.title}</div>
        <div class="timeline-date">📅 ${e.date}</div>
        <div class="timeline-summary">${e.summary}</div>
      </div>
    </div>`).join('');
}

function openTimelineModal(i) {
  const e = timelineEvents[i];
  openModal(`
    <span class="timeline-phase-badge badge-${e.phase}" style="margin-bottom:14px;display:inline-block">${e.badge}</span>
    <h2>${e.title}</h2>
    <p><strong>📅 ${e.date}</strong></p>
    <p>${e.detail}</p>`);
}

document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    renderTimeline(btn.dataset.filter);
  });
});

// ===== STEPS =====
let activeStep = 0;
function renderSteps() {
  const nav = document.getElementById('steps-nav');
  nav.innerHTML = steps.map((s, i) => `
    <div class="step-nav-item ${i === activeStep ? 'active' : ''}" id="step-nav-${i}" onclick="setStep(${i})">
      <div class="step-nav-num">${i + 1}</div>
      <span>${s.title}</span>
    </div>`).join('');
  renderStepContent();
}

function setStep(i) { activeStep = i; renderSteps(); }

function renderStepContent() {
  const s = steps[activeStep];
  document.getElementById('steps-content').innerHTML = `
    <div class="step-detail-icon">${s.icon}</div>
    <div class="step-detail-title">${s.title}</div>
    <div class="step-detail-desc">${s.desc}</div>
    <div class="step-detail-points">
      ${s.points.map(p => `<div class="step-point"><div class="step-point-dot"></div><span>${p}</span></div>`).join('')}
    </div>
    <div class="step-nav-arrows">
      ${activeStep > 0 ? `<button class="btn-secondary" onclick="setStep(${activeStep - 1})" style="padding:10px 20px;font-size:0.85rem">← Previous</button>` : ''}
      ${activeStep < steps.length - 1 ? `<button class="btn-primary" onclick="setStep(${activeStep + 1})" style="padding:10px 20px;font-size:0.85rem">Next →</button>` : ''}
    </div>`;
}

// ===== VOTER JOURNEY =====
let journeyDone = new Set();
function renderJourney() {
  const track = document.getElementById('journey-track');
  track.innerHTML = journeySteps.map((j, i) => `
    <div class="journey-step ${journeyDone.has(i) ? 'done' : ''}" id="journey-step-${i}" onclick="toggleJourney(${i})">
      <div class="journey-check">${journeyDone.has(i) ? '✓' : ''}</div>
      <div>
        <div class="journey-step-text">${j.text}</div>
        <div class="journey-step-sub">${j.sub}</div>
      </div>
    </div>`).join('');
  const pct = (journeyDone.size / journeySteps.length) * 100;
  document.getElementById('journey-fill').style.width = pct + '%';
}

function toggleJourney(i) {
  journeyDone.has(i) ? journeyDone.delete(i) : journeyDone.add(i);
  renderJourney();
}

// ===== QUIZ =====
let qIndex = 0, score = 0, answered = false;
function startQuiz() {
  qIndex = 0; score = 0; answered = false;
  document.getElementById('quiz-card').style.display = '';
  document.getElementById('quiz-result').style.display = 'none';
  showQuestion();
}

function showQuestion() {
  answered = false;
  const q = quizData[qIndex];
  document.getElementById('quiz-counter').textContent = `Question ${qIndex + 1} of ${quizData.length}`;
  document.getElementById('quiz-score-badge').textContent = `Score: ${score}`;
  document.getElementById('quiz-fill').style.width = (qIndex / quizData.length * 100) + '%';
  document.getElementById('quiz-question').textContent = q.q;
  document.getElementById('quiz-feedback').style.display = 'none';
  document.getElementById('quiz-next-btn').style.display = 'none';
  document.getElementById('quiz-options').innerHTML = q.opts.map((o, i) =>
    `<button class="quiz-option" id="opt-${i}" onclick="selectOption(${i})">${o}</button>`).join('');
}

function selectOption(selected) {
  if (answered) return;
  answered = true;
  const q = quizData[qIndex];
  const isCorrect = selected === q.correct;
  if (isCorrect) score++;
  document.querySelectorAll('.quiz-option').forEach((btn, i) => {
    btn.disabled = true;
    if (i === q.correct) btn.classList.add('correct');
    if (i === selected && !isCorrect) btn.classList.add('wrong');
  });
  const fb = document.getElementById('quiz-feedback');
  fb.style.display = '';
  fb.innerHTML = (isCorrect ? '✅ <strong>Correct!</strong> ' : '❌ <strong>Incorrect.</strong> ') + q.explanation;
  document.getElementById('quiz-next-btn').style.display = '';
  document.getElementById('quiz-next-btn').textContent = qIndex < quizData.length - 1 ? 'Next Question →' : 'See Results 🏆';
}

function nextQuestion() {
  qIndex++;
  if (qIndex >= quizData.length) showResult();
  else showQuestion();
}

function showResult() {
  document.getElementById('quiz-card').style.display = 'none';
  document.getElementById('quiz-result').style.display = '';
  const pct = Math.round((score / quizData.length) * 100);
  const emojis = ['😔', '🤔', '👍', '🎉', '🏆'];
  const msgs = ['Keep learning! Review the timeline and steps sections.', 'Good effort! Try the guide sections to boost your knowledge.', 'Solid understanding! A few more reviews and you\'ll ace it.', 'Great job! You have a strong grasp of the election process.', 'Perfect score! You\'re an election expert!'];
  const tier = Math.min(4, Math.floor(pct / 20));
  document.getElementById('result-emoji').textContent = emojis[tier];
  document.getElementById('result-title').textContent = pct === 100 ? 'Perfect Score!' : pct >= 75 ? 'Well Done!' : pct >= 50 ? 'Good Effort!' : 'Keep Learning!';
  document.getElementById('result-score').textContent = `${score} / ${quizData.length} (${pct}%)`;
  document.getElementById('result-message').textContent = msgs[tier];
}

// ===== ASSISTANT =====
function getBotAnswer(input) {
  const lower = input.toLowerCase();
  for (const entry of knowledgeBase) {
    if (entry.keys.some(k => lower.includes(k))) return entry.answer;
  }
  if (lower.includes('hello') || lower.includes('hi') || lower.includes('hey')) return "Hello! 👋 I'm here to help you understand the election process. Ask me about voter registration, campaigns, vote counting, or anything else!";
  if (lower.includes('thank')) return "You're welcome! 😊 Feel free to ask any other election-related question.";
  if (lower.includes('what is election') || lower.includes('define election')) return "An **election** is a formal process by which citizens choose their representatives or decide on policy issues through voting. It is the cornerstone of democracy, ensuring that those in power reflect the will of the people.";
  return "That's a great question! 🤔 I don't have a specific answer for that in my knowledge base. I'd recommend checking your country's official **Election Commission** website for accurate local information. You can also explore the **Timeline** and **Steps** sections above for a comprehensive overview.";
}

function formatAnswer(text) {
  return text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>').replace(/\n(\d+)\. /g, '<br><strong>$1.</strong> ').replace(/\n- /g, '<br>• ').replace(/\n/g, '<br>');
}

function addMessage(role, text) {
  const chat = document.getElementById('assistant-chat');
  const div = document.createElement('div');
  div.className = `chat-message ${role === 'user' ? 'user-message' : 'bot-message'}`;
  const avatar = role === 'user'
    ? `<div class="user-avatar">You</div>`
    : `<div class="bot-avatar">🗳️</div>`;
  div.innerHTML = `${avatar}<div class="chat-bubble">${formatAnswer(text)}</div>`;
  chat.appendChild(div);
  chat.scrollTop = chat.scrollHeight;
}

function showTyping() {
  const chat = document.getElementById('assistant-chat');
  const div = document.createElement('div');
  div.className = 'chat-message bot-message';
  div.id = 'typing-indicator';
  div.innerHTML = `<div class="bot-avatar">🗳️</div><div class="chat-bubble"><div class="typing-indicator"><div class="typing-dot"></div><div class="typing-dot"></div><div class="typing-dot"></div></div></div>`;
  chat.appendChild(div);
  chat.scrollTop = chat.scrollHeight;
}

function removeTyping() { document.getElementById('typing-indicator')?.remove(); }

function sendMessage() {
  const input = document.getElementById('user-input');
  const text = input.value.trim();
  if (!text) return;
  input.value = '';
  addMessage('user', text);
  showTyping();
  setTimeout(() => {
    removeTyping();
    addMessage('bot', getBotAnswer(text));
  }, 900 + Math.random() * 600);
}

function askQuestion(q) {
  document.getElementById('user-input').value = q;
  scrollToSection('assistant');
  setTimeout(sendMessage, 300);
}

document.getElementById('user-input').addEventListener('keydown', e => { if (e.key === 'Enter') sendMessage(); });

// ===== INIT =====
renderPhases();
renderTimeline('all');
renderSteps();
renderJourney();
startQuiz();
