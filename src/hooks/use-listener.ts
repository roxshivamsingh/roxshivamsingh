import { collection, onSnapshot } from 'firebase/firestore';
// =======================================================================================

import { useAppDispatch } from '../redux';
import { useEffect } from 'react';
import { db } from '../config';
import { IAuth } from '../types/auth';
import { setAuth } from '../redux/slices/user.slice';
import { IContentItem } from '../types/content';
import { setContents } from '../redux/slices/content.slice';

export function useFirestoreListenerUser() {
    const dispatch = useAppDispatch();

    useEffect(() => {
        const collectionRef = collection(db, `users`);
        onSnapshot(collectionRef, ({ docs }) => {
            const data: IAuth[] = [];
            docs?.forEach((doc) => {
                const row = doc.data();
                data.push({ ...row, id: doc.id } as unknown as IAuth);
            });
            dispatch(setAuth(data));
        });
    }, [dispatch]);
}
export function useFirestoreListenerContents() {
    const dispatch = useAppDispatch();

    useEffect(() => {
        const collectionRef = collection(db, `contents`);
        onSnapshot(collectionRef, ({ docs }) => {
            const data: IContentItem[] = [];
            docs?.forEach((doc) => {
                const row = doc.data();
                data.push({ ...row, id: doc.id } as unknown as IContentItem);
            });
            dispatch(setContents(data));
        });
    }, [dispatch]);
}
