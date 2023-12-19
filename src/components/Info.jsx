import React from "react";

export const Info = (props) => {
  const setMessageAction = (e) => {
    console.log("fsas");
    props.setMessage(e.currentTarget.id);
  };

  return (
    <div className="info">
      <ul>
        <li>
          <span>Click on links to see examples</span>
        </li>
        <li>
          Create{" "}
          <a
            href="#"
            onClick={setMessageAction}
            id="Create course named Biology"
          >
            course
          </a>
          ,{" "}
          <a
            href="#"
            onClick={setMessageAction}
            id="Create user with email example@example.com password Example123! name"
          >
            user
          </a>{" "}
          or{" "}
          <a
            href="#"
            onClick={setMessageAction}
            id="Create calendar event named Meeting on 12/5/2024 at 12 am"
          >
            calendar event
          </a>
        </li>
        <li>
          List your{" "}
          <a href="#" onClick={setMessageAction} id="List all my courses">
            courses
          </a>{" "}
          and{" "}
          <a
            href="#"
            onClick={setMessageAction}
            id="List all people on Biology"
          >
            people
          </a>{" "}
          on other courses
        </li>
        <li>
          Delete your{" "}
          <a
            href="#"
            onClick={setMessageAction}
            id="Delete calendar event called Meeting"
          >
            calendar event
          </a>
        </li>
        <li>
          Update your{" "}
          <a
            href="#"
            onClick={setMessageAction}
            id="Update calendar event called Meeting on 12/5/2024 at 1 pm"
          >
            calendar event
          </a>
        </li>
        <li>
          And add{" "}
          <a
            href="#"
            onClick={setMessageAction}
            id="Add student example@example.com to course Biology"
          >
            people
          </a>{" "}
          to courses
        </li>
      </ul>
    </div>
  );
};

export default Info;
