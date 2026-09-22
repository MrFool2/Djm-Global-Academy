import Particles from "./Particles";

export default function ParticleRoute() {
  return (
    <Particles
          particleColors={["#ffffff"]}
          particleCount={500}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover
          alphaParticles
          disableRotation
          pixelRatio="5"
      />
  )
}