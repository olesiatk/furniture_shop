import { dataBase } from 'firebaseConfig';

type DocType = { [field: string]: any };

export const getCollection = (collection: string): DocType[] =>
  dataBase
    .collection(collection)
    .get()
    .then((querySnapshot: any) =>
      querySnapshot.docs.map((doc: any) => ({ ...doc.data(), id: doc.id }))
    );

export const getDocument = (collection: string, id: string): DocType =>
  dataBase
    .collection(collection)
    .doc(id)
    .get()
    .then((doc: any) => ({ ...doc.data(), id: doc.id }));

export const updateDocument = (collection: string, data: DocType): DocType =>
  dataBase
    .collection(collection)
    .doc(data.id)
    .update(data)
    .then(() => getDocument(collection, data.id));

export const addNewDocument = (collection: string, data: DocType): DocType =>
  dataBase
    .collection(collection)
    .add(data)
    .then((docRef: any) => updateDocument(collection, { id: docRef.id }));
