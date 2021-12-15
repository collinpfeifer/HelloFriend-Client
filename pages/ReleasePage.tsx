import React from 'react';

const ReleasePage = () => {
  return (
    <div className='ReleasePage'>
      <div className='ReleaseContent'>
        <h1>release</h1>
        <p>
          a place where all your emotions, anxious thoughts and scary ideas can
          be released to never be seen again
        </p>
        <div className='ReleaseInput'>
          <textarea id='output' rows={20}></textarea>
          <button style={{ width: '80px', height: 'auto', fontSize: '18px' }}>
            done
          </button>
        </div>
      </div>
    </div>
  );
};
export default ReleasePage;
