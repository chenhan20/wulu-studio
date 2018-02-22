var app_1 = new Vue({
    el: '#app_1',
    data: {
      message: 'Hello Vue!'
    }
  })

  var app_2 = new Vue({
    el: '#app_2',
    data: {
      checkedNames: []
    }
  })

  var app_3 = new Vue({
    el: '#app_3',
    data: {
      original_league: '銅牌',original_area: '五區(V)',original_point:'0',target_league: '銅牌',target_area: '五區(V)',target_point:'0'
    },
    methods: {
      //計算金額
      TotalPrice: function() {
        //原先分數與牌位與金額
        var original_league=this.original_league;
        var original_area=this.original_area;
        var original_point=this.original_point;
        //目標分數與牌位與金額
        var target_league=this.target_league;
        var target_area=this.target_area;
        var target_point=this.target_point;
        return '1000';
      }
    }
  })