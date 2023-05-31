import React from "react";
import s from "./Form.module.scss";
function Form() {
  return (
    <div className={s.sectionForm}>
      <form className={s.formList}>
        <div className={s.overInput}>
        <label  htmlFor={""} className={s.label}> Name: </label>
        <input
        id={""}
          type="text"
          placeholder="Name"
          name=""
          value=""
          className={s.input}
        />
        </div>
        
        <div className={s.overInput}>
          <label htmlFor={""} className={s.label}> Email: </label>
          <input
          id={""}
            type="email"
            placeholder="Email"
            name=""
            value=""
            className={s.input}
          />
        </div>

        <div className={s.overInput}>
          <label htmlFor={""} className={s.label}> Phone: </label>
          <input
          id={""}
            type="tel"
            placeholder="Phone"
            name=""
            value=""
            className={s.input}
          />
        </div>

        <div className={s.overInput}>
          <label   htmlFor={""} className={s.label}> Address: </label>
          <input
           id={""}
            type="url"
            placeholder="Address"
            name=""
            value=""
            className={s.input}
          />
        </div>
      </form>
    </div>
  );
}

export default Form;
