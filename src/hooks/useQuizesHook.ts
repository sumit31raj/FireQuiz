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

        setQuizes(newQuizes);
      },
    });

    return unsubscribe;
  }, []);

  return quizes;
};

export { useQuizesHook };
