
class SimpleWidget extends React.Component {
  render() {
    return React.createElement(
      "div",
      { className: "simple-widget" },
      React.createElement(
        "h3",
        null,
        "Currency Exchange Rates"
      ),
      React.createElement(
        "ul",
        null,
        React.createElement(
          "li",
          null,
          "CAD -> 1.45"
        ),
        React.createElement(
          "li",
          null,
          "USD -> 1.01"
        ),
        React.createElement(SimpleItem, { currency: "JPY -> ???" })
      )
    );
  }
}

class SimpleItem extends React.Component {
  render() {
    return React.createElement(
      "li",
      null,
      this.props.currency
    );
  }
}

class ExchangeApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      date: '2017-10-31',
      text: '',
      rates: {}
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
    this.refreshRates = this.refreshRates.bind(this);
  }

  refreshRates() {
    fetch("http://api.fixer.io/" + this.state.date).then(response => {
      console.log(response.status, response.statusCode);
      if (response.ok) {
        return response.json();
      } else {
        throw "No Rates";
      }
    }).then(json => {
      console.log("GOT ", json);
      this.setState({ rates: json.rates });
    }).catch(error => console.log(error));
  }

  componentDidMount() {
    this.refreshRates();
  }

  render() {
    return React.createElement(
      "div",
      null,
      React.createElement(
        "h3",
        null,
        "Currency Exchange Rates for",
        React.createElement(DatePicker, {
          currentDate: this.state.date,
          dateChange: this.handleDateChange
        })
      ),
      React.createElement(CurrencyList, {
        items: this.state.items,
        rates: this.state.rates
      }),
      React.createElement(
        "form",
        { onSubmit: this.handleSubmit },
        React.createElement("input", {
          onChange: this.handleChange,
          value: this.state.text
        }),
        React.createElement(
          "button",
          null,
          "Add #",
          this.state.items.length + 1
        )
      )
    );
  }

  handleDateChange(e) {
    this.setState({ date: e.target.value }, this.refreshRates);
  }

  handleChange(e) {
    this.setState({ text: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (!this.state.text.length) {
      return;
    }
    const newItem = {
      text: this.state.text,
      id: Date.now(),
      rate: this.state.rates[this.state.text]
    };
    this.setState(prevState => ({
      items: prevState.items.concat(newItem),
      text: ''
    }));
  }
}

class DatePicker extends React.Component {
  render() {
    return React.createElement("input", {
      value: this.props.currentDate,
      onChange: this.props.dateChange
    });
  }
}

class CurrencyList extends React.Component {
  render() {
    return React.createElement(
      "ul",
      null,
      this.props.items.map(item => React.createElement(Item, { key: item.id, text: item.text, rate: this.props.rates[item.text] }))
    );
  }
}

function Item(props) {
  return React.createElement(
    "li",
    null,
    props.text,
    " -> ",
    props.rate
  );
}

ReactDOM.render(React.createElement(ExchangeApp, null), document.getElementById('root'));

