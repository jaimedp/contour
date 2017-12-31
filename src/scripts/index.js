
import Contour from './core/contour.js';
import './core/cartesian.js';
import './core/horizontal-frame.js';
import './core/exportable.js';

import './core/axis/y-axis.js';
import './core/axis/axis-scale-factory.js';
import './core/axis/centered-y-axis.js';
import './core/axis/linear-scale-axis.js';
import './core/axis/log-y-axis.js';
import './core/axis/ordinal-scale-axis.js';
import './core/axis/smart-y-axis.js';
import './core/axis/time-scale-axis.js';

import './visualizations/area.js';
import './visualizations/bar.js';
import './visualizations/column.js';
import './visualizations/cool-narwhal.js';
import './visualizations/legend.js';
import './visualizations/line.js';
import './visualizations/null.js';
import './visualizations/pie.js';
import './visualizations/scatter.js';
import './visualizations/stack-tooltip.js';
import './visualizations/tooltip.js';
import './visualizations/trend-line.js';

// import '../styles/contour.less';

// module.exports = Contour;

export default Contour;

if (typeof window !== 'undefined') {
  window.Contour = Contour;
}


