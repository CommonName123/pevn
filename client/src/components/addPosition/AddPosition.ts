import {Component, Prop, Vue} from "vue-property-decorator";
import positionApi from "@/api/position/PositionApi";
import Position from "@/types/Position";

@Component
export default class AddPosition extends Vue {

    /**
     * Позиция в форме на добавление
     * @private
     */
    @Prop({default:new Position()})
    private positionToAdd!: Position;

    @Prop({default:true})
    private isCreating!:boolean;

    @Prop()
    private categoryId!: string;


    /**
     * Создание новой категории
     * @private
     */
    private save() {
        this.positionToAdd.category = parseInt(this.categoryId);

        if (this.isCreating){
            positionApi.createPosition(this.positionToAdd)
                .then(data => {
                    this.$emit('closeForm');
                })
                .catch(error => {
                    alert('Ошибка создания позиции');
                });
        }else{
            positionApi.updatePosition(this.positionToAdd)
                .then(data => {
                    this.$emit('closeForm');
                })
                .catch(error => {
                    alert('Ошибка редактирования позиции');
                });
        }

    }

    /**
     * Отменить и закрыть форму
     * @private
     */
    private cancel() {
        this.$emit('closeForm');
    }


}