var React = require('react'),
    ReactDOM = require('react-dom'),
    ListManager = require('./components/ListManager.jsx');

ReactDOM.render(
    <ListManager title="Ingredients" />,
    document.getElementById('ingredients')
);

ReactDOM.render(
    <ListManager title="ToDo" />,
    document.getElementById('todo')
);

ReactDOM.render(
    <ListManager title="Christmas" headingColor="#e52d27" />,
    document.getElementById('christmas')
);
