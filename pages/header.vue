<template>
    <header>
        <h1>
            <a href="/">HeoPro-v</a>
        </h1>
        <nav>
            <ul class="nav_list">
                <li>
                    <a href="javascript:;">About</a>
                </li>
                <li>
                    <a href="javascript:;">Product</a>
                </li>
                <li>
                    <a href="javascript:;">Content me</a>
                </li>
            </ul>
        </nav>
    </header>
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
    
    header{
        position: fixed; 
        top:0; left:0;
        width: 100%; 
        @include toRem(height, 86);
        z-index: 100;
        h1{ 
            position: absolute;
            @include toRem(top, 36);
            @include toRem(left, 50);
            a{ 
                @include toRem( font-size, 28);
                font-family: 'Anton', sans-serif;
                font-weight: bold;
                color: #fff;
            };
        }
        nav{ 
            @include toRem( width, 340 );
            margin: 0 auto;
            @include toRem( margin-top, 38);
            .nav_list{
                li{ 
                    float: left;
                    @include toRem( margin-left, 36);
                    a{
                        position: relative;
                        display: block;
                        @include toRem( font-size, 22 );
                        @include toRem( letter-spacing, -1 );
                        font-family: 'Anton', sans-serif;
                        font-weight: bold;
                        color: #fff;
                    }
                    &:first-child{ margin-left:0; }
                }
                &:after{ content: ''; display: block; clear: both; }
            }
        }
    }
</style> 