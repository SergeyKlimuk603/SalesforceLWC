import { LightningElement } from 'lwc';
import templateOne from "./lifecycleHooksChildTemplateOne.html";
import templateTwo from "./lifecycleHooksChildTemplateTwo.html";

export default class LifecycleHooksChild extends LightningElement {
    showTemplateOne = true;

    // Запускается при создании экземрляра компонента
    constructor() {
        super();
        console.log('-----lifecycleHooks child constructor()');
    }
    
    // Запускается после добавления компонента в DOM дерево. Здесь уже определены переменные отмеченные декоратором @api
    connectedCallback() {
        console.log('-----lifecycleHooks child connectedCallback()');
        // throw new Error('Exception was throwed manually in Child component'); // Для проверки errorCallback()
    }

    // Этот метод указывает какую разметку использовать, если его переопределять нужно обязательно вернуть
    // файл разметки. Переменные помещенные в render() будут отслеживаться и при их изменениее компонент будет перерисовываться.
    render() {
        console.log('-----lifecycleHooks child render()');
        return this.showTemplateOne ? templateOne : templateTwo;
    }
    
    // Запускается, когда компонент полностью отрисовался
    renderedCallback() {
        console.log('-----lifecycleHooks child renderedCallback()');
    }
    
    // Запускается после удаления компонента из DOM дерева
    disconnectedCallback() {
        console.log('-----lifecycleHooks child disconnected callback')
    }
    
    // Запускается, если возникла ошибка в методах lifecycle hook любого дочернего объекта. 
    // Поведение похоже на метод catch, в нем можно ловить ошибки и обрабатывать их.
    errorCallback(error, stack) {
        console.log('-----lifecycleHooks child errorCallback()');
        console.log('-----error: ' + error);
        console.log('-----stack: ', stack);
    }

    switchTemplate() {
        console.log('-----lifecycleHooks child switchTemplate()');

        this.showTemplateOne = !this.showTemplateOne;
    }
}