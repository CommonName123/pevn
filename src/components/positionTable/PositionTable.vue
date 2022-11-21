<template>
  <div>
    <b-button @click="backToMain">Вернуться на главную</b-button>
    <div class="row row-cols-1 row-cols-md-3">
      <div v-for="position in positions" :key="position.id" class="col mb-4">
        <div  class="card">
          <div class="card-body" @click="openOnEdit(position)">
            <h5 class="card-title">{{ position.name }}</h5>
            <p class="card-text">Какое-то описание</p>
            <p class="card-text"><small class="text-muted">Состав</small></p>
          </div>
        </div>
      </div>
      <div class="card" @click="openOnCreate">
        <div class="card-body">
          <h5 class="card-title">Новая позиция</h5>
          <p class="card-text">Какое-то описание</p>
          <p class="card-text"><small class="text-muted">Состав</small></p>
        </div>
      </div>
      <add-position :positionToAdd="positionToAdd"
                    :isCreating="isCreating"
                    :categoryId="categoryId" v-if="showPositionForm"
                    @closeForm="onCloseForm"></add-position>
    </div>
  </div>

</template>

<script lang="ts" src="./PositionTable.ts">
</script>

<style scoped>
.card-group {
  display: flex;
  flex-flow: row wrap;
  margin-right: -15px;
  margin-left: -15px;
}
</style>