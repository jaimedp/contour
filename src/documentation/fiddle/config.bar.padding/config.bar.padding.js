(function () {
    
    new Contour({
        el: '.myBarChart',
        // at the height of this fiddle, 
        // max padding is 24
        bar: { padding: 15 }
      })
    .cartesian()
    .bar([
            {name: 'series1', data: [1,2,3,4]},
            {name: 'series2', data: [5,6,7,8]}
          ])
    .render()
})();