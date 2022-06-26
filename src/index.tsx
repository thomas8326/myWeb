import i18Init from './i18n';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from 'src/App';
import reportWebVitals from 'src/reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

i18Init.then(() => {
    root.render(<App />);
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
