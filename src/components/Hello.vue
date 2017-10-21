<template>
  <div id="canvasC">
  </div>
</template>

<script>
  import * as THREE from 'three'
  export default {
    name: 'hello',
    mounted(){
    	this.threeStart()
    },
    data () {
      return {
        renderer: null,
        scene: null,
        camera: null,
      }
    },
    methods: {
    	initThree(){
        let {innerWidth, innerHeight} = window
        let canvasC = document.getElementById('canvasC')
        this.renderer = new THREE.WebGLRenderer()
        this.renderer.setSize(innerWidth, innerHeight)
        this.renderer.setClearColor('#fff')
        canvasC.appendChild(this.renderer.domElement)
      },
    	initScene(){
    	  this.scene = new THREE.Scene()
      },
    	initCamera(){
        let {innerWidth, innerHeight} = window
        this.camera = new THREE.PerspectiveCamera(45, innerWidth/innerHeight, 1, 1000)
        this.camera.position.x = 0
        this.camera.position.y = 0
        this.camera.position.z = 100
        this.camera.up.x = 0
        this.camera.up.y = 1
        this.camera.up.z = 1
        this.camera.lookAt({
          x : 0,
          y : 0,
          z : 0
        })
      },
      initLight(){
    		let light = new THREE.DirectionalLight('#f00', 1.0, 0)
        light.position.set(10, 10, 20)
        this.scene.add(light)
      },
      initObject(){
        let cubeGeometry = new THREE.CubeGeometry(20, 30, 10)
        let meshBasicMaterial = new THREE.MeshBasicMaterial({color: '#ddd'})
        let cube = new THREE.Mesh(cubeGeometry, meshBasicMaterial)
        this.scene.add(cube)

        let geometry = new THREE.Geometry()
        let lineBasicMaterial = new THREE.LineBasicMaterial( { vertexColors: true } )
        let color1 = new THREE.Color('#444')
        let color2 = new THREE.Color('#0f0')
        let p1 = new THREE.Vector3( -10, 0, 10 )
        let p2 = new THREE.Vector3(  10, 0, -10 )
        geometry.vertices.push(p1)
        geometry.vertices.push(p2)
        geometry.colors.push( color1, color2 )
        let line = new THREE.Line( geometry, lineBasicMaterial, THREE.LineSegments )
        this.scene.add(line)
      },
      render(){
        this.scene.children[1].rotation.y += 0.02
        this.renderer.render(this.scene, this.camera);
        requestAnimationFrame(this.render);
      },
      threeStart(){
    		this.initThree()
    		this.initScene()
    		this.initLight()
    		this.initCamera()
    		this.initObject()
        this.render()
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
