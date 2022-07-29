import {
  doc,
  setDoc,
  collection,
  getDocs,
  orderBy,
  query,
} from 'firebase/firestore';
import { db } from './firebase.config';

export function createUser(uid, user) {
  // Add a new document with a generated ids
  const userRef = doc(collection(db, 'users'), uid);
  setDoc(userRef, { uid, ...user }, { merge: true });
}
export function addComment(data) {
  const commentRef = doc(collection(db, 'comments'));
  const comment = setDoc(commentRef, { ...data }, { merge: true });
  return comment;
}

export async function getAllComments() {
  const commentRef = collection(db, 'comments');
  const snapshot = await getDocs(query(commentRef, orderBy('date')));
  const comments = [];
  snapshot.forEach(async (doc) => {
    comments.push({ id: doc.id, ...doc.data() });
  });
  return comments;
}
