<template>
  <div class="modal-mask">
    <div class="modal-wrapper">
      <div class="modal-container">
        <div class="modal-header">
          <h4>
            Добавить категорию
          </h4>
        </div>
        <div class="modal-body">
          <form class="form-class">
            <div class="form-group">
              <label for="inputCategoryName">Название категории</label>
              <input v-model="categoryToAdd.name" class="form-control" id="inputCategoryName" aria-describedby="emailHelp"
                     placeholder="Название категории">
            </div>
            <div class="form-group">
              <input type="file" class="custom-file-input" id="customFileLang">
              <label class="custom-file-label" for="customFileLang">Загрузить фото</label>
            </div>
          </form>
        </div>

        <div class="modal-footer">
          <slot name="footer">
            <button @click="save" class="btn btn-primary">Сохранить</button>
            <button @click="cancel" class="btn btn-primary">Отменить</button>
          </slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="./AddCategory">
</script>

<style scoped>
.btn{
  margin: 0 3px;
}
.form-group{
  margin: 20px 0;
}
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 400px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  font-family: Helvetica, Arial, sans-serif;
}

.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}

.modal-body {
  margin: 20px 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}

</style>