import { collection, onSnapshot } from 'firebase/firestore';
import { useAppDispatch } from '../redux';
import { useEffect } from 'react';
import { db } from '../config';
import { IAuth } from '../types/auth';
import { setAuth } from '../redux/slices/user.slice';
export function useUser() {

}

export function useFirestoreListenerUser() {
    const dispatch = useAppDispatch();

    useEffect(() => {
        const collectionRef = collection(db, `users`);
        onSnapshot(collectionRef, ({ docs }) => {
            const data: IAuth[] = [];
            docs?.forEach((doc) => {
                const row = doc.data();
                data.push({
                    ...row,
                    id: doc.id,
                } as unknown as IAuth);
            });

            dispatch(setAuth(data));
        });
    }, [dispatch]);
}