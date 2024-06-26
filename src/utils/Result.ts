import { DD, Directory, Media } from "src/models/MediaService"

export const data = () : Directory => {

    const m1: Media = {
        uid: "mu1",
        type: "media",
        label: "A - media1.jpg"
    } 

    const m2: Media = {
        uid: "mu2",
        type: "media",
        label: "B - media2.jpg"
    } 

    const d1: DD = {
        uid: "du1",
        label: "A - Scholl-1"
    }

    const d2: DD = {
        uid: "du2",
        label: "B - Scholl-2"
    }

    const directory : Directory = {
        uid: "di1",
        type: "directory",
        label: "Directory1",
        childrenUidDirectories: [d1, d2],
        childrenMedias: [m1,m2]
    }

    return directory

}