<template>
  <div id="wrap">
    <div id="header">
      <div class="con">
        <div class="box c">1</div>
        <div class="box c">2</div>
        <div class="box c">3</div>
      </div>
    </div>
    <div id="nav">
      <div class="con">
        <ul>
         <li>about</li>
         <li>product</li>
         <li>contact</li>
         <li>order</li>
       </ul>
       </div>
    </div>
    <div id="content">
      <div class="con">
        <div class="box">01</div>
        <div class="box">02</div>
      </div>
       <div class="con">
        <div class="box">03</div>
        <div class="box">04</div>
        <div class="box">05<br /><br /><br />bottom</div>
      </div>
    </div>
      <div id="footer">
      <div class="con">
        <ul>
         <li>footer01</li>
         <li>footer02</li>
         <li>footer03</li>
       </ul>
       </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'gayoungtest',
  data () {
    return {
    }
  }
}
</script>

<style lang="scss">
.startBox {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}
#wrap{
  width:100%;
  max-width:800px;
  margin:20px auto;
  text-align: center;
  .con{
    width:100%;
    display: table;
    border:1px solid #000000;
    .box{
      border:1px solid #000000;
      display:table-cell;
    }
  }
  #header{
    &.c .box{
      width:33.33%;
      }

  }
  #nav{
      ul {
        padding:0;
        width: 100%;
        display: table;
        li{
          list-style-type: none;
          display:table-cell;
          border:1px solid #000000;
          width: 25%;
        }
      }
    }
  }
  #footer{
      ul {
        padding:0;
        width: 100%;
        display: table;
        li{
          list-style-type: none;
          display:table-cell;
          border:1px solid #000000;
          width: 25%;
        }
      }
  }
</style>
