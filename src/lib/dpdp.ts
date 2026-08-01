// Sweeyam Life — DPDP consent translations (10 languages).
// Consent + notice text for the Sweeyam Circle form.

export const DPDP_LANGUAGES = [
  { code: 'en', label: 'English' },
  { code: 'hi', label: 'हिंदी (Hindi)' },
  { code: 'te', label: 'తెలుగు (Telugu)' },
  { code: 'mr', label: 'मराठी (Marathi)' },
  { code: 'bn', label: 'বাংলা (Bengali)' },
  { code: 'ta', label: 'தமிழ் (Tamil)' },
  { code: 'kn', label: 'ಕನ್ನಡ (Kannada)' },
  { code: 'ml', label: 'മലയാളം (Malayalam)' },
  { code: 'gu', label: 'ગુજરાતી (Gujarati)' },
  { code: 'pa', label: 'ਪੰਜਾਬੀ (Punjabi)' },
] as const;

type LangCode = (typeof DPDP_LANGUAGES)[number]['code'];

export type { LangCode };

export const DPDP_TRANSLATIONS: Record<
  LangCode,
  { consent: string; notice: string; policyKeyword: string }
> = {
  en: {
    consent:
      'I agree to receive occasional Sweeyam Life updates and understand that I can withdraw my consent at any time.',
    notice:
      'Google Forms and its linked Google Sheet will process and store your response. You can withdraw your consent at any time by emailing {email}. Read our {policy}.',
    policyKeyword: 'Privacy Policy',
  },
  hi: {
    consent:
      'मैं कभी-कभार स्वीयम लाइफ के अपडेट प्राप्त करने के लिए सहमत हूँ और समझता/समझती हूँ कि मैं किसी भी समय अपनी सहमति वापस ले सकता/सकती हूँ।',
    notice:
      'Google Forms और इससे जुड़ी Google Sheet आपकी प्रतिक्रिया को प्रोसेस और स्टोर करेगी। आप {email} पर ईमेल करके कभी भी अपनी सहमति वापस ले सकते हैं। हमारी {policy} पढ़ें।',
    policyKeyword: 'गोपनीयता नीति',
  },
  te: {
    consent:
      'నేను అప్పుడప్పుడు స్వీయమ్ లైఫ్ అప్‌డేట్‌లను స్వీకరించడానికి అంగీకరిస్తున్నాను మరియు నా సమ్మతిని ఏ సమయంలోనైనా ఉపసంహరించుకోవచ్చని అర్థం చేసుకున్నాను.',
    notice:
      'Google Forms మరియు దానికి లింక్ చేయబడిన Google Sheet మీ ప్రతిస్పందనను ప్రాసెస్ చేస్తాయి మరియు నిల్వ చేస్తాయి. మీరు {email} కు ఇమెయిల్ చేయడం ద్వారా ఎప్పుడైనా మీ సమ్మతిని ఉపసంహరించుకోవచ్చు. మా {policy} చదవండి.',
    policyKeyword: 'గోప్యతా విధానాన్ని',
  },
  mr: {
    consent:
      'मी अधूनमधून स्वीयम लाईफचे अपडेट्स प्राप्त करण्यास सहमत आहे आणि समजतो/समजते की मी कधीही माझी सहमती मागे घेऊ शकतो/शकते.',
    notice:
      'Google Forms आणि त्याशी जोडलेली Google Sheet तुमचा प्रतिसाद प्रोसेस आणि स्टोअर करतील. तुम्ही {email} वर ईमेल करून कधीही तुमची सहमती मागे घेऊ शकता. आमचे {policy} वाचा.',
    policyKeyword: 'गोपनीयता धोरण',
  },
  bn: {
    consent:
      'আমি মাঝেমধ্যে সুইয়াম লাইফ-এর আপডেট পেতে সম্মত আছি এবং বুঝতে পারছি যে আমি যেকোনো সময় আমার সম্মতি প্রত্যাহার করতে পারি।',
    notice:
      'Google Forms এবং এর সাথে যুক্ত Google Sheet আপনার প্রতিক্রিয়া প্রক্রিয়া এবং সংরক্ষণ করবে। আপনি {email} এ ইমেল করে যেকোনো সময় আপনার সম্মতি প্রত্যাহার করতে পারেন। আমাদের {policy} পড়ুন।',
    policyKeyword: 'গোপনীয়তা নীতি',
  },
  ta: {
    consent:
      'நான் அவ்வப்போது ஸ்வீயம் லைஃப் புதுப்பிப்புகளைப் பெற ஒப்புக்கொள்கிறேன், மேலும் எனது சம்மதத்தை எப்போது வேண்டுமானாலும் திரும்பப் பெற்றுக்கொள்ளலாம் என்பதைப் புரிந்துகொள்கிறேன்.',
    notice:
      'Google Forms மற்றும் அதனுடன் இணைக்கப்பட்ட Google Sheet உங்கள் பதிலைச் செயலாக்கி சேமிக்கும். {email} என்ற மின்னஞ்சலுக்கு அனுப்புவதன் மூலம் எப்போது வேண்டுமானாலும் உங்கள் சம்மதத்தைத் திரும்பப் பெற்றுக்கொள்ளலாம். எங்கள் {policy} படிக்கவும்.',
    policyKeyword: 'தனியுரிமைக் கொள்கையை',
  },
  kn: {
    consent:
      'ನಾನು ಸಾಂದರ್ಭಿಕ Sweeyam Life ನವೀಕರಣಗಳನ್ನು ಸ್ವೀಕರಿಸಲು ಒಪ್ಪುತ್ತೇನೆ ಮತ್ತು ಯಾವುದೇ ಸಮಯದಲ್ಲಿ ನನ್ನ ಒಪ್ಪಿಗೆಯನ್ನು ಹಿಂಪಡೆಯಬಹುದು ಎಂದು ಅರ್ಥಮಾಡಿಕೊಂಡಿದ್ದೇನೆ.',
    notice:
      'Google Forms ಮತ್ತು ಅದಕ್ಕೆ ಲಿಂಕ್ ಮಾಡಿರುವ Google Sheet ನಿಮ್ಮ ಪ್ರತಿಕ್ರಿಯೆಯನ್ನು ಪ್ರಕ್ರಿಯೆಗೊಳಿಸುತ್ತವೆ ಮತ್ತು ಸಂಗ್ರಹಿಸುತ್ತವೆ. ನೀವು {email} ಗೆ ಇಮೇಲ್ ಮಾಡುವ ಮೂಲಕ ಯಾವುದೇ ಸಮಯದಲ್ಲಿ ನಿಮ್ಮ ಒಪ್ಪಿಗೆಯನ್ನು ಹಿಂಪಡೆಯಬಹುದು. ನಮ್ಮ {policy} ಓದಿ.',
    policyKeyword: 'ಗೌಪ್ಯತಾ ನೀತಿಯನ್ನು',
  },
  ml: {
    consent:
      'ആനുകാലിക Sweeyam Life അപ്‌ഡേറ്റുകൾ സ്വീകരിക്കാൻ ഞാൻ സമ്മതിക്കുന്നു, എപ്പോൾ വേണമെങ്കിലും എൻ്റെ സമ്മതം പിൻവലിക്കാമെന്ന് ഞാൻ മനസ്സിലാക്കുന്നു.',
    notice:
      'Google Forms-ഉം അതിലേക്ക് ലിങ്ക് ചെയ്‌തിരിക്കുന്ന Google Sheet-ഉം നിങ്ങളുടെ പ്രതികരണം പ്രോസസ്സ് ചെയ്യുകയും സംഭരിക്കുകയും ചെയ്യും. {email} എന്ന വിലാസത്തിലേക്ക് ഇമെയിൽ ചെയ്തുകൊണ്ട് നിങ്ങൾക്ക് എപ്പോൾ വേണമെങ്കിലും നിങ്ങളുടെ സമ്മതം പിൻവലിക്കാവുന്നതാണ്. ഞങ്ങളുടെ {policy} വായിക്കുക.',
    policyKeyword: 'സ്വകാര്യതാ നയം',
  },
  gu: {
    consent:
      'હું સમયાંતરે Sweeyam Life ના અપડેટ્સ મેળવવા માટે સંમત છું અને સમજું છું કે હું કોઈપણ સમયે મારી સંમતિ પાછી ખેંચી શકું છું.',
    notice:
      'Google Forms અને તેની સાથે જોડાયેલી Google Sheet તમારા પ્રતિભાવને પ્રક્રિયા અને સંગ્રહિત કરશે. તમે {email} પર ઇમેઇલ કરીને કોઈપણ સમયે તમારી સંમતિ પાછી ખેંચી શકો છો. અમારી {policy} વાંચો.',
    policyKeyword: 'ગોપનીયતા નીતિ',
  },
  pa: {
    consent:
      "ਮੈਂ ਸਮੇਂ-ਸਮੇਂ 'ਤੇ Sweeyam Life ਦੇ ਅੱਪਡੇਟ ਪ੍ਰਾਪਤ ਕਰਨ ਲਈ ਸਹਿਮਤ ਹਾਂ ਅਤੇ ਸਮਝਦਾ ਹਾਂ ਕਿ ਮੈਂ ਕਿਸੇ ਵੀ ਸਮੇਂ ਆਪਣੀ ਸਹਿਮਤੀ ਵਾਪਸ ਲੈ ਸਕਦਾ ਹਾਂ।",
    notice:
      "Google Forms ਅਤੇ ਇਸ ਨਾਲ ਜੁੜੀ Google Sheet ਤੁਹਾਡੇ ਜਵਾਬ ਨੂੰ ਪ੍ਰੋਸੈਸ ਅਤੇ ਸਟੋਰ ਕਰੇਗੀ। ਤੁਸੀਂ {email} 'ਤੇ ਈਮੇਲ ਕਰਕੇ ਕਿਸੇ ਵੀ ਸਮੇਂ ਆਪਣੀ ਸਹਿਮਤੀ ਵਾਪਸ ਲੈ ਸਕਦੇ ਹੋ। ਸਾਡੀ {policy} ਪੜ੍ਹੋ।",
    policyKeyword: 'ਗੋਪਨੀਯਤਾ ਨੀਤੀ',
  },
};

export const DPDP_DEFAULT_LANG: LangCode = 'en';
