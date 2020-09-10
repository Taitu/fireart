import React, { FC, useState, FormEvent } from 'react';

interface FormProps {
  startQuiz: (data: { amount: number, difficulty: string }) => void;
}

interface Data {
  amount: number
  difficulty: string
}

const Form:FC<FormProps> = (props) => {
  const [data, setValue] = useState<Data>({ amount: 10, difficulty: 'easy' });

  const submit = (e: FormEvent) => {
    e.preventDefault();
    props.startQuiz(data);
  };

  return (
    <div className='form__wrapper'>
      <div className='form__title'>
        Welcome to Trivia Test
      </div>
      <form className='form' onSubmit={ submit }>
        <div className='form__row'>
          <input 
            className='form__control' 
            type='number'
            min={ 1 }
            max={ 50 }
            value={ data.amount }
            onChange={ e => setValue({ ...data, amount: +e.target.value }) }
          />
        </div>
        <div className='form__row'>
          <select
            className='form__control'
            value={ data.difficulty }
            onChange={ e => setValue({ ...data, difficulty: e.target.value }) }
          >
            <option value='easy'>Easy</option>
            <option value='hard'>Hard</option>
          </select>
        </div>
        <button className='btn btn--primary'>Start</button>
      </form>
    </div>
  )
}

export default Form;