import React from 'react';

class Preview extends React.Component {
    constructor(props) {
        super();
        this.state = {value: ''};
    }

    render() {
        return (
            <div className="col-lg-2 col-md-2 col-sm-2 col-xs-2">
              <img id="img-preview" width="128" height="128" />
              <p>右クリックで保存</p>
            </div>
        );
    }
}

import styles from './Preview.css';
export default Preview;
