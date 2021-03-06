import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/database';
import 'firebase/storage';
import firebaseConfig from './config';


class Firebase {
  constructor() {
    app.initializeApp(firebaseConfig);
    this.auth = app.auth();
    this.db = app.firestore();
    this.firebaseStorage = app.storage();
  }

  async register(name, email, password) {
    const newUser = await this.auth.createUserWithEmailAndPassword(email, password);

    await newUser.user.updateProfile({ displayName: name});
  }
  
  async login(email, password) {
    return await this.auth.signInWithEmailAndPassword(email, password);
  }

  async logout() {
    await this.auth.signOut();
  }

  async resetPassword(email) {
    await this.auth.sendPasswordResetEmail(email);
  }
}

const firebase = new Firebase();
export default firebase;