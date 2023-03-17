import NewMeetupForm from "../components/meetups/NewMeetupForm";

import { useHistory } from "react-router-dom";

function NewMeetupPage() {
  const history = useHistory();

  function addMeetupHandler(meetupData) {
    fetch(
      "https://react-first-routing-default-rtdb.firebaseio.com/meetups.json",
      {
        method: 'POST',
        body: JSON.stringify(meetupData),
        headers: {
          'Content-Type': 'application/json'
        }
      }
    ).then(() => {
      history.replace('/');
    });
  }

  return (
    <section className="container mx-auto py-4">
      <h1 className="pb-4 text-2xl font-bold text-sky-700">Add New Meetup</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </section>
  );
}

export default NewMeetupPage;
