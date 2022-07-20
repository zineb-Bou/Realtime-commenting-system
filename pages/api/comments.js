import { db } from '../../lib/firebase.config';
import { collection, getDocs } from 'firebase/firestore';

export default async (_, res) => {
  const snapshot = await getDocs(collection(db, 'comments'));
  let comments = [];
  snapshot.forEach((doc) => {
    comments.push({ id: doc.id, ...doc.data() });
  });
  res.status(200).json(comments);
};
