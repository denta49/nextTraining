import MeetupList from "../components/meetups/MeetupList";
import { useEffect, useState } from "react";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "First",
    image:
      "http://t3.gstatic.com/licensed-image?q=tbn:ANd9GcQc5AlEw5MPfZNzZ5ZZzMRVsC-JYMNCXvQt-HfmZIev3pgjtOvOgnFW-8U5vhaZuxCd",
    addres: "some addres4, 22323, sad",
    description: "First meetup",
  },
  {
    id: "m2",
    title: "Second",
    image:
      "http://t3.gstatic.com/licensed-image?q=tbn:ANd9GcQc5AlEw5MPfZNzZ5ZZzMRVsC-JYMNCXvQt-HfmZIev3pgjtOvOgnFW-8U5vhaZuxCd",
    addres: "some addres 55, 22323, sad",
    description: "sec meetup",
  },
];

function HomePage() {
  const [loadedMeetups, setLoadedMeetups] = useState([]);
  useEffect(() => {
    setLoadedMeetups(DUMMY_MEETUPS);
  }, []);

  return <MeetupList meetups={loadedMeetups}></MeetupList>;
}

export default HomePage;
