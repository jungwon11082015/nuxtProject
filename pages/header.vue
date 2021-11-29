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
    @import "~assets/scss/function";
    //사용법
        //@include toRem(width, 400);
    //
    
    header{
        position: fixed; 
        top:0; left:0;
        width: 100%; 
        z-index: 100;
        h1{ 
            @include toRem(width, 120);
            a{ 
                @include toRem( font-size, 36);
                font-family: 'Anton', sans-serif;
                font-weight: bold;
                color: #000;
            };
        }
    }
</style> 