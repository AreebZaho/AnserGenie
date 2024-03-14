import {createContext, useContext} from "react";

const Context = createContext({
	sidebarExpanded: false,
	setSidebarExpanded: () => { },
	input: "",
	setInput: () => { },
	chatStarted: "",
	setChatStarted: () => { },
	result : "",
	setResult: () => { },
});

const ContextProvider = Context.Provider;

function useContxt() {
	return useContext(Context);
}

export {ContextProvider, useContxt};
