import firestore from '@react-native-firebase/firestore';
import { FirebaseFirestoreTypes } from '@react-native-firebase/firestore/lib/';

interface Observer<T> {
  onNext: (snapshot: FirebaseFirestoreTypes.QuerySnapshot<T>) => void;
  onError?: (error?: Error) => void;
}

class Firebase {
  public static instance = new Firebase();
  private constructor() {}

  subscribeToQuizes<T>(observer: Observer<T>): () => void {
    return firestore()
      .collection<T>('quizes')
      .onSnapshot(observer.onNext, observer.onError);
  }
}

export { Firebase };
