<template>
  <div>
    <b-button-group>
      <b-button @click="showAddForm=true">Добавить категорию</b-button>
      <b-dropdown right text="Меню" router="router">
        <b-dropdown-item v-for="category in categories"
                         v-bind:index="category.id"
                         v-bind:key="category.id"
        @click="changeSection(category.id)">
          {{ category.name }}

        </b-dropdown-item>
      </b-dropdown>

      <b-button>Новости</b-button>
      <b-button>Доставка</b-button>
      <b-button>Логотип</b-button>
      <b-button>Контакты</b-button>
    </b-button-group>
    <add-category v-if="showAddForm" @closeForm="showAddForm=false"></add-category>
  </div>
</template>

<script lang="ts" src="./MainView.ts">

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
