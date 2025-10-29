const pageContent = {
    home: `
        <section class="page-section">

            <h2>introduction</h2>

            <p>Welcome to your space for exploring the essence of humanity.
             Our site is a window onto the noble principles that protect
              individual dignity and preserve human value. We believe that 
              knowledge is the first step toward a more just and equitable world.
               Here, we gather to understand, to learn, and to safeguard the rights
                we are all born with, without distinction.</p>
            
                <h3>Page content: What Are Human Rights?</h3>
                <h3>Page hestory:What is the history of human rights?</h3>
                <h3>Page Global Medols: What typs of Global Medols?</h3>
                <h3>Page About us:Who we are?</h3>

            
        </section>

    `,
    udhr: `
        <section class="page-section">

            <h2>Definition of Human Rights</h2>

            <p> 
                The basic rights and freedoms 
                to which all human beings are entitled, 
                often held to include the right to life 
                and liberty, freedom of thought and 
                expression, and equality before the 
                law.  
            </p>
            
            <h3>Rights: noun</h3>

            <p>Things to which you are entitled or allowed; 
                freedoms that are guaranteed. 
                If you were to ask people in the street, “What 
                are human rights?” you would get many 
                different answers. They would tell you the 
                rights they know about, but very few people 
                know all their rights.</p>
        
            
            
    `,
    topics: `
        <section class="page-section">
            <img src="images/The Cyrus Cylinder.png" />
            <p>In 539 B.C., the armies of Cyrus the Great, 
                    the first king of ancient Persia, conquered 
                    the city of Babylon. But it was his next 
                    actions that marked a major advance for 
                    Man. 
                    1-He freed the slaves, 
                    2-Declared that all people had the right to 
                    choose their own religion,  
                    3-established racial equality. 
                    These and other decrees were recorded on 
                    a baked-clay cylinder in the Akkadian 
                    language with cuneiform script. 
                    Known today as the Cyrus Cylinder, this ancient 
                    record has now been recognized as the world’s 
                    first charter of human rights. 
                    It is translated into all six official languages of 
                    the United Nations and its provisions parallel the 
                    first four Articles of the Universal Declaration of 
                    Human Rights.</p>
            <div><img src="images/The Magna Carta.png" />
            <p> The Magna Carta, or “Great 
                    Charter”. 
                    In 1215, after King John of 
                    England violated a number of 
                    ancient laws and customs by 
                    which England had been 
                    governed, his subjects forced 
                    him to sign the Magna Carta, 
                    which enumerates what later 
                    came to be thought of as human 
                    rights.  
                    Among them was : 
                    1- the right of the church to be free from governmental 
                    interference,  
                    2-the rights of all free citizens to own and inherit 
                    property  
                    3- protected from excessive taxes 
                    4- established the right of widows who owned property 
                    to choose not to remarry 
                    5- established principles of due process and equality 
                    before the law.  
                    6-It also contained provisions forbidding bribery and 
                    official misconduct. 
                    Widely viewed as one of the most important legal 
                    documents in the development of modern democracy, 
                    the Magna Carta was a crucial turning point in the 
                    struggle to establish freedom.</p></div>

            <div><img src="images/Petition of Right.png" />
            <p> The next recorded milestone in 
                    the development of human 
                    rights was the Petition of Right, 
                    produced in 1628 by the English 
                    Parliament and sent to Charles I 
                    as a statement of civil liberties.  
                    Refusal by Parliament to finance the king’s 
                    unpopular foreign policy had caused his 
                    government to exact forced loans and to quarter 
                    troops in subjects’ houses as an economy measure. 
                    Arbitrary arrest and imprisonment for opposing 
                    these policies had produced in Parliament a violent 
                    hostility to Charles and to George Villiers, the Duke 
                    of Buckingham.  
                    The Petition of Right, initiated by Sir Edward Coke, 
                    was based upon earlier statutes and charters and 
                    asserted four principles:  
                    (1) No taxes may be levied without consent of 
                    Parliament,  
                    (2) No subject may be imprisoned without cause 
                    shown (reaffirmation of the right of habeas corpus), 
                    (3) No soldiers may be quartered upon the citizenry, 
                    and  
                    (4) Martial law may not be used in time of peace.</p></div>


        </section>
    `,
    action: `
        <section class="photo">
            <a  href="https://www.un.org/en/about-us/universal-declaration-of-human-rights" target="_blank" >
           <img src="images/united.png" />
            </a>
            <a  href="https://www.amnesty.org/en/location/asia-and-the-pacific/east-asia/japan/report-japan/" target="_blank" >
           <img src="images/منظومه العفو الدوليه.webp" />
            </a>
            <a  href="https://europe.ohchr.org/human-rights/what-are-human-rights/human-rights-europe" target="_blank" >
           <img src="images/human rights in europe.png" />
            </a>
            
        
        </section>
    `,
    about: `
        <section class="hero page-section">
            
        </section>
        <p class="didi">
        <a href="https://horus.edu.eg/ " target="_blank" rel="noopener noreferrer" class="cta-button">Visit the website</a></p>
         <ul class="Membars">____________________________________This web Made By_______________________________________
        <li>Taha mohamad </li>
        <li> Mohamad Elkholy</li>
        <li> mohamad ali alaraby</li>
        <li> hasan mohamad</li>
        <li> yossyf etmany</li>
        <li> assem abo allaz</li>
    </ul>
        <section class="page-section">
            <h2>Our Core Focus</h2>
            <p>We work to protect Freedom of Expression, ensure Justice for Refugees, and advocate for Digital Privacy rights globally.</p>
        </section>
    `
};

// الحصول على منطقة المحتوى وعناصر الروابط
const contentArea = document.getElementById('content-area');
const navLinks = document.querySelectorAll('nav a');

// دالة لتحميل وعرض المحتوى
function loadContent(pageKey) {
    // 1. تحديث منطقة المحتوى بـ HTML للصفحة الجديدة
    // استخدام محتوى الصفحة الرئيسية كاحتياطي إذا لم يتم العثور على المفتاح
    contentArea.innerHTML = pageContent[pageKey] || pageContent.home;
    
    // 2. تحريك الانتقال (جعل المحتوى مرئياً)
    setTimeout(() => {
        const pageSection = contentArea.querySelector('.page-section');
        if (pageSection) {
            pageSection.classList.add('visible');
        }
    }, 50); // تأخير بسيط لتأثير الانتقال
}

// دالة لتحديث رابط التنقل النشط (الذي تم النقر عليه)
function updateActiveLink(activeLink) {
    // إزالة فئة "active" من جميع الروابط
    navLinks.forEach(link => link.classList.remove('active'));
    // إضافة فئة "active" للرابط الحالي
    activeLink.classList.add('active');
}

// مُستمع الحدث للنقر على روابط التنقل
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault(); // منع الرابط من إعادة تحميل الصفحة بالكامل
        
        const pageKey = e.target.getAttribute('data-page');
        if (pageKey) {
            // أولاً، إزالة المحتوى القديم بتأثير التلاشي
            const currentSection = contentArea.querySelector('.page-section.visible');
            if (currentSection) {
                currentSection.classList.remove('visible');
                // استخدام مؤقت قصير للانتظار حتى انتهاء التلاشي قبل تحميل المحتوى الجديد
                setTimeout(() => {
                    loadContent(pageKey);
                    updateActiveLink(e.target);
                }, 400); // يجب أن يتطابق هذا الوقت مع مدة انتقال CSS
            } else {
                loadContent(pageKey);
                updateActiveLink(e.target);
            }
        }
    });
});

// تحميل الصفحة "home" عندما يتم تحميل الموقع لأول مرة
document.addEventListener('DOMContentLoaded', () => {
    loadContent('home');
});