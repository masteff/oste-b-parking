import React from 'react'
import {connect} from 'react-redux'
import Spot from './Spot'



export const SpotsList = ({floor,spots,filters,uid,hasspot}) => (
    floor === 'u1' ? (<div className='grid-layout'>
        <div className='grid-item spot-vert-x'>5</div>
        <div className='grid-item spot-vert-x'>6</div>
        <Spot {...spots[6]} {...filters} uid={uid} hasspot={hasspot} layout='grid-item spot-vert-o'/>
        <div className='grid-item spot-vert-x'>8</div>
        <div className='grid-item spot-vert-x'>9</div>
        <div className='grid-item spot-vert-x'>10</div>
        <Spot {...spots[10]} {...filters} uid={uid} hasspot={hasspot} layout='grid-item spot-vert-o'/>
        <Spot {...spots[11]} {...filters} uid={uid} hasspot={hasspot} layout='grid-item spot-vert-o'/>
        <Spot {...spots[12]} {...filters} uid={uid} hasspot={hasspot} layout='grid-item spot-vert-o'/>
        <div className='grid-item spot-vert-x'>14</div>
        <div className='grid-item spot-vert-x'>15</div>
        <div className="grid-item spot-vert-x">p</div>
        <div className='grid-item spot-vert-x'>16</div>
        <Spot {...spots[16]} {...filters} uid={uid} hasspot={hasspot} layout='grid-item spot-vert-o'/>
        <div className='grid-item spot-vert-x'>18</div>
        <div className="grid-item spot-vert-x">Auf</div>
        <div className="grid-item span-2-2">p</div>
        <div className="grid-item span-2-2">p</div>
        <div className="grid-item span-20-2">Street</div>
        <div className='grid-item spot-vert-x'>1</div>
        <div className='grid-item spot-vert-x'>2</div>
        <Spot {...spots[2]} {...filters} uid={uid} hasspot={hasspot} layout='grid-item spot-vert-o'/>
        <div className='grid-item spot-vert-x'>4</div>
        <Spot {...spots[83]} {...filters} uid={uid} hasspot={hasspot} layout='grid-item spot-horz-o'/>
        <div className="grid-item span-1-10">str</div>
        <div className="grid-item span-4-1">p</div>
        <div className="grid-item span-1-10">p</div>
        <div className="grid-item span-4-1">p</div>
        <div className="grid-item span-2-10">str</div>
        <div className="grid-item span-2-4">x</div>
        <div className='grid-item spot-horz-x'>83</div>
        <div className="grid-item spot-horz-x">p</div>
        <div className="grid-item spot-horz-x">p</div>
        <div className="grid-item spot-horz-x">p</div>
        <div className="grid-item spot-horz-x">p</div>
        <div className="grid-item span-4-6">p</div>
        <div className='grid-item spot-horz-x'>82</div>
        <Spot {...spots[75]} {...filters} uid={uid} hasspot={hasspot} layout='grid-item spot-horz-o'/>
        <Spot {...spots[67]} {...filters} uid={uid} hasspot={hasspot} layout='grid-item spot-horz-o'/>
        <Spot {...spots[60]} {...filters} uid={uid} hasspot={hasspot} layout='grid-item spot-horz-o'/>
        <Spot {...spots[18]} {...filters} uid={uid} hasspot={hasspot} layout='grid-item spot-horz-o'/>
        <div className='grid-item spot-horz-x'>81</div>
        <div className='grid-item spot-horz-x'>75</div>
        <div className='grid-item spot-horz-x'>67</div>
        <Spot {...spots[59]} {...filters} uid={uid} hasspot={hasspot} layout='grid-item spot-horz-o'/>
        <Spot {...spots[19]} {...filters} uid={uid} hasspot={hasspot} layout='grid-item spot-horz-o'/>
        <div className='grid-item spot-horz-x'>80</div>
        <Spot {...spots[73]} {...filters} uid={uid} hasspot={hasspot} layout='grid-item spot-horz-o'/>
        <div className='grid-item spot-horz-x'>66</div>
        <Spot {...spots[58]} {...filters} uid={uid} hasspot={hasspot} layout='grid-item spot-horz-o'/>
        <Spot {...spots[20]} {...filters} uid={uid} hasspot={hasspot} layout='grid-item spot-horz-o'/>
        <div className='grid-item spot-horz-x'>27</div>
        <div className='grid-item spot-horz-x'>79</div>
        <div className='grid-item spot-horz-x'>73</div>
        <div className='grid-item spot-horz-x'>65</div>
        <Spot {...spots[57]} {...filters} uid={uid} hasspot={hasspot} layout='grid-item spot-horz-o'/>
        <Spot {...spots[21]} {...filters} uid={uid} hasspot={hasspot} layout='grid-item spot-horz-o'/>
        <div className='grid-item spot-horz-x'>28</div>
        <div className="grid-item spot-horz-x">p</div>
        <Spot {...spots[71]} {...filters} uid={uid} hasspot={hasspot} layout='grid-item spot-horz-o'/>
        <div className="grid-item spot-horz-x">Technik</div>
        <Spot {...spots[56]} {...filters} uid={uid} hasspot={hasspot} layout='grid-item spot-horz-o'/>
        <Spot {...spots[22]} {...filters} uid={uid} hasspot={hasspot} layout='grid-item spot-horz-o'/>
        <Spot {...spots[28]} {...filters} uid={uid} hasspot={hasspot} layout='grid-item spot-horz-o'/>
        <Spot {...spots[77]} {...filters} uid={uid} hasspot={hasspot} layout='grid-item spot-horz-o'/>
        <Spot {...spots[70]} {...filters} uid={uid} hasspot={hasspot} layout='grid-item spot-horz-o'/>
        <div className="grid-item spot-horz-x">64</div>
        <Spot {...spots[55]} {...filters} uid={uid} hasspot={hasspot} layout='grid-item spot-horz-o'/>
        <Spot {...spots[23]} {...filters} uid={uid} hasspot={hasspot} layout='grid-item spot-horz-o'/>
        <Spot {...spots[29]} {...filters} uid={uid} hasspot={hasspot} layout='grid-item spot-horz-o'/>
        <Spot {...spots[49]} {...filters} uid={uid} hasspot={hasspot} layout='grid-item spot-vert-o'/>
        <Spot {...spots[50]} {...filters} uid={uid} hasspot={hasspot} layout='grid-item spot-vert-o'/>
        <Spot {...spots[51]} {...filters} uid={uid} hasspot={hasspot} layout='grid-item spot-vert-o'/>
        <div className='grid-item spot-vert-x'>53</div>
        <Spot {...spots[76]} {...filters} uid={uid} hasspot={hasspot} layout='grid-item spot-horz-o'/>
        <Spot {...spots[69]} {...filters} uid={uid} hasspot={hasspot} layout='grid-item spot-horz-o'/>
        <div className="grid-item spot-horz-x">63</div>
        <Spot {...spots[54]} {...filters} uid={uid} hasspot={hasspot} layout='grid-item spot-horz-o'/>
        <Spot {...spots[24]} {...filters} uid={uid} hasspot={hasspot} layout='grid-item spot-horz-o'/>
        <div className="grid-item spot-horz-x">31</div>
        <div className="grid-item spot-horz-x">p</div>
        <div className="grid-item spot-horz-x">69</div>
        <Spot {...spots[61]} {...filters} uid={uid} hasspot={hasspot} layout='grid-item spot-horz-o'/>
        <Spot {...spots[53]} {...filters} uid={uid} hasspot={hasspot} layout='grid-item spot-horz-o'/>
        <Spot {...spots[25]} {...filters} uid={uid} hasspot={hasspot} layout='grid-item spot-horz-o'/>
        <Spot {...spots[31]} {...filters} uid={uid} hasspot={hasspot} layout='grid-item spot-horz-o'/>
        <div className="grid-item span-20-1">39</div>
        <Spot {...spots[47]} {...filters} uid={uid} hasspot={hasspot} layout='grid-item spot-vert-o'/>
        <Spot {...spots[46]} {...filters} uid={uid} hasspot={hasspot} layout='grid-item spot-vert-o'/>
        <div className='grid-item spot-vert-x'>46</div>
        <div className='grid-item spot-vert-x'>45</div>
        <Spot {...spots[43]} {...filters} uid={uid} hasspot={hasspot} layout='grid-item spot-vert-o'/>
        <Spot {...spots[42]} {...filters} uid={uid} hasspot={hasspot} layout='grid-item spot-vert-o'/>
        <div className='grid-item spot-vert-x'>42</div>
        <Spot {...spots[40]} {...filters} uid={uid} hasspot={hasspot} layout='grid-item spot-vert-o'/>
        <Spot {...spots[39]} {...filters} uid={uid} hasspot={hasspot} layout='grid-item spot-vert-o'/>
        <Spot {...spots[38]} {...filters} uid={uid} hasspot={hasspot} layout='grid-item spot-vert-o'/>
        <div className='grid-item spot-vert-x'>Au</div>
        <div className='grid-item spot-vert-x'>p</div>
        <Spot {...spots[37]} {...filters} uid={uid} hasspot={hasspot} layout='grid-item spot-vert-o'/>
        <Spot {...spots[36]} {...filters} uid={uid} hasspot={hasspot} layout='grid-item spot-vert-o'/>
        <Spot {...spots[35]} {...filters} uid={uid} hasspot={hasspot} layout='grid-item spot-vert-o'/>
        <Spot {...spots[34]} {...filters} uid={uid} hasspot={hasspot} layout='grid-item spot-vert-o'/>
        <Spot {...spots[33]} {...filters} uid={uid} hasspot={hasspot} layout='grid-item spot-vert-o'/>
        <Spot {...spots[32]} {...filters} uid={uid} hasspot={hasspot} layout='grid-item spot-vert-o'/>
        <div className="grid-item span-2-2">p</div>
    </div>)
    :
    (<div>U2</div>)
)

const mapStateToProps = (state) => {
    return {
        spots: state.spots,
        filters: state.filters,
        uid: state.auth.uid,
        hasspot: state.auth.hasspot
    }
}

export default connect(mapStateToProps)(SpotsList)

