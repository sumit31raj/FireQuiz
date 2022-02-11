import { useEffect, useState } from 'react';
import { Firebase } from '../firebase';

const useQuizesHook = () => {
  const [quizes, setQuizes] = useState<Quizes>([]);

  useEffect(() => {
    const unsubscribe = Firebase.instance.subscribeToQuizes<Quize>({
      onNext: snapshot => {
        const newQuizes: Quizes = [];
        snapshot.forEach(quize => {
          newQuizes.push(quize.data());
        });

        if (newQuizes.length) {
          setQuizes(newQuizes);
        } else {
          Firebase.instance.createDemoQuizes();
        }
      },
    });

    return unsubscribe;
  }, []);

  return quizes;
};

export { useQuizesHook };
