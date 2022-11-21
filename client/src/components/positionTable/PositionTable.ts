import {Component, Prop, Vue} from "vue-property-decorator";
import Position from "@/types/Position";
import positionApi from "@/api/position/PositionApi";
import AddPosition from "@/components/addPosition/AddPosition.vue";

@Component({components: {AddPosition}})
export default class PositionTable extends Vue {

    private categoryId!: number;

    private isCreating = true;

    private showPositionForm = false;

    private positionToAdd: Position | null = null;

    /**
     * Категория в форме на добавление
     * @private
     */
    private positions: Position[] = [];


    /**
     * Иницилизация
     * @private
     */
    private mounted() {
        this.categoryId = parseInt(this.$route.params.id);
        this.loadData();
    }

    private loadData() {
        positionApi.getPositions(this.categoryId).then(data => {
            this.positions = data;
        })
    }


    private openOnEdit(position: Position) {
        this.positionToAdd = position;
        this.isCreating = false;
        this.showPositionForm = true;
    }

    private openOnCreate() {
        this.positionToAdd = new Position();
        this.isCreating = true;
        this.showPositionForm = true;
    }

    private onCloseForm() {
        this.showPositionForm = false;
        this.loadData();

    }

    private backToMain() {
        this.$router.push('/');
    }


}