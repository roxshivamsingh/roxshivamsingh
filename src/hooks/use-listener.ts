import { collection, onSnapshot } from 'firebase/firestore';
// =======================================================================================

import { useAppDispatch, useAppSelector } from '../redux';
import { useEffect } from 'react';
import { db } from '../config';
import { IUser } from '../types/auth';
import { setUser } from '../redux/slices/user.slice';
import { IContentItem } from '../types/content';
import { setContents } from '../redux/slices/content.slice';

export function useFirestoreListenerUser() {
    const dispatch = useAppDispatch();

    const { isAuthenticated } = useAppSelector((state) => state.Auth.value);
    useEffect(() => {
        if (isAuthenticated) {
            const collectionRef = collection(db, `users`);

            onSnapshot(collectionRef, ({ docs }) => {
                const data: IUser[] = [];
                docs?.forEach((doc) => {
                    const row = doc.data();
                    data.push({ ...row, id: doc.id } as unknown as IUser);
                });
                dispatch(setUser({ ...data[0] }));
            });
        }
    }, [dispatch, isAuthenticated]);
}
export function useFirestoreListenerContents() {
    const { isAuthenticated } = useAppSelector((state) => state.Auth.value);

    const dispatch = useAppDispatch();

    useEffect(() => {
        if (isAuthenticated) {
            const collectionRef = collection(db, `contents`);
            onSnapshot(collectionRef, ({ docs }) => {
                const data: IContentItem[] = [];
                docs?.forEach((doc) => {
                    const row = doc.data();
                    data.push({ ...row, id: doc.id } as unknown as IContentItem);
                });
                dispatch(setContents(data));
            });
        }
    }, [dispatch, isAuthenticated]);
}
