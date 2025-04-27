export type QuizOption = {
  value: string
  label: string
}

export type QuizQuestion = {
  question: string
  options: QuizOption[]
  correctAnswer: string
  category: "general-knowledge" | "health" | "current-affairs" | "national" | "syllabus"
  studentLevel: "5-7" | "8-10" | "11-12" | "undergrad"
}

// Sample quiz questions for different categories and student levels
const quizQuestions: QuizQuestion[] = [
  // General Knowledge Questions - 5th to 7th
  {
    question: "What is the largest planet in our solar system?",
    options: [
      { value: "earth", label: "Earth" },
      { value: "jupiter", label: "Jupiter" },
      { value: "saturn", label: "Saturn" },
      { value: "mars", label: "Mars" },
    ],
    correctAnswer: "jupiter",
    category: "general-knowledge",
    studentLevel: "5-7",
  },
  {
    question: "Which of these is NOT a type of triangle?",
    options: [
      { value: "equilateral", label: "Equilateral" },
      { value: "isosceles", label: "Isosceles" },
      { value: "scalene", label: "Scalene" },
      { value: "rectangular", label: "Rectangular" },
    ],
    correctAnswer: "rectangular",
    category: "general-knowledge",
    studentLevel: "5-7",
  },
  {
    question: "Who wrote 'Alice in Wonderland'?",
    options: [
      { value: "lewis-carroll", label: "Lewis Carroll" },
      { value: "j-k-rowling", label: "J.K. Rowling" },
      { value: "roald-dahl", label: "Roald Dahl" },
      { value: "enid-blyton", label: "Enid Blyton" },
    ],
    correctAnswer: "lewis-carroll",
    category: "general-knowledge",
    studentLevel: "5-7",
  },
  {
    question: "What is the capital of Japan?",
    options: [
      { value: "beijing", label: "Beijing" },
      { value: "seoul", label: "Seoul" },
      { value: "tokyo", label: "Tokyo" },
      { value: "bangkok", label: "Bangkok" },
    ],
    correctAnswer: "tokyo",
    category: "general-knowledge",
    studentLevel: "5-7",
  },
  {
    question: "Which instrument has 88 keys?",
    options: [
      { value: "guitar", label: "Guitar" },
      { value: "violin", label: "Violin" },
      { value: "piano", label: "Piano" },
      { value: "flute", label: "Flute" },
    ],
    correctAnswer: "piano",
    category: "general-knowledge",
    studentLevel: "5-7",
  },

  // General Knowledge Questions - 8th to 10th
  {
    question: "What is the chemical symbol for gold?",
    options: [
      { value: "go", label: "Go" },
      { value: "au", label: "Au" },
      { value: "ag", label: "Ag" },
      { value: "gd", label: "Gd" },
    ],
    correctAnswer: "au",
    category: "general-knowledge",
    studentLevel: "8-10",
  },
  {
    question: "Which ancient civilization built the pyramids of Giza?",
    options: [
      { value: "romans", label: "Romans" },
      { value: "greeks", label: "Greeks" },
      { value: "egyptians", label: "Egyptians" },
      { value: "mayans", label: "Mayans" },
    ],
    correctAnswer: "egyptians",
    category: "general-knowledge",
    studentLevel: "8-10",
  },
  {
    question: "Who painted the Mona Lisa?",
    options: [
      { value: "van-gogh", label: "Vincent Van Gogh" },
      { value: "da-vinci", label: "Leonardo da Vinci" },
      { value: "picasso", label: "Pablo Picasso" },
      { value: "michelangelo", label: "Michelangelo" },
    ],
    correctAnswer: "da-vinci",
    category: "general-knowledge",
    studentLevel: "8-10",
  },
  {
    question: "What is the largest ocean on Earth?",
    options: [
      { value: "atlantic", label: "Atlantic Ocean" },
      { value: "indian", label: "Indian Ocean" },
      { value: "arctic", label: "Arctic Ocean" },
      { value: "pacific", label: "Pacific Ocean" },
    ],
    correctAnswer: "pacific",
    category: "general-knowledge",
    studentLevel: "8-10",
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: [
      { value: "venus", label: "Venus" },
      { value: "mars", label: "Mars" },
      { value: "jupiter", label: "Jupiter" },
      { value: "saturn", label: "Saturn" },
    ],
    correctAnswer: "mars",
    category: "general-knowledge",
    studentLevel: "8-10",
  },

  // General Knowledge Questions - 11th and 12th
  {
    question: "Who developed the theory of relativity?",
    options: [
      { value: "newton", label: "Isaac Newton" },
      { value: "einstein", label: "Albert Einstein" },
      { value: "galileo", label: "Galileo Galilei" },
      { value: "hawking", label: "Stephen Hawking" },
    ],
    correctAnswer: "einstein",
    category: "general-knowledge",
    studentLevel: "11-12",
  },
  {
    question: "Which element has the chemical symbol 'O'?",
    options: [
      { value: "osmium", label: "Osmium" },
      { value: "oxygen", label: "Oxygen" },
      { value: "gold", label: "Gold" },
      { value: "silver", label: "Silver" },
    ],
    correctAnswer: "oxygen",
    category: "general-knowledge",
    studentLevel: "11-12",
  },
  {
    question: "Who wrote 'Romeo and Juliet'?",
    options: [
      { value: "charles-dickens", label: "Charles Dickens" },
      { value: "william-shakespeare", label: "William Shakespeare" },
      { value: "jane-austen", label: "Jane Austen" },
      { value: "mark-twain", label: "Mark Twain" },
    ],
    correctAnswer: "william-shakespeare",
    category: "general-knowledge",
    studentLevel: "11-12",
  },
  {
    question: "What is the capital of Australia?",
    options: [
      { value: "sydney", label: "Sydney" },
      { value: "melbourne", label: "Melbourne" },
      { value: "canberra", label: "Canberra" },
      { value: "perth", label: "Perth" },
    ],
    correctAnswer: "canberra",
    category: "general-knowledge",
    studentLevel: "11-12",
  },
  {
    question: "Which of these is not a programming language?",
    options: [
      { value: "java", label: "Java" },
      { value: "python", label: "Python" },
      { value: "html", label: "HTML" },
      { value: "photoshop", label: "Photoshop" },
    ],
    correctAnswer: "photoshop",
    category: "general-knowledge",
    studentLevel: "11-12",
  },

  // General Knowledge Questions - Undergrad
  {
    question: "Who is credited with inventing the World Wide Web?",
    options: [
      { value: "bill-gates", label: "Bill Gates" },
      { value: "steve-jobs", label: "Steve Jobs" },
      { value: "tim-berners-lee", label: "Tim Berners-Lee" },
      { value: "mark-zuckerberg", label: "Mark Zuckerberg" },
    ],
    correctAnswer: "tim-berners-lee",
    category: "general-knowledge",
    studentLevel: "undergrad",
  },
  {
    question: "Which of these is not a fundamental force in physics?",
    options: [
      { value: "gravity", label: "Gravity" },
      { value: "electromagnetism", label: "Electromagnetism" },
      { value: "strong-nuclear", label: "Strong Nuclear Force" },
      { value: "centrifugal", label: "Centrifugal Force" },
    ],
    correctAnswer: "centrifugal",
    category: "general-knowledge",
    studentLevel: "undergrad",
  },
  {
    question: "What is the study of the universe called?",
    options: [
      { value: "astronomy", label: "Astronomy" },
      { value: "astrology", label: "Astrology" },
      { value: "cosmology", label: "Cosmology" },
      { value: "astrophysics", label: "Astrophysics" },
    ],
    correctAnswer: "cosmology",
    category: "general-knowledge",
    studentLevel: "undergrad",
  },
  {
    question: "Which philosopher is known for 'I think, therefore I am'?",
    options: [
      { value: "plato", label: "Plato" },
      { value: "aristotle", label: "Aristotle" },
      { value: "descartes", label: "René Descartes" },
      { value: "kant", label: "Immanuel Kant" },
    ],
    correctAnswer: "descartes",
    category: "general-knowledge",
    studentLevel: "undergrad",
  },
  {
    question: "What is the most abundant element in the universe?",
    options: [
      { value: "oxygen", label: "Oxygen" },
      { value: "carbon", label: "Carbon" },
      { value: "hydrogen", label: "Hydrogen" },
      { value: "helium", label: "Helium" },
    ],
    correctAnswer: "hydrogen",
    category: "general-knowledge",
    studentLevel: "undergrad",
  },

  // Health Questions - 5th to 7th
  {
    question: "What is the main function of the lungs?",
    options: [
      { value: "pump-blood", label: "Pump blood" },
      { value: "digest-food", label: "Digest food" },
      { value: "exchange-gases", label: "Exchange gases" },
      { value: "filter-waste", label: "Filter waste" },
    ],
    correctAnswer: "exchange-gases",
    category: "health",
    studentLevel: "5-7",
  },
  {
    question: "Which food group should form the largest portion of your diet?",
    options: [
      { value: "fruits", label: "Fruits" },
      { value: "vegetables", label: "Vegetables" },
      { value: "grains", label: "Grains" },
      { value: "proteins", label: "Proteins" },
    ],
    correctAnswer: "grains",
    category: "health",
    studentLevel: "5-7",
  },
  {
    question: "How many hours of sleep should a child your age get each night?",
    options: [
      { value: "5-6", label: "5-6 hours" },
      { value: "7-8", label: "7-8 hours" },
      { value: "9-11", label: "9-11 hours" },
      { value: "12-14", label: "12-14 hours" },
    ],
    correctAnswer: "9-11",
    category: "health",
    studentLevel: "5-7",
  },
  {
    question: "Which vitamin is produced when your skin is exposed to sunlight?",
    options: [
      { value: "vitamin-a", label: "Vitamin A" },
      { value: "vitamin-c", label: "Vitamin C" },
      { value: "vitamin-d", label: "Vitamin D" },
      { value: "vitamin-e", label: "Vitamin E" },
    ],
    correctAnswer: "vitamin-d",
    category: "health",
    studentLevel: "5-7",
  },
  {
    question: "What is the recommended amount of water to drink each day?",
    options: [
      { value: "1-2", label: "1-2 glasses" },
      { value: "3-4", label: "3-4 glasses" },
      { value: "5-6", label: "5-6 glasses" },
      { value: "8", label: "8 glasses" },
    ],
    correctAnswer: "8",
    category: "health",
    studentLevel: "5-7",
  },

  // Health Questions - 8th to 10th
  {
    question: "What is the process by which plants make their own food called?",
    options: [
      { value: "respiration", label: "Respiration" },
      { value: "photosynthesis", label: "Photosynthesis" },
      { value: "digestion", label: "Digestion" },
      { value: "fermentation", label: "Fermentation" },
    ],
    correctAnswer: "photosynthesis",
    category: "health",
    studentLevel: "8-10",
  },
  {
    question: "Which of these is NOT a communicable disease?",
    options: [
      { value: "flu", label: "Influenza" },
      { value: "tuberculosis", label: "Tuberculosis" },
      { value: "diabetes", label: "Diabetes" },
      { value: "measles", label: "Measles" },
    ],
    correctAnswer: "diabetes",
    category: "health",
    studentLevel: "8-10",
  },
  {
    question: "What is the main function of red blood cells?",
    options: [
      { value: "fight-infection", label: "Fight infection" },
      { value: "carry-oxygen", label: "Carry oxygen" },
      { value: "clot-blood", label: "Clot blood" },
      { value: "produce-antibodies", label: "Produce antibodies" },
    ],
    correctAnswer: "carry-oxygen",
    category: "health",
    studentLevel: "8-10",
  },
  {
    question: "Which organ is responsible for detoxifying the blood?",
    options: [
      { value: "heart", label: "Heart" },
      { value: "lungs", label: "Lungs" },
      { value: "liver", label: "Liver" },
      { value: "kidneys", label: "Kidneys" },
    ],
    correctAnswer: "liver",
    category: "health",
    studentLevel: "8-10",
  },
  {
    question: "What is the recommended amount of physical activity for teenagers?",
    options: [
      { value: "15-min", label: "15 minutes daily" },
      { value: "30-min", label: "30 minutes daily" },
      { value: "60-min", label: "60 minutes daily" },
      { value: "120-min", label: "120 minutes daily" },
    ],
    correctAnswer: "60-min",
    category: "health",
    studentLevel: "8-10",
  },

  // Health Questions - 11th and 12th
  {
    question: "What is the main component of Earth's atmosphere?",
    options: [
      { value: "oxygen", label: "Oxygen" },
      { value: "carbon-dioxide", label: "Carbon Dioxide" },
      { value: "nitrogen", label: "Nitrogen" },
      { value: "hydrogen", label: "Hydrogen" },
    ],
    correctAnswer: "nitrogen",
    category: "health",
    studentLevel: "11-12",
  },
  {
    question: "Which of these is NOT a symptom of dehydration?",
    options: [
      { value: "thirst", label: "Thirst" },
      { value: "dry-mouth", label: "Dry mouth" },
      { value: "increased-urination", label: "Increased urination" },
      { value: "dizziness", label: "Dizziness" },
    ],
    correctAnswer: "increased-urination",
    category: "health",
    studentLevel: "11-12",
  },
  {
    question: "What is the normal resting heart rate for adults?",
    options: [
      { value: "40-50", label: "40-50 beats per minute" },
      { value: "60-100", label: "60-100 beats per minute" },
      { value: "120-140", label: "120-140 beats per minute" },
      { value: "150-170", label: "150-170 beats per minute" },
    ],
    correctAnswer: "60-100",
    category: "health",
    studentLevel: "11-12",
  },
  {
    question: "Which vitamin is essential for blood clotting?",
    options: [
      { value: "vitamin-a", label: "Vitamin A" },
      { value: "vitamin-c", label: "Vitamin C" },
      { value: "vitamin-d", label: "Vitamin D" },
      { value: "vitamin-k", label: "Vitamin K" },
    ],
    correctAnswer: "vitamin-k",
    category: "health",
    studentLevel: "11-12",
  },
  {
    question: "What is the primary function of insulin in the body?",
    options: [
      { value: "digest-proteins", label: "Digest proteins" },
      { value: "regulate-blood-sugar", label: "Regulate blood sugar" },
      { value: "fight-infections", label: "Fight infections" },
      { value: "produce-red-blood-cells", label: "Produce red blood cells" },
    ],
    correctAnswer: "regulate-blood-sugar",
    category: "health",
    studentLevel: "11-12",
  },

  // Health Questions - Undergrad
  {
    question: "Which of these is NOT a type of immunity?",
    options: [
      { value: "innate", label: "Innate immunity" },
      { value: "adaptive", label: "Adaptive immunity" },
      { value: "passive", label: "Passive immunity" },
      { value: "regenerative", label: "Regenerative immunity" },
    ],
    correctAnswer: "regenerative",
    category: "health",
    studentLevel: "undergrad",
  },
  {
    question: "What is the name of the protein that carries oxygen in the blood?",
    options: [
      { value: "myoglobin", label: "Myoglobin" },
      { value: "hemoglobin", label: "Hemoglobin" },
      { value: "collagen", label: "Collagen" },
      { value: "elastin", label: "Elastin" },
    ],
    correctAnswer: "hemoglobin",
    category: "health",
    studentLevel: "undergrad",
  },
  {
    question: "Which of these is NOT a function of the skeletal system?",
    options: [
      { value: "support", label: "Support" },
      { value: "protection", label: "Protection" },
      { value: "movement", label: "Movement" },
      { value: "digestion", label: "Digestion" },
    ],
    correctAnswer: "digestion",
    category: "health",
    studentLevel: "undergrad",
  },
  {
    question: "What is the medical term for high blood pressure?",
    options: [
      { value: "hypotension", label: "Hypotension" },
      { value: "hypertension", label: "Hypertension" },
      { value: "hyperglycemia", label: "Hyperglycemia" },
      { value: "hypoglycemia", label: "Hypoglycemia" },
    ],
    correctAnswer: "hypertension",
    category: "health",
    studentLevel: "undergrad",
  },
  {
    question: "Which part of the brain is responsible for balance and coordination?",
    options: [
      { value: "cerebrum", label: "Cerebrum" },
      { value: "cerebellum", label: "Cerebellum" },
      { value: "medulla", label: "Medulla oblongata" },
      { value: "hypothalamus", label: "Hypothalamus" },
    ],
    correctAnswer: "cerebellum",
    category: "health",
    studentLevel: "undergrad",
  },

  // Current Affairs Questions - 5th to 7th
  {
    question: "Which country hosted the most recent Summer Olympics?",
    options: [
      { value: "usa", label: "United States" },
      { value: "china", label: "China" },
      { value: "japan", label: "Japan" },
      { value: "france", label: "France" },
    ],
    correctAnswer: "japan",
    category: "current-affairs",
    studentLevel: "5-7",
  },
  {
    question: "What is the name of the robot that NASA sent to Mars in 2021?",
    options: [
      { value: "curiosity", label: "Curiosity" },
      { value: "perseverance", label: "Perseverance" },
      { value: "opportunity", label: "Opportunity" },
      { value: "spirit", label: "Spirit" },
    ],
    correctAnswer: "perseverance",
    category: "current-affairs",
    studentLevel: "5-7",
  },
  {
    question: "Which of these is a popular video game that features building and survival?",
    options: [
      { value: "fortnite", label: "Fortnite" },
      { value: "minecraft", label: "Minecraft" },
      { value: "roblox", label: "Roblox" },
      { value: "among-us", label: "Among Us" },
    ],
    correctAnswer: "minecraft",
    category: "current-affairs",
    studentLevel: "5-7",
  },
  {
    question: "What is the name of the spacecraft that SpaceX uses to send astronauts to space?",
    options: [
      { value: "falcon", label: "Falcon" },
      { value: "dragon", label: "Dragon" },
      { value: "starship", label: "Starship" },
      { value: "apollo", label: "Apollo" },
    ],
    correctAnswer: "dragon",
    category: "current-affairs",
    studentLevel: "5-7",
  },
  {
    question: "Which of these is NOT a renewable energy source?",
    options: [
      { value: "solar", label: "Solar" },
      { value: "wind", label: "Wind" },
      { value: "coal", label: "Coal" },
      { value: "hydro", label: "Hydro" },
    ],
    correctAnswer: "coal",
    category: "current-affairs",
    studentLevel: "5-7",
  },

  // Current Affairs Questions - 8th to 10th
  {
    question: "Which of these is NOT a type of rock?",
    options: [
      { value: "igneous", label: "Igneous" },
      { value: "sedimentary", label: "Sedimentary" },
      { value: "metamorphic", label: "Metamorphic" },
      { value: "biological", label: "Biological" },
    ],
    correctAnswer: "biological",
    category: "current-affairs",
    studentLevel: "8-10",
  },
  {
    question: "Which social media platform was formerly known as 'Twitter'?",
    options: [
      { value: "instagram", label: "Instagram" },
      { value: "facebook", label: "Facebook" },
      { value: "x", label: "X" },
      { value: "tiktok", label: "TikTok" },
    ],
    correctAnswer: "x",
    category: "current-affairs",
    studentLevel: "8-10",
  },
  {
    question: "What is the name of the COVID-19 variant that emerged in late 2021?",
    options: [
      { value: "alpha", label: "Alpha" },
      { value: "delta", label: "Delta" },
      { value: "omicron", label: "Omicron" },
      { value: "beta", label: "Beta" },
    ],
    correctAnswer: "omicron",
    category: "current-affairs",
    studentLevel: "8-10",
  },
  {
    question: "Which country withdrew from the European Union in 2020?",
    options: [
      { value: "france", label: "France" },
      { value: "germany", label: "Germany" },
      { value: "italy", label: "Italy" },
      { value: "uk", label: "United Kingdom" },
    ],
    correctAnswer: "uk",
    category: "current-affairs",
    studentLevel: "8-10",
  },
  {
    question: "What is the name of the digital currency created by Satoshi Nakamoto?",
    options: [
      { value: "ethereum", label: "Ethereum" },
      { value: "bitcoin", label: "Bitcoin" },
      { value: "dogecoin", label: "Dogecoin" },
      { value: "litecoin", label: "Litecoin" },
    ],
    correctAnswer: "bitcoin",
    category: "current-affairs",
    studentLevel: "8-10",
  },

  // Current Affairs Questions - 11th and 12th
  {
    question: "What is the formula for calculating acceleration?",
    options: [
      { value: "a=v/t", label: "a = v/t" },
      { value: "a=d/t", label: "a = d/t" },
      { value: "a=(v-u)/t", label: "a = (v-u)/t" },
      { value: "a=m/f", label: "a = m/f" },
    ],
    correctAnswer: "a=(v-u)/t",
    category: "current-affairs",
    studentLevel: "11-12",
  },
  {
    question: "Which country is leading the global transition to electric vehicles?",
    options: [
      { value: "usa", label: "United States" },
      { value: "germany", label: "Germany" },
      { value: "japan", label: "Japan" },
      { value: "china", label: "China" },
    ],
    correctAnswer: "china",
    category: "current-affairs",
    studentLevel: "11-12",
  },
  {
    question: "What is the name of the AI chatbot developed by OpenAI?",
    options: [
      { value: "siri", label: "Siri" },
      { value: "alexa", label: "Alexa" },
      { value: "chatgpt", label: "ChatGPT" },
      { value: "bard", label: "Bard" },
    ],
    correctAnswer: "chatgpt",
    category: "current-affairs",
    studentLevel: "11-12",
  },
  {
    question: "Which country hosted the 2022 FIFA World Cup?",
    options: [
      { value: "russia", label: "Russia" },
      { value: "qatar", label: "Qatar" },
      { value: "brazil", label: "Brazil" },
      { value: "france", label: "France" },
    ],
    correctAnswer: "qatar",
    category: "current-affairs",
    studentLevel: "11-12",
  },
  {
    question: "What is the name of the space telescope that replaced the Hubble Space Telescope?",
    options: [
      { value: "kepler", label: "Kepler" },
      { value: "webb", label: "James Webb" },
      { value: "chandra", label: "Chandra" },
      { value: "spitzer", label: "Spitzer" },
    ],
    correctAnswer: "webb",
    category: "current-affairs",
    studentLevel: "11-12",
  },

  // Current Affairs Questions - Undergrad
  {
    question: "Which organelle is known as the 'powerhouse of the cell'?",
    options: [
      { value: "nucleus", label: "Nucleus" },
      { value: "mitochondria", label: "Mitochondria" },
      { value: "ribosome", label: "Ribosome" },
      { value: "golgi-apparatus", label: "Golgi Apparatus" },
    ],
    correctAnswer: "mitochondria",
    category: "current-affairs",
    studentLevel: "undergrad",
  },
  {
    question: "What is the term for the economic situation where prices rise while economic growth slows?",
    options: [
      { value: "inflation", label: "Inflation" },
      { value: "recession", label: "Recession" },
      { value: "stagflation", label: "Stagflation" },
      { value: "depression", label: "Depression" },
    ],
    correctAnswer: "stagflation",
    category: "current-affairs",
    studentLevel: "undergrad",
  },
  {
    question: "Which technology is the foundation of cryptocurrencies like Bitcoin?",
    options: [
      { value: "cloud-computing", label: "Cloud Computing" },
      { value: "blockchain", label: "Blockchain" },
      { value: "quantum-computing", label: "Quantum Computing" },
      { value: "virtual-reality", label: "Virtual Reality" },
    ],
    correctAnswer: "blockchain",
    category: "current-affairs",
    studentLevel: "undergrad",
  },
  {
    question: "What international agreement aims to combat climate change?",
    options: [
      { value: "kyoto-protocol", label: "Kyoto Protocol" },
      { value: "paris-agreement", label: "Paris Agreement" },
      { value: "montreal-protocol", label: "Montreal Protocol" },
      { value: "geneva-convention", label: "Geneva Convention" },
    ],
    correctAnswer: "paris-agreement",
    category: "current-affairs",
    studentLevel: "undergrad",
  },
  {
    question: "Which company is developing the Metaverse?",
    options: [
      { value: "google", label: "Google" },
      { value: "microsoft", label: "Microsoft" },
      { value: "meta", label: "Meta (formerly Facebook)" },
      { value: "apple", label: "Apple" },
    ],
    correctAnswer: "meta",
    category: "current-affairs",
    studentLevel: "undergrad",
  },

  // National Questions - 5th to 7th
  {
    question: "What is the capital of the United States?",
    options: [
      { value: "new-york", label: "New York" },
      { value: "washington-dc", label: "Washington D.C." },
      { value: "los-angeles", label: "Los Angeles" },
      { value: "chicago", label: "Chicago" },
    ],
    correctAnswer: "washington-dc",
    category: "national",
    studentLevel: "5-7",
  },
  {
    question: "Which of these is NOT one of the three branches of the U.S. government?",
    options: [
      { value: "executive", label: "Executive" },
      { value: "legislative", label: "Legislative" },
      { value: "judicial", label: "Judicial" },
      { value: "educational", label: "Educational" },
    ],
    correctAnswer: "educational",
    category: "national",
    studentLevel: "5-7",
  },
  {
    question: "How many stars are on the U.S. flag?",
    options: [
      { value: "13", label: "13" },
      { value: "48", label: "48" },
      { value: "50", label: "50" },
      { value: "52", label: "52" },
    ],
    correctAnswer: "50",
    category: "national",
    studentLevel: "5-7",
  },
  {
    question: "What is the name of the national anthem of the United States?",
    options: [
      { value: "america-beautiful", label: "America the Beautiful" },
      { value: "star-spangled-banner", label: "The Star-Spangled Banner" },
      { value: "god-bless-america", label: "God Bless America" },
      { value: "my-country", label: "My Country, 'Tis of Thee" },
    ],
    correctAnswer: "star-spangled-banner",
    category: "national",
    studentLevel: "5-7",
  },
  {
    question: "Which holiday celebrates the signing of the Declaration of Independence?",
    options: [
      { value: "memorial-day", label: "Memorial Day" },
      { value: "veterans-day", label: "Veterans Day" },
      { value: "independence-day", label: "Independence Day" },
      { value: "presidents-day", label: "Presidents Day" },
    ],
    correctAnswer: "independence-day",
    category: "national",
    studentLevel: "5-7",
  },

  // National Questions - 8th to 10th
  {
    question: "Who was the first President of the United States?",
    options: [
      { value: "thomas-jefferson", label: "Thomas Jefferson" },
      { value: "abraham-lincoln", label: "Abraham Lincoln" },
      { value: "george-washington", label: "George Washington" },
      { value: "john-adams", label: "John Adams" },
    ],
    correctAnswer: "george-washington",
    category: "national",
    studentLevel: "8-10",
  },
  {
    question: "Which amendment to the U.S. Constitution abolished slavery?",
    options: [
      { value: "13th", label: "13th Amendment" },
      { value: "14th", label: "14th Amendment" },
      { value: "15th", label: "15th Amendment" },
      { value: "19th", label: "19th Amendment" },
    ],
    correctAnswer: "13th",
    category: "national",
    studentLevel: "8-10",
  },
  {
    question: "What is the highest court in the United States?",
    options: [
      { value: "district-court", label: "District Court" },
      { value: "appeals-court", label: "Court of Appeals" },
      { value: "supreme-court", label: "Supreme Court" },
      { value: "international-court", label: "International Court" },
    ],
    correctAnswer: "supreme-court",
    category: "national",
    studentLevel: "8-10",
  },
  {
    question: "Which of these states is NOT on the West Coast of the United States?",
    options: [
      { value: "california", label: "California" },
      { value: "oregon", label: "Oregon" },
      { value: "washington", label: "Washington" },
      { value: "arizona", label: "Arizona" },
    ],
    correctAnswer: "arizona",
    category: "national",
    studentLevel: "8-10",
  },
  {
    question: "What is the largest state in the U.S. by land area?",
    options: [
      { value: "texas", label: "Texas" },
      { value: "california", label: "California" },
      { value: "alaska", label: "Alaska" },
      { value: "montana", label: "Montana" },
    ],
    correctAnswer: "alaska",
    category: "national",
    studentLevel: "8-10",
  },

  // National Questions - 11th and 12th
  {
    question: "What is the quadratic formula?",
    options: [
      { value: "x=(-b±√(b²-4ac))/2a", label: "x = (-b ± √(b² - 4ac))/2a" },
      { value: "x=(-b±√(b²+4ac))/2a", label: "x = (-b ± √(b² + 4ac))/2a" },
      { value: "x=(b±√(b²-4ac))/2a", label: "x = (b ± √(b² - 4ac))/2a" },
      { value: "x=(-b±√(b²-4ac))/a", label: "x = (-b ± √(b² - 4ac))/a" },
    ],
    correctAnswer: "x=(-b±√(b²-4ac))/2a",
    category: "national",
    studentLevel: "11-12",
  },
  {
    question: "Which document begins with 'We the People'?",
    options: [
      { value: "declaration-independence", label: "Declaration of Independence" },
      { value: "bill-rights", label: "Bill of Rights" },
      { value: "constitution", label: "Constitution" },
      { value: "emancipation-proclamation", label: "Emancipation Proclamation" },
    ],
    correctAnswer: "constitution",
    category: "national",
    studentLevel: "11-12",
  },
  {
    question: "What was the name of the Supreme Court case that established the principle of judicial review?",
    options: [
      { value: "roe-wade", label: "Roe v. Wade" },
      { value: "brown-board", label: "Brown v. Board of Education" },
      { value: "marbury-madison", label: "Marbury v. Madison" },
      { value: "miranda-arizona", label: "Miranda v. Arizona" },
    ],
    correctAnswer: "marbury-madison",
    category: "national",
    studentLevel: "11-12",
  },
  {
    question: "Which war was fought between the North and South United States?",
    options: [
      { value: "revolutionary-war", label: "Revolutionary War" },
      { value: "civil-war", label: "Civil War" },
      { value: "world-war-1", label: "World War I" },
      { value: "world-war-2", label: "World War II" },
    ],
    correctAnswer: "civil-war",
    category: "national",
    studentLevel: "11-12",
  },
  {
    question: "What is the term length for a U.S. Senator?",
    options: [
      { value: "2-years", label: "2 years" },
      { value: "4-years", label: "4 years" },
      { value: "6-years", label: "6 years" },
      { value: "8-years", label: "8 years" },
    ],
    correctAnswer: "6-years",
    category: "national",
    studentLevel: "11-12",
  },

  // National Questions - Undergrad
  {
    question: "Which of these scientists is known for the theory of evolution by natural selection?",
    options: [
      { value: "einstein", label: "Albert Einstein" },
      { value: "newton", label: "Isaac Newton" },
      { value: "darwin", label: "Charles Darwin" },
      { value: "pasteur", label: "Louis Pasteur" },
    ],
    correctAnswer: "darwin",
    category: "national",
    studentLevel: "undergrad",
  },
  {
    question: "What is the Electoral College?",
    options: [
      { value: "university-system", label: "A university system" },
      { value: "presidential-election", label: "The system used to elect the President" },
      { value: "congressional-committee", label: "A committee in Congress" },
      { value: "supreme-court", label: "A division of the Supreme Court" },
    ],
    correctAnswer: "presidential-election",
    category: "national",
    studentLevel: "undergrad",
  },
  {
    question: "Which amendment guarantees freedom of speech?",
    options: [
      { value: "first", label: "First Amendment" },
      { value: "second", label: "Second Amendment" },
      { value: "fourth", label: "Fourth Amendment" },
      { value: "fifth", label: "Fifth Amendment" },
    ],
    correctAnswer: "first",
    category: "national",
    studentLevel: "undergrad",
  },
  {
    question: "What was the significance of the Louisiana Purchase?",
    options: [
      { value: "ended-slavery", label: "It ended slavery" },
      { value: "doubled-territory", label: "It doubled U.S. territory" },
      { value: "created-democracy", label: "It created democracy" },
      { value: "established-military", label: "It established the military" },
    ],
    correctAnswer: "doubled-territory",
    category: "national",
    studentLevel: "undergrad",
  },
  {
    question: "Which economic system is primarily used in the United States?",
    options: [
      { value: "socialism", label: "Socialism" },
      { value: "communism", label: "Communism" },
      { value: "capitalism", label: "Capitalism" },
      { value: "feudalism", label: "Feudalism" },
    ],
    correctAnswer: "capitalism",
    category: "national",
    studentLevel: "undergrad",
  },

  // Syllabus Questions - 5th to 7th
  {
    question: "What is the result of 7 × 8?",
    options: [
      { value: "54", label: "54" },
      { value: "56", label: "56" },
      { value: "63", label: "63" },
      { value: "64", label: "64" },
    ],
    correctAnswer: "56",
    category: "syllabus",
    studentLevel: "5-7",
  },
  {
    question: "Which of these is a proper noun?",
    options: [
      { value: "city", label: "city" },
      { value: "happiness", label: "happiness" },
      { value: "paris", label: "Paris" },
      { value: "mountain", label: "mountain" },
    ],
    correctAnswer: "paris",
    category: "syllabus",
    studentLevel: "5-7",
  },
  {
    question: "What is the perimeter of a square with sides of 5 cm?",
    options: [
      { value: "10-cm", label: "10 cm" },
      { value: "15-cm", label: "15 cm" },
      { value: "20-cm", label: "20 cm" },
      { value: "25-cm", label: "25 cm" },
    ],
    correctAnswer: "20-cm",
    category: "syllabus",
    studentLevel: "5-7",
  },
  {
    question: "Which of these animals is a mammal?",
    options: [
      { value: "snake", label: "Snake" },
      { value: "fish", label: "Fish" },
      { value: "frog", label: "Frog" },
      { value: "dolphin", label: "Dolphin" },
    ],
    correctAnswer: "dolphin",
    category: "syllabus",
    studentLevel: "5-7",
  },
  {
    question: "What is the main function of the roots of a plant?",
    options: [
      { value: "produce-food", label: "Produce food" },
      { value: "absorb-water", label: "Absorb water and nutrients" },
      { value: "produce-flowers", label: "Produce flowers" },
      { value: "release-oxygen", label: "Release oxygen" },
    ],
    correctAnswer: "absorb-water",
    category: "syllabus",
    studentLevel: "5-7",
  },

  // Syllabus Questions - 8th to 10th
  {
    question: "Which of these is NOT a prime number?",
    options: [
      { value: "13", label: "13" },
      { value: "17", label: "17" },
      { value: "19", label: "19" },
      { value: "21", label: "21" },
    ],
    correctAnswer: "21",
    category: "syllabus",
    studentLevel: "8-10",
  },
  {
    question: "What is the chemical formula for water?",
    options: [
      { value: "h2o", label: "H2O" },
      { value: "co2", label: "CO2" },
      { value: "o2", label: "O2" },
      { value: "h2o2", label: "H2O2" },
    ],
    correctAnswer: "h2o",
    category: "syllabus",
    studentLevel: "8-10",
  },
  {
    question: "Which of these is an example of potential energy?",
    options: [
      { value: "moving-car", label: "A moving car" },
      { value: "book-shelf", label: "A book on a shelf" },
      { value: "sound-waves", label: "Sound waves" },
      { value: "light", label: "Light" },
    ],
    correctAnswer: "book-shelf",
    category: "syllabus",
    studentLevel: "8-10",
  },
  {
    question: "What is the Pythagorean theorem?",
    options: [
      { value: "a+b=c", label: "a + b = c" },
      { value: "a2+b2=c2", label: "a² + b² = c²" },
      { value: "a2-b2=c2", label: "a² - b² = c²" },
      { value: "a+b+c=180", label: "a + b + c = 180" },
    ],
    correctAnswer: "a2+b2=c2",
    category: "syllabus",
    studentLevel: "8-10",
  },
  {
    question: "What is photosynthesis?",
    options: [
      { value: "breathing-process", label: "The process of breathing" },
      { value: "food-digestion", label: "The digestion of food" },
      { value: "light-energy", label: "The conversion of light energy to chemical energy" },
      { value: "water-cycle", label: "The water cycle" },
    ],
    correctAnswer: "light-energy",
    category: "syllabus",
    studentLevel: "8-10",
  },

  // Syllabus Questions - 11th and 12th
  {
    question: "What is the derivative of x²?",
    options: [
      { value: "x", label: "x" },
      { value: "2x", label: "2x" },
      { value: "x2", label: "x²" },
      { value: "2", label: "2" },
    ],
    correctAnswer: "2x",
    category: "syllabus",
    studentLevel: "11-12",
  },
  {
    question: "Which of these is NOT a noble gas?",
    options: [
      { value: "helium", label: "Helium" },
      { value: "neon", label: "Neon" },
      { value: "argon", label: "Argon" },
      { value: "oxygen", label: "Oxygen" },
    ],
    correctAnswer: "oxygen",
    category: "syllabus",
    studentLevel: "11-12",
  },
  {
    question: "What is the function of DNA?",
    options: [
      { value: "energy-storage", label: "Energy storage" },
      { value: "genetic-information", label: "Storing genetic information" },
      { value: "waste-removal", label: "Waste removal" },
      { value: "digestion", label: "Digestion" },
    ],
    correctAnswer: "genetic-information",
    category: "syllabus",
    studentLevel: "11-12",
  },
  {
    question: "Which of these is an example of Newton's Third Law?",
    options: [
      { value: "ball-rolling", label: "A ball rolling down a hill" },
      { value: "rocket-launch", label: "A rocket launching into space" },
      { value: "apple-falling", label: "An apple falling from a tree" },
      { value: "car-braking", label: "A car braking to stop" },
    ],
    correctAnswer: "rocket-launch",
    category: "syllabus",
    studentLevel: "11-12",
  },
  {
    question: "What is the main function of mitochondria in a cell?",
    options: [
      { value: "protein-synthesis", label: "Protein synthesis" },
      { value: "energy-production", label: "Energy production" },
      { value: "waste-removal", label: "Waste removal" },
      { value: "cell-division", label: "Cell division" },
    ],
    correctAnswer: "energy-production",
    category: "syllabus",
    studentLevel: "11-12",
  },

  // Syllabus Questions - Undergrad
  {
    question: "What is the integral of 2x?",
    options: [
      { value: "x2", label: "x²" },
      { value: "x2+c", label: "x² + C" },
      { value: "x2/2", label: "x²/2" },
      { value: "x2+c/2", label: "x² + C/2" },
    ],
    correctAnswer: "x2+c",
    category: "syllabus",
    studentLevel: "undergrad",
  },
  {
    question: "Which of these is NOT a type of chemical bond?",
    options: [
      { value: "ionic", label: "Ionic bond" },
      { value: "covalent", label: "Covalent bond" },
      { value: "hydrogen", label: "Hydrogen bond" },
      { value: "gravitational", label: "Gravitational bond" },
    ],
    correctAnswer: "gravitational",
    category: "syllabus",
    studentLevel: "undergrad",
  },
  {
    question: "What is the principle of superposition in quantum mechanics?",
    options: [
      { value: "uncertainty", label: "The uncertainty principle" },
      { value: "wave-particle", label: "The wave-particle duality" },
      { value: "multiple-states", label: "A particle can exist in multiple states simultaneously" },
      { value: "conservation", label: "The conservation of energy" },
    ],
    correctAnswer: "multiple-states",
    category: "syllabus",
    studentLevel: "undergrad",
  },
  {
    question: "Which of these is a correct statement of the Second Law of Thermodynamics?",
    options: [
      { value: "energy-conserved", label: "Energy is conserved in a closed system" },
      { value: "entropy-increases", label: "Entropy of an isolated system always increases" },
      { value: "equal-reaction", label: "Every action has an equal and opposite reaction" },
      { value: "constant-motion", label: "Objects in motion stay in motion" },
    ],
    correctAnswer: "entropy-increases",
    category: "syllabus",
    studentLevel: "undergrad",
  },
  {
    question: "What is the function of the endoplasmic reticulum in a cell?",
    options: [
      { value: "energy-production", label: "Energy production" },
      { value: "protein-synthesis", label: "Protein synthesis and transport" },
      { value: "waste-removal", label: "Waste removal" },
      { value: "cell-division", label: "Cell division" },
    ],
    correctAnswer: "protein-synthesis",
    category: "syllabus",
    studentLevel: "undergrad",
  },
]

// Function to get questions based on student level and category
export function getQuizQuestions(studentLevel: string, category?: string): QuizQuestion[] {
  // Filter questions by student level
  let filteredQuestions = quizQuestions.filter((q) => {
    // Map the old grade format to the new student level format
    let mappedLevel = studentLevel
    if (studentLevel === "5th" || studentLevel === "6th" || studentLevel === "7th") {
      mappedLevel = "5-7"
    } else if (studentLevel === "8th" || studentLevel === "9th" || studentLevel === "10th") {
      mappedLevel = "8-10"
    } else if (studentLevel === "11th" || studentLevel === "12th") {
      mappedLevel = "11-12"
    }

    return q.studentLevel === mappedLevel
  })

  // If category is specified, filter by category
  if (category) {
    filteredQuestions = filteredQuestions.filter((q) => q.category === category)
  }

  // If not enough questions, add some from adjacent levels
  if (filteredQuestions.length < 10) {
    const allQuestions = [...quizQuestions]
    // Shuffle the array
    for (let i = allQuestions.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[allQuestions[i], allQuestions[j]] = [allQuestions[j], allQuestions[i]]
    }

    // Add questions until we have 10
    const result = [...filteredQuestions]
    for (const question of allQuestions) {
      if (!result.includes(question) && result.length < 10) {
        result.push(question)
      }
    }

    return result
  }

  // Shuffle and return 10 questions
  filteredQuestions.sort(() => Math.random() - 0.5)
  return filteredQuestions.slice(0, 10)
}
