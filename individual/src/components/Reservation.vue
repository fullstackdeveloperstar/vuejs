<template>
  <div class="reservation ltr">
    <div class="header flex">
      <div class="header-item">Individual Reservation</div>
      <div class="header-item">1 out of 1</div>
      <div class="header-item">
        <span>asdf</span>
        <span class="hebrew">Hebrew</span>
        <input type="checkbox">
      </div>
    </div>

    <table class="menu">
      <thead>
        <td>Res</td>
        <td>Id</td>
        <td>Guest Name</td>
        <td>Guests</td>
        <td>Arrive</td>
        <td>Ngt</td>
        <td>Category</td>
        <td>Type</td>
        <td>Room</td>
        <td>Status</td>
        <td>Total stay</td>
        <td>Curr</td>
        <td>Total All</td>
        <td>Share</td>
        <td>Half</td>
        <td>Checked</td>
        <td>%Rm</td>
        <td>%Plan</td>
        <td>Pre</td>
      </thead>

      <tbody>
        <tr class="fill">
          <td>6218</td>
          <td>1</td>
          <td>Baier-Folwill Barbara</td>
          <td>1/0/00</td>
          <td>21/03/2018</td>
          <td>2</td>
          <td>Regular</td>
          <td>Double</td>
          <td></td>
          <td>Reserved</td>
          <td>287.96</td>
          <td>USD</td>
          <td>287.96</td>
          <td></td>
          <td><input type="checkbox"></td>
          <td>Checked</td>
          <td>0</td>
          <td>0</td>
          <td></td>
          
        </tr>
        <tr class="empty"></tr>
      </tbody>
    </table>

    <div class="info flex">
      <div class="reservation">
        <p class="under-line-title"><span>Reservation</span></p>
        <div class="panel">
          
          <div class="flex panel-row">
            <div class="flex panel-col-2">
              <label>Last Name:</label>
            </div>  
            <div class="panel-col-4">
              <input type="text" value="Baier-folwall" class="panel-col-10">
            </div>
            <div class="flex panel-col-4 justify-content-center">
              <input type="checkbox">
              <label>Check History</label>
            </div>
          </div>

          <div class="flex panel-row">
            <div class="flex panel-col-2">
              <label>First Name:</label>
            </div>  
            <div class="panel-col-4">
              <input type="text" value="Baier-folwall" class="panel-col-10">
            </div>
            <div class="flex panel-col-4 justify-content-center">
              <div class="panel-col-3"><label>Title:</label></div>
              <div class="panel-col-7"><input type="text" class="panel-col-10"></div>
            </div>
          </div>

          <div class="flex panel-row">
            <div class="flex panel-col-2">
              <label>Arrival:</label>
            </div>  
            <div class="panel-col-2 flex align-center">
              <input type="date" value="03/03/2018" class="panel-col-10" placeholder="">
              <span>Wed</span>
            </div>

            <div class="panel-col-2 flex align-center justify-content-end">
              <span>Nights:</span>
              <input type="number" value="2" class="panel-col-3">
            </div>

            <div class="flex panel-col-4 justify-content-center">
                <a href="#">2381234897</a>
            </div>
          </div>

          <div class="flex panel-row">
            <div class="flex panel-col-2">
              <label>Departure:</label>
            </div>  
            <div class="panel-col-2 flex align-center">
              <input type="date" value="03/03/2018" class="panel-col-10" placeholder="">
              <span> Fri </span>
            </div>

            <div class="panel-col-3 flex align-center justify-content-end">
              
            </div>

            <div class="flex panel-col-3 justify-content-end">
              <label>Eta:</label>
              <input type="text" value="00:00" class="panel-col-3">
            </div>
          </div>

          <div class="flex panel-row">
            <div class="flex panel-col-2">
              <label>Adults:</label>
            </div>  
            <div class="panel-col-2 flex align-center">
              <input type="number" value="1" class="panel-col-3">
            </div>

            <div class="panel-col-3 flex align-center justify-content-end">
              <input type="checkbox">
              <span>Late checkout</span>
            </div>

            <div class="flex panel-col-3 justify-content-end">
              <label>Eta:</label>
              <input type="text" value="00:00" class="panel-col-3">
            </div>
          </div>

          <div class="flex panel-row">
            <div class="flex panel-col-2">
              <span>jnr/</span>&nbsp;&nbsp;&nbsp;
              <span>Child/</span>&nbsp;&nbsp;&nbsp;
              <span>Inf:</span>
            </div>  
            <div class="panel-col-2 flex align-center">
              <input type="number" value="" class="panel-col-3">&nbsp;
              <input type="number" value="" class="panel-col-3">&nbsp;
              <input type="number" value="" class="panel-col-3">
            </div>

          </div>         

        </div>

        <div class="panel">
          
          <div class="flex panel-row">
            <div class="flex panel-col-2">
              <label>Agent:</label>
            </div>  
            <div class="panel-col-3">
              <input type="text" value="booking" class="panel-col-8">
            </div>
            <div class="flex panel-col-5 justify-content-center">
              <div class="panel-col-4">
                <label>Voucher Type: </label>
              </div>
              <input type="text" value="Client Account" class="panel-col-6">
              
            </div>
          </div>

          <div class="flex panel-row">
            <div class="flex panel-col-2">
              <label>Company:</label>
            </div>  
            <div class="panel-col-3">
              <input type="text" value="" class="panel-col-8">
            </div>
            <div class="flex panel-col-5 justify-content-center">
              <div class="panel-col-4">
                <label>Voucher Nbr: </label>
              </div>
              <input type="text" value="1484561261" class="panel-col-6">
            </div>
          </div>   

          <div class="flex panel-row">
            <div class="flex panel-col-2">
              <label>Group:</label>
            </div>  
            <div class="panel-col-3">
              <input type="text" value="" class="panel-col-9">
            </div>
            <div class="flex panel-col-5 justify-content-center">
              <div class="panel-col-4">
                <label>Payment by: </label>
              </div>
              <input type="text" value="Guest" class="panel-col-6">
            </div>
          </div>   

          <div class="flex panel-row">
            <div class="flex panel-col-2">
              <label>Status:</label>
            </div>  
            <div class="panel-col-3">
              <input type="text" value="Reserved" class="panel-col-9">
            </div>
          </div>

          <div class="flex panel-row">
            <div class="flex panel-col-2">
              <label>Allocation:</label>
            </div>  
            <div class="panel-col-3">
              <input type="text" value="" class="panel-col-9">
            </div>
            <div class="flex panel-col-5 justify-content-center">
              <div class="panel-col-4 flex align-center">
                <label>Gtd: </label>
                <input type="checkbox">
                <label>Till:</label>
              </div>
              <div class="panel-col-6">
                <input type="text" value="00:00" class="panel-col-3">
              </div>
            </div>
          </div> 
          
        </div>

        <div class="panel">
          
          <div class="flex panel-row">
            <div class="flex panel-col-2">
              <label>Wing:</label>
            </div>  
            <div class="panel-col-3">
              <input type="text" value="booking" class="panel-col-9">
            </div>
          </div>

          <div class="flex panel-row">
            <div class="flex panel-col-2">
              <label>Category:</label>
            </div>  
            <div class="panel-col-3">
              <input type="text" value="" class="panel-col-9">
            </div>
            <div class="flex panel-col-5 justify-content-center">
              <div class="panel-col-4">
                <label>Upgrade: </label>
              </div>
              <input type="text" value="" class="panel-col-6">
            </div>
          </div>   

          <div class="flex panel-row">
            <div class="flex panel-col-2">
              <label>Room Type:</label>
            </div>  
            <div class="panel-col-3">
              <input type="text" value="" class="panel-col-9">
            </div>
            <div class="flex panel-col-5 justify-content-center">
              <div class="panel-col-4">
                <label>Room: </label>
              </div>
              <input type="text" value="" class="panel-col-6">
            </div>
          </div>   
          
        </div>

      </div>

      <div class="price">
        <p class="under-line-title"><span>Price</span></p>
        <div class="panel">
          
          <div class="flex panel-row">
            <div class="flex panel-col-3">
              <label>Market Segment:</label>
            </div>  
            <div class="panel-col-3">
              <input type="text" value="Internet" class="panel-col-9">
            </div>
          </div>
          
           <div class="flex panel-row">
            <div class="flex panel-col-3">
              <label>Plan:</label>
            </div>  
            <div class="panel-col-3">
              <input type="text" value="B/B" class="panel-col-9">
            </div>
          </div>

           <div class="flex panel-row">
            <div class="flex panel-col-3">
              <label>Price/Promotion:</label>
            </div>  
            <div class="panel-col-3">
              <input type="text" value="" class="panel-col-9">
            </div>

            <div class="panel-col-3">
              <input type="text" value="" class="panel-col-9" disabled>
            </div>
          </div>

          <div class="flex panel-row">
            <div class="flex panel-col-3">
              <label>Rate 1st night:</label>
            </div>  
            <div class="panel-col-4 flex">
              <input type="text" value="123.28" class="panel-col-5">
              <label>U.S.$</label>
            </div>

            <div class="panel-col-3 flex">
              <input type="checkbox" checked>
              <span>Manual Rate</span>
            </div>
          </div>

          <div class="flex panel-row">
            <div class="flex panel-col-3">
              <label>Inc Tax:</label>
            </div>  
            <div class="panel-col-4 flex">
              <input type="text" value="144.24" class="panel-col-5">
            </div>

            <div class="panel-col-3 flex">
              <input type="checkbox">
              <span>Cash basis</span>
            </div>
          </div>
         
          
        </div>

        <p class="under-line-title"><span>Guset</span></p>

        <div class="panel">
          
          <div class="flex panel-row">
            <div class="flex panel-col-2">
              <label>Market Segment:</label>
            </div>  
            <div class="panel-col-3">
              <input type="text" value="Internet" class="panel-col-9">
            </div>

            <div class="panel-col-3 flex">
              <div class="panel-col-4"><label>V.I.P:</label></div>
              <input type="text" value="Internet" class="panel-col-6">
            </div>

            <div class="panel-col-2 flex">
              <div class="panel-col-5"><label>Keep</label></div>
              <input type="checkbox">
            </div>
          </div>

          <div class="flex panel-row">
            <div class="flex panel-col-2">
              <label>Nation:</label>
            </div>  
            <div class="panel-col-3">
              <input type="text" value="Germany" class="panel-col-9">
            </div>

            <div class="panel-col-5 flex">
              <div class="panel-col-5 flex">
                <div class="panel-col-4"><label>State:</label></div>
                <div class="panel-col-6">
                  <input type="text" value="" class="panel-col-9">
                </div>
              </div>

              <div class="panel-col-5 flex">
                <div class="panel-col-4"><label>Lang:</label></div>
                <div class="panel-col-6">
                  <input type="text" value="German" class="panel-col-10">
                </div>
              </div>
            </div>

            
          </div>

          <div class="flex panel-row">
            <div class="flex panel-col-2">
              <label>M.O.P:</label>
            </div>  
            <div class="panel-col-3">
              <input type="text" value="Credit Card" class="panel-col-8">
            </div>

            <div class="panel-col-5 flex">
              <div class="panel-col-5 flex">
                <div class="panel-col-4"><label>Credit:</label></div>
                <div class="panel-col-6">
                  <input type="text" value="0" class="panel-col-9">
                </div>
              </div>
            </div>

            
          </div>

          <div class="flex panel-row">
            <div class="flex panel-col-2">
              <label>Mobile:</label>
            </div>  
            <div class="panel-col-3">
              <input type="text" value="+49 171 3726785" class="panel-col-9">
            </div>

            <div class="panel-col-5 flex">
              <div class="panel-col-10 flex">
                <div class="panel-col-2"><label>Email:</label></div>
                <div class="panel-col-8">
                  <input type="text" value="askdjf@guest.booking.com" class="panel-col-10">
                </div>
              </div>
            </div>

            
          </div>
          
        </div>

        <p class="under-line-title"><span>Other</span></p>

        <div class="panel">
          
          <div class="flex panel-row">
            <div class="flex panel-col-2">
              <label>Coordinator:</label>
            </div>  
            <div class="panel-col-6">
              <input type="text" value="" class="panel-col-9">
            </div>
          </div>

          <div class="flex panel-row">
            <div class="flex panel-col-2">
              <label>Firm:</label>
            </div>  
            <div class="panel-col-8">
              <input type="text" value="" class="panel-col-10">
            </div>
          </div>

          <div class="flex panel-row">
            <div class="flex panel-col-2">
              <label>Source:</label>
            </div>  
            <div class="panel-col-3">
              <input type="text" value="" class="panel-col-9">
            </div>

            <div class="flex panel-col-2">
              <label>Made by:</label>
            </div>  
            <div class="panel-col-3">
              <input type="text" value="" class="panel-col-10">
            </div>
          </div>
          
        </div>

      </div>
    </div>

    <div class="flex ">
      <p class="under-line-title panel-col-5"><span>Comments</span></p>
      <p class="panel-col-5"><label>Res. Taken By:interface</label></p>
    </div>

    <div class="flex">
      <textarea class="panel-col-9" rows="5">
asdfasd adfasdf asdfasdf asdfdfwejkr k kejhrwueyr qjehr bdsfq rkqwjehr 
asdasdfasdfadf asdfasdfa adfasdffa adfadfasd
      </textarea>
      <div class="flex panel-col-1 comment-div-2">
        <p>Follow</p>
        <p><a href="#">6218201</a></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Reservation',
  data () {
    return {
    
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .flex{display: flex}

  .justify-space-between{justify-content: space-between;}

  .justify-content-center{justify-content: center;}

  .justify-content-end{justify-content: flex-end;}

  .align-center{align-items: center;}

  .ltr{direction: ltr;}

  .rtl{direction: rtl;}

  .reservation{}

  .reservation .header{width: 100%; height: 30px;  background: linear-gradient(#222, #aaa); align-items: center;justify-content: space-between;padding: 0 10px;}

  .reservation .header .header-item{color: #78deff;}

  .reservation .header .header-item span.hebrew{color: #fff;}

  .reservation table.menu{width: 100%;text-align: center;border: solid 2px #888;}

  .reservation table.menu thead{background: #78deff;}

  .reservation table.menu tbody{}

  .reservation table.menu tbody tr.fill{background: #016bd9;color: white;}

  .reservation table.menu tbody tr.empty{height: 50px;}

  .reservation p.under-line-title{margin: 6px;}

  .reservation p.under-line-title span{padding: 0px 30px 3px 5px; border-bottom: solid 3px #78deff;font-size: 15px; font-weight: 700;}

  .reservation .info .reservation, .reservation .info .price{width: 50%;padding: 5px;}

  .reservation .info .panel{padding: 5px;background: linear-gradient(#eee, #ccc);}

  .reservation .info .panel .panel-row{padding: 3px 0;}

  .reservation  .panel-col-1{width: 10%;}

  .reservation  .panel-col-2{width: 20%;}

  .reservation  .panel-col-3{width: 30%;}

  .reservation  .panel-col-4{width: 40%;}

  .reservation  .panel-col-5{width: 50%;}

  .reservation  .panel-col-6{width: 60%;}

  .reservation  .panel-col-7{width: 70%;}

  .reservation  .panel-col-8{width: 80%;}

  .reservation  .panel-col-9{width: 90%;}

  .reservation  .panel-col-10{width: 100%;}

  .reservation  label{font-weight: 700;padding: 0 5px;}

  .reservation .comment-div-2{flex-direction: column;padding: 0 10px;justify-content: space-between;}

  .reservation .comment-div-2 p{margin: 0;}
</style>
