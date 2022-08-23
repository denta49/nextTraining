import MeetupList from "../components/meetups/MeetupList";
const DUMMY_MEETUPS = [
  {
    id: 'm1',
    title: "First",
    image: 'http://t3.gstatic.com/licensed-image?q=tbn:ANd9GcQc5AlEw5MPfZNzZ5ZZzMRVsC-JYMNCXvQt-HfmZIev3pgjtOvOgnFW-8U5vhaZuxCd',
    addres: 'some addres4, 22323, sad',
    description: 'First meetup',
  },
  {
    id: 'm2',
    title: "Second",
    image: 'http://t3.gstatic.com/licensed-image?q=tbn:ANd9GcQc5AlEw5MPfZNzZ5ZZzMRVsC-JYMNCXvQt-HfmZIev3pgjtOvOgnFW-8U5vhaZuxCd',
    addres: 'some addres 55, 22323, sad',
    description: 'sec meetup',
  }
]
function HomePage() {
  return (
    <MeetupList meetups={DUMMY_MEETUPS}></MeetupList>
  )
}

export default HomePage