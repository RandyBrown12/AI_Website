export type Chat = {
    sender: string;
    message: string;
}

export type ChatboxProps = {
    isSidebarShown: boolean;
    showSidebar: () => void;
    chatData: Data | null;
    userData: Data[];
    setUserData: (data: Data[]) => void;
    currentChatId: string;
    setCurrentChatId: (id: string) => void;
}

export type Data = {
   id: string; 
   title: string;
   timestamp: string;
   chat: Chat[];
}

export type SidebarProps = {
    isSidebarShown: boolean;
    showSidebar: () => void;
    userData: Data[];
    setUserData: (data: Data[]) => void;
    currentChatId: string;
    setCurrentChatId: (id: string) => void;
}

export type UserData = {
    currentChatId: string;
    data: Data[];
}

export type TextbarProps = {
    isSidebarShown: boolean;
    showSidebar: () => void;
    setCurrentChatId: (id: string) => void;
    currentChatId: string;
    userData: Data[];
    chatData: Data | null;
    setUserData: (data: Data[]) => void;
}

export type SlotProps = {
    isSidebarShown: boolean;
}