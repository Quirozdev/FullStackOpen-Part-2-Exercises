import ReactDOM from 'react-dom/client';
import CourseApp from './apps/CourseApp/CourseApp';
import PhonebookApp from './apps/PhonebookApp/PhonebookApp';
import NoteApp from './apps/NotesApp/NotesApp';

const notes = [
  {
    id: 1,
    content: 'HTML is easy',
    important: true,
  },
  {
    id: 2,
    content: 'Browser can execute only JavaScript',
    important: false,
  },
  {
    id: 3,
    content: 'GET and POST are the most important methods of HTTP protocol',
    important: true,
  },
];

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <CourseApp />
    <hr />
    <PhonebookApp />
    {/* <NoteApp notes={notes} /> */}
  </>
);
