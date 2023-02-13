import Collapse from './Collapse';

const QuestionList = () => {
  return (
    <div className='mx-auto w-2/3 flex flex-col gap-2'>
      <Collapse />
      <Collapse />
      <Collapse />
    </div>
  );
};

export default QuestionList;