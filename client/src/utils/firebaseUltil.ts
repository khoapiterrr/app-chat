import { FileObject } from 'core/api/objectFile.interface';
import firebaseApp from 'firebaseSetting';

export const uploadFileToFirebase = async (
  files: any,
): Promise<FileObject[]> => {
  return Promise.all(files.map((item: any) => uploadSingleFile(item)));
};

export const uploadSingleFile = async (file: any): Promise<FileObject> => {
  const storageRef = firebaseApp.storage().ref();
  const fileRef = storageRef.child(file.name);
  const snapshot = await fileRef.put(file);
  const url = await snapshot.ref.getDownloadURL();
  return {
    name: file.name,
    path: url,
  };
};
