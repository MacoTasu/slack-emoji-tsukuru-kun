import React from 'react';

export default class Canvas extends React.Component {
    constructor(props) {
        super();
        this.state = {value: ''};
    }

    render() {
        return (
              <canvas id="text-drawer" width="516" height="516"　className="col-lg-6 col-md-6 col-sm-6 col-xs-6"></canvas>
        );
    }
}

import styles from './Canvas.css';
