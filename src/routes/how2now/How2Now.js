/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import { Button, Tooltip } from 'material-ui';
import { Help } from 'material-ui-icons';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './How2Now.css';

class How2Now extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
  };

  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <h1>{this.props.title}</h1>
          <p>...</p>
          <Button variant="raised" color="primary">
            Hello World
          </Button>
          <Tooltip>
            <Button variant="fab" color="primary" aria-label="Help">
              <Help />
            </Button>
          </Tooltip>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(How2Now);
