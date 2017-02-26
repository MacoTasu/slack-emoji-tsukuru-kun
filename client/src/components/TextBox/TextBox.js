import React from 'react';
import Canvas from '../Canvas';

class TextBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {text: '', color: '#545454', size: '200'};

        this.handleTextChange = this.handleTextChange.bind(this);
        this.handleColorChange = this.handleColorChange.bind(this);
        this.handleSizeChange = this.handleSizeChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleTextChange(event) {
        this.setState(Object.assign(this.state, {text: event.target.value}));
    }

    handleColorChange(event) {
        this.setState(Object.assign(this.state, {color: event.target.value}));
    }

    handleSizeChange(event) {
        this.setState(Object.assign(this.state, {size: event.target.value}));
    }

    handleSubmit(event) {
        var canvas = document.getElementById('text-drawer');
        if ( !canvas || !canvas.getContext ) {
          return false;
        }
        var context = canvas.getContext('2d');
        context.font = this.state.size + "px 'ヒラギノ角ゴシック体 W8'";
        context.fillStyle = this.state.color;
        context.fillText(this.state.text, 0,178);
        event.preventDefault();
        document.getElementById("img-preview").src = canvas.toDataURL();
        document.getElementById("img-download").href = canvas.toDataURL();
    }

    sizeOptions() {
      var options = [];
      for(var i=0; i < 500; i++){
           options.push(<option value={{i}}>i + "px"</option>)
      }
      return options;
    }

    render() {
        return (
                <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4 col-md-offset-1 col-lg-offset-1 col-xs-offset-1 col-sm-offset-1">
                <form onSubmit={this.handleSubmit}>
                  <div className="form-group">
                    <input type="text" value={this.state.value} onChange={this.handleTextChange} className="form-control" placeholder="Please enter the character you want to create..." />
                  </div>
                  <div className="form-group">
                    <input type="color" name="color" value={this.state.color} onChange={this.handleColorChange} className="form-control" />
                  </div>
                  <div className="form-group">
                    <select defaultValue="200" onChange={this.handleSizeChange} className="form-control">
                      {this.sizeOptions}
                    </select>
                  </div>

                  <div className="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
                    <div className="btn-group" role="group" aria-label="Third group">
                      <input type="submit" value="追加" className="btn btn-primary" />
                    </div>
                    <div className="btn-group" role="group" aria-label="Third group">
                      <a className="btn btn-primary" id="img-download" href="#" download="icon.png">ダウンロード</a>
                    </div>
                    <div className="btn-group" role="group" aria-label="Third group">
                      <a className="btn btn-primary" id="img-download" href='/'>クリア</a>
                    </div>
                  </div>
                </form>
                </div>
        );
    }
}

export default TextBox;
