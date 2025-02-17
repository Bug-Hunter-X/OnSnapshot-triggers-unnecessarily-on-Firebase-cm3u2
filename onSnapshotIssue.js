const query = query(collection(db, 'users'), where('uid', '==', userId));

const unsubscribe = onSnapshot(query, (querySnapshot) => {
  querySnapshot.forEach((doc) => {
    // This callback is triggered every time the document changes,
    // even if the document content remains the same.
    console.log(doc.id, ' => ', doc.data());
  });
});

// ... later, when you want to stop listening:
unsubscribe();