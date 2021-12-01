import '../assets/css/app.css'
import { ContentWrapper } from './ContentWrapper';
import { SlideBar } from './SlideBar';

function App() {
  return (
    <div id="wrapper">
      <SlideBar />,
      <ContentWrapper />
    </div>
  );
}

export default App;
