<template>
  <div id="wrap">
    <div id="header">
      header
    </div>
    <div id="navi">
      <div class="box">
        <ul>
          <li>menu01</li>
          <li>menu02</li>
          <li>menu03</li>
        </ul>
      </div>
    </div>
    <div id="contents">
      <div class="con">
        <div class="box">
            area01
        </div>
        <div class="box">
          area02
        </div>
        <div class="box">
          <div class="rightNavi">
            <ul>
              <li>icon_01</li>
              <li>icon_02</li>
              <li>icon_03</li>
              <li>icon_04</li>
              <li>icon_05</li>
            </ul>
          </div>
          <div class="rightCon">
            <div>
              <div class="rightTitle">고객정보
                <a href="">x</a>
              </div>
              <div>
                <div class="conTitle">일반정보</div>
                <table>
                  <tr>
                    <th>이름</th>
                    <td><input type="text"></input></td>
                  </tr>
                  <tr>
                    <th>전화번호</th>
                    <td><input type="text"></input></td>
                  </tr>
                  <tr>
                    <th>이메일</th>
                    <td><input type="text"></input></td>
                  </tr>
                  <tr>
                    <th>클레임정보</th>
                    <td><input type="text"></input></td>
                  </tr>
                  <tr>
                    <th>생년월일</th>
                    <td><input type="text"></input></td>
                  </tr>
                  <tr>
                    <th>성별</th>
                    <td><input type="text"></input></td>
                  </tr>
                  <tr>
                    <td colspan="2"><input type="text" class="userMemo"></input></td>
                  </tr>
                </table>
              </div>
              <div>
                <div class="conTitle">상담이력</div>
                <dl class="history">
                  <dt>배송문의 > 배송지연 > 취소요청</dt>
                  <dd>ㅁ 주문번호 20200001- 000001</br>
                      - 고객명 : 홍길동</br>
                      - 연락처 : 010-1234-1234</br>
                      - 상담내용 : 주문한지 10일 지났으나 배송지연으로 취소요청
                  </dd>
                  <dd class="date">2020-06-13  17:46:22</dd>
                </dl>
              </div>
              <div>
                <div class="conTitle">관리메모</div>
                <dl>
                  <dd>클레임 정도 상 -> 하로 하향 단, 세심한 관리 필요
                  </dd>
                  <dd>2020-06-13  137:46:22</dd>
                  <dd>작성 서지혜 상담사</dd>
                </dl>
              </div>
            </div>
            </div>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'call',
  data () {
    return {
    }
  }
}
</script>

<style lang="scss">
*{
  margin:0;
  padding:0;
  ul{
    list-style-type: none;
    padding-left:0;
  }
}
#warp{
  list-style-type: none;
  padding:0;
  margin:0;
  position: relative;
}
#header{
  position:fixed;
  width: 100%;
  height: 50px;
  z-index: 10;
  border: 1px solid #000;
  background-color: #fff;
}
#navi{
  position: absolute;
  padding: 50px 0 0 0;
  width: 100px;
  height: 100%;
  background-color: #E5E8F2;
  border:1px solid #DFE3E8;
}
#contents{
  padding:50px 0 0 100px;
  height: 100%;
  .con{
    display:table;
    width: 100%;
    height: 100%;
    .box{
      display:table-cell;
      width: 33.33%;
      height: 100%;
      border:1px solid #000;
      .rightNavi{
        position:absolute;
        padding:50px 0 0 0;
        top:0;
        right:0;
        width:65px;
        height:100%;
        background-color:#E5E8F2;
      }
      .rightCon{
        position:relative;
        margin:0 65px 0 0;
        .rightTitle{
          width: 100px;
          height: 55px;
          line-height:55px;
          font-size:18px;
          a{
            position:absolute;
            right:0;
            padding:0 10px;
          }
        }
        .conTitle{
          width:100%;
          height:55px;
          padding: 0 0 0 50px;
          background-color: #f9f9ff;
          border-top: 1px solid #c4cdd5;
          border-bottom: 1px solid #c4cdd5;
          font-size:14px;
          line-height:55px;
        }
        table{
          padding: 20px 25px;
          width: 100%;
          tr{
            height:32px;
            }
          th{
            text-align:left;
            font-size: 14px;
            color: #8C8C8C;
          }
          .userMemo{
            width: 100%;
            height:120px;
            border: 1px solid #E8E8E8;
            border-radius: 5px;
          }
          input{
            width: 100%;
          }
        }
        .history{
          padding:18px;
          dt{
            display: inline-block;
            padding:10px;
            background-color: #f0f0fa;
            line-height:14px;
            border-radius:2px;
          }
          dd{
            margin:12px 0 6px 0;
            color:#737373;
          }
          .date{
            text-align:right;
            font-size: 12px;
            color: #a7a7aa;
          }
        }
      }
    }
  }
}
</style>
