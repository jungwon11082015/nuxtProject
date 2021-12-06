<template>
    <header>
        <h1>
            <nuxt-link to="/">HeoPro-v</nuxt-link>
        </h1>
        <nav>
            <ul class="nav-list">
                <li>
                    <nuxt-link to="/about">About</nuxt-link>
                    <a href="javascript:;"></a>
                    <div class="location-dot"></div>
                </li>
                <li>
                    <nuxt-link to="/v">Product</nuxt-link>
                    <div class="location-dot"></div>
                </li>
                <li>
                     <nuxt-link to="/contact">Content me</nuxt-link>
                    <div class="location-dot"></div>
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
            @include toRem(top, 60);
            @include toRem(left, 60);
            a{ 
                @include toRem( font-size, 26);
                font-family: 'Anton', sans-serif;
                color: #fff;
            };
        }
        nav{ 
            position: absolute;
            @include toRem(top, 62);
            @include toRem(right, 160);
            .nav-list{
                li{ 
                    float: left;
                    position:relative;
                    @include toRem( margin-left, 36);
                    a{
                        position: relative;
                        display: block;
                        @include toRem( font-size, 18 );
                        @include toRem( letter-spacing, 0.5 );
                        font-family: 'Anton', sans-serif;
                        color: #fff;
                        font-weight: 500;
                        &:hover + .location-dot{
                            opacity: 1;
                            transform: translateY(-16px);
                        }
                    }
                    .location-dot{
                        position: absolute;
                        @include toRem( width, 5);
                        @include toRem( height, 5);
                        border-radius: 50%;
                        transition: background-color 200ms ease-in-out;
                        background-color: #F3F3F3;
                        margin-left: auto;
                        margin-right: auto;
                        left: 0;
                        right: 0;
                       @include toRem( top, 48);
                        transition: transform 400ms, opacity 400ms;
                        animation-duration: 800ms;
                        animation-timing-function: ease;
                        animation-fill-mode: forwards;
                        opacity: 0;
                    }
                    &:first-child{ margin-left:0; }
                    $show-numbers:true;
                    $num : 3;
                    @if $show-numbers {
                        @for $i from 1 through $num {
                            &:nth-child(#{$i}){
                                .location-dot{
                                    animation-delay: #{($i*80)+780}ms;
                                }
                            }
                        }
                    }
                }
                &:after{ content: ''; display: block; clear: both; }
            }
        }
        &.is-active{
           h1{
               a{ color: #000; }
           } 
            nav{ 
                position: absolute;
                @include toRem(top, 62);
                @include toRem(right, 160);
                .nav-list{
                    li{ 
                        a{
                            color: #000;
                        }
                        .location-dot{
                            background-color: #000;
                        }
                    }
                    &:after{ content: ''; display: block; clear: both; }
                }
            }
        }
    }
</style>  