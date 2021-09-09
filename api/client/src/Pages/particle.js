import React from "react";
import Particles from "react-particles-js"
import Particlesconfig from "../config/particle-config";
import  "../config/particlecss.scss"

export default function ParticlesBackground()
{
return(

<Particles className="particless" params={Particlesconfig} > </Particles>

);

}
