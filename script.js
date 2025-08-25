// --- MULTILINGUAL SCRIPT ---
const translations = {
    en: {
        loginTitle: "Login to IsharaPath", createAccountTitle: "Create Account", emailPlaceholder: "Email",
        passwordPlaceholder: "Password", loginBtn: "Login", registerBtn: "Register",
        invalidCredentialsError: "Invalid email or password.", emailExistsError: "This email is already registered.",
        dontHaveAccount: "Don't have an account?", alreadyHaveAccount: "Already have an account?",
        registerLink: "Register", loginLink: "Login", navHome: "Home", navLearning: "Learning",
        navQuiz: "Quiz", navChat: "Chat AI", navAbout: "About", navLogout: "Logout",
        heroTitle1: "IsharaPath", heroSubtitle1: "Isharon se Seekho, Duniya se Judo",
        heroTitle2: "Learn Sign Language", heroSubtitle2: "Interactive lessons for everyone",
        heroTitle3: "Connect & Communicate", heroSubtitle3: "Break barriers, build bridges",
        heroTitle4: "Empower Yourself", heroSubtitle4: "Confidence for everyday life",
        startBtn: "Start Now", learningTitle: "Learning Modules",
        learningSubtitle: "Test your knowledge for each module.", tagAlphabet: "Alphabet",
        tagConversation: "Conversation", moduleAE: "Alphabet (A-E)", moduleFJ: "Alphabet (F-J)",
        moduleGreetings: "Basic Greetings", modulePhrases: "Common Phrases", testBtn: "Test",
        testimonialsTitle: "Testimonials", testimonialsNote: "See what our users are saying about their learning journey with IsharaPath.",
        aboutTitle: "About :", aboutText: "Our team provides the earning for the Deaf people for their overall development for their future. It not only focuses on the desired people will work for the people who are interested in learning sign language also.",
        chatDisclaimer: "AI responses may not always be accurate. Please verify important information.",
        chatWelcome: "👋 Hello! I'm your AI assistant. How can I help you today?",
        chatPlaceholder: "Type your message here...", quizCompleted: "Quiz Completed!",
        restartQuiz: "Restart Quiz", questionCounterText: "Question {current} of {total}",
        scoreText: "You got {score} out of {total} correct.",
        footerDescription: "Breaking communication barriers through AI-powered sign language translation and learning.",
        footerQuickLinks: "Quick Links",
        footerContactUs: "Contact Us"
    },
    hi: {
        loginTitle: "इशारापथ में लॉगिन करें", createAccountTitle: "खाता बनाएं", emailPlaceholder: "ईमेल",
        passwordPlaceholder: "पासवर्ड", loginBtn: "लॉगिन करें", registerBtn: "पंजीकरण करें",
        invalidCredentialsError: "अमान्य ईमेल या पासवर्ड।", emailExistsError: "यह ईमेल पहले से पंजीकृत है।",
        dontHaveAccount: "खाता नहीं है?", alreadyHaveAccount: "पहले से ही एक खाता है?",
        registerLink: "पंजीकरण करें", loginLink: "लॉगिन करें", navHome: "होम", navLearning: "सीखना",
        navQuiz: "प्रश्नोत्तरी", navChat: "चैट एआई", navAbout: "हमारे बारे में", navLogout: "लॉग आउट",
        heroTitle1: "इशारापथ", heroSubtitle1: "इशारों से सीखो, दुनिया से जुड़ो",
        heroTitle2: "सांकेतिक भाषा सीखें", heroSubtitle2: "सभी के लिए इंटरैक्टिव पाठ",
        heroTitle3: "जुड़ें और संवाद करें", heroSubtitle3: "बाधाओं को तोड़ें, पुल बनाएं",
        heroTitle4: "खुद को सशक्त बनाएं", heroSubtitle4: "रोजमर्रा की जिंदगी के लिए आत्मविश्वास",
        startBtn: "अभी शुरू करें", learningTitle: "लर्निंग मॉड्यूल",
        learningSubtitle: "प्रत्येक मॉड्यूल के लिए अपने ज्ञान का परीक्षण करें।", tagAlphabet: "वर्णमाला",
        tagConversation: "बातचीत", moduleAE: "वर्णमाला (A-E)", moduleFJ: "वर्णमाला (F-J)",
        moduleGreetings: "मूल अभिवादन", modulePhrases: "सामान्य वाक्यांश", testBtn: "टेस्ट",
        testimonialsTitle: "प्रशंसापत्र", testimonialsNote: "देखें कि हमारे उपयोगकर्ता इशारापथ के साथ अपनी सीखने की यात्रा के बारे में क्या कह रहे हैं।",
        aboutTitle: "हमारे बारे में :", aboutText: "हमारी टीम बधिर लोगों को उनके भविष्य के समग्र विकास के लिए कमाई प्रदान करती है। यह न केवल वांछित लोगों पर ध्यान केंद्रित करता है, बल्कि उन लोगों के लिए भी काम करेगा जो सांकेतिक भाषा सीखने में रुचि रखते हैं।",
        chatDisclaimer: "एआई प्रतिक्रियाएं हमेशा सटीक नहीं हो सकती हैं। कृपया महत्वपूर्ण जानकारी सत्यापित करें।",
        chatWelcome: "👋 नमस्ते! मैं आपका एआई सहायक हूं। मैं आज आपकी कैसे मदद कर सकता हूं?",
        chatPlaceholder: "अपना संदेश यहां टाइप करें...", quizCompleted: "प्रश्नोत्तरी पूरी हुई!",
        restartQuiz: "प्रश्नोत्तरी पुनः आरंभ करें", questionCounterText: "प्रश्न {total} में से {current}",
        scoreText: "आपने {total} में से {score} सही किए।",
        footerDescription: "एआई-संचालित सांकेतिक भाषा अनुवाद और सीखने के माध्यम से संचार बाधाओं को तोड़ना।",
        footerQuickLinks: "त्वरित लिंक्स",
        footerContactUs: "संपर्क करें"
    }
};

function setLanguage(lang) {
    localStorage.setItem('selectedLanguage', lang);
    updateTextContent(lang);
}

function updateTextContent(lang) {
    const langDict = translations[lang];
    if (!langDict) return;

    document.querySelectorAll('[data-translate]').forEach(el => {
        const key = el.dataset.translate;
        if (langDict[key]) el.textContent = langDict[key];
    });

    document.querySelectorAll('[data-translate-placeholder]').forEach(el => {
        const key = el.dataset.translatePlaceholder;
        if (langDict[key]) el.placeholder = langDict[key];
    });

    // Update active state for language buttons
    document.querySelectorAll('.lang-switcher button').forEach(btn => {
        btn.classList.remove('active');
    });
    const activeBtn = document.getElementById(`lang-${lang}`);
    if (activeBtn) activeBtn.classList.add('active');
}

document.addEventListener('DOMContentLoaded', () => {
    const loginModal = document.getElementById('login-modal');
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');
    const loginError = document.getElementById('login-error');
    const registerError = document.getElementById('register-error');
    const showRegisterBtn = document.getElementById('show-register');
    const showLoginBtn = document.getElementById('show-login');
    const logoutBtn = document.getElementById('logout-btn');

    // --- Language Initialization ---
    const savedLang = localStorage.getItem('selectedLanguage') || 'en';
    updateTextContent(savedLang);

    // --- Authentication Logic ---

    // Check if user is logged in on page load
    if (sessionStorage.getItem('isLoggedIn') === 'true') {
        loginModal.classList.add('hidden');
        logoutBtn.style.display = 'block';
    } else {
        loginModal.classList.remove('hidden');
        logoutBtn.style.display = 'none';
    }

    // Switch to register view
    showRegisterBtn.addEventListener('click', () => {
        loginForm.style.display = 'none';
        registerForm.style.display = 'block';
    });

    // Switch to login view
    showLoginBtn.addEventListener('click', () => {
        registerForm.style.display = 'none';
        loginForm.style.display = 'block';
    });

    // Handle Registration
    registerForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.getElementById('register-email').value;
        const password = document.getElementById('register-password').value;
        
        const users = JSON.parse(localStorage.getItem('isharaUsers')) || [];
        const userExists = users.some(user => user.email === email);
        
        if (userExists) {
            registerError.style.display = 'block';
        } else {
            users.push({ email, password });
            localStorage.setItem('isharaUsers', JSON.stringify(users));
            // Replaced alert with console.log for silent operation in the preview environment
            console.log('Registration successful! Please log in.'); 
            registerError.style.display = 'none';
            showLoginBtn.click();
        }
    });

    // Handle Login
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.getElementById('login-email').value;
        const password = document.getElementById('login-password').value;

        const users = JSON.parse(localStorage.getItem('isharaUsers')) || [];
        const foundUser = users.find(user => user.email === email && user.password === password);

        if (foundUser) {
            sessionStorage.setItem('isLoggedIn', 'true');
            loginModal.classList.add('hidden');
            logoutBtn.style.display = 'block';
        } else {
            loginError.style.display = 'block';
        }
    });
    
    // Handle Logout
    logoutBtn.addEventListener('click', (e) => {
        e.preventDefault();
        sessionStorage.removeItem('isLoggedIn');
        location.reload();
    });


    // --- Sliders & Main Page Script ---
    let currentSlideIndex = 1;
    let slideInterval;
    function showSlide(n) {
        let slides = document.querySelectorAll('.slide');
        let bgSlides = document.querySelectorAll('.hero-bg-slide'); 
        let dots = document.querySelectorAll('.slider-dots .dot');
        if (n > slides.length) currentSlideIndex = 1;
        if (n < 1) currentSlideIndex = slides.length;
        slides.forEach(slide => slide.classList.remove('active'));
        bgSlides.forEach(slide => slide.classList.remove('active')); 
        dots.forEach(dot => dot.classList.remove('active'));
        slides[currentSlideIndex - 1].classList.add('active');
        bgSlides[currentSlideIndex - 1].classList.add('active'); 
        dots[currentSlideIndex - 1].classList.add('active');
    }
    function currentSlide(n) {
        clearInterval(slideInterval);
        currentSlideIndex = n;
        showSlide(currentSlideIndex);
        startAutoSlide();
    }
    function nextSlide() {
        currentSlideIndex++;
        showSlide(currentSlideIndex);
    }
    function startAutoSlide() {
        slideInterval = setInterval(nextSlide, 3000);
    }
    let currentTestimonialIndex = 0;
    let testimonialInterval;
    function showTestimonialSlide(n) {
        let testimonialSlides = document.querySelectorAll('.testimonial-slide');
        if (n >= testimonialSlides.length) currentTestimonialIndex = 0;
        if (n < 0) currentTestimonialIndex = testimonialSlides.length - 1;
        testimonialSlides.forEach(slide => slide.classList.remove('active'));
        testimonialSlides[currentTestimonialIndex].classList.add('active');
    }
    function nextTestimonialSlide() {
        currentTestimonialIndex++;
        showTestimonialSlide(currentTestimonialIndex);
    }
    function startTestimonialAutoSlide() {
        testimonialInterval = setInterval(nextTestimonialSlide, 5000);
    }
    const heroCard = document.querySelector('.hero-card');
    heroCard.addEventListener('mouseenter', () => clearInterval(slideInterval));
    heroCard.addEventListener('mouseleave', () => startAutoSlide());
    startAutoSlide();
    startTestimonialAutoSlide();

    // --- Chatbot Modal Script ---
    const chatbotModal = document.getElementById('chatbot-modal');
    const openChatBtn = document.getElementById('open-chat-btn');
    const footerChatLink = document.getElementById('footer-chat-link'); // Get footer link
    const closeChatBtn = document.getElementById('chatbot-close-btn');

    const openChatModal = (e) => {
        e.preventDefault();
        chatbotModal.classList.add('show');
    };

    openChatBtn.addEventListener('click', openChatModal);
    footerChatLink.addEventListener('click', openChatModal); // Add event listener to footer link

    closeChatBtn.addEventListener('click', () => {
        chatbotModal.classList.remove('show');
    });
    chatbotModal.addEventListener('click', (e) => {
        if (e.target === chatbotModal) {
            chatbotModal.classList.remove('show');
        }
    });
    const chatInput = document.querySelector(".chat-input");
    const sendBtn = document.querySelector(".send-btn");
    const chatbox = document.querySelector(".chatbox");
    let userMessage = null;
    const API_KEY = "YOUR_GEMINI_API_KEY"; // IMPORTANT: Replace with your actual API Key
    const API_URL = `https://generativelanguage.googleapis.com/v1/models/gemini-1.5-flash:generateContent?key=${API_KEY}`;
    const createChatLi = (message, className) => {
        const chatLi = document.createElement("li");
        chatLi.classList.add("chat", className);
        if (className === "outgoing") {
            chatLi.innerHTML = `<p>${message}</p><div class="avatar"></div>`;
        } else {
            chatLi.innerHTML = `<div class="avatar"><span class="material-symbols-outlined">smart_toy</span></div><p>${message}</p>`;
        }
        return chatLi;
    };
    const showTypingIndicator = () => {
        const typingLi = document.createElement("li");
        typingLi.classList.add("chat", "incoming");
        typingLi.innerHTML = `<div class="avatar"><span class="material-symbols-outlined">smart_toy</span></div><div class="typing-indicator"><div class="typing-dot"></div><div class="typing-dot"></div><div class="typing-dot"></div></div>`;
        return typingLi;
    };
    const generateResponse = async (chatElement) => {
        const requestOptions = { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ contents: [{ parts: [{ text: userMessage }] }] }), };
        try {
            const response = await fetch(API_URL, requestOptions);
            const data = await response.json();
            if (!response.ok) throw new Error(data.error?.message || "Unknown error occurred");
            const messageText = data.candidates[0].content.parts[0].text;
            const p = document.createElement('p');
            p.innerHTML = messageText.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
            chatElement.querySelector(".typing-indicator").replaceWith(p);
        } catch (error) {
            const p = chatElement.querySelector(".typing-indicator") || chatElement.appendChild(document.createElement('p'));
            p.classList.add("error");
            p.textContent = `Oops! Something went wrong: ${error.message}`;
        } finally {
            chatbox.scrollTo(0, chatbox.scrollHeight);
        }
    };
    const handleChat = () => {
        if (!chatInput || !chatbox) return;
        userMessage = chatInput.value.trim();
        if (!userMessage) return;
        chatInput.value = "";
        chatInput.style.height = "auto";
        chatbox.appendChild(createChatLi(userMessage, "outgoing"));
        chatbox.scrollTo(0, chatbox.scrollHeight);
        setTimeout(() => {
            const incomingChatLi = showTypingIndicator();
            chatbox.appendChild(incomingChatLi);
            chatbox.scrollTo(0, chatbox.scrollHeight);
            generateResponse(incomingChatLi);
        }, 600);
    };
    if (chatInput) {
        chatInput.addEventListener("input", () => {
            chatInput.style.height = "auto";
            chatInput.style.height = chatInput.scrollHeight + "px";
        });
        chatInput.addEventListener("keydown", (e) => {
            if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); handleChat(); }
        });
    }
    if (sendBtn) {
        sendBtn.addEventListener("click", handleChat);
    }

    // --- QUIZ SCRIPT ---
    const quizData = {
        "alphabet-a-e": [
            { imageUrl: "images/A.png", options: ["A", "B", "E", "C"], correctAnswer: "A" },
            { imageUrl: "images/B.png", options: ["D", "B", "A", "E"], correctAnswer: "B" },
            { imageUrl: "images/C.png", options: ["C", "E", "D", "A"], correctAnswer: "C" },
            { imageUrl: "images/D.png", options: ["B", "E", "D", "C"], correctAnswer: "D" },
            { imageUrl: "images/E.png", options: ["A", "B", "C", "E"], correctAnswer: "E" }
        ],
        "alphabet-f-j": [
            { imageUrl: "images/F.png", options: ["H", "F", "I", "G"], correctAnswer: "F" },
            { imageUrl: "images/G.png", options: ["G", "J", "F", "I"], correctAnswer: "G" },
            { imageUrl: "images/H.png", options: ["I", "F", "H", "J"], correctAnswer: "H" },
            { imageUrl: "images/I.png", options: ["F", "I", "G", "H"], correctAnswer: "I" },
            { imageUrl: "images/J.png", options: ["J", "G", "H", "F"], correctAnswer: "J" }
        ],
        "basic-greetings": [
            { imageUrl: "images/hello.png", options: ["Hello", "Goodbye", "Thank You", "Sorry"], correctAnswer: "Hello" },
            { imageUrl: "images/thank-you.png", options: ["Sorry", "Please", "Thank You", "Welcome"], correctAnswer: "Thank You" },
            { imageUrl: "images/please.png", options: ["Yes", "No", "Maybe", "Please"], correctAnswer: "Please" },
            { imageUrl: "images/goodbye.png", options: ["Hello", "Goodbye", "Good Morning", "Good Night"], correctAnswer: "Goodbye" },
        ],
        "common-phrases": [
            { imageUrl: "images/how-are-you.png", options: ["What is your name?", "How are you?", "Where are you from?", "I am fine"], correctAnswer: "How are you?" },
            { imageUrl: "images/my-name-is.png", options: ["My name is...", "I am learning", "I need help", "What time is it?"], correctAnswer: "My name is..." },
            { imageUrl: "images/yes.png", options: ["Maybe", "No", "Please", "Yes"], correctAnswer: "Yes" },
            { imageUrl: "images/no.png", options: ["No", "Wait", "Again", "Friend"], correctAnswer: "No" },
            { imageUrl: "images/help.png", options: ["Stop", "Go", "Help", "Water"], correctAnswer: "Help" }
        ]
    };

    const quizModal = document.getElementById('quiz-modal');
    const openQuizBtn = document.getElementById('open-quiz-btn');
    const footerQuizLink = document.querySelector('.footer-column.links a[href="#open-quiz-btn"]');
    const closeQuizBtn = document.getElementById('quiz-close-btn');
    const testButtons = document.querySelectorAll('.module-button.test');
    
    let activeModuleElements = null;

    const openQuizModal = (e) => {
         e.preventDefault();
        activeModuleElements = null;
        const questions = quizData['basic-greetings'];
        if (questions) {
            startQuiz(questions);
            quizModal.classList.add('show');
        }
    };
    openQuizBtn.addEventListener('click', openQuizModal);
    footerQuizLink.addEventListener('click', openQuizModal);
    
    testButtons.forEach(button => {
        button.addEventListener('click', () => {
            const quizId = button.dataset.quizId;
            const moduleElement = button.closest('.learning-module');
            
            activeModuleElements = {
                bar: moduleElement.querySelector('.progress-bar'),
                text: moduleElement.querySelector('.progress-text')
            };

            const questions = quizData[quizId];
            if (questions) {
                startQuiz(questions);
                quizModal.classList.add('show');
            } else {
                console.log('Quiz for this module is not available yet.'); // Replaced alert
            }
        });
    });

    closeQuizBtn.addEventListener('click', () => {
        quizModal.classList.remove('show');
        activeModuleElements = null;
    });
    
    quizModal.addEventListener('click', (e) => {
        if (e.target === quizModal) {
            quizModal.classList.remove('show');
            activeModuleElements = null;
        }
    });
    
    const progressBar = document.getElementById('progress-bar');
    const progressBarText = document.getElementById('progress-bar-text');
    const questionCounter = document.getElementById('question-counter');
    const questionImage = document.getElementById('question-image');
    const optionsGrid = document.getElementById('options-grid');
    const quizGameContainer = document.getElementById('quiz-game');
    const resultContainer = document.getElementById('result-container');
    const scoreText = document.getElementById('score-text');
    const restartBtn = document.getElementById('restart-btn');

    let currentQuestionIndex = 0;
    let score = 0;
    let totalQuestions = 0;
    let activeQuestions = [];

    function startQuiz(questionsArray) {
        activeQuestions = questionsArray;
        totalQuestions = activeQuestions.length;
        currentQuestionIndex = 0;
        score = 0;
        quizGameContainer.style.display = 'block';
        resultContainer.style.display = 'none';
        updateProgressBar();
        loadQuestion();
    }

    function loadQuestion() {
        if (currentQuestionIndex >= totalQuestions) {
            showResults();
            return;
        }
        const lang = localStorage.getItem('selectedLanguage') || 'en';
        const currentQuestion = activeQuestions[currentQuestionIndex];
        questionCounter.textContent = translations[lang].questionCounterText
            .replace('{current}', currentQuestionIndex + 1)
            .replace('{total}', totalQuestions);
        questionImage.src = currentQuestion.imageUrl;
        questionImage.onerror = () => {
            questionImage.src = `https://placehold.co/400x300/fecaca/991b1b?text=Image+Not+Found`;
        };
        optionsGrid.innerHTML = '';
        currentQuestion.options.forEach(option => {
            const button = document.createElement('button');
            button.textContent = option;
            button.classList.add('option-btn');
            button.addEventListener('click', () => selectAnswer(button, option, currentQuestion.correctAnswer));
            optionsGrid.appendChild(button);
        });
    }

    function selectAnswer(button, selectedOption, correctAnswer) {
        const optionButtons = document.querySelectorAll('.option-btn');
        optionButtons.forEach(btn => btn.disabled = true);
        if (selectedOption === correctAnswer) {
            score++;
            button.classList.add('correct');
            updateProgressBar();
        } else {
            button.classList.add('incorrect');
            optionButtons.forEach(btn => {
                if (btn.textContent === correctAnswer) {
                    btn.classList.add('correct');
                }
            });
        }
        setTimeout(() => {
            currentQuestionIndex++;
            loadQuestion();
        }, 1500);
    }

    function updateProgressBar() {
        const percentage = totalQuestions > 0 ? (score / totalQuestions) * 100 : 0;
        progressBar.style.width = `${percentage}%`;
        progressBarText.textContent = `${Math.round(percentage)}%`;
    }
    
    function showResults() {
        quizGameContainer.style.display = 'none';
        resultContainer.style.display = 'block';
        const lang = localStorage.getItem('selectedLanguage') || 'en';
        scoreText.textContent = translations[lang].scoreText
            .replace('{score}', score)
            .replace('{total}', totalQuestions);

        if (activeModuleElements) {
            const finalPercentage = totalQuestions > 0 ? (score / totalQuestions) * 100 : 0;
            activeModuleElements.bar.style.width = `${finalPercentage}%`;
            activeModuleElements.text.textContent = `${Math.round(finalPercentage)}%`;
        }
    }

    restartBtn.addEventListener('click', () => {
        if (activeQuestions.length > 0) {
            startQuiz(activeQuestions);
        }
    });
});
