import { db } from './firebase.config';
import {
  doc,
  setDoc,
  collection,
  getDocs,
  orderBy,
  query,
  updateDoc,
  deleteDoc,
} from 'firebase/firestore';

export function createUser(uid, user) {
  const userRef = doc(collection(db, 'users'), uid);
  setDoc(userRef, { uid, ...user }, { merge: true });
}
export function addComment(data) {
  const commentRef = doc(collection(db, 'comments'));
  const comment = setDoc(commentRef, { ...data }, { merge: true });
  return comment;
}

export async function editComment({ id, commentText }) {
  const commentRef = doc(collection(db, 'comments'), id);
  return await updateDoc(commentRef, {
    commentText: commentText,
  });
}
export function deleteComment(id) {
  return deleteDoc(doc(db, 'comments', id));
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

export async function updateUpvote({ id, upvote }) {
  const commentRef = doc(db, 'comments', id);
  await updateDoc(commentRef, {
    upvote: upvote,
  });
}
