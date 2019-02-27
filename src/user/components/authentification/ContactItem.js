import React from "react";

function ContactItem({contact}) {
  return (
    <div  className="contact-card">
      <div className="">first name:{contact.fname}</div>
      <div className="">last name:{contact.lname}</div>
      <div className="">email:{contact.email}</div>
      <div className="">telephone:{contact.phone}</div> 
    </div>
 )
}

export default ContactItem;
