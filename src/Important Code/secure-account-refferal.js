import CookieHOC from 'components/CookieHOC'
import FinalFormInput from 'components/forms/FinalFormInput'
import { isEmail, isName, isStrongPassword } from 'components/forms/validators'
import CheckoutReferralLayout from 'components/student-web-flow/CheckoutReferralLayout'
import { FORM_ERROR } from 'final-form'
import { getUrlWithParams, setCookie } from 'helpers'
import * as api from 'helpers/api'
import { useFbTrackingProvider } from 'helpers/facebook-provider'
import { trackPage } from 'helpers/gtm'
import { track } from 'helpers/tracking'
import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { Field, Form } from 'react-final-form'
import { getApps, initializeApp } from 'firebase/app';
import { getAuth, signInWithPopup, OAuthProvider, updateProfile } from "firebase/auth";

const NewSecureAccount = ({ cookies }) => {
    useEffect(() => {
        trackPage('secure-account-referral')
        track('page_view', {
            page: 'secure-account-referral'
        })
    }, [])

    const SecureAccountPage = () => {
        const router = useRouter()
        const { trackFbEventCompleteReg } = useFbTrackingProvider()

        const firebaseConfig = {
            apiKey: "AIzaSyBnuruDpg_pgu_f-d2vJMPnRA04yvp7PII",
            authDomain: "bloom-prod-2d5c5.firebaseapp.com",
            databaseURL: "https://bloom-prod-2d5c5.firebaseio.com",
            projectId: "bloom-prod-2d5c5",
            storageBucket: "bloom-prod-2d5c5.appspot.com",
            messagingSenderId: "272346629766",
            appId: "1:272346629766:web:0bc8ac7797bf8669a6b307",
            measurementId: "G-3MXEW3PHC3"
        };

        if (!getApps.length) {
            initializeApp(firebaseConfig);
        }


        const handleAppleSignIn = async () => {
            const provider = new OAuthProvider('apple.com');
            provider.addScope('email');
            provider.addScope('name');

            const auth = getAuth();

            signInWithPopup(auth, provider)
                .then((result) => {
                    const user = result.user;

                    const userInfo = {
                        email: user.email,
                        name: user.displayName
                    }

                    updateUserFirebase(userInfo)

                    // const credential = OAuthProvider.credentialFromResult(result);
                    // const accessToken = credential.accessToken;
                    // const idToken = credential.idToken;
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    const email = error.customData.email;
                    const credential = OAuthProvider.credentialFromError(error);
                });
        }


        const updateUserFirebase = (values) => {
            const auth = getAuth();

            updateEmail(auth.currentUser, values.email).then(() => {

                console.log("User has been updated ", auth.currentUser)

            }).catch((error) => {
                console.log("updateEmail", error)
            });

            updateProfile(auth.currentUser, {
                displayName: values.name
            }).then(() => {
                console.log("User has been updated ", displayName)
            }).catch((error) => {
                console.log("updateProfile", error)
            });
        }


        const nextStep = async (values) => {
            console.log("values ", values)
            try {
                //default code
                const { data: account } = await api.newUpdateUser({
                    ...values,
                    uid: cookies.customerId,
                    subId: cookies.subId
                })

                setCookie({
                    ...cookies,
                    ...values,
                    registered: account
                })

                trackFbEventCompleteReg()
                track('update_password', { page: 'secure-account-referral' })
                router.push(getUrlWithParams('/final-install-referral'))
            } catch {
                return {
                    [FORM_ERROR]: 'Sorry, there was a problem while creating an account'
                }
            }
        }

        return (
            <Form
                onSubmit={nextStep}
                render={({ handleSubmit, submitting, submitError }) => (
                    <form className='page-box' onSubmit={handleSubmit} autoComplete='off'>
                        <Head>
                            <title>Secure Your Account - Bloom</title>
                        </Head>
                        <section className='text-center'>
                            <div>
                                <Image
                                    src='/images/secure_account.png'
                                    alt='secure account'
                                    width={140}
                                    height={138}
                                />
                            </div>
                            <h1>Yay, almost there...</h1>
                            <h3>Now protect your plan with a password</h3>
                        </section>

                        <section>
                            <Field
                                name='name'
                                type='text'
                                validate={isName}
                                showMsg={true}
                                defaultValue={cookies.name}
                            >
                                {(props) => <FinalFormInput label='Name' {...props} />}
                            </Field>

                            <Field
                                name='email'
                                type='text'
                                validate={isEmail}
                                showMsg={true}
                                defaultValue={cookies.email}
                            >
                                {(props) => <FinalFormInput label='Email' {...props} />}
                            </Field>

                            <Field
                                name='password'
                                type='password'
                                validate={isStrongPassword}
                            >
                                {(props) => <FinalFormInput label='Password' {...props} />}
                            </Field>
                        </section>

                        {submitError && <div className='text-error'>{submitError}</div>}

                        <button
                            type='submit'
                            className='btn btn-primary mt-auto'
                            disabled={submitting}
                        >
                            Save and Begin
                        </button>

                        <button
                            className='btn btn-primary mt-auto apple'
                            onClick={handleAppleSignIn}>
                            Sign in with Apple</button>
                        <style jsx>
                            {`
                               
                                :global(.steps__){
                                    display:none;
                                }
                                :global(.checkout_container .main_container){
                                    flex-direction: column;
                                    align-items: center;
                                }
                                :global(.checkout_container .main_container .leftSection){
                                    order:2;
                                    margin-right: unset;
                                }
                                :global(.checkout_container .main_container .leftSection, .checkout_container .main_container .rightSection){
                                    width: 65%;
                                }
                                @media only screen and (max-width: 768px) {
                                    :global(.footer){
                                        display:none;
                                    }
                                    :global(.checkout_container .main_container .leftSection, .checkout_container .main_container .rightSection){
                                        width: 100%;
                                    }
                                  }
                                h1 {
                                font-size: 25px;
                                margin-top: 13px;
                                }
                                h3 {
                                font-size: 20px;
                                font-weight: 900;
                                margin-bottom: 25px;
                                }
                                .apple{
                                    margin-top:80px !important;
                                }
              `}
                        </style>
                    </form>
                )}
            />
        )
    }

    return (
        <CheckoutReferralLayout>
            <SecureAccountPage />
        </CheckoutReferralLayout>
    )
}

export default CookieHOC(NewSecureAccount, ['paid'], '/checkout-referral')



