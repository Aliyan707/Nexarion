'use client'

import { useRef, useMemo, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

const NODE_COLORS = ['#2563EB', '#3B82F6', '#60A5FA', '#1E3A8A', '#93C5FD']

interface Node {
  position: THREE.Vector3
  color: string
  size: number
  connections: number[]
}

function buildNetwork(): Node[] {
  const layers = [3, 5, 6, 5, 3]
  const nodes: Node[] = []
  const spacing = { x: 1.4, y: 0.9 }

  layers.forEach((count, li) => {
    for (let ni = 0; ni < count; ni++) {
      nodes.push({
        position: new THREE.Vector3(
          (li - (layers.length - 1) / 2) * spacing.x,
          (ni - (count - 1) / 2) * spacing.y,
          (Math.random() - 0.5) * 0.5
        ),
        color: NODE_COLORS[li % NODE_COLORS.length],
        size: 0.06 + Math.random() * 0.04,
        connections: [],
      })
    }
  })

  // Connect consecutive layers
  let offset = 0
  for (let li = 0; li < layers.length - 1; li++) {
    for (let a = 0; a < layers[li]; a++) {
      for (let b = 0; b < layers[li + 1]; b++) {
        nodes[offset + a].connections.push(offset + layers[li] + b)
      }
    }
    offset += layers[li]
  }

  return nodes
}

function NetworkScene() {
  const groupRef = useRef<THREE.Group>(null)
  const [pulses] = useState<{ progress: number; from: THREE.Vector3; to: THREE.Vector3; speed: number }[]>([])
  const pulseRef = useRef(pulses)

  const nodes = useMemo(buildNetwork, [])

  // Build line geometry for all connections
  const lineData = useMemo(() => {
    const points: THREE.Vector3[] = []
    nodes.forEach((node) => {
      node.connections.forEach((ci) => {
        points.push(node.position, nodes[ci].position)
      })
    })
    return points
  }, [nodes])

  const lineGeo = useMemo(() => {
    const positions = new Float32Array(lineData.length * 3)
    lineData.forEach((v, i) => {
      positions[i * 3] = v.x
      positions[i * 3 + 1] = v.y
      positions[i * 3 + 2] = v.z
    })
    const geo = new THREE.BufferGeometry()
    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    return geo
  }, [lineData])

  // Pulse spheres
  const pulseGroupRef = useRef<THREE.Group>(null)
  const pulseData = useRef<{ from: THREE.Vector3; to: THREE.Vector3; t: number; speed: number }[]>([])

  useMemo(() => {
    const data: { from: THREE.Vector3; to: THREE.Vector3; t: number; speed: number }[] = []
    nodes.forEach((node) => {
      node.connections.forEach((ci) => {
        if (Math.random() > 0.5) {
          data.push({
            from: node.position.clone(),
            to: nodes[ci].position.clone(),
            t: Math.random(),
            speed: 0.003 + Math.random() * 0.004,
          })
        }
      })
    })
    pulseData.current = data
  }, [nodes])

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime()

    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(t * 0.15) * 0.3
      groupRef.current.rotation.x = Math.sin(t * 0.1) * 0.1
    }

    // Update pulses
    pulseData.current.forEach((p) => {
      p.t += p.speed
      if (p.t > 1) p.t = 0
    })

    if (pulseGroupRef.current) {
      pulseGroupRef.current.children.forEach((child, i) => {
        const p = pulseData.current[i]
        if (!p) return
        const pos = p.from.clone().lerp(p.to, p.t)
        child.position.copy(pos)
        const sphere = child as THREE.Mesh
        const s = 0.8 + Math.sin(t * 3 + i) * 0.2
        sphere.scale.setScalar(s)
      })
    }
  })

  return (
    <group ref={groupRef}>
      {/* Connection lines */}
      <lineSegments geometry={lineGeo}>
        <lineBasicMaterial color="#1E3A8A" transparent opacity={0.35} />
      </lineSegments>

      {/* Nodes */}
      {nodes.map((node, i) => (
        <mesh key={i} position={node.position}>
          <sphereGeometry args={[node.size, 16, 16]} />
          <meshStandardMaterial
            color={node.color}
            emissive={node.color}
            emissiveIntensity={0.8}
            roughness={0.2}
            metalness={0.8}
          />
        </mesh>
      ))}

      {/* Glows around key nodes */}
      {nodes.map((node, i) => (
        <mesh key={`glow-${i}`} position={node.position}>
          <sphereGeometry args={[node.size * 2.5, 8, 8]} />
          <meshBasicMaterial color={node.color} transparent opacity={0.08} />
        </mesh>
      ))}

      {/* Animated pulses */}
      <group ref={pulseGroupRef}>
        {pulseData.current.map((_, i) => (
          <mesh key={i}>
            <sphereGeometry args={[0.035, 8, 8]} />
            <meshBasicMaterial color="#60A5FA" transparent opacity={0.9} />
          </mesh>
        ))}
      </group>
    </group>
  )
}

export default function NeuralNetwork() {
  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 55 }}
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true }}
      style={{ background: 'transparent' }}
    >
      <ambientLight intensity={0.4} />
      <pointLight position={[5, 5, 5]} intensity={1.5} color="#3B82F6" />
      <pointLight position={[-5, -5, -5]} intensity={0.8} color="#1E3A8A" />
      <NetworkScene />
    </Canvas>
  )
}
