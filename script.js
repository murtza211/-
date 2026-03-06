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
            stages: ["elementary", "middle", "high"],
            teachers: [
                { id: 1, name: "أ. رفل زبيدي", topics: ["الميزان الصرفي", "النحو", "الصرف", "البلاغة", "الأدب"] },
                { id: 2, name: "أ. مازن الهلالي", topics: ["القراءة", "الكتابة", "التعبير", "النصوص الأدبية"] }
            ]
        },
        {
            id: 2,
            name: "الرياضيات",
            icon: "📐",
            stages: ["elementary", "middle", "high"],
            teachers: [
                { id: 3, name: "أ. عباس دراجي", topics: ["الجبر", "الهندسة", "المثلثات", "المعادلات"] },
                { id: 4, name: "أ. أحمد عباس", topics: ["التفاضل والتكامل", "المتسلسلات", "الإحصاء"] }
            ]
        },
        {
            id: 3,
            name: "العلوم",
            icon: "🔬",
            stages: ["elementary"],
            teachers: [
                { id: 9, name: "أ. سارة الكعبي", topics: ["مقدمة في العلوم", "تجارب بسيطة"] }
            ]
        },
        {
            id: 4,
            name: "الفيزياء",
            icon: "⚛️",
            stages: ["middle", "high"],
            teachers: [
                { id: 5, name: "أ. علي سوداني", topics: ["الحركة", "الطاقة", "الموجات", "الكهرباء"] },
                { id: 6, name: "أ. حسن محمد", topics: ["المغناطيسية", "الضوء", "الديناميكا الحرارية"] }
            ]
        },
        {
            id: 5,
            name: "الكيمياء",
            icon: "🧪",
            stages: ["middle", "high"],
            teachers: [
                { id: 7, name: "أ. فاطمة علي", topics: ["المركبات العضوية", "التفاعلات الكيميائية", "الجدول الدوري"] },
                { id: 8, name: "أ. محمود حسن", topics: ["الكيمياء التحليلية", "الحموض والقواعد"] },
                { id: 10, name: "أ. نسرين بياتي", topics: ["الكيمياء العامة", "الكيمياء العضوية"] }
            ]
        },
        {
            id: 6,
            name: "الأحياء",
            icon: "🧬",
            stages: ["middle", "high"],
            teachers: [
                { id: 11, name: "أ. أحمد جاف", topics: ["علم الأحياء", "التشريح"] }
            ]
        }
    ]
};

// ==== مصفوفات النصائح والمحفزات والحكم ====
const studyTips = [
    "خصص وقتاً يومياً للمراجعة لتثبيت المعلومات في الذاكرة",
    "استخدم تقنية بومودورو: 25 دقيقة دراسة مع 5 دقائق راحة",
    "شرب الماء بانتظام يحسن التركيز والذاكرة",
    "نام 8 ساعات يومياً لأن النوم يعزز التعلم",
    "اكتب ملاحظاتك بخط يدك لتسهيل الحفظ",
    "راجع المواد يومياً بدلاً من التجميع في نهاية الأسبوع",
    "استخدم خرائط ذهنية لربط المفاهيم المعقدة",
    "مارس الرياضة يومياً لزيادة تدفق الدم إلى الدماغ",
    "تناول وجبات متوازنة غنية بالبروتين والخضروات",
    "حدد أهدافاً يومية صغيرة قابلة للتحقيق",
    "استمع إلى الموسيقى الكلاسيكية أثناء الدراسة للتركيز",
    "رتب مكان دراستك بشكل منظم ومريح",
    "استخدم تطبيقات التسجيل الصوتي للمراجعة",
    "مارس تمارين التنفس العميق لتقليل التوتر",
    "قسم المواد الكبيرة إلى أجزاء صغيرة",
    "استخدم ألوان مختلفة لتمييز المفاهيم المهمة",
    "راجع أخطاءك السابقة لتجنب تكرارها",
    "شارك في مجموعات دراسية للمناقشة والتعلم",
    "خذ قسطاً من الراحة كل ساعة دراسة",
    "احتفظ بجدول زمني مرن قابل للتعديل",
    "استخدم طريقة فيشر لقراءة الكتب بسرعة",
    "مارس الكتابة التلقائية لتنظيم الأفكار",
    "ركز على فهم المفاهيم لا الحفظ عن ظهر قلب",
    "استخدم تطبيقات الذاكرة المرئية",
    "مارس الرياضة الذهنية يومياً",
    "تناول الطعام الصحي قبل الدراسة",
    "استخدم تقنية الذاكرة الارتباطية",
    "راجع المواد في أوقات مختلفة من اليوم",
    "استخدم طريقة التلخيص للمواد الطويلة",
    "مارس التأمل لتحسين التركيز",
    "حدد وقتاً محدداً لكل مادة",
    "استخدم أدوات التعلم الإلكترونية",
    "شارك معاصيرك في الدراسة",
    "رتب أولوياتك الدراسية",
    "استخدم طريقة التعلم النشط",
    "مارس الرسم البياني للمفاهيم",
    "تناول قهوة معتدلة لليقظة",
    "استخدم تطبيقات إدارة الوقت",
    "راجع الدروس قبل النوم",
    "استخدم طريقة التعلم بالتكرار",
    "مارس الرياضة اليومية",
    "رتب مكتبة دراسية منظمة",
    "استخدم تقنية الذاكرة الرقمية",
    "شارك في مسابقات تعليمية",
    "ركز على نقاط القوة والضعف",
    "استخدم طريقة التعلم الجماعي",
    "مارس الكتابة الإبداعية",
    "تناول الفيتامينات المناسبة",
    "استخدم تطبيقات التذكير",
    "راجع الأهداف الأسبوعية",
    "استخدم طريقة التعلم البصري",
    "مارس التمارين الرياضية الذهنية",
    "رتب جدولاً زمنياً يومياً",
    "استخدم تقنية الذاكرة التصويرية",
    "شارك في ورش عمل تعليمية",
    "ركز على الجودة لا الكمية",
    "استخدم طريقة التعلم التفاعلي",
    "مارس الرسم للمفاهيم العلمية",
    "تناول الطعام في أوقات منتظمة",
    "استخدم تطبيقات التعلم الذكي",
    "راجع التقدم الشهري",
    "استخدم طريقة التعلم السمعي",
    "مارس التأمل اليومي",
    "رتب أهدافاً طويلة الأمد",
    "استخدم تقنية الذاكرة الإبداعية",
    "شارك في مؤتمرات تعليمية",
    "ركز على التحسين المستمر",
    "استخدم طريقة التعلم العملي",
    "مارس الكتابة اليومية",
    "تناول المكسرات للدماغ",
    "استخدم تطبيقات التخطيط",
    "راجع الأهداف السنوية",
    "استخدم طريقة التعلم المتعددة",
    "مارس الرياضة الجماعية",
    "رتب نظاماً للمراجعة",
    "استخدم تقنية الذاكرة الرابطة",
    "شارك في أنشطة تعليمية",
    "ركز على التوازن بين الحياة والدراسة",
    "استخدم طريقة التعلم الذاتي",
    "مارس الرسم الإبداعي",
    "تناول الخضروات الورقية",
    "استخدم تطبيقات الإنتاجية",
    "راجع التقدم اليومي",
    "استخدم طريقة التعلم الإلكتروني",
    "مارس التأمل الموجه",
    "رتب أولويات الحياة",
    "استخدم تقنية الذاكرة المتقدمة",
    "شارك في برامج تطوعية تعليمية",
    "ركز على الصحة النفسية",
    "استخدم طريقة التعلم المتنوعة",
    "مارس الكتابة التعبيرية",
    "تناول الفواكه الموسمية",
    "استخدم تطبيقات التطوير الذاتي",
    "راجع الأهداف قصيرة الأمد",
    "استخدم طريقة التعلم التجريبي",
    "مارس الرياضة الفردية",
    "رتب نظاماً للدراسة المنتظمة",
    "استخدم تقنية الذاكرة الشمسية",
    "شارك في مسابقات ثقافية",
    "ركز على بناء الثقة بالنفس",
    "استخدم طريقة التعلم المتكاملة",
    "مارس الرسم الرقمي",
    "تناول السمك للدماغ",
    "استخدم تطبيقات التعليم المجانية",
    "راجع التقدم الأسبوعي",
    "استخدم طريقة التعلم الاجتماعي"
];

const motivations = [
    "كل خطوة تخطوها في طريق التعلم تقربك من النجاح",
    "النجاح ليس نهائياً والفشل ليس قاتلاً: الشجاعة للاستمرار هي ما يهم",
    "لا تخف من البدء الصغير، فالجبال الكبيرة تبنى من حصى صغيرة",
    "أنت أقوى مما تظن وأكثر ذكاءً مما تتخيل",
    "كل يوم جديد فرصة لتكون أفضل من أمس",
    "الطريق إلى النجاح مليء بالعقبات، لكن كل عقبة تجعلك أقوى",
    "لا تقيس النجاح بالمال أو الشهرة، بل بالرضا عن نفسك",
    "أنت لست منافساً للآخرين، بل منافس لنفسك أمس",
    "الفشل ليس نهاية الطريق، بل بداية لطريق أفضل",
    "كل محاولة فاشلة تقربك خطوة من النجاح",
    "أنت قادر على تحقيق أحلامك إذا صدقت في السعي",
    "النجاح يتطلب وقتاً وجهداً، لكن النتيجة تستحق العناء",
    "لا تدع الخوف من الفشل يمنعك من المحاولة",
    "كل درس تتعلمه يفتح أمامك أبواباً جديدة",
    "أنت لست وحيداً في رحلتك، هناك من سبقك ونجح",
    "الصبر والمثابرة مفتاح النجاح في كل مجال",
    "لا تقارن نفسك بالآخرين، ركز على تقدمك الشخصي",
    "كل يوم دراسة يبني مستقبلك الأفضل",
    "أنت تستحق النجاح والسعادة التي تسعى إليها",
    "الطريق صعب، لكن الوصول إلى القمة يستحق كل جهد",
    "صدق في عملك وستحصد الثمار يوماً ما",
    "لا تدع الإحباط يسيطر عليك، فهو جزء من رحلة النجاح",
    "كل خطأ تتعلم منه يجعلك أكثر حكمة",
    "أنت قادر على تغيير حياتك بالعلم والمعرفة",
    "النجاح يبدأ بخطوة واحدة، فابدأ اليوم",
    "لا تيأس من البطء، فالثبات أفضل من السرعة المؤقتة",
    "كل جهد تبذله اليوم سيظهر ثماره غداً",
    "أنت أكبر من أي عقبة تواجهها في طريقك",
    "الدراسة ليست واجباً، بل استثمار في مستقبلك",
    "صدق في سعيك وستجد النجاح يتبعك",
    "لا تدع الشك يسيطر على إيمانك بقدراتك",
    "كل صفحة تقرأها تضيف إلى معرفتك وقيمتك",
    "أنت تستحق كل الجهد الذي تبذله لأجل نجاحك",
    "الطريق إلى القمة طويل، لكن المنظر جميل",
    "لا تقيس النجاح بالنتائج المؤقتة، بل بالنمو المستمر",
    "كل درس صعب يجعلك أقوى وأكثر صبراً",
    "أنت قادر على تحقيق ما يبدو مستحيلاً للآخرين",
    "النجاح يتطلب تضحيات، لكنها تستحق العناء",
    "لا تدع التعب يمنعك من الاستمرار في طريقك",
    "كل يوم جديد فرصة لإثبات قيمتك",
    "أنت لست مجرد طالب، بل بناء لمستقبل أفضل",
    "الصبر مع الجهد يؤدي إلى نتائج مذهلة",
    "لا تقارن رحلتك برحلة الآخرين، فكل طريق مختلف",
    "كل محاضرة تحضرها تضيف إلى خبرتك",
    "أنت تستحق النجاح أكثر مما تتخيل",
    "الطريق إلى النجاح مليء بالدروس القيمة",
    "صدق في دراستك وستحصد النجاح الذي تستحقه",
    "لا تدع الإرهاق يمنعك من الاستمرار",
    "كل اختبار تمر به يجعلك أكثر قوة",
    "أنت قادر على تغيير العالم بمعرفتك",
    "النجاح ليس هدية، بل نتيجة عمل دؤوب",
    "لا تيأس من الصعوبات، فهي جزء من النجاح",
    "كل ساعة دراسة تستثمرها في نفسك",
    "أنت أقرب إلى النجاح مما تظن",
    "الطريق طويل، لكن المكافأة تستحق الانتظار",
    "صدق في جهدك وستجد النجاح حليفك",
    "لا تدع الشكوك تمنعك من المضي قدماً",
    "كل كتاب تقرأه يفتح عالماً جديداً",
    "أنت تستحق كل النجاح الذي تحلم به",
    "الصعوبات هي اختبارات لقوتك الداخلية",
    "لا تقيس النجاح بالدرجات، بل بالمعرفة",
    "كل خطوة تخطوها تقربك من حلمك",
    "أنت قادر على تحقيق المستحيل بالإرادة",
    "النجاح يتطلب وقتاً، لكن الوقت يمر بسرعة",
    "لا تدع التعب يوقف مسيرتك",
    "كل درس تتعلمه يغير حياتك للأفضل",
    "أنت تستحق النجاح والسعادة الكاملة",
    "الطريق إلى القمة يبدأ بخطوة واحدة",
    "صدق في سعيك وستصل إلى أهدافك",
    "لا تدع الإحباط يسيطر على روحك",
    "كل محاولة جديدة تقربك من النجاح",
    "أنت أكبر من أي تحدي تواجهه",
    "الدراسة هي مفتاح فتح أبواب المستقبل",
    "صدق في عملك وستحصد النجاح",
    "لا تدع الخوف يمنعك من المحاولة",
    "كل يوم دراسة يبني شخصيتك",
    "أنت تستحق كل الجهد الذي تبذله",
    "الصبر هو مفتاح النجاح الكبير",
    "لا تقارن نفسك بالآخرين أبداً",
    "كل خطأ يعلمنا درساً قيماً",
    "أنت قادر على تغيير مصيرك",
    "النجاح يأتي لمن يصبر ويجتهد",
    "لا تيأس من البطء في التقدم",
    "كل جهد يؤدي إلى نتائج إيجابية",
    "أنت أقوى مما تظن حقاً",
    "الطريق صعب لكن المكافأة جميلة",
    "صدق في دراستك وستنجح",
    "لا تدع الشك يسيطر عليك",
    "كل صفحة تضيف إلى معرفتك",
    "أنت تستحق النجاح الذي تسعى إليه",
    "الصعوبات تجعل النجاح أحلى",
    "لا تقيس النجاح بالنتائج فقط",
    "كل خطوة مهمة في رحلتك",
    "أنت قادر على تحقيق أحلامك",
    "النجاح يتطلب تضحيات كبيرة",
    "لا تدع التعب يوقفك",
    "كل درس يغير حياتك",
    "أنت تستحق السعادة والنجاح",
    "الطريق يبدأ بخطوة صغيرة",
    "صدق في سعيك دائماً",
    "لا تدع الإحباط يسيطر",
    "كل محاولة جديدة فرصة",
    "أنت أكبر من التحديات",
    "الدراسة مفتاح المستقبل",
    "صدق في عملك دوماً",
    "لا تدع الخوف يمنعك",
    "كل يوم يبني شخصيتك",
    "أنت تستحق كل جهدك",
    "الصبر مفتاح النجاح",
    "لا تقارن نفسك بالآخرين",
    "كل خطأ درس قيم",
    "أنت قادر على التغيير",
    "النجاح للصابرين",
    "لا تيأس من البطء",
    "كل جهد إيجابي",
    "أنت أقوى حقاً",
    "الطريق صعب لكن جميل",
    "صدق في دراستك",
    "لا تدع الشك يسيطر",
    "كل صفحة معرفة",
    "أنت تستحق النجاح",
    "الصعوبات تجعل النجاح أحلى"
];

const quotes = [
    "العلم نور والجهل ظلام",
    "من طلب العلا سهر الليالي",
    "العلم في الصغر كالنقش على الحجر",
    "طلب العلم فريضة على كل مسلم ومسلمة",
    "من تعلم علمًا لم ينفعه الله به من نور يوم القيامة",
    "اطلبوا العلم من المهد إلى اللحد",
    "خيركم من تعلم القرآن وعلمه",
    "فضل العالم على العابد كفضل القمر على سائر الكواكب",
    "من سلك طريقًا يلتمس فيه علمًا سهل الله له طريقًا إلى الجنة",
    "العلماء ورثة الأنبياء",
    "طلب العلم عبادة",
    "من أراد الدنيا فعليه بالعلم، ومن أراد الآخرة فعليه بالعلم",
    "لا يؤمن أحدكم حتى يحب لأخيه ما يحب لنفسه",
    "الصبر مفتاح الفرج",
    "إن مع العسر يسراً",
    "لا تحزن إن الله معنا",
    "واعتصموا بحبل الله جميعاً ولا تفرقوا",
    "رب اغفر وارحم وأنت خير الراحمين",
    "اللهم صل على محمد وعلى آل محمد",
    "سبحان الله وبحمده سبحان الله العظيم",
    "الحمد لله رب العالمين",
    "لا إله إلا الله محمد رسول الله",
    "أستغفر الله العظيم",
    "الله أكبر",
    "لا حول ولا قوة إلا بالله",
    "اللهم إني أسألك العلم النافع",
    "اللهم زدني علماً",
    "رب زدني علماً",
    "اللهم أعني على ذكرك وشكرك وحسن عبادتك",
    "اللهم إني أعوذ بك من علم لا ينفع",
    "رب اشرح لي صدري ويسر لي أمري",
    "اللهم يا مقلب القلوب ثبت قلبي على دينك",
    "اللهم إني أسألك الثبات في الأمر",
    "رب أوزعني أن أشكر نعمتك التي أنعمت علي",
    "اللهم ألهمني رشدي",
    "رب أعوذ بك من همزات الشياطين",
    "اللهم إني أعوذ بك من الفقر والقلة",
    "رب أدخلني مدخل صدق وأخرجني مخرج صدق",
    "اللهم إني أسألك من فضلك",
    "رب أرني الحق حقاً وارزقني اتباعه",
    "اللهم يا حي يا قيوم برحمتك أستغيث",
    "رب اغفر لي ولوالدي وللمؤمنين يوم يقوم الحساب",
    "اللهم إني أسألك الهدى والتقى والعفاف والغنى",
    "رب اجعلني مقيم الصلاة ومن ذريتي ربنا وتقبل دعاء",
    "اللهم إني أعوذ بك من عذاب القبر",
    "رب أعوذ بك من عذاب النار",
    "اللهم إني أعوذ بك من فتنة المحيا والممات",
    "رب أعوذ بك من فتنة المسيح الدجال",
    "اللهم إني أعوذ بك من الشرور كلها",
    "رب أعوذ بك من الهم والحزن",
    "اللهم إني أعوذ بك من الجبن والكسل",
    "رب أعوذ بك من الدين والفقر",
    "اللهم إني أعوذ بك من الكفر والفقر والعذاب",
    "رب أعوذ بك من شر ما عملت",
    "اللهم إني أعوذ بك من شر ما لم أعمل",
    "رب أعوذ بك من شر الفتن ما ظهر منها وما بطن",
    "اللهم إني أعوذ بك من زوال نعمتك",
    "رب أعوذ بك من طرد المطرودين",
    "اللهم إني أعوذ بك من غلبة الدين",
    "رب أعوذ بك من غلبة العدو",
    "اللهم إني أعوذ بك من سوء القضاء",
    "رب أعوذ بك من شماتة الأعداء",
    "اللهم إني أعوذ بك من البرص والجنون والجذام",
    "رب أعوذ بك من سيئ الأخلاق",
    "اللهم إني أعوذ بك من الشح والجبن",
    "رب أعوذ بك من الهرم والموت",
    "اللهم إني أعوذ بك من الغرق والحرق والسقوط",
    "رب أعوذ بك من لدغة الحيات والعقارب",
    "اللهم إني أعوذ بك من السرقة واللصوص",
    "رب أعوذ بك من الظلم والجور",
    "اللهم إني أعوذ بك من الغدر والخيانة",
    "رب أعوذ بك من الفقر والمرض",
    "اللهم إني أعوذ بك من الشر كله",
    "رب أعوذ بك من الشيطان الرجيم",
    "اللهم إني أعوذ بك من الوسوسة",
    "رب أعوذ بك من الهموم والغموم",
    "اللهم إني أعوذ بك من الضيق والحرج",
    "رب أعوذ بك من اليأس والقنوط",
    "اللهم إني أعوذ بك من الغفلة والسهو",
    "رب أعوذ بك من الغضب والحقد",
    "اللهم إني أعوذ بك من الحسد والرياء",
    "رب أعوذ بك من الكبر والعجب",
    "اللهم إني أعوذ بك من الشرك والنفاق",
    "رب أعوذ بك من الزنا والفواحش",
    "اللهم إني أعوذ بك من السرقة والغصب",
    "رب أعوذ بك من الكذب والغيبة",
    "اللهم إني أعوذ بك من الخمر والمخدرات",
    "رب أعوذ بك من الربا والرشوة",
    "اللهم إني أعوذ بك من الظلم والعدوان",
    "رب أعوذ بك من الفتن والمحن",
    "اللهم إني أعوذ بك من الشرور والفتن",
    "رب أعوذ بك من كل سوء",
    "اللهم إني أعوذ بك من كل شر",
    "رب أعوذ بك من كل بلاء",
    "اللهم إني أعوذ بك من كل عدو",
    "رب أعوذ بك من كل حاسد",
    "اللهم إني أعوذ بك من كل ساحر",
    "رب أعوذ بك من كل كافر",
    "اللهم إني أعوذ بك من كل فاسق",
    "رب أعوذ بك من كل ظالم",
    "اللهم إني أعوذ بك من كل مجرم",
    "رب أعوذ بك من كل فاجر",
    "اللهم إني أعوذ بك من كل خبيث",
    "رب أعوذ بك من كل منافق",
    "اللهم إني أعوذ بك من كل فاسد",
    "رب أعوذ بك من كل ظالم",
    "اللهم إني أعوذ بك من كل شرير",
    "رب أعوذ بك من كل فاسق",
    "اللهم إني أعوذ بك من كل خبيث",
    "رب أعوذ بك من كل منافق",
    "اللهم إني أعوذ بك من كل فاسد",
    "رب أعوذ بك من كل ظالم",
    "اللهم إني أعوذ بك من كل شرير"
];

// ==== متغيرات عامة ====
let currentStudent = null;
let currentStage = null;          // المرحلة الدراسية (elementary/middle/high)
let currentClass = null;          // الصف داخل المرحلة

const classOptions = {
    elementary: ["الأول","الثاني","الثالث","الرابع","الخامس","السادس"],
    middle:    ["الأول","الثاني","الثالث"],
    high:      ["الأول","الثاني","الثالث"]
};

let currentTheme = localStorage.getItem('theme') || 'light';
let notesArray = [];
let tasksArray = [];
let timeFormat = localStorage.getItem('timeFormat') || '24';
let notificationPermission = null;

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

// ==== حفظ الاسم والانتقال لاختيار المرحلة ====
function saveName() {
    const studentName = document.getElementById('studentName').value.trim();
    
    if (!studentName) {
        alert('⚠️ الرجاء إدخال اسمك');
        return;
    }
    
    currentStudent = studentName;
    localStorage.setItem('studentName', studentName);
    
    // إخفاء حقل الاسم وإظهار اختيار المرحلة
    document.getElementById('nameInputSection').classList.add('hidden');
    document.getElementById('stageSection').classList.remove('hidden');
    // reset classSelect
    updateClassOptions();
}

// ==== تحديث خيارات الصف حسب المرحلة المحددة ==== 
function updateClassOptions() {
    const stage = document.getElementById('stageSelect').value;
    const classSelect = document.getElementById('classSelect');
    classSelect.innerHTML = '<option value="">-- اختر الصف --</option>';
    if (!stage) {
        classSelect.classList.add('hidden');
        return;
    }
    const options = classOptions[stage] || [];
    options.forEach(c => {
        const opt = document.createElement('option');
        opt.value = c;
        opt.textContent = c;
        classSelect.appendChild(opt);
    });
    classSelect.classList.remove('hidden');
}

// ==== حفظ المرحلة والصف ثم الانتقال لاختيار الوضع ====
function saveStage() {
    const stageVal = document.getElementById('stageSelect').value;
    const classVal = document.getElementById('classSelect').value;
    if (!stageVal) {
        alert('⚠️ الرجاء اختيار المرحلة الدراسية');
        return;
    }
    if (!classVal) {
        alert('⚠️ الرجاء اختيار الصف');
        return;
    }
    currentStage = stageVal;
    currentClass = classVal;
    localStorage.setItem('studentStage', currentStage);
    localStorage.setItem('studentClass', currentClass);
    document.getElementById('stageSection').classList.add('hidden');
    document.getElementById('modeToggleSection').classList.remove('hidden');
}

// ==== فتح نموذج تعديل الحساب ==== 
function editProfile() {
    openAccountModal();
}

// ==== وظائف المودال ==== 
function openAccountModal() {
    // تعبئة الحقول
    document.getElementById('accName').value = currentStudent || '';
    document.getElementById('accStage').value = currentStage || '';
    accUpdateClassOptions();
    document.getElementById('accClass').value = currentClass || '';

    document.getElementById('hamburgerMenu').classList.add('hidden');
    document.getElementById('accountModal').classList.remove('hidden');
}

function closeAccountModal() {
    document.getElementById('accountModal').classList.add('hidden');
}

function accUpdateClassOptions() {
    const stage = document.getElementById('accStage').value;
    const classSelect = document.getElementById('accClass');
    classSelect.innerHTML = '<option value="">-- اختر الصف --</option>';
    if (!stage) {
        classSelect.classList.add('hidden');
        return;
    }
    const options = classOptions[stage] || [];
    options.forEach(c => {
        const opt = document.createElement('option');
        opt.value = c;
        opt.textContent = c;
        classSelect.appendChild(opt);
    });
    classSelect.classList.remove('hidden');
}

function saveAccountChanges() {
    const name = document.getElementById('accName').value.trim();
    const stage = document.getElementById('accStage').value;
    const cls = document.getElementById('accClass').value;

    if (name) {
        currentStudent = name;
        localStorage.setItem('studentName', name);
    }
    if (stage) {
        currentStage = stage;
        localStorage.setItem('studentStage', stage);
    }
    if (cls) {
        currentClass = cls;
        localStorage.setItem('studentClass', cls);
    }
    // تحديث المواضيع والترحيب
    initializeSubjects();
    updateStatistics();
    showDashboard();
    closeAccountModal();
}

function openAboutModal() {
    document.getElementById('hamburgerMenu').classList.add('hidden');
    document.getElementById('aboutModal').classList.remove('hidden');
}

function closeAboutModal() {
    document.getElementById('aboutModal').classList.add('hidden');
}

// ==== تبديل عرض قائمة الهامبرغر ==== 
function toggleHamburgerMenu() {
    const menu = document.getElementById('hamburgerMenu');
    if (menu) {
        if (menu.classList.contains('hidden')) {
            menu.classList.remove('hidden');
            // trigger animation
            setTimeout(() => menu.classList.add('show'), 10);
        } else {
            menu.classList.remove('show');
            menu.addEventListener('transitionend', function handler() {
                menu.classList.add('hidden');
                menu.removeEventListener('transitionend', handler);
            });
        }
    }
}

// Adjust modal open/close for animation
function openAccountModal() {
    document.getElementById('accName').value = currentStudent || '';
    document.getElementById('accStage').value = currentStage || '';
    accUpdateClassOptions();
    document.getElementById('accClass').value = currentClass || '';

    document.getElementById('hamburgerMenu').classList.add('hidden');
    const modal = document.getElementById('accountModal');
    modal.classList.remove('hidden');
    setTimeout(() => modal.classList.add('visible'), 10);
}

function closeAccountModal() {
    const modal = document.getElementById('accountModal');
    modal.classList.remove('visible');
    modal.addEventListener('transitionend', function h() {
        modal.classList.add('hidden');
        modal.removeEventListener('transitionend', h);
    });
}

function openAboutModal() {
    document.getElementById('hamburgerMenu').classList.add('hidden');
    const modal = document.getElementById('aboutModal');
    modal.classList.remove('hidden');
    setTimeout(() => modal.classList.add('visible'), 10);
}

function closeAboutModal() {
    const modal = document.getElementById('aboutModal');
    modal.classList.remove('visible');
    modal.addEventListener('transitionend', function h() {
        modal.classList.add('hidden');
        modal.removeEventListener('transitionend', h);
    });
}

// إغلاق القائمة تلقائياً عند النقر خارجها
window.addEventListener('click', (e) => {
    const menu = document.getElementById('hamburgerMenu');
    const trigger = document.querySelector('.menu-trigger');
    if (menu && !menu.classList.contains('hidden') && trigger && !trigger.contains(e.target) && !menu.contains(e.target)) {
        menu.classList.add('hidden');
    }
});

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
    
    // تحديث رسالة الترحيب (تضمين المرحلة والصف إذا كانت معروفة)
    const welcomeElem = document.getElementById('welcomeMsg');
    const welcomeTitle = document.getElementById('welcomeTitle');
    let welcomeText = `أهلاً ${currentStudent}`;
    if (currentStage) {
        const stageNames = {elementary: 'ابتدائية', middle: 'متوسطة', high: 'اعدادية'};
        welcomeText += ` (${stageNames[currentStage] || ''}`;
        if (currentClass) welcomeText += ` - ${currentClass}`;
        welcomeText += `)`;
    }
    if (welcomeElem) welcomeElem.textContent = welcomeText;
    if (welcomeTitle) welcomeTitle.textContent = welcomeText;
    
    // إذا لم يتم اختيار المرحلة مسبقاً، طلبها فوراً عن طريق فتح مربع التحرير
    if (!currentStage) {
        setTimeout(() => {
            alert('من فضلك اختر مرحلتك و صفك - سيتم طرح الأسئلة الآن.');
            editProfile();
        }, 300);
    }
    
    // تهيئة البيانات
    initializeSubjects();
    loadNotesFromStorage();
}

// ==== تهيئة قائمة المواد ====
function initializeSubjects() {
    const subjectSelect = document.getElementById('subjectSelect');
    const teacherSelect = document.getElementById('teacherSelect');
    subjectSelect.innerHTML = '<option value="">-- اختر مادة --</option>';
    if (teacherSelect) {
        teacherSelect.innerHTML = '<option value="">-- اختر أستاذ --</option>';
    }
    
    educationDatabase.subjects.forEach(subject => {
        // إذا تم تحديد المرحلة، لا تظهر المواد غير المتاحة لها
        if (currentStage && subject.stages && !subject.stages.includes(currentStage)) return;
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
    
    // العمل بحث حقيقي على اليوتيوب مباشرة مع تضمين المرحلة/الصف إذا كانت موجودة
    let stageLabel = '';
    let classLabel = '';
    const stageNames = {elementary: 'ابتدائية', middle: 'متوسطة', high: 'اعدادية'};
    if (currentStage) stageLabel = stageNames[currentStage] || '';
    if (currentClass) classLabel = currentClass;
    displayRealSearchResults(searchTerm, teacherName, subjectName, stageLabel, classLabel);
}

// ==== عرض نتائج البحث الحقيقية على اليوتيوب ====
function displayRealSearchResults(searchTerm, teacherName, subjectName, stageLabel = '', classLabel = '') {
    const searchResults = document.getElementById('searchResults');
    
    // أضف معلومات المرحلة/الصف إلى الاستعلام إذا كانت موجودة
    let extra = '';
    if (stageLabel) extra += ` ${stageLabel}`;
    if (classLabel) extra += ` ${classLabel}`;
    
    // بناء استعلامات البحث - مرتبطة بالأستاذ فقط
    const queries = [
        // بحث 1: الموضوع + الأستاذ + المادة + المرحلة (الأدق)
        {
            title: `البحث الدقيق: "${searchTerm}" مع ${teacherName}`,
            query: `${searchTerm} ${teacherName} ${subjectName}${extra}`
        },
        // بحث 2: الموضوع + الأستاذ (بديل)
        {
            title: `البحث مع ${teacherName}`,
            query: `${searchTerm} ${teacherName}${extra}`
        }
    ];
    
    let html = `
        <div style="padding: 15px; background: #eff6ff; border-radius: 10px; border-right: 4px solid var(--primary-color); margin-bottom: 15px;">
            <p style="color: var(--primary-color); font-weight: 600; margin-bottom: 5px;">
                🎬 البحث عن: <strong>"${searchTerm}"</strong>
            </p>
            <p style="color: #4b5563; font-size: 13px;">
                مع الأستاذ: <strong>${teacherName}</strong> في مادة <strong>${subjectName}</strong>
                ${stageLabel ? `<br>المرحلة: <strong>${stageLabel}</strong>` : ''}
                ${classLabel ? `<br>الصف: <strong>${classLabel}</strong>` : ''}
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
    let notifyText = `🎬 بحث عن "${searchTerm}" مع ${teacherName}`;
    if (stageLabel) notifyText += ` (${stageLabel}` + (classLabel ? ` - ${classLabel}` : '') + `)`;
    showNotification(notifyText, 'success');
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
// ==== إدارة المهام ====

// ==== طلب إذن الإشعارات ====
async function requestNotificationPermission() {
    if ('Notification' in window) {
        notificationPermission = await Notification.requestPermission();
        return notificationPermission === 'granted';
    }
    return false;
}

// ==== إضافة مهمة جديدة ====
function addTask(event) {
    event.preventDefault();
    
    const title = document.getElementById('taskTitle').value.trim();
    const priority = document.getElementById('taskPriority').value;
    const time = document.getElementById('taskTime').value;
    const timeFormatValue = document.querySelector('input[name="timeFormat"]:checked').value;
    
    if (!title) {
        showNotification('⚠️ الرجاء إدخال عنوان المهمة', 'warning');
        return;
    }
    
    const task = {
        id: Date.now(),
        title: title,
        priority: priority,
        time: time,
        timeFormat: timeFormatValue,
        completed: false,
        createdAt: new Date().toISOString()
    };
    
    tasksArray.push(task);
    saveTasksToStorage();
    displayTasks();
    
    // مسح النموذج
    document.getElementById('taskForm').reset();
    document.querySelector('input[name="timeFormat"][value="24"]').checked = true;
    
    // جدولة التذكير إذا كان هناك وقت محدد
    if (time) {
        scheduleNotification(task);
    }
    
    showNotification('✅ تم إضافة المهمة بنجاح', 'success');
}

// ==== عرض قائمة المهام ====
function displayTasks() {
    const tasksList = document.getElementById('tasksList');
    
    if (tasksArray.length === 0) {
        tasksList.innerHTML = '<p style="text-align: center; color: #999; padding: 20px;">📭 لا توجد مهام حتى الآن</p>';
        return;
    }
    
    tasksList.innerHTML = '';
    
    tasksArray.forEach(task => {
        const taskElement = document.createElement('div');
        taskElement.className = `task-item ${task.completed ? 'completed' : ''} ${task.priority === 'high' ? 'high-priority' : ''}`;
        
        const timeDisplay = task.time ? formatTimeDisplay(task.time, task.timeFormat) : 'بدون تذكير';
        
        taskElement.innerHTML = `
            <div class="task-header">
                <h4 class="task-title">${task.title}</h4>
                <span class="task-priority ${task.priority}">${task.priority === 'high' ? 'قصوى' : 'عادية'}</span>
            </div>
            <p class="task-time">⏰ ${timeDisplay}</p>
            <div class="task-actions">
                ${!task.completed ? `<button class="btn-complete" onclick="completeTask(${task.id})">✅ إكمال</button>` : ''}
                <button class="btn-delete" onclick="deleteTask(${task.id})">🗑️ حذف</button>
            </div>
        `;
        tasksList.appendChild(taskElement);
    });
    
    updateStatistics();
}

// ==== تنسيق عرض الوقت ====
function formatTimeDisplay(time, format) {
    if (!time) return 'بدون تذكير';
    
    const [hours, minutes] = time.split(':');
    const hour24 = parseInt(hours);
    
    if (format === '12') {
        const period = hour24 >= 12 ? 'مساءً' : 'صباحاً';
        const hour12 = hour24 % 12 || 12;
        return `${hour12}:${minutes} ${period}`;
    }
    
    return `${time}`;
}

// ==== إكمال مهمة ====
function completeTask(id) {
    const taskIndex = tasksArray.findIndex(task => task.id === id);
    if (taskIndex !== -1) {
        tasksArray[taskIndex].completed = true;
        saveTasksToStorage();
        displayTasks();
        
        // عرض نافذة التهنئة
        showCongratsModal(tasksArray[taskIndex]);
    }
}

// ==== حذف مهمة ====
function deleteTask(id) {
    if (confirm('هل تريد حذف هذه المهمة؟')) {
        tasksArray = tasksArray.filter(task => task.id !== id);
        saveTasksToStorage();
        displayTasks();
        showNotification('✅ تم حذف المهمة', 'success');
    }
}

// ==== عرض نافذة التهنئة ====
function showCongratsModal(task) {
    const modal = document.createElement('div');
    modal.className = 'congrats-modal';
    modal.id = 'congratsModal';
    
    // اختيار محتوى عشوائي
    const randomTip = studyTips[Math.floor(Math.random() * studyTips.length)];
    const randomMotivation = motivations[Math.floor(Math.random() * motivations.length)];
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    
    modal.innerHTML = `
        <div class="congrats-content">
            <div class="congrats-icon">🎉</div>
            <h2 class="congrats-title">مبروك! أكملت المهمة</h2>
            <p class="congrats-tip"><strong>نصيحة:</strong> ${randomTip}</p>
            <p class="congrats-motivation"><strong>محفز:</strong> ${randomMotivation}</p>
            <p class="congrats-quote"><strong>حكمة:</strong> ${randomQuote}</p>
            <button class="btn-close-congrats" onclick="closeCongratsModal()">شكراً لك!</button>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    // إغلاق النافذة عند النقر خارجها
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeCongratsModal();
        }
    });
}

// ==== إغلاق نافذة التهنئة ====
function closeCongratsModal() {
    const modal = document.getElementById('congratsModal');
    if (modal) {
        modal.remove();
    }
}

// ==== جدولة إشعار ====
function scheduleNotification(task) {
    if (!task.time || notificationPermission !== 'granted') return;
    
    const [hours, minutes] = task.time.split(':');
    const now = new Date();
    const notificationTime = new Date();
    notificationTime.setHours(parseInt(hours), parseInt(minutes), 0, 0);
    
    // إذا كان الوقت المحدد قد مر اليوم، جدولة للغد
    if (notificationTime <= now) {
        notificationTime.setDate(notificationTime.getDate() + 1);
    }
    
    const timeUntilNotification = notificationTime.getTime() - now.getTime();
    
    setTimeout(() => {
        new Notification(`تذكير: ${task.title}`, {
            body: `حان وقت إنجاز المهمة: ${task.title}`,
            icon: '/favicon.ico'
        });
    }, timeUntilNotification);
}

// ==== حفظ المهام في التخزين المحلي ====
function saveTasksToStorage() {
    localStorage.setItem('tasks', JSON.stringify(tasksArray));
}

// ==== تحميل المهام من التخزين المحلي ====
function loadTasksFromStorage() {
    const stored = localStorage.getItem('tasks');
    if (stored) {
        tasksArray = JSON.parse(stored);
        displayTasks();
    }
    
    // تحميل تنسيق الوقت المحفوظ
    const savedTimeFormat = localStorage.getItem('timeFormat');
    if (savedTimeFormat) {
        timeFormat = savedTimeFormat;
        const radioButton = document.querySelector(`input[name="timeFormat"][value="${timeFormat}"]`);
        if (radioButton) {
            radioButton.checked = true;
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
    
    const totalTasks = tasksArray.length;
    const completedTasks = tasksArray.filter(t => t.completed).length;
    const pendingTasks = totalTasks - completedTasks;
    const highPriorityTasks = tasksArray.filter(t => t.priority === 'high' && !t.completed).length;
    
    document.getElementById('totalNotes').textContent = totalNotes;
    document.getElementById('importantNotes').textContent = importantNotes;
    document.getElementById('completedTasks').textContent = completedTasks;
    document.getElementById('studyHours').textContent = Math.floor(totalNotes / 2) + Math.floor(completedTasks / 3);
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
    
    // تحميل المعلومات المخزنة
    const savedName = localStorage.getItem('studentName');
    const savedStage = localStorage.getItem('studentStage');
    const savedClass = localStorage.getItem('studentClass');

    if (!savedName) {
        // مستخدم جديد
        startIntro();
    } else {
        currentStudent = savedName;
        if (savedStage && savedClass) {
            currentStage = savedStage;
            currentClass = savedClass;
        }
        // عرض اللوحة؛ إذا لم يكن لدينا مرحلة/صف، سيطلب النظام تحديثها بعد العرض
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
    
    // معالج نموذج المهام
    const taskForm = document.getElementById('taskForm');
    if (taskForm) {
        taskForm.addEventListener('submit', addTask);
    }
    
    // معالج تغيير تنسيق الوقت
    const timeFormatRadios = document.querySelectorAll('input[name="timeFormat"]');
    const formatMessageElem = document.getElementById('timeFormatMessage');
    function updateFormatMessage(value) {
        if (formatMessageElem) {
            formatMessageElem.textContent = `سيتم عرض المهام بتنسيق ${value} ساعة`;
        }
    }
    timeFormatRadios.forEach(radio => {
        radio.addEventListener('change', function() {
            timeFormat = this.value;
            localStorage.setItem('timeFormat', timeFormat);
            updateFormatMessage(timeFormat);
        });
    });
    // عرض الرسالة المبدئية
    updateFormatMessage(timeFormat);
    
    // طلب إذن الإشعارات عند تحميل الصفحة
    requestNotificationPermission();
    
    // تحميل المهام المحفوظة
    loadTasksFromStorage();
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
