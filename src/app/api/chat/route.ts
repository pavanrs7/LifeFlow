import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";

export const runtime = "edge";

const genAI = new GoogleGenerativeAI(
  process.env.GOOGLE_API_KEY || "AIzaSyApJBzyuCrAUCGEo_MZC1JyhuGg1obVhTA"
);

// Knowledge base for blood donation
const bloodDonationInfo = {
  eligibility: {
    basic: [
      "Age: 18-65 years old",
      "Weight: At least 50kg (110 lbs)",
      "Hemoglobin: At least 12.5g/dL for females, 13.0g/dL for males",
      "Good general health",
      "No active infections",
    ],
    deferral: [
      "Recent surgery (wait 6 months)",
      "Pregnancy (wait 6 months after delivery)",
      "Recent tattoo or piercing (wait 4-12 months)",
      "Recent travel to malaria-risk areas",
      "Certain medications",
    ],
    bloodTypes: {
      "A+": "Can receive from: A+, A-, O+, O-",
      "A-": "Can receive from: A-, O-",
      "B+": "Can receive from: B+, B-, O+, O-",
      "B-": "Can receive from: B-, O-",
      "AB+": "Universal recipient - can receive from all types",
      "AB-": "Can receive from: AB-, A-, B-, O-",
      "O+": "Can receive from: O+, O-",
      "O-": "Universal donor - can only receive O-",
    },
  },
  preparation: [
    "Get adequate sleep the night before",
    "Eat a healthy meal within 3 hours of donation",
    "Drink plenty of water",
    "Avoid fatty foods before donation",
    "Bring valid ID and list of medications",
    "Wear comfortable clothing with sleeves that can be raised",
  ],
  afterCare: [
    "Rest for 10-15 minutes after donation",
    "Drink extra fluids for 24 hours",
    "Avoid strenuous activity for 24 hours",
    "Keep the bandage on for at least 4 hours",
    "Eat iron-rich foods",
    "No alcohol for 24 hours",
  ],
};

// Function to format blood donation info for the model context
function getFormattedContext() {
  return `
As a Blood Donation Assistant, you have access to the following information:

ELIGIBILITY CRITERIA:
${bloodDonationInfo.eligibility.basic.map((item) => `- ${item}`).join("\n")}

DEFERRAL CONDITIONS:
${bloodDonationInfo.eligibility.deferral.map((item) => `- ${item}`).join("\n")}

BLOOD TYPE COMPATIBILITY:
${Object.entries(bloodDonationInfo.eligibility.bloodTypes)
  .map(([type, info]) => `${type}: ${info}`)
  .join("\n")}

PREPARATION GUIDELINES:
${bloodDonationInfo.preparation.map((item) => `- ${item}`).join("\n")}

AFTER DONATION CARE:
${bloodDonationInfo.afterCare.map((item) => `- ${item}`).join("\n")}

Instructions for response:
1. Always be empathetic and supportive
2. Provide personalized advice based on the user's specific situation
3. Include relevant medical disclaimers when appropriate
4. Encourage blood donation while being mindful of safety
5. If unsure about medical specifics, advise consulting a healthcare provider
6. Format responses in easy-to-read sections
7. Include specific actionable steps when applicable
`;
}

export async function POST(req) {
  try {
    const { messages } = await req.json();

    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    const chat = model.startChat({
      history: [],
      generationConfig: {
        temperature: 0.7,
        topK: 40,
        topP: 0.95,
      },
    });

    const prompt = `
${getFormattedContext()}

User message: ${messages[messages.length - 1].content}

Respond as a knowledgeable and empathetic blood donation assistant. Make sure to:
1. Address any concerns directly
2. Provide accurate information
3. Be encouraging while maintaining safety
4. Include relevant specifics from the knowledge base
5. Add medical disclaimers when needed
`;

    const response = await chat.sendMessage(prompt);
    const text = await response.response.text();

    return NextResponse.json({ response: text });
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json(
      { error: "Internal server error", details: error.message },
      { status: 500 }
    );
  }
}
