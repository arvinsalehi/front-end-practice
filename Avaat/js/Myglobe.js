import {OrbitControls} from "../three.js-master/examples/jsm/controls/OrbitControls.js";


function main() {
    const width = $('.globe-wrap').clientWidth;
    const height = $('.globe-wrap').clientHeight;
    // getting canvas and create rendering
    const canvas = document.getElementById('scene');
    const renderer = new THREE.WebGLRenderer({
        canvas,
        alpha: true
    });

    // setting background color and size
    renderer.setClearColor(0x000000, 0);
    renderer.setSize(width, height); // set size according to globe-wrap div element

    // setups
    const fov = 80; // field of view
    const aspect = 2; // canvas default
    const near = .1; // space in front
    const far = 20;
    const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);  //creating camera object
    camera.position.y = 2

    if ($(window).width() > 1262) {
        camera.position.z = .2; // bringing camera behind to see globe
    } else if (1000 < $(window).width() && $(window).width() <= 1262) {
        camera.position.z = 1.5; // bringing camera behind to see globe
    } else if (650 < $(window).width() && $(window).width() <= 1000) {
        camera.position.z = .6; // bringing camera behind to see globe
    } else if ($(window).width() <= 650) {
        camera.position.z = 1.6; // bringing camera behind to see globe
    }

    // creating and setting up controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.rotateSpeed = .2;
    controls.maxPolarAngle = Math.PI / 1.5;  // allowed rotate angle down
    controls.minPolarAngle = Math.PI / 3;  // allowed rotate angle up
    controls.enableDamping = true; // For that slippery Feeling
    controls.enableZoom = false;
    controls.dampingFactor = 0.12; // ! check
    controls.update();

    // creating scene
    const scene = new THREE.Scene();

    // light creation and setup
    const color = 0xFFFFFF;
    const intensity = 1;
    const light = new THREE.DirectionalLight(color, intensity);
    light.position.set(-1, 0, 1.5);
    scene.add(light); // adding to scene

    // creating a light holder ( for more details if ever needed)
    const lightHolder = new THREE.Group();
    lightHolder.add(light);
    scene.add(lightHolder);

    // sphere creation and setup
    const radius = 1.1;
    const widthSegments = 42;
    const heightSegments = 42;
    const geometry = new THREE.SphereGeometry(radius, widthSegments, heightSegments, Math.PI * 1.1, Math.PI * 2);

    // calculating image aspect ratio for using further below
    const img_aspect = window.innerWidth / window.innerHeight;

    // creating texture
    let texture = new THREE.TextureLoader().load('../image/earthmap1k.jpg', () => {
        cover(texture, img_aspect);
        texture.needsUpdate = true; // !check
    });
    texture.matrixAutoUpdate = false; // !check

    // creating material
    const material = new THREE.MeshPhongMaterial({ //CHANGED to MeshBasicMaterial
        map: texture,
    });

    material.map.needsUpdate = true; //ADDED // ! check

    function cover(texture, img_aspect) {
        // function to make picture size adjusted to sphere

        let imageAspect = texture.image.width / texture.image.height; // image aspect ratio when sphere size changed

        if (img_aspect < imageAspect) {

            texture.matrix.setUvTransform(0, 0, aspect / imageAspect, 1, 0, 0.5, 0.5); // ! check

        } else {

            texture.matrix.setUvTransform(0, 0, 1, imageAspect / aspect, 0, 0.5, 0.5); // !check

        }

    }

    // creating globe and adding to scene additionally rendering scene and camera
    const globe = new THREE.Mesh(geometry, material);
    scene.add(globe);
    renderer.render(scene, camera);

    $('#scene').on('mouseup', onDocumentMouseDown)
    $('#scene').on('touchend', onDocumentTouchDown)

    let raycaster = new THREE.Raycaster();
    let mouse = new THREE.Vector2();

    // function to show what happens when globe is clicked
    function onDocumentMouseDown(event) {

        event.preventDefault();

        mouse.x = (event.clientX / renderer.domElement.clientWidth) * 2 - 1;
        mouse.y = -(event.clientY / renderer.domElement.clientHeight) * 2 + 1;

        raycaster.setFromCamera(mouse, camera);

        let intersects = raycaster.intersectObjects(scene.children);
        console.log(intersects.length)

        if (intersects.length > 0) {

            const pixelX = Math.round(intersects[0].uv.x * 1000);
            const pixelY = Math.round(intersects[0].uv.y * 500);
            // alert(pixelX + '-' + pixelY)
            if (576 <= pixelX && pixelX <= 639 && 215 <= pixelY && pixelY <= 269) {
                // alert('true')
                console.log(pixelX + '-' + pixelY)
            }
        }
    }

    // function to show what happens when globe is touched (touch-screen)
    function onDocumentTouchDown(event) {

        event.preventDefault();

        mouse.x = (event.changedTouches[0].clientX / window.innerWidth) * 2 - 1;
        mouse.y = -(event.changedTouches[0].clientY / window.innerHeight) * 2 + 1;

        raycaster.setFromCamera(mouse, camera);
        const intersects = raycaster.intersectObjects(scene.children);

        if (intersects.length > 0) {

            const pixelX = Math.round(intersects[0].uv.x * 1000);
            const pixelY = Math.round(intersects[0].uv.y * 500);
            // alert(pixelX + '-' + pixelY)
            if (576 <= pixelX && pixelX <= 639 && 158 <= pixelY && pixelY <= 227) {
                // alert('true')
                console.log(pixelX + '-' + pixelY)
            }
        }
    }

    // adjusting scene when resize happens
    function resizeRendererToDisplaySize(renderer) {
        // on resize -
        const canvas = renderer.domElement; // get canvas
        // get canvas height and width
        const width = canvas.clientWidth;
        const height = canvas.clientHeight;
        // if canvas width or height wasn't equal to its initial figure call renderer set size
        const needResize = canvas.width !== width || canvas.height !== height;
        if (needResize) {
            renderer.setSize(width, height, false);
        }
        return needResize;
    }

    function render(time) {
        // render loop for rotating globe

        time *= 0.00009;  // convert time to seconds // rotate rate

        if (resizeRendererToDisplaySize(renderer)) {
            // if needResize true
            const canvas = renderer.domElement; // get canvas
            camera.aspect = canvas.clientWidth / canvas.clientHeight; // correct camera aspect (default was 2)
            camera.updateProjectionMatrix(); // update camera to always show globe
        }
        // const canvas = renderer.domElement;
        // camera.aspect = canvas.clientWidth / canvas.clientHeight;
        // camera.updateProjectionMatrix();

        globe.rotation.y = time; // rotate globe
        lightHolder.quaternion.copy(camera.quaternion); // !check
        controls.update(); // update controls
        renderer.render(scene, camera); // render scene and camera

        requestAnimationFrame(render); // continue the loop
    }

    requestAnimationFrame(render); // start the loop
}

main()