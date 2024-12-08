import Question from './Question';

const MainContainer = () => {
  return (
    <div className='container mt-5 h-100'>
      <div className='row'>
        <div className='col-5'>
          <Question></Question>
        </div>
        <div className='col-5 '>Column</div>
        <div className='col-2 '>Column</div>
      </div>
    </div>
  );
};

export default MainContainer;
