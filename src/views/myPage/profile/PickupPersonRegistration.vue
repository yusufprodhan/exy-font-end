<template lang="html">
    <div class="PickupPersonRegistration">
        <vue-element-loading
            :active="isLoadingshow"
            spinner="bar-fade-scale"
            color="#FF6700"
            :is-full-screen="isFullScreen"
        />
        <div class="tabbed">
            <div v-for="(oldPerson,index) in record.oldPickupPerson" :key="(index+'_oldPerson')">
                <a @click="personActiveStatusChange('oldPerson',index)" :class="oldPerson.isShow == true ? 'active' : ''">{{oldPerson.title}}</a>
            </div>

            <div v-for="(newPerson,index) in record.newPickupPerson" :key="(index+'_newPerson')">
                <a @click="personActiveStatusChange('newPerson',index)" :class="newPerson.isShow == true ? 'active' : ''">{{newPerson.title}}</a>
            </div>

            <div>
                <a class="addBtn" @click="newPickupPersonPush">+</a>
            </div>
        </div>
        <div class="details">
            <div v-if="!editPerson.isShow">
                <div v-for="(oldPerson,index) in record.oldPickupPerson" :key="(index+'_oldPerson')">
                    <div class="tab exits" v-if="oldPerson.isShow">
                        <div class="info">
                            <label>名前（ふりがな)</label>
                            <p>{{oldPerson.furigana_name}} （{{oldPerson.furigana_surname}})</p>
                        </div>
                        <div class="info">
                            <label>族柄</label>
                            <p>{{oldPerson.tribe}}</p>
                        </div>
                        <div class="info">
                            <label>緊急連絡先</label>
                            <p>{{oldPerson.contact}}</p>
                        </div>
                        <div class="info media">
                            <label>顔写真</label>
                            <img :src="oldPerson.photo" alt="">
                        </div>
                        <div class="buttonGroup">
                            <button type="button" class="delete" @click="oldPickupPersonDelete(index,oldPerson.id)">削除する</button>
                            <button type="submit" @click="oldPickupPersonEdit(index,oldPerson)">一人目の情報を修正する</button>
                        </div>
                    </div>
                </div>
            </div>

            <div class="tab newContact" v-if="editPerson.isShow">
                <ValidationObserver v-slot="{  handleSubmit }">
                    <form @submit.prevent="handleSubmit(editFormSubmit())" autocomplete="off">
                        <div class="info">
                            <label>名前（ふりがな)</label>
                            <div class="d-row">
                                <div class="block">
                                    <span>名字:</span>
                                    <ValidationProvider name="firstname" rules="required" v-slot="{ errors }">
                                        <input type="text" placeholder="例）保育" v-model="editPerson.firstname">
                                        <span class="is-danger">{{ errors[0] }}</span>
                                    </ValidationProvider>
                                </div>
                                <div class="block">
                                    <span>名前：</span>
                                    <ValidationProvider name="lastname" rules="required" v-slot="{ errors }">
                                        <input type="text" placeholder="例）花子" v-model="editPerson.lastname">
                                        <span class="is-danger">{{ errors[0] }}</span>
                                    </ValidationProvider>
                                </div>
                            </div>
                            <div class="d-row">
                                <div class="block">
                                    <span>みょうじ：</span>
                                    <ValidationProvider name="furigana_name" rules="required" v-slot="{ errors }">
                                        <input type="text" placeholder="例）ほいく" v-model="editPerson.furigana_name">
                                        <span class="is-danger">{{ errors[0] }}</span>
                                    </ValidationProvider>
                                </div>
                                <div class="block">
                                    <span>なまえ：</span>
                                    <ValidationProvider name="furigana_surname" rules="required" v-slot="{ errors }">
                                        <input type="text" placeholder="例）はなこ" v-model="editPerson.furigana_surname">
                                        <span class="is-danger">{{ errors[0] }}</span>
                                    </ValidationProvider>
                                </div>
                            </div>
                        </div>
                        <div class="info">
                            <label>族柄</label>
                            <div class="d-row">
                                <div class="block inline">
                                    <ValidationProvider name="tribe" rules="required" v-slot="{ errors }">
                                        <select v-model="editPerson.tribe">
                                            <option value="">一つ選択してください</option>
                                            <option v-for="family in families"  :key="family.id" :value="family.name">
                                                {{family.name}}
                                            </option>
                                        </select>
                                        <span class="is-danger">{{ errors[0] }}</span>
                                    </ValidationProvider>
                                </div>
                            </div>
                        </div>
                        <div class="info">
                            <label>緊急連絡先</label>
                            <div class="d-row">
                                <div class="block inline">
                                    <ValidationProvider name="contact" rules="required" v-slot="{ errors }">
                                        <input type="text" placeholder="08012345678" v-model="editPerson.contact">
                                        <span class="is-danger">{{ errors[0] }}</span>
                                    </ValidationProvider>
                                </div>
                                <div class="block"></div>
                            </div>
                        </div>
                        <div class="info media">
                            <label>顔写真</label>
                            <div class="withImage">
                                <img :src="editPerson.preview" alt="">
                                <input type="file" @change="changeFacePhoto($event,editPerson)">
                            </div>
                            <div>
                                <input type="hidden" v-model="editPerson.photo">
                            </div>
                        </div>
                        <div class="buttonGroup">
                            <button type="submit">アップデート</button>
                        </div>
                    </form>
                </ValidationObserver>
            </div>

            <div v-for="(newPerson,index) in record.newPickupPerson" :key="(index+'_newPerson')">
                <div class="tab newContact" v-if="newPerson.isShow">
                    <ValidationObserver v-slot="{  handleSubmit }">
                        <form @submit.prevent="handleSubmit(newPickupPersonFormSubmit(index))" autocomplete="off">
                            <div class="info">
                                <label>名前（ふりがな)</label>
                                <div class="d-row">
                                    <div class="block">
                                        <span>名字:</span>
                                        <ValidationProvider name="firstname" rules="required" v-slot="{ errors }">
                                            <input type="text" placeholder="例）保育" v-model="newPerson.firstname">
                                            <span class="is-danger">{{ errors[0] }}</span>
                                        </ValidationProvider>
                                    </div>
                                    <div class="block">
                                        <span>名前：</span>
                                        <ValidationProvider name="lastname" rules="required" v-slot="{ errors }">
                                            <input type="text" placeholder="例）花子" v-model="newPerson.lastname">
                                            <span class="is-danger">{{ errors[0] }}</span>
                                        </ValidationProvider>
                                    </div>
                                </div>
                                <div class="d-row">
                                    <div class="block">
                                        <span>みょうじ：</span>
                                        <ValidationProvider name="furigana_name" rules="required" v-slot="{ errors }">
                                            <input type="text" placeholder="例）ほいく" v-model="newPerson.furigana_name">
                                            <span class="is-danger">{{ errors[0] }}</span>
                                        </ValidationProvider>
                                    </div>
                                    <div class="block">
                                        <span>なまえ：</span>
                                        <ValidationProvider name="furigana_surname" rules="required" v-slot="{ errors }">
                                            <input type="text" placeholder="例）はなこ" v-model="newPerson.furigana_surname">
                                            <span class="is-danger">{{ errors[0] }}</span>
                                        </ValidationProvider>
                                    </div>
                                </div>
                            </div>
                            <div class="info">
                                <label>族柄</label>
                                <div class="d-row">
                                    <div class="block inline">
                                        <ValidationProvider name="tribe" rules="required" v-slot="{ errors }">
                                            <select v-model="newPerson.tribe">
                                                <option value="">一つ選択してください</option>
                                                <option v-for="family in families"  :key="family.id" :value="family.name">
                                                    {{family.name}}
                                                </option>
                                            </select>
                                            <span class="is-danger">{{ errors[0] }}</span>
                                        </ValidationProvider>
                                    </div>
                                </div>
                            </div>
                            <div class="info">
                                <label>緊急連絡先</label>
                                <div class="d-row">
                                    <div class="block inline">
                                        <ValidationProvider name="contact" rules="required" v-slot="{ errors }">
                                            <input type="text" placeholder="08012345678" v-model="newPerson.contact">
                                            <span class="is-danger">{{ errors[0] }}</span>
                                        </ValidationProvider>
                                    </div>
                                    <div class="block"></div>
                                </div>
                            </div>
                            <div class="info media">
                                <label>顔写真</label>
                                <div class="withImage">
                                    <img src="../../../assets/images/mypage/dummyUser.png" alt="" v-if="newPerson.photo == ''">
                                    <img :src="newPerson.preview" alt="" v-else>
                                    <input type="file" @change="changeFacePhoto($event,newPerson)">
                                </div>
                                <div>
                                    <ValidationProvider name="photo" rules="required" v-slot="{ errors }">
                                        <input type="hidden" v-model="newPerson.photo">
                                        <span class="is-danger">{{ errors[0] }}</span>
                                    </ValidationProvider>
                                </div>
                            </div>
                            <div class="buttonGroup">
                                <button type="button" class="delete" @click="newPickupPersonRegistredDelete(index)">削除する</button>
                                <button type="submit">登録する</button>
                            </div>
                        </form>
                    </ValidationObserver>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import VueElementLoading from "vue-element-loading";
import axios from "../../../axios";
export default {
    name: "PickupPersonRegistration",
    components: {
        VueElementLoading
    },
    data(){
        return{
            isLoadingshow: true,
            isFullScreen: false,
            families: 
            [
                { id: 1, name: "母", value: "mother" },
                { id: 2, name: "父", value: "father" },
                { id: 3, name: "叔母・叔父", value: "aunt_uncle" },
                { id: 4, name: "その他", value: "others" }
            ],
            personTitle:['一人目','二人目','三人目','四人目','五人目','六人目','七人目','八人目','九人目','十人目'],
            record: {
                "oldPickupPerson": [],
                "newPickupPerson" : []
            },
            editPerson: {
                index: 0,
                isShow: false,
                id: 0,
                firstname: '',
                lastname: '',
                furigana_name: '',
                furigana_surname: '',
                tribe: '',
                contact: '',
                preview: '',
                photo: ''
            }
        }
    },
    created(){
        this.populateOldPickupPerson().then(() => {
            var oldPickupPersonLength = this.record.oldPickupPerson.length;
            this.allTabReset();
            if(oldPickupPersonLength == 0){
                this.newPickupPersonRegistred();
                this.record.newPickupPerson[0].isShow = true;
            }else{
                this.record.oldPickupPerson[0].isShow = true;
                this.newPickupPersonRegistred();
            }
            this.autoGenerateTabTitle();
        });
    },
    methods:{
        allTabReset(){
            this.record.oldPickupPerson.map(row => {
                row.isShow = false;
            });

            this.record.newPickupPerson.forEach(row => {
                row.isShow = false;
            });
        },
        autoGenerateTabTitle(){
            var pointIndex = 0;
            this.record.oldPickupPerson.map(row => {
                row.title = this.personTitle[pointIndex];
                pointIndex = pointIndex + 1 ;
            });
            this.record.newPickupPerson.map(row => {
                row.title = this.personTitle[pointIndex];
                pointIndex = pointIndex + 1 ;
            });
        },
        personActiveStatusChange(state,index){
            this.editPerson.isShow = false;
            this.allTabReset();
            if(state == 'oldPerson'){
                this.record.oldPickupPerson[index].isShow = true;
            }else if(state == 'newPerson'){
                this.record.newPickupPerson[index].isShow = true;
            }
        },
        changeFacePhoto(event,person){
            const file = event.target.files[0];
            person.preview = URL.createObjectURL(file);
            person.photo = file;
        },
        async populateOldPickupPerson(){
            this.isLoadingshow = true;
            this.record.oldPickupPerson = [];
            await axios.get("/pickup-person/list").then((res) => {
                this.isLoadingshow = false;
                if (res.data.success) {
                    res.data.data.map((row,index) => {
                        this.record.oldPickupPerson.push({
                            id: row.id,
                            firstname: row.firstname,
                            lastname: row.lastname,
                            furigana_name : row.furigana_name,
                            furigana_surname : row.furigana_surname,
                            tribe : row.tribe,
                            contact : row.contact,
                            photo : row.face_photo,
                            title: this.personTitle[index],
                            isShow: false
                        });
                    });
                } else {
                    this.$toast.error(res.data.message);
                }
            })
            .catch((error) => {
                this.checkError(error);
            });
        },
        oldPickupPersonDelete(index,id){
            if (confirm('この集荷担当者情報を削除してもよろしいですか ?')) {
                this.isLoadingshow = true;
                this.record.oldPickupPerson.splice(index,1);
                axios.post("/pickup-person/delete", {id: id})
                .then((res) => {
                    if (res.data.success) {
                        this.$toast.success(res.data.message);
                        this.populateOldPickupPerson().then(() => {
                            var oldPickupPersonLength = this.record.oldPickupPerson.length;
                            var newPickupPersonLength = this.record.newPickupPerson.length;
                            this.allTabReset();
                            if(oldPickupPersonLength == 0){
                                if(newPickupPersonLength == 0){
                                    this.newPickupPersonPush();
                                }else{
                                    this.record.newPickupPerson[0].isShow = true;
                                }
                            }else{
                                if(typeof this.record.oldPickupPerson[index] === 'undefined'){
                                    this.record.oldPickupPerson[index - 1].isShow = true;
                                }else{
                                    this.record.oldPickupPerson[index].isShow = true;
                                }
                            }
                            this.autoGenerateTabTitle();
                            this.isLoadingshow = false;
                        });
                    } else {
                        this.$toast.error(res.data.message);
                    }
                })
                .catch((error) => {
                    this.checkError(error);
                });
            }
        },
        oldPickupPersonEdit(index,oldPerson){
            this.editPerson.index = index;
            this.editPerson.isShow = true;
            this.editPerson.id = oldPerson.id;
            this.editPerson.firstname = oldPerson.firstname;
            this.editPerson.lastname = oldPerson.lastname;
            this.editPerson.furigana_name = oldPerson.furigana_name;
            this.editPerson.furigana_surname = oldPerson.furigana_surname;
            this.editPerson.tribe = oldPerson.tribe;
            this.editPerson.contact = oldPerson.contact;
            this.editPerson.preview = oldPerson.photo;
            this.editPerson.photo = '';
        },
        editFormSubmit(){
            var person = this.editPerson;    
            if(person.firstname != '' 
                && person.lastname != '' 
                && person.furigana_name != ''
                && person.furigana_surname != ''
                && person.tribe != ''
                && person.contact != ''
            ){
                let formData = new FormData();
                formData.append('id',               person.id);
                formData.append('firstname',        person.firstname);
                formData.append('lastname',         person.lastname);
                formData.append('furigana_name',    person.furigana_name);
                formData.append('furigana_surname', person.furigana_surname);
                formData.append('tribe',            person.tribe);
                formData.append('contact',          person.contact);
                formData.append('photo',            person.photo);

                this.isLoadingshow = true;

                axios.post("/pickup-person/update", formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                })
                .then((res) => {
                    if (res.data.success) {
                        this.$toast.success(res.data.message);
                        this.populateOldPickupPerson().then(() => {
                            this.editPerson.isShow = false;
                            this.allTabReset();
                            this.record.oldPickupPerson[this.editPerson.index].isShow = true;
                        });
                    } else {
                        this.$toast.error(res.data.message);
                    }
                    this.isLoadingshow = false;
                })
                .catch((error) => {
                    this.checkError(error);
                });
            }
        },
        newPickupPersonRegistred(){
            this.record.newPickupPerson.push({
                firstname: '',
                lastname: '',
                furigana_name : '',
                furigana_surname : '',
                tribe : '',
                contact : '',
                preview: '',
                photo: '',
                title: '',
                isShow: false
            });
        },
        newPickupPersonPush(){
            this.newPickupPersonRegistred();
            this.allTabReset();
            var acive = this.record.newPickupPerson.length - 1;
            this.record.newPickupPerson[acive].isShow = true;
            this.autoGenerateTabTitle();
        },
        newPickupPersonRegistredDelete(index){
            this.record.newPickupPerson.splice(index,1);
            var oldPickupPersonLength = this.record.oldPickupPerson.length;
            var newPickupPersonLength = this.record.newPickupPerson.length;
            this.allTabReset();
            if(newPickupPersonLength == 0){
                if(oldPickupPersonLength == 0){
                    this.newPickupPersonPush();
                }else{
                    this.record.oldPickupPerson[oldPickupPersonLength - 1].isShow = true;
                }
            }else{
                if(typeof this.record.newPickupPerson[index] === 'undefined'){
                    this.record.newPickupPerson[index - 1].isShow = true;
                }else{
                    this.record.newPickupPerson[index].isShow = true;
                }
            }
            this.autoGenerateTabTitle();
        },
        newPickupPersonFormSubmit(index){
            var person =  this.record.newPickupPerson[index];
            if(person.firstname != '' 
                && person.lastname != '' 
                && person.furigana_name != ''
                && person.furigana_surname != ''
                && person.tribe != ''
                && person.contact != ''
                && person.photo != ''
            ){
                let formData = new FormData();
                formData.append('firstname',        person.firstname);
                formData.append('lastname',         person.lastname);
                formData.append('furigana_name',    person.furigana_name);
                formData.append('furigana_surname', person.furigana_surname);
                formData.append('tribe',            person.tribe);
                formData.append('contact',          person.contact);
                formData.append('photo',            person.photo);

                this.isLoadingshow = true;

                axios.post("/pickup-person/registration", formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                })
                .then((res) => {
                    if (res.data.success) {
                        this.$toast.success(res.data.message);  
                        this.populateOldPickupPerson().then(() => {
                            this.record.newPickupPerson.splice(index,1);
                            var oldPickupPersonLength = this.record.oldPickupPerson.length;
                            var newPickupPersonLength = this.record.newPickupPerson.length;
                            this.allTabReset();
                            this.record.oldPickupPerson[oldPickupPersonLength - 1].isShow = true;
                            if(newPickupPersonLength == 0){
                                this.newPickupPersonRegistred();
                            }
                            this.autoGenerateTabTitle();
                        });
                    }else {
                        this.$toast.error(res.data.message);
                    }
                    this.isLoadingshow = false;
                })
                .catch((error) => {
                    this.checkError(error);
                });
            }
        }
    }
}
</script>
<style scoped lang="scss">
    .is-danger
    {
        margin-top: 5px;
        color: #f22435 !important;
    }
    .PickupPersonRegistration
    {
        display: flex;
        flex-direction: column;
        margin-bottom: 10rem;
        .tabbed
        {
            display: flex;
            flex-direction: row;
            align-items: center;
            margin-bottom: 8px;
            flex-wrap: wrap;
            div
            {
                a
                {
                    background: white;
                    color: black;
                    padding: 10px 3rem;
                    border-radius: 5px 5px 0px 0px;
                    border: 1px solid #D6D6D6;
                    font-size: 14px;
                    font-weight: 600;
                    cursor: pointer;
                    &.active
                    {
                        background: #CB3A82;
                        color: white;
                    }
                    &.addBtn
                    {
                        padding: 10px 1.5rem;
                    }
                }
            }
        }
        .details
        {
            min-height: 32rem;
            background: #F8F7F7;
            padding: 1rem 10px;
            display: flex;
            flex-direction: column;
            .tab
            {
                display: flex;
                flex-direction: column;
                &.exits
                {
                    .info
                    {
                        display: flex;
                        flex-direction: column;
                        gap: 10px;
                        background: white;
                        padding: 20px 10px;
                        color: #333333;
                        font-size: 16px;
                        margin-bottom: 10px;
                        label
                        {
                            width: auto;
                        }
                        p
                        {
                            margin: 0px;
                            margin-left: 1.5rem;
                        }
                        &.media
                        {
                            flex-direction: row;
                            margin-bottom: 0px;
                            img
                            {
                                width: 15rem;
                                height: 18rem;
                                object-fit: cover;
                                margin-left: 2rem;
                                margin-top: 1rem;
                                margin-bottom: 2rem;
                            }
                        }
                    }
                    .buttonGroup
                    {
                        display: flex;
                        flex-direction: row;
                        align-items: center;
                        justify-content: flex-end;
                        gap: 10px;
                        padding: 1.5rem;
                        button
                        {
                            background: white;
                            border: 1px solid #333333;
                            padding: 7px 15px;
                            font-size: 14px;
                            &.delete
                            {
                                background: #333333;
                                color: white;
                            }
                        }
                    }
                }
                &.newContact
                {
                    .info
                    {
                        display: flex;
                        flex-direction: column;
                        gap: 10px;
                        background: white;
                        padding: 20px 10px;
                        color: #333333;
                        font-size: 16px;
                        margin-bottom: 10px;
                        .d-row
                        {
                            display: flex;
                            flex-direction: row;
                            gap: 3rem;
                            margin: 0px 6rem 0rem 2rem;
                            .block
                            {
                                flex: 1;
                                display: flex;
                                flex-direction: row;
                                align-items: center;
                                gap: 10px;
                                span
                                {
                                    flex: 0 0 20%;
                                    color: #3D3442;
                                    &:nth-child(2)
                                    {
                                        display: flex;
                                        flex-direction: column;
                                        flex: 0 0 80%;
                                    }
                                }
                                input
                                {
                                    flex: 0 0 80%;
                                    background: #F8F8F8 0% 0% no-repeat padding-box;
                                    border: 1px solid #707070;
                                    padding: 5px 10px;
                                    background: #F8F8F8;
                                }
                                select
                                {
                                    flex: 0 0 30%;
                                    background: #F8F8F8 0% 0% no-repeat padding-box;
                                    border: 1px solid #707070;
                                    padding: 10px 10px;
                                }
                                &.inline
                                {
                                    flex: 0 0 30%;
                                    span
                                    {
                                        flex: 1;
                                    }
                                }
                            }
                        }
                        &.media
                        {
                            flex-direction: row;
                            margin-bottom: 0px;
                            .withImage
                            {
                                position: relative;
                                img
                                {
                                    width: 15rem;
                                    height: 18rem;
                                    object-fit: cover;
                                    margin-left: 2rem;
                                    margin-top: 1rem;
                                    margin-bottom: 2rem;
                                }
                                input
                                {
                                    position: absolute;
                                    width: 54px;
                                    height: 54px;
                                    background: #727272;
                                    border-radius: 100%;
                                    right: -30px;
                                    bottom: 20px;
                                    color: rgba(0, 0, 0, 0);  
                                    cursor: pointer;
                                    &:after
                                    {
                                        content: "✚";
                                        display: flex;
                                        flex-direction: row;
                                        align-items: center;
                                        justify-content: center;
                                        height: 100%;
                                        color: white;
                                        font-size: 32px;
                                        position: absolute;
                                        top: 0px;
                                        left: 0px;
                                        right: 0px;
                                    }
                                    &::-webkit-file-upload-button {
                                        visibility: hidden;
                                        user-select: none;
                                    }
                                }
                            }
                        }
                    }
                    .buttonGroup
                    {
                        display: flex;
                        flex-direction: row;
                        align-items: center;
                        justify-content: flex-end;
                        gap: 10px;
                        padding: 1.5rem;
                        button
                        {
                            background: #CB3A82;
                            border: 1px solid #CB3A82;
                            padding: 7px 15px;
                            font-size: 14px;
                            color: white;
                            &.delete
                            {
                                border: 1px solid #333333;
                                background: #333333;
                                color: white;
                            }
                        }
                    }
                }
            }
        }
    }
</style>