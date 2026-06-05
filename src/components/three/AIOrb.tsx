'use client'

import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Sphere, Torus, Points, PointMaterial, MeshDistortMaterial } from '@react-three/drei'
import * as THREE from 'three'
import { useMousePosition } from '@/hooks/useMousePosition'

const vertexShader = `
  uniform float uTime;
  uniform vec2 uMouse;
  varying vec2 vUv;
  varying vec3 vNormal;
  varying float vDistort;

  vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
  vec4 mod289(vec4 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
  vec4 permute(vec4 x) { return mod289(((x*34.0)+1.0)*x); }
  vec4 taylorInvSqrt(vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }
  float snoise(vec3 v) {
    const vec2 C = vec2(1.0/6.0, 1.0/3.0);
    const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);
    vec3 i  = floor(v + dot(v, C.yyy));
    vec3 x0 = v - i + dot(i, C.xxx);
    vec3 g = step(x0.yzx, x0.xyz);
    vec3 l = 1.0 - g;
    vec3 i1 = min(g.xyz, l.zxy);
    vec3 i2 = max(g.xyz, l.zxy);
    vec3 x1 = x0 - i1 + C.xxx;
    vec3 x2 = x0 - i2 + C.yyy;
    vec3 x3 = x0 - D.yyy;
    i = mod289(i);
    vec4 p = permute(permute(permute(
      i.z + vec4(0.0, i1.z, i2.z, 1.0))
      + i.y + vec4(0.0, i1.y, i2.y, 1.0))
      + i.x + vec4(0.0, i1.x, i2.x, 1.0));
    float n_ = 0.142857142857;
    vec3 ns = n_ * D.wyz - D.xzx;
    vec4 j = p - 49.0 * floor(p * ns.z * ns.z);
    vec4 x_ = floor(j * ns.z);
    vec4 y_ = floor(j - 7.0 * x_);
    vec4 x = x_ *ns.x + ns.yyyy;
    vec4 y = y_ *ns.x + ns.yyyy;
    vec4 h = 1.0 - abs(x) - abs(y);
    vec4 b0 = vec4(x.xy, y.xy);
    vec4 b1 = vec4(x.zw, y.zw);
    vec4 s0 = floor(b0)*2.0 + 1.0;
    vec4 s1 = floor(b1)*2.0 + 1.0;
    vec4 sh = -step(h, vec4(0.0));
    vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy;
    vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww;
    vec3 p0 = vec3(a0.xy, h.x);
    vec3 p1 = vec3(a0.zw, h.y);
    vec3 p2 = vec3(a1.xy, h.z);
    vec3 p3 = vec3(a1.zw, h.w);
    vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2,p2), dot(p3,p3)));
    p0 *= norm.x; p1 *= norm.y; p2 *= norm.z; p3 *= norm.w;
    vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
    m = m * m;
    return 42.0 * dot(m*m, vec4(dot(p0,x0), dot(p1,x1), dot(p2,x2), dot(p3,x3)));
  }

  void main() {
    vUv = uv;
    vNormal = normalize(normalMatrix * normal);
    float noise = snoise(normal * 2.0 + uTime * 0.3) * 0.15;
    noise += snoise(normal * 4.0 - uTime * 0.2) * 0.08;
    vec3 displaced = position + normal * noise;
    vDistort = noise;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(displaced, 1.0);
  }
`

const fragmentShader = `
  uniform float uTime;
  uniform vec3 uColorA;
  uniform vec3 uColorB;
  uniform vec3 uColorC;
  varying vec2 vUv;
  varying vec3 vNormal;
  varying float vDistort;

  void main() {
    vec3 viewDir = normalize(vec3(0.0, 0.0, 1.0));
    float fresnel = pow(1.0 - abs(dot(vNormal, viewDir)), 2.5);
    float pulse = sin(uTime * 1.5) * 0.5 + 0.5;
    vec3 color = mix(uColorA, uColorB, fresnel);
    color = mix(color, uColorC, vDistort * 3.0 + 0.2);
    color += uColorC * fresnel * pulse * 0.4;
    float alpha = 0.7 + fresnel * 0.3 + pulse * 0.1;
    gl_FragColor = vec4(color, alpha);
  }
`

function OrbMesh({ mouseNorm }: { mouseNorm: { x: number; y: number } }) {
  const meshRef = useRef<THREE.Mesh>(null)
  const ring1Ref = useRef<THREE.Mesh>(null)
  const ring2Ref = useRef<THREE.Mesh>(null)
  const ring3Ref = useRef<THREE.Mesh>(null)
  const glowRef = useRef<THREE.Mesh>(null)

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uMouse: { value: new THREE.Vector2(0, 0) },
      uColorA: { value: new THREE.Color('#1E3A8A') },
      uColorB: { value: new THREE.Color('#2563EB') },
      uColorC: { value: new THREE.Color('#60A5FA') },
    }),
    []
  )

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime()
    uniforms.uTime.value = t
    uniforms.uMouse.value.set(mouseNorm.x * 0.5, mouseNorm.y * 0.5)

    if (meshRef.current) {
      meshRef.current.rotation.y = t * 0.15
      meshRef.current.rotation.x = Math.sin(t * 0.1) * 0.1 + mouseNorm.y * 0.15
      meshRef.current.position.x = mouseNorm.x * 0.12
      meshRef.current.position.y = Math.sin(t * 0.5) * 0.08 + mouseNorm.y * 0.1
    }
    if (glowRef.current) {
      glowRef.current.rotation.y = t * 0.15
      glowRef.current.position.y = Math.sin(t * 0.5) * 0.08
      const s = 1 + Math.sin(t * 1.2) * 0.03
      glowRef.current.scale.setScalar(s)
    }
    if (ring1Ref.current) {
      ring1Ref.current.rotation.z = t * 0.4
      ring1Ref.current.rotation.x = 0.4 + mouseNorm.y * 0.2
    }
    if (ring2Ref.current) {
      ring2Ref.current.rotation.z = -t * 0.3
      ring2Ref.current.rotation.y = t * 0.2
    }
    if (ring3Ref.current) {
      ring3Ref.current.rotation.x = t * 0.25
      ring3Ref.current.rotation.z = -t * 0.15 + mouseNorm.x * 0.2
    }
  })

  return (
    <group>
      {/* Outer glow sphere */}
      <Sphere ref={glowRef} args={[1.35, 64, 64]}>
        <meshBasicMaterial
          color="#1E3A8A"
          transparent
          opacity={0.08}
          side={THREE.BackSide}
        />
      </Sphere>

      {/* Main orb with custom shader */}
      <mesh ref={meshRef}>
        <sphereGeometry args={[1.0, 128, 128]} />
        <shaderMaterial
          vertexShader={vertexShader}
          fragmentShader={fragmentShader}
          uniforms={uniforms}
          transparent
          depthWrite={false}
        />
      </mesh>

      {/* Energy ring 1 */}
      <Torus ref={ring1Ref} args={[1.5, 0.008, 16, 200]} rotation={[Math.PI / 2, 0, 0]}>
        <meshBasicMaterial color="#3B82F6" transparent opacity={0.7} />
      </Torus>

      {/* Energy ring 2 */}
      <Torus ref={ring2Ref} args={[1.8, 0.005, 16, 200]} rotation={[Math.PI / 4, Math.PI / 6, 0]}>
        <meshBasicMaterial color="#60A5FA" transparent opacity={0.45} />
      </Torus>

      {/* Energy ring 3 */}
      <Torus ref={ring3Ref} args={[2.1, 0.003, 16, 200]} rotation={[0, Math.PI / 4, Math.PI / 5]}>
        <meshBasicMaterial color="#93C5FD" transparent opacity={0.3} />
      </Torus>
    </group>
  )
}

function OrbParticles() {
  const ref = useRef<THREE.Points>(null)

  const { positions, sizes } = useMemo(() => {
    const count = 1200
    const positions = new Float32Array(count * 3)
    const sizes = new Float32Array(count)

    for (let i = 0; i < count; i++) {
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)
      const r = 1.6 + Math.random() * 2.4

      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta)
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta)
      positions[i * 3 + 2] = r * Math.cos(phi)
      sizes[i] = Math.random() * 2.5 + 0.5
    }

    return { positions, sizes }
  }, [])

  useFrame(({ clock }) => {
    if (!ref.current) return
    ref.current.rotation.y = clock.getElapsedTime() * 0.05
    ref.current.rotation.x = clock.getElapsedTime() * 0.02
  })

  return (
    <Points ref={ref} positions={positions} stride={3}>
      <PointMaterial
        transparent
        color="#60A5FA"
        size={0.015}
        sizeAttenuation
        opacity={0.6}
        depthWrite={false}
      />
    </Points>
  )
}

function Scene() {
  const { normalized } = useMousePosition()

  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[5, 5, 5]} intensity={2} color="#3B82F6" />
      <pointLight position={[-5, -3, -5]} intensity={1} color="#1E3A8A" />
      <pointLight position={[0, 0, 6]} intensity={1.5} color="#60A5FA" />
      <OrbMesh mouseNorm={normalized} />
      <OrbParticles />
    </>
  )
}

export default function AIOrb() {
  return (
    <Canvas
      camera={{ position: [0, 0, 4.5], fov: 50 }}
      dpr={[1, 2]}
      gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      style={{ background: 'transparent' }}
    >
      <Scene />
    </Canvas>
  )
}
