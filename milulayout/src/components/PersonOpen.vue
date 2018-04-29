<template>
<div class="personopen-tpl">
    <div class="personopen-widget">
        <div v-for="(room, index) in rooms">
            <div class="room-item">
                <div class="room-title flex">
                    <div class="guest-for-room-title">Guests for room #{{index+1}}
                        <span class="" v-if="index != 0" v-on:click="removeRoom()"><i class="fa fa-times"></i></span>
                    </div>
                    <div class="middle-line"></div>
                    <div class="add-room-btn primary-color"  v-if="(index+1 == rooms.length) && (rooms.length < 4) " v-on:click="addRoom()">+ ADD ROOM</div>
                </div>
                 <div class="adult-info flex ">
                    <span class="">{{room.adults}} Adults:</span>
                    <span class="primary-color">
                        <span v-on:click="removeAdult(room)"> <i class="fa fa-minus-circle" v-bind:class="{'yellow-muted':room.adults<=1}"></i></span>
                        <span v-on:click="addAdult(room)"><i class="fa fa-plus-circle" v-bind:class="{'yellow-muted':room.adults>=6}"></i></span>
                    </span>
                </div>

                <div class="kids-info flex">
                    <span class="">{{room.kids.length}} Kids:</span>
                    <span class="primary-color">
                        <span v-on:click="removeKid(room)"><i class="fa fa-minus-circle"  v-bind:class="{'yellow-mute':room.kids.length<= 0}" v-on:click="removeKid(room)"></i></span>
                        <span v-on:click="addNewKid(room)"><i class="fa fa-plus-circle" v-bind:class="{'yellow-mute':room.kids.length>=4}" ></i></span>
                    </span>
                </div>

                <div class="kids-age flex" v-show="room.kids.length > 0">
                    <span class="">Age:</span>
                    <div class="kid-age-item" v-for="(kid, kid_index) in room.kids">
                        <select class="kid-age-select">
                            <option v-for="age_value in 13">{{age_value-1}}</option>
                        </select>
                    </div>
                </div>

                
            </div>
           
        </div> 
         
    </div>
</div>
</template>

<script>
export default {
    name: 'PersonOpen',
    data () {
        return {
            isshowwidget: false,
            adultsNum : 6,
            rooms: [
            {
                adults: 6,
                kids:[
                {
                    age:2
                },]
            }],
        }
    },
    methods:{
        toggleWidget(){
            this.isshowwidget = !this.isshowwidget;
        },

        addNewKid(room){
            if(room.kids.length >= 4){
                return;
            }
            room.kids.push({age: 2});
        },

        removeKid(room){
            if(room.kids.length > 0){
                room.kids.pop();
            }
        },

        addAdult(room){
            if(room.adults >= 6){
                return;
            }
            room.adults ++;
            
        },

        removeAdult(room){
            if(room.adults<= 1){
                return;
            }
            room.adults --;
        },

        addRoom(){
            if(this.rooms.length >= 4){
                return;
            }
            this.rooms.push({
                adults: 2,
                kids: []
            });
        },

        removeRoom(){
            if(this.rooms.length <= 1){
                return;
            }

            this.rooms.pop();
        }
    }
}
</script>

<style scope>
.personopen-tpl{position: relative;}

.person{border-radius: 5px; border: solid 1px #fff; padding: 8px;}

.person .adults-num{font-size: 28px;font-weight: 500;color: white;}

.person .details {padding: 0 10px;width: 100%;}

.person .details p{margin: 0;}

.person .details .detail-item{color: white;}

.person .down-icon{padding: 0 5px;font-size: 30px;color:rgb(255, 233, 131);}

.personopen-widget{border: solid 1px #fff;border-radius:5px;padding: 10px;width: 100%;}

.personopen-widget .room-item{}

.personopen-widget .room-item .room-title{align-items: center;margin-top: 15px;}

.personopen-widget .room-item .room-title .guest-for-room-title{color: #aaa;weight: 500;white-space: nowrap;}

.personopen-widget .room-item .room-title .guest-for-room-title span{color: red;}

.personopen-widget .room-item .room-title .add-room-btn{white-space: nowrap;}

.personopen-widget .room-item .room-title .middle-line{border:0; border-bottom: solid 1px #ddd; width:100%;margin:0;}

.personopen-widget .room-item .adult-info{justify-content: space-between;font-size:25px;margin-top: 10px;}

.personopen-widget .room-item .kids-info{justify-content: space-between;font-size:25px;margin-top: 10px;}

.personopen-widget .room-item .kids-age{justify-content: flex-end;align-items: center;margin-top: 10px;}

.personopen-widget .room-item .kids-age .kid-age-item{margin: 0 5px;}

.personopen-widget .room-item .kids-age .kid-age-select{border-radius: 4px;padding: 8px 4px;}

.personopen-widget .btn-tools{justify-content: flex-end;margin-top: 10px;align-items: center;}

.personopen-widget .btn-tools .ok-don-btn{padding: 10px;border-radius:5px;}

.personopen-widget .btn-tools .cancel-btn{margin: 0 10px;}
</style>