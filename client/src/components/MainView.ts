import {Component, Prop, Vue} from "vue-property-decorator";
import Category from "@/types/Category";
import categoryApi from "@/api/category/CategoryApi";
import AddCategory from "@/components/addCategory/AddCategory.vue";

@Component({components: {AddCategory}})
export default class MainView extends Vue {

    /**
     * Список категорий
     * @private
     */
    private categories: Category[] = [];

    /**
     * Признак открытия формы на добавление
     * @private
     */
    private showAddForm = false;

    /**
     * Инициализация
     * @private
     */
    private mounted() {
        categoryApi.getCategories().then((data: Category[]) => {
            this.categories = data;
        });
    }

    private changeSection(categoryId: string) {
        this.$router.push('category/' + categoryId);
    }


}