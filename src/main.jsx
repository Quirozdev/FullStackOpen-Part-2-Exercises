import ReactDOM from 'react-dom/client';
import CourseApp from './apps/CourseApp/CourseApp';
import PhonebookApp from './apps/PhonebookApp/PhonebookApp';
import NoteApp from './apps/NotesApp/NotesApp';

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <CourseApp />
    <hr />
    <PhonebookApp />
    <NoteApp />
  </>
);
