import { LightningElement } from 'lwc';
import templateOne from "./lifecycleHooksParent.html";

export default class LifecycleHooksParent extends LightningElement {
    show = true;
    reranderParentVar = false;

    // Запускается при создании экземрляра компонента
    constructor() {
        super();
        console.log('-----lifecycleHooks parent constructor()');
    }
    
    // Запускается после добавления компонента в DOM дерево. Здесь уже определены переменные отмеченные декоратором @api
    connectedCallback() {
        console.log('-----lifecycleHooks parent connectedCallback()');
    }

    // Этот метод указывает какую разметку использовать, если его переопределять нужно обязательно вернуть
    // файл разметки. Переменные помещенные в render() будут отслеживаться и при их изменениее компонент будет перерисовываться.
    render() {
        console.log('-----lifecycleHooks parent render()');
        this.reranderParentVar;
        return templateOne;
    }
    
    // Запускается, когда компонент полностью отрисовался
    renderedCallback() {
        console.log('-----lifecycleHooks parent renderedCallback()');
    }
    
    // Запускается после удаления компонента из DOM дерева
    disconnectedCallback() {
        console.log('-----lifecycleHooks parent disconnected callback')
    }
    
    // Запускается, если возникла ошибка в методах lifecycle hook любого дочернего объекта. 
    // Поведение похоже на метод catch, в нем можно ловить ошибки и обрабатывать их.
    errorCallback(error, stack) {
        console.log('-----lifecycleHooks parent errorCallback()');
        console.log('-----error: ' + error);
        console.log('-----stack: ', stack);
        // throw error; // Если нужно увидеть ошибку на экране
    }

    handleShowHide() {
        console.log('-----lifecycleHooks parent handleShowHide()');
        this.show = !this.show;
    }

    handleButton() {
        console.log('-----lifecycleHooks parent handleButton()');
    }

    reranderParent() {
        this.reranderParentVar = !this.reranderParentVar;
    }
}