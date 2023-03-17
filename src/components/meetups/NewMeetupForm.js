import { useRef } from "react";

import Card from "../ui/Card";

function NewMeetupForm(props) {
  const titleInputRef = useRef();
  const imageInputRef = useRef();
  const addressInputRef = useRef();
  const descriptionInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const enteredTitle = titleInputRef.current.value
    const enteredImage = imageInputRef.current.value
    const enteredAddress = addressInputRef.current.value
    const enteredDescription = descriptionInputRef.current.value

    const meetupData = {
        title: enteredTitle,
        image: enteredImage,
        address: enteredAddress,
        description: enteredDescription
    }

    props.onAddMeetup(meetupData);
}

  return (
    <Card>
      <form className="p-4 grid gap-2">
        <div className="grid gap-2">
          <label for="title">Title</label>
          <input
            className="border border-gray-400 focus-visible:border-1 focus-visible:border-sky-500 p-2 px-4 rounded-xl"
            type="text"
            required
            placeholder="Ex. Ola"
            id="title"
            ref={titleInputRef}
          />
        </div>
        <div className="grid gap-2">
          <label for="image">Image</label>
          <input
            className="border border-gray-400 focus-visible:border-1 focus-visible:border-sky-500 p-2 px-4 rounded-xl"
            type="url"
            ref={imageInputRef}
            placeholder="Ex. http://google.com/image.jpg"
            id="image"
          />
        </div>
        <div className="grid gap-2">
          <label for="address">Address</label>
          <input
            className="border border-gray-400 focus-visible:border-1 focus-visible:border-sky-500 p-2 px-4 rounded-xl"
            type="text"
            ref={addressInputRef}
            id="address"
          />
        </div>
        <div className="grid gap-2">
          <label for="description">Description</label>
          <textarea
            className="border border-gray-400 focus-visible:border-1 focus-visible:border-sky-500 p-2 px-4 rounded-xl"
            ref={descriptionInputRef}
            rows="5"
            id="description"
          ></textarea>
        </div>
        <div className="grid gap-2 mt-4 justify-end">
          <button onClick={submitHandler} className="py-2 px-4 bg-sky-700 hover:bg-sky-600 text-white uppercase rounded text-sm">
            Add Meetup
          </button>
        </div>
      </form>
    </Card>
  );
}

export default NewMeetupForm;
