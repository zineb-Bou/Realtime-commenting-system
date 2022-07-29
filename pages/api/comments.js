import { getAllComments } from '../../lib/firestore';

export default async (_, res) => {
  const comments = await getAllComments();
  res.status(200).json(comments);
};
