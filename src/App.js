import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Stack, Button } from 'react-bootstrap';

const mock = [
  {
    title: 'aaa',
    id: 1
  },
  {
    title: 'dfgvhb kjl kmnjhbv gfcbdc gnhvbjnk',
    id: 2
  },
  {
    title: 'lol text',
    id: 3
  },
  {
    title: 'zerkalo',
    id: 4
  },
  {
    title: 'tak v biblii napisano',
    id: 5
  },
  {
    title: 'vy menya ne slishite',
    id: 6
  }
]


function App() {
  return (
    <>
      <Stack gap={2} className='m-auto game justify-content-center flex-wrap' direction='horizontal'>
        {mock.map((e) => <Button key={e.id} className='bingoButton'>{e.title}</Button>)}
      </Stack>
    </>
  );
}

export default App;
