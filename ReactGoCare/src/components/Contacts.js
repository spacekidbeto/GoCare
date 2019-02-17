import React from 'react'

function Contacts() {
  return (
  <section className="page-section" id="contact">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-8 text-center">
          <h2 className="mt-0">Contact Info</h2>
          <hr className="divider my-4"/>
          <p className="text-muted mb-5">If you would like more info, feel free to contact us</p>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-4 ml-auto text-center">
          <i className="fas fa-phone fa-3x mb-3 text-muted"></i>
          <div>+1 (202) 555-0149</div>
        </div>
        <div className="col-lg-4 mr-auto text-center">
          <i className="fas fa-envelope fa-3x mb-3 text-muted"></i>
          <a className="d-block" href="mailto:contact@yourwebsite.com">contact@yourwebsite.com</a>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Contacts;
