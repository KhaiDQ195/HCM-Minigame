const STORAGE_KEY = 'vong-quay-thu-thach-v2';
const LEGACY_STORAGE_KEY = 'vong-quay-thu-thach-v1';
const TEAM_COLORS = ['#ffd84d', '#ff4f87', '#56d6d2', '#4d83ff', '#b58cff'];
const PLAYER_COLORS = ['#56d6d2', '#ffd84d', '#ff4f87', '#4d83ff', '#b58cff', '#ff9f43', '#4cd97b', '#ff6b6b', '#54a0ff', '#c8d63b', '#e66fc2', '#7ed6df'];
const TEAM_IDS = [1, 2, 4, 5, 6];
const REWARDS = [1, .5, .25];
const ROUND1_TIME_LIMITS = [15, 10, 5];
const DEFAULT_CONTENT_VERSION = 1;

const defaultRound1Questions = [
  {
    id: 'default-r1-1',
    text: 'Trong tác phẩm "Đường cách mệnh" (1927), Hồ Chí Minh đã sử dụng hình tượng nào để khẳng định tính tất yếu về vai trò lãnh đạo của Đảng Cộng sản đối với con thuyền cách mạng?',
    options: ['Ngọn đuốc soi đường', 'Kiến trúc sư trưởng', 'Người cầm lái', 'Người lính tiên phong'],
    correct: 2
  },
  {
    id: 'default-r1-2',
    text: 'Điểm độc đáo và sáng tạo của Hồ Chí Minh khi bàn về các nhân tố hình thành Đảng Cộng sản Việt Nam so với học thuyết Mác - Lênin là gì?',
    options: ['Loại bỏ vai trò của tri thức cách mạng', 'Chỉ nhấn mạnh vào giai cấp công nhân', 'Coi phong trào nông dân là nhân tố quyết định', 'Có nhân tố phong trào yêu nước'],
    correct: 3
  },
  {
    id: 'default-r1-3',
    text: 'Bản chất giai cấp công nhân của Nhà nước Việt Nam theo tư tưởng Hồ Chí Minh thống nhất với tính nhân dân và tính dân tộc vì lý do cốt lõi nào?',
    options: ['Vì tất cả các giai tầng trong xã hội đều phải trở thành công nhân để được bảo vệ', 'Vì đại đa số người dân Việt Nam đều là công nhân làm việc trong các nhà máy', 'Vì Nhà nước chỉ phục vụ duy nhất quyền lợi riêng biệt của giai cấp công nhân', 'Vì lợi ích của giai cấp công nhân thống nhất với lợi ích của nhân dân lao động và của toàn dân tộc'],
    correct: 3
  },
  {
    id: 'default-r1-4',
    text: 'Trong quan điểm về Nhà nước do nhân dân, Hồ Chí Minh cho rằng nhân dân thực hiện quyền làm chủ thông qua hai hình thức dân chủ nào?',
    options: ['Dân chủ trực tiếp và dân chủ gián tiếp (đại diện)', 'Dân chủ kinh tế và dân chủ quân sự', 'Dân chủ nội bộ và dân chủ xã hội', 'Dân chủ tập trung và dân chủ tự do'],
    correct: 0
  },
  {
    id: 'default-r1-5',
    text: 'Việc Hồ Chí Minh đề nghị tổ chức Tổng tuyển cử với chế độ phổ thông đầu phiếu ngay sau khi giành độc lập (1945) nhằm mục đích chính yếu nào?',
    options: ['Chỉ để thử nghiệm mô hình dân chủ phương Tây', 'Thanh lọc các thành phần phản động ra khỏi bộ máy', 'Xây dựng nền tảng pháp lý và tính hợp hiến cho Nhà nước mới', 'Thỏa mãn yêu cầu của các nước đồng minh đang vào giải giáp'],
    correct: 2
  },
  {
    id: 'default-r1-6',
    text: 'Để đảm bảo tính hợp hiến và hợp pháp của Chính phủ mới sau Cách mạng Tháng Tám, Hồ Chí Minh đã đề nghị tổ chức sự kiện quan trọng nào?',
    options: ['Hội nghị ký kết các hiệp ước quốc tế', 'Cuộc Tổng tuyển cử với chế độ phổ thông đầu phiếu', 'Lễ ra mắt Chính phủ lâm thời tại quảng trường Ba Đình', 'Đại hội đại biểu toàn quốc của Đảng'],
    correct: 1
  },
  {
    id: 'default-r1-7',
    text: "Trong tư tưởng Hồ Chí Minh về Nhà nước pháp quyền, việc 'thượng tôn pháp luật' phải đi đôi với công tác nào để đạt hiệu quả cao nhất?",
    options: ['Giáo dục pháp luật và nâng cao trình độ dân trí', 'Hạn chế quyền phê bình chính quyền của nhân dân', 'Giảm bớt số lượng các cơ quan tư pháp', 'Tăng cường các biện pháp trừng phạt khắc nghiệt'],
    correct: 0
  },
  {
    id: 'default-r1-8',
    text: "Khái niệm 'Pháp quyền nhân nghĩa' trong tư tưởng Hồ Chí Minh có đặc điểm gì nổi bật?",
    options: ['Sử dụng đạo đức thay thế hoàn toàn cho các văn bản pháp luật', 'Chỉ áp dụng các quy định của Nho giáo trong quản lý xã hội', 'Pháp luật mang tính nhân văn, vì con người và bảo vệ quyền con người', 'Ưu tiên bảo vệ quyền lợi của những người có địa vị cao trong xã hội'],
    correct: 2
  },
  {
    id: 'default-r1-9',
    text: 'Hồ Chí Minh phê phán hiện tượng nào sau đây là thiếu tính nghiêm minh của pháp luật?',
    options: ['Cho phép nhân dân tham gia soạn thảo Hiến pháp', 'Ban hành quá nhiều đạo luật cùng một lúc', 'Thưởng có khi quá rộng, mà phạt thì không nghiêm', 'Đào tạo quá nhiều luật sư và thẩm phán'],
    correct: 2
  },
  {
    id: 'default-r1-10',
    text: "Mối quan hệ giữa 'Đảng lãnh đạo' và 'Nhà nước quản lý' theo tư tưởng Hồ Chí Minh được thể hiện như thế nào?",
    options: ['Nhà nước hoàn toàn độc lập và không cần sự hướng dẫn của Đảng', 'Đảng lãnh đạo bằng đường lối, chủ trương để Nhà nước cụ thể hóa thành luật pháp và tổ chức thực hiện', 'Đảng trực tiếp làm thay mọi công việc quản lý hàng ngày của chính quyền', 'Đảng chỉ tập trung vào kinh tế, còn Nhà nước chỉ tập trung vào quân sự'],
    correct: 1
  }
];

const defaultTieBreakerQuestion = {
  id: 'default-tie-1',
  text: 'Sinh viên cần làm gì để vận dụng tốt tư tưởng Hồ Chí Minh vào việc xây dựng Nhà nước hiện nay?',
  options: ['Luôn có thái độ phê phán mọi chính sách mà không tìm hiểu kỹ', 'Đợi đến khi tốt nghiệp mới bắt đầu tìm hiểu về pháp luật', 'Tự giác học tập, tuân thủ pháp luật và tham gia giám sát các hoạt động của bộ máy nhà nước', 'Chỉ tập trung vào chuyên môn cá nhân và không cần quan tâm đến chính trị'],
  correct: 2
};

const defaultRound2Questions = [
  {
    id: 'default-r2-1',
    text: 'Trong quan điểm về một Nhà nước pháp quyền, Hồ Chí Minh đã đưa ra yêu cầu nào sau đây để đảm bảo tính nghiêm minh của pháp luật?',
    options: ['Chỉ áp dụng pháp luật đối với những sai phạm mang tính chất kinh tế.', 'Cho phép cán bộ cấp cao được hưởng ngoại lệ nếu có công lao lớn.', 'Ưu tiên giáo dục đạo đức hơn là thực thi các hình phạt nghiêm khắc.', 'Pháp luật phải đúng và đủ, tuyệt đối không có vùng cấm.'],
    correct: 3
  },
  {
    id: 'default-r2-2',
    text: 'Hồ Chí Minh phê phán hiện tượng nào là "giặc nội xâm" làm tha hóa bộ máy Nhà nước và làm mất lòng tin của nhân dân?',
    options: ['Sự thiếu hụt về trang thiết bị kỹ thuật hiện đại.', 'Trình độ chuyên môn của cán bộ còn thấp.', 'Tham ô, lãng phí, quan liêu.', 'Sự khác biệt về quan điểm giữa các thế hệ cán bộ.'],
    correct: 2
  },
  {
    id: 'default-r2-3',
    text: "Khi một tổ chức lãnh đạo áp dụng sai lệch nguyên tắc 'Tập thể lãnh đạo, cá nhân phụ trách' bằng cách đẩy mọi việc cho tập thể quyết định mà không phân công trách nhiệm cụ thể, hệ quả tiêu cực nào sau đây dễ xảy ra nhất?",
    options: ['Gây ra hiện tượng độc đoán, chuyên quyền và mất dân chủ trong nội bộ tổ chức.', 'Làm cho các quyết định được ban hành nhanh chóng và hiệu quả hơn do có sự đồng thuận cao.', 'Dẫn đến tình trạng dựa dẫm, ỷ lại vào tập thể và không ai chịu trách nhiệm chính khi có sai sót.', 'Giúp tăng cường tính chủ động và sáng tạo của mỗi cá nhân trong việc thực hiện nhiệm vụ.'],
    correct: 2
  }
];

function cloneQuestionBank(questions) {
  return questions.map(question => ({ ...question, options: [...question.options] }));
}

function cloneQuestion(question) {
  return { ...question, options: [...question.options] };
}

const legacyRound1Rules = `VÒNG 1 · ĐỒNG ĐỘI
1. Trước mỗi câu hỏi, người điều phối quay vòng quay để chọn ngẫu nhiên một đội trả lời.
2. Trả lời đúng ở lượt đầu: +1 điểm. Trả lời sai: -1 điểm và quyền trả lời chuyển sang đội khác.
3. Đội trả lời đúng ở lượt thứ hai nhận +0,5 điểm; lượt thứ ba nhận +0,25 điểm.
4. Sau tối đa 3 lượt, đáp án đúng được công bố và trò chơi chuyển sang câu tiếp theo.`;

const timedRound1Rules = `VÒNG 1 · ĐỒNG ĐỘI
1. Trước mỗi câu hỏi, người điều phối quay vòng quay để chọn ngẫu nhiên một đội trả lời.
2. Sau khi vòng quay dừng, đội có 15 giây ở lượt đầu, 10 giây ở lượt thứ hai và 5 giây ở lượt thứ ba để trả lời. Hết giờ mà chưa có câu trả lời sẽ được tính là trả lời sai.
3. Trả lời đúng ở lượt đầu: +1 điểm. Trả lời sai: -1 điểm và quyền trả lời chuyển sang đội khác.
4. Đội trả lời đúng ở lượt thứ hai nhận +0,5 điểm; lượt thứ ba nhận +0,25 điểm.
5. Sau tối đa 3 lượt, đáp án đúng được công bố và trò chơi chuyển sang câu tiếp theo.`;

const defaultRound1Rules = `VÒNG 1 · ĐỒNG ĐỘI
1. Trước mỗi câu hỏi, người điều phối quay vòng quay để chọn ngẫu nhiên một đội trả lời.
2. Sau khi vòng quay dừng, đội có 15 giây ở lượt đầu, 10 giây ở lượt thứ hai và 5 giây ở lượt thứ ba để trả lời. Hết giờ mà chưa có câu trả lời sẽ được tính là trả lời sai.
3. Trả lời đúng ở lượt đầu: +1 điểm. Trả lời sai: -1 điểm và quyền trả lời chuyển sang đội khác.
4. Đội trả lời đúng ở lượt thứ hai nhận +0,5 điểm; lượt thứ ba nhận +0,25 điểm.
5. Sau tối đa 3 lượt, đáp án đúng được công bố và trò chơi chuyển sang câu tiếp theo.
6. Nếu có từ 2 đội trở lên đồng hạng nhất sau khi kết thúc các câu hỏi Vòng 1, các đội đó bước vào câu hỏi phân định. Đội trả lời đúng giành chiến thắng; đội trả lời sai hoặc hết giờ bị loại khỏi lượt phân định và vòng quay tiếp tục giữa các đội còn lại.`;

const defaultRound2Rules = `VÒNG 2 · CÁ NHÂN
1. Thành viên của nhóm chiến thắng vòng 1 được đưa vào vòng quay mới.
2. Trả lời đúng: vào Danh sách chiến thắng. Trả lời sai: bị loại khỏi vòng quay.
3. Mỗi câu hỏi có tối đa 3 người trả lời.
4. Vòng 2 kết thúc khi có 3 người trả lời đúng hoặc chỉ còn 3 ứng viên chưa bị loại.`;

const legacyExampleQuestions = [
  ['Thủ đô của Việt Nam là thành phố nào?', ['Hà Nội', 'Huế', 'Đà Nẵng', 'TP. Hồ Chí Minh'], 0],
  ['Hành tinh nào gần Mặt Trời nhất?', ['Sao Kim', 'Sao Hỏa', 'Sao Thủy', 'Trái Đất'], 2],
  ['Một thế kỷ có bao nhiêu năm?', ['10 năm', '50 năm', '100 năm', '1.000 năm'], 2],
  ['Tác giả của Truyện Kiều là ai?', ['Nguyễn Du', 'Nam Cao', 'Xuân Diệu', 'Tố Hữu'], 0],
  ['Nước chiếm khoảng bao nhiêu phần trăm bề mặt Trái Đất?', ['31%', '51%', '71%', '91%'], 2],
  ['Kết quả của 12 × 8 là bao nhiêu?', ['86', '94', '96', '108'], 2],
  ['Châu lục có diện tích lớn nhất là châu nào?', ['Châu Phi', 'Châu Á', 'Châu Âu', 'Châu Mỹ'], 1],
  ['Khí nào cần thiết nhất cho quá trình hô hấp của con người?', ['Nitơ', 'Hiđrô', 'Oxi', 'Cacbonic'], 2],
  ['Quốc kỳ Việt Nam có ngôi sao màu gì?', ['Màu trắng', 'Màu vàng', 'Màu xanh', 'Màu đỏ'], 1],
  ['Một tam giác có tổng ba góc bằng bao nhiêu độ?', ['90°', '180°', '270°', '360°'], 1]
].map((q, i) => ({ id: `r1-${i + 1}`, text: q[0], options: q[1], correct: q[2] }));

const legacyExampleRound2Questions = [
  ['Trong hệ Mặt Trời, hành tinh nào được gọi là “Hành tinh Đỏ”?', ['Sao Kim', 'Sao Hỏa', 'Sao Mộc', 'Sao Thổ'], 1],
  ['Từ nào sau đây là từ láy?', ['Nhà cửa', 'Long lanh', 'Học tập', 'Xe đạp'], 1],
  ['Số nguyên tố nhỏ nhất là số nào?', ['0', '1', '2', '3'], 2]
].map((q, i) => ({ id: `r2-${i + 1}`, text: q[0], options: q[1], correct: q[2] }));

function initialData() {
  return {
    contentVersion: DEFAULT_CONTENT_VERSION,
    round1Rules: defaultRound1Rules,
    round2Rules: defaultRound2Rules,
    teams: TEAM_IDS.map((id, i) => ({ id, name: `Nhóm ${id}`, color: TEAM_COLORS[i] })),
    questions: cloneQuestionBank(defaultRound1Questions),
    tieBreakerQuestion: cloneQuestion(defaultTieBreakerQuestion),
    round2Questions: cloneQuestionBank(defaultRound2Questions),
    round2Players: []
  };
}

function splitLegacyRules(rules) {
  if (typeof rules !== 'string' || !rules.trim()) {
    return { round1Rules: defaultRound1Rules, round2Rules: defaultRound2Rules };
  }
  const round2Start = rules.search(/(^|\n)\s*VÒNG 2\b/i);
  if (round2Start < 0) return { round1Rules: rules.trim(), round2Rules: defaultRound2Rules };
  return {
    round1Rules: rules.slice(0, round2Start).trim() || defaultRound1Rules,
    round2Rules: rules.slice(round2Start).trim() || defaultRound2Rules
  };
}

function migrateRound1Rules(rules) {
  const normalized = rules.trim();
  return normalized === legacyRound1Rules.trim() || normalized === timedRound1Rules.trim() ? defaultRound1Rules : rules;
}

function isLegacyExampleSet(questions, examples) {
  return Array.isArray(questions)
    && questions.length === examples.length
    && questions.every((question, index) => question.text === examples[index].text
      && question.correct === examples[index].correct
      && question.options?.every((option, optionIndex) => option === examples[index].options[optionIndex]));
}

function isPlaceholderQuestionSet(questions) {
  return Array.isArray(questions)
    && questions.length > 0
    && questions.every(question => question.text?.trim() === 'Câu hỏi mới'
      && question.options?.every((option, index) => option?.trim() === `Đáp án ${String.fromCharCode(65 + index)}`));
}

function migrateQuestionBank(savedQuestions, legacyExamples, defaults, seedDefaults) {
  const questions = isLegacyExampleSet(savedQuestions, legacyExamples)
    ? []
    : (Array.isArray(savedQuestions) ? savedQuestions : []);
  return seedDefaults && (!questions.length || isPlaceholderQuestionSet(questions))
    ? cloneQuestionBank(defaults)
    : questions;
}

function loadData() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || localStorage.getItem(LEGACY_STORAGE_KEY));
    if (saved?.teams?.length) {
      const migratedRules = splitLegacyRules(saved.rules);
      const seedDefaults = saved.contentVersion !== DEFAULT_CONTENT_VERSION;
      const savedTieBreaker = saved.tieBreakerQuestion;
      return {
        ...initialData(),
        ...saved,
        contentVersion: DEFAULT_CONTENT_VERSION,
        round1Rules: migrateRound1Rules(typeof saved.round1Rules === 'string' ? saved.round1Rules : migratedRules.round1Rules),
        round2Rules: typeof saved.round2Rules === 'string' ? saved.round2Rules : migratedRules.round2Rules,
        questions: migrateQuestionBank(saved.questions, legacyExampleQuestions, defaultRound1Questions, seedDefaults),
        tieBreakerQuestion: seedDefaults && (!savedTieBreaker || savedTieBreaker.text?.trim() === 'Câu hỏi phân định')
          ? cloneQuestion(defaultTieBreakerQuestion)
          : (savedTieBreaker || null),
        round2Questions: migrateQuestionBank(saved.round2Questions, legacyExampleRound2Questions, defaultRound2Questions, seedDefaults),
        round2Players: Array.isArray(saved.round2Players) ? saved.round2Players : []
      };
    }
  } catch (error) {}
  return initialData();
}

let data = loadData();
try { localStorage.setItem(STORAGE_KEY, JSON.stringify(data)); } catch (error) {}
let game = null;
let round2 = null;
let wheelRotation = 0;
let round2WheelRotation = 0;
let toastTimer;
let answerTimerInterval;
let round1SummaryAcknowledged = false;

const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];

function saveData() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  updateHomeStats();
}

function showToast(message) {
  const element = $('#toast');
  element.textContent = message;
  element.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => element.classList.remove('show'), 1900);
}

function showScreen(id) {
  $$('.screen').forEach(screen => screen.classList.toggle('active', screen.id === id));
  window.scrollTo(0, 0);
}

function updateHomeStats() {
  $('#homeStats').textContent = `${data.questions.length} câu vòng 1 · ${data.round2Questions.length} câu vòng 2`;
  $('#questionCountBadge').textContent = `${data.questions.length}+${data.round2Questions.length}`;
}

function escapeHtml(value) {
  return String(value).replace(/[&<>'"]/g, character => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;'
  })[character]);
}

function renderQuestionEditors(questions, round) {
  if (!questions.length) {
    return `<div class="empty-question-state"><strong>Chưa có câu hỏi Vòng ${round}</strong><span>Nhấn “Thêm câu hỏi” để bắt đầu tạo nội dung.</span></div>`;
  }
  return questions.map((question, index) => `
    <article class="question-editor-card" data-qid="${question.id}" data-round="${round}">
      <div class="question-editor-head">
        <strong>${round === 'tie' ? 'Câu phân định' : `Câu ${String(index + 1).padStart(2, '0')}`}</strong>
        <button class="delete-btn" data-delete-question="${question.id}" data-delete-round="${round}" aria-label="Xóa ${round === 'tie' ? 'câu phân định' : `câu ${index + 1} vòng ${round}`}">Xóa</button>
      </div>
      <input class="question-input" data-field="text" value="${escapeHtml(question.text)}" aria-label="${round === 'tie' ? 'Nội dung câu phân định' : `Nội dung câu ${index + 1} vòng ${round}`}" />
      <div class="option-edit-grid">
        ${question.options.map((option, optionIndex) => `
          <label class="option-row">
            <input type="radio" name="correct-r${round}-${question.id}" value="${optionIndex}" ${question.correct === optionIndex ? 'checked' : ''} aria-label="Đặt đáp án ${String.fromCharCode(65 + optionIndex)} là đúng" />
            <input class="option-input" data-option="${optionIndex}" value="${escapeHtml(option)}" aria-label="Đáp án ${String.fromCharCode(65 + optionIndex)}" />
          </label>`).join('')}
      </div>
    </article>`).join('');
}

function renderSetup() {
  $('#round1RulesInput').value = data.round1Rules;
  $('#round2RulesInput').value = data.round2Rules;
  $('#questionsEditor').innerHTML = renderQuestionEditors(data.questions, 1);
  $('#tieBreakerQuestionEditor').innerHTML = data.tieBreakerQuestion
    ? renderQuestionEditors([data.tieBreakerQuestion], 'tie')
    : '<div class="empty-question-state"><strong>Chưa có câu hỏi phân định</strong><span>Nhấn “Thêm câu hỏi” để chuẩn bị cho trường hợp đồng hạng nhất.</span></div>';
  $('#tieBreakerAddButton').hidden = Boolean(data.tieBreakerQuestion);
  $('#round2QuestionsEditor').innerHTML = renderQuestionEditors(data.round2Questions, 2);
  $('#teamsEditor').innerHTML = data.teams.map(team => `
    <label class="team-row">
      <span class="team-id">Nhóm ${team.id}</span>
      <input class="team-input" data-team-id="${team.id}" value="${escapeHtml(team.name)}" aria-label="Tên nhóm ${team.id}" />
    </label>`).join('');
  updateHomeStats();
}

function openSetup() {
  renderSetup();
  showScreen('setupScreen');
}

function addQuestion(round) {
  if (round === 'tie') {
    data.tieBreakerQuestion = { id: `tie-${Date.now()}`, text: 'Câu hỏi phân định', options: ['Đáp án A', 'Đáp án B', 'Đáp án C', 'Đáp án D'], correct: 0 };
    saveData();
    renderSetup();
    requestAnimationFrame(() => $('#tieBreakerQuestionEditor .question-input')?.select());
    return;
  }
  const collection = round === 2 ? data.round2Questions : data.questions;
  const editorSelector = round === 2 ? '#round2QuestionsEditor' : '#questionsEditor';
  const id = `r${round}-${Date.now()}`;
  collection.push({ id, text: 'Câu hỏi mới', options: ['Đáp án A', 'Đáp án B', 'Đáp án C', 'Đáp án D'], correct: 0 });
  saveData();
  renderSetup();
  requestAnimationFrame(() => {
    const cards = $$(`${editorSelector} .question-editor-card`);
    cards.at(-1)?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    cards.at(-1)?.querySelector('.question-input')?.select();
  });
}

function updateQuestionFromInput(input) {
  const card = input.closest('[data-qid]');
  if (!card) return;
  const collection = card.dataset.round === '2'
    ? data.round2Questions
    : card.dataset.round === 'tie' ? [data.tieBreakerQuestion] : data.questions;
  const question = collection.find(item => String(item.id) === card.dataset.qid);
  if (!question) return;
  if (input.dataset.field === 'text') question.text = input.value;
  if (input.dataset.option !== undefined) question.options[Number(input.dataset.option)] = input.value;
  if (input.type === 'radio') question.correct = Number(input.value);
  saveData();
}

function startGame() {
  if (!data.questions.length) {
    showToast('Hãy thêm ít nhất 1 câu hỏi vòng 1');
    openSetup();
    return;
  }
  if (!data.tieBreakerQuestion) {
    showToast('Hãy thêm câu hỏi phân định trước khi chơi');
    openSetup();
    $('[data-tab="questions"]')?.click();
    return;
  }
  data.teams.forEach((team, index) => {
    if (!team.name.trim()) team.name = `Nhóm ${team.id}`;
    team.color = TEAM_COLORS[index % TEAM_COLORS.length];
  });
  saveData();
  game = { index: 0, scores: Object.fromEntries(data.teams.map(team => [team.id, 0])), attempt: 0, tried: [], selected: null, spinning: false, answered: false, tieBreaker: false, tieTeamIds: [], tieWinnerId: null };
  round2 = null;
  round1SummaryAcknowledged = false;
  showScreen('gameScreen');
  renderQuestion();
  renderScoreboard();
  drawWheel();
}

function currentRound1Question() {
  return game.tieBreaker ? data.tieBreakerQuestion : data.questions[game.index];
}

function renderQuestion() {
  const question = currentRound1Question();
  const total = data.questions.length;
  $('#progressText').textContent = game.tieBreaker ? 'Câu phân định' : `Câu ${game.index + 1} / ${total}`;
  $('#progressBar').style.width = game.tieBreaker ? '100%' : `${((game.index + 1) / total) * 100}%`;
  $('#questionNumber').textContent = game.tieBreaker ? 'CÂU HỎI PHÂN ĐỊNH' : `CÂU HỎI ${String(game.index + 1).padStart(2, '0')}`;
  $('#gameQuestion').textContent = question.text;
  updateAttemptBadge();
  showStage('spin');
  $('#spinPrompt').textContent = game.attempt === 0 ? 'Sẵn sàng chọn đội trả lời' : 'Quay để chuyển quyền trả lời';
  $('#spinButton').disabled = false;
  $('#spinButton').textContent = 'Quay vòng quay';
  drawWheel();
}

function updateAttemptBadge() {
  const reward = game.tieBreaker ? 1 : (REWARDS[game.attempt] ?? 0);
  const timeLimit = ROUND1_TIME_LIMITS[game.attempt] ?? 5;
  $('#attemptBadge').textContent = game.tieBreaker
    ? `PHÂN ĐỊNH · ${timeLimit} GIÂY`
    : `LƯỢT ${game.attempt + 1} · +${formatScore(reward)} ĐIỂM · ${timeLimit} GIÂY`;
}

function showStage(name) {
  if (name !== 'answer') stopAnswerTimer();
  $('#spinStage').classList.toggle('active', name === 'spin');
  $('#answerStage').classList.toggle('active', name === 'answer');
  $('#resultStage').classList.toggle('active', name === 'result');
}

function availableTeams() {
  return data.teams.filter(team => (!game.tieBreaker || game.tieTeamIds.includes(team.id)) && !game.tried.includes(team.id));
}

function drawWheelCanvas(canvas, items, rotation) {
  const context = canvas.getContext('2d');
  const count = Math.max(items.length, 1);
  const center = canvas.width / 2;
  const radius = center - 12;
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.save();
  context.translate(center, center);
  context.rotate(rotation);
  items.forEach((item, index) => {
    const startAngle = index * 2 * Math.PI / count - Math.PI / count;
    const endAngle = (index + 1) * 2 * Math.PI / count - Math.PI / count;
    context.beginPath();
    context.moveTo(0, 0);
    context.arc(0, 0, radius, startAngle, endAngle);
    context.closePath();
    context.fillStyle = item.color;
    context.fill();
    context.strokeStyle = '#07111f';
    context.lineWidth = count > 14 ? 2 : 6;
    context.stroke();
    context.save();
    context.rotate((startAngle + endAngle) / 2);
    context.textAlign = 'right';
    context.fillStyle = '#07111f';
    const fontSize = count > 22 ? 11 : count > 14 ? 13 : count > 9 ? 16 : 23;
    context.font = `700 ${fontSize}px Be Vietnam Pro`;
    context.fillText(shortName(item.name, count > 14 ? 10 : 16), radius - 30, 6);
    context.restore();
  });
  context.restore();
  context.beginPath();
  context.arc(center, center, radius, 0, Math.PI * 2);
  context.strokeStyle = '#f6f3e8';
  context.lineWidth = 8;
  context.stroke();
}

function drawWheel(rotation = wheelRotation) {
  const available = availableTeams();
  const teams = available.length ? available : (game.tieBreaker ? [] : data.teams);
  drawWheelCanvas($('#wheelCanvas'), teams, rotation);
  return teams;
}

function shortName(name, limit = 16) {
  return name.length > limit ? `${name.slice(0, limit - 1)}…` : name;
}

function spinWheel() {
  if (game.spinning) return;
  const teams = availableTeams();
  if (!teams.length) return;
  game.spinning = true;
  $('#spinButton').disabled = true;
  $('#spinButton').textContent = 'Đang quay...';
  const chosenIndex = Math.floor(Math.random() * teams.length);
  const count = teams.length;
  const target = -chosenIndex * 2 * Math.PI / count;
  const start = wheelRotation;
  const duration = 3200;
  const turns = 6 * 2 * Math.PI;
  let delta = turns + target - (start % (2 * Math.PI));
  while (delta < turns) delta += 2 * Math.PI;
  const begin = performance.now();
  function frame(now) {
    const progress = Math.min(1, (now - begin) / duration);
    const easing = 1 - Math.pow(1 - progress, 4);
    wheelRotation = start + delta * easing;
    drawWheel(wheelRotation);
    if (progress < 1) requestAnimationFrame(frame);
    else {
      wheelRotation = target;
      game.selected = teams[chosenIndex];
      game.spinning = false;
      setTimeout(showAnswers, 350);
    }
  }
  requestAnimationFrame(frame);
}

function showAnswers() {
  const question = currentRound1Question();
  const reward = game.tieBreaker ? 1 : REWARDS[game.attempt];
  $('#selectedTeamName').textContent = game.selected.name;
  $('#selectedTeamName').style.color = game.selected.color;
  $('#rewardText').textContent = game.tieBreaker ? 'Trả lời đúng: giành chiến thắng' : `Trả lời đúng: +${formatScore(reward)} điểm`;
  $('#answerGrid').innerHTML = question.options.map((option, index) => `<button class="answer-btn" data-answer="${index}"><span class="answer-letter">${String.fromCharCode(65 + index)}</span>${escapeHtml(option)}</button>`).join('');
  showStage('answer');
  startAnswerTimer();
}

function stopAnswerTimer() {
  clearInterval(answerTimerInterval);
  answerTimerInterval = null;
}

function updateAnswerTimer(seconds) {
  const timer = $('#answerTimer');
  $('#answerTimerValue').textContent = seconds;
  timer.classList.toggle('urgent', seconds <= 5);
  timer.setAttribute('aria-label', `Còn ${seconds} giây để trả lời`);
}

function startAnswerTimer() {
  stopAnswerTimer();
  const timeLimit = ROUND1_TIME_LIMITS[game.attempt] ?? 5;
  const deadline = Date.now() + timeLimit * 1000;
  updateAnswerTimer(timeLimit);
  answerTimerInterval = setInterval(() => {
    const seconds = Math.max(0, Math.ceil((deadline - Date.now()) / 1000));
    updateAnswerTimer(seconds);
    if (seconds === 0) handleAnswerTimeout();
  }, 200);
}

function handleAnswerTimeout() {
  if (!game || game.answered || !$('#answerStage').classList.contains('active')) return;
  game.answered = true;
  stopAnswerTimer();
  applyWrongAnswer(true);
}

function chooseAnswer(index) {
  if (game.answered) return;
  game.answered = true;
  stopAnswerTimer();
  const question = currentRound1Question();
  const team = game.selected;
  const correct = index === question.correct;
  if (correct) {
    const reward = game.tieBreaker ? 1 : REWARDS[game.attempt];
    game.scores[team.id] += reward;
    if (game.tieBreaker) game.tieWinnerId = team.id;
    renderScoreboard();
    showResult(true, game.tieBreaker ? `${team.name} trả lời đúng và giành chiến thắng Vòng 1!` : `${team.name} nhận +${formatScore(reward)} điểm.`, game.tieBreaker || game.index === data.questions.length - 1 ? 'Xem kết quả →' : 'Câu tiếp theo →');
  } else applyWrongAnswer(false);
}

function applyWrongAnswer(timedOut) {
  const question = currentRound1Question();
  const team = game.selected;
  game.scores[team.id] -= 1;
  game.tried.push(team.id);
  renderScoreboard();
  if (game.tieBreaker) {
    const remaining = availableTeams();
    const reason = timedOut ? `${team.name} đã hết thời gian và bị loại khỏi lượt phân định.` : `${team.name} trả lời sai và bị loại khỏi lượt phân định.`;
    if (remaining.length === 1) {
      game.tieWinnerId = remaining[0].id;
      showResult(false, `${reason} ${remaining[0].name} là đội còn lại và giành chiến thắng Vòng 1!`, 'Xem kết quả →', true);
    } else {
      showResult(false, `${reason} Vòng quay sẽ tiếp tục giữa ${remaining.length} đội còn lại.`, 'Quay đội tiếp theo →', false);
    }
    return;
  }
  const noMore = game.attempt >= 2 || availableTeams().length === 0;
  const reason = timedOut ? `${team.name} đã hết thời gian và bị trừ 1 điểm.` : `${team.name} bị trừ 1 điểm.`;
  const detail = noMore
    ? `${reason} Đáp án đúng là ${String.fromCharCode(65 + question.correct)}. ${question.options[question.correct]}`
    : `${reason} Quyền trả lời sẽ chuyển sang đội khác.`;
  showResult(false, detail, noMore ? (game.index === data.questions.length - 1 ? 'Xem kết quả →' : 'Câu tiếp theo →') : 'Quay đội tiếp theo →', noMore);
}

function showResult(correct, detail, buttonText, endQuestion = false) {
  const stage = $('#resultStage');
  stage.classList.toggle('wrong', !correct);
  $('#resultIcon').textContent = correct ? '✓' : '×';
  $('#resultKicker').textContent = correct ? 'CHÍNH XÁC' : 'CHƯA CHÍNH XÁC';
  $('#resultTitle').textContent = correct
    ? (game.tieBreaker ? 'Đã phân định đội chiến thắng!' : 'Đội đã ghi điểm!')
    : endQuestion ? (game.tieBreaker ? 'Đã có đội chiến thắng!' : 'Hết lượt trả lời') : 'Chuyển quyền trả lời';
  $('#resultDetail').textContent = detail;
  $('#resultAction').textContent = buttonText;
  $('#resultAction').dataset.next = correct || endQuestion ? 'question' : 'spin';
  showStage('result');
}

function resultAction() {
  if ($('#resultAction').dataset.next === 'spin') {
    game.attempt += 1;
    game.answered = false;
    game.selected = null;
    updateAttemptBadge();
    showStage('spin');
    $('#spinPrompt').textContent = 'Quay để chuyển quyền trả lời';
    $('#spinButton').disabled = false;
    $('#spinButton').textContent = 'Quay vòng quay';
    drawWheel();
  } else nextQuestion();
}

function nextQuestion() {
  if (game.tieBreaker) {
    showRound1Final();
    return;
  }
  if (game.index >= data.questions.length - 1) {
    const ranked = rankedTeams();
    const tiedLeaders = ranked.filter(team => team.score === ranked[0].score);
    if (tiedLeaders.length > 1) startTieBreaker(tiedLeaders);
    else showRound1Final();
    return;
  }
  game.index += 1;
  game.attempt = 0;
  game.tried = [];
  game.selected = null;
  game.answered = false;
  renderQuestion();
}

function startTieBreaker(teams) {
  game.tieBreaker = true;
  game.tieTeamIds = teams.map(team => team.id);
  game.tieWinnerId = null;
  game.attempt = 0;
  game.tried = [];
  game.selected = null;
  game.answered = false;
  showToast(`${teams.length} đội đồng hạng nhất · Bắt đầu câu phân định`);
  renderQuestion();
}

function formatScore(number) {
  return Number.isInteger(number) ? String(number) : String(number).replace('.', ',');
}

function rankedTeams() {
  return data.teams.map(team => ({ ...team, score: game.scores[team.id] })).sort((first, second) => second.score - first.score || first.id - second.id);
}

function renderScoreboard() {
  const ranked = rankedTeams();
  const best = ranked[0]?.score;
  $('#scoreboard').innerHTML = ranked.map((team, index) => `<div class="score-row ${team.score === best && best !== 0 ? 'leading' : ''}"><span class="score-rank">#${index + 1}</span><span class="score-name"><i style="background:${team.color};display:inline-block;width:8px;height:8px;border-radius:50%;margin-right:7px"></i>${escapeHtml(team.name)}</span><strong class="score-value">${formatScore(team.score)}</strong></div>`).join('');
}

function showRound1Final() {
  const ranked = rankedTeams();
  const top = ranked[0];
  const winners = ranked.filter(team => team.score === top.score);
  round1SummaryAcknowledged = false;
  $('#finalScreen .eyebrow').textContent = 'VÒNG 1 ĐÃ KẾT THÚC';
  $('#finalTitle').innerHTML = 'BẢNG ĐIỂM<br><span>CHUNG CUỘC</span>';
  $('#winnerCard').className = 'winner-card';
  $('#winnerCard').innerHTML = `<div class="crown">♛</div><p class="mini-label">${winners.length > 1 ? 'ĐỒNG HẠNG NHẤT' : 'CHÚC MỪNG NHÓM CHIẾN THẮNG'}</p><h3>${winners.map(team => escapeHtml(team.name)).join(' & ')}</h3><strong>${formatScore(top.score)} điểm</strong>`;
  $('#finalRanking').style.display = '';
  $('#finalRanking').innerHTML = ranked.map((team, index) => `<div class="final-rank-row"><span>#${String(index + 1).padStart(2, '0')}</span><strong>${escapeHtml(team.name)}</strong><strong>${formatScore(team.score)} điểm</strong></div>`).join('');
  const continueButton = $('#round1Continue');
  continueButton.dataset.action = 'round2-intro';
  continueButton.textContent = 'Tiếp tục →';
  showScreen('finalScreen');
}

function showRound2Intro() {
  if (round1SummaryAcknowledged) return;
  round1SummaryAcknowledged = true;
  const ranked = rankedTeams();
  const topScore = ranked[0].score;
  const winners = ranked.filter(team => team.score === topScore);
  $('#finalScreen .eyebrow').textContent = 'NHÓM CHIẾN THẮNG TIẾP TỤC THỬ THÁCH';
  $('#finalTitle').innerHTML = 'TIẾN VÀO<br><span>VÒNG 2</span>';
  $('#winnerCard').className = 'winner-card round2-intro-card';
  $('#winnerCard').innerHTML = `<div class="crown">②</div><p class="mini-label">VÒNG THI CÁ NHÂN</p><h3>${winners.map(team => escapeHtml(team.name)).join(' & ')}</h3><p>Điền tên các thành viên vào vòng quay mới. Ba người cuối cùng đáp ứng điều kiện sẽ trở thành người chiến thắng chung cuộc.</p>`;
  $('#finalRanking').style.display = 'none';
  const continueButton = $('#round1Continue');
  continueButton.dataset.action = 'open-round2-setup';
  continueButton.textContent = 'Điền tên người chơi →';
}

function uniqueNames(value) {
  const seen = new Set();
  return value.split(/\r?\n/).map(name => name.trim()).filter(name => {
    const key = name.toLocaleLowerCase('vi');
    if (!key || seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

function openRound2Setup() {
  $('#round2PlayersInput').value = data.round2Players.join('\n');
  $('#round2RulesDisplay').textContent = data.round2Rules;
  updateRound2PlayerCount();
  showScreen('round2SetupScreen');
}

function updateRound2PlayerCount() {
  const names = uniqueNames($('#round2PlayersInput')?.value || '');
  $('#round2PlayerCount').textContent = `${names.length} người`;
  return names;
}

function startRound2() {
  if (!data.round2Questions.length) {
    showToast('Hãy thêm ít nhất 1 câu hỏi vòng 2');
    openSetup();
    $(`[data-tab="questions"]`)?.click();
    return;
  }
  const names = updateRound2PlayerCount();
  if (names.length < 3) {
    showToast('Vòng 2 cần ít nhất 3 người chơi');
    $('#round2PlayersInput').focus();
    return;
  }
  data.round2Players = names;
  saveData();
  round2 = { questionIndex: 0, questionCycle: 0, attempt: 0, active: names.map((name, index) => ({ id: `player-${Date.now()}-${index}`, name, color: PLAYER_COLORS[index % PLAYER_COLORS.length] })), winners: [], selected: null, spinning: false, answered: false, finalists: null };
  showScreen('round2GameScreen');
  renderRound2Sidebar();
  const immediateWinners = getRound2Outcome();
  if (immediateWinners) {
    round2.finalists = immediateWinners;
    showRound2Final();
    return;
  }
  renderRound2Question();
}

function renderRound2Question() {
  const question = data.round2Questions[round2.questionIndex];
  const total = data.round2Questions.length;
  $('#round2ProgressText').textContent = `Câu ${round2.questionIndex + 1} / ${total}`;
  $('#round2ProgressBar').style.width = `${((round2.questionIndex + 1) / total) * 100}%`;
  $('#round2QuestionNumber').textContent = `CÂU HỎI ${String(round2.questionIndex + 1).padStart(2, '0')}`;
  $('#round2AttemptBadge').textContent = `LƯỢT TRẢ LỜI ${round2.attempt + 1} / 3`;
  $('#round2GameQuestion').textContent = question.text;
  $('#round2SpinPrompt').textContent = round2.attempt === 0 ? 'Sẵn sàng chọn người trả lời' : 'Quay để chọn người tiếp theo';
  $('#round2SpinButton').disabled = false;
  $('#round2SpinButton').textContent = 'Quay vòng quay';
  showRound2Stage('spin');
  drawRound2Wheel();
  renderRound2Sidebar();
}

function showRound2Stage(name) {
  $('#round2SpinStage').classList.toggle('active', name === 'spin');
  $('#round2AnswerStage').classList.toggle('active', name === 'answer');
  $('#round2ResultStage').classList.toggle('active', name === 'result');
}

function drawRound2Wheel(rotation = round2WheelRotation) {
  drawWheelCanvas($('#round2WheelCanvas'), round2.active, rotation);
}

function spinRound2Wheel() {
  if (round2.spinning || !round2.active.length) return;
  const players = round2.active;
  round2.spinning = true;
  $('#round2SpinButton').disabled = true;
  $('#round2SpinButton').textContent = 'Đang quay...';
  const chosenIndex = Math.floor(Math.random() * players.length);
  const count = players.length;
  const target = -chosenIndex * 2 * Math.PI / count;
  const start = round2WheelRotation;
  const duration = 3200;
  const turns = 6 * 2 * Math.PI;
  let delta = turns + target - (start % (2 * Math.PI));
  while (delta < turns) delta += 2 * Math.PI;
  const begin = performance.now();
  function frame(now) {
    const progress = Math.min(1, (now - begin) / duration);
    const easing = 1 - Math.pow(1 - progress, 4);
    round2WheelRotation = start + delta * easing;
    drawRound2Wheel(round2WheelRotation);
    if (progress < 1) requestAnimationFrame(frame);
    else {
      round2WheelRotation = target;
      round2.selected = players[chosenIndex];
      round2.spinning = false;
      setTimeout(showRound2Answers, 350);
    }
  }
  requestAnimationFrame(frame);
}

function showRound2Answers() {
  const question = data.round2Questions[round2.questionIndex];
  $('#selectedPlayerName').textContent = round2.selected.name;
  $('#selectedPlayerName').style.color = round2.selected.color;
  $('#round2AnswerGrid').innerHTML = question.options.map((option, index) => `<button class="answer-btn" data-round2-answer="${index}"><span class="answer-letter">${String.fromCharCode(65 + index)}</span>${escapeHtml(option)}</button>`).join('');
  showRound2Stage('answer');
}

function chooseRound2Answer(index) {
  if (round2.answered) return;
  round2.answered = true;
  const question = data.round2Questions[round2.questionIndex];
  const player = round2.selected;
  const correct = index === question.correct;
  round2.active = round2.active.filter(item => item.id !== player.id);
  if (correct) round2.winners.push(player);
  round2.attempt += 1;
  renderRound2Sidebar();
  const outcome = getRound2Outcome();
  if (outcome) round2.finalists = outcome;
  const questionFinished = correct || round2.attempt >= 3;
  let detail;
  if (correct) detail = `${player.name} đã được thêm vào Danh sách chiến thắng.`;
  else if (outcome) detail = `${player.name} bị loại. Đã xác định được 3 ứng viên cuối cùng.`;
  else if (questionFinished) detail = `${player.name} bị loại. Đáp án đúng là ${String.fromCharCode(65 + question.correct)}. ${question.options[question.correct]}`;
  else detail = `${player.name} bị loại khỏi vòng quay. Câu hỏi này còn ${3 - round2.attempt} lượt trả lời.`;
  const next = outcome ? 'finish' : questionFinished ? 'next-question' : 'spin';
  const buttonText = outcome ? 'Xem kết quả →' : questionFinished ? 'Câu tiếp theo →' : 'Quay người tiếp theo →';
  showRound2Result(correct, detail, buttonText, next);
}

function showRound2Result(correct, detail, buttonText, next) {
  const stage = $('#round2ResultStage');
  stage.classList.toggle('wrong', !correct);
  $('#round2ResultIcon').textContent = correct ? '✓' : '×';
  $('#round2ResultKicker').textContent = correct ? 'CHÍNH XÁC' : 'CHƯA CHÍNH XÁC';
  $('#round2ResultTitle').textContent = correct ? 'Đã vào danh sách chiến thắng!' : next === 'finish' ? 'Đã đủ điều kiện kết thúc!' : 'Người chơi đã bị loại';
  $('#round2ResultDetail').textContent = detail;
  $('#round2ResultAction').textContent = buttonText;
  $('#round2ResultAction').dataset.next = next;
  showRound2Stage('result');
}

function round2ResultAction() {
  const next = $('#round2ResultAction').dataset.next;
  if (next === 'finish') {
    showRound2Final();
    return;
  }
  if (next === 'next-question') {
    round2.questionIndex = (round2.questionIndex + 1) % data.round2Questions.length;
    round2.questionCycle += round2.questionIndex === 0 ? 1 : 0;
    round2.attempt = 0;
  }
  round2.selected = null;
  round2.answered = false;
  renderRound2Question();
}

function getRound2Outcome() {
  if (round2.winners.length >= 3) return round2.winners.slice(0, 3);
  if (round2.winners.length + round2.active.length <= 3) return [...round2.winners, ...round2.active].slice(0, 3);
  return null;
}

function renderRound2Sidebar() {
  $('#winnerCounter').textContent = `${round2.winners.length} / 3`;
  $('#round2CandidateCount').textContent = `${round2.winners.length + round2.active.length} ứng viên`;
  $('#remainingCount').textContent = round2.active.length;
  $('#round2WinnerList').innerHTML = [0, 1, 2].map(index => {
    const player = round2.winners[index];
    return `<div class="winner-slot ${player ? 'filled' : ''}"><span class="winner-slot-number">${index + 1}</span><strong>${player ? escapeHtml(player.name) : 'Đang chờ người thắng'}</strong></div>`;
  }).join('');
  $('#remainingPlayers').innerHTML = round2.active.map(player => `<span class="player-chip">${escapeHtml(player.name)}</span>`).join('');
}

function showRound2Final() {
  const finalists = round2.finalists || getRound2Outcome() || round2.winners.slice(0, 3);
  round2.finalists = finalists;
  $('#round2FinalWinners').innerHTML = finalists.map((player, index) => `<article class="round2-winner-card"><span>♛</span><strong>${escapeHtml(player.name)}</strong><small>Người chiến thắng ${index + 1}</small></article>`).join('');
  showScreen('round2FinalScreen');
}

document.addEventListener('click', event => {
  const tab = event.target.closest('[data-tab]');
  if (tab) {
    $$('.setup-tab').forEach(item => item.classList.toggle('active', item === tab));
    $$('.setup-panel').forEach(panel => panel.classList.toggle('active', panel.dataset.panel === tab.dataset.tab));
    return;
  }
  const deleteButton = event.target.closest('[data-delete-question]');
  if (deleteButton) {
    if (deleteButton.dataset.deleteRound === 'tie') {
      data.tieBreakerQuestion = null;
      saveData();
      renderSetup();
      return;
    }
    const collectionName = deleteButton.dataset.deleteRound === '2' ? 'round2Questions' : 'questions';
    data[collectionName] = data[collectionName].filter(question => String(question.id) !== deleteButton.dataset.deleteQuestion);
    saveData();
    renderSetup();
    return;
  }
  const answer = event.target.closest('[data-answer]');
  if (answer) {
    chooseAnswer(Number(answer.dataset.answer));
    return;
  }
  const round2Answer = event.target.closest('[data-round2-answer]');
  if (round2Answer) {
    chooseRound2Answer(Number(round2Answer.dataset.round2Answer));
    return;
  }
  const action = event.target.closest('[data-action]')?.dataset.action;
  if (!action) return;
  const actions = {
    'start-game': startGame,
    'open-setup': openSetup,
    'go-home': () => showScreen('homeScreen'),
    'add-question-round1': () => addQuestion(1),
    'add-tie-breaker': () => addQuestion('tie'),
    'add-question-round2': () => addQuestion(2),
    'spin': spinWheel,
    'result-action': resultAction,
    'show-rules': () => {
      $('#rulesKicker').textContent = 'THE FINAL THREE';
      $('#rulesTitle').textContent = 'Luật chơi';
      $('#rulesDisplay').textContent = data.round1Rules;
      $('#rulesDialog').showModal();
    },
    'show-round2-rules': () => {
      $('#rulesKicker').textContent = 'VÒNG 2 · CÁ NHÂN';
      $('#rulesTitle').textContent = 'Luật chơi Vòng 2';
      $('#rulesDisplay').textContent = data.round2Rules;
      $('#rulesDialog').showModal();
    },
    'close-rules': () => $('#rulesDialog').close(),
    'confirm-exit': () => $('#exitDialog').showModal(),
    'cancel-exit': () => $('#exitDialog').close(),
    'exit-game': () => { $('#exitDialog').close(); stopAnswerTimer(); game = null; round2 = null; showScreen('homeScreen'); },
    'restart': startGame,
    'round2-intro': showRound2Intro,
    'open-round2-setup': openRound2Setup,
    'start-round2': startRound2,
    'clear-round2-players': () => { $('#round2PlayersInput').value = ''; data.round2Players = []; saveData(); updateRound2PlayerCount(); },
    'round2-spin': spinRound2Wheel,
    'round2-result-action': round2ResultAction
  };
  actions[action]?.();
});

$('#finalScreen').addEventListener('click', event => {
  if (!round1SummaryAcknowledged && !event.target.closest('button')) showRound2Intro();
});

document.addEventListener('input', event => {
  if (event.target.id === 'round1RulesInput') {
    data.round1Rules = event.target.value;
    saveData();
  }
  if (event.target.id === 'round2RulesInput') {
    data.round2Rules = event.target.value;
    saveData();
  }
  if (event.target.matches('.team-input')) {
    const team = data.teams.find(item => String(item.id) === event.target.dataset.teamId);
    if (team) {
      team.name = event.target.value;
      saveData();
    }
  }
  if (event.target.id === 'round2PlayersInput') {
    data.round2Players = updateRound2PlayerCount();
    saveData();
  }
  if (event.target.closest('[data-qid]')) updateQuestionFromInput(event.target);
});

document.addEventListener('change', event => {
  if (event.target.type === 'radio' && event.target.closest('[data-qid]')) updateQuestionFromInput(event.target);
});

window.addEventListener('resize', () => {
  if (game && $('#gameScreen').classList.contains('active')) drawWheel();
  if (round2 && $('#round2GameScreen').classList.contains('active')) drawRound2Wheel();
});

function registerWebMCP() {
  const context = document.modelContext;
  if (!context?.registerTool) return;
  const register = tool => {
    try { Promise.resolve(context.registerTool(tool)).catch(() => {}); } catch (error) {}
  };
  register({ name: 'start_quiz_game', title: 'Bắt đầu trò chơi', description: 'Bắt đầu vòng 1 từ câu hỏi đầu tiên với điểm số bằng 0.', inputSchema: { type: 'object', properties: {}, additionalProperties: false }, annotations: { readOnlyHint: false, untrustedContentHint: false }, execute() { startGame(); return { started: true, round: 1, question_count: data.questions.length, team_count: data.teams.length }; } });
  register({ name: 'read_quiz_setup', title: 'Xem cấu hình trò chơi', description: 'Đọc số câu hỏi ở hai vòng và danh sách đội hiện đang được cấu hình.', inputSchema: { type: 'object', properties: {}, additionalProperties: false }, annotations: { readOnlyHint: true, untrustedContentHint: false }, execute() { return { round_1_question_count: data.questions.length, has_tie_breaker_question: Boolean(data.tieBreakerQuestion), round_2_question_count: data.round2Questions.length, teams: data.teams.map(team => ({ id: team.id, name: team.name })) }; } });
}

updateHomeStats();
registerWebMCP();
