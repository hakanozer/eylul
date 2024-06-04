export type UID = string; 

interface MediaServiceInterface {
    readonly rootDirectory: Directory;
    getDirectory(uid: UID): Promise<Directory>; 
}

export interface Media { 
    readonly uid: UID;
    readonly type: "media";
    readonly label: string; 
}

export interface DD { 
    readonly uid: UID;
    readonly label: string; 
}

export interface Directory { 
    readonly uid: UID;
    readonly type: "directory";
    readonly label: string;
    readonly childrenUidDirectories: readonly DD[];
    readonly childrenMedias: readonly Media[];
}