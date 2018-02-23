  var price = new Vue({
    el: '#price',
    data: {
      original_league: '銀牌',original_area: '五(V)',original_point:'0',target_league: '金牌',target_area: '五(V)',target_point:'0'
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

        var original_league_Num=league_num(original_league);
        var original_area_num=area_num(original_area);
        var original_point_num=point_num(original_point);
        var target_league_Num=league_num(target_league);
        var target_area_num=area_num(target_area);
        var target_point_num=point_num(target_point); 

        //組合字串
        var og_league_area_point=''.concat(original_league_Num,original_area_num,original_point_num);
        var tg_league_area_point=''.concat(target_league_Num,target_area_num,target_point_num);
        

      
        return '1000';
      },
      original_changImage:function(){
        var original_league_image=this.original_league;
        return league_num(original_league_image);
      },
      target_changImage:function(){
        var target_league_image=this.target_league;
        return league_num(target_league_image);
      },Fn_point:function(){
        //原先分數與牌位與金額
        var original_league=this.original_league;
        var original_area=this.original_area;
        var original_point=this.original_point;
        //目標分數與牌位與金額
        var target_league=this.target_league;
        var target_area=this.target_area;
        var target_point=this.target_point;
        

        var original_league_Num=league_num(original_league);
        var target_league_Num=league_num(target_league);
        var original_area_num=area_num(original_area);
        var target_area_num=area_num(target_area);

        var og_league_area=''.concat(original_league_Num,original_area_num);
        var tg_league_area=''.concat(target_league_Num,target_area_num);

        // alert(og_league_area);
        if(og_league_area>tg_league_area){
          //牌位不符合直接排除掉 
          return 'leagueORareaFail';
        }else if(og_league_area==tg_league_area&&original_point>=target_point){
          //接著判斷相同牌位 相同分區 就要判斷分數
          return 'pointSame';
        }else if(original_point>100||original_point<0||target_point>100||target_point<0){
          return 'pointFail';
        }else{
          return 'success';
        }
      }
    }
  })

//  傳入牌位 回傳數字
  function league_num(leange){
    switch(leange) {
      case '銅牌':
        return 1
        break;
      case '銀牌':
        return 2
        break;
      case '金牌':
        return 3
        break;
      case '白金':
        return 4
        break;
      case '鑽石':
        return 5
        break;
      case '大師':
        return 6
        break;
      case '菁英':
        return 7
        break;      
    }
  }
//  傳入分區 回傳數字  一區回傳5 五區回傳1 目的為判斷牌位順序與價格計算方便
function area_num(area){
  switch(area) {
    case '一(I)':
      return 5
      break;
    case '二(II)':
      return 4
      break;
    case '三(III)':
      return 3
      break;
    case '四(IV)':
      return 2
      break;
    case '五(V)':
      return 1
      break;      
  }
}
//  傳入分數 回傳數字  0~20分回傳1 以此類推
function point_num(point){
  switch(true) {
    case point<20:
      return 0
      break;
    case point>=20&& point<40:
      return 1
      break;
    case point>=40 && point<60:
      return 2
      break;
    case point>=60 && point<80:
      return 3
      break;
    case point>=80 && point<100:
      return 4
      break;         
    case point==100:
      return 5
      break;
    }
}