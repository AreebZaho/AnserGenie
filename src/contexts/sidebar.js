import {createContext, useContext} from "react";

const SidebarContext = createContext({
	expanded: false,
	setExpanded: () => {},
});

const SidebarProvider = SidebarContext.Provider;

function useSidebar() {
	return useContext(SidebarContext);
}

export {SidebarProvider, useSidebar};
