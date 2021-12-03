<template>
    <footer>
        <div class="contact_box">
            <div class="contact_txt div_wrap">
                <div class="text_box">
                    <h2 class="title">
                        Got Project <br>
                        In Mind?
                    </h2>
                    <div class="footerInfo">
                        <p class="name">INTHE X</p>
                        <p class="subTitle">GET IN TOUCH</p>
                        <div class="companyInfo">
                            <div class="infoList">
                                <div class="th">Email</div>
                                <div class="td">inthex@inthe-x.com</div>
                            </div>
                            <div class="infoList">
                                <div class="th">Phone</div>
                                <div class="td">0507-1361-5665</div>
                            </div>
                            <div class="infoList">
                                <div class="th">Address</div>
                                <div class="td">서울특별시 성동구 성수동2가 더리브세종타워 9층 903호</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="explore">
                    <p class="exploreTitle">EXPLORE</p>
                    <div class="exploreList gray">
                        <a href="#none">Work</a>
                        <a href="carrer.html">Careers</a>
                        <a href="#none">Lab</a>
                        <a href="contact.html">Contact</a>
                    </div>
                    <div class="exploreList wt">
                        <a href="#none">Brunch.</a>
                        <a href="#none">Behence.</a>
                        <a href="#none">Pinterest</a>
                    </div>
                </div>
            </div>
            <!--<div class="copyrightArea div_wrap">
                    <p class="copyright">
                        ©INTHEX. All rights reserved.
                    </p>
                </div>-->
        </div>
    </footer>
</template> 

<script>
    export default {
         
    }
</script>

<style lang="scss" scoped>
  @import "~assets/scss/reset"; 
  @import "~assets/scss/function";
  //사용법
      //@include toRem(width, 400);
  //
  footer{
    background: #080808;
    .contact_box{
        padding-top: 14.583333vw;
        background-color: #000000;
        padding-bottom: 3.645833vw;
        .contact_txt{ 
            position: relative;
            .text_box{
                float: left;
                width: 45%;
                margin-left: 5%;  
                .title{
                    color: #fff;
                    font-size: 4.166667vw;
                    font-weight: 700;
                    letter-spacing: 0;
                }
                .footerInfo{
                    .name{ 
                        color: #fff;
                        font-size: 1.5625vw;
                        margin-top: 6.77vw;
                        font-weight: 700;
                    }
                    .subTitle{
                        color: #fff;
                        margin-top: 3.02vw;
                        font-size: 0.78125vw;
                    }
                    .companyInfo{
                        margin-top: 2.76vw;
                        .infoList{
                            margin-bottom: 0.833vw;
                            &:last-child{ margin-bottom:0; }
                            &:after{ content: ''; display: block; clear: both; }
                            .th{
                                width: 4.166vw;
                                float: left;
                                color: #8B8B8B;
                                font-size: 0.78125vw;   
                            }
                            .td{
                                color: #fff;
                                font-size: 0.78125vw;
                                float: left;
                            }
                        }
                    }
                }
            }
            .explore{
                position: absolute;
                right: 5%;
                bottom: 0;
                width: 19.01vw;
                .exploreTitle{
                    font-size: 0.78125vw;
                    color: #fff;
                    font-weight: 700;    
                }
                .exploreList{
                    margin-top: 2.083vw;
                    display: flex;
                    justify-content: space-between;   
                    &.gray a{
                        font-size: 1.0416vw;
                        color: #8B8B8B; 
                    }
                    &.wt a{
                        color: #fff;
                    }
                }
            }
            &:after{ content: ''; display: block; clear: both; }
        }
    }
  }

</style>