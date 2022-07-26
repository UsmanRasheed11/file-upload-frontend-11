
import React, { useState } from 'react';
import axios from "axios";
import './App.css';

function App() {
  const [image, setImage] = useState("");

  const handleUpload = (e) => {
    const files = Array.from(e.target.files)
    const formData = new FormData();
    formData.append('image', files[0]);
    axios.post("http://localhost:4000/fileupload",formData).then((res) => {
      setImage(res.data.fielpath)
    })
  };
  return (
    <div className="container py-5">
    <header className="text-dark text-center">
        <h1 className="display-4">Image upload</h1>
        <img src="/image.svg" alt="" width="150" className="mb-4"/>
    </header>


    <div className="row py-4">
        <div className="col-lg-6 mx-auto">

            {/* <!-- Upload image input--> */}
            <div className="input-group mb-3 px-2 py-2 rounded-pill bg-white shadow-sm">
                <input id="upload" type="file" onChange={handleUpload} className="form-control border-0" />
                <label id="upload-label" htmlFor="upload" className="font-weight-light text-muted">Choose file</label>
                <div className="input-group-append">
                    <label htmlFor="upload" className="btn btn-light m-0 rounded-pill px-4"> <i className="fa fa-cloud-upload mr-2 text-muted"></i><small className="text-uppercase font-weight-bold text-muted">Choose file</small></label>
                </div>
            </div>

            {/* Uploaded image area */}
            <p className="font-italic text-white text-center">The image uploaded will be rendered inside the box below.</p>
            <div className="image-area mt-4"><img id="imageResult" src={image} alt="" className="img-fluid rounded shadow-sm mx-auto d-block" /></div>

        </div>
    </div>
</div>
  );
}

export default App;
