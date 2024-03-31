import {createContext, useContext} from "react";

const Context = createContext({
	darkTheme: "",
	setDarkTheme: () => {},
	windowWidth: "",
	setWindowWidth: () => {},
	sidebarExpanded: "",
	setSidebarExpanded: () => {},
	input: "",
	setInput: () => {},
	chatStarted: "",
	setChatStarted: () => { },
	answer: "",
	setAnswer: () => {},
	loadingAns: "",
	setLoadingAns: () => {},
	messages: [],
	setMessages: () => { },
	messagesCount: "",
	setMessagesCount: () => {},
	chats: [],
	setChats: () => {},
});

const ContextProvider = Context.Provider;

function useContxt() {
	return useContext(Context);
}

export {ContextProvider, useContxt};
