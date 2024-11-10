export interface Chat {
    sender: string;
    message: string;
}

export interface ChatboxProps {
    isSidebarShown: boolean;
    showSidebar: () => void;
    chatData: Data | null;
    userData: Data[];
    setUserData: (data: Data[]) => void;
    currentChatId: string;
    setCurrentChatId: (id: string) => void;
}

export interface Data {
   id: string; 
   title: string;
   timestamp: string;
   chat: Chat[];
}

export interface SidebarProps {
    isSidebarShown: boolean;
    showSidebar: () => void;
    userData: Data[];
    setUserData: (data: Data[]) => void;
    currentChatId: string;
    setCurrentChatId: (id: string) => void;
}

export interface UserData {
    currentChatId: string;
    data: Data[];
}

export interface TextbarProps {
    isSidebarShown: boolean;
    showSidebar: () => void;
    setCurrentChatId: (id: string) => void;
    currentChatId: string;
    userData: Data[];
    chatData: Data | null;
    setUserData: (data: Data[]) => void;
}
