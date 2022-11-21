
import {Component, Vue} from 'vue-property-decorator';
import MainView from '@/components/MainView.vue'; // @ is an alias to /src

@Component({
    components: {
        MainView,
    },
})
export default class HomeView extends Vue {
}