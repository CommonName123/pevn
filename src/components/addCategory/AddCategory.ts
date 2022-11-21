import {Component, Prop, Vue} from "vue-property-decorator";
import Category from "@/types/Category";
import categoryApi from "@/api/category/CategoryApi";

@Component
export default class AddCategory extends Vue {

    /**
     * Категория в форме на добавление
     * @private
     */
    private categoryToAdd:Category=new Category();


    /**
     * Создание новой категории
     * @private
     */
    private save(){
        categoryApi.createCategory(this.categoryToAdd)
            .then(data=>{
                this.$emit('closeForm');
            })
            .catch(error=>{
                alert('Ошибка создания категории');
            });
    }

    /**
     * Отменить и закрыть форму
     * @private
     */
    private cancel(){
        this.$emit('closeForm');
    }


}