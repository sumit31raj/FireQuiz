import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FillBlank, OptionView } from '.';
import { Colors, Size, Theme } from '../theme';

interface QuizQuestionProps {
  quiz: Quiz;
  option: string | null;
}

const delimeter = '_blankPlace_';

const getRegex = (word: string) => {
  return new RegExp(`(${word})`, 'gi');
};

const QuizQuestion: React.FC<QuizQuestionProps> = ({ quiz, option }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.enQuestion}>
        {quiz.en_q.split(getRegex(quiz.answer.en)).map((word, index) =>
          word === quiz.answer.en.toLocaleLowerCase() ? (
            <Text key={index} style={styles.highlightWord}>
              {word}
            </Text>
          ) : (
            <Text key={index}>{word}</Text>
          ),
        )}
      </Text>

      <View style={styles.questionContainer}>
        {quiz.de_q.split(getRegex(delimeter)).map((word, index) => {
          if (delimeter === word) {
            if (option) {
              return <OptionView key={index} text={option} />;
            }
            return <FillBlank key={index} textStyle={styles.deQuestion} length={20} />;
          } else {
            return (
              <Text key={index} style={styles.deQuestion}>
                {word}
              </Text>
            );
          }
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  questionContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  enQuestion: {
    ...Theme.h1,
    color: Colors.white,
    textAlign: 'center',
  },
  deQuestion: {
    ...Theme.h1,
    color: Colors.white,
    marginVertical: Size[20],
  },
  highlightWord: {
    ...Theme.h1Bold,
    textTransform: 'capitalize',
    textDecorationLine: 'underline',
    textDecorationStyle: 'solid',
  },
  gradient: {
    height: Size[40],
    paddingHorizontal: Size[20],
    justifyContent: 'center',
  },
});

export { QuizQuestion };
