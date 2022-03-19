import {useState} from 'react';
import {firestore} from '../firebase';
import {useFormInput} from './hooks';
function CreatePost() {
  const title= useFormInput('');
  const content = useFormInput('');
  const Subtitle = useFormInput('');

  function handleSubmit (e){
    e.preventDefault();
    console.log('Title', title);
    firestore.collection('posts').add({
      title:title.value,
      Subtitle:Subtitle.value,
      content:content.value,
      createdAt: new Date(),
    });
  }
    return (
      <div className="create-post">
        <h1>Create Post</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-field">
            <lable>
              Title
            </lable>
            <input {...title}/>

          </div>
          <div className="form-field">
            <lable>
              Subtitle
            </lable>
            <input {...Subtitle}/>

          </div>
          <div className="form-field">
            <lable>
                Content
            </lable>
            <textarea {...content}></textarea>

          </div>
          <button className="create-post-btn">Create Post</button>
        </form>
      </div>
    );
  }
  
  export default CreatePost;