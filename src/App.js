import Body from './components/Body';
import './index.css';

const App = () => {
    return (
        <div className='wrapper'>
            <a href='https://www.github.com/vijaygupta18' target='_blank' rel='noopener noreferrer'>
                <span role='img' aria-label='rocket'>
                    🚀
                </span>
                IntoSpace
                <span role='img' aria-label='rocket'>
                    🚀
                </span>
            </a>
            <Body />
        </div>
    );
};

export default App;