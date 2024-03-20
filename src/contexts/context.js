import {createContext, useContext} from "react";

const Context = createContext({
	darkTheme: "",
	setDarkTheme: () => {},
	windowWidth: "",
	setWindowWidth: () => {},
	sidebarExpanded: false,
	setSidebarExpanded: () => {},
	input: "",
	setInput: () => {},
	chatStarted: "",
	setChatStarted: () => {},
	loading: "",
	setLoading: () => {},
	result: "",
	setResult: () => {},
	chat: [],
	setChat: () => {},
	chats: [],
	setChats: () => {},
});

const ContextProvider = Context.Provider;

function useContxt() {
	return useContext(Context);
}

export {ContextProvider, useContxt};
