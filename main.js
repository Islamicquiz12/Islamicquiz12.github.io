var redLight = document.querySelector(".redLight");
var blueLight = document.querySelector(".blueLight");
setTimeout(() => {
    //redLight.style.transform=`translate(400px,-609px)`;
    //blueLight.style.transform=`translate(50px,-1029px)`;
}, 200);
var moveBalls = setInterval(() => {
    let cordenates = [[3, 4], [5, 6]];
    cordenates.forEach(
        (light) => {
            light[0] = Math.floor(Math.random() * 1400) - 200;
            light[1] = Math.floor(Math.random() * 1000) - 1000;
        }
    );
    redLight.style.transform = `translate(${cordenates[0][0]}px,${cordenates[0][1]}px)`;
    blueLight.style.transform = `translate(${cordenates[1][0]}px,${cordenates[1][1]}px)`;
}, 20000);



let goodAns;
let questionIndex;
let userNameArr;
var inputT = document.getElementById("inputT");
let sec = document.querySelectorAll("section");
var errorMassage = document.getElementById("errorMassage");
let topCir = document.querySelector(".spanparent");
let timerCir = document.querySelector(".spanparent>span:first-child");
let numCir = document.querySelector(".spanparent>.num");
let question = document.querySelector("section h2");
let answers = document.querySelectorAll("ul>li>label");
function clickEffect(fg) {
    fg.style.animation = 'clickEffect 200ms';
    setTimeout(() => {
        fg.style.animation = 'none';
    }
        , 200)
}
function reSet() {
    localStorage.removeItem("userName");
    localStorage.removeItem("questionIndex");
    localStorage.removeItem("goodAns");
    window.location.reload();
    sec[0].style.display = "flex";
    sec[1].style.display = "none";
}
function checkValidation(e) {
    userNameArr = e.value.split(" ");
    if (e.value != "") {
        if (userNameArr[1] != "" && userNameArr.length > 1) { inputT.style.border = "1px solid transparent"; errorMassage.style.height = "0px"; }
    }
}
function errorIn(st) {
    inputT.style.border = "1px solid #ff0000";
    inputT.style.animation = "errorInput 200ms ease-in-out";
    errorMassage.style.height = "20px";
    setTimeout(() => { inputT.style.animation = "none"; }, 200)
    errorMassage.innerHTML = st;
    inputT.setAttribute("oninput", "checkValidation(this)");

}
function getName() {
    userNameArr = inputT.value.split(" ");
    if (inputT.value != "") {
        if (userNameArr[1] != "" && userNameArr.length > 1) {
            localStorage.setItem("userName", inputT.value);
            sec[0].style.display = "none";
            sec[1].style.display = "flex";
            newQuis();
        } else { errorIn("يرجى ادخال الاسم الثنائي"); }
    } else {
        errorIn("يرجى ادخال الاسم");
    }
}
const Questions = [{
    id: 0,
    q: "من هو الصحابي الذي عند موته اهتز عرش الرحمن؟",
    a: [{ text: "سعد بن ابي وقاص", isCorrect: false },
    { text: "عمر بن الخطاب", isCorrect: false },
    { text: "سعد بن معاذ", isCorrect: true },
    { text: "عبدالرحمن بن عوف", isCorrect: false }
    ]

},
{
    id: 1,
    q: "ما المكان الذي اتخذه الرسول صلى الله عليه سلم مركزًا سريًا للدعوة في مكة المكرمة؟",
    a: [{ text: "بيت ابو طالب(عمه)", isCorrect: false },
    { text: "بيت ابو بكر الصديق", isCorrect: false },
    { text: "غار حراء", isCorrect: false },
    { text: "الأرقم بن ابي الأرقم", isCorrect: true }
    ]

},
{
    id: 2,
    q: "من هو أكبر أعمام النبي صلى الله عليه وسلم؟",
    a: [{ text: "العباس", isCorrect: false },
    { text: "الحارث", isCorrect: true },
    { text: "ابو لهب", isCorrect: false },
    { text: "ابو طالب", isCorrect: false }
    ]

},
{
    id: 3,
    q: "متى كانت غزوة الخندق؟",
    a: [{ text: "٧ للهجرة", isCorrect: false },
    { text: "٥ للهجرة", isCorrect: true },
    { text: "٩ للهجرة", isCorrect: false },
    { text: "٣ للهجرة", isCorrect: false }
    ]

},
{
    id: 4,
    q: "ما هي السورة التي بدأت وانتهت بالتسبيح؟",
    a: [{ text: "الحشر", isCorrect: true },
    { text: "غافر", isCorrect: false },
    { text: "الاسراء", isCorrect: false },
    { text: "التحريم", isCorrect: false }
    ]

},
{
    id: 5,
    q: "ما هي السورة التي تعدل ثلث القرآن الكريم؟",
    a: [{ text: "البقرة", isCorrect: false },
    { text: "النحل", isCorrect: false },
    { text: "الفاتحة", isCorrect: false },
    { text: "الإخلاص", isCorrect: true }
    ]

},
{
    id: 6,
    q: "كم مرة ذكر اسم جبريل عليه السلام في القرآن الكريم؟",
    a: [{ text: "٣ مرات", isCorrect: true },
    { text: "ولا مرة", isCorrect: false },
    { text: "٢٥ مرة", isCorrect: false },
    { text: "٦ مرات", isCorrect: false }
    ]

},
{
    id: 7,
    q: "كم مرة ذكرت كلمة “الخمر” في القرآن الكريم؟",
    a: [{ text: "٩ مرات", isCorrect: false },
    { text: "١٥ مرة", isCorrect: false },
    { text: "مرتين", isCorrect: false },
    { text: "٦ مرات", isCorrect: true }
    ]

},
{
    id: 8,
    q: "ما هي السورة الملقبة بقلب القرآن؟",
    a: [{ text: "يس", isCorrect: true },
    { text: "الملك", isCorrect: false },
    { text: "القلم", isCorrect: false },
    { text: "الفاتحة", isCorrect: false }
    ]

},
{
    id: 9,
    q: "من هو الصحابي الملقب بأبي المساكين؟",
    a: [{ text: "جعفر بن ابي طالب", isCorrect: true },
    { text: "سعد بن معاذ", isCorrect: false },
    { text: "ابو هريرة", isCorrect: false },
    { text: "ابو سعيد الخدري", isCorrect: false }
    ]

},
{
    id: 10,
    q: "من الصحابي الذي قام بالدفاع عن رسول الله صلى الله عليه وسلم في غزوة أحـد حتى شلت يمينه؟",
    a: [{ text: "طلحة بن عبيدالله", isCorrect: true },
    { text: "سعيد بن جبير", isCorrect: false },
    { text: "ابو بكر الصديق", isCorrect: false },
    { text: "عبدالرحمن بن عوف", isCorrect: false }
    ]

},
{
    id: 11,
    q: "من الصحابي الذي كان يلقب بسيد الفوارس؟",
    a: [{ text: "العباس بن عبدالمطلب", isCorrect: false },
    { text: "حنضلة بن أبي عامر", isCorrect: false },
    { text: "عبدالله بن مسعود", isCorrect: false },
    { text: "ابو موسى الأشعري", isCorrect: true }
    ]

},
{
    id: 12,
    q: "من الصحابي الذي قد غسلته الملائكة ؟",
    a: [{ text: "جعفر الطيار", isCorrect: false },
    { text: "ابو سعيدالخدري", isCorrect: false },
    { text: "سعد بن معاذ", isCorrect: false },
    { text: "حنظلة بن ابي عامر", isCorrect: true }
    ]

},
{
    id: 13,
    q: "من الصحابي الذي قد قام بقتل أبي جهل؟",
    a: [{ text: "حمزة بنعبدالمطلب", isCorrect: false },
    { text: "زيد بن الحارث", isCorrect: false },
    { text: "ابو ايوب الأنصاري", isCorrect: false },
    { text: "عبدالله بن مسعود", isCorrect: true }
    ]

},
{
    id: 14,
    q: "من هو الذي لقب بذي الشهادتين؟",
    a: [{ text: "حنظلة بن ابي عامر", isCorrect: false },
    { text: "سفيان الثوري", isCorrect: false },
    { text: "سعيد بن جبير", isCorrect: false },
    { text: "خزيمة بن ثابت الأنصاري", isCorrect: true }
    ]

},
{
    id: 15,
    q: "كم كان عمر النبي محمد صلى الله عليه وسلم عندما توفيت أمه؟",
    a: [{ text: "٥ سنوات", isCorrect: false },
    { text: "١٠ سنوات", isCorrect: false },
    { text: "٣ سنوات", isCorrect: false },
    { text: "٦ سنوات", isCorrect: true }
    ]

},
{
    id: 16,
    q: "الشهر الثالث في التقويم الهجري؟",
    a: [{ text: "شعبان", isCorrect: false },
    { text: "صفر", isCorrect: false },
    { text: "ربيع الاول", isCorrect: true },
    { text: "جماد الاول", isCorrect: false }
    ]

},
{
    id: 17,
    q: "ما السورة التي ختمت باسم وقت من أوقات الصلاة؟",
    a: [{ text: "سورة القدر", isCorrect: true },
    { text: "سورة البلد", isCorrect: false },
    { text: "سورة الأعلى", isCorrect: false },
    { text: "سورة الفجر", isCorrect: false }
    ]

},
{
    id: 18,
    q: "في أي جهة يقع باب الكعبة المشرفة؟",
    a: [{ text: "في الجهة الشرقية من الكعبة", isCorrect: true },
    { text: "في الجهة الشمالية من الكعبة", isCorrect: false },
    { text: "في الجهة الجنوبية من الكعبة", isCorrect: false },
    { text: "في الجهة الغربية من الكعبة", isCorrect: false }
    ]

},
{
    id: 19,
    q: "كم عدد مصارف الزكاة؟",
    a: [{ text: "ثمانية", isCorrect: true },
    { text: "خمسة", isCorrect: false },
    { text: "سبعة", isCorrect: false },
    { text: "تسعة", isCorrect: false }
    ]

},
{
    id: 20,
    q: "كم مرة ذكرت السيدة مريم في القرآن الكريم؟",
    a: [{ text: "43 مرة", isCorrect: false },
    { text: "55 مرة", isCorrect: false },
    { text: "42 مرة", isCorrect: false },
    { text: "34 مرة", isCorrect: true }
    ]

},
{
    id: 21,
    q: "قال تعالى في سورة العاديات: ( فالمغيرات صبحا (3)) ماالمقصود بالمغيرات؟",
    a: [{ text: "الرياح الشديدة", isCorrect: false },
    { text: "الابل", isCorrect: false },
    { text: "الملائكة السابحين", isCorrect: false },
    { text: "الخيل", isCorrect: true }
    ]

},
{
    id: 22,
    q: "ما هي أعظم آية في القرآن الكريم؟",
    a: [{ text: "آية الكرسي", isCorrect: true },
    { text: "آخر آية من سورة الكهف", isCorrect: false },
    { text: "آخر آية من سورة البقرة", isCorrect: false },
    { text: "أول آية من سورة البقرة", isCorrect: false }
    ]

},
{
    id: 23,
    q: "أحد هؤلاء الصحابة من العشرة المبشرين بالجنة؟",
    a: [{ text: "سلمان الفارسي", isCorrect: false },
    { text: "عقيل بن أبي طالب", isCorrect: false },
    { text: "سعد بن أبي وقاص", isCorrect: true },
    { text: "الأشعث بن قيس", isCorrect: false }
    ]

},
{
    id: 24,
    q: "في أي سنة هجرية كانت غزوة أحد؟",
    a: [{ text: "السنة الثالثة للهجرة", isCorrect: true },
    { text: "السنة الرابعة للهجرة", isCorrect: false },
    { text: "السنة الخامسة للهجرة", isCorrect: false },
    { text: "السنة السادسة للهجرة", isCorrect: false }
    ]

},
{
    id: 25,
    q: "صحابي قال له الرسول صلى الله عليه وسلم: ( تمشي وحدك وتموت وحدك وتبعث وحدك) فمن هو؟",
    a: [{ text: "ابو موسىالأشعري", isCorrect: false },
    { text: "أبو ايوب الأنصاري", isCorrect: false },
    { text: "أبو ذر الغفاري", isCorrect: true },
    { text: "أبو بصير", isCorrect: false }
    ]

},
{
    id: 26,
    q: "من هو النبي الذي أرسل الى قوم ثمود؟",
    a: [{ text: "صالح", isCorrect: true },
    { text: "هود", isCorrect: false },
    { text: "نوح", isCorrect: false },
    { text: "شعيب", isCorrect: false }
    ]

},
{
    id: 27,
    q: "ما عدد أحزاب القرآن الكريم؟",
    a: [{ text: "50 حزبا", isCorrect: false },
    { text: "40 حزبا", isCorrect: false },
    { text: "30 حزبا", isCorrect: false },
    { text: "60 حزبا", isCorrect: true }
    ]

},
{
    id: 28,
    q: "قال تعالى في سورة المدثر: (والرجز فاهجر (5)) ما المقصود بالرجز؟",
    a: [{ text: "الكذب", isCorrect: false },
    { text: "الأوثان", isCorrect: true },
    { text: "الجدال", isCorrect: false },
    { text: "النوم", isCorrect: false }
    ]

},
{
    id: 29,
    q: "قال تعالى: (والصافات صفا * فالزاجرات زجرا) ما المقصود بالزاجرات؟",
    a: [{ text: "الملائكة", isCorrect: true },
    { text: "الرياح", isCorrect: false },
    { text: "الغمام", isCorrect: false },
    { text: "السحاب", isCorrect: false }
    ]

},
{
    id: 30,
    q: "من هو الصحابي الذي كانت تستحي منه ملائكة السماء؟",
    a: [{ text: "علي بن أبي طالب", isCorrect: false },
    { text: "عثمان بن عفان", isCorrect: true },
    { text: "عمر بن الخطاب", isCorrect: false },
    { text: "أبو بكر الصديق", isCorrect: false }
    ]

},
{
    id: 31,
    q: "كم عدد السور التي ابتدأت بالحروف المقطعة (الم)؟",
    a: [{ text: "أربعة سور", isCorrect: false },
    { text: "ثلاث سور", isCorrect: false },
    { text: "خمس سور", isCorrect: false },
    { text: "ستة سور", isCorrect: true }
    ]

},
{
    id: 32,
    q: "ما هو عدد حملة العرش يوم القيامة والمذكورين في القرآن الكريم؟",
    a: [{ text: "سبعة", isCorrect: false },
    { text: "ستة", isCorrect: false },
    { text: "ثمانية", isCorrect: true },
    { text: "تسعة", isCorrect: false }
    ]

},
{
    id: 33,
    q: "أين ذكرت الآية الكريمة: ( وما آتاكم الرسول فخذوه وما نهاكم عنه فانتهوا)؟",
    a: [{ text: "سورة الحشر", isCorrect: true },
    { text: "سورة الصف", isCorrect: false },
    { text: "سورة الواقعة", isCorrect: false },
    { text: "سورة الجمعة", isCorrect: false }
    ]

},
{
    id: 34,
    q: "كم شخص اشترك في قتل ناقة النبي صالح عليه السلام؟",
    a: [{ text: "تسعة أشخاص", isCorrect: true },
    { text: "خمسة أشخاص", isCorrect: false },
    { text: "عشرة أشخاص", isCorrect: false },
    { text: "ثمانية أشخاص", isCorrect: false }
    ]

},
{
    id: 35,
    q: "من الذي لقب الرسول الكريم بالطيب المطيب؟",
    a: [{ text: "زيد بن حارثة", isCorrect: false },
    { text: "أسامة بن زيد", isCorrect: false },
    { text: "أنس بن مالك", isCorrect: false },
    { text: "عمار بن ياسر", isCorrect: true }
    ]

},
{
    id: 36,
    q: "في أي سورة وردت الآية: (يمحق الله الربا ويربي الصدقات والله لا يحب كل كفار أثيم)؟",
    a: [{ text: "المائدة", isCorrect: false },
    { text: "ال عمران", isCorrect: false },
    { text: "هود", isCorrect: false },
    { text: "البقرة", isCorrect: true }
    ]

},
{
    id: 37,
    q: "من هو النبي الذي دعا ربه (توفني مسلما وألحقني بالصالحين)؟",
    a: [{ text: "يعقوب عليه السلام", isCorrect: false },
    { text: "يوسف عليه السلام", isCorrect: true },
    { text: "صالح عليه السلام", isCorrect: false },
    { text: "ابراهيم عليه السلام", isCorrect: false }
    ]

},
{
    id: 38,
    q: "ما هي الرادفة؟",
    a: [{ text: "يوم القيامة", isCorrect: false },
    { text: "النفخة الأولى في البوق", isCorrect: false },
    { text: "النفخة الثانية في البوق", isCorrect: true },
    { text: "انشقاق الأرض", isCorrect: false }
    ]

},
{
    id: 39,
    q: "السورة التي ابتدأت بالحرفين المقطعين (طس)؟",
    a: [{ text: "سورة الحجر", isCorrect: false },
    { text: "سورة الرعد", isCorrect: false },
    { text: "سورة الأعراف", isCorrect: false },
    { text: "سورة النمل", isCorrect: true }
    ]

},
{
    id: 40,
    q: "ما هي السورة التي تسمى سورة التوديع؟",
    a: [{ text: "سورة الزلزلة", isCorrect: false },
    { text: "سورة النصر", isCorrect: true },
    { text: "سورة الحج", isCorrect: false },
    { text: "سورة الفيل", isCorrect: false }
    ]

},
{
    id: 41,
    q: "الشهر الثامن في التقويم الهجري؟",
    a: [{ text: "شعبان", isCorrect: true },
    { text: "ذو الحجة", isCorrect: false },
    { text: "محرم", isCorrect: false },
    { text: "شوال", isCorrect: false }
    ]

},
{
    id: 42,
    q: "كم عدد آيات سورة البقرة؟",
    a: [{ text: "286 آية", isCorrect: true },
    { text: "280 آية", isCorrect: false },
    { text: "298 آية", isCorrect: false },
    { text: "277 آية", isCorrect: false }
    ]

},
{
    id: 43,
    q: "من أسماء الخيل التي ذكرت في القرآن الكريم؟",
    a: [{ text: "النازعات", isCorrect: false },
    { text: "الذاريات", isCorrect: false },
    { text: "الزاجرات", isCorrect: false },
    { text: "العاديات", isCorrect: true }
    ]

},
{
    id: 44,
    q: "كم عدد القراءات الصحيحة للقرآن الكريم؟",
    a: [{ text: "10 قراءات", isCorrect: true },
    { text: "8 قراءات", isCorrect: false },
    { text: "7 قراءات", isCorrect: false },
    { text: "9 قراءات", isCorrect: false }
    ]

},
{
    id: 45,
    q: "كم مرة اعتمر النبي صلى الله عليه وسلم؟",
    a: [{ text: "أربع عمرات", isCorrect: true },
    { text: "سبع عمرات", isCorrect: false },
    { text: "خمس عمرات", isCorrect: false },
    { text: "عمرة واحدة", isCorrect: false }
    ]

},
{
    id: 46,
    q: "ما اسم أخو يوسف عليه السلام من أمه وأبيه؟",
    a: [{ text: "روأبين", isCorrect: false },
    { text: "يهوذا", isCorrect: false },
    { text: "بنيامين", isCorrect: true },
    { text: "يوشع", isCorrect: false }
    ]

},
{
    id: 47,
    q: "في أي سورة ذكرت قصة قابيل وهابيل؟",
    a: [{ text: "سورة الأعراف", isCorrect: false },
    { text: "سورة القصص", isCorrect: false },
    { text: "سورة المائدة", isCorrect: true },
    { text: "سورة الأنعام", isCorrect: false }
    ]

},
{
    id: 48,
    q: "من أول من لقب بأمير المؤمنين؟",
    a: [{ text: "علي بن أبي طالب", isCorrect: false },
    { text: "عثمان بن عفان", isCorrect: false },
    { text: "عمر بن الخطاب", isCorrect: true },
    { text: "أبو بكر الصديق", isCorrect: false }
    ]

},
{
    id: 49,
    q: "يجب اخراج الزكاة من الذهب اذا كان يبلغ النصاب الشرعي وهو؟",
    a: [{ text: "78 غراما", isCorrect: false },
    { text: "85 غراما", isCorrect: true },
    { text: "88 غراما", isCorrect: false },
    { text: "58 غراما", isCorrect: false }
    ]

},
{
    id: 50,
    q: "ماذا لقب ابراهيم عليه السلام؟",
    a: [{ text: "الخليل", isCorrect: true },
    { text: "الصديق", isCorrect: false },
    { text: "اسرائيل", isCorrect: false },
    { text: "شيخ المرسلين", isCorrect: false }
    ]

}];
function newQuis() {
    if (Questions[questionIndex].id == 50) {

        sec[1].innerHTML = "<h1  Style='color:white;'>" + localStorage.getItem('userName') + "</h1><h3  Style='color:white;'></h3><progress max=50 value=" + goodAns + "></progress><div class='res' Style='color:white;'>  الإجابات الصحيحة <p  Style='color:white;'> " + goodAns + " </p><p  Style='color:white;'> من </p><p  Style='color:white;'> 50 </p></div><input type='button' onclick='reSet()' value='اعادة'>";
        sec[1].className = "secres";
        let h3 = document.querySelector("h3");
        let prog = document.querySelector("progress");
        if (goodAns < 10) {
            prog.style.accentColor = "red";
            h3.innerHTML = "ضعيف";
        } else if (goodAns < 15) {
            prog.style.accentColor = "#d44e00";
            h3.innerHTML = "مقبول";
        } else if (goodAns < 20) {
            prog.style.accentColor = "#d4b700";
            h3.innerHTML = "جيد";
        } else if (goodAns < 27) {
            prog.style.accentColor = "#abd400";
            h3.innerHTML = "جيد جدا";
        } else if (goodAns < 35) {
            prog.style.accentColor = "#20d400";
            h3.innerHTML = "ممتاز";
        } else if (goodAns == 45) {
            prog.style.accentColor = "#0026d4";
            h3.innerHTML = "شيخ";
        }

    } else {
        timerFun();
        numCir.innerHTML = goodAns;
        question.innerHTML = (questionIndex+1) + "- " + Questions[questionIndex].q;
        for (i = 0; i < 4; i++) {
            answers[i].parentElement.style.transition = "0s";
            answers[i].innerHTML = Questions[questionIndex].a[i].text;
            answers[i].parentElement.style.color = "unset";
            answers[i].parentElement.style.backgroundColor = "rgb(255 255 255 / 9%)";
            answers[i].previousElementSibling.value = Questions[questionIndex].a[i].isCorrect;
            answers[i].parentElement.setAttribute("onclick", "checkA(this)");
        }
        questionIndex++;
        localStorage.setItem("questionIndex", questionIndex);
        localStorage.setItem("goodAns", goodAns);
    }
}
function checkA(e) {
    clickEffect(e);

    if (e.children[0].value == "true") {
        goodAns++;
        numCir.innerHTML = goodAns;
        numCir.style.animation = "popin 300ms";
    }
    exposeAns();
    e.style.transition = "background-color 1s 0ms";
    clearInterval(tiInt);
    setTimeout(() => {
        numCir.style.animation = "none";
        reStarttimerCir(currentIndexCirArr);
    }, 2000);

}

function exposeAns() {
    for (j = 0; j < answers.length; j++) {
        answers[j].parentElement.removeAttribute("onclick");
        answers[j].parentElement.style.transition = "background-color 1s 400ms";
        if (answers[j].previousElementSibling.value == "true") {
            answers[j].parentElement.style.backgroundColor = "#0cff0094";
        } else {
            answers[j].parentElement.style.backgroundColor = "#d42e3d94";
        }
        answers[j].parentElement.style.color = "#eee";
    }
}

let timerArr = [
    "polygon(50% 0%,50% 50%,50% 0%,100% 0%,100% 100%,0 100%,0% 0%)",
    "polygon(50% 0%,50% 50%,100% 0%,100% 0%,100% 100%,0 100%,0% 0%)",
    "polygon(50% 0%,50% 50%,100% 50%,100% 100%,100% 100%,0 100%,0% 0%)",
    "polygon(50% 0%,50% 50%,100%100%,100% 100%,0% 100%,0% 100%,0% 0%)",
    "polygon(50% 0%,50% 50%,50% 100%,0% 100%,0% 100%,0% 0%,0% 0%)",
    "polygon(50% 0%,50% 50%,0% 100%,0% 100%,0% 0%,0% 0%,0% 0%)",
    "polygon(50% 0%,50% 50%,0% 50%,0% 0%,0% 0%,0% 0%,0% 0%)",
    "polygon(50% 0%,50% 50%,0% 0%,50% 0%,50% 0%,50% 0%,50% 0%)",
    "polygon(50% 0%,50% 50%,50% 0%,50% 0%,50% 0%,50% 0%,50% 0%)"
]
var tiInt;
var currentIndexCirArr = 1;
var startTime;
var elapsedTime;
var currentTime = new Date();
function timerFun() {
    timerCir.style.animation = "change-color 30s";
    startTime = new Date();
    currentIndexCirArr = 1;
    timerCir.style.clipPath = "polygon(50% 0%,50% 50%,50% 0%,100% 0%,100% 100%,0 100%,0% 0%)";
    tiInt = setInterval(() => {
        timerCir.style.transitionDuration = "3000ms";
        timerCir.style.clipPath = timerArr[currentIndexCirArr];
        currentTime = new Date();
        elapsedTime = Math.floor((currentTime - startTime) / 1000);
        if (elapsedTime >= 27) {
            clearInterval(tiInt);
            exposeAns();
            setTimeout(() => {
                reStarttimerCir(currentIndexCirArr);

            }, 2500);
        }
        currentIndexCirArr++;
    }, 3000)
}

function reStarttimerCir(currentIndexPara) {
    timerCir.style.animation = "none";
    timerCir.style.transitionDuration = "10ms";
    let tiIntBack = setInterval(() => {
        currentIndexPara--;
        timerCir.style.clipPath = timerArr[currentIndexPara];
        if (currentIndexPara == 0) {
            clearInterval(tiIntBack);
            newQuis();
        }
    }, 10);
}
if (localStorage.getItem("questionIndex") == null) {
    questionIndex = 0;
    goodAns = 0;
} else {
    goodAns = localStorage.getItem("goodAns");
    questionIndex = localStorage.getItem("questionIndex");
    sec[0].style.display = "none";
    sec[1].style.display = "flex";
    newQuis();
}


