import { init } from 'next-firebase-auth'
import './firebase';
import './firebase-admin'

const TWELVE_DAYS_IN_MS = 12 * 60 * 60 * 24 * 1000

const initAuth = () => {
  init({
    debug: false,
    authPageURL: '/auth',
    appPageURL: '/',
    loginAPIEndpoint: '/api/login',
    logoutAPIEndpoint: '/api/logout',
    firebaseClientInitConfig: {
      projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
      apiKey: 'MyExampleAppAPIKey123',
    },
    cookies: {
      name: 'ExampleApp',
      keys: [
        process.env.COOKIE_SECRET_CURRENT,
        process.env.COOKIE_SECRET_PREVIOUS,
      ],
      httpOnly: true,
      maxAge: TWELVE_DAYS_IN_MS,
      overwrite: true,
      path: '/',
      sameSite: 'strict',
      secure: process.env.NEXT_PUBLIC_COOKIE_SECURE === 'true',
      signed: true,
    },
  })
}

export default initAuth
