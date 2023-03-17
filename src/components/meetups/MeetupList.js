import MeetupItem from "./MeetupItem";

function MeetupList(props) {
  return (
    <ul className="grid grid-cols-4 gap-4">
      {props.meetupList.map((meetup) => {
        return (
          <MeetupItem
            key={meetup.id}
            id={meetup.id}
            title={meetup.title}
            image={meetup.image}
            address={meetup.address}
            description={meetup.description}
          />
        );
      })}
    </ul>
  );
}

export default MeetupList;
