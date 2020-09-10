import React from 'react';
import { connect } from 'react-redux';
import { uniqueId } from 'lodash';
import { fetchRequest as fetchRequestAction, saveAnswer as saveAnswerAction, initQuiz as initQuizAction } from '../store/quiz/actions';
import { ApplicationState } from '../store';
import { Quiz } from '../store/quiz/types';
import Question from '../components/quiz/Question';
import Result from '../components/quiz/Result';
import Form from '../components/quiz/Form';
import Loader from '../components/Loader';

interface PropsFromDispatch {
  fetchQuiz: typeof fetchRequestAction
  saveAnswer: typeof saveAnswerAction,
  initQuiz: typeof initQuizAction
}

interface PropsFromState {
  loading: boolean,
  questions: Quiz[]
}

type AllProps = PropsFromDispatch & PropsFromState

class QuizContainer extends React.Component<AllProps> {
  state = {
    index: 0,
    showResult: false
  }

  startQuiz = (data: { amount: number, difficulty: string }) => {
    this.props.fetchQuiz(data);
  }

  setAnswer = (answer: string) => {
    const { index } = this.state;
    const { saveAnswer } = this.props;
    this.setState({
      index: index + 1
    })
    saveAnswer({ answer, index })
  }

  playAgain = () => {
    const { initQuiz } = this.props;
    this.setState({
      index: 0
    })
    initQuiz()
  }

  render()  {
    const { questions, loading } = this.props;
    const { index } = this.state
    const showResult = questions.length > 0 && index === questions.length
    return (
      <div className='quiz'>
        {loading && <Loader />}
        {showResult && <Result questions={ questions } playAgain={ this.playAgain }/>}
        {!showResult && questions.length === 0 && <Form startQuiz={ this.startQuiz } />}
        {!showResult && questions.length > 0 && 
          <Question
            key={ uniqueId('question') }
            setAnswer={ this.setAnswer }
            question={ questions[index] } 
          />
        }
      </div>
    )
  }
}

const mapStateToProps = ({ quiz }: ApplicationState) => ({
  loading: quiz.loading,
  questions: quiz.questions
});

const mapDispatchToProps = {
  fetchQuiz: fetchRequestAction,
  saveAnswer: saveAnswerAction,
  initQuiz: initQuizAction
};

export default connect(mapStateToProps, mapDispatchToProps) (QuizContainer)