/**
 * 使用object 存放價格
 * 採用累進制 以銅牌五0分為開始
 * 2018/02/24 by steve
 * Key說明
 * 第一位數字為 牌位代表 銅:1,銀:2,金:3... 依此類推
 * 第二位數字為 分區代表 五區:1四區:2三區:3...  依此類推
 * 第三位數字為 分數代表 0~19:1,20-39:2,40-59:3...依此類推  --分數先不建(感覺有更好的方法)
 * 　
 *♬　大師每勝差１,２００元起。
 *♬　菁英每勝差１,６００元起。

 */
var price_total = {11:0,12:700,13:1400,14:2100,15:2800,          //銅牌
                   21:3650,22:4550,23:5450,24:6350,25:7250,      //銀牌
                   31:8350,32:9450,33:10650,34:12050,35:13450,   //金牌
                   41:15050,42:16450,43:18050,44:20050,45:22050, //白金
                   51:24450,52:27450,53:30950,54:34950,55:38950, //鑽石
                   61:44950                                      //大師
}
//區段勝差對應價錢
var price_point = {11:120,12:120,13:120,14:120,15:120,  //銅牌
                   21:140,22:140,23:140,24:140,25:140,  //銀牌
                   31:180,32:180,33:200,34:200,35:220,  //金牌
                   41:250,42:250,43:300,44:300,45:300,  //白金
                   51:500,52:500,53:600,54:600,55:800,  //鑽石
                   61:1200,71:1400                      //大師、菁英
}


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
      var original_point=parseInt(this.original_point);
      //目標分數與牌位與金額
      var target_league=this.target_league;
      var target_area=this.target_area;
      var target_point=parseInt(this.target_point);

      var original_league_Num=parseInt(league_num(original_league));
      var original_area_num=parseInt(area_num(original_area));
      var original_point_num=parseInt(point_num(original_point));
      var target_league_Num=parseInt(league_num(target_league));
      var target_area_num=parseInt(area_num(target_area));
      var target_point_num=parseInt(point_num(target_point)); 

      //組合字串
      var og_league_area=''.concat(original_league_Num,original_area_num);
      var tg_league_area=''.concat(target_league_Num,target_area_num);


      totalPrice=price_total[tg_league_area]-price_total[og_league_area];
      
      //若分數不為零則需判斷分數  此為原始分數 須扣除原先勝差的金額
      if(original_point_num!=0){
        totalPrice-=price_point[og_league_area]*original_point_num;  
      }
      //若分數不為零則需判斷分數  此為目標分數 須加上多買分數勝差的金額
      if(target_point_num!=0){
        totalPrice+=price_point[tg_league_area]*target_point_num;  
      }

      return totalPrice;
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
      var original_point=parseInt(this.original_point);
      //目標分數與牌位與金額
      var target_league=this.target_league;
      var target_area=this.target_area;
      var target_point=parseInt(this.target_point);
      

      var original_league_Num=parseInt(league_num(original_league));
      var target_league_Num=parseInt(league_num(target_league));
      var original_area_num=parseInt(area_num(original_area));
      var target_area_num=parseInt(area_num(target_area));

      var og_league_area=''.concat(original_league_Num,original_area_num);
      var tg_league_area=''.concat(target_league_Num,target_area_num);
      // alert(og_league_area);
      if(og_league_area>tg_league_area){
        //牌位不符合直接排除掉 
        return 'leagueORareaFail';
      }else if(og_league_area==tg_league_area&&original_point==target_point){
        //接著判斷相同牌位 相同分區 就要判斷分數
        return 'pointSame';
      }else if(original_point>100||original_point<0||target_point>100||target_point<0||(original_point>target_point&&og_league_area==tg_league_area)){
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

