import React, { useState } from "react";

function Form() {
  const [title, setTitle] = useState('');
  const [image, setImage] = useState('');
  const [Description, setDescription] = useState('');
  // const [isPending, setIsPending] = useState('false')

  function handleSubmit(e){
    e.preventDefault();
    const form = {title,image,Description}
    fetch('http://localhost:3000/images',{
      method: 'POST',
      headers:{'Content-Type':'application/json'},
      body: JSON.stringify(form)
    }).then(() => {
      console.log('new book added')
    })
  }
  return (
    <div>
      <p id="form-p">
        This page gives you a platform where you can add a Book to our
        collection.
      </p>
      <div>
        <form className="form-review" onSubmit={handleSubmit} >
          <label for="novel-title">Book-Title</label>
          <br />
          <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)}></input>
          <br />
          <br />
          <label for="image-url">Image url</label> <br />
          <input type="text" value={image}  onChange={(e)=>setImage(e.target.value)}></input>
          <br />
          <br />
          <label for="book-description">Book-Description</label>
          <br />
          <br />
         <textarea rows = "5" cols = "50"  value={Description} onChange={(e)=>setDescription(e.target.value)}>
            Enter description here...
         </textarea> <br />
         <br /><button>Add book...</button>
        </form>
  
      </div>
    </div>
  );
}

export default Form;
