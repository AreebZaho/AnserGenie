import {createContext, useContext} from "react";

const Context = createContext({
	darkTheme: "",
	setDarkTheme: () => {},
	windowWidth: "",
	sidebarExpanded: "",
	setSidebarExpanded: () => {},
	input: "",
	setInput: () => {},
	chatStarted: "",
	setChatStarted: () => {},
	result: "",
	setResult: () => {},
	loadingRes: "",
	setLoadingRes: () => {},
	messages: [],
	setMessages: () => {},
	messagesCount: "",
	setMessagesCount: () => {},
	chats: [],
	setChats: () => {},
	activeChatIndex: "",
	setActiveChatIndex: () => {},
	startNewChat: () => {},
	togglePinChat: () => { },
	pinnedChatsCount: "",
	setPinnedChatsCount: () => {},
	deleteChat: () => {},
});

const ContextProvider = Context.Provider;

function useContxt() {
	return useContext(Context);
}

export {ContextProvider, useContxt};
