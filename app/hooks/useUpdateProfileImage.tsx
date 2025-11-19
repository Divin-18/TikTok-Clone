import { database } from "@/libs/AppWriteClient"

const useUpdateProfileImage = async (id: string, image: string) => {
    try {
        await database.updateDocument(
            String(process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID), 
            String(process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_ID_PROFILE), 
            id, 
        { 
            image: image 
        })
    } catch (error) {
        throw error
    }
}

export default useUpdateProfileImage