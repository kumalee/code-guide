/** bad example **/
var profilecalendar = React.createClass({
  //...
  on_change: function(){
    //...
  },
  get_listview: function(){
    return (
      <ul>
        <li onClick={ this.on_change }>1</li>
        <li onClick={ this.on_change }>2</li>
      </ul>
    );
  },
  render: function(){
    return (
      <div className="calendar">
        { this.get_listview() }
      </div>
    )
  }
});

/** good example **/
var profileCalendar = React.createClass({
  //...
  _onChange: function(){
    //...
  },
  renderListView: function(){
    return (
      <ul>
        <li onClick={ this._onChange }>1</li>
        <li onClick={ this._onChange }>2</li>
      </ul>
    );
  },
  render: function(){
    return (
      <div className="calendar">
        { this.renderListView() }
      </div>
    )
  }
});
