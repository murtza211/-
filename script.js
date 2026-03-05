// ==========================================
// منصة أبواب التعليمية - نظام تعليمي متطور
// تم برمجته بواسطة مطور مرتضى ايمن
// ==========================================

// ==== قاعدة بيانات المواد والأساتذة ====
const educationDatabase = {
    subjects: [
        {
            id: 1,
            name: "اللغة العربية",
            icon: "📖",
            teachers: [
                { id: 1, name: "أ. رفل زبيدي", topics: ["الميزان الصرفي", "النحو", "الصرف", "البلاغة", "الأدب"] },
                { id: 2, name: "أ. مازن الهلالي", topics: ["القراءة", "الكتابة", "التعبير", "النصوص الأدبية"] }
            ]
        },
        {
            id: 2,
            name: "الرياضيات",
            icon: "📐",
            teachers: [
                { id: 3, name: "أ. عباس دراجي", topics: ["الجبر", "الهندسة", "المثلثات", "المعادلات"] },
                { id: 4, name: "أ. أحمد عباس", topics: ["التفاضل والتكامل", "المتسلسلات", "الإحصاء"] }
            ]
        },
        {
            id: 3,
            name: "الفيزياء",
            icon: "⚛️",
            teachers: [
                { id: 5, name: "أ. علي سوداني", topics: ["الحركة", "الطاقة", "الموجات", "الكهرباء"] },
                { id: 6, name: "أ. حسن محمد", topics: ["المغناطيسية", "الضوء", "الديناميكا الحرارية"] }
            ]
        },
        {
            id: 4,
            name: "الكيمياء",
            icon: "🧪",
            teachers: [
                { id: 7, name: "أ. فاطمة علي", topics: ["المركبات العضوية", "التفاعلات الكيميائية", "الجدول الدوري"] },
                { id: 8, name: "أ. محمود حسن", topics: ["الكيمياء التحليلية", "الحموض والقواعد"] }
            ]
        }
    ]
};

// ==== متغيرات عامة ====
let currentStudent = null;
let currentTheme = localStorage.getItem('theme') || 'light';
let notesArray = [];

// ==== Typewriter Effect ====
async function typewriterEffect(text, speed = 100) {
    const typewriterElement = document.getElementById('typewriter');
    typewriterElement.textContent = '';
    
    for (let i = 0; i < text.length; i++) {
        typewriterElement.textContent += text[i];
        await new Promise(resolve => setTimeout(resolve, speed));
    }
    
    return true;
}

// ==== إظهار قسم إدخال الاسم بعد انتهاء الكتابة ====
async function startIntro() {
    const text = "ما هو اسمك؟";
    await typewriterEffect(text, 120);
    
    // إظهار حقل إدخال الاسم
    setTimeout(() => {
        document.getElementById('nameInputSection').classList.remove('hidden');
        document.getElementById('studentName').focus();
    }, 500);
}

// ==== حفظ الاسم والانتقال لاختيار الوضع ====
function saveName() {
    const studentName = document.getElementById('studentName').value.trim();
    
    if (!studentName) {
        alert('⚠️ الرجاء إدخال اسمك');
        return;
    }
    
    currentStudent = studentName;
    localStorage.setItem('studentName', studentName);
    
    // إخفاء حقل الاسم وإظهار خيارات الوضع
    document.getElementById('nameInputSection').classList.add('hidden');
    document.getElementById('modeToggleSection').classList.remove('hidden');
}

// ==== تعيين الوضع (فاتح/داكن) ====
function setMode(mode) {
    currentTheme = mode;
    localStorage.setItem('theme', mode);
    applyTheme(mode);
    
    // الانتقال إلى لوحة التحكم
    setTimeout(() => {
        showDashboard();
    }, 300);
}

// ==== تطبيق الوضع على الموقع ====
function applyTheme(theme) {
    const body = document.body;
    
    if (theme === 'dark') {
        body.classList.add('dark-mode');
        body.classList.remove('light-mode');
        document.getElementById('themeIcon').textContent = '☀️';
    } else {
        body.classList.add('light-mode');
        body.classList.remove('dark-mode');
        document.getElementById('themeIcon').textContent = '🌙';
    }
}

// ==== تبديل الوضع ====
function toggleTheme() {
    currentTheme = currentTheme === 'light' ? 'dark' : 'light';
    applyTheme(currentTheme);
    localStorage.setItem('theme', currentTheme);
}

// ==== عرض لوحة التحكم ====
function showDashboard() {
    const introScreen = document.getElementById('introScreen');
    const dashboard = document.getElementById('dashboard');
    
    introScreen.classList.add('hidden');
    setTimeout(() => {
        introScreen.classList.remove('active');
    }, 300);
    
    dashboard.classList.remove('hidden');
    setTimeout(() => {
        dashboard.classList.add('active');
    }, 100);
    
    // تحديث رسالة الترحيب
    document.getElementById('welcomeMsg').textContent = `أهلاً ${currentStudent}`;
    document.getElementById('welcomeTitle').textContent = `مرحباً ${currentStudent}`;
    
    // تهيئة البيانات
    initializeSubjects();
    loadNotesFromStorage();
}

// ==== تهيئة قائمة المواد ====
function initializeSubjects() {
    const subjectSelect = document.getElementById('subjectSelect');
    
    educationDatabase.subjects.forEach(subject => {
        const option = document.createElement('option');
        option.value = subject.id;
        option.textContent = `${subject.icon} ${subject.name}`;
        subjectSelect.appendChild(option);
    });
}

// ==== تحديث قائمة الأساتذة عند اختيار مادة ====
function updateTeachers() {
    const subjectId = document.getElementById('subjectSelect').value;
    const teacherSelect = document.getElementById('teacherSelect');
    
    // مسح الخيارات القديمة
    teacherSelect.innerHTML = '<option value="">-- اختر أستاذ --</option>';
    
    if (!subjectId) return;
    
    const subject = educationDatabase.subjects.find(s => s.id == subjectId);
    
    if (subject) {
        subject.teachers.forEach(teacher => {
            const option = document.createElement('option');
            option.value = teacher.id;
            option.textContent = teacher.name;
            teacherSelect.appendChild(option);
        });
    }
}

// ==== البحث الذكي السياقي ====
function performSearch() {
    const searchTerm = document.getElementById('searchInput').value.trim();
    const selectedTeacherId = document.getElementById('teacherSelect').value;
    const selectedSubjectId = document.getElementById('subjectSelect').value;
    const searchResults = document.getElementById('searchResults');
    
    if (!searchTerm) {
        searchResults.classList.add('hidden');
        return;
    }
    
    if (!selectedTeacherId || !selectedSubjectId) {
        showNotification('⚠️ يرجى اختيار المادة والأستاذ أولاً', 'warning');
        return;
    }
    
    // البحث عن المعلم والمادة
    let teacherName = '';
    let subjectName = '';
    
    educationDatabase.subjects.forEach(subject => {
        if (subject.id == selectedSubjectId) {
            subjectName = subject.name;
            const teacher = subject.teachers.find(t => t.id == selectedTeacherId);
            if (teacher) {
                teacherName = teacher.name;
            }
        }
    });
    
    // عمل بحث حقيقي على اليوتيوب مباشرة
    displayRealSearchResults(searchTerm, teacherName, subjectName);
}

// ==== عرض نتائج البحث الحقيقية على اليوتيوب ====
function displayRealSearchResults(searchTerm, teacherName, subjectName) {
    const searchResults = document.getElementById('searchResults');
    
    // بناء استعلامات البحث - مرتبطة بالأستاذ فقط
    const queries = [
        // بحث 1: الموضوع + الأستاذ + المادة (الأدق)
        {
            title: `البحث الدقيق: "${searchTerm}" مع ${teacherName}`,
            query: `${searchTerm} ${teacherName} ${subjectName}`
        },
        // بحث 2: الموضوع + الأستاذ (بديل)
        {
            title: `البحث مع ${teacherName}`,
            query: `${searchTerm} ${teacherName}`
        }
    ];
    
    let html = `
        <div style="padding: 15px; background: #eff6ff; border-radius: 10px; border-right: 4px solid var(--primary-color); margin-bottom: 15px;">
            <p style="color: var(--primary-color); font-weight: 600; margin-bottom: 5px;">
                🎬 البحث عن: <strong>"${searchTerm}"</strong>
            </p>
            <p style="color: #4b5563; font-size: 13px;">
                مع الأستاذ: <strong>${teacherName}</strong> في مادة <strong>${subjectName}</strong>
            </p>
        </div>
    `;
    
    queries.forEach((item, index) => {
        const youtubeQuery = encodeURIComponent(item.query);
        const youtubeLink = `https://www.youtube.com/results?search_query=${youtubeQuery}`;
        
        html += `
            <div style="margin-bottom: 12px; padding: 12px; background: white; border-radius: 8px; border-right: 3px solid #dc2626;">
                <p style="font-weight: 600; color: #1f2937; margin-bottom: 8px; font-size: 14px;">
                    ${item.title}
                </p>
                <button onclick="window.open('${youtubeLink}', '_blank')" 
                        style="width: 100%; padding: 10px; background: linear-gradient(135deg, #ff0000 0%, #cc0000 100%); color: white; border: none; border-radius: 6px; cursor: pointer; font-weight: 600; font-size: 13px; transition: all 0.3s ease;"
                        onmouseover="this.style.transform='scale(1.02)'"
                        onmouseout="this.style.transform='scale(1)'">
                    ▶️ ابحث الآن على اليوتيوب
                </button>
            </div>
        `;
    });
    
    searchResults.innerHTML = html;
    searchResults.classList.remove('hidden');
    
    // إظهار إشعار
    showNotification(`🎬 بحث عن "${searchTerm}" مع ${teacherName}`, 'success');
}

// ==== دالة قديمة - محتفظ بها للمرجعية ====
function displaySearchResults(results, teacherName, searchTerm, subjectName) {
    // تم الاستعاضة عنها بـ displayRealSearchResults
}

// ==== عرض رسالة عدم توفر الموضوع (محتفظ بها للمرجعية) ====
function displayNoResultsMessage(searchTerm, teacherName) {
    // تم الاستعاضة عنها بـ displayRealSearchResults
}

// ==== تحليل الملاحظة الذكي ====
function analyzeNote() {
    const textarea = document.getElementById('smartNotes');
    const text = textarea.value.toLowerCase();
    
    // كلمات مفتاحية للحالات المختلفة
    const importantKeywords = ['مهم', 'امتحان', 'حاسم', 'من الضروري', 'الأساسي'];
    const reviewKeywords = ['مراجعة', 'تذكر', 'ركز', 'ركز على'];
    const completedKeywords = ['تم الحل', 'انتهى', 'مكتمل', 'خلص', 'حله'];
    
    textarea.classList.remove('important-note', 'review-note', 'completed-note');
    
    if (importantKeywords.some(keyword => text.includes(keyword))) {
        textarea.classList.add('important-note');
    } else if (reviewKeywords.some(keyword => text.includes(keyword))) {
        textarea.classList.add('review-note');
    } else if (completedKeywords.some(keyword => text.includes(keyword))) {
        textarea.classList.add('completed-note');
    }
}

// ==== إضافة ملاحظة ====
function addNote() {
    const textarea = document.getElementById('smartNotes');
    const text = textarea.value.trim();
    
    if (!text) {
        showNotification('⚠️ الرجاء كتابة ملاحظة أولاً', 'warning');
        return;
    }
    
    // تحديد نوع الملاحظة
    let noteType = 'normal';
    const textLower = text.toLowerCase();
    
    if (['مهم', 'امتحان', 'حاسم'].some(w => textLower.includes(w))) {
        noteType = 'important';
    } else if (['مراجعة', 'تذكر'].some(w => textLower.includes(w))) {
        noteType = 'review';
    } else if (['تم الحل', 'انتهى'].some(w => textLower.includes(w))) {
        noteType = 'completed';
    }
    
    const note = {
        id: Date.now(),
        text: text,
        type: noteType,
        date: new Date().toLocaleString('ar-SA')
    };
    
    notesArray.push(note);
    saveNotesToStorage();
    displayNotes();
    
    textarea.value = '';
    textarea.classList.remove('important-note', 'review-note', 'completed-note');
    
    showNotification('✅ تم إضافة الملاحظة بنجاح', 'success');
    updateStatistics();
}

// ==== عرض قائمة الملاحظات ====
function displayNotes() {
    const notesList = document.getElementById('notesList');
    
    if (notesArray.length === 0) {
        notesList.innerHTML = '<p style="text-align: center; color: #999; padding: 20px;">📭 لا توجد ملاحظات حتى الآن</p>';
        return;
    }
    
    notesList.innerHTML = '';
    
    notesArray.forEach(note => {
        const noteElement = document.createElement('div');
        noteElement.className = `note-item ${note.type}`;
        noteElement.innerHTML = `
            <p class="note-text">${note.text}</p>
            <small style="color: #999; font-size: 12px;">📅 ${note.date}</small>
            <button onclick="deleteNote(${note.id})" style="display: block; margin-top: 8px; padding: 5px 10px; background: #ef4444; color: white; border: none; border-radius: 5px; cursor: pointer; font-size: 12px;">🗑️ حذف</button>
        `;
        notesList.appendChild(noteElement);
    });
}

// ==== حذف ملاحظة ====
function deleteNote(id) {
    notesArray = notesArray.filter(note => note.id !== id);
    saveNotesToStorage();
    displayNotes();
    updateStatistics();
    showNotification('✅ تم حذف الملاحظة', 'success');
}

// ==== مسح حقل الإدخال ====
function clearNoteInput() {
    const textarea = document.getElementById('smartNotes');
    if (textarea.value.trim()) {
        if (confirm('هل تريد حذف محتوى الحقل؟')) {
            textarea.value = '';
            textarea.classList.remove('important-note', 'review-note', 'completed-note');
        }
    }
}

// ==== حفظ الملاحظات في التخزين المحلي ====
function saveNotesToStorage() {
    localStorage.setItem('notes', JSON.stringify(notesArray));
}

// ==== تحميل الملاحظات من التخزين المحلي ====
function loadNotesFromStorage() {
    const stored = localStorage.getItem('notes');
    if (stored) {
        notesArray = JSON.parse(stored);
        displayNotes();
        updateStatistics();
    }
}

// ==== تحديث الإحصائيات ====
function updateStatistics() {
    const totalNotes = notesArray.length;
    const importantNotes = notesArray.filter(n => n.type === 'important').length;
    const reviewedNotes = notesArray.filter(n => n.type === 'review').length;
    
    document.getElementById('totalNotes').textContent = totalNotes;
    document.getElementById('importantNotes').textContent = importantNotes;
    document.getElementById('reviewedNotes').textContent = reviewedNotes;
    document.getElementById('studyHours').textContent = Math.floor(totalNotes / 2);
}

// ==== عرض الإشعارات ====
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 15px 20px;
        border-radius: 10px;
        font-weight: 600;
        z-index: 3000;
        animation: slideIn 0.3s ease;
        max-width: 300px;
    `;
    
    const colors = {
        'success': { bg: '#10b981', color: 'white' },
        'warning': { bg: '#f59e0b', color: 'white' },
        'info': { bg: '#3b82f6', color: 'white' },
        'error': { bg: '#ef4444', color: 'white' }
    };
    
    const style = colors[type] || colors['info'];
    notification.style.backgroundColor = style.bg;
    notification.style.color = style.color;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease forwards';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// ==== معالجة مفتاح Enter في حقل الاسم ====
document.addEventListener('DOMContentLoaded', function() {
    // تطبيق الوضع المحفوظ
    applyTheme(currentTheme);
    
    // بدء الشاشة الأولية إذا لم يتم تسجيل الطالب بعد
    const savedName = localStorage.getItem('studentName');
    if (!savedName) {
        startIntro();
    } else {
        currentStudent = savedName;
        showDashboard();
    }
    
    // معالج مفتاح Enter في حقل إدخال الاسم
    const studentNameInput = document.getElementById('studentName');
    if (studentNameInput) {
        studentNameInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                saveName();
            }
        });
    }
    
    // معالج مفتاح Enter في حقل البحث
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                performSearch();
            }
        });
    }
});

// ==== أنماط الحركة CSS ====
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// ==== سجل وقت بدء المذاكرة ====
const studyStartTime = new Date();
console.log('%c🎓 مرحباً في منصة أبواب التعليمية', 'font-size: 18px; color: #2563eb; font-weight: bold;');
console.log('%cمن تطوير المبرمج مرتضى ايمن - نظام تعليمي متقدم للطالب العراقي', 'font-size: 14px; color: #0f766e;');
