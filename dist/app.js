const STORAGE_KEY = 'vong-quay-thu-thach-v1';
const TEAM_COLORS = ['#ffd84d','#ff4f87','#56d6d2','#4d83ff','#b58cff'];
const TEAM_IDS = [1,2,4,5,6];
const REWARDS = [1,.5,.25];
const defaultRules = `1. Trước mỗi câu hỏi, người điều phối quay vòng quay để chọn ngẫu nhiên một đội trả lời.\n\n2. Trả lời đúng ở lượt đầu: +1 điểm. Trả lời sai: -1 điểm và quyền trả lời chuyển sang đội khác.\n\n3. Đội trả lời đúng ở lượt thứ hai nhận +0,5 điểm; lượt thứ ba nhận +0,25 điểm.\n\n4. Sau tối đa 3 lượt, đáp án đúng được công bố và trò chơi chuyển sang câu tiếp theo.\n\n5. Kết thúc tất cả câu hỏi, đội có tổng điểm cao nhất chiến thắng.`;
const defaultQuestions = [
  ['Thủ đô của Việt Nam là thành phố nào?',['Hà Nội','Huế','Đà Nẵng','TP. Hồ Chí Minh'],0],
  ['Hành tinh nào gần Mặt Trời nhất?',['Sao Kim','Sao Hỏa','Sao Thủy','Trái Đất'],2],
  ['Một thế kỷ có bao nhiêu năm?',['10 năm','50 năm','100 năm','1.000 năm'],2],
  ['Tác giả của Truyện Kiều là ai?',['Nguyễn Du','Nam Cao','Xuân Diệu','Tố Hữu'],0],
  ['Nước chiếm khoảng bao nhiêu phần trăm bề mặt Trái Đất?',['31%','51%','71%','91%'],2],
  ['Kết quả của 12 × 8 là bao nhiêu?',['86','94','96','108'],2],
  ['Châu lục có diện tích lớn nhất là châu nào?',['Châu Phi','Châu Á','Châu Âu','Châu Mỹ'],1],
  ['Khí nào cần thiết nhất cho quá trình hô hấp của con người?',['Nitơ','Hiđrô','Oxi','Cacbonic'],2],
  ['Quốc kỳ Việt Nam có ngôi sao màu gì?',['Màu trắng','Màu vàng','Màu xanh','Màu đỏ'],1],
  ['Một tam giác có tổng ba góc bằng bao nhiêu độ?',['90°','180°','270°','360°'],1]
].map((q,i)=>({id:Date.now()+i,text:q[0],options:q[1],correct:q[2]}));

function initialData(){return{rules:defaultRules,teams:TEAM_IDS.map((id,i)=>({id,name:`Nhóm ${id}`,color:TEAM_COLORS[i]})),questions:defaultQuestions}}
function loadData(){try{const saved=JSON.parse(localStorage.getItem(STORAGE_KEY));if(saved?.teams?.length&&saved?.questions?.length)return saved}catch(e){}return initialData()}
let data=loadData();
let game=null;
let wheelRotation=0;
let toastTimer;
const $=(s,r=document)=>r.querySelector(s);const $$=(s,r=document)=>[...r.querySelectorAll(s)];
function saveData(){localStorage.setItem(STORAGE_KEY,JSON.stringify(data));updateHomeStats()}
function showToast(message){const el=$('#toast');el.textContent=message;el.classList.add('show');clearTimeout(toastTimer);toastTimer=setTimeout(()=>el.classList.remove('show'),1800)}
function showScreen(id){$$('.screen').forEach(s=>s.classList.toggle('active',s.id===id));window.scrollTo(0,0)}
function updateHomeStats(){$('#homeStats').textContent=`${data.questions.length} câu hỏi · ${data.teams.length} nhóm`;$('#questionCountBadge').textContent=data.questions.length}

function renderSetup(){
  $('#rulesInput').value=data.rules;
  $('#questionsEditor').innerHTML=data.questions.map((q,i)=>`<article class="question-editor-card" data-qid="${q.id}"><div class="question-editor-head"><strong>Câu ${String(i+1).padStart(2,'0')}</strong><button class="delete-btn" data-delete-question="${q.id}" aria-label="Xóa câu ${i+1}">Xóa</button></div><input class="question-input" data-field="text" value="${escapeHtml(q.text)}" aria-label="Nội dung câu ${i+1}"/><div class="option-edit-grid">${q.options.map((o,j)=>`<label class="option-row"><input type="radio" name="correct-${q.id}" value="${j}" ${q.correct===j?'checked':''} aria-label="Đặt đáp án ${String.fromCharCode(65+j)} là đúng"><input class="option-input" data-option="${j}" value="${escapeHtml(o)}" aria-label="Đáp án ${String.fromCharCode(65+j)}"/></label>`).join('')}</div></article>`).join('');
  $('#teamsEditor').innerHTML=data.teams.map(t=>`<label class="team-row"><span class="team-id">Nhóm ${t.id}</span><input class="team-input" data-team-id="${t.id}" value="${escapeHtml(t.name)}" aria-label="Tên nhóm ${t.id}"/></label>`).join('');
  updateHomeStats();
}
function escapeHtml(value){return String(value).replace(/[&<>'"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c]))}
function openSetup(){renderSetup();showScreen('setupScreen')}
function addQuestion(){const id=Date.now();data.questions.push({id,text:'Câu hỏi mới',options:['Đáp án A','Đáp án B','Đáp án C','Đáp án D'],correct:0});saveData();renderSetup();requestAnimationFrame(()=>{const cards=$$('.question-editor-card');cards.at(-1)?.scrollIntoView({behavior:'smooth',block:'center'});cards.at(-1)?.querySelector('.question-input').select()})}
function updateQuestionFromInput(input){const card=input.closest('[data-qid]');if(!card)return;const q=data.questions.find(x=>String(x.id)===card.dataset.qid);if(!q)return;if(input.dataset.field==='text')q.text=input.value;if(input.dataset.option!==undefined)q.options[Number(input.dataset.option)]=input.value;if(input.type==='radio')q.correct=Number(input.value);saveData()}

function startGame(){
  if(!data.questions.length){showToast('Hãy thêm ít nhất 1 câu hỏi');openSetup();return}
  data.teams.forEach((t,i)=>{if(!t.name.trim())t.name=`Nhóm ${t.id}`;t.color=TEAM_COLORS[i%TEAM_COLORS.length]});saveData();
  game={index:0,scores:Object.fromEntries(data.teams.map(t=>[t.id,0])),attempt:0,tried:[],selected:null,spinning:false,answered:false};
  showScreen('gameScreen');renderQuestion();renderScoreboard();drawWheel();
}
function renderQuestion(){
  const q=data.questions[game.index],total=data.questions.length;
  $('#progressText').textContent=`Câu ${game.index+1} / ${total}`;$('#progressBar').style.width=`${((game.index+1)/total)*100}%`;$('#questionNumber').textContent=`CÂU HỎI ${String(game.index+1).padStart(2,'0')}`;$('#gameQuestion').textContent=q.text;
  updateAttemptBadge();showStage('spin');$('#spinPrompt').textContent=game.attempt===0?'Sẵn sàng chọn đội trả lời':'Quay để chuyển quyền trả lời';$('#spinButton').disabled=false;$('#spinButton').textContent='Quay vòng quay';drawWheel();
}
function updateAttemptBadge(){const reward=REWARDS[game.attempt]??0;$('#attemptBadge').textContent=`LƯỢT ${game.attempt+1} · +${formatScore(reward)} ĐIỂM`}
function showStage(name){$('#spinStage').classList.toggle('active',name==='spin');$('#answerStage').classList.toggle('active',name==='answer');$('#resultStage').classList.toggle('active',name==='result')}
function availableTeams(){return data.teams.filter(t=>!game.tried.includes(t.id))}
function drawWheel(rotation=wheelRotation){
  const canvas=$('#wheelCanvas'),ctx=canvas.getContext('2d'),teams=availableTeams().length?availableTeams():data.teams,n=teams.length,c=canvas.width/2,r=c-12;ctx.clearRect(0,0,canvas.width,canvas.height);ctx.save();ctx.translate(c,c);ctx.rotate(rotation);
  teams.forEach((t,i)=>{const a0=i*2*Math.PI/n-Math.PI/n,a1=(i+1)*2*Math.PI/n-Math.PI/n;ctx.beginPath();ctx.moveTo(0,0);ctx.arc(0,0,r,a0,a1);ctx.closePath();ctx.fillStyle=t.color;ctx.fill();ctx.strokeStyle='#07111f';ctx.lineWidth=6;ctx.stroke();ctx.save();ctx.rotate((a0+a1)/2);ctx.textAlign='right';ctx.fillStyle='#07111f';ctx.font='700 24px Be Vietnam Pro';ctx.fillText(shortName(t.name),r-34,8);ctx.restore()});ctx.restore();ctx.beginPath();ctx.arc(c,c,r,0,Math.PI*2);ctx.strokeStyle='#f6f3e8';ctx.lineWidth=8;ctx.stroke();
  return teams;
}
function shortName(name){return name.length>16?name.slice(0,14)+'…':name}
function spinWheel(){
  if(game.spinning)return;const teams=availableTeams();if(!teams.length)return;game.spinning=true;$('#spinButton').disabled=true;$('#spinButton').textContent='Đang quay...';
  const chosenIndex=Math.floor(Math.random()*teams.length),n=teams.length,target=-chosenIndex*2*Math.PI/n;const start=wheelRotation,duration=3200,turns=6*2*Math.PI;let delta=turns+target-(start%(2*Math.PI));while(delta<turns)delta+=2*Math.PI;const begin=performance.now();
  function frame(now){const p=Math.min(1,(now-begin)/duration),ease=1-Math.pow(1-p,4);wheelRotation=start+delta*ease;drawWheel(wheelRotation);if(p<1)requestAnimationFrame(frame);else{wheelRotation=target;game.selected=teams[chosenIndex];game.spinning=false;setTimeout(showAnswers,350)}}requestAnimationFrame(frame)
}
function showAnswers(){const q=data.questions[game.index],reward=REWARDS[game.attempt];$('#selectedTeamName').textContent=game.selected.name;$('#selectedTeamName').style.color=game.selected.color;$('#rewardText').textContent=`Trả lời đúng: +${formatScore(reward)} điểm`;$('#answerGrid').innerHTML=q.options.map((o,i)=>`<button class="answer-btn" data-answer="${i}"><span class="answer-letter">${String.fromCharCode(65+i)}</span>${escapeHtml(o)}</button>`).join('');showStage('answer')}
function chooseAnswer(index){
  if(game.answered)return;game.answered=true;const q=data.questions[game.index],team=game.selected,correct=index===q.correct;
  if(correct){const reward=REWARDS[game.attempt];game.scores[team.id]+=reward;renderScoreboard();showResult(true,`${team.name} nhận +${formatScore(reward)} điểm.`,game.index===data.questions.length-1?'Xem kết quả →':'Câu tiếp theo →')}
  else{game.scores[team.id]-=1;game.tried.push(team.id);renderScoreboard();const noMore=game.attempt>=2||availableTeams().length===0;showResult(false,noMore?`Đáp án đúng là ${String.fromCharCode(65+q.correct)}. ${q.options[q.correct]}`:`${team.name} bị trừ 1 điểm. Quyền trả lời sẽ chuyển sang đội khác.`,noMore?(game.index===data.questions.length-1?'Xem kết quả →':'Câu tiếp theo →'):'Quay đội tiếp theo →',noMore)}
}
function showResult(correct,detail,buttonText,endQuestion=false){const stage=$('#resultStage');stage.classList.toggle('wrong',!correct);$('#resultIcon').textContent=correct?'✓':'×';$('#resultKicker').textContent=correct?'CHÍNH XÁC':'CHƯA CHÍNH XÁC';$('#resultTitle').textContent=correct?'Đội đã ghi điểm!':endQuestion?'Hết lượt trả lời':'Chuyển quyền trả lời';$('#resultDetail').textContent=detail;$('#resultAction').textContent=buttonText;$('#resultAction').dataset.next=correct||endQuestion?'question':'spin';showStage('result')}
function resultAction(){if($('#resultAction').dataset.next==='spin'){game.attempt++;game.answered=false;game.selected=null;updateAttemptBadge();showStage('spin');$('#spinPrompt').textContent='Quay để chuyển quyền trả lời';$('#spinButton').disabled=false;$('#spinButton').textContent='Quay vòng quay';drawWheel()}else{nextQuestion()}}
function nextQuestion(){if(game.index>=data.questions.length-1){showFinal();return}game.index++;game.attempt=0;game.tried=[];game.selected=null;game.answered=false;renderQuestion()}
function formatScore(n){return Number.isInteger(n)?String(n):String(n).replace('.',',')}
function rankedTeams(){return data.teams.map(t=>({...t,score:game.scores[t.id]})).sort((a,b)=>b.score-a.score||a.id-b.id)}
function renderScoreboard(){const ranked=rankedTeams(),best=ranked[0]?.score;$('#scoreboard').innerHTML=ranked.map((t,i)=>`<div class="score-row ${t.score===best&&best!==0?'leading':''}"><span class="score-rank">#${i+1}</span><span class="score-name"><i style="background:${t.color};display:inline-block;width:8px;height:8px;border-radius:50%;margin-right:7px"></i>${escapeHtml(t.name)}</span><strong class="score-value">${formatScore(t.score)}</strong></div>`).join('')}
function showFinal(){const ranked=rankedTeams(),top=ranked[0],winners=ranked.filter(t=>t.score===top.score);$('#winnerCard').innerHTML=`<div class="crown">♛</div><p class="mini-label">${winners.length>1?'ĐỒNG HẠNG NHẤT':'ĐỘI CHIẾN THẮNG'}</p><h3>${winners.map(t=>escapeHtml(t.name)).join(' & ')}</h3><strong>${formatScore(top.score)} điểm</strong>`;$('#finalRanking').innerHTML=ranked.map((t,i)=>`<div class="final-rank-row"><span>#${String(i+1).padStart(2,'0')}</span><strong>${escapeHtml(t.name)}</strong><strong>${formatScore(t.score)} điểm</strong></div>`).join('');showScreen('finalScreen')}

document.addEventListener('click',e=>{
  const tab=e.target.closest('[data-tab]');if(tab){$$('.setup-tab').forEach(x=>x.classList.toggle('active',x===tab));$$('.setup-panel').forEach(x=>x.classList.toggle('active',x.dataset.panel===tab.dataset.tab));return}
  const del=e.target.closest('[data-delete-question]');if(del){if(data.questions.length===1){showToast('Cần giữ lại ít nhất 1 câu hỏi');return}data.questions=data.questions.filter(q=>String(q.id)!==del.dataset.deleteQuestion);saveData();renderSetup();return}
  const ans=e.target.closest('[data-answer]');if(ans){chooseAnswer(Number(ans.dataset.answer));return}
  const action=e.target.closest('[data-action]')?.dataset.action;if(!action)return;
  const actions={'start-game':startGame,'open-setup':openSetup,'go-home':()=>showScreen('homeScreen'),'add-question':addQuestion,'spin':spinWheel,'result-action':resultAction,'show-rules':()=>{$('#rulesDisplay').textContent=data.rules;$('#rulesDialog').showModal()},'close-rules':()=>$('#rulesDialog').close(),'confirm-exit':()=>$('#exitDialog').showModal(),'cancel-exit':()=>$('#exitDialog').close(),'exit-game':()=>{$('#exitDialog').close();game=null;showScreen('homeScreen')},'restart':startGame};actions[action]?.()
});
document.addEventListener('input',e=>{if(e.target.id==='rulesInput'){data.rules=e.target.value;saveData()}if(e.target.matches('.team-input')){const t=data.teams.find(x=>String(x.id)===e.target.dataset.teamId);if(t){t.name=e.target.value;saveData()}}if(e.target.closest('[data-qid]'))updateQuestionFromInput(e.target)});
document.addEventListener('change',e=>{if(e.target.type==='radio'&&e.target.closest('[data-qid]'))updateQuestionFromInput(e.target)});
window.addEventListener('resize',()=>{if(game&&$('#gameScreen').classList.contains('active'))drawWheel()});
function registerWebMCP(){const ctx=document.modelContext;if(!ctx?.registerTool)return;const register=(tool)=>{try{Promise.resolve(ctx.registerTool(tool)).catch(()=>{})}catch(e){}};register({name:'start_quiz_game',title:'Bắt đầu trò chơi',description:'Bắt đầu một lượt chơi mới từ câu hỏi đầu tiên với điểm số bằng 0.',inputSchema:{type:'object',properties:{},additionalProperties:false},annotations:{readOnlyHint:false,untrustedContentHint:false},execute(){startGame();return{started:true,question_count:data.questions.length,team_count:data.teams.length}}});register({name:'read_quiz_setup',title:'Xem cấu hình trò chơi',description:'Đọc số câu hỏi và danh sách đội hiện đang được cấu hình.',inputSchema:{type:'object',properties:{},additionalProperties:false},annotations:{readOnlyHint:true,untrustedContentHint:false},execute(){return{question_count:data.questions.length,teams:data.teams.map(t=>({id:t.id,name:t.name}))}}})}
updateHomeStats();registerWebMCP();
