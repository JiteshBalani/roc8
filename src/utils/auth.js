import { auth } from "./firebase";
import { createUserWithEmailAndPassword, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword } from "firebase/auth";

export const doCreateUserWithEmailAndPassword = async (email, password) => {
    try {
        return createUserWithEmailAndPassword(auth, email, password);
    } catch (error) {
        throw new Error(error.message);
    }
};

export const doSignInWithEmailAndPassword = async (email, password) => {
    try {
        return signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
        throw new Error(error.message)
    }
};

export const doSignOut = () => {
    return auth.signOut();
};

export const doPasswordReset = (email) => {
    return sendPasswordResetEmail(auth, email);
};

export const doSendEmailVerification = () => {
    if (auth.currentUser) {
        return sendEmailVerification(auth.currentUser, {
            url: `${window.location.origin}/protected`
        });
    } else {
        throw new Error('No user is currently signed in.');
    }
};

