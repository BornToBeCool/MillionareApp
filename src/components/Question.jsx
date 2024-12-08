import AnswerButton from './AnswerButton';

import classes from '../styles/Question.module.css';

const Question = () => {
  return (
    <div>
      <h1 className={`mb-5 text-center w-50 ${classes.titleBackground}`}>
        - $1 Million -
      </h1>
      <h2 className='text-center my-5'>
        What is your question?
        <span>_____</span>
      </h2>
      <br />
      <AnswerButton />
      <AnswerButton />
      <AnswerButton />
      <AnswerButton />
    </div>
  );
};

export default Question;
