import {
    useAuthStateChanged,
    useMediaQueryService,
    useScrollToTop,
    useFirestoreListenerContents,
    useFirestoreListenerUser
} from ".";


function useAppBaseService() {
    useAuthStateChanged()
    // authentication()
    useScrollToTop()
    useFirestoreListenerUser()
    useFirestoreListenerContents()
    useMediaQueryService()
}

export default useAppBaseService;
