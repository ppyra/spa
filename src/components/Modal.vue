<template>
  <div class="c-modal">
    <div class="c-modal-guts">
      <header class="c-heading c-heading--level1">
        <slot name="header">
          This is the default tile!
        </slot>
      </header>
      <section class="modal-body">
        <slot name="body">
          I'm the default body!
        </slot>
       </section>
       <footer class="modal-footer">
          <slot name="footer">
            <button type="button" class="c-btn c-btn--accent" @click="close">Close me!</button>
            <button type="button" class="c-btn c-btn--primary" @click="close">Close me!</button>
        </slot>
      </footer>
    </div>
  </div>
</template>


<script>
  export default {
    name: 'modal',

    methods: {
      close() {
        this.$emit('close');
      },
    },
  };
</script>
<style>

  .modal-footer {
    border-top: 1px solid #eeeeee;
    justify-content: flex-end;
  }

  .modal-body {
    position: relative;
    padding: 20px 10px;
  }
</style>