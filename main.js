import './lib/matter.js';
import { keyMapper } from './lib/keyMap.js';
import { tickCounter } from './lib/tickCounter.js';
import { global } from './lib/global.js';
import Character from './Character.js';
import Platform from './Platform.js';
import blob from './blob.js';
 

function main() {

    const { Engine, Render, Runner, Composite, World } = Matter;

    // Create a running engine
    const engine = Engine.create({
        gravity: {
            x: 0,
            y: 1
        }
    });

    // Create a renderer
    const render = Render.create({
        element: document.body,
        engine: engine,
        options: {
            width: 1900,
            height: 900,
            wireframes: false
        }
    });

    // Add the engine, and an empty list of 'bodies' to the world
    World.add(engine.world, []);

    // Start the renderer
    Render.run(render);
    const runner = Runner.create();

    // Ensure that the physics runs at a constant speed regardless of framerate
    runner.isFixed = false;

    Runner.run(runner, engine); 

    // Define global variables:
    global.bodies = []; // List of physics 'bodies' in the world
    global.entities = []; // List of entities in the world
    global.world = engine.world;

    // Set function to run every game tick
    Matter.Events.on(runner, 'tick', tickCounter);

    // Check for keypresses and store them
    window.addEventListener('keydown', e => keyMapper(e))
    window.addEventListener('keyup', e => keyMapper(e))

    // Add entities here
    
    const player = new Character(400, 500, 50, 50);
    player.add();
    const Platform1 = new Platform(100, 900, 4000, 50);
    Platform1.add();
    const platform2 = new Platform(600, 800, 900, 50 );
    platform2.add(); 
    const Platform3 = new Platform(0,900,10,2000);
    Platform3.add();
    
    const Platform5 = new Platform(400,200,10,500);
    Platform5.add();
    const Platform6 = new Platform(1900,200,10,2000);
    Platform6.add();
    const Platform7 = new Platform(1000, 300, 300, 50);
    Platform7.add();
    const myPlayer = new blob()
    myPlayer.add();
}
window.onload = main;