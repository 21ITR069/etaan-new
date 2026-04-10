import React, { useState, useRef, useEffect } from 'react';

const QA_DATA = [
  { q: ["hi", "hello", "hey", "good morning", "good afternoon", "good evening"], a: "Hello! Welcome to Etaan Consultants. How can I help you today? Whether you're looking to start a security career, upgrade your certification, or find out about our courses, I'm here to help! 😊" },
  { q: ["how are you", "how's it going"], a: "I'm doing great, thank you for asking! I'm here and ready to help you with anything related to your security career journey. What can I assist you with today?" },
  { q: ["who are you", "what are you"], a: "I'm Etaan's AI assistant! I'm here to help you navigate your security career in Singapore — from understanding course requirements to finding the right WSQ training for your goals. Ask me anything!" },
  { q: ["what is etaan", "tell me about etaan", "about etaan"], a: "Etaan Consultants Pte Ltd is a SkillsFuture Singapore (SSG)-Approved Training Organisation (ATO) based in Singapore. We offer WSQ-certified security training courses aligned with the Progressive Wage Model (PWM). We also provide SACE consultancy services for Security Agencies. Our mission is to make your security career journey clear, affordable, and stress-free." },
  { q: ["what do you do", "what does etaan do", "your services"], a: "Great question! Etaan does two main things:\n1. We provide WSQ-certified security training courses for individuals entering or advancing in the security industry.\n2. We offer SACE consultancy services helping Security Agencies pass their licensing audits." },
  { q: ["where are you located", "location", "address", "where is etaan"], a: "You can find us at:\n📍 12 Arumugam Road, LTC Building B, #02-02G, Singapore 409958\n📞 (+65) 6741 2792 / 8733 1539\n📧 admin@etannsg.com" },
  { q: ["operating hours", "what time", "opening hours", "business hours"], a: "Our office hours are Monday to Friday, 9am – 6pm. You can also reach us anytime via WhatsApp or email and we'll get back to you as soon as possible!" },
  { q: ["contact", "how can i contact", "phone number", "email", "whatsapp"], a: "You can reach us through:\n📞 Phone: (+65) 6741 2792\n📱 WhatsApp: 8733 1539\n📧 Email: admin@etannsg.com\n📍 Visit us at 12 Arumugam Road, LTC Building B, #02-02G, Singapore 409958" },
  { q: ["thank you", "thanks", "thank u"], a: "You're most welcome! If you have any more questions, feel free to ask anytime. Good luck on your security career journey! 🌟" },
  { q: ["bye", "goodbye", "see you", "see ya"], a: "Goodbye! It was great chatting with you. Feel free to come back anytime you have questions. Wishing you all the best in your security career! 👋" },
  { q: ["ok", "noted", "understood", "okay", "got it"], a: "Great! Let me know if there's anything else I can help you with." },
  { q: ["can you help me", "help", "i need help", "assist me"], a: "Absolutely! I'm here to help. You can ask me about our courses, fees, schedules, how to become a Security Officer, PLRD licensing, SkillsFuture funding, and more. What would you like to know?" },
  { q: ["how to become a security officer", "become security officer", "security officer singapore", "how do i become"], a: "Here's the step-by-step process:\n1. Apply for a Security Officer licence through PLRD via GoBusiness Licensing (Cost: $16)\n2. Complete the 3 Basic Licensing Unit (BLU) courses:\n   • PGPS & OBSE (Guard & Patrol + Access Control)\n   • HSIS (Handle Security Incidents and Services)\n   • RTT (Recognise Terrorist Threats)\n3. Apply for your Security ID at the Union of Security Employees (USE) Customer Service Centre (Cost: $22.50)" },
  { q: ["what is plrd", "plrd meaning", "plrd"], a: "PLRD stands for the Police Licensing & Regulatory Department. It's the government body in Singapore that regulates the security industry and issues Security Officer licences." },
  { q: ["security id", "how to apply security id", "apply security id"], a: "After your PLRD application is approved and you've completed your 3 BLU courses, visit the Union of Security Employees (USE) Customer Service Centre. Cost: $22.50." },
  { q: ["blu courses", "what are blu courses", "basic licensing unit"], a: "BLU stands for Basic Licensing Unit. There are 3 compulsory courses: PGPS & OBSE ($395), HSIS ($320), and RTT ($380)." },
  { q: ["course fees", "how much do courses cost"], a: "Core courses cost between $320 and $450 before subsidies. Singaporeans and PRs are eligible for significant funding. Contact us for a personalized fee table!" },
  { q: ["funding", "subsidies", "skillsfuture"], a: "Funding options include SSG Subsidies, SkillsFuture Credit, UTAP for NTUC members, and PSEA. Most Singaporeans pay significantly less than the full fee." },
  { q: ["pwm", "progressive wage model"], a: "The Progressive Wage Model (PWM) is a 5-level career framework for security officers in Singapore, linking skills to salary increments." },
  { q: ["speak to person", "real person", "human helper"], a: "Of course! Call us at (+65) 6741 2792 or WhatsApp 8733 1539 to speak with our team directly." },
];

const QUICK_QUESTIONS = [
  "How to become a Security Officer?",
  "What are the BLU courses?",
  "How much do courses cost?",
  "Where are you located?",
  "What funding is available?",
  "What is PLRD?",
  "Career progression path?",
  "Weekend courses available?",
];

const RobotIcon = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="11" width="18" height="10" rx="2" />
    <circle cx="12" cy="5" r="2" />
    <path d="M12 7v4" />
    <line x1="8" y1="16" x2="8" y2="16" strokeWidth="3" />
    <line x1="16" y1="16" x2="16" y2="16" strokeWidth="3" />
    <path d="M9 21v1" />
    <path d="M15 21v1" />
    <path d="M3 15h-2" />
    <path d="M23 15h-2" />
  </svg>
);

const MicIcon = ({ size = 18, listening = false }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={listening ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="9" y="1" width="6" height="12" rx="3" />
    <path d="M19 10v2a7 7 0 01-14 0v-2" />
    <line x1="12" y1="19" x2="12" y2="23" />
    <line x1="8" y1="23" x2="16" y2="23" />
  </svg>
);

function findAnswer(input) {
  const lower = input.toLowerCase().trim();
  let bestMatch = null;
  let bestScore = 0;

  for (const entry of QA_DATA) {
    for (const keyword of entry.q) {
      if (lower === keyword) return entry.a;
      if (lower.includes(keyword)) {
        const score = keyword.length;
        if (score > bestScore) { bestScore = score; bestMatch = entry.a; }
      }
    }
  }
  if (bestMatch) return bestMatch;

  return "I'm sorry, I don't have an answer for that yet. You can reach our team directly at admin@etannsg.com or call (+65) 6741 2792.";
}

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'bot', text: "Hello! 👋 I'm Etaan's AI assistant. How can I help you today?" }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  const handleSend = (text) => {
    const msgText = text || input.trim();
    if (!msgText) return;

    setMessages(prev => [...prev, { role: 'user', text: msgText }]);
    setInput('');
    setIsTyping(true);

    setTimeout(() => {
      const answer = findAnswer(msgText);
      setMessages(prev => [...prev, { role: 'bot', text: answer }]);
      setIsTyping(false);
    }, 600);
  };

  return (
    <div className="chatbot-wrapper">
      {/* Toggle Button */}
      <button 
        className={`chatbot-toggle ${isOpen ? 'active' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? (
          <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
          </svg>
        ) : (
          <RobotIcon size={28} />
        )}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="chatbot-window">
          <div className="chatbot-header">
            <div className="bot-avatar">
              <RobotIcon size={20} />
            </div>
            <div className="bot-info">
              <span className="bot-name">Etaan Assistant</span>
              <span className="bot-status"><span className="status-dot"></span> Online</span>
            </div>
          </div>

          <div className="chatbot-messages">
            {messages.map((msg, i) => (
              <div key={i} className={`message-row ${msg.role}`}>
                <div className="message-content">
                  {msg.text}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="message-row bot">
                <div className="message-content typing-indicator">
                  <span></span><span></span><span></span>
                </div>
              </div>
            )}
            
            {messages.length === 1 && !isTyping && (
                <div className="quick-questions">
                    {QUICK_QUESTIONS.map((q, i) => (
                        <button key={i} onClick={() => handleSend(q)} className="quick-q-btn">
                            {q}
                        </button>
                    ))}
                </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className="chatbot-input-area">
            <input 
              ref={inputRef}
              type="text" 
              placeholder="Ask a question..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            />
            <button className="btn-send" onClick={() => handleSend()}>
                <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/>
                </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
