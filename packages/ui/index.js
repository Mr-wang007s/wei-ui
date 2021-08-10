import WButton from "./Button.vue";

const components = [
    WButton
]

/* istanbul ignore next */
const install = (app, opts = {}) => {
    components.forEach((component) => {
        app.component(component.name, component);
    })
  
};

export {
    WButton
}

export default install;
