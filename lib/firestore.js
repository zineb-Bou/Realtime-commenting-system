import { doc, setDoc, collection } from 'firebase/firestore';
import { db } from './firebase.config';

export function createUser(uid, user) {
  // Add a new document with a generated ids
  const userRef = doc(collection(db, 'users'), uid);
  setDoc(userRef, { uid, ...user }, { merge: true });
}

export function addComment(data) {
  const commentRef = doc(collection(db, 'comments'));
  setDoc(commentRef, { ...data }, { merge: true });
}
