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
    <form onSubmit={ submit }>
      <input type='number' min={ 1 } max={ 50 } value={ data.amount } onChange={ e => setValue({ ...data, amount: +e.target.value }) } />
      <select value={ data.difficulty } onChange={ e => setValue({ ...data, difficulty: e.target.value }) }>
        <option value='easy'>Easy</option>
        <option value='hard'>Hard</option>
      </select>
      <button>submit</button>
    </form>
  )
}

export default Form;