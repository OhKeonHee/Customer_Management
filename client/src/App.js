import './App.css';
import Customer from './Components/Customer.js';

const customers = [
  {
    'id' : 1,
    'name' : '오건희',
    'birthday' : '981222',
    'image' : 'http://via.placeholder.com/64x64',
    'gender' : '남자',
    'job' : '개발자'
  },
  {
    'id' : 2,
    'name' : '오건희',
    'birthday' : '981222',
    'image' : 'http://via.placeholder.com/64x64',
    'gender' : '남자',
    'job' : '개발자'
  },
  {
    'id' : 3,
    'name' : '오건희',
    'birthday' : '981222',
    'image' : 'http://via.placeholder.com/64x64',
    'gender' : '남자',
    'job' : '개발자'
  },
]

function App() {
  return (
    <div>
      <Customer customers={customers} />
    </div>
  );
}

export default App;
