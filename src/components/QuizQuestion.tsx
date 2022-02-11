import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FillBlank, OptionView } from '.';
import { Colors, Size, Theme } from '../theme';

interface QuizQuestionProps {
  quiz: Quiz;
  answerShown?: boolean;
  option: string | null;
}

const delimeter = '_blankPlace_';

const getRegex = (word: string) => {
  return new RegExp(`(${word})`, 'gi');
};

const QuizQuestion: React.FC<QuizQuestionProps> = ({ quiz, option, answerShown }) => {
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
              const type = answerShown
                ? option === quiz.answer.de
                  ? 'success'
                  : 'error'
                : undefined;

              return <OptionView key={index} text={option} type={type} />;
            }
            return <FillBlank key={index} textStyle={styles.deQuestion} length={10} />;
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
  container: {
    marginHorizontal: Size[3],
  },
  questionContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
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
