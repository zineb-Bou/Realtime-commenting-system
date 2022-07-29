import {
  doc,
  setDoc,
  collection,
  getDocs,
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
  const snapshot = await getDocs(collection(db, 'comments'));
  const comments = [];
  snapshot.forEach(async (doc) => {
    comments.push({ id: doc.id, ...doc.data() });
  });
  return comments;
}

// export function appendToParent(comments, newComment) {
//   comments.forEach((comment) => {
//     if (comment.id === newComment.parentCommentId) {
//       comment.children.push(newComment);
//     } else if (comment.children && comment.children.length > 0) {
//       comment.children = appendToParent(comment.children, newComment);
//     }
//   });
//   return comments;
// }
