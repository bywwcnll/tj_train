<template>
  <div id="canvasC">
  </div>
</template>

<script>
  import * as THREE from 'three'
  export default {
    name: 'hello',
    mounted(){
      let renderer = new THREE.WebGLRenderer();
      renderer.setSize(window.innerWidth, window.innerHeight);
      document.getElementById('canvasC').innerHTML = '';
      document.getElementById('canvasC').appendChild(renderer.domElement);
      let camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 1, 500);
      camera.position.set(0, 0, 100);
      camera.lookAt(new THREE.Vector3(0, 0, 0));
      let scene = new THREE.Scene();


      let lineMaterial = new THREE.LineBasicMaterial({ color: 0x0000ff });
      let geometry = new THREE.Geometry();
      geometry.vertices.push(new THREE.Vector3(-10, 0, 0));
      geometry.vertices.push(new THREE.Vector3(0, 10, 10));
      geometry.vertices.push(new THREE.Vector3(20, 0, 0));
      let line = new THREE.Math.Line3(new THREE.Vector3(-10, 0, 0), new THREE.Vector3(0, 10, 10))
      scene.add(line);

      let circleGeometry = new THREE.CircleGeometry( 5, 32 );
      let mbMaterial = new THREE.MeshBasicMaterial( { color: 0xff0000 } );
      let circle = new THREE.Mesh( circleGeometry, mbMaterial );
      scene.add( circle );

      renderer.render(scene, camera);

    },
    data () {
      return {
      }
    },
    computed: {
    },
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
