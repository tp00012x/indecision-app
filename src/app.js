// JSX - JavaScript XML

const app = {
    title: 'Im sexy',
    subtitle: 'Yes I am.',
    options: ['One', 'Two']
};

const template = (
    <div>
        <h1>{app.title}</h1>
        {app.subtitle && <p>{app.subtitle}</p>}
        <p>{app.options.length > 0 ? 'Here are your options:' : 'No Options'}</p>
        <ol>
            <li>Item one</li>
            <li>Item two</li>
        </ol>
    </div>
);

let count = 0;

const addOne = () => {
    count ++;
    renderCounterApp();
};

const substractOne = () => {
    count --;
    renderCounterApp();
};

const reset = () => {
    count = 0;
    renderCounterApp();
};

const appRoot = document.getElementById('app');

const renderCounterApp = () => {
    const templateTwo = (
        <div>
            <h1>Count:{count}</h1>
            <button onClick={addOne}>+1</button>
            <button onClick={substractOne}>-1</button>
            <button onClick={reset}>Reset</button>
        </div>
    );

    ReactDOM.render(templateTwo, appRoot);
};

renderCounterApp();