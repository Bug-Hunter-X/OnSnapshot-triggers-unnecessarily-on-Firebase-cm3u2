import { query, collection, where, onSnapshot, getDocs } from 'firebase/firestore';
// ... other imports

let lastSnapshotData = null;

const query = query(collection(db, 'users'), where('uid', '==', userId));

const unsubscribe = onSnapshot(query, async (querySnapshot) => {
  const currentSnapshotData = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));

  // Only process if data has actually changed
  if (JSON.stringify(currentSnapshotData) !== JSON.stringify(lastSnapshotData)) {
    querySnapshot.forEach((doc) => {
      console.log(doc.id, ' => ', doc.data());
    });
    lastSnapshotData = currentSnapshotData;
  }
});

// ... later, when you want to stop listening:
unsubscribe();