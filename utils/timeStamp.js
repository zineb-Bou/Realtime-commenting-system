import { Timestamp } from '@firebase/firestore';

const getDate = (yourTimeStamp) =>
  new Timestamp(yourTimeStamp.seconds, yourTimeStamp.nanoseconds)
    .toDate()
    .toLocaleString();

export default getDate;
