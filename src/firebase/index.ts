import firestore from '@react-native-firebase/firestore';
import { FirebaseFirestoreTypes } from '@react-native-firebase/firestore/lib/';

interface Observer<T> {
  onNext: (snapshot: FirebaseFirestoreTypes.QuerySnapshot<T>) => void;
  onError?: (error?: Error) => void;
}

class Firebase {
  public static instance = new Firebase();

  private constructor() {}

  createDemoQuizes() {
    const quizes: Quizes = [
      {
        en_q: 'You are my mother',
        de_q: 'Du bist meine _blankPlace_.',
        options: ['Mutter', 'Sohn', 'Frau', 'meine', 'bist', 'Tochter', 'mein'],
        answer: 'Mutter',
      },
      {
        en_q: 'You are my brother.',
        de_q: 'Du bist mein _blankPlace_.',
        options: ['Frau', 'Du', 'Bruder', 'Sohn', 'bist', 'Tochter', 'mein'],
        answer: 'Bruder',
      },
      {
        en_q: 'You are my sister.',
        de_q: 'Du bist meine _blankPlace_.',
        options: ['Tochter', 'Mutter', 'Bruder', 'Schwester'],
        answer: '',
      },
      {
        en_q: 'My sister is nice.',
        de_q: 'Meine Schwester ist _blankPlace_.',
        options: ['Meine', 'Schwester', 'ist', 'sehr', 'klug', 'groß', 'nett'],
        answer: 'nett',
      },
      {
        en_q: 'My mother is nice and tall.',
        de_q: 'Meine Mutter ist nett und _blankPlace_.',
        options: ['ist', 'nett', 'Meine', 'und', 'sehr', 'Mutter', 'groß', 'klug'],
        answer: 'groß',
      },
    ];
    quizes.forEach(quiz => {
      firestore().collection<Quize>('quizes').add(quiz);
    });
  }

  async resetQuizes() {
    try {
      const documents = await firestore().collection<Quize>('quizes').get();

      await documents.forEach(async doc => {
        await firestore().collection<Quize>('quizes').doc(doc.id).delete();
      });
    } catch (error) {
      console.log(error);
    }
  }

  subscribeToQuizes<T>(observer: Observer<T>): () => void {
    return firestore()
      .collection<T>('quizes')
      .onSnapshot(observer.onNext, observer.onError);
  }
}

export { Firebase };
