
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
      text: '',
      rates: {
        "AUD": 1.5346,
        "CAD": 1.4577,
        "CHF": 1.6043,
        "CYP": 0.5767,
        "CZK": 36.063,
        "DKK": 7.4404,
        "EEK": 15.647,
        "GBP": 0.6246,
        "HKD": 7.8624,
        "HUF": 254.53,
        "ISK": 73.03,
        "JPY": 102.75,
        "KRW": 1140,
        "LTL": 4.0454,
        "LVL": 0.5916,
        "MTL": 0.4151,
        "NOK": 8.062,
        "NZD": 1.9331,
        "PLN": 4.1835,
        "ROL": 18273,
        "SEK": 8.552,
        "SGD": 1.6769,
        "SIT": 198.89,
        "SKK": 42.317,
        "TRL": 546130,
        "USD": 1.009,
        "ZAR": 6.2013
      }
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    return React.createElement(
      "div",
      null,
      React.createElement(
        "h3",
        null,
        "Currency Exchange Rates"
      ),
      React.createElement(CurrencyList, { items: this.state.items }),
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

class CurrencyList extends React.Component {
  render() {
    return React.createElement(
      "ul",
      null,
      this.props.items.map(item => React.createElement(Item, { key: item.id, text: item.text, rate: item.rate }))
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

