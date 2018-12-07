<template>
    <div :class="['MessageBox',variant]">
        <div class="MessageBox__container-text content" >
            <span>
                <slot name="text"></slot>
            </span>
        </div>
        <span class="MessageBox__time">
            <slot name="time"></slot>
        </span>
    </div>
</template>

<script>
export default {
  props: {
    variant: {
      validator (val) {
        return ['blue', 'green'].indexOf(val) > -1
      }
    }
  }
}
</script>

<style lang="scss">
$blue: #3f8df7;
$green: #76d672;

.blue{
    margin-right: auto;
    .content{
        background-color: $blue
    }
}

.green{
    margin-left: auto;
    .content{
        background-color: $green;
    }
}

.MessageBox{
    width: 80%;
    &__container-text{
        padding: 10px 15px;
        border-radius: 25px;
        font-size: 13px;
        color: #fff;
    }
    &__time{
        font-size: 12px;
        color: #4a4a4a;
    }
}
</style>
