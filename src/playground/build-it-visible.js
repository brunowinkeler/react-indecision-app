let visibility = false;

const toggleVisibility = () => {
  visibility = !visibility;
  renderApp();
};

const renderApp = () => {
  const template = (
    <div>
      <h1>Visibility Toggle</h1>
      <button onClick={toggleVisibility}>
        {visibility ? 'Hide Details' : 'Show Details'}
      </button>
      {
        visibility && (<p>Some info</p>)
      }
    </div>
  );

  ReactDOM.render(template, document.getElementById('app'));
};

renderApp();
