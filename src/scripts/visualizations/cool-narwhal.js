// import d3 from 'd3';
import * as nwt from '../utils/contour-utils.js';
import Contour from '../core/contour.js';

Contour.export('coolNarwhal', function (data, layer) {
    layer.append('path')
        .attr('class', 'cool')
        .attr('opacity', 0)
        .attr('transform', 'scale(.5) translate(500 150)')
        .attr('d', 'M-220.02,76.509l-0.78,8.927c-0.956,10.949,1.389,20.422,6.188,30.383c10.203,21.173,63.095,84.05,93.72,115.075c20.145,20.406,19.487,23.018,21.549,40.122c2.487,20.621,24.897,66.462,40.838,71.269 c15.086,4.549,12.91-12.398,13.319-37.83c5.746,2.457,10.917,5.638,20.206,12.697c61.697,46.892,139.734,69.97,206.5,71.733c46.209,1.221,81.432-7.081,142.957-33.694c40.484-17.512,54.271-22.098,65.639-21.504c4.432,0.232,22.678,11.204,41.746,21.563c35.398,19.229,69.457,34.595,75.896,34.239c12.609-1.457-0.701-11.783-8.072-24.217c-7.049-11.892-15.414-29.572-18.844-42.134s-4.723-22.272-8.91-27.091c-2.143-2.463-12.812-6.786-21.189-8.146c-18.045-2.933-22.191-2.922-13.531-8.957c13.076-9.115,17.377-11.039,1.826-29.068c-6.383-7.402-11.336-20.003-13.709-39.542c-1.607-13.237,1.057-23.679-3.869-27.451s-17.271,12.341-20.846,19.334c-2.01,3.937-7.102,19.005-11.312,33.485c-13.795,47.427-29.865,65.742-62.693,71.447c-34.361,5.971-71.623-9.506-116.543-48.404c-13.164-11.399-29.533-25.26-39.254-36.913c-13.428-16.101-15.48-18.138-19.785-20.66c-16.166-9.472-54.98-31.694-103.525-63.815c-24.393-16.141-57.72-36.928-71.453-43.693c-27.236-13.417-68.416-28.952-90.731-46.771c-24.665-19.697-38.108-19.793-67.804-5.479c-21.429,10.328-23.941,15.298-26.52,15.726c-8.216-10.129-22.917-11.198-31.647-20.682c-9.529-10.35-28.027-14.098-37.824-24.957c-10.668-11.826-31.25-16.752-40.886-26.94c-11.339-11.989-29.387-16.096-40.838-26.637c-11.617-10.694-27.159-14.843-37.68-24.045c-10.383-9.082-23.187-12.538-31.408-19.163c-8.193-6.601-16.593-9.444-22.026-11.993c-5.433-2.549-7.398-2.522-7.658-1.927c-0.26,0.594,1.355,2.955,6.054,6.447c4.699,3.491,22.193,18.451,31.645,22.77c10.921,5.104,17.502,15.01,29.671,21.375c13.224,6.918,22.212,18.731,36.229,25.924c15.53,7.971,24.754,21.184,39.657,28.253c16.462,7.808,25.503,21.598,39.958,28.36c14.499,6.78,20.647,20.252,34.429,23.428C-238.033,58.207-227.932,70.443-220.02,76.509L-220.02,76.509z')
        .transition()
            .delay(300)
            .duration(2000)
            .attr('opacity', 1);
});
