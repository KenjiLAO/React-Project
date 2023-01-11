import { getDb } from "./firebase"
import { getDocs, collection } from "firebase/firestore"

const collection_name = "Tekken"

export const findAll = async () => {
    const doc_refs = await getDocs(collection(getDb(), collection_name))

    const res = []

    doc_refs.forEach(element => {
        res.push({
            id: element.id,
            ...element.data()
        })
    });

    return res
}