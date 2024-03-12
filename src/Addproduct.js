import React from 'react'

export default function Addproduct() {
  return (
    <div className='Addproduct'>
          <form className="row g-3 needs-validation" noValidate>
  <div className="col-md-4">
    <label htmlFor="validationCustom01" className="form-label">Product name</label>
    <input type="text" className="form-control" id="validationCustom01" name='pname'  required />
    <div className="valid-feedback">
    </div>
  </div>
  <div className="col-md-4">
    <label htmlFor="validationCustom02" className="form-label">Price</label>
    <input type="text" className="form-control" id="validationCustom02" name='price'  required />
    <div className="valid-feedback">
      
    </div>
  </div>
 

  <div className="col-md-3">
    <label htmlFor="validationCustom04" className="form-label">Category</label>
    <select className="form-select" id="validationCustom04" required>
      <option selected disabled value="">Choose...</option>
      <option>Choose1</option>
      <option>Choose2</option>
      <option>Choose3</option>
    </select>

  </div>

  <div className="mb-3">
  <label htmlFor="exampleFormControlTextarea1" className="form-label">Description</label>
  <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" name='description'></textarea>
</div>

  <div className="input-group mb-3">
  <input type="file" className="form-control" id="inputGroupFile02" />
  <label className="input-group-text" htmlFor="inputGroupFile02" name="upload">Upload</label>
</div>
  <div className="col-12">
    <button className="btn btn-primary" type="submit" name='submit'>Submit</button>
  </div>
</form>
    </div>
  )
}
