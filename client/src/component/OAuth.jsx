import { Button } from "flowbite-react";
import { AiFillGoogleCircle } from "react-icons/ai";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { app } from "../firebase";
import { useDispatch } from "react-redux";
import { signInSuccess } from "../redux/user/userSlice";
import { useNavigate } from "react-router-dom";

export default function OAuth() {
  //auth helps to know who is requesting
  const auth = getAuth(app);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleGoogelClick = async () => {
    // enable the google gmail layout layout
    const provider = new GoogleAuthProvider();
    //disable directlogin  once the user is logged in.
    provider.setCustomParameters({ prompt: "select_account" });
    try {
      const resultsFromGoogle = await signInWithPopup(auth, provider);
      const res = await fetch("/api/auth/google", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: resultsFromGoogle.user.displayName,
          email: resultsFromGoogle.user.email,
          googlePhotoUrl: resultsFromGoogle.user.photoURL,
        }),
      });
      const data = await res.json();
      if (res.ok) {
        dispatch(signInSuccess(data));
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Button
      type='button'
      gradientDuoTone='pinkToOrange'
      outline
      onClick={handleGoogelClick}
    >
      <AiFillGoogleCircle className='w-6 h-6 mr-2'></AiFillGoogleCircle>
      Continue with Google
    </Button>
  );
}
