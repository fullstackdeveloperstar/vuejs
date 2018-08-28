<template>
<div class="person-tpl">
    <div class="person flex" v-on:click="toggleWidget()">
        <span class="adults-num">{{adultsNum}}</span>
        <div class="details">
            <p class="detail-item"><span>ADULTS:</span></p>
            <p class="detail-item"><span>Rooms: {{rooms.length}}</span></p>
        </div>
        <span class="down-icon"><i class="fa fa-angle-down"></i></span>
    </div>

    <div class="person-widget" v-show="isshowwidget">
        <div v-for="(room, index) in rooms">
            <div class="room-item">
                <div class="room-title flex">
                    <div class="guest-for-room-title">Guests for room #{{index+1}}
                        <span class="yellow-text" v-if="index != 0" v-on:click="removeRoom()"><i class="fa fa-times"></i></span>
                    </div>
                    <div class="middle-line"></div>
                    <div class="add-room-btn yellow-text"  v-if="(index+1 == rooms.length) && (rooms.length < 4) " v-on:click="addRoom()">+ ADD ROOM</div>
                </div>
                <div class="adult-info flex ">
                    <span class="white-text">{{room.adults}} Adults:</span>
                    <span class="yellow-text">
                        <span v-on:click="removeAdult(room)" v-bind:class="{'yellow-mute':room.adults<=1}"> <i class="fa fa-minus-circle" ></i></span>
                        <span v-on:click="addAdult(room)"  v-bind:class="{'yellow-mute':room.adults>=6}"><i class="fa fa-plus-circle"></i></span>
                    </span>
                </div>

                <div class="kids-info flex">
                    <span class="white-text">{{room.kids.length}} Kids:</span>
                    <span class="yellow-text">
                        <span v-on:click="removeKid(room)" v-bind:class="{'yellow-mute':room.kids.length<= 0}"><i class="fa fa-minus-circle"   ></i></span>
                        <span v-on:click="addNewKid(room)" v-bind:class="{'yellow-mute':room.kids.length>=4}"><i class="fa fa-plus-circle"  ></i></span>
                    </span>
                </div>

                <div class="kids-age flex" v-show="room.kids.length > 0">
                    <span class="yellow-text">Age:</span>
                    <div class="kid-age-item" v-for="(kid, kid_index) in room.kids">
                        <select class="kid-age-select white-text">
                            <option v-for="age_value in 13">{{age_value-1}}</option>
                        </select>
                    </div>
                </div>

            </div>
           
        </div> 
         <div class="btn-tools flex">
            <span class="white-text cancel-btn" v-on:click="isshowwidget = false">Cancel</span>
            <span class="primary-color yellow-bg ok-don-btn"  v-on:click="isshowwidget = false">Ok, done</span>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: 'Person',
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
.person-tpl{position: relative;}

.person{border-radius: 5px; border: solid 1px #fff; padding: 8px;}

.person .adults-num{font-size: 28px;font-weight: 500;color: white;}

.person .details {padding: 0 10px;width: 100%;}

.person .details p{margin: 0;}

.person .details .detail-item{color: white;}

.person .down-icon{padding: 0 5px;font-size: 30px;color:rgb(255, 233, 131);}

.person-widget{border: solid 1px #fff;border-radius:5px;padding: 10px;position: absolute; width: 100%;background: #3e1855;}

.person-widget .room-item{}

.person-widget .room-item .room-title{align-items: center;margin-top: 15px;}

.person-widget .room-item .room-title .guest-for-room-title{color: #aaa;weight: 500;white-space: nowrap;}

.person-widget .room-item .room-title .add-room-btn{white-space: nowrap;}

.person-widget .room-item .room-title .middle-line{border:0; border-bottom: solid 1px #ddd; width:100%;margin:0;}

.person-widget .room-item .adult-info{justify-content: space-between;font-size:25px;margin-top: 10px;}

.person-widget .room-item .kids-info{justify-content: space-between;font-size:25px;margin-top: 10px;}

.person-widget .room-item .kids-age{justify-content: flex-end;align-items: center;margin-top: 10px;}

.person-widget .room-item .kids-age .kid-age-item{margin: 0 5px;}

.person-widget .room-item .kids-age .kid-age-select{background-color: rgb(62, 24, 85);border-radius: 4px;padding: 8px 4px;}

.person-widget .btn-tools{justify-content: flex-end;margin-top: 10px;align-items: center;}

.person-widget .btn-tools .ok-don-btn{padding: 10px;border-radius:5px;}

.person-widget .btn-tools .cancel-btn{margin: 0 10px;}
</style>