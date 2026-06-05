'use client'

import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Points, PointMaterial } from '@react-three/drei'
import * as THREE from 'three'

function Particles() {
  const ref = useRef<THREE.Points>(null)

  const positions = useMemo(() => {
    const count = 2000
    const pos = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 30
      pos[i * 3 + 1] = (Math.random() - 0.5) * 30
      pos[i * 3 + 2] = (Math.random() - 0.5) * 15
    }
    return pos
  }, [])

  useFrame(({ clock }) => {
    if (!ref.current) return
    const t = clock.getElapsedTime()
    ref.current.rotation.y = t * 0.015
    ref.current.rotation.x = t * 0.008
  })

  return (
    <Points ref={ref} positions={positions} stride={3}>
      <PointMaterial
        transparent
        color="#3B82F6"
        size={0.04}
        sizeAttenuation
        opacity={0.4}
        depthWrite={false}
      />
    </Points>
  )
}

export default function ParticleField() {
  return (
    <Canvas
      camera={{ position: [0, 0, 8], fov: 70 }}
      dpr={[1, 1.5]}
      gl={{ antialias: false, alpha: true }}
      style={{ background: 'transparent', position: 'absolute', inset: 0 }}
    >
      <Particles />
    </Canvas>
  )
}
