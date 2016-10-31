'use strict';

import '../styles/app.scss';

import { log } from './logger';

import { qs, qsa, byId } from './query';

import { ROTATION_VIEW } from './constants';

import { CubeTwo } from './cube-two';

//log('App running');

const states = {};
const infos = {
    // 'cubetwo-component-1': byId('cubetwo-state-info-1'),
    // 'cubetwo-component-2': byId('cubetwo-state-info-2'),
    // 'cubetwo-component-3': byId('cubetwo-state-info-3'),
    // 'cubetwo-component-4': byId('cubetwo-state-info-4'),
    // 'cubetwo-component-5': byId('cubetwo-state-info-5'),
    // 'cubetwo-component-6': byId('cubetwo-state-info-6'),
    // 'cubetwo-component-7': byId('cubetwo-state-info-7'),
    // 'cubetwo-component-8': byId('cubetwo-state-info-8'),
}

function statechangeCallback(eventName, payload) {
    // states[payload.cube.id] = payload.currentStateCode;
    // checkForComplete();

    // let info = infos[payload.cube.id];
    // if (info)
    //     info.innerHTML = `${payload.currentStateCode}`;
}

function initCallback(eventName, payload) {
    // let info = infos[payload.cube.id];
    // if (info)
    //     info.innerHTML = `${payload.state.code}`;
}

const bodyWrapperEl = qs('.body-wrapper');
const cubeComponentEl = byId('cubetwo-component-1');
const cubetwoRotationViewEl = qs('.cubetwo-rotation-view', cubeComponentEl);

function checkForComplete() {}

const cubeTwo = new CubeTwo({
    cubeComponent: cubeComponentEl,
    isTapEnabled: true, // default: true
    isRotateAnimationEnabled: true, // default: true
    transition: 'transform 200ms', // default: transform 200ms
});
cubeTwo.addCallbackForEvent('init', (eventName, payload) => {
    // log('init callback');
    // log(payload);
});
cubeTwo.init();


const cubetwoBtnMenuEl = qs('.cubetwo-js.cubetwo-btn-menu', cubeComponentEl),
    cubetwoMenuEl = qs('.cubetwo-menu-component');

cubetwoBtnMenuEl.addEventListener('click', ev => {
    cubetwoMenuEl.classList.toggle('cubetwo-show-dialog');
    ev.currentTarget.classList.toggle('cubetwo-active');
});

const cubetwoBtnHelpEl = qs('.cubetwo-js.cubetwo-btn-help', cubeComponentEl),
    cubetwoHelpEl = qs('.cubetwo-help-component');

cubetwoBtnHelpEl.addEventListener('click', ev => {
    cubetwoHelpEl.classList.toggle('cubetwo-show-dialog');
    ev.currentTarget.classList.toggle('cubetwo-active');
});

qs('.cubetwo-btn-top-left', cubeComponentEl).addEventListener('click',
    ev => cubetwoRotationViewEl.style.transform = `rotateX(${ROTATION_VIEW.X}deg) rotateY(-${ROTATION_VIEW.Y}deg) rotateZ(0deg)`
);
qs('.cubetwo-btn-top-right', cubeComponentEl).addEventListener('click',
    ev => cubetwoRotationViewEl.style.transform = `rotateX(${ROTATION_VIEW.X}deg) rotateY(${ROTATION_VIEW.Y}deg) rotateZ(0deg)`
);
qs('.cubetwo-btn-bottom-left', cubeComponentEl).addEventListener('click',
    ev => cubetwoRotationViewEl.style.transform = `rotateX(-${ROTATION_VIEW.X}deg) rotateY(-${ROTATION_VIEW.Y}deg) rotateZ(0deg)`
);
qs('.cubetwo-btn-bottom-right', cubeComponentEl).addEventListener('click',
    ev => cubetwoRotationViewEl.style.transform = `rotateX(-${ROTATION_VIEW.X}deg) rotateY(${ROTATION_VIEW.Y}deg) rotateZ(0deg)`
);

//-----
qs('.cubetwo-btn-top-center', cubeComponentEl).addEventListener('click',
    ev => cubeTwo.x()
);
qs('.cubetwo-btn-bottom-center', cubeComponentEl).addEventListener('click',
    ev => cubeTwo.x_()
);
qs('.cubetwo-js.cubetwo-btn-rotate-left', cubeComponentEl).addEventListener('click',
    ev => cubeTwo.y_()
);
qs('.cubetwo-js.cubetwo-btn-rotate-left-2x', cubeComponentEl).addEventListener('click',
    ev => cubeTwo.y2_()
);
qs('.cubetwo-js.cubetwo-btn-rotate-right', cubeComponentEl).addEventListener('click',
    ev => cubeTwo.y()
);
qs('.cubetwo-js.cubetwo-btn-rotate-right-2x', cubeComponentEl).addEventListener('click',
    ev => cubeTwo.y2()
);

window.addEventListener('keydown', cubeTwo.handleGlobalKeyEvent, false);
window.cubetwo = cubeTwo;

log('cubetwo is available in console');