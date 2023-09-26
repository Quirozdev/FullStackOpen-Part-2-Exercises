import ReactDOM from 'react-dom/client';
import CourseApp from './apps/CourseApp/CourseApp';
import PhonebookApp from './apps/PhonebookApp/PhonebookApp';
import NoteApp from './apps/NotesApp/NotesApp';
import CountriesDataApp from './apps/CountriesDataApp/CountriesDataApp';

import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <CourseApp />
    <hr />
    <PhonebookApp />
    <hr />
    <NoteApp />
    <hr />
    <CountriesDataApp />
  </>
);
