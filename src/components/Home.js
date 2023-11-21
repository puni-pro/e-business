import { signInWithPopup } from 'firebase/auth'
import React from 'react'
import { auth, provider } from '../services/firebase.config'
import { useAuthState } from "react-firebase-hooks/auth"

function Home() {
    const [user, loading, error] = useAuthState(auth);
    
    return (
        <div>
            {loading ? (
                <>
                <Loading />
                </>
            ) : (
                <>
                    {user ? (
                        <>
                            <SignOutButton />
                        </>
                    ) : (
                        <>
                            <h1>LOGIN</h1>
                            <SignInButton />
                        </>
                    )}
                </>
            )}
        </div>
    )
}


export default Home

function Loading(){
    return(
        <div>
            <h1>Loading....</h1>
        </div>
    );
}

function SignInButton() {
    const SignInWithGoogle = () => {
        //サインイン
        signInWithPopup(auth, provider).catch((err) => alert(err.message));
    }

    return (
        <div class="flex items-center justify-center dark:bg-gray-800">
            <button onClick={SignInWithGoogle} class="px-4 py-2 border flex gap-2 border-slate-200 dark:border-slate-700 rounded-lg text-slate-700 dark:text-slate-200 hover:border-slate-400 dark:hover:border-slate-500 hover:text-slate-900 dark:hover:text-slate-300 hover:shadow transition duration-150">
                <img class="w-6 h-6" src="https://www.svgrepo.com/show/475656/google-color.svg" loading="lazy" alt="google logo" />
                    <span>Login with Google</span>
            </button>
        </div>
    );
}


function SignOutButton() {
    return (
        <button onClick={() => auth.signOut()}>
            <p>SignOut</p>
        </button>
        
    );
}


