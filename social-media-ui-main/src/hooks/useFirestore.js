import { useState, useEffect } from 'react';
import { collection, query, where, onSnapshot } from 'firebase/firestore';

import { db } from '../firebase';

const useFirestore = (table, condition) => {
    const [documents, setDocuments] = useState([]);

    useEffect(() => {
        //let collectionRef = db.collection(collection).orderBy('createdAt');
        let q = query(collection(db, table));
        if (condition) {
            q = query(collection(db, table), where(condition.fieldName, condition.operator, condition.compareValue));
        }
        if (condition) {
            if (!condition.compareValue || !condition.compareValue.length) {
                // reset documents data
                setDocuments([]);
                return;
            }
        }

        const unsubscribe = onSnapshot(q, (snapshot) => {
            const documents = snapshot.docs.map((doc) => ({
                ...doc.data(),
                id: doc.id,
            }));

            setDocuments(documents);
        });

        return unsubscribe;
    }, [table, condition]);

    return documents;
};

export default useFirestore;
