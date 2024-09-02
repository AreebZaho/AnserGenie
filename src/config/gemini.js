import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI("AIzaSyCZy3PIV7vX_WiZvuDzjd2IkHl5twA9sfM");
const model = genAI.getGenerativeModel({
	model: "gemini-1.5-flash",
});

export default async function runChat(input) {
	const result = await model.generateContent(input);
	return result.response.text();
}
