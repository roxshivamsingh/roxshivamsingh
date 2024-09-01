// import { authentication } from "../config";
import { useAuthStateChanged } from "./use-data";
import { useFirestoreListenerContents, useFirestoreListenerUser } from "./use-listener";
import { useScrollToTop } from "./use-scroll-top";


function useAppBaseService() {
    useAuthStateChanged()
    // authentication()
    useScrollToTop()
    useFirestoreListenerUser()
    useFirestoreListenerContents()
}

export default useAppBaseService;
