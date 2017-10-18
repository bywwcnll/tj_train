<template>
  <div id="canvasC">
  </div>
</template>

<script>
  import * as THREE from 'three'
  export default {
    name: 'hello',
    mounted(){
    	let {innerWidth, innerHeight, requestAnimationFrame} = window
      let canvasC = document.getElementById('canvasC')
      let scene = new THREE.Scene()
      let camera = new THREE.PerspectiveCamera(90, innerWidth/innerHeight, 0.1, 1000)
      camera.position.z = 10
      let renderer = new THREE.WebGLRenderer()
      renderer.setSize(innerWidth, innerHeight)
      renderer.setClearColor('#fff')
      canvasC.appendChild(renderer.domElement)

      let geometry = new THREE.CubeGeometry(2, 3, 1)
      let material = new THREE.MeshBasicMaterial({color: '#ddd'})
      let cube = new THREE.Mesh(geometry, material)
      cube.rotation.x = 0.7
      scene.add(cube)

      let count = 0
      let render = (timestemp)=>{
//        cube.rotation.x += 0.02;
        cube.rotation.y += 0.02;
        renderer.render(scene, camera);
        requestAnimationFrame(render);
        count++
      }
//      setInterval(()=>{
//      	console.log(count)
//        count = 0
//      }, 1000)
      render()
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
