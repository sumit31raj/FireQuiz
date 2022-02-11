import React, { useCallback, useEffect, useState } from 'react';
import { Text, StyleSheet, SafeAreaView, View, ScrollView } from 'react-native';
import I18n from 'i18n-js';

import { useQuizesHook } from '../hooks/useQuizesHook';
import { Colors, Size, Theme } from '../theme';
import { AlertView, Button, OptionView, QuizQuestion } from '../components';

interface HomeProps {}

const t: LocaleType = (key: string) => I18n.t(`screens.home.${key}`);

const Home: React.FC<HomeProps> = () => {
  const quizes = useQuizesHook();

  const [isAlerVisible, setAlertVisible] = useState(false);

  const [option, setOption] = useState<string | null>(null);

  const [currentQuiz, setCurrentQuiz] = React.useState<Quiz | null>(null);

  useEffect(() => {
    if (quizes.length) {
      setCurrentQuiz(quizes[0]);
    }
  }, [quizes]);

  const onAlertClose = useCallback(() => {
    setAlertVisible(false);

    if (currentQuiz) {
      const index = quizes.indexOf(currentQuiz);
      const nextIndex = (index + 1) % quizes.length;
      setOption(null);
      setCurrentQuiz(quizes[nextIndex]);
    } else {
      setCurrentQuiz(null);
    }
  }, [currentQuiz, quizes]);

  const onCheckAnswer = useCallback(() => {
    setAlertVisible(true);
  }, []);

  const onOptionSelect = useCallback((text: string) => {
    setOption(text);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text style={styles.fillWordSubTitle}>{t('fillWord')}</Text>

        {currentQuiz && <QuizQuestion quiz={currentQuiz} option={option} />}

        <View style={styles.optionContainer}>
          {currentQuiz?.options.map((text, index) => (
            <OptionView
              key={index}
              style={[styles.option, isAlerVisible && styles.disabledOption]}
              text={text}
              onPress={!isAlerVisible ? onOptionSelect : undefined}
            />
          ))}
        </View>
      </ScrollView>

      <Button
        disabled={!option}
        text={option && t('checkAnswer')}
        onPress={onCheckAnswer}
      />

      <AlertView
        visible={isAlerVisible}
        errorMessage={currentQuiz?.answer.de}
        type={option === currentQuiz?.answer.de ? 'success' : 'error'}
        onContinue={onAlertClose}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background.primary,
  },
  fillWordSubTitle: {
    ...Theme.body3,
    color: Colors.white,
    textAlign: 'center',
    marginVertical: Size[30],
  },
  optionContainer: {
    marginVertical: Size[30],
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  option: {
    marginHorizontal: Size[30],
  },
  disabledOption: {
    backgroundColor: `${Colors.white}88`,
  },
});

export { Home };
