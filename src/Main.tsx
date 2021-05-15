import React from 'react';
import ReactDOM from 'react-dom';
import Phaser from 'phaser';

// Scenes
import scenes from './scenes';

// Components
import MasterUI from './ui/MasterUI';

const gameConfig: Phaser.Types.Core.GameConfig = {
    title: 'Sample',
    parent: 'game-content',
    type: Phaser.AUTO,
    scale: {
        width: window.innerWidth,
        height: window.innerHeight,
    },
    scene: scenes,
    physics: {
        default: 'arcade',
        arcade: {
            debug: true,
        },
    },
    backgroundColor: '#000000',
};

const game = new Phaser.Game(gameConfig);

window.addEventListener('resize', () => {
    game.scale.refresh();
});

ReactDOM.render(<MasterUI />, document.getElementById('react-content'));
