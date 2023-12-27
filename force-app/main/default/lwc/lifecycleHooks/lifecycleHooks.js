import { LightningElement } from 'lwc';
import lifecycleHooksHtml from "./lifecycleHooks.html";

export default class LifecycleHooks extends LightningElement {
    // source: https://developer.salesforce.com/docs/component-library/documentation/en/lwc/lwc.reference_lifecycle_hooks
    // source: https://www.apexhours.com/lifecycle-hooks-in-lightning-web-component/

    someVariable;

    // Запускается при создании экземрляра компонента
    constructor() {
        super();
        console.log('-----lifecycleHooks constructor()');
    }
    
    // Запускается после добавления компонента в DOM дерево. Здесь уже определены переменные отмеченные декоратором @api
    connectedCallback() {
        console.log('-----lifecycleHooks connectedCallback()');
        // throw new Error('Exception throwed manually');
    }
    
    // Этот метод указывает какую разметку использовать, если его переопределять нужно обязательно вернуть
    // файл разметки. Переменные помещенные в render() будут отслеживаться и при их изменениее компонент будет перерисовываться.
    render() {
        console.log('-----lifecycleHooks render()');
        return lifecycleHooksHtml;
    }

    // Запускается, когда компонент полностью отрисовался
    renderedCallback() {
        console.log('-----lifecycleHooks renderedCallback()');
        // someVariable.details;
    }
    
    // Запускается после удаления компонента из DOM дерева
    disconnectedCallback() {
        console.log('-----lifecycleHooks disconnectedCallback()');
    }
    
    // Запускается, если возникла ошибка в методах lifecycle hook любого дочернего объекта. 
    // Поведение похоже на метод catch, в нем можно ловить ошибки и обрабатывать их.
    errorCallback(error, stack) {
        console.log('-----lifecycleHooks errorCallback()');
        console.log('-----error: ' + error);
        console.log('-----stack: ', stack);
    }
}