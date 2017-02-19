import React from 'react';
import {Provider} from 'mobx-react';
import stores from './stores';

import css from './css/layout.css';

export default () => <Provider {...stores}>
	<div className={css.layout}>
		{this.props.children}
	</div>
</Provider>;
